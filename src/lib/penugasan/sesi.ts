import type { D1Database } from '@cloudflare/workers-types';

// Helper query D1 untuk fitur Sesi Penugasan -- PIN OPSIONAL per periode
// pengerjaan (lihat komentar panjang di migrations/0003_sesi_penugasan.sql).
// Dipakai DUA sisi: murid (cek/wajib isi kode sesi saat mulai, lihat
// src/pages/api/penugasan/mulai.ts) dan guru (kelola sesi + filter Laporan
// lewat Admin Panca, lihat src/pages/admin-panca/sesi.astro).
//
// Kode Sesi disimpan APA ADANYA (bukan di-hash) -- lihat
// migrations/0004_sesi_pin_plaintext.sql: ini kode kelas yang memang
// dibagikan terbuka ke banyak murid (bukan kredensial rahasia semacam
// password), dan guru butuh bisa melihatnya lagi kapan saja kalau lupa,
// tanpa perlu cabut & buat sesi baru. Kolom `pin_hash` lama TETAP ADA di
// tabel (skemanya NOT NULL) tapi TIDAK DIPAKAI lagi di sini.

export type SesiPenugasan = {
  id: number;
  penugasan_slug: string;
  label: string;
  pin: string | null; // NULL cuma untuk baris lama (dibuat sebelum migration 0004), lihat komentarnya
  created_by: number | null;
  created_at: string;
  revoked_at: string | null;
};

/**
 * TRUE kalau Penugasan ini punya minimal SATU sesi yang belum dicabut --
 * dipakai buat memutuskan apakah murid WAJIB isi kode sesi atau tidak.
 * Penugasan yang belum pernah dibuatkan sesi sama sekali (mayoritas kasus
 * sekarang) selalu FALSE di sini -- murid mulai seperti biasa, tanpa kode.
 */
export async function adaSesiAktif(db: D1Database, slug: string): Promise<boolean> {
  const row = await db
    .prepare('SELECT id FROM sesi_penugasan WHERE penugasan_slug = ?1 AND revoked_at IS NULL LIMIT 1')
    .bind(slug)
    .first<{ id: number }>();
  return row !== null;
}

/**
 * Cocokkan kode sesi yang diketik murid ke salah satu sesi aktif Penugasan
 * ini -- dibandingkan APA ADANYA (bukan hash), tanpa peduli besar/kecil
 * huruf & spasi di ujung (guru/murid awam IT, jangan terlalu ketat).
 */
export async function sesiPinValid(db: D1Database, slug: string, pin: string): Promise<{ id: number } | null> {
  return db
    .prepare(
      `SELECT id FROM sesi_penugasan
       WHERE penugasan_slug = ?1 AND revoked_at IS NULL AND pin IS NOT NULL AND LOWER(TRIM(pin)) = LOWER(TRIM(?2))
       LIMIT 1`
    )
    .bind(slug, pin)
    .first<{ id: number }>();
}

/** Semua sesi (termasuk yang sudah dicabut) untuk satu Penugasan -- buat halaman kelola sesi & dropdown filter Laporan. */
export async function daftarSesi(db: D1Database, slug: string): Promise<SesiPenugasan[]> {
  const { results } = await db
    .prepare('SELECT * FROM sesi_penugasan WHERE penugasan_slug = ?1 ORDER BY created_at DESC')
    .bind(slug)
    .all<SesiPenugasan>();
  return results ?? [];
}

export async function buatSesi(
  db: D1Database,
  params: { slug: string; label: string; pin: string; createdBy: number }
): Promise<void> {
  // `pin_hash` masih diisi (walau tidak dipakai lagi buat validasi) sekadar
  // memenuhi constraint NOT NULL kolom lama tanpa perlu migration tambahan
  // buat ubah skemanya -- lihat migrations/0004_sesi_pin_plaintext.sql.
  const pinHashVestigial = await sha256Hex(params.pin);
  await db
    .prepare('INSERT INTO sesi_penugasan (penugasan_slug, label, pin_hash, pin, created_by) VALUES (?1, ?2, ?3, ?4, ?5)')
    .bind(params.slug, params.label, pinHashVestigial, params.pin, params.createdBy)
    .run();
}

export async function cabutSesi(db: D1Database, id: number): Promise<void> {
  await db
    .prepare("UPDATE sesi_penugasan SET revoked_at = datetime('now') WHERE id = ?1 AND revoked_at IS NULL")
    .bind(id)
    .run();
}

async function sha256Hex(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('');
}
