// Auth Admin Panca: hashing password (PBKDF2) + cookie session (HMAC).
// Terpisah total dari alur PIN (SHA-256 polos) dan dari login GitHub Sveltia
// -- ini akun sendiri (username/password) khusus panel /admin-panca.

// 100.000 adalah BATAS MAKSIMAL Cloudflare Workers production untuk PBKDF2
// (crypto.subtle.deriveBits) -- di atas itu langsung lempar NotSupportedError.
// JANGAN naikkan angka ini tanpa cek ulang batas itu masih sama. Miniflare
// (wrangler dev / astro dev lokal) TIDAK menegakkan batas ini -- kesalahan
// ini sempat lolos semua tes lokal dan baru ketahuan di production
// (2026-09-11), jadi jangan percaya "sudah dites lokal, pasti aman" untuk
// urusan crypto.subtle di proyek ini.
const PBKDF2_ITERATIONS = 100_000;
const SESSION_TTL_DETIK = 7 * 24 * 60 * 60; // 7 hari

function toHex(bytes: ArrayBuffer | Uint8Array): string {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  return Array.from(arr).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function fromHex(hex: string): Uint8Array {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
  return out;
}

function toBase64Url(bytes: Uint8Array): string {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(s: string): Uint8Array {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(s.length / 4) * 4, '=');
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/** Hash password baru -- dipakai saat buat akun / fitur "ganti password" nanti. */
export async function hashPassword(password: string): Promise<string> {
  const salt = new Uint8Array(16);
  crypto.getRandomValues(salt);
  const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, [
    'deriveBits',
  ]);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    256
  );
  return `${PBKDF2_ITERATIONS}:${toHex(salt)}:${toHex(bits)}`;
}

/** Cocokkan password mentah dengan hash tersimpan (format dari hashPassword). */
export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const bagian = stored.split(':');
  if (bagian.length !== 3) return false;
  const [iterStr, saltHex, hashHex] = bagian;
  const iterations = parseInt(iterStr, 10);
  if (!Number.isFinite(iterations) || iterations <= 0) return false;

  const salt = fromHex(saltHex);
  const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, [
    'deriveBits',
  ]);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations, hash: 'SHA-256' }, keyMaterial, 256);
  // Bandingkan hex hasil vs tersimpan pakai subtle.verify (HMAC) supaya
  // constant-time -- trik: HMAC-kan kedua hash dengan key acak-per-panggilan
  // lalu bandingkan HMAC-nya, bukan compare string langsung (rawan timing attack).
  return constantTimeEqualHex(toHex(bits), hashHex);
}

async function constantTimeEqualHex(a: string, b: string): Promise<boolean> {
  if (a.length !== b.length) return false;
  const key = await crypto.subtle.generateKey({ name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
  const macA = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(a));
  const macB = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(b));
  return toHex(macA) === toHex(macB);
}

export type PayloadSesi = { uid: number; username: string; exp: number };

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [
    'sign',
    'verify',
  ]);
}

/** Buat cookie session baru (belum di-set ke response, cuma string value-nya). */
export async function buatSessionCookie(user: { id: number; username: string }, secret: string): Promise<string> {
  const payload: PayloadSesi = { uid: user.id, username: user.username, exp: Date.now() + SESSION_TTL_DETIK * 1000 };
  const payloadBytes = new TextEncoder().encode(JSON.stringify(payload));
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign('HMAC', key, payloadBytes);
  return `${toBase64Url(payloadBytes)}.${toBase64Url(new Uint8Array(sig))}`;
}

/** Verifikasi cookie session, return payload kalau valid & belum kedaluwarsa, null kalau tidak. */
export async function verifikasiSessionCookie(cookieValue: string, secret: string): Promise<PayloadSesi | null> {
  const titik = cookieValue.indexOf('.');
  if (titik < 0) return null;
  const payloadB64 = cookieValue.slice(0, titik);
  const sigB64 = cookieValue.slice(titik + 1);

  try {
    const payloadBytes = fromBase64Url(payloadB64);
    const sig = fromBase64Url(sigB64);
    const key = await hmacKey(secret);
    const valid = await crypto.subtle.verify('HMAC', key, sig, payloadBytes);
    if (!valid) return null;

    const payload = JSON.parse(new TextDecoder().decode(payloadBytes)) as PayloadSesi;
    if (typeof payload.exp !== 'number' || Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

export const SESSION_COOKIE_NAME = 'panca_session';
export { SESSION_TTL_DETIK };

/**
 * Shortcut ambil+verifikasi sesi langsung dari `cookies` context Astro --
 * dipakai di awal tiap halaman/API route yang butuh login. Terima bentuk
 * structural (bukan import tipe AstroCookies) supaya sama-sama jalan baik
 * dipanggil dari halaman `.astro` maupun API route.
 */
export async function ambilSesi(
  cookies: { get(name: string): { value: string } | undefined },
  secret: string
): Promise<PayloadSesi | null> {
  const raw = cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!raw) return null;
  return verifikasiSessionCookie(raw, secret);
}
