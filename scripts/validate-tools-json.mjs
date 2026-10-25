// Validasi public/tools/tools.json -- jalankan: node scripts/validate-tools-json.mjs
// Cek: semua field wajib ada & tidak kosong, "peran" berupa array berisi
// nilai yang dikenal, dan path setiap alat (folder + index.html-nya) benar-
// benar ada di public/tools/. Pola sama persis dengan validate-games-json.mjs.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toolsJsonPath = path.join(__dirname, '..', 'public', 'tools', 'tools.json');
const publicDir = path.join(__dirname, '..', 'public');

const FIELD_WAJIB = ['id', 'judul', 'deskripsi', 'peran', 'ikon', 'warna', 'path'];
const PERAN_DIKENAL = ['guru', 'murid', 'kepsek', 'bendahara'];

let gagal = 0;
function laporGagal(pesan) {
  gagal++;
  console.error(`✗ ${pesan}`);
}

let daftar;
try {
  daftar = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));
} catch (err) {
  console.error(`✗ tools.json tidak bisa dibaca/di-parse: ${err.message}`);
  process.exit(1);
}

if (!Array.isArray(daftar)) {
  console.error('✗ tools.json harus berupa array di level teratas.');
  process.exit(1);
}

const idTerpakai = new Set();

daftar.forEach((alat, i) => {
  const label = alat && alat.id ? alat.id : `entri ke-${i}`;

  for (const field of FIELD_WAJIB) {
    const nilai = alat ? alat[field] : undefined;
    const kosong =
      nilai === undefined ||
      nilai === null ||
      (typeof nilai === 'string' && nilai.trim() === '') ||
      (Array.isArray(nilai) && nilai.length === 0);
    if (kosong) laporGagal(`${label}: field "${field}" wajib diisi.`);
  }

  if (alat && alat.id) {
    if (idTerpakai.has(alat.id)) laporGagal(`${label}: id "${alat.id}" dipakai lebih dari sekali.`);
    idTerpakai.add(alat.id);
  }

  if (alat && alat.peran) {
    if (!Array.isArray(alat.peran)) {
      laporGagal(`${label}: field "peran" harus berupa array (mis. ["guru"]).`);
    } else {
      alat.peran.forEach((p) => {
        if (!PERAN_DIKENAL.includes(p)) {
          laporGagal(`${label}: nilai "peran" tidak dikenal: "${p}" (harus salah satu dari ${PERAN_DIKENAL.join(', ')}).`);
        }
      });
    }
  }

  if (alat && alat.path) {
    const pathFs = path.join(publicDir, alat.path.replace(/^\//, ''));
    const indexHtml = path.join(pathFs, 'index.html');
    if (!fs.existsSync(pathFs)) {
      laporGagal(`${label}: folder untuk path "${alat.path}" tidak ditemukan (${pathFs}).`);
    } else if (!fs.existsSync(indexHtml)) {
      laporGagal(`${label}: "${alat.path}" ada, tapi index.html-nya tidak ada.`);
    }
  }
});

console.log('');
if (gagal > 0) {
  console.error(`${gagal} masalah ditemukan di tools.json.`);
  process.exit(1);
} else {
  console.log(`tools.json valid -- ${daftar.length} alat terdaftar, semua field & path lengkap.`);
  process.exit(0);
}
