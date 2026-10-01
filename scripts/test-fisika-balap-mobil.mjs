// Test fisika Balap Mobil (real-time) -- jalankan: node scripts/test-fisika-balap-mobil.mjs
// Menguji modul public/game/balap-mobil/fisika.js (dipakai LANGSUNG oleh
// game di browser juga). Sama pola loading-nya seperti
// test-fisika-duel-meriam.mjs.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fisikaPath = path.join(__dirname, '..', 'public', 'game', 'balap-mobil', 'fisika.js');
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

// --- Integrasi numerik (dt kecil) mendekati rumus GLBB analitik: v=at, s=1/2 a t^2 ---
{
  const a = 6, dt = 0.01, durasi = 5;
  let v = 0, s = 0;
  for (let t = 0; t < durasi; t += dt) {
    s = F.langkahJarak(s, v, dt);
    v = F.langkahKecepatan(v, a, dt);
  }
  const vAnalitik = a * durasi;
  const sAnalitik = 0.5 * a * durasi * durasi;
  tes(`langkahKecepatan terintegrasi ~ v=at (${v.toFixed(2)} vs ${vAnalitik})`, dekat(v, vAnalitik, 0.1));
  tes(`langkahJarak terintegrasi ~ s=1/2at^2 (${s.toFixed(2)} vs ${sAnalitik})`, dekat(s, sAnalitik, 1));
}

// --- vMaks menjepit kecepatan, tidak pernah terlampaui ---
{
  let v = 0;
  for (let i = 0; i < 2000; i++) v = F.langkahKecepatan(v, 10, 0.05, 30);
  tes(`vMaks menjepit kecepatan (dapat ${v}, batas 30)`, dekat(v, 30, 0.001));
}

// --- Kecepatan tidak pernah negatif walau percepatan negatif terus-menerus ---
{
  let v = 5;
  for (let i = 0; i < 100; i++) v = F.langkahKecepatan(v, -3, 0.1);
  tes(`kecepatan tidak pernah negatif (dapat ${v})`, v === 0);
}

// --- Tabrakan rintangan memotong kecepatan sesuai persentase, tidak pernah negatif ---
{
  tes('terapkanTabrakan(20, 0.5) = 10', dekat(F.terapkanTabrakan(20, 0.5), 10, 0.001));
  tes('terapkanTabrakan(4, 0.9) tidak negatif', F.terapkanTabrakan(4, 0.9) >= 0);
  tes('terapkanTabrakan(0, 0.5) = 0 (mobil berhenti tetap 0, bukan negatif)', F.terapkanTabrakan(0, 0.5) === 0);
}

// --- waktuIdealOptimal konsisten dengan integrasi numerik tanpa rintangan (gas ditahan terus) ---
{
  const aGas = 6, vMaks = 35, jarak = 400;
  const tIdeal = F.waktuIdealOptimal(aGas, vMaks, jarak);

  let v = 0, s = 0, t = 0;
  const dt = 0.005;
  while (s < jarak && t < 60) {
    v = F.langkahKecepatan(v, aGas, dt, vMaks);
    s = F.langkahJarak(s, v, dt);
    t += dt;
  }
  tes(`waktuIdealOptimal ~ simulasi numerik gas penuh (${tIdeal.toFixed(2)} vs ${t.toFixed(2)})`, dekat(tIdeal, t, 0.1));
}

// --- waktuIdealOptimal kasus jarak pendek (tidak sempat capai vMaks) ---
{
  const aGas = 6, vMaks = 100, jarak = 50; // vMaks sangat tinggi, tidak akan tercapai di jarak sependek ini
  const tIdeal = F.waktuIdealOptimal(aGas, vMaks, jarak);
  const tAnalitik = Math.sqrt((2 * jarak) / aGas);
  tes(`waktuIdealOptimal (jarak pendek, tidak capai vMaks) = sqrt(2s/a) (${tIdeal.toFixed(3)} vs ${tAnalitik.toFixed(3)})`, dekat(tIdeal, tAnalitik, 0.001));
}

console.log('');
if (gagal > 0) {
  console.error(`${gagal} dari ${total} tes GAGAL.`);
  process.exit(1);
} else {
  console.log(`Semua ${total} tes lolos.`);
  process.exit(0);
}
