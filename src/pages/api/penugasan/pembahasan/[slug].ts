import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { keSoalPembahasan } from '../../../../lib/penugasan/pembahasan';

// WAJIB on-demand: kunci jawaban lengkap (jawabanBenarId, jawabanBenar,
// urutan asli menyusun-urutan, kategoriBenarId drag-drop) HANYA boleh
// dikirim SETELAH PIN pembahasan dicocokkan DI SINI (server), tidak pernah
// dibawa oleh halaman yang di-prerender statis. `pin` di query string
// adalah HASH yang sudah dihitung di browser (sama seperti pola PIN
// leaderboard di /api/penugasan/leaderboard/[slug].ts) -- server tinggal
// membandingkan string hash-nya, PIN mentah tidak pernah terkirim.
export const prerender = false;

export const GET: APIRoute = async ({ params, url }) => {
  const slug = params.slug;
  const pin = url.searchParams.get('pin') ?? '';

  if (!slug) return json({ error: 'slug wajib diisi' }, 400);

  const entry = await getEntry('penugasan', slug);
  if (!entry) return json({ error: 'Penugasan tidak ditemukan' }, 404);

  if (!entry.data.pembahasanPinHash) {
    return json({ error: 'Pembahasan belum tersedia untuk penugasan ini.' }, 404);
  }

  if (!pin || pin !== entry.data.pembahasanPinHash) {
    return json({ error: 'PIN salah.' }, 403);
  }

  const soal = entry.data.soal.map(keSoalPembahasan);
  return json({ judul: entry.data.judul, soal });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
