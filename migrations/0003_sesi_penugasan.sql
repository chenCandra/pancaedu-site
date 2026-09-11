-- Sesi Penugasan: PIN per periode/sesi pengerjaan, dibuat OPSIONAL oleh
-- guru per Penugasan lewat Admin Panca. Kalau sebuah Penugasan BELUM
-- pernah dibuatkan sesi sama sekali, murid tetap mulai seperti biasa
-- (nama+kelas saja, TANPA kode) -- fitur ini TIDAK BOLEH mengganggu
-- Penugasan yang sudah berjalan (lihat pengecekan "ada sesi aktif?" di
-- src/pages/api/penugasan/mulai.ts). Begitu guru bikin sesi PERTAMA untuk
-- suatu Penugasan, barulah murid WAJIB isi kode sesi buat mulai -- dipakai
-- kalau guru mau pisahkan hasil "pengerjaan awal" vs "remedial" untuk soal
-- yang SAMA, supaya bisa difilter terpisah di Laporan Belajar Daring.
CREATE TABLE sesi_penugasan (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  penugasan_slug TEXT NOT NULL,
  label TEXT NOT NULL,
  pin_hash TEXT NOT NULL,
  created_by INTEGER REFERENCES admin_users(id),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  revoked_at TEXT
);

CREATE INDEX idx_sesi_penugasan_slug ON sesi_penugasan (penugasan_slug, revoked_at);

-- Nullable dengan sengaja -- attempt lama (sebelum fitur ini ada) dan
-- attempt pada Penugasan yang tidak pernah dibuatkan sesi tetap sah,
-- masuk ke "kelompok tanpa sesi" (sesi_id IS NULL) di Laporan.
ALTER TABLE attempts ADD COLUMN sesi_id INTEGER REFERENCES sesi_penugasan(id);
CREATE INDEX idx_attempts_sesi ON attempts (sesi_id);
