// Data CONTOH untuk pratinjau layout "Classic News Portal" (src/pages/preview-classic.astro).
// SENGAJA terpisah total dari src/content.config.ts / koleksi `blog` asli --
// lihat catatan di preview-classic.astro kenapa (poin E pada brief redesign:
// data dummy tidak boleh bercampur dengan sumber data produksi, dan tidak
// boleh menyamar sebagai konten asli).

export interface DummyCard {
  title: string;
  excerpt: string;
  tag: string;
}

// Tahap 3: hero berubah dari "teaser artikel unggulan" jadi masthead
// beranda (foto penuh satu layar, tagline situs) -- jadi isinya tagline
// umum, bukan judul materi tertentu lagi. Tetap data contoh untuk preview.
export const dummyHero = {
  titleLine1: 'Belajar Sains,',
  titleLine2: 'Lebih Dekat dengan Kehidupan',
  excerpt: 'PancaEdu adalah ruang belajar digital dengan materi lengkap, simulasi fisika interaktif, dan game edukasi untuk semua.',
};

export const dummyMateri: DummyCard[] = [
  { title: 'Hukum Newton dan Penerapannya', excerpt: 'Tiga hukum gerak dasar dan contoh soal penerapannya.', tag: 'Kelas X' },
  { title: 'Gelombang Elektromagnetik', excerpt: 'Spektrum, sifat, dan pemanfaatannya dalam teknologi.', tag: 'Kelas XII' },
  { title: 'Fluida Statis dan Dinamis', excerpt: 'Tekanan hidrostatis hingga asas kontinuitas & Bernoulli.', tag: 'Kelas XI' },
  { title: 'Listrik Dinamis', excerpt: 'Hukum Ohm, rangkaian seri-paralel, dan daya listrik.', tag: 'Kelas XII' },
  { title: 'Termodinamika Dasar', excerpt: 'Hukum-hukum termodinamika dan mesin kalor.', tag: 'Kelas XI' },
  { title: 'Relativitas Khusus', excerpt: 'Dilatasi waktu, kontraksi panjang, dan massa relativistik.', tag: 'Kelas XII' },
];

export const dummySimulasi: DummyCard[] = [
  { title: 'Simulasi Hukum Coulomb', excerpt: 'Atur muatan dan jarak, amati gaya listrik secara langsung.', tag: 'Lab Maya' },
  { title: 'Simulasi Gerak Parabola', excerpt: 'Ubah sudut & kecepatan awal, lihat lintasan proyektil.', tag: 'Lab Maya' },
  { title: 'Simulasi Rangkaian Listrik', excerpt: 'Susun rangkaian sederhana dan ukur arus-tegangannya.', tag: 'Lab Maya' },
  { title: 'Simulasi Pemuaian Zat', excerpt: 'Bandingkan pemuaian panjang pada berbagai jenis bahan.', tag: 'Lab Maya' },
];

export const dummyGame: DummyCard[] = [
  { title: 'Duel Meriam', excerpt: 'Hitung sudut & kecepatan tepat untuk mengenai target.', tag: 'Game Edukasi' },
  { title: 'Balap Mobil Fisika', excerpt: 'Terapkan GLBB untuk memenangkan balapan.', tag: 'Game Edukasi' },
  { title: 'Perang Cacing', excerpt: 'Proyektil & gravitasi dalam game strategi ringan.', tag: 'Game Edukasi' },
  { title: 'Kuis Besaran & Satuan', excerpt: 'Uji kecepatan konversi satuan dasar fisika.', tag: 'Game Edukasi' },
];

export const dummyArtikel: DummyCard[] = [
  { title: 'Kenapa Langit Berwarna Biru?', excerpt: 'Penjelasan singkat lewat hamburan Rayleigh.', tag: 'Sains & Fakta Unik' },
  { title: 'Belajar Fisika Tanpa Takut Rumus', excerpt: 'Refleksi mengajar dari ruang kelas sehari-hari.', tag: 'Refleksi Mengajar' },
  { title: 'Kurikulum Merdeka di Mata Guru Fisika', excerpt: 'Apa yang berubah, apa yang tetap penting.', tag: 'Kurikulum Merdeka' },
  { title: 'Rekomendasi Bacaan Fisika Populer', excerpt: 'Beberapa buku yang enak dibaca di luar jam sekolah.', tag: 'Pustaka' },
];

export const dummyKelas: { label: string; href: string }[] = [
  { label: 'Kelas X', href: '/ruang-belajar/kelas/x' },
  { label: 'Kelas XI', href: '/ruang-belajar/kelas/xi' },
  { label: 'Kelas XII', href: '/ruang-belajar/kelas/xii' },
];
