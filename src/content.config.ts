import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Helper -- widget string/url OPSIONAL di Sveltia CMS, kalau dikosongkan
// (bukan diisi lalu dihapus lagi, tapi memang dibiarkan kosong dari awal),
// tersimpan sebagai STRING KOSONG ('') di frontmatter, BUKAN field-nya
// dihilangkan. z.string().url().optional() cuma terima URL asli atau field
// absen (undefined) -- string kosong tetap "string", jadi LOLOS .optional()
// tapi GAGAL di .url() (bukan URL valid). Sudah kejadian 2x (field
// `simulasi` & field-field URL Ruang Belajar) -- makanya digeneralisasi
// jadi helper di sini, dipakai di semua field url opsional biar nggak
// kejadian lagi di field baru nanti.
// Juga toleransi placeholder '-' (kebiasaan isi tanda strip buat "belum
// ada") -- pernah bikin deploy gagal total karena build error, padahal
// maksudnya field itu kosong. Diperlakukan sama seperti string kosong.
const optionalUrl = () =>
  z.preprocess((v) => (typeof v === 'string' && (v.trim() === '' || v.trim() === '-') ? undefined : v), z.string().url().optional());

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
    // Simulasi PIHAK KETIGA tambahan (mis. PhET Colorado) yang MELENGKAPI
    // `simulasi` (Lab Maya kita sendiri) di atas, BUKAN menggantikannya --
    // array terpisah supaya field `simulasi` yang sudah dipakai 100+ artikel
    // lama tidak perlu dimigrasikan jadi array. `sumber` WAJIB diisi di sini
    // (beda dari `simulasi.sumber` yang opsional) karena lisensi CC BY 4.0
    // PhET mewajibkan atribusi yang tampil di titik penggunaan.
    simulasiTambahan: z
      .array(
        z.object({
          url: z.string().url(),
          judul: z.string(),
          sumber: z.string(),
          tinggi: z.number().default(600),
        })
      )
      .default([]),
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
    // Nama Bab/unit besar (mis. "Hakikat Fisika", "Energi Alternatif") --
    // OPSIONAL, dipakai buat mengelompokkan sesi jadi Bab 1/Bab 2/dst di
    // halaman daftar & badge "Langkah X dari Y" di halaman detail, supaya
    // urutan panjang (puluhan sesi) tidak terasa seperti satu daftar rata
    // tanpa struktur. Nomor Bab dan posisi di dalamnya DIHITUNG OTOMATIS
    // dari urutan tanggal (bukan field manual) -- guru cukup mengetik nama
    // Bab yang sama persis di setiap sesi yang termasuk bab itu. Kosongkan
    // kalau sesi ini belum dikelompokkan (fallback ke badge lama, langkah
    // dihitung dari SELURUH sesi Kelas+Mapel, bukan per-Bab).
    bab: z.string().optional(),
    judul: z.string(),
    // Opsional -- kalau kosong, halaman detail pakai description dari
    // materi yang dirujuk (materiSlug) sebagai fallback.
    deskripsi: z.string().optional(),
    durasi: z.number().int().positive().optional(), // menit
    tujuanPembelajaran: z.array(z.string()).default([]),
    // id entri collection "materi" (mis. "besaran-dan-satuan") -- Lab Maya
    // (simulasi) otomatis ikut dari situ, TIDAK diinput ulang di sini.
    materiSlug: z.string().optional(),
    // Video KHUSUS buat sesi Ruang Belajar ini -- SENGAJA terpisah dari
    // `youtubeId` di Materi (bukan ditarik dari materiSlug seperti Lab
    // Maya). Dipakai kalau video yang mau dipakai BUKAN konten milik
    // sendiri (mis. video YouTube orang lain sebagai referensi tambahan)
    // yang tidak ingin ditampilkan permanen di halaman Materi -- cuma
    // relevan buat sesi belajar hari itu. Kalau diisi, ini yang dipakai
    // duluan di langkah "Tonton Video"; kalau kosong, fallback ke
    // youtubeId materi yang dirujuk (kalau ada).
    youtubeId: z.string().optional(),
    latihanUrl: optionalUrl(), // Google Form, Wayground, dll -- bebas platform
    tugasUrl: optionalUrl(), // Google Form / Drive / dll
    refleksiUrl: optionalUrl(), // biasanya Google Form
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

