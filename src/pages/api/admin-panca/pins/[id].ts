import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { ambilSesi } from '../../../../lib/adminPanca/auth';
import { cabutPin } from '../../../../lib/adminPanca/db';

export const prerender = false;

// POST, bukan DELETE -- form HTML polos (tanpa JS fetch) cuma bisa kirim
// GET/POST, dan tombol "Cabut" di halaman kelola PIN sengaja dibuat bisa
// jalan tanpa JS juga (progressive enhancement, guru awam IT lebih toleran
// ke halaman yang reload biasa daripada yang diam-diam gagal kalau JS error).
export const POST: APIRoute = async ({ params, cookies, redirect }) => {
  const sesi = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  if (!sesi) return json({ error: 'Belum login.' }, 401);

  const id = Number(params.id);
  if (!Number.isInteger(id)) return json({ error: 'ID PIN tidak valid.' }, 400);

  await cabutPin(env.DB, id);
  return redirect('/admin-panca/pin');
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
