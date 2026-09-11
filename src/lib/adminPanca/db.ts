import type { D1Database } from '@cloudflare/workers-types';

// Helper query D1 untuk Admin Panca (admin_users + pins). Pola sama seperti
// src/lib/penugasan/db.ts -- binding `DB` diakses di pemanggil lewat
// `import { env } from 'cloudflare:workers'`.

export type AdminUser = {
  id: number;
  username: string;
  password_hash: string;
  created_at: string;
  last_login_at: string | null;
};

export async function cariUserByUsername(db: D1Database, username: string): Promise<AdminUser | null> {
  return db.prepare('SELECT * FROM admin_users WHERE username = ?1').bind(username).first<AdminUser>();
}

export async function catatLoginSukses(db: D1Database, userId: number): Promise<void> {
  await db.prepare("UPDATE admin_users SET last_login_at = datetime('now') WHERE id = ?1").bind(userId).run();
}

export async function gantiPassword(db: D1Database, userId: number, passwordHashBaru: string): Promise<void> {
  await db.prepare('UPDATE admin_users SET password_hash = ?1 WHERE id = ?2').bind(passwordHashBaru, userId).run();
}

export type Pin = {
  id: number;
  label: string;
  scope: string;
  pin_hash: string;
  created_by: number | null;
  created_at: string;
  expires_at: string;
  revoked_at: string | null;
};

/** Semua PIN (termasuk yang sudah kedaluwarsa/dicabut) untuk satu scope -- buat halaman kelola PIN. */
export async function daftarPin(db: D1Database, scope: string): Promise<Pin[]> {
  const { results } = await db
    .prepare('SELECT * FROM pins WHERE scope = ?1 ORDER BY created_at DESC')
    .bind(scope)
    .all<Pin>();
  return results ?? [];
}

export async function buatPin(
  db: D1Database,
  params: { label: string; scope: string; pinHash: string; createdBy: number; expiresAt: string }
): Promise<void> {
  await db
    .prepare('INSERT INTO pins (label, scope, pin_hash, created_by, expires_at) VALUES (?1, ?2, ?3, ?4, ?5)')
    .bind(params.label, params.scope, params.pinHash, params.createdBy, params.expiresAt)
    .run();
}

export async function cabutPin(db: D1Database, id: number): Promise<void> {
  await db.prepare("UPDATE pins SET revoked_at = datetime('now') WHERE id = ?1 AND revoked_at IS NULL").bind(id).run();
}

/**
 * PIN dianggap sah kalau: scope cocok, hash cocok, BELUM dicabut, dan BELUM
 * lewat expires_at (dicek di server, bukan cuma dibatasi tanggal picker di
 * UI seperti pola pinGuruHash lama). Bisa ada lebih dari satu PIN aktif
 * sekaligus untuk satu scope (mis. kalau mau bikin PIN baru sebelum yang
 * lama expired, tanpa perlu buru-buru cabut yang lama duluan).
 */
export async function pinValid(db: D1Database, scope: string, pinHash: string): Promise<boolean> {
  const row = await db
    .prepare(
      `SELECT id FROM pins
       WHERE scope = ?1 AND pin_hash = ?2 AND revoked_at IS NULL AND expires_at > datetime('now')
       LIMIT 1`
    )
    .bind(scope, pinHash)
    .first<{ id: number }>();
  return row !== null;
}

export type BarisRekapLintas = {
  penugasanSlug: string;
  kelas: string;
  jumlahSiswa: number;
  rataRata: number;
  skorTertinggi: number;
  skorMaks: number;
};

/**
 * Sama seperti ambilRekapKelas (src/lib/penugasan/db.ts) TAPI untuk SEMUA
 * penugasan sekaligus, dikelompokkan per (penugasan_slug, kelas) -- dipakai
 * halaman Rekap Lintas Penugasan supaya guru tidak perlu pilih satu-satu
 * tugas dari dropdown. Judul/mapel tiap penugasan digabung di pemanggil
 * (dari content collection `penugasan`, bukan di query ini -- D1 cuma tahu
 * slug-nya).
 */
