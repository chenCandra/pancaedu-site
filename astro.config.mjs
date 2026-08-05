// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: ganti ke domain final setelah diputuskan (lihat catatan di plan)
  site: 'https://pancaedu.tech',
  integrations: [
    sitemap({
      // Halaman /kenangan (album kelas binaan) sengaja tidak dimasukkan sitemap
      // — bukan konten yang ingin ditemukan lewat pencarian publik.
      filter: (page) => !page.includes('/kenangan'),
    }),
  ],
});
