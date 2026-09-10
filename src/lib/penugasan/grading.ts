import type { CollectionEntry } from 'astro:content';
import type { HasilSoal, JawabanSoal } from './types';

type SoalRahasia = CollectionEntry<'penugasan'>['data']['soal'][number];

// Penilaian tiap tipe soal, semua ALL-OR-NOTHING per soal (skor penuh
// kalau seluruh bagian benar, 0 kalau ada satu saja yang salah) --
// disederhanakan dengan sengaja buat Fase 1 supaya konsisten lintas 6
// tipe. Bobot antar soal tetap bisa diatur lewat field `skor` per soal
// (bukan dari cara hitung parsial di sini).
//
// DIPANGGIL HANYA DARI API ROUTE (server), tidak pernah dari kode yang
// jalan di browser -- `soal` di sini masih membawa kunci jawaban.
export function nilaiJawaban(soal: SoalRahasia, jawaban: JawabanSoal | undefined): HasilSoal {
  const skorMaks = soal.skor;
  if (!jawaban || jawaban.tipe !== soal.tipe) {
    return { soalId: soal.id, benar: false, skor: 0, skorMaks, penjelasan: soal.penjelasan };
  }

  const benar = cocokkan(soal, jawaban);
  return {
    soalId: soal.id,
    benar,
    skor: benar ? skorMaks : 0,
    skorMaks,
    penjelasan: soal.penjelasan,
  };
}

function cocokkan(soal: SoalRahasia, jawaban: JawabanSoal): boolean {
  switch (soal.tipe) {
    case 'pilihan-ganda':
      return jawaban.tipe === 'pilihan-ganda' && jawaban.pilihanId === soal.jawabanBenarId;

    case 'benar-salah':
      return jawaban.tipe === 'benar-salah' && jawaban.nilai === soal.jawabanBenar;

    case 'isian-singkat': {
      if (jawaban.tipe !== 'isian-singkat') return false;
      const jawabanSiswa = jawaban.teks.trim();
      if (soal.angka) {
        const nilaiSiswa = Number(jawabanSiswa.replace(',', '.'));
        if (Number.isNaN(nilaiSiswa)) return false;
        return soal.jawabanBenar.some((jb) => {
          const nilaiBenar = Number(jb.replace(',', '.'));
          return !Number.isNaN(nilaiBenar) && Math.abs(nilaiSiswa - nilaiBenar) <= soal.toleransi;
        });
      }
      const normal = (s: string) => s.trim().toLowerCase();
      return soal.jawabanBenar.some((jb) => normal(jb) === normal(jawabanSiswa));
    }

    case 'menjodohkan': {
      if (jawaban.tipe !== 'menjodohkan') return false;
      if (jawaban.pasangan.length !== soal.pasangan.length) return false;
      // Benar kalau tiap sisi kiri dipasangkan dengan sisi kanan yang
      // punya `id` pasangan sama (lihat keSoalTampilan -- id pasangan asli
      // dipakai apa adanya di dua sisi, bukan dibocorkan lewat teksnya).
      return soal.pasangan.every((p) => jawaban.pasangan.some((jp) => jp.kiriId === p.id && jp.kananId === p.id));
    }

    case 'menyusun-urutan': {
      if (jawaban.tipe !== 'menyusun-urutan') return false;
      const urutanBenar = soal.item.map((it) => it.id);
      return (
        jawaban.urutanId.length === urutanBenar.length && jawaban.urutanId.every((id, i) => id === urutanBenar[i])
      );
    }

    case 'drag-drop': {
      if (jawaban.tipe !== 'drag-drop') return false;
      if (jawaban.penempatan.length !== soal.item.length) return false;
      return soal.item.every((it) =>
        jawaban.penempatan.some((p) => p.itemId === it.id && p.kategoriId === it.kategoriBenarId)
      );
    }
  }
}
