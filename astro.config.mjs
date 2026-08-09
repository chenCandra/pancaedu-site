// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pancaedu.web.id',
  // Dev server (`astro dev`) tidak otomatis resolve folder → index.html
  // seperti web server statis biasa, jadi /admin polos 404 walau
  // public/admin/index.html ada & jalan. Redirect eksplisit ini nutup
  // celah itu di dev DAN production sekaligus.
  redirects: {
    '/admin': '/admin/index.html',
  },
  integrations: [
    sitemap({
      // Halaman /hasil-ujian (nilai per kelas, digerbangi PIN) sengaja tidak
      // dimasukkan sitemap — bukan konten yang ingin ditemukan lewat pencarian.
      filter: (page) => !page.includes('/hasil-ujian'),
    }),
  ],
  vite: {
    server: {
      // Izinkan dev server diakses lewat host asing (mis. tunnel ngrok saat
      // tes responsivitas dari HP sungguhan) — hanya berlaku di `astro dev`,
      // tidak ikut ke production build.
      allowedHosts: true,
    },
  },
});
