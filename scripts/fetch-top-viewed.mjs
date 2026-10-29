// Tarik 4 slug materi/artikel dengan view TERBANYAK, plus 1 halaman Perkakas
// (/tools/*) dengan view terbanyak, dari D1 (lihat migrations/0006_page_views.sql,
// src/pages/api/track-view.ts, & script tracking inline di public/tools/*/index.html)
// -- disimpan ke src/data/topViewed.json (array terurut, item [0] jadi andalan
// utama, [1..3] jadi andalan kedua/ketiga) dan src/data/topTool.json (satu
// objek). Dibaca saat build oleh Spotlight.astro lewat import ES biasa, BUKAN
// fs runtime -- adapter Cloudflare tidak bundle node:fs, lihat catatan di
// ContentColumns.astro.
//
// SENGAJA dijalankan sebagai langkah terpisah SEBELUM `astro build` (lihat
// .github/workflows/deploy.yml), bukan query D1 langsung di komponen --
// binding D1 cuma ada di runtime Workers, tidak bisa diakses saat build
// statis berjalan di Node biasa (GitHub Actions).
//
// Kegagalan di sini (token belum punya izin D1, lagi belum ada data sama
// sekali, dsb.) SENGAJA TIDAK membatalkan build/deploy -- exit 0 selalu,
// data lama (atau default) tetap dipakai, Spotlight otomatis jatuh ke
// fallback-nya sendiri.

import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '..', 'src', 'data');

function queryD1(sql) {
  const raw = execSync(`npx wrangler d1 execute pancaedu-penugasan --remote --json --command "${sql}"`, {
    encoding: 'utf-8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const parsed = JSON.parse(raw);
  return (parsed?.[0]?.results ?? []).filter((row) => row?.slug && row?.category);
}

try {
  const rows = queryD1(
    "SELECT slug, category FROM page_views WHERE category IN ('materi', 'artikel') ORDER BY views DESC LIMIT 4"
  );

  if (rows.length > 0) {
    writeFileSync(
      path.join(dataDir, 'topViewed.json'),
      JSON.stringify(
        rows.map((row) => ({ slug: row.slug, category: row.category })),
        null,
        2
      ) + '\n'
    );
    console.log(`topViewed.json diperbarui: ${rows.map((r) => `${r.category}/${r.slug}`).join(', ')}`);
  } else {
    console.log('Belum ada data materi/artikel di page_views -- topViewed.json tidak diubah.');
  }
} catch (err) {
  console.warn('Gagal ambil top-viewed dari D1 (dilewati, tidak fatal):', err.message);
}

try {
  const toolRows = queryD1("SELECT slug, category FROM page_views WHERE category = 'tools' ORDER BY views DESC LIMIT 1");

  if (toolRows.length > 0) {
    writeFileSync(path.join(dataDir, 'topTool.json'), JSON.stringify({ slug: toolRows[0].slug }, null, 2) + '\n');
    console.log(`topTool.json diperbarui: ${toolRows[0].slug}`);
  } else {
    console.log('Belum ada data Perkakas di page_views -- topTool.json tidak diubah.');
  }
} catch (err) {
  console.warn('Gagal ambil top tool dari D1 (dilewati, tidak fatal):', err.message);
}
