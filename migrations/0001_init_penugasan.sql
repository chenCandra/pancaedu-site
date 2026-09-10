-- Skema awal fitur Penugasan (kuis interaktif mandiri, bukan Wayground/Form).
-- Prinsip: konten soal (termasuk kunci jawaban) TETAP di content collection
-- `penugasan` (git, lihat src/content.config.ts) -- D1 di sini HANYA
-- menyimpan data yang memang harus dinamis: siapa mengerjakan, kapan,
-- jawaban apa, dan skornya. Ini menjaga prinsip situs "statis + git-tracked
-- sebisa mungkin" tetap berlaku sejauh mungkin, D1 cuma dipakai untuk
-- bagian yang benar-benar butuh runtime state.

CREATE TABLE attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  penugasan_slug TEXT NOT NULL,
  nama TEXT NOT NULL,
  kelas TEXT NOT NULL,
  mulai_at TEXT NOT NULL DEFAULT (datetime('now')),
  selesai_at TEXT,
  skor INTEGER,
  skor_maks INTEGER
);

CREATE TABLE jawaban (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  attempt_id INTEGER NOT NULL REFERENCES attempts(id) ON DELETE CASCADE,
  soal_id TEXT NOT NULL,
  jawaban_json TEXT NOT NULL,
  benar INTEGER NOT NULL,
  skor INTEGER NOT NULL
);

-- Leaderboard = skor TERBAIK per siswa (bukan percobaan terakhir), supaya
-- ranking tidak turun cuma karena siswa mencoba ulang (percobaan berkali-
-- kali sengaja dibolehkan -- ini latihan formatif, bukan penilaian resmi).
CREATE INDEX idx_attempts_leaderboard ON attempts (penugasan_slug, skor DESC, selesai_at ASC);
CREATE INDEX idx_attempts_slug_student ON attempts (penugasan_slug, nama, kelas);
CREATE INDEX idx_jawaban_attempt ON jawaban (attempt_id);
