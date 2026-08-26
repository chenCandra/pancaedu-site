import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['artikel', 'materi']),
    // Sub-klasifikasi khusus category:artikel — dipakai buat badge warna &
    // filter di /artikel, biar "Sains & Fakta Unik" nggak nyampur keliatan
    // sama "Refleksi Mengajar" dst. Materi tidak pakai field ini (materi
    // sudah punya mapel+kelas sendiri buat klasifikasi).
    topik: z.enum(['Sains & Fakta Unik', 'Kurikulum Merdeka', 'Refleksi Mengajar', 'Pustaka']).optional(),
    mapel: z.string().optional(),
    kelas: z.enum(['X', 'XI', 'XII']).optional(), // jenjang kelas, dipakai khusus untuk materi
    pubDate: z.coerce.date(),
    // preprocess: CMS (Sveltia) nyimpen field datetime opsional yang dikosongkan
    // sebagai string kosong ('') alih-alih beneran dihapus dari frontmatter —
    // z.coerce.date() nolak itu. String kosong diperlakukan sama seperti
    // field-nya nggak ada (undefined), tanggal beneran tetap dicoerce normal.
    updatedDate: z.preprocess((v) => (v === '' ? undefined : v), z.coerce.date().optional()),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    youtubeId: z.string().optional(),
    // "Lab maya" — embed simulasi interaktif (PhET, GeoGebra, Wordwall,
    // LearningApps, dll). Hanya isi dengan URL dari sumber tepercaya: field
    // ini dirender langsung sebagai iframe tanpa sandbox, dan isinya cuma
    // ditulis lewat file konten (bukan input publik), jadi bukan celah XSS —
    // tapi tetap risiko kalau sumbernya sembarangan/berubah sewaktu-waktu.
    // preprocess: widget object di Sveltia CMS yang dibiarkan kosong (tidak
    // diisi sama sekali) tersimpan sebagai literal `null` di frontmatter,
    // BUKAN field-nya dihilangkan -- z.object({...}).optional() cuma terima
    // objek asli atau field absen (undefined), MENOLAK null (pesan errornya
    // menyesatkan: "Expected object, received object", padahal maksudnya
    // "received null" -- quirk typeof null === 'object' di JS/Zod). null
    // diperlakukan sama seperti field-nya nggak ada.
    simulasi: z.preprocess(
      (v) => (v === null ? undefined : v),
      z
        .object({
          url: z.string().url(),
          judul: z.string(), // dipakai sebagai title iframe (aksesibilitas) & label di atas embed
          sumber: z.string().optional(), // mis. "PhET Interactive Simulations", ditampilkan sebagai kredit
          tinggi: z.number().default(600), // px — kebanyakan simulasi tidak 16:9 seperti video
        })
        .optional()
    ),
    // Kuis pilihan ganda di akhir materi — feedback langsung per soal
    // (bukan submit-semua-baru-dinilai). `jawaban` adalah index 0-based ke
    // array `pilihan`. Khusus category:materi; artikel tidak pakai ini.
    kuis: z
      .array(
        z.object({
          soal: z.string(),
          pilihan: z.array(z.string()).min(2),
          jawaban: z.number().int().min(0),
          penjelasan: z.string().optional(),
        })
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

const kelas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kelas' }),
  schema: z.object({
    tahunAjaran: z.string(), // mis. "2023/2024"
    namaKelas: z.string(), // mis. "XI IPA 2"
    siswa: z
      .array(
        z.object({
          namaLengkap: z.string(),
          namaPanggilan: z.string().optional(),
          desa: z.string().optional(), // desa/kota tempat tinggal
          instagram: z.string().optional(), // username saja, tanpa "@" (boleh diketik pakai "@", dibersihkan saat render)
          quote: z.string().optional(), // kata mutiara/pesan/kesan
          foto: z.string().optional(),
        })
      )
      .default([]),
    // Foto landscape kegiatan/foto bareng seluruh kelas -- beda dari `siswa`
    // (potret per-orang), ini buat momen kelompok (perpisahan, study tour,
    // dst). Jumlahnya bebas, tampil di section terpisah sebelum grid siswa.
    fotoBersama: z
      .array(
        z.object({
          foto: z.string(),
          keterangan: z.string().optional(), // mis. "Perpisahan Sekolah"
        })
      )
      .default([]),
  }),
});

const hasilUjian = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hasil-ujian' }),
  schema: z.object({
    namaKelas: z.string(), // mis. "XI IPA 2"
    namaUjian: z.string(), // mis. "Penilaian Akhir Semester Ganjil"
    tahunAjaran: z.string(), // mis. "2025/2026"
    // SHA-256 dari kode PIN kelas (lihat scripts/generate-pin-hash.mjs).
    // Dicek di browser (client-side) — cukup untuk mencegah orang iseng,
    // BUKAN proteksi sungguhan terhadap orang yang niat buka DevTools.
    pinHash: z.string(),
    mapel: z.array(z.string()), // urutan kolom nilai, mis. ["Matematika", "Fisika"]
    siswa: z
      .array(
        z.object({
          noAbsen: z.number(), // tanpa nama, sesuai kesepakatan privasi
          nilai: z.record(z.string(), z.number()), // key harus cocok dengan salah satu `mapel`
        })
      )
      .default([]),
  }),
});

