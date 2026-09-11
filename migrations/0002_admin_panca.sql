-- Fondasi "Admin Panca": panel admin custom (login username/password sendiri)
-- terpisah dari Sveltia CMS, khusus untuk hal-hal operasional yang memang
-- butuh state dinamis -- konsisten dengan prinsip skema Penugasan
-- (lihat 0001_init_penugasan.sql): konten TETAP di git, D1 HANYA untuk
-- yang benar-benar butuh runtime state.

CREATE TABLE admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  -- Format: "<iterasi>:<salt_hex>:<hash_hex>" -- PBKDF2-HMAC-SHA256 lewat
  -- Web Crypto (crypto.subtle), salt acak per-user. BEDA dari pola SHA-256
  -- polos yang dipakai untuk PIN (lihat tabel `pins`) -- password butuh
  -- salt+iterasi karena disimpan permanen & jadi satu-satunya penjaga akun,
  -- PIN sengaja lebih ringan karena masanya pendek & memang dibagi ke banyak
  -- orang (bukan rahasia identitas personal).
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  last_login_at TEXT
);

-- PIN dinamis: menggantikan pola lama "satu pinGuruHash ditaruh manual di
-- git lewat Sveltia" -- sekarang guru bisa buat/lihat/cabut PIN kapan saja
-- dari Admin Panca, tanpa commit+tunggu deploy. `scope` membedakan PIN itu
-- buat apa ('rekap' = buka /penugasan/rekap; disiapkan kalau nanti ada
-- kebutuhan PIN lain). `expires_at` WAJIB diisi dan DICEK server-side saat
-- validasi -- beda dari `pinGuruHash` lama yang tanggal "berlaku hingga"-nya
-- cuma hiasan di halaman generator, tidak pernah benar-benar ditegakkan.
CREATE TABLE pins (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL,
  scope TEXT NOT NULL DEFAULT 'rekap',
  pin_hash TEXT NOT NULL,
  created_by INTEGER REFERENCES admin_users(id),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at TEXT NOT NULL,
  revoked_at TEXT
);

CREATE INDEX idx_pins_scope_active ON pins (scope, revoked_at, expires_at);
