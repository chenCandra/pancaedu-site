import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { env } from 'cloudflare:workers';
import { mulaiAttempt } from '../../../lib/penugasan/db';
import { adaSesiAktif, sesiPinValid } from '../../../lib/penugasan/sesi';
import { KELAS_UMUM } from '../../../lib/penugasan/kelas';

// Route ini WAJIB on-demand (bukan prerender) -- mencatat waktu mulai di
// server (bukan dari jam siswa di browser) dan butuh akses D1.
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: { slug?: unknown; nama?: unknown; kelas?: unknown; sesiPin?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Body tidak valid' }, 400);
  }

  const slug = typeof body.slug === 'string' ? body.slug : '';
  const nama = typeof body.nama === 'string' ? body.nama.trim() : '';
  const kelas = typeof body.kelas === 'string' ? body.kelas.trim() : '';
  const sesiPin = typeof body.sesiPin === 'string' ? body.sesiPin.trim() : '';

  if (!slug || !nama || !kelas) {
    return json({ error: 'slug, nama, dan kelas wajib diisi' }, 400);
  }
  if (nama.length > 80 || kelas.length > 20) {
    return json({ error: 'nama/kelas terlalu panjang' }, 400);
  }

  const entry = await getEntry('penugasan', slug);
  if (!entry || entry.data.draft) {
    return json({ error: 'Penugasan tidak ditemukan' }, 404);
  }

  // Kode sesi HANYA wajib kalau guru PERNAH bikin sesi untuk Penugasan ini
  // (lihat migrations/0003_sesi_penugasan.sql) -- Penugasan yang belum
  // pernah dibuatkan sesi (mayoritas) TETAP jalan seperti biasa, tanpa kode.
  // "Umum / Lainnya" SELALU DIKECUALIKAN dari kode sesi, apa pun status
  // sesinya -- jalur itu sengaja dibuka buat siapa saja yang mau coba-coba
  // (bukan siswa yang dilacak guru buat penilaian/remedial), jadi tidak
  // boleh ikut ter-gerbang kode sesi yang sebenarnya ditujukan buat kelas
  // tertentu (kalau tidak, guru yang mengaktifkan sesi remedial untuk SATU
  // kelas malah tanpa sadar mengunci semua pengunjung umum lain juga).
  let sesiId: number | null = null;
  if (kelas !== KELAS_UMUM && (await adaSesiAktif(env.DB, slug))) {
    if (!sesiPin) {
      return json({ error: 'Kode sesi wajib diisi untuk Penugasan ini. Tanya guru kode sesinya.' }, 403);
    }
    const sesi = await sesiPinValid(env.DB, slug, sesiPin);
    if (!sesi) {
      return json({ error: 'Kode sesi salah atau sudah tidak berlaku. Tanya guru kode sesi terbaru.' }, 403);
    }
    sesiId = sesi.id;
  }

  const { attemptId, attemptKe } = await mulaiAttempt(env.DB, { slug, nama, kelas, sesiId });
  // sesiId ikut dibalikkan supaya client bisa arahkan link "Lihat Papan
  // Peringkat" langsung ke sesi yang sama (lihat src/pages/penugasan/[slug].astro)
  // -- siswa yang ikut sesi remedial tidak perlu lihat leaderboard gabungan
  // semua periode, cukup sesi yang baru dia kerjakan.
  return json({ attemptId, attemptKe, sesiId });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
