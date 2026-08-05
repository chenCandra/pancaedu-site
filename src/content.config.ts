import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['artikel', 'materi']),
    mapel: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    youtubeId: z.string().optional(),
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
          nama: z.string(), // saran: nama depan/inisial saja, bukan nama lengkap
          foto: z.string().optional(),
          quote: z.string().optional(),
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
