import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getEntry } from 'astro:content';
import { ambilSesi } from '../../../lib/adminPanca/auth';
import { daftarSesi, buatSesi } from '../../../lib/penugasan/sesi';
import { buatPin } from '../../../lib/adminPanca/db';

export const prerender = false;

// Sama batasnya seperti /api/admin-panca/pins.ts (scope 'rekap') -- dipakai
// juga di sini untuk PIN leaderboard yang dibuat bareng Sesi, supaya
// kebijakan "maksimal ~6 bulan" konsisten di semua jenis PIN di situs ini.
const MAKS_HARI_BERLAKU_LEADERBOARD = 186;

async function sha256Hex(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

export const GET: APIRoute = async ({ url, cookies }) => {
  const admin = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  if (!admin) return json({ error: 'Belum login.' }, 401);

  const slug = url.searchParams.get('slug') ?? '';
  if (!slug) return json({ error: 'slug wajib diisi' }, 400);

  const sesi = await daftarSesi(env.DB, slug);
  return json({ sesi });
};

export const POST: APIRoute = async ({ request, cookies }) => {
  const admin = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  if (!admin) return json({ error: 'Belum login.' }, 401);

  const body = (await request.json().catch(() => null)) as
    | { slug?: string; label?: string; pin?: string; leaderboardPin?: string }
    | null;
  const slug = body?.slug?.trim() ?? '';
  const label = body?.label?.trim() ?? '';
  const pin = body?.pin?.trim() ?? '';
  // Opsional -- kalau diisi, PIN leaderboard Penugasan ini SEKALIAN dibuat
  // bareng Sesi (satu form, dua aksi), supaya guru tidak perlu bolak-balik
  // ke halaman lain cuma buat menyetel PIN leaderboard secara terpisah.
  // Kosongkan kalau tidak ingin mengubah PIN leaderboard yang sudah ada.
  const leaderboardPin = body?.leaderboardPin?.trim() ?? '';

  if (!slug || !label || !pin) return json({ error: 'Penugasan, label, dan kode sesi wajib diisi.' }, 400);
  if (pin.length > 60) return json({ error: 'Kode sesi terlalu panjang (maksimal 60 karakter).' }, 400);
  if (leaderboardPin.length > 60) return json({ error: 'PIN leaderboard terlalu panjang (maksimal 60 karakter).' }, 400);

  const entry = await getEntry('penugasan', slug);
  if (!entry) return json({ error: 'Penugasan tidak ditemukan.' }, 404);

  await buatSesi(env.DB, { slug, label, pin, createdBy: admin.uid });

  if (leaderboardPin) {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + MAKS_HARI_BERLAKU_LEADERBOARD);
    await buatPin(env.DB, {
      label: `Leaderboard — ${label}`,
      scope: `leaderboard:${slug}`,
      pinHash: await sha256Hex(leaderboardPin),
      pin: leaderboardPin,
      createdBy: admin.uid,
      expiresAt: expiresAt.toISOString(),
    });
  }

  return json({ ok: true });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
