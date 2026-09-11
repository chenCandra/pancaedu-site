import type { D1Database } from '@cloudflare/workers-types';
import type { HasilSoal } from './types';

// Helper query D1 buat fitur Penugasan. Binding `DB` diakses lewat
// `import { env } from 'cloudflare:workers'` di tiap API route (BUKAN
// `Astro.locals.runtime.env` -- pola itu sudah dihapus di Astro v6+ /
// @astrojs/cloudflare versi yang dipakai repo ini).

export async function mulaiAttempt(
  db: D1Database,
  params: { slug: string; nama: string; kelas: string; sesiId?: number | null }
) {
  // Dihitung SEBELUM insert baris baru -- "percobaan ke-N" ditentukan dari
  // jumlah attempt (nama+kelas persis sama, cocok konvensi pengelompokan
  // yang sama dipakai leaderboard) yang SUDAH ada sebelum attempt ini,
  // ditambah 1. Dihitung dari SEMUA baris (termasuk yang belum selesai),
  // bukan cuma yang selesai -- kalau siswa mulai lalu tinggal pergi, itu
  // tetap "sudah pernah mencoba", bukan seolah tidak pernah terjadi.
  // SENGAJA lintas-sesi (bukan dihitung ulang per sesi) -- "percobaan ke-3"
  // tetap percobaan ke-3 siswa itu buat Penugasan ini, terlepas dia pindah
  // sesi/remedial atau tidak.
  const hitung = await db
    .prepare('SELECT COUNT(*) AS jumlah FROM attempts WHERE penugasan_slug = ?1 AND nama = ?2 AND kelas = ?3')
    .bind(params.slug, params.nama, params.kelas)
    .first<{ jumlah: number }>();
  const attemptKe = (hitung?.jumlah ?? 0) + 1;

  const result = await db
    .prepare('INSERT INTO attempts (penugasan_slug, nama, kelas, sesi_id) VALUES (?1, ?2, ?3, ?4) RETURNING id')
    .bind(params.slug, params.nama, params.kelas, params.sesiId ?? null)
    .first<{ id: number }>();
  if (!result) throw new Error('Gagal membuat attempt baru');
  return { attemptId: result.id, attemptKe };
}

export async function simpanHasil(
  db: D1Database,
  params: { attemptId: number; hasil: HasilSoal[]; jawabanMentah: Record<string, unknown> }
) {
  const skor = params.hasil.reduce((total, h) => total + h.skor, 0);
  const skorMaks = params.hasil.reduce((total, h) => total + h.skorMaks, 0);

  const statements = [
    db
      .prepare('UPDATE attempts SET selesai_at = datetime(\'now\'), skor = ?1, skor_maks = ?2 WHERE id = ?3')
      .bind(skor, skorMaks, params.attemptId),
    ...params.hasil.map((h) =>
      db
        .prepare('INSERT INTO jawaban (attempt_id, soal_id, jawaban_json, benar, skor) VALUES (?1, ?2, ?3, ?4, ?5)')
        .bind(
          params.attemptId,
          h.soalId,
          JSON.stringify(params.jawabanMentah[h.soalId] ?? null),
          h.benar ? 1 : 0,
          h.skor
        )
    ),
  ];
  await db.batch(statements);

  return { skor, skorMaks };
}

export type BarisLeaderboard = {
  nama: string;
  kelas: string;
  skorTerbaik: number;
  skorMaks: number;
  durasiDetik: number;
  // Percobaan ke berapa (urutan kronologis attempt siswa itu SENDIRI,
  // 1 = pertama kali) yang menghasilkan skor terbaik ini -- supaya
  // leaderboard tidak cuma bilang "Budi #1", tapi bisa juga "Budi #1
  // (percobaan ke-2)".
  percobaanKe: number;
};

