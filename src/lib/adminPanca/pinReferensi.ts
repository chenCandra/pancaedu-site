// Daftar PIN plaintext yang DIKETAHUI untuk halaman referensi Admin Panca
// (/admin-panca/pin-penugasan). Situs ini SENGAJA cuma menyimpan HASH PIN di
// konten (src/content/penugasan/*.md), bukan plaintext-nya -- daftar ini
// murni CATATAN MANUAL yang dibuat sekali (2026-09-20) saat seluruh PIN
// penugasan digenerate ulang biar semuanya diketahui plaintext-nya.
//
// PENTING -- daftar ini BISA JADI USANG: kalau ada PIN yang diganti lagi
// lewat /penugasan/pin-generator (mis. karena kedaluwarsa atau dicabut),
// baris yang bersangkutan di sini TIDAK otomatis ikut berubah -- harus
// diedit manual di file ini juga. Situs TIDAK PUNYA cara untuk membaca
// balik PIN asli dari hash yang tersimpan (itu memang tujuannya hash
// satu-arah), jadi kalau lupa update file ini, PIN yang ditampilkan di
// halaman referensi bisa saja sudah tidak berlaku lagi.
export interface PinReferensi {
  slug: string;
  judul: string;
  kelas: string;
  pinLeaderboard: string;
  pinPembahasan?: string;
}

