import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { env } from 'cloudflare:workers';
import { ambilLeaderboard } from '../../../../lib/penugasan/db';

// WAJIB on-demand: leaderboard di-gate PIN, dan pengecekan PIN harus
// dicocokkan ulang DI SERVER (bukan cuma percaya hash yang sudah dicek
// client-side) -- menutup celah "curl API ini langsung, skip halaman/PIN".
export const prerender = false;

export const GET: APIRoute = async ({ params, url }) => {
  const slug = params.slug;
  const pin = url.searchParams.get('pin') ?? '';

  if (!slug) return json({ error: 'slug wajib diisi' }, 400);

  const entry = await getEntry('penugasan', slug);
  if (!entry) return json({ error: 'Penugasan tidak ditemukan' }, 404);

  if (!pin || pin !== entry.data.pinHash) {
    return json({ error: 'PIN salah' }, 403);
  }

  // PIN yang benar SEKALIPUN ditolak kalau sudah lewat tanggal berlakunya --
  // kebijakan maksimal 6 bulan per PIN (lihat komentar di
  // src/content.config.ts & halaman /penugasan/pin-generator).
  if (new Date() > entry.data.pinBerlakuHingga) {
    return json({ error: 'PIN sudah kedaluwarsa. Minta PIN baru ke guru.' }, 403);
  }

  const rows = await ambilLeaderboard(env.DB, slug);
  return json({ rows });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
