// Test fisika Perang Cacing -- jalankan: node scripts/test-fisika-perang-cacing.mjs
// Menguji modul public/game/perang-cacing/fisika.js (dipakai LANGSUNG oleh
// game di browser juga -- satu sumber kebenaran). Pola sama seperti
// scripts/test-fisika-duel-meriam.mjs: fisika.js adalah skrip UMD polos,
// dimuat di sini lewat sandbox module/exports manual (new Function), bukan
// import/require biasa (package.json proyek ini "type":"module").
//
// medan.js (canvas per-piksel) SENGAJA TIDAK dites di sini -- butuh
// document.createElement('canvas')/getImageData browser sungguhan, lihat
// komentar di public/game/perang-cacing/medan.js. Yang dites di sini cuma
// fungsi tinggi/parameter MURNI yang dipakainya dari fisika.js.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fisikaPath = path.join(__dirname, '..', 'public', 'game', 'perang-cacing', 'fisika.js');
const sumber = fs.readFileSync(fisikaPath, 'utf8');
const modul = { exports: {} };
new Function('module', 'exports', sumber)(modul, modul.exports);
const F = modul.exports;

let gagal = 0;
let total = 0;

function dekat(a, b, toleransi) {
  return Math.abs(a - b) <= toleransi;
}

function tes(nama, kondisi) {
  total++;
  if (!kondisi) {
    gagal++;
    console.error(`✗ GAGAL: ${nama}`);
  } else {
    console.log(`✓ ${nama}`);
  }
}

// --- 1. posisiX/posisiY proyektil -- rumus gerak parabola dasar (dipakai juga di Duel Meriam) ---
{
  const v0 = 30, sudut = 45, g = 10;
  const T = (2 * v0 * Math.sin((sudut * Math.PI) / 180)) / g; // waktu terbang analitik
  const xJatuh = F.posisiX(0, 1, v0, sudut, 0, T);
  const yJatuh = F.posisiY(0, v0, sudut, g, T);
  const RHarapan = (v0 * v0 * Math.sin((2 * sudut * Math.PI) / 180)) / g;
  tes(`posisiX saat t=waktu-terbang ~ jangkauan analitik (${xJatuh.toFixed(2)} vs ${RHarapan.toFixed(2)})`, dekat(xJatuh, RHarapan, 0.01));
  tes(`posisiY saat t=waktu-terbang ~ 0 (mendarat, dapat ${yJatuh.toFixed(4)})`, dekat(yJatuh, 0, 0.01));
}

// --- 2. hitungKerusakan -- falloff linear, selalu monoton & tidak pernah negatif ---
{
  tes('hitungKerusakan(jarak=0) = damage penuh', F.hitungKerusakan(0, 100, 50) === 50);
  tes('hitungKerusakan(jarak>=radiusDamage) = 0', F.hitungKerusakan(100, 100, 50) === 0 && F.hitungKerusakan(150, 100, 50) === 0);
  tes('hitungKerusakan(jarak=setengah radius) ~ separuh damage', dekat(F.hitungKerusakan(50, 100, 50), 25, 1));

  const rng = F.buatRngBerurut(99);
  let monotonOk = true;
  for (let i = 0; i < 500; i++) {
    const radius = 20 + rng() * 150;
    const damage = 10 + rng() * 90;
    const j1 = rng() * radius;
    const j2 = j1 + rng() * (radius - j1); // j2 >= j1, masih <= radius
    const d1 = F.hitungKerusakan(j1, radius, damage);
    const d2 = F.hitungKerusakan(j2, radius, damage);
    // +0.5 toleransi karena hitungKerusakan membulatkan (Math.round) -- nilai
    // mentahnya sendiri (sebelum dibulatkan) sudah dijamin <= damage oleh rumus.
    if (d1 < 0 || d2 < 0 || d1 > damage + 0.5 || d2 > d1 + 0.001) { monotonOk = false; break; }
  }
  tes('500 pasangan jarak acak: kerusakan selalu >=0, <=damage, dan monoton turun', monotonOk);
}

// --- 3. buatRngBerurut -- deterministik untuk seed yang sama (dites juga di Duel Meriam, dicek lagi di sini karena dicopy ke modul baru) ---
{
  const a = F.buatRngBerurut(2026);
  const b = F.buatRngBerurut(2026);
  const seqA = [a(), a(), a()];
  const seqB = [b(), b(), b()];
  tes('buatRngBerurut(seed sama) menghasilkan urutan identik', seqA.every((v, i) => v === seqB[i]));
}

