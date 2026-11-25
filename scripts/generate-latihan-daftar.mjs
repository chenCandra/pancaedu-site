// Scan public/latihan/*.html dan hasilkan public/latihan/daftar.json
// otomatis -- dijalankan sebagai langkah PERTAMA `npm run build` (lihat
// package.json), jadi menambah latihan baru cukup menaruh satu file .html
// baru di public/latihan/ lalu push, TANPA perlu mengedit daftar.json
// manual (beda dari pola public/tools/tools.json atau public/game/games.json
// yang memang sengaja ditulis tangan -- latihan ini butuh gesekan lebih
// kecil karena jumlah latihan akan terus bertambah).
//
// Cara kerja: tiap file latihan (BUKAN index.html atau file berawalan "_"
// seperti _TEMPLATE.html) WAJIB punya satu blok
//   <script type="application/json" id="latihan-meta"> {...} </script>
// berisi metadata singkat latihan itu (lihat _TEMPLATE.html untuk field
// lengkapnya). Skrip ini TIDAK menjalankan JavaScript apa pun di file HTML
// (aman & cepat) -- cuma mengambil teks di dalam blok JSON itu lewat regex,
// lalu JSON.parse.
//
// Jalankan manual kapan saja dengan: node scripts/generate-latihan-daftar.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const latihanDir = path.join(__dirname, '..', 'public', 'latihan');
const daftarJsonPath = path.join(latihanDir, 'daftar.json');

const FIELD_WAJIB = ['id', 'judul', 'kategori', 'jumlahSoal', 'waktuMenit'];
const META_REGEX = /<script[^>]*id=["']latihan-meta["'][^>]*>([\s\S]*?)<\/script>/i;

let gagal = 0;
function laporGagal(pesan) {
  gagal++;
  console.error(`✗ ${pesan}`);
}

if (!fs.existsSync(latihanDir)) {
  console.error(`✗ Folder tidak ditemukan: ${latihanDir}`);
  process.exit(1);
}

const semuaFile = fs
  .readdirSync(latihanDir)
  .filter((nama) => nama.endsWith('.html'))
  .filter((nama) => nama !== 'index.html' && !nama.startsWith('_'))
  .sort();

const daftar = [];
const idTerpakai = new Set();

for (const nama of semuaFile) {
  const slug = nama.replace(/\.html$/, '');
  const isiFile = fs.readFileSync(path.join(latihanDir, nama), 'utf8');
  const cocok = isiFile.match(META_REGEX);

  if (!cocok) {
    laporGagal(
      `${nama}: tidak ditemukan blok <script type="application/json" id="latihan-meta">...</script>. ` +
        `Lihat public/latihan/_TEMPLATE.html.`
    );
    continue;
  }

  let meta;
  try {
    meta = JSON.parse(cocok[1]);
  } catch (err) {
    laporGagal(`${nama}: blok latihan-meta bukan JSON yang valid (${err.message}).`);
    continue;
  }

  for (const field of FIELD_WAJIB) {
    const nilai = meta[field];
    const kosong = nilai === undefined || nilai === null || (typeof nilai === 'string' && nilai.trim() === '');
    if (kosong) laporGagal(`${nama}: field "${field}" wajib diisi di latihan-meta.`);
  }

  if (meta.id && meta.id !== slug) {
    laporGagal(`${nama}: field "id" di latihan-meta ("${meta.id}") harus sama persis dengan nama file ("${slug}").`);
  }

  if (meta.id) {
    if (idTerpakai.has(meta.id)) laporGagal(`${nama}: id "${meta.id}" dipakai lebih dari satu file.`);
    idTerpakai.add(meta.id);
  }

  daftar.push({
    id: slug,
    judul: meta.judul ?? slug,
    kategori: meta.kategori ?? 'Lainnya',
    deskripsi: meta.deskripsi ?? '',
    ikon: meta.ikon ?? '📝',
    warna: meta.warna ?? 'biru',
    jumlahSoal: meta.jumlahSoal ?? 0,
    waktuMenit: meta.waktuMenit ?? 0,
    path: `/latihan/${slug}.html`,
  });
}

daftar.sort((a, b) => a.kategori.localeCompare(b.kategori, 'id') || a.id.localeCompare(b.id, 'id'));

if (gagal > 0) {
  console.error(`\n${gagal} masalah ditemukan -- daftar.json TIDAK ditulis ulang. Build dihentikan.`);
  process.exit(1);
}

fs.writeFileSync(daftarJsonPath, JSON.stringify(daftar, null, 2) + '\n', 'utf8');
console.log(`✓ daftar.json ditulis -- ${daftar.length} latihan terdaftar dari ${semuaFile.length} file HTML.`);
