// Tipe bersama fitur Penugasan. Dua "sisi" yang HARUS dijaga terpisah:
//
// - `SoalRahasia` (dari astro:content, CollectionEntry<'penugasan'>.data.soal[number])
//   berisi kunci jawaban -- HANYA boleh dipegang server-side (API route
//   penilaian).
// - `SoalTampilan` (tipe di bawah) adalah versi yang SUDAH DIBUANG semua
//   field kunci jawabannya -- ini yang boleh dikirim ke browser/komponen.
//
// Lihat komentar panjang di src/content.config.ts (collection `penugasan`)
// untuk alasan lengkapnya.

export type OpsiTeks = { id: string; teks: string };
export type PasanganTampilan = { id: string; kiri: string; kanan: string };
export type ItemTampilan = { id: string; teks: string };
export type KategoriTampilan = { id: string; label: string };

export type SoalTampilan =
  | { tipe: 'pilihan-ganda'; id: string; soal: string; pilihan: OpsiTeks[]; skor: number }
  | { tipe: 'benar-salah'; id: string; soal: string; skor: number }
  | { tipe: 'isian-singkat'; id: string; soal: string; angka: boolean; skor: number }
  | { tipe: 'menjodohkan'; id: string; soal: string; kiri: ItemTampilan[]; kanan: ItemTampilan[]; skor: number }
  | { tipe: 'menyusun-urutan'; id: string; soal: string; item: ItemTampilan[]; skor: number }
  | { tipe: 'drag-drop'; id: string; soal: string; kategori: KategoriTampilan[]; item: ItemTampilan[]; skor: number };

// Bentuk jawaban yang dikirim siswa per tipe soal -- dipakai di client
// (src/scripts/penugasan/ambil-jawaban.ts) DAN server (src/lib/penugasan/grading.ts),
// jadi kontraknya harus sama persis di dua sisi.
export type JawabanSoal =
  | { soalId: string; tipe: 'pilihan-ganda'; pilihanId: string | null }
  | { soalId: string; tipe: 'benar-salah'; nilai: boolean | null }
  | { soalId: string; tipe: 'isian-singkat'; teks: string }
  | { soalId: string; tipe: 'menjodohkan'; pasangan: { kiriId: string; kananId: string }[] }
  | { soalId: string; tipe: 'menyusun-urutan'; urutanId: string[] }
  | { soalId: string; tipe: 'drag-drop'; penempatan: { itemId: string; kategoriId: string }[] };

export type HasilSoal = {
  soalId: string;
  benar: boolean;
  skor: number;
  skorMaks: number;
  penjelasan?: string;
};
