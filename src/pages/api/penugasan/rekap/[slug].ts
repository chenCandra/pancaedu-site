import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { env } from 'cloudflare:workers';
import { ambilRekapKelas } from '../../../../lib/penugasan/db';

// WAJIB on-demand: digerbangi PIN Guru, dicocokkan ulang di server (sama
// alasannya dengan API leaderboard) -- `slug` di sini adalah id Penugasan
// yang mau direkap, PIN-nya sendiri global (dari penugasanPengaturan),
// BUKAN pinHash milik Penugasan itu.
export const prerender = false;

export const GET: APIRoute = async ({ params, url }) => {
  const slug = params.slug;
  const pin = url.searchParams.get('pin') ?? '';

  if (!slug) return json({ error: 'slug wajib diisi' }, 400);

  const entry = await getEntry('penugasan', slug);
  if (!entry) return json({ error: 'Penugasan tidak ditemukan' }, 404);

  const pengaturan = await getEntry('penugasanPengaturan', 'index');
  const pinGuruHash = pengaturan?.data.pinGuruHash;

  if (!pinGuruHash) {
    return json({ error: 'PIN Guru belum diatur. Buat dulu lewat /penugasan/pin-generator, lalu isi di /admin.' }, 403);
  }
  if (!pin || pin !== pinGuruHash) {
    return json({ error: 'PIN salah' }, 403);
  }

  const rows = await ambilRekapKelas(env.DB, slug);
  return json({ rows });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
