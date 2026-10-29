// Tarik slug materi/artikel dengan view TERBANYAK dari D1 (lihat
// migrations/0006_page_views.sql & src/pages/api/track-view.ts), simpan ke
// src/data/topViewed.json -- dibaca saat build oleh Spotlight.astro (lewat
// import ES biasa, BUKAN fs runtime -- adapter Cloudflare tidak bundle
// node:fs, lihat catatan di ContentColumns.astro).
//
// SENGAJA dijalankan sebagai langkah terpisah SEBELUM `astro build` (lihat
// .github/workflows/deploy.yml), bukan query D1 langsung di komponen --
// binding D1 cuma ada di runtime Workers, tidak bisa diakses saat build
// statis berjalan di Node biasa (GitHub Actions).
//
// Kegagalan di sini (token belum punya izin D1, lagi belum ada data sama
// sekali, dsb.) SENGAJA TIDAK membatalkan build/deploy -- exit 0 selalu,
// topViewed.json yang lama (atau default null) tetap dipakai, Spotlight
// otomatis jatuh ke fallback-nya sendiri.

import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'src', 'data', 'topViewed.json');

try {
  const raw = execSync(
    'npx wrangler d1 execute pancaedu-penugasan --remote --json --command "SELECT slug, category FROM page_views ORDER BY views DESC LIMIT 1"',
    { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'] }
  );
  const parsed = JSON.parse(raw);
  const row = parsed?.[0]?.results?.[0];

  if (row?.slug && row?.category) {
    writeFileSync(outPath, JSON.stringify({ slug: row.slug, category: row.category }, null, 2) + '\n');
    console.log(`topViewed.json diperbarui: ${row.category}/${row.slug}`);
  } else {
    console.log('Belum ada data di page_views -- topViewed.json tidak diubah.');
  }
} catch (err) {
  console.warn('Gagal ambil top-viewed dari D1 (dilewati, tidak fatal):', err.message);
}