export async function ambilLeaderboard(
  db: D1Database,
  slug: string,
  // undefined = semua attempt digabung (perilaku lama, dan tetap default
  // buat Penugasan yang tidak pakai Sesi sama sekali) -- number = satu sesi
  // tertentu -- 'tanpa-sesi' = HANYA attempt SEBELUM Penugasan ini punya
  // sesi apa pun. Lihat komentar `ambilLaporanSiswa` di
  // src/lib/adminPanca/db.ts untuk alasan yang sama persis -- begitu
  // Penugasan dipakai buat remedial, leaderboard yang menggabung semua
  // periode jadi membingungkan (skor lama & baru, kelas lain yang pernah
  // iseng coba, tercampur semua).
  sesiFilter?: number | 'tanpa-sesi'
): Promise<BarisLeaderboard[]> {
  const klausaSesi =
    typeof sesiFilter === 'number' ? 'AND sesi_id = ?2' : sesiFilter === 'tanpa-sesi' ? 'AND sesi_id IS NULL' : '';
  const bindings: (string | number)[] = typeof sesiFilter === 'number' ? [slug, sesiFilter] : [slug];

  // "Attempt terbaik" seorang siswa = SATU baris attempt yang sama (bukan
  // MAX(skor) dan MIN(waktu) dari attempt yang beda-beda -- itu bisa
  // mencampur skor dari percobaan A dengan waktu dari percobaan B, yang
  // menyesatkan). Dipilih pakai window function: per (nama, kelas), urutkan
  // attempt-nya dari skor tertinggi, lalu (kalau skor sama) durasi
  // tercepat -- ambil satu urutan teratas (rn = 1). Durasi dihitung dari
  // selisih selesai_at - mulai_at (detik), dipakai buat opsi sortir
  // "Paling Cepat" di UI (selain "Paling Tepat"/skor yang sudah ada).
  // `percobaan_ke` dihitung TERPISAH dari SEMUA attempt siswa itu (bukan
  // cuma yang selesai, dan LINTAS SESI -- bukan cuma sesi yang difilter)
  // diurutkan dari yang paling awal -- konsisten dengan cara
  // `mulaiAttempt()` menghitung "Percobaan ke-N" yang dilihat siswa sendiri
  // saat mengerjakan.
  const { results } = await db
    .prepare(
      `WITH semua_attempt AS (
         SELECT *, ROW_NUMBER() OVER (
           PARTITION BY nama, kelas
           ORDER BY mulai_at ASC
         ) AS percobaan_ke
         FROM attempts
         WHERE penugasan_slug = ?1
       ),
       selesai AS (
         SELECT *, (julianday(selesai_at) - julianday(mulai_at)) * 86400 AS durasi_detik
         FROM semua_attempt
         WHERE selesai_at IS NOT NULL ${klausaSesi}
       ),
       peringkat AS (
         SELECT *, ROW_NUMBER() OVER (
           PARTITION BY nama, kelas
           ORDER BY skor DESC, durasi_detik ASC
         ) AS rn
         FROM selesai
       )
       SELECT nama, kelas, skor AS skorTerbaik, skor_maks AS skorMaks,
              CAST(ROUND(durasi_detik) AS INTEGER) AS durasiDetik,
              percobaan_ke AS percobaanKe
       FROM peringkat
       WHERE rn = 1
       ORDER BY skorTerbaik DESC, durasiDetik ASC
       LIMIT 100`
    )
    .bind(...bindings)
    .all<BarisLeaderboard>();
  return results;
}

export type BarisRekapKelas = {
  kelas: string;
  jumlahSiswa: number;
  rataRata: number;
  skorTertinggi: number;
  skorMaks: number;
};

export async function ambilRekapKelas(db: D1Database, slug: string): Promise<BarisRekapKelas[]> {
  // Dasarnya SAMA PERSIS dengan ambilLeaderboard (satu attempt terbaik per
  // siswa, bukan campur-campur) -- bedanya di sini diagregasi per KELAS
  // (buat rekap guru), bukan ditampilkan per siswa (buat leaderboard).
  const { results } = await db
    .prepare(
      `WITH selesai AS (
         SELECT *, (julianday(selesai_at) - julianday(mulai_at)) * 86400 AS durasi_detik
         FROM attempts
         WHERE penugasan_slug = ?1 AND selesai_at IS NOT NULL
       ),
       peringkat AS (
         SELECT *, ROW_NUMBER() OVER (
           PARTITION BY nama, kelas
           ORDER BY skor DESC, durasi_detik ASC
         ) AS rn
         FROM selesai
       ),
       terbaik AS (
         SELECT * FROM peringkat WHERE rn = 1
       )
       SELECT kelas,
              COUNT(*) AS jumlahSiswa,
              ROUND(AVG(skor), 1) AS rataRata,
              MAX(skor) AS skorTertinggi,
              MAX(skor_maks) AS skorMaks
       FROM terbaik
       GROUP BY kelas
       ORDER BY kelas ASC`
    )
    .bind(slug)
    .all<BarisRekapKelas>();
  return results;
}
