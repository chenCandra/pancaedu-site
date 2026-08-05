// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: ganti ke domain final setelah diputuskan (lihat catatan di plan)
  site: 'https://pancaedu.tech',
  integrations: [
    sitemap({
      // Halaman /hasil-ujian (nilai per kelas, digerbangi PIN) sengaja tidak
      // dimasukkan sitemap — bukan konten yang ingin ditemukan lewat pencarian.
      filter: (page) => !page.includes('/hasil-ujian'),
    }),
  ],
});
