import type { D1Database } from '@cloudflare/workers-types';

// Helper query D1 untuk fitur Sesi Penugasan -- PIN OPSIONAL per periode
// pengerjaan (lihat komentar panjang di migrations/0003_sesi_penugasan.sql).
// Dipakai DUA sisi: murid (cek/wajib isi kode sesi saat mulai, lihat
// src/pages/api/penugasan/mulai.ts) dan guru (kelola sesi + filter Laporan
// lewat Admin Panca, lihat src/pages/admin-panca/sesi.astro).

export type SesiPenugasan = {
  id: number;
  penugasan_slug: string;
  label: string;
  pin_hash: string;
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

/** Cocokkan kode sesi (hash) yang diketik murid ke salah satu sesi aktif Penugasan ini. */
export async function sesiPinValid(db: D1Database, slug: string, pinHash: string): Promise<{ id: number } | null> {
  return db
    .prepare('SELECT id FROM sesi_penugasan WHERE penugasan_slug = ?1 AND pin_hash = ?2 AND revoked_at IS NULL LIMIT 1')
    .bind(slug, pinHash)
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
  params: { slug: string; label: string; pinHash: string; createdBy: number }
): Promise<void> {
  await db
    .prepare('INSERT INTO sesi_penugasan (penugasan_slug, label, pin_hash, created_by) VALUES (?1, ?2, ?3, ?4)')
    .bind(params.slug, params.label, params.pinHash, params.createdBy)
    .run();
}

export async function cabutSesi(db: D1Database, id: number): Promise<void> {
  await db
    .prepare("UPDATE sesi_penugasan SET revoked_at = datetime('now') WHERE id = ?1 AND revoked_at IS NULL")
    .bind(id)
    .run();
}