export const daftarPinReferensi: PinReferensi[] = [
  {
    "slug": "tka-fisika-pengukuran-dan-alat-ukur",
    "judul": "Pengukuran & Alat Ukur — Paket 1",
    "kelas": "TKA",
    "pinLeaderboard": "TKA01FIS",
    "pinPembahasan": "TKA01FISP"
  },
  {
    "slug": "tka-fisika-pengukuran-dan-alat-ukur-paket-2",
    "judul": "Pengukuran & Alat Ukur — Paket 2",
    "kelas": "TKA",
    "pinLeaderboard": "TKA01FIS2",
    "pinPembahasan": "TKA01FIS2P"
  },
  {
    "slug": "tka-fisika-gerak-lurus-dan-gerak-lengkung",
    "judul": "Gerak Lurus & Gerak Lengkung — Paket 1",
    "kelas": "TKA",
    "pinLeaderboard": "TKA02FIS",
    "pinPembahasan": "TKA02FISP"
  },
  {
    "slug": "tka-fisika-gerak-lurus-dan-gerak-lengkung-paket-2",
    "judul": "Gerak Lurus & Gerak Lengkung — Paket 2",
    "kelas": "TKA",
    "pinLeaderboard": "TKA02FIS2",
    "pinPembahasan": "TKA02FIS2P"
  },
  {
    "slug": "tka-fisika-hukum-newton",
    "judul": "Hukum Newton — Paket 1",
    "kelas": "TKA",
    "pinLeaderboard": "TKA03FIS",
    "pinPembahasan": "TKA03FISP"
  },
  {
    "slug": "tka-fisika-hukum-newton-paket-2",
    "judul": "Hukum Newton — Paket 2",
    "kelas": "TKA",
    "pinLeaderboard": "TKA03FIS2",
    "pinPembahasan": "TKA03FIS2P"
  },
  {
    "slug": "tka-fisika-momentum-dan-impuls",
    "judul": "Momentum & Impuls — Paket 1",
    "kelas": "TKA",
    "pinLeaderboard": "TKA04FIS",
    "pinPembahasan": "TKA04FISP"
  },
  {
    "slug": "tka-fisika-momentum-dan-impuls-paket-2",
    "judul": "Momentum & Impuls — Paket 2",
    "kelas": "TKA",
    "pinLeaderboard": "TKA04FIS2",
    "pinPembahasan": "TKA04FIS2P"
  },
  {
    "slug": "tka-fisika-momen-gaya-dan-momen-inersia",
    "judul": "Momen Gaya & Momen Inersia — Paket 1",
    "kelas": "TKA",
    "pinLeaderboard": "TKA05FIS",
    "pinPembahasan": "TKA05FISP"
  },
  {
    "slug": "tka-fisika-momen-gaya-dan-momen-inersia-paket-2",
    "judul": "Momen Gaya & Momen Inersia — Paket 2",
    "kelas": "TKA",
    "pinLeaderboard": "TKA05FIS2",
    "pinPembahasan": "TKA05FIS2P"
  },
  {
    "slug": "tka-fisika-tekanan-pascal-dan-archimedes",
    "judul": "Tekanan, Pascal & Archimedes — Paket 1",
    "kelas": "TKA",
    "pinLeaderboard": "TKA06FIS",
    "pinPembahasan": "TKA06FISP"
  },
  {
    "slug": "tka-fisika-tekanan-pascal-dan-archimedes-paket-2",
    "judul": "Tekanan, Pascal & Archimedes — Paket 2",
    "kelas": "TKA",
    "pinLeaderboard": "TKA06FIS2",
    "pinPembahasan": "TKA06FIS2P"
  },
  {
    "slug": "tka-fisika-bernoulli-dan-kontinuitas",
    "judul": "Bernoulli & Kontinuitas — Paket 1",
    "kelas": "TKA",
    "pinLeaderboard": "TKA07FIS",
    "pinPembahasan": "TKA07FISP"
  },
  {
    "slug": "tka-fisika-bernoulli-dan-kontinuitas-paket-2",
    "judul": "Bernoulli & Kontinuitas — Paket 2",
    "kelas": "TKA",
    "pinLeaderboard": "TKA07FIS2",
    "pinPembahasan": "TKA07FIS2P"
  },
  {
    "slug": "tka-fisika-karakteristik-gelombang-dan-bunyi",
    "judul": "Karakteristik Gelombang & Bunyi — Paket 1",
    "kelas": "TKA",
    "pinLeaderboard": "TKA08FIS",
    "pinPembahasan": "TKA08FISP"
  },
  {
    "slug": "tka-fisika-karakteristik-gelombang-dan-bunyi-paket-2",
    "judul": "Karakteristik Gelombang & Bunyi — Paket 2",
    "kelas": "TKA",
    "pinLeaderboard": "TKA08FIS2",
    "pinPembahasan": "TKA08FIS2P"
  },
  {
    "slug": "tka-fisika-intensitas-resonansi-dan-efek-doppler",
    "judul": "Intensitas, Resonansi & Efek Doppler — Paket 1",
    "kelas": "TKA",
    "pinLeaderboard": "TKA09FIS",
    "pinPembahasan": "TKA09FISP"
  },
  {
    "slug": "tka-fisika-intensitas-resonansi-dan-efek-doppler-paket-2",
    "judul": "Intensitas, Resonansi & Efek Doppler — Paket 2",
    "kelas": "TKA",
    "pinLeaderboard": "TKA09FIS2",
    "pinPembahasan": "TKA09FIS2P"
  },
  {
    "slug": "test-fisika",
    "judul": "Tes Internal -- Semua Tipe Soal",
    "kelas": "X",
    "pinLeaderboard": "X01FIS"
  },
  {
    "slug": "x-fisika-alat-ukur",
    "judul": "Memilih dan Membaca Alat yang Tepat",
    "kelas": "X",
    "pinLeaderboard": "X02FIS"
  },
  {
    "slug": "x-fisika-angka-penting-dan-notasi-ilmiah",
    "judul": "Angka Penting dan Notasi Ilmiah",
    "kelas": "X",
    "pinLeaderboard": "X03FIS"
  },
  {
    "slug": "x-fisika-bentuk-bentuk-energi",
    "judul": "Bentuk-bentuk Energi",
    "kelas": "X",
    "pinLeaderboard": "X04FIS"
  },
  {
    "slug": "x-fisika-besaran-dan-satuan",
    "judul": "Besaran dan Satuan",
    "kelas": "X",
    "pinLeaderboard": "X05FIS"
  },
  {
    "slug": "x-fisika-besaran-pokok",
    "judul": "Besaran Pokok",
    "kelas": "X",
    "pinLeaderboard": "X06FIS"
  },
  {
    "slug": "x-fisika-besaran-turunan",
    "judul": "Besaran Turunan",
    "kelas": "X",
    "pinLeaderboard": "X07FIS"
  },
  {
    "slug": "x-fisika-dampak-pemanasan-global-kehidupan-sehari-hari",
    "judul": "Dampak Pemanasan Global dalam Kehidupan Sehari-hari",
    "kelas": "X",
    "pinLeaderboard": "X08FIS"
  },
  {
    "slug": "x-fisika-dimensi",
    "judul": "Dimensi",
    "kelas": "X",
    "pinLeaderboard": "X09FIS"
  },
  {
    "slug": "x-fisika-energi-tak-terbarukan",
    "judul": "Energi Tak Terbarukan",
    "kelas": "X",
    "pinLeaderboard": "X10FIS"
  },
  {
    "slug": "x-fisika-energi-terbarukan",
    "judul": "Energi Terbarukan",
    "kelas": "X",
    "pinLeaderboard": "X11FIS"
  },
  {
    "slug": "x-fisika-faktor-penyebab-pemanasan-global",
    "judul": "Faktor Penyebab Pemanasan Global",
    "kelas": "X",
    "pinLeaderboard": "X12FIS"
  },
  {
    "slug": "x-fisika-gas-rumah-kaca",
    "judul": "Gas Rumah Kaca: Jenis dan Sumbernya",
    "kelas": "X",
    "pinLeaderboard": "X13FIS"
  },
  {
    "slug": "x-fisika-gerak-lurus-beraturan",
    "judul": "Gerak Lurus Beraturan (GLB)",
    "kelas": "X",
    "pinLeaderboard": "X14FIS"
  },
  {
    "slug": "x-fisika-gerak-lurus-berubah-beraturan",
    "judul": "Gerak Lurus Berubah Beraturan (GLBB)",
    "kelas": "X",
    "pinLeaderboard": "X15FIS"
  },
  {
    "slug": "x-fisika-gerak-parabola",
    "judul": "Gerak Parabola",
    "kelas": "X",
    "pinLeaderboard": "X16FIS"
  },
  {
    "slug": "x-fisika-hakikat-fisika",
    "judul": "Hakikat Fisika & Metode Ilmiah",
    "kelas": "X",
    "pinLeaderboard": "X17FIS"
  },
  {
    "slug": "x-fisika-jejak-karbon-dan-aksi-individu",
    "judul": "Jejak Karbon dan Aksi Individu",
    "kelas": "X",
    "pinLeaderboard": "X18FIS"
  },
  {
    "slug": "x-fisika-keselamatan-kerja",
    "judul": "Keselamatan Kerja di Laboratorium",
    "kelas": "X",
    "pinLeaderboard": "X19FIS"
  },
  {
    "slug": "x-fisika-konsep-energi",
    "judul": "Konsep Energi",
    "kelas": "X",
    "pinLeaderboard": "X20FIS"
  },
  {
    "slug": "x-fisika-merancang-penyelidikan",
    "judul": "Merancang dan Melakukan Penyelidikan Ilmiah",
    "kelas": "X",
    "pinLeaderboard": "X21FIS"
  },
  {
    "slug": "x-fisika-pemanasan-global",
    "judul": "Pemanasan Global",
    "kelas": "X",
    "pinLeaderboard": "X22FIS"
  },
  {
    "slug": "x-fisika-pemanfaatan-energi",
    "judul": "Pemanfaatan Energi",
    "kelas": "X",
    "pinLeaderboard": "X23FIS"
  },
  {
    "slug": "x-fisika-pengukuran-berulang",
    "judul": "Pengukuran Tunggal & Pengukuran Berulang",
    "kelas": "X",
    "pinLeaderboard": "X24FIS"
  },
  {
    "slug": "x-fisika-permasalahan-energi",
    "judul": "Permasalahan dan Upaya Pemenuhan Kebutuhan Energi",
    "kelas": "X",
    "pinLeaderboard": "X25FIS"
  },
  {
    "slug": "x-fisika-perubahan-energi",
    "judul": "Perubahan Energi",
    "kelas": "X",
    "pinLeaderboard": "X26FIS"
  },
  {
    "slug": "x-fisika-perubahan-iklim",
    "judul": "Perubahan Iklim",
    "kelas": "X",
    "pinLeaderboard": "X27FIS"
  },
  {
    "slug": "x-fisika-sumber-energi",
    "judul": "Sumber Energi",
    "kelas": "X",
    "pinLeaderboard": "X28FIS"
  },
  {
    "slug": "x-fisika-upaya-global-dan-nasional-pemanasan-global",
    "judul": "Upaya Global dan Nasional Mencegah Pemanasan Global",
    "kelas": "X",
    "pinLeaderboard": "X29FIS"
  },
  {
    "slug": "x-fisika-usaha-dan-daya",
    "judul": "Usaha dan Daya",
    "kelas": "X",
    "pinLeaderboard": "X30FIS"
  },
  {
    "slug": "x-fisika-vektor",
    "judul": "Vektor",
    "kelas": "X",
    "pinLeaderboard": "X31FIS"
  },
  {
    "slug": "xi-fisika-asas-bernoulli-dan-penerapannya",
    "judul": "Asas Bernoulli dan Penerapannya",
    "kelas": "XI",
    "pinLeaderboard": "XI01FIS"
  },
  {
    "slug": "xi-fisika-asas-kontinuitas-dan-debit-aliran",
    "judul": "Asas Kontinuitas dan Debit Aliran",
    "kelas": "XI",
    "pinLeaderboard": "XI02FIS"
  },
  {
    "slug": "xi-fisika-besaran-dan-jenis-jenis-gelombang",
    "judul": "Besaran dan Jenis-jenis Gelombang",
    "kelas": "XI",
    "pinLeaderboard": "XI03FIS"
  },
  {
    "slug": "xi-fisika-dinamika-rotasi-dan-energi-kinetik-rotasi",
    "judul": "Dinamika Rotasi dan Energi Kinetik Rotasi",
    "kelas": "XI",
    "pinLeaderboard": "XI04FIS"
  },
  {
    "slug": "xi-fisika-energi-potensial-dan-hukum-kekekalan-energi-mekanik",
    "judul": "Energi Potensial dan Hukum Kekekalan Energi Mekanik",
    "kelas": "XI",
    "pinLeaderboard": "XI05FIS"
  },
  {
    "slug": "xi-fisika-fluida-dan-massa-jenis",
    "judul": "Massa Jenis dan Tekanan Hidrostatis",
    "kelas": "XI",
    "pinLeaderboard": "XI06FIS"
  },
  {
    "slug": "xi-fisika-gaya-gesek-bidang-miring-dan-sistem-katrol",
    "judul": "Gaya Gesek, Bidang Miring, dan Sistem Katrol",
    "kelas": "XI",
    "pinLeaderboard": "XI07FIS"
  },
  {
    "slug": "xi-fisika-gelombang-berjalan-dan-gelombang-stasioner",
    "judul": "Gelombang Berjalan dan Gelombang Stasioner",
    "kelas": "XI",
    "pinLeaderboard": "XI08FIS"
  },
  {
    "slug": "xi-fisika-getaran-harmonis-sederhana",
    "judul": "Getaran Harmonis Sederhana (Pegas dan Bandul)",
    "kelas": "XI",
    "pinLeaderboard": "XI09FIS"
  },
  {
    "slug": "xi-fisika-hukum-gravitasi-newton-dan-medan-gravitasi",
    "judul": "Hukum Gravitasi Newton dan Medan Gravitasi",
    "kelas": "XI",
    "pinLeaderboard": "XI10FIS"
  },
  {
    "slug": "xi-fisika-hukum-hooke-dan-modulus-elastisitas",
    "judul": "Hukum Hooke dan Modulus Elastisitas",
    "kelas": "XI",
    "pinLeaderboard": "XI11FIS"
  },
  {
    "slug": "xi-fisika-hukum-ii-termodinamika-dan-mesin-kalor",
    "judul": "Hukum II Termodinamika dan Mesin Kalor",
    "kelas": "XI",
    "pinLeaderboard": "XI12FIS"
  },
  {
    "slug": "xi-fisika-hukum-ke-nol-dan-hukum-i-termodinamika",
    "judul": "Hukum ke-Nol dan Hukum I Termodinamika",
    "kelas": "XI",
    "pinLeaderboard": "XI13FIS"
  },
  {
    "slug": "xi-fisika-hukum-kepler-dan-gerak-satelit",
    "judul": "Hukum Kepler dan Gerak Satelit",
    "kelas": "XI",
    "pinLeaderboard": "XI14FIS"
  },
  {
    "slug": "xi-fisika-hukum-newton-dan-penerapannya",
    "judul": "Hukum Newton: Analisis Gaya dan Penerapan Dasar",
    "kelas": "XI",
    "pinLeaderboard": "XI15FIS"
  },
  {
    "slug": "xi-fisika-hukum-pascal-dan-hukum-archimedes",
    "judul": "Hukum Pascal dan Hukum Archimedes",
    "kelas": "XI",
    "pinLeaderboard": "XI16FIS"
  },
  {
    "slug": "xi-fisika-intensitas-bunyi-dan-efek-doppler",
    "judul": "Intensitas Bunyi dan Efek Doppler",
    "kelas": "XI",
    "pinLeaderboard": "XI17FIS"
  },
  {
    "slug": "xi-fisika-jenis-jenis-tumbukan",
    "judul": "Jenis-jenis Tumbukan",
    "kelas": "XI",
    "pinLeaderboard": "XI18FIS"
  },
  {
    "slug": "xi-fisika-kalor-perubahan-wujud-dan-asas-black",
    "judul": "Kalor, Perubahan Wujud, dan Asas Black",
    "kelas": "XI",
    "pinLeaderboard": "XI19FIS"
  },
  {
    "slug": "xi-fisika-karakteristik-dan-cepat-rambat-bunyi",
    "judul": "Karakteristik dan Cepat Rambat Bunyi",
    "kelas": "XI",
    "pinLeaderboard": "XI20FIS"
  },
  {
    "slug": "xi-fisika-kesetimbangan-benda-tegar-dan-titik-berat",
    "judul": "Kesetimbangan Benda Tegar dan Titik Berat",
    "kelas": "XI",
    "pinLeaderboard": "XI21FIS"
  },
  {
    "slug": "xi-fisika-momen-gaya-torsi-dan-momen-inersia",
    "judul": "Momen Gaya (Torsi) dan Momen Inersia",
    "kelas": "XI",
    "pinLeaderboard": "XI22FIS"
  },
  {
    "slug": "xi-fisika-momentum-impuls-dan-hukum-kekekalan-momentum",
    "judul": "Momentum, Impuls, dan Hukum Kekekalan Momentum",
    "kelas": "XI",
    "pinLeaderboard": "XI23FIS"
  },
  {
    "slug": "xi-fisika-perpindahan-kalor-konduksi-konveksi-radiasi",
    "judul": "Perpindahan Kalor: Konduksi, Konveksi, Radiasi",
    "kelas": "XI",
    "pinLeaderboard": "XI24FIS"
  },
  {
    "slug": "xi-fisika-proses-proses-termodinamika-pada-gas",
    "judul": "Proses-proses Termodinamika pada Gas",
    "kelas": "XI",
    "pinLeaderboard": "XI25FIS"
  },
  {
    "slug": "xi-fisika-resonansi-dan-pelayangan-bunyi",
    "judul": "Resonansi dan Pelayangan Bunyi",
    "kelas": "XI",
    "pinLeaderboard": "XI26FIS"
  },
  {
    "slug": "xi-fisika-sifat-sifat-gelombang-pemantulan-pembiasan-difraksi-interferensi",
    "judul": "Sifat-sifat Gelombang: Pemantulan, Pembiasan, Difraksi, Interferensi",
    "kelas": "XI",
    "pinLeaderboard": "XI27FIS"
  },
  {
    "slug": "xi-fisika-suhu-dan-pemuaian",
    "judul": "Suhu dan Pemuaian",
    "kelas": "XI",
    "pinLeaderboard": "XI28FIS"
  },
  {
    "slug": "xi-fisika-susunan-pegas-seri-dan-paralel",
    "judul": "Susunan Pegas Seri dan Paralel",
    "kelas": "XI",
    "pinLeaderboard": "XI29FIS"
  },
  {
    "slug": "xi-fisika-tegangan-permukaan-kapilaritas-dan-viskositas",
    "judul": "Tegangan Permukaan, Kapilaritas, dan Viskositas",
    "kelas": "XI",
    "pinLeaderboard": "XI30FIS"
  },
  {
    "slug": "xi-fisika-usaha-dan-teorema-usaha-energi",
    "judul": "Usaha dan Teorema Usaha-Energi",
    "kelas": "XI",
    "pinLeaderboard": "XI31FIS"
  },
  {
    "slug": "xii-fisika-arus-bolak-balik-konsep-dasar",
    "judul": "Arus Bolak-Balik: Konsep Dasar",
    "kelas": "XII",
    "pinLeaderboard": "XII01FIS"
  },
  {
    "slug": "xii-fisika-benda-bergerak-mendekati-kecepatan-cahaya",
    "judul": "Apa yang Terjadi Jika Benda Bergerak Mendekati Kecepatan Cahaya?",
    "kelas": "XII",
    "pinLeaderboard": "XII02FIS"
  },
  {
    "slug": "xii-fisika-bilangan-biner",
    "judul": "Bilangan Biner",
    "kelas": "XII",
    "pinLeaderboard": "XII03FIS"
  },
  {
    "slug": "xii-fisika-dilatasi-waktu",
    "judul": "Dilatasi Waktu: Apa, Mengapa, dan Bagaimana?",
    "kelas": "XII",
    "pinLeaderboard": "XII04FIS"
  },
  {
    "slug": "xii-fisika-efek-fotolistrik-dan-dualisme-gelombang-partikel",
    "judul": "Efek Fotolistrik dan Dualisme Gelombang-Partikel Cahaya",
    "kelas": "XII",
    "pinLeaderboard": "XII05FIS"
  },
  {
    "slug": "xii-fisika-gaya-lorentz",
    "judul": "Gaya Magnetik (Gaya Lorentz)",
    "kelas": "XII",
    "pinLeaderboard": "XII06FIS"
  },
  {
    "slug": "xii-fisika-generator-dan-transformator",
    "judul": "Aplikasi Induksi: Generator dan Transformator",
    "kelas": "XII",
    "pinLeaderboard": "XII07FIS"
  },
  {
    "slug": "xii-fisika-gerbang-logika",
    "judul": "Gerbang Logika: AND, OR, NOT, dan Turunannya",
    "kelas": "XII",
    "pinLeaderboard": "XII08FIS"
  },
  {
    "slug": "xii-fisika-hukum-coulomb",
    "judul": "Hukum Coulomb",
    "kelas": "XII",
    "pinLeaderboard": "XII09FIS"
  },
  {
    "slug": "xii-fisika-hukum-faraday-dan-lenz",
    "judul": "Hukum Faraday dan Hukum Lenz",
    "kelas": "XII",
    "pinLeaderboard": "XII10FIS"
  },
  {
    "slug": "xii-fisika-hukum-ohm-dan-rangkaian-sederhana",
    "judul": "Hukum Ohm dan Rangkaian Sederhana",
    "kelas": "XII",
    "pinLeaderboard": "XII11FIS"
  },
  {
    "slug": "xii-fisika-inti-atom-dan-radioaktivitas",
    "judul": "Inti Atom dan Radioaktivitas",
    "kelas": "XII",
    "pinLeaderboard": "XII12FIS"
  },
  {
    "slug": "xii-fisika-kapasitor-keping-sejajar",
    "judul": "Kapasitor Keping Sejajar",
    "kelas": "XII",
    "pinLeaderboard": "XII13FIS"
  },
  {
    "slug": "xii-fisika-kontraksi-panjang",
    "judul": "Kontraksi Panjang: Apa, Mengapa, dan Bagaimana",
    "kelas": "XII",
    "pinLeaderboard": "XII14FIS"
  },
  {
    "slug": "xii-fisika-latihan-soal-relativitas-khusus",
    "judul": "Latihan Soal Relativitas Khusus",
    "kelas": "XII",
    "pinLeaderboard": "XII15FIS"
  },
  {
    "slug": "xii-fisika-massa-relativistik-dan-momentum-relativistik",
    "judul": "Massa Relativistik dan Momentum Relativistik",
    "kelas": "XII",
    "pinLeaderboard": "XII16FIS"
  },
  {
    "slug": "xii-fisika-medan-listrik",
    "judul": "Medan Listrik, Memahami Pengaruh Muatan di Sekitarnya",
    "kelas": "XII",
    "pinLeaderboard": "XII17FIS"
  },
  {
    "slug": "xii-fisika-medan-magnet-konsep-dasar",
    "judul": "Medan Magnet: Konsep Dasar",
    "kelas": "XII",
    "pinLeaderboard": "XII18FIS"
  },
  {
    "slug": "xii-fisika-medan-magnet-oleh-arus-listrik",
    "judul": "Medan Magnet oleh Arus Listrik",
    "kelas": "XII",
    "pinLeaderboard": "XII19FIS"
  },
  {
    "slug": "xii-fisika-percobaan-michelson-morley",
    "judul": "Percobaan Michelson-Morley: Eksperimen yang Mengubah Fisika",
    "kelas": "XII",
    "pinLeaderboard": "XII20FIS"
  },
  {
    "slug": "xii-fisika-rangkaian-ac-sederhana",
    "judul": "Rangkaian AC Sederhana: Resistor, Induktor, Kapasitor",
    "kelas": "XII",
    "pinLeaderboard": "XII21FIS"
  },
  {
    "slug": "xii-fisika-rangkaian-kapasitor",
    "judul": "Rangkaian Kapasitor: Seri dan Paralel",
    "kelas": "XII",
    "pinLeaderboard": "XII22FIS"
  },
  {
    "slug": "xii-fisika-rangkaian-seri-dan-paralel",
    "judul": "Rangkaian Seri dan Paralel",
    "kelas": "XII",
    "pinLeaderboard": "XII23FIS"
  },
  {
    "slug": "xii-fisika-semikonduktor-dan-dioda",
    "judul": "Semikonduktor dan Dioda",
    "kelas": "XII",
    "pinLeaderboard": "XII24FIS"
  },
  {
    "slug": "xii-fisika-sinyal-analog-dan-digital",
    "judul": "Sinyal Analog dan Digital",
    "kelas": "XII",
    "pinLeaderboard": "XII25FIS"
  },
  {
    "slug": "xii-fisika-spektrum-elektromagnetik",
    "judul": "Spektrum Elektromagnetik",
    "kelas": "XII",
    "pinLeaderboard": "XII26FIS"
  },
  {
    "slug": "xii-fisika-teori-relativitas-khusus",
    "judul": "Teori Relativitas Khusus: Awal Mula Fisika Modern",
    "kelas": "XII",
    "pinLeaderboard": "XII27FIS"
  },
  {
    "slug": "xii-fisika-transistor-saklar-dan-penguat",
    "judul": "Transistor: Saklar dan Penguat",
    "kelas": "XII",
    "pinLeaderboard": "XII28FIS"
  }
];