// Singleton (pola sama seperti `homepage`/`modeDaring` di atas). Link
// Refleksi GLOBAL, dipakai sebagai fallback kalau sebuah sesi Ruang
// Belajar TIDAK isi `refleksiUrl` sendiri -- supaya guru tidak perlu
// tempel link Form yang sama berulang-ulang di tiap sesi. Kalau suatu
// sesi memang butuh link refleksi khusus (beda dari biasanya), isi
// `refleksiUrl` di sesi itu -- itu tetap menang, punya global ini cuma
// dipakai kalau kosong.
const ruangBelajarPengaturan = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/ruang-belajar-pengaturan' }),
  schema: z.object({
    refleksiUrlGlobal: optionalUrl(),
  }),
});

// Penugasan -- kuis/tugas interaktif yang jalan di web sendiri (pengganti
// Wayground/Google Form). BEDA PENTING dari `blog.kuis[]` (komponen
// Kuis.astro): kunci jawaban field-field di bawah ini (`jawabanBenarId`,
// `jawabanBenar`, `kategoriBenarId`, dan urutan array `item[]` itu sendiri
// untuk tipe menyusun-urutan) HANYA BOLEH dibaca server-side (API route
// penilaian) -- halaman pengerjaan soal (src/pages/penugasan/[slug].astro)
// WAJIB `export const prerender = false` dan wajib membuang field-field
// ini sebelum data dikirim ke komponen/browser. Kalau ini bocor ke HTML
// statis, itu persis kesalahan yang sengaja dihindari fitur ini (beda dari
// Kuis.astro yang aman-aman saja bocor karena cuma latihan self-check
// tanpa leaderboard/taruhan apa pun).
//
// Setiap opsi/potongan (pilihan, pasangan, item, kategori) punya `id`
// stabil sendiri (bukan index tampilan) -- supaya urutan tampilan ke
// siswa boleh diacak tanpa mengubah cara menilai di server.
//
// Soal disimpan bersarang di dalam entri penugasan itu sendiri (bukan
// collection tersendiri) -- pola sama seperti `blog.kuis[]` dan
// `ruangBelajar.tujuanPembelajaran[]`. Prinsip "jangan duplikasi materi"
// tidak dilanggar: itu soal ttg REFERENSI (materi/video/lab) yang dipakai
// ulang lintas sesi, sedangkan soal tugas ditulis khusus untuk satu
// penugasan, tidak dipakai ulang -- tetap dijaga di level metadata lewat
// `materiSlug?` di bawah.
//
// Fase 1 baru mencakup 6 tipe di bawah. Tipe baru (fase mendatang: hotspot
// gambar, labelling diagram, grafik, simulasi, game, audio/video
// interaktif, branching scenario) tinggal ditambah sebagai object Zod baru
// + entri baru di array `z.discriminatedUnion` -- tidak mengubah 6 tipe
// yang sudah ada.
const soalPilihanGanda = z.object({
  tipe: z.literal('pilihan-ganda'),
  id: z.string(),
  soal: z.string(),
  pilihan: z.array(z.object({ id: z.string(), teks: z.string() })).min(2),
  jawabanBenarId: z.string(),
  penjelasan: z.string().optional(),
  skor: z.number().int().positive().default(1),
});

const soalBenarSalah = z.object({
  tipe: z.literal('benar-salah'),
  id: z.string(),
  soal: z.string(),
  jawabanBenar: z.boolean(),
  penjelasan: z.string().optional(),
  skor: z.number().int().positive().default(1),
});

const soalIsianSingkat = z.object({
  tipe: z.literal('isian-singkat'),
  id: z.string(),
  soal: z.string(),
  angka: z.boolean().default(false), // true = dibandingkan sebagai angka + toleransi, false = teks
  toleransi: z.number().default(0), // dipakai kalau angka: true
  jawabanBenar: z.array(z.string()).min(1), // varian jawaban yang diterima
  penjelasan: z.string().optional(),
  skor: z.number().int().positive().default(1),
});

const soalMenjodohkan = z.object({
  tipe: z.literal('menjodohkan'),
  id: z.string(),
  soal: z.string(),
  pasangan: z.array(z.object({ id: z.string(), kiri: z.string(), kanan: z.string() })).min(2),
  penjelasan: z.string().optional(),
  skor: z.number().int().positive().default(1),
});

