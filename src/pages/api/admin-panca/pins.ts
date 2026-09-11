import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { ambilSesi } from '../../../lib/adminPanca/auth';
import { daftarPin, buatPin } from '../../../lib/adminPanca/db';

export const prerender = false;

const SCOPE = 'rekap';
const MAKS_HARI_BERLAKU = 186; // ~6 bulan, sama seperti kebijakan lama -- sekarang ditegakkan di server juga

export const GET: APIRoute = async ({ cookies }) => {
  const sesi = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  if (!sesi) return json({ error: 'Belum login.' }, 401);

  const pins = await daftarPin(env.DB, SCOPE);
  return json({ pins });
};

export const POST: APIRoute = async ({ request, cookies }) => {
  const sesi = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  if (!sesi) return json({ error: 'Belum login.' }, 401);

  const body = (await request.json().catch(() => null)) as { label?: string; pinHash?: string; expiresAt?: string } | null;
  const label = body?.label?.trim() ?? '';
  const pinHash = body?.pinHash?.trim() ?? '';
  const expiresAt = body?.expiresAt ?? '';

  if (!label || !pinHash || !expiresAt) return json({ error: 'Label, hash PIN, dan tanggal berlaku wajib diisi.' }, 400);
  if (!/^[0-9a-f]{64}$/i.test(pinHash)) return json({ error: 'Format hash PIN tidak valid.' }, 400);

  const tanggalBerlaku = new Date(`${expiresAt}T23:59:59Z`);
  if (Number.isNaN(tanggalBerlaku.getTime())) return json({ error: 'Tanggal berlaku tidak valid.' }, 400);

  const batasMaks = new Date();
  batasMaks.setDate(batasMaks.getDate() + MAKS_HARI_BERLAKU);
  if (tanggalBerlaku > batasMaks) {
    return json({ error: `PIN maksimal berlaku ${MAKS_HARI_BERLAKU} hari (~6 bulan) dari sekarang.` }, 400);
  }
  if (tanggalBerlaku <= new Date()) {
    return json({ error: 'Tanggal berlaku harus di masa depan.' }, 400);
  }

  await buatPin(env.DB, {
    label,
    scope: SCOPE,
    pinHash: pinHash.toLowerCase(),
    createdBy: sesi.uid,
    expiresAt: tanggalBerlaku.toISOString(),
  });

  return json({ ok: true });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