// --- 4. langkahFisikaKarakter -- jatuh bebas ke lantai palsu, harus mendarat & kena kerusakan jatuh kalau tinggi ---
{
  const konfig = {
    kecepatanJalan: 220, percepatanJalanTanah: 1800, percepatanJalanUdara: 700,
    lompatImpuls: 620, gravitasiKarakter: 1500, kecepatanJatuhMaks: 1600,
    stepMaksNaik: 6, jatuhAmanPx: 90, lebarKanvas: 960, tinggiKanvas: 540,
  };
  const LANTAI_Y = 300;
  const cbLantaiDatar = {
    apakahSolidDiSekitar: (x, y) => y >= LANTAI_Y,
    cariTanahTerdekat: (x, dariY, maxJarak) => {
      for (let dy = -4; dy <= maxJarak; dy++) if (dariY + dy >= LANTAI_Y) return LANTAI_Y;
      return null;
    },
  };

  // Jatuh dari agak tinggi di atas lantai (200px) -- harusnya kena kerusakan jatuh.
  const kJatuhTinggi = { x: 100, y: LANTAI_Y - 200, vx: 0, vy: 0, diTanah: false, menghadap: 1, jatuhMulaiY: LANTAI_Y - 200, radius: 14, hidup: true };
  let kerusakanTotal = 0;
  let mendarat = false;
  for (let i = 0; i < 300 && !mendarat; i++) {
    const hasil = F.langkahFisikaKarakter(kJatuhTinggi, { kiri: false, kanan: false, lompatBaruDitekan: false }, 1 / 60, cbLantaiDatar, konfig);
    kerusakanTotal += hasil.kerusakanJatuh;
    if (kJatuhTinggi.diTanah) mendarat = true;
  }
  tes('jatuh dari 200px: akhirnya mendarat (diTanah=true)', mendarat);
  tes(`jatuh dari 200px (> jatuhAmanPx=90): kena kerusakan jatuh > 0 (dapat ${kerusakanTotal})`, kerusakanTotal > 0);
  tes(`posisi y akhir berhenti tepat di atas lantai (dapat ${kJatuhTinggi.y.toFixed(1)}, harap ~${LANTAI_Y - 14})`, dekat(kJatuhTinggi.y, LANTAI_Y - 14, 1));

  // Jatuh pendek (di bawah jatuhAmanPx) -- TIDAK boleh kena kerusakan jatuh.
  const kJatuhPendek = { x: 100, y: LANTAI_Y - 40, vx: 0, vy: 0, diTanah: false, menghadap: 1, jatuhMulaiY: LANTAI_Y - 40, radius: 14, hidup: true };
  let kerusakanPendek = 0;
  for (let i = 0; i < 300; i++) {
    const hasil = F.langkahFisikaKarakter(kJatuhPendek, { kiri: false, kanan: false, lompatBaruDitekan: false }, 1 / 60, cbLantaiDatar, konfig);
    kerusakanPendek += hasil.kerusakanJatuh;
    if (kJatuhPendek.diTanah) break;
  }
  tes(`jatuh dari 40px (< jatuhAmanPx=90): TIDAK kena kerusakan jatuh (dapat ${kerusakanPendek})`, kerusakanPendek === 0);
}

// --- 5. Silhouette medan -- tinggi permukaan selalu dalam batas kanvas (atau null = jurang Pulau Kembar), untuk 500 medan acak per preset ---
{
  const lebar = 960, tinggi = 540;
  const presetDanPembuat = [
    ['perbukitan', F.buatParamPerbukitan],
    ['lembah', F.buatParamLembah],
    ['pulauKembar', F.buatParamPulauKembar],
    ['gua', F.buatParamGua],
  ];

  presetDanPembuat.forEach(([namaPreset, pembuat]) => {
    const rng = F.buatRngBerurut(1000 + namaPreset.length);
    let semuaDalamBatas = true;
    let adaJurang = false;
    let adaTanah = false;
    for (let i = 0; i < 500; i++) {
      const param = pembuat(rng);
      for (let x = 0; x <= lebar; x += 20) {
        const y = F.tinggiPermukaanDi(param, x, lebar, tinggi);
        if (y === null) { adaJurang = true; continue; }
        adaTanah = true;
        if (!(y >= 0 && y <= tinggi)) { semuaDalamBatas = false; }
      }
    }
    tes(`preset "${namaPreset}": 500 medan acak, tinggi permukaan selalu 0<=y<=tinggiKanvas`, semuaDalamBatas);
    tes(`preset "${namaPreset}": selalu ADA tanah (tidak kosong total)`, adaTanah);
    if (namaPreset === 'pulauKembar') {
      tes('preset "pulauKembar": selalu ADA jurang tengah (y=null) di salah satu medan', adaJurang);
    }
  });
}

console.log('');
if (gagal > 0) {
  console.error(`${gagal} dari ${total} tes GAGAL.`);
  process.exit(1);
} else {
  console.log(`Semua ${total} tes lolos.`);
  process.exit(0);
}