const soalMenyusunUrutan = z.object({
  tipe: z.literal('menyusun-urutan'),
  id: z.string(),
  soal: z.string(),
  // Diisi guru SUDAH dalam urutan yang benar -- urutan array ITU SENDIRI
  // adalah kunci jawabannya (bukan field index terpisah).
  item: z.array(z.object({ id: z.string(), teks: z.string() })).min(2),
  penjelasan: z.string().optional(),
  skor: z.number().int().positive().default(1),
});

const soalDragDrop = z.object({
  tipe: z.literal('drag-drop'),
  id: z.string(),
  soal: z.string(),
  kategori: z.array(z.object({ id: z.string(), label: z.string() })).min(2),
  item: z.array(z.object({ id: z.string(), teks: z.string(), kategoriBenarId: z.string() })).min(2),
  penjelasan: z.string().optional(),
  skor: z.number().int().positive().default(1),
});

const soalSchema = z.discriminatedUnion('tipe', [
  soalPilihanGanda,
  soalBenarSalah,
  soalIsianSingkat,
  soalMenjodohkan,
  soalMenyusunUrutan,
  soalDragDrop,
]);

const penugasan = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/penugasan' }),
  schema: z.object({
    judul: z.string(),
    kelas: z.enum(['X', 'XI', 'XII']),
    mapel: z.string(),
    deskripsi: z.string().optional(),
    // id entri collection "blog" (category:materi) yang relevan -- opsional,
    // cuma buat tautan "materi terkait", bukan sumber soal.
    materiSlug: z.string().optional(),
    // SHA-256 dari PIN leaderboard -- generate lewat halaman
    // /penugasan/pin-generator (hash dibuat di browser, tanpa terminal).
    // JANGAN taruh PIN mentahnya di sini, cuma hash-nya.
    pinHash: z.string(),
    // Tanggal PIN berhenti berlaku -- WAJIB diisi, kebijakan: maksimal 6
    // bulan dari kapan PIN itu dibuat/diperbarui (dijaga lewat hint di CMS
    // & halaman pin-generator, bukan dipaksa lewat kode -- situs ini cuma
    // dikelola 1 guru, jadi cukup diingatkan, tidak perlu dikunci keras).
    // Dicek server-side di src/pages/api/penugasan/leaderboard/[slug].ts --
    // PIN yang benar SEKALIPUN ditolak kalau sudah lewat tanggal ini.
    pinBerlakuHingga: z.coerce.date(),
    soal: z.array(soalSchema).min(1),
    draft: z.boolean().default(false),
  }),
});

// Singleton (pola sama seperti `ruangBelajarPengaturan`). Daftar rombel +
// roster nama siswa tiap rombel, dipakai buat form identitas Penugasan
// (src/pages/penugasan/[slug].astro): siswa pilih KELAS dulu (dropdown),
// baru NAMA muncul sebagai dropdown ke-2 khusus kelas itu -- SENGAJA
// dropdown (bukan isian bebas) supaya nama & kelas konsisten & gampang
// disortir/dikelompokkan di leaderboard (tidak ada "Budi" vs "budi" vs
// "Budi S" untuk siswa yang sama). Opsi "Umum / Lainnya" (buat pengunjung
// non-SMAN 4, ditambahkan otomatis di halaman -- TIDAK perlu ditulis di
// sini) dan opsi "nama saya tidak ada di daftar" di tiap kelas TETAP kasih
// jalan keluar isian manual, buat siswa baru/pindahan yang rosternya belum
// diperbarui.
const penugasanPengaturan = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/penugasan-pengaturan' }),
  schema: z.object({
    daftarKelas: z
      .array(
        z.object({
          kelas: z.string(),
          siswa: z.array(z.string()).default([]),
        })
      )
      .default([]),
    // DEPRECATED sejak fitur Admin Panca (2026-09-11) -- SUDAH TIDAK DIBACA
    // di mana pun. Gerbang PIN halaman /penugasan/rekap sekarang dinamis
    // lewat tabel D1 `pins` (scope 'rekap'), dikelola dari /admin-panca/pin
    // -- bukan lagi field statis di sini. Field ini dibiarkan (bukan
    // dihapus) supaya konten lama yang masih punya nilainya tidak bikin
    // Sveltia/Zod error; aman dihapus kapan saja kalau mau beres-beres.
    pinGuruHash: z.string().optional(),
  }),
});

export const collections = {
  blog,
  kelas,
  hasilUjian,
  homepage,
  ruangBelajar,
  modeDaring,
  ruangBelajarPengaturan,
  penugasan,
  penugasanPengaturan,
};
