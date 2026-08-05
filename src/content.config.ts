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

export const collections = { blog, kelas };
