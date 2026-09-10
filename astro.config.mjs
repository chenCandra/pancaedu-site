// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://pancaedu.web.id',
  // Situs ini TETAP 100% statis secara default (output: 'static', bawaan
  // Astro) -- adapter di bawah ini HANYA menyalakan kemampuan render
  // on-demand untuk halaman/route yang secara eksplisit
  // `export const prerender = false` (dipakai fitur Penugasan: halaman
  // pengerjaan soal & API grading, supaya kunci jawaban tidak pernah
  // ter-bake ke HTML statis). Semua halaman lain tidak berubah sama sekali.
  adapter: cloudflare(),
  // Dev server (`astro dev`) tidak otomatis resolve folder → index.html
  // seperti web server statis biasa, jadi /admin polos 404 walau
  // public/admin/index.html ada & jalan. Redirect eksplisit ini nutup
  // celah itu di dev DAN production sekaligus.
  redirects: {
    '/admin': '/admin/index.html',
    // Redirect /kenangan/2023-2024 -> /kenangan/2026-2027 (jaga-jaga
    // rename slug awal) SUDAH DIHAPUS -- 2023-2024 sekarang jadi slug sah
    // angkatan Kenangan Kelas baru sendiri, redirect itu malah membajak
    // URL-nya. Jangan pasang redirect serupa lagi buat slug tahun ajaran,
    // slug-slug itu memang dipakai berulang tiap tahun.
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
