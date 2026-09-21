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

/**
 * Hapus SEMUA attempt (+ jawaban terkait) satu siswa untuk satu Penugasan --
 * dipakai Admin Panca buat bersihkan data iseng/spam (mis. nama becandaan,
 * atau typo yang bikin data "siswa" ganda). `jawaban` dihapus manual lewat
 * subquery LEBIH DULU (bukan mengandalkan ON DELETE CASCADE begitu saja)
 * supaya tetap benar apa pun status PRAGMA foreign_keys di runtime D1.
 * Return jumlah attempt yang terhapus (0 kalau memang tidak ada -- BUKAN
 * error, mis. karena sudah kepencet hapus duluan di tab lain).
 */
export async function hapusAttemptSiswa(
  db: D1Database,
  params: { slug: string; kelas: string; nama: string }
): Promise<number> {
  const idRows = await db
    .prepare('SELECT id FROM attempts WHERE penugasan_slug = ?1 AND kelas = ?2 AND nama = ?3')
    .bind(params.slug, params.kelas, params.nama)
    .all<{ id: number }>();
  const ids = (idRows.results ?? []).map((r) => r.id);
  if (ids.length === 0) return 0;

  const placeholder = ids.map((_, i) => `?${i + 1}`).join(',');
  await db.batch([
    db.prepare(`DELETE FROM jawaban WHERE attempt_id IN (${placeholder})`).bind(...ids),
    db.prepare(`DELETE FROM attempts WHERE id IN (${placeholder})`).bind(...ids),
  ]);
  return ids.length;
}

/**
 * Hapus SEMUA attempt (+ jawaban) untuk satu (Penugasan, Kelas) sekaligus
 * -- versi massal `hapusAttemptSiswa`, buat bersihkan spam banyak orang
 * sekaligus (mis. kelas "Umum / Lainnya" kebanjiran iseng). `sesiFilter`
 * opsional -- kalau diisi, cuma hapus attempt di sesi itu (atau yang
 * TANPA sesi sama sekali kalau 'tanpa-sesi'), bukan seluruh kelas lintas
 * sesi -- supaya bersih-bersih tidak sengaja kena data sesi lain yang
 * masih valid. Return jumlah attempt yang terhapus.
 */
export async function hapusAttemptKelas(
  db: D1Database,
  params: { slug: string; kelas: string; sesiFilter?: number | 'tanpa-sesi' }
): Promise<number> {
  const klausaSesi =
    typeof params.sesiFilter === 'number'
      ? 'AND sesi_id = ?3'
      : params.sesiFilter === 'tanpa-sesi'
        ? 'AND sesi_id IS NULL'
        : '';
  const bindings: (string | number)[] =
    typeof params.sesiFilter === 'number' ? [params.slug, params.kelas, params.sesiFilter] : [params.slug, params.kelas];

  const idRows = await db
    .prepare(`SELECT id FROM attempts WHERE penugasan_slug = ?1 AND kelas = ?2 ${klausaSesi}`)
    .bind(...bindings)
    .all<{ id: number }>();
  const ids = (idRows.results ?? []).map((r) => r.id);
  if (ids.length === 0) return 0;

  const placeholder = ids.map((_, i) => `?${i + 1}`).join(',');
  await db.batch([
    db.prepare(`DELETE FROM jawaban WHERE attempt_id IN (${placeholder})`).bind(...ids),
    db.prepare(`DELETE FROM attempts WHERE id IN (${placeholder})`).bind(...ids),
  ]);
  return ids.length;
}

/**
 * Simpan hasil penilaian ke `attempts` (+ baris `jawaban` per soal).
 *
 * KEAMANAN -- attemptId dikirim balik ke browser sebagai integer polos saat
 * /mulai (bukan token rahasia), jadi TIDAK BOLEH dipercaya begitu saja buat
 * menentukan attempt MANA yang di-update. Klausa WHERE di bawah WAJIB
 * menyertakan nama+kelas (harus cocok dengan attempt yang bersangkutan,
 * dicatat sendiri saat /mulai) DAN selesai_at IS NULL (attempt itu belum
 * pernah dinilai) -- tanpa ini, siapa pun yang menebak/enumerasi attemptId
 * kecil (1, 2, 3, ...) bisa menimpa skor attempt MILIK ORANG LAIN, bahkan
 * yang sudah selesai sekalipun. Kalau UPDATE ini tidak kena baris apa pun
 * (attemptId tidak ada / bukan milik nama+kelas ini / sudah pernah selesai),
 * batalkan seluruhnya -- TIDAK insert baris `jawaban` apa pun -- dan
 * lempar error supaya pemanggil (API route) bisa balas 409, bukan
 * berpura-pura berhasil.
 */
export async function simpanHasil(
  db: D1Database,
  params: {
    attemptId: number;
    nama: string;
    kelas: string;
    hasil: HasilSoal[];
    jawabanMentah: Record<string, unknown>;
  }
) {
  const skor = params.hasil.reduce((total, h) => total + h.skor, 0);
  const skorMaks = params.hasil.reduce((total, h) => total + h.skorMaks, 0);

  const statements = [
    db
      .prepare(
        `UPDATE attempts SET selesai_at = datetime('now'), skor = ?1, skor_maks = ?2
         WHERE id = ?3 AND nama = ?4 AND kelas = ?5 AND selesai_at IS NULL`
      )
      .bind(skor, skorMaks, params.attemptId, params.nama, params.kelas),
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
  const results = await db.batch(statements);

  // results[0] = hasil statement UPDATE di atas -- meta.changes = 0 berarti
  // TIDAK ADA baris yang cocok (bukan attempt ini, atau sudah selesai
  // sebelumnya). D1 tetap mengeksekusi seluruh batch meski UPDATE-nya nol
  // baris (batch bukan transaksi atomik dgn rollback otomatis di sini),
  // jadi baris `jawaban` di atas TERLANJUR ter-insert -- bersihkan lagi
  // supaya tidak ada sampah `jawaban` yatim yang menempel ke attempt orang
  // lain/attempt yang sudah final.
  const updateBerhasil = (results[0]?.meta?.changes ?? 0) > 0;
  if (!updateBerhasil) {
    await db
      .prepare('DELETE FROM jawaban WHERE attempt_id = ?1 AND soal_id IN (' + params.hasil.map((_, i) => `?${i + 2}`).join(',') + ')')
      .bind(params.attemptId, ...params.hasil.map((h) => h.soalId))
      .run();
    throw new AttemptTidakValidError();
  }

  return { skor, skorMaks };
}

/** Dilempar simpanHasil() kalau attemptId tidak ditemukan, bukan milik nama+kelas yang diklaim, atau sudah pernah dinilai sebelumnya. */
export class AttemptTidakValidError extends Error {
  constructor() {
    super('Attempt tidak ditemukan, bukan milikmu, atau sudah pernah dinilai sebelumnya.');
    this.name = 'AttemptTidakValidError';
  }
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