export type BarisLaporanSiswa = {
  nama: string;
  jumlahPercobaan: number;
  mulaiPertama: string;
  pernahSelesai: 0 | 1;
  skorTerbaik: number | null;
  skorMaks: number | null;
  durasiDetik: number | null;
};

/**
 * SATU baris per siswa yang PERNAH mulai attempt (bahkan yang belum selesai
 * ikut muncul, `pernahSelesai=0` & skor null) -- dasar Laporan Belajar
 * Daring. BEDA dari ambilRekapKelas/ambilLeaderboard yang HANYA menghitung
 * attempt yang sudah selesai; laporan butuh tahu juga siapa yang "mulai
 * tapi tidak menyelesaikan", bukan cuma diam-diam hilang dari daftar.
 * Siswa yang SAMA SEKALI tidak pernah mulai (0 baris attempts) TIDAK ada di
 * sini -- pemanggil yang gabungkan dengan roster kelas (`daftarKelas`) buat
 * dapat baris "belum mulai sama sekali".
 */
export async function ambilLaporanSiswa(db: D1Database, slug: string, kelas: string): Promise<BarisLaporanSiswa[]> {
  const { results } = await db
    .prepare(
      `WITH semua_attempt AS (
         SELECT *, (julianday(selesai_at) - julianday(mulai_at)) * 86400 AS durasi_detik
         FROM attempts
         WHERE penugasan_slug = ?1 AND kelas = ?2
       ),
       peringkat_selesai AS (
         SELECT *, ROW_NUMBER() OVER (
           PARTITION BY nama
           ORDER BY skor DESC, durasi_detik ASC
         ) AS rn
         FROM semua_attempt
         WHERE selesai_at IS NOT NULL
       ),
       terbaik_selesai AS (
         SELECT * FROM peringkat_selesai WHERE rn = 1
       ),
       ringkasan AS (
         SELECT nama,
                COUNT(*) AS jumlahPercobaan,
                MIN(mulai_at) AS mulaiPertama,
                MAX(CASE WHEN selesai_at IS NOT NULL THEN 1 ELSE 0 END) AS pernahSelesai
         FROM semua_attempt
         GROUP BY nama
       )
       SELECT r.nama, r.jumlahPercobaan, r.mulaiPertama, r.pernahSelesai,
              t.skor AS skorTerbaik, t.skor_maks AS skorMaks, t.durasi_detik AS durasiDetik
       FROM ringkasan r
       LEFT JOIN terbaik_selesai t ON t.nama = r.nama
       ORDER BY r.nama ASC`
    )
    .bind(slug, kelas)
    .all<BarisLaporanSiswa>();
  return results ?? [];
}

export async function ambilRekapSemuaPenugasan(db: D1Database): Promise<BarisRekapLintas[]> {
  const { results } = await db
    .prepare(
      `WITH selesai AS (
         SELECT *, (julianday(selesai_at) - julianday(mulai_at)) * 86400 AS durasi_detik
         FROM attempts
         WHERE selesai_at IS NOT NULL
       ),
       peringkat AS (
         SELECT *, ROW_NUMBER() OVER (
           PARTITION BY penugasan_slug, nama, kelas
           ORDER BY skor DESC, durasi_detik ASC
         ) AS rn
         FROM selesai
       ),
       terbaik AS (
         SELECT * FROM peringkat WHERE rn = 1
       )
       SELECT penugasan_slug AS penugasanSlug,
              kelas,
              COUNT(*) AS jumlahSiswa,
              ROUND(AVG(skor), 1) AS rataRata,
              MAX(skor) AS skorTertinggi,
              MAX(skor_maks) AS skorMaks
       FROM terbaik
       GROUP BY penugasan_slug, kelas
       ORDER BY penugasan_slug ASC, kelas ASC`
    )
    .all<BarisRekapLintas>();
  return results ?? [];
}
