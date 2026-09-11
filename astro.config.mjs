// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// Integration kecil, HANYA nyala di dev server (`astro:server:setup` tidak
// pernah dipanggil saat `astro build`) -- me-redirect /admin -> /admin/index.html
// karena dev server tidak otomatis resolve folder -> index.html seperti
// server statis biasa (public/admin/index.html ada & jalan, tapi /admin
// polos 404 tanpa ini). SENGAJA middleware dev-only, BUKAN `redirects:`
// config Astro -- itu sempat dipakai (redirects: {'/admin': '/admin/index.html'})
// dan bocor ke `_redirects` production, lalu bentrok sama Cloudflare Workers
// Assets yang punya default berlawanan (html_handling "auto-trailing-slash"
// redirect /admin/index.html -> /admin/) -- dua-duanya saling lempar redirect
// selamanya (ERR_TOO_MANY_REDIRECTS, ketemu 2026-09-11). JANGAN pakai
// `redirects:` config buat /admin lagi, pakai pola middleware ini.
function adminDevRedirect() {
  return {
    name: 'admin-dev-redirect',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/admin') {
            res.statusCode = 302;
            res.setHeader('Location', '/admin/index.html');
            res.end();
            return;
          }
          next();
        });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://pancaedu.web.id',
  // Situs ini TETAP 100% statis secara default (output: 'static', bawaan
  // Astro) -- adapter di bawah ini HANYA menyalakan kemampuan render
  // on-demand untuk halaman/route yang secara eksplisit
  // `export const prerender = false` (dipakai fitur Penugasan & Admin Panca:
  // halaman pengerjaan soal, API grading, dan panel admin custom, supaya
  // kunci jawaban/session tidak pernah ter-bake ke HTML statis). Semua
  // halaman lain tidak berubah sama sekali.
  adapter: cloudflare(),
  redirects: {
    // Redirect /kenangan/2023-2024 -> /kenangan/2026-2027 (jaga-jaga
    // rename slug awal) SUDAH DIHAPUS -- 2023-2024 sekarang jadi slug sah
    // angkatan Kenangan Kelas baru sendiri, redirect itu malah membajak
    // URL-nya. Jangan pasang redirect serupa lagi buat slug tahun ajaran,
    // slug-slug itu memang dipakai berulang tiap tahun.
  },
  integrations: [
    adminDevRedirect(),
    sitemap({
      // Halaman /hasil-ujian (nilai per kelas, digerbangi PIN) & /admin-panca
      // (panel admin custom, login-gated) sengaja tidak dimasukkan sitemap --
      // bukan konten yang ingin ditemukan lewat pencarian.
      filter: (page) => !page.includes('/hasil-ujian') && !page.includes('/admin-panca'),
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
