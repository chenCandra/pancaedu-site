-- Hitungan view per halaman materi/artikel -- dipakai section Spotlight di
-- homepage buat nampilin konten yang paling banyak dibaca. Cuma menyimpan
-- slug + kategori + angka hitungan, TIDAK ADA data pengunjung sama sekali
-- (tidak ada IP, user-agent, atau identitas apa pun) -- selaras kebijakan
-- privasi situs.
CREATE TABLE page_views (
  slug TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  views INTEGER NOT NULL DEFAULT 0
);