// Singleton -- cuma 1 file (src/content/homepage/index.md), bukan folder
// isi banyak entri kayak koleksi lain. Nampung semua redaksi halaman
// depan yang tadinya di-hardcode di komponen (Hero/About/Bento), supaya
// bisa diedit lewat CMS (collection "files" di config.yml) tanpa perlu
// sentuh kode tiap kali mau ganti kata-kata.
const homepage = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/homepage' }),
  schema: z.object({
    // Beberapa quote inspiratif di judul besar Hero -- satu dipilih ACAK
    // di browser tiap halaman dimuat/direfresh (lihat Hero.astro), bukan
    // cuma satu quote tetap. Minimal 1 (biar tetap valid kalau baru mulai
    // isi), idealnya beberapa (mis. 10) biar variasinya kerasa.
    heroQuotes: z
      .array(
        z.object({
          quote: z.string(),
          author: z.string().optional(),
        })
      )
      .min(1),
    heroLede: z.string(), // subjudul di bawah quote
    aboutTitle: z.string(), // judul section "Tentang" di beranda
    aboutText: z.string(),
    bentoItems: z
      .array(
        z.object({
          icon: z.string(), // emoji
          title: z.string(),
          desc: z.string(),
          size: z.enum(['sm', 'md', 'lg']),
        })
      )
      .default([]),
  }),
});

// Ruang Belajar — semi-LMS PERMANEN (bukan cuma fitur darurat): koleksi
// ini cuma "jadwal + penghubung" (mata pelajaran apa, kelas mana, tanggal
// berapa, ngarah ke mana), BUKAN penyimpan materi/video/lab itu sendiri.
// Materi/video/lab selalu dirujuk lewat `materiSlug` ke entri "materi"
// yang SUDAH ADA (collection blog, category:materi) -- prinsip "jangan
// duplikasi materi". Latihan/Tugas/Refleksi diarahkan ke Google Form/
// Wayground/dkk lewat URL biasa, bukan disimpan/dinilai di sini -- TIDAK
// ADA akun/login/progress siswa (tetap 100% statis, tanpa server/database
// -- ini prinsip yang DIPERTAHANKAN meski fiturnya sekarang permanen),
// semua status ("tersedia"/"belum tersedia") murni DIHITUNG dari
// ada-tidaknya field ini saat build, bukan disimpan terpisah.
const ruangBelajar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ruang-belajar' }),
  schema: z.object({
    // Tanggal aktivitas ini "milik hari apa" -- dicocokkan ke tanggal HARI
    // INI di BROWSER pengunjung (client-side, lihat halaman index-nya),
    // BUKAN di-generate ulang tiap hari lewat rebuild -- situs ini statis,
    // nggak ada server yang jalan tiap hari buat itu. Juga dipakai sebagai
    // urutan default di dalam tiap kelompok Kelas+Mapel (mirip urutan
    // silabus) di halaman daftar.
    tanggal: z.coerce.date(),
    kelas: z.enum(['X', 'XI', 'XII']),
    mapel: z.string(),
    judul: z.string(),
    // Opsional -- kalau kosong, halaman detail pakai description dari
    // materi yang dirujuk (materiSlug) sebagai fallback.
    deskripsi: z.string().optional(),
    durasi: z.number().int().positive().optional(), // menit
    tujuanPembelajaran: z.array(z.string()).default([]),
    // id entri collection "materi" (mis. "besaran-dan-satuan") -- video
    // (youtubeId) & Lab Maya (simulasi) otomatis ikut dari situ, TIDAK
    // diinput ulang di sini.
    materiSlug: z.string().optional(),
    latihanUrl: z.string().url().optional(), // Google Form, Wayground, dll -- bebas platform
    tugasUrl: z.string().url().optional(), // Google Form / Drive / dll
    refleksiUrl: z.string().url().optional(), // biasanya Google Form
    draft: z.boolean().default(false),
  }),
});

// Singleton (pola sama seperti `homepage` di atas). CATATAN PENTING:
// Ruang Belajar sendiri sekarang PERMANEN (menu & halamannya selalu ada,
// tidak lagi digerbangi field ini) -- `aktif` di sini SEKARANG cuma
// ngontrol satu hal: banner pengumuman darurat di beranda (mis. "lagi ada
// kabut asap, KBM dari rumah"), BUKAN kemunculan fitur Ruang Belajar itu
// sendiri. TIDAK real-time: guru ganti lewat CMS -> commit -> auto-deploy
// (GitHub Actions) -> situs baru ke-update -- sudah cukup buat
// kebutuhannya, dan sengaja begitu supaya tetap TIDAK bergantung server.
const modeDaring = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/mode-daring' }),
  schema: z.object({
    aktif: z.boolean().default(false),
    keterangan: z.string().optional(), // mis. alasan/periode, ditampilkan di banner darurat beranda
  }),
});

export const collections = { blog, kelas, hasilUjian, homepage, ruangBelajar, modeDaring };
