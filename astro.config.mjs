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
    // Angkatan "Contoh — XI IPA 2" awalnya dibuat dengan nama file
    // 2023-2024.md sebelum diisi data asli (XII F 1, 2026/2027) dan
    // di-rename -- redirect ini jaga-jaga kalau URL lamanya sempat
    // ke-share/ke-bookmark siapa pun sebelum rename.
    '/kenangan/2023-2024': '/kenangan/2026-2027',
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
