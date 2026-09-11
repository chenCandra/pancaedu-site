import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { env } from 'cloudflare:workers';
import { ambilRekapKelas } from '../../../../lib/penugasan/db';
import { pinValid } from '../../../../lib/adminPanca/db';
import { ambilSesi } from '../../../../lib/adminPanca/auth';

// WAJIB on-demand: digerbangi PIN Guru ATAU sesi Admin Panca yang valid,
// dicocokkan ulang di server (sama alasannya dengan API leaderboard) --
// `slug` di sini adalah id Penugasan yang mau direkap. Sesi Admin Panca
// diperiksa DULUAN (guru yang sudah login tidak perlu PIN lagi -- itu
// otentikasi yang lebih kuat) -- PIN cuma fallback untuk yang mengakses
// tanpa akun Admin Panca (mis. dibagikan ke guru lain via /penugasan/rekap
// langsung). PIN-nya sendiri dikelola dinamis lewat Admin Panca (tabel
// `pins`, scope 'rekap') -- BUKAN lagi field statis `pinGuruHash` di
// Sveltia/git (pola lama, sekarang sudah tidak dipakai untuk gating ini).
export const prerender = false;

export const GET: APIRoute = async ({ params, url, cookies }) => {
  const slug = params.slug;
  const pin = (url.searchParams.get('pin') ?? '').toLowerCase();

  if (!slug) return json({ error: 'slug wajib diisi' }, 400);

  const entry = await getEntry('penugasan', slug);
  if (!entry) return json({ error: 'Penugasan tidak ditemukan' }, 404);

  const sesi = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  const pinCocok = pin && /^[0-9a-f]{64}$/.test(pin) && (await pinValid(env.DB, 'rekap', pin));

  if (!sesi && !pinCocok) {
    return json({ error: 'PIN salah, sudah kedaluwarsa, atau sudah dicabut.' }, 403);
  }

  const rows = await ambilRekapKelas(env.DB, slug);
  return json({ rows });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
