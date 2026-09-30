// Validasi public/game/games.json -- jalankan: node scripts/validate-games-json.mjs
// Cek: semua field wajib ada & tidak kosong, dan path setiap game (folder +
// index.html-nya) benar-benar ada di public/game/.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gamesJsonPath = path.join(__dirname, '..', 'public', 'game', 'games.json');
const publicDir = path.join(__dirname, '..', 'public');

const FIELD_WAJIB = ['id', 'judul', 'deskripsi', 'mapel', 'materi', 'kelas', 'mode', 'durasi', 'warna', 'ikon', 'path'];
// "status" SENGAJA tidak wajib -- boleh string kosong ("Baru"/"Populer"/"").

let gagal = 0;
function laporGagal(pesan) {
  gagal++;
  console.error(`✗ ${pesan}`);
}

let daftar;
try {
  daftar = JSON.parse(fs.readFileSync(gamesJsonPath, 'utf8'));
} catch (err) {
  console.error(`✗ games.json tidak bisa dibaca/di-parse: ${err.message}`);
  process.exit(1);
}

if (!Array.isArray(daftar)) {
  console.error('✗ games.json harus berupa array di level teratas.');
  process.exit(1);
}

const idTerpakai = new Set();

daftar.forEach((game, i) => {
  const label = game && game.id ? game.id : `entri ke-${i}`;

  for (const field of FIELD_WAJIB) {
    const nilai = game ? game[field] : undefined;
    const kosong =
      nilai === undefined ||
      nilai === null ||
      (typeof nilai === 'string' && nilai.trim() === '') ||
      (Array.isArray(nilai) && nilai.length === 0);
    if (kosong) laporGagal(`${label}: field "${field}" wajib diisi.`);
  }

  if (game && game.id) {
    if (idTerpakai.has(game.id)) laporGagal(`${label}: id "${game.id}" dipakai lebih dari sekali.`);
    idTerpakai.add(game.id);
  }

  if (game && game.mode && !Array.isArray(game.mode)) {
    laporGagal(`${label}: field "mode" harus berupa array (mis. ["1 pemain"]).`);
  }

  if (game && game.path) {
    // path di JSON diawali "/game/..." (dipakai langsung sebagai href) --
    // ubah ke path filesystem relatif terhadap public/.
    const pathFs = path.join(publicDir, game.path.replace(/^\//, ''));
    const indexHtml = path.join(pathFs, 'index.html');
    if (!fs.existsSync(pathFs)) {
      laporGagal(`${label}: folder untuk path "${game.path}" tidak ditemukan (${pathFs}).`);
    } else if (!fs.existsSync(indexHtml)) {
      laporGagal(`${label}: "${game.path}" ada, tapi index.html-nya tidak ada.`);
    }
  }
});

console.log('');
if (gagal > 0) {
  console.error(`${gagal} masalah ditemukan di games.json.`);
  process.exit(1);
} else {
  console.log(`games.json valid -- ${daftar.length} game terdaftar, semua field & path lengkap.`);
  process.exit(0);
}
