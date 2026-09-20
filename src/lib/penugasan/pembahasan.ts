import type { CollectionEntry } from 'astro:content';
import type { OpsiTeks, PasanganTampilan, ItemTampilan, KategoriTampilan } from './types';

type SoalRahasia = CollectionEntry<'penugasan'>['data']['soal'][number];

// Kebalikan dari keSoalTampilan() di tampilan.ts -- di SINI kunci jawaban
// SENGAJA disertakan, karena inilah tepatnya yang dibutuhkan halaman
// Pembahasan (kunci jawaban + penjelasan tiap soal). Hanya boleh dipanggil
// di API route yang sudah memverifikasi PIN pembahasan server-side
// (src/pages/api/penugasan/pembahasan/[slug].ts) -- JANGAN PERNAH dipanggil
// dari halaman yang di-prerender statis atau dikirim ke browser tanpa
// gerbang PIN itu.
export type SoalPembahasan =
  | { tipe: 'pilihan-ganda'; id: string; soal: string; pilihan: OpsiTeks[]; jawabanBenarId: string; penjelasan?: string; skor: number }
  | { tipe: 'benar-salah'; id: string; soal: string; jawabanBenar: boolean; penjelasan?: string; skor: number }
  | { tipe: 'isian-singkat'; id: string; soal: string; angka: boolean; jawabanBenar: string[]; penjelasan?: string; skor: number }
  | { tipe: 'menjodohkan'; id: string; soal: string; pasangan: PasanganTampilan[]; penjelasan?: string; skor: number }
  | { tipe: 'menyusun-urutan'; id: string; soal: string; item: ItemTampilan[]; penjelasan?: string; skor: number }
  | {
      tipe: 'drag-drop';
      id: string;
      soal: string;
      kategori: KategoriTampilan[];
      item: (ItemTampilan & { kategoriBenarId: string })[];
      penjelasan?: string;
      skor: number;
    };

export function keSoalPembahasan(soal: SoalRahasia): SoalPembahasan {
  switch (soal.tipe) {
    case 'pilihan-ganda':
      return {
        tipe: soal.tipe,
        id: soal.id,
        soal: soal.soal,
        pilihan: soal.pilihan,
        jawabanBenarId: soal.jawabanBenarId,
        penjelasan: soal.penjelasan,
        skor: soal.skor,
      };
    case 'benar-salah':
      return {
        tipe: soal.tipe,
        id: soal.id,
        soal: soal.soal,
        jawabanBenar: soal.jawabanBenar,
        penjelasan: soal.penjelasan,
        skor: soal.skor,
      };
    case 'isian-singkat':
      return {
        tipe: soal.tipe,
        id: soal.id,
        soal: soal.soal,
        angka: soal.angka,
        jawabanBenar: soal.jawabanBenar,
        penjelasan: soal.penjelasan,
        skor: soal.skor,
      };
    case 'menjodohkan':
      return {
        tipe: soal.tipe,
        id: soal.id,
        soal: soal.soal,
        pasangan: soal.pasangan,
        penjelasan: soal.penjelasan,
        skor: soal.skor,
      };
    case 'menyusun-urutan':
      // TIDAK diacak di sini (beda dari keSoalTampilan) -- urutan ASLI
      // di content MEMANG kunci jawabannya, jadi justru itu yang harus
      // ditampilkan di halaman Pembahasan.
      return {
        tipe: soal.tipe,
        id: soal.id,
        soal: soal.soal,
        item: soal.item,
        penjelasan: soal.penjelasan,
        skor: soal.skor,
      };
    case 'drag-drop':
      return {
        tipe: soal.tipe,
        id: soal.id,
        soal: soal.soal,
        kategori: soal.kategori,
        item: soal.item,
        penjelasan: soal.penjelasan,
        skor: soal.skor,
      };
  }
}
