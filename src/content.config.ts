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
    simulasi: z
      .object({
        url: z.string().url(),
        judul: z.string(), // dipakai sebagai title iframe (aksesibilitas) & label di atas embed
        sumber: z.string().optional(), // mis. "PhET Interactive Simulations", ditampilkan sebagai kredit
        tinggi: z.number().default(600), // px — kebanyakan simulasi tidak 16:9 seperti video
      })
      .optional(),
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

export const collections = { blog, kelas, hasilUjian };
