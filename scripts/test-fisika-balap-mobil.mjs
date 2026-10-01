// Test fisika Balap Mobil -- jalankan: node scripts/test-fisika-balap-mobil.mjs
// Menguji modul public/game/balap-mobil/fisika.js (dipakai LANGSUNG oleh
// game di browser juga). Sama pola loading-nya seperti
// test-fisika-duel-meriam.mjs -- lihat catatan di sana soal kenapa tidak
// pakai require()/import biasa.

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

// --- GLB: v=10 m/s, s=100 m -> t=10 s ---
{
  const t = F.waktuTempuhGLB(10, 100);
  tes(`waktuTempuhGLB(v=10, s=100) = 10 s (dapat ${t})`, dekat(t, 10, 0.001));
  tes(`jarakGLB(v=10, t=10) = 100 m`, dekat(F.jarakGLB(10, 10), 100, 0.001));
}

// --- GLBB dari diam: v0=0, a=2, s=100 -> t=10 s (s=1/2 a t^2) ---
{
  const t = F.waktuTempuhGLBB(0, 2, 100);
  tes(`waktuTempuhGLBB(v0=0, a=2, s=100) = 10 s (dapat ${t})`, dekat(t, 10, 0.001));
  tes(`jarakGLBB(v0=0, a=2, t=10) = 100 m`, dekat(F.jarakGLBB(0, 2, 10), 100, 0.001));
}

// --- GLBB dengan v0 -- konsistensi waktuTempuhGLBB <-> jarakGLBB (round-trip) ---
{
  const v0 = 5, a = 1.5, s = 80;
  const t = F.waktuTempuhGLBB(v0, a, s);
  const sHasil = F.jarakGLBB(v0, a, t);
  tes(`round-trip GLBB: jarakGLBB(waktuTempuhGLBB(v0=5,a=1.5,s=80)) = 80 (dapat ${sHasil.toFixed(3)})`, dekat(sHasil, s, 0.01));
}

// --- Gesekan mengurangi percepatan efektif, tidak sampai membalik arah ---
{
  tes('percepatanEfektif(3, 1) = 2', dekat(F.percepatanEfektif(3, 1), 2, 0.001));
  tes('percepatanEfektif(3, 10) = 0 (gesekan besar TIDAK bikin mobil mundur)', dekat(F.percepatanEfektif(3, 10), 0, 0.001));
}

// --- Mobil diam (v0=0) + percepatan efektif 0 (gesekan menghabiskan semua percepatan) -- tidak pernah sampai (null) ---
{
  const aEff = F.percepatanEfektif(2, 2);
  const t = F.waktuTempuhGLBB(0, aEff, 100);
  tes('mobil diam tanpa percepatan efektif tidak pernah sampai finish (null)', t === null);
}

// --- Mobil GLBB dengan perlambatan (a negatif) yang berhenti sebelum finish -- tidak sampai (null) ---
{
  // v0=5, a=-1 -> jarak maksimum = v0^2/(2*1) = 12.5 m, finish 100 m -> tidak akan sampai
  const t = F.waktuTempuhGLBB(5, -1, 100);
  tes('mobil melambat berhenti sebelum finish -> null (tidak sampai)', t === null);
}

console.log('');
if (gagal > 0) {
  console.error(`${gagal} dari ${total} tes GAGAL.`);
  process.exit(1);
} else {
  console.log(`Semua ${total} tes lolos.`);
  process.exit(0);
}
