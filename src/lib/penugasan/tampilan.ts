import type { CollectionEntry } from 'astro:content';
import type { SoalTampilan } from './types';

type SoalRahasia = CollectionEntry<'penugasan'>['data']['soal'][number];

// Membuang SEMUA field kunci jawaban dari satu soal sebelum dikirim ke
// komponen/browser. Ini satu-satunya tempat konversi rahasia -> publik
// terjadi -- dipanggil di frontmatter src/pages/penugasan/[slug].astro
// (yang wajib `export const prerender = false`), TIDAK PERNAH di
// komponen client atau di halaman yang di-prerender statis.
export function keSoalTampilan(soal: SoalRahasia): SoalTampilan {
  switch (soal.tipe) {
    case 'pilihan-ganda':
      return { tipe: soal.tipe, id: soal.id, soal: soal.soal, pilihan: soal.pilihan, skor: soal.skor };
    case 'benar-salah':
      return { tipe: soal.tipe, id: soal.id, soal: soal.soal, skor: soal.skor };
    case 'isian-singkat':
      return { tipe: soal.tipe, id: soal.id, soal: soal.soal, angka: soal.angka, skor: soal.skor };
    case 'menjodohkan':
      return {
        tipe: soal.tipe,
        id: soal.id,
        soal: soal.soal,
        kiri: soal.pasangan.map((p) => ({ id: p.id, teks: p.kiri })),
        kanan: acak(soal.pasangan.map((p) => ({ id: p.id, teks: p.kanan }))),
        skor: soal.skor,
      };
    case 'menyusun-urutan':
      return {
        tipe: soal.tipe,
        id: soal.id,
        soal: soal.soal,
        // Diacak buat tampilan -- urutan ASLI di content adalah kunci
        // jawaban, jadi tidak boleh dikirim apa adanya.
        item: acak(soal.item.map((it) => ({ id: it.id, teks: it.teks }))),
        skor: soal.skor,
      };
    case 'drag-drop':
      return {
        tipe: soal.tipe,
        id: soal.id,
        soal: soal.soal,
        kategori: soal.kategori,
        item: acak(soal.item.map((it) => ({ id: it.id, teks: it.teks }))),
        skor: soal.skor,
      };
  }
}

function acak<T>(arr: T[]): T[] {
  const hasil = [...arr];
  for (let i = hasil.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [hasil[i], hasil[j]] = [hasil[j], hasil[i]];
  }
  return hasil;
}
