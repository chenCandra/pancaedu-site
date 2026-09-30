// Test fisika Duel Meriam Parabola -- jalankan: node scripts/test-fisika-duel-meriam.mjs
// Menguji modul public/game/duel-meriam/fisika.js (dipakai LANGSUNG oleh game
// di browser juga -- satu sumber kebenaran, bukan reimplementasi terpisah).
//
// fisika.js ditulis sebagai skrip UMD polos (bukan modul ES) supaya bisa
// dimuat browser lewat <script src> tanpa build step. Di sini dia dijalankan
// lewat sandbox module/exports manual (bukan import/require biasa) --
// package.json proyek ini "type":"module", jadi require() langsung akan
// gagal, dan kita juga tidak mau naruh package.json tambahan di public/game
// (bakal ikut ter-deploy sebagai file publik yang tidak perlu).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fisikaPath = path.join(__dirname, '..', 'public', 'game', 'duel-meriam', 'fisika.js');
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

// --- 1. v0=20, sudut=45°, g=10 -> jarak 40 m, tinggi maksimum 10 m ---
{
  const R = F.hitungJangkauan(20, 45, 10);
  const H = F.hitungTinggiMaksimum(20, 45, 10);
  tes(`jangkauan(v0=20, sudut=45, g=10) = 40 m (dapat ${R.toFixed(3)})`, dekat(R, 40, 0.01));
  tes(`tinggi maksimum(v0=20, sudut=45, g=10) = 10 m (dapat ${H.toFixed(3)})`, dekat(H, 10, 0.01));
}

// --- 2. v0=30, sudut=30° -> ±77.9 m ---
{
  const R = F.hitungJangkauan(30, 30, 10);
  tes(`jangkauan(v0=30, sudut=30, g=10) = 77.9 m (dapat ${R.toFixed(3)})`, dekat(R, 77.9, 0.05));
}

// --- 3. Meriam kanan menghasilkan jarak yang sama ke arah kiri (simetri arah) ---
{
  const v0 = 25, sudut = 40, g = 10, aAngin = 0;
  const T = F.hitungWaktuTerbang(v0, sudut, g);
  const xKanan = F.posisiX(0, 1, v0, sudut, aAngin, T); // benteng kiri menembak ke kanan
  const xKiri = F.posisiX(0, -1, v0, sudut, aAngin, T); // benteng kanan menembak ke kiri
  tes(
    `simetri arah: |x(arah=+1)| = |x(arah=-1)| (${xKanan.toFixed(3)} vs ${xKiri.toFixed(3)})`,
    dekat(xKanan, -xKiri, 0.01)
  );
}

// --- 3b. simulasikanTembakan (dipakai LANGSUNG oleh animasi & deteksi
// kena/meleset di game -- WAJIB dites terpisah dari hitungJangkauan yang
// cuma rumus analitik, supaya bug simulasi step-by-step tidak lolos
// walau rumus analitiknya sendiri benar) ---
{
  const v0 = 25, sudut = 40, g = 10;
  const R = F.hitungJangkauan(v0, sudut, g);
  const hasil = F.simulasikanTembakan({ v0, sudutDerajat: sudut, g, arah: 1, x0: 0, y0: 0 });
  tes(
    `simulasikanTembakan mendarat di jarak ~R (analitik ${R.toFixed(2)} vs simulasi ${hasil.xJatuh !== null ? hasil.xJatuh.toFixed(2) : 'null'})`,
    hasil.xJatuh !== null && dekat(hasil.xJatuh, R, 0.5)
  );
  tes('simulasikanTembakan TIDAK mendarat instan di t=0 (bug lama)', hasil.tJatuh !== null && hasil.tJatuh > 0.05);
}

// --- 4. 1000 medan acak -- selalu ada tembakan yang bisa mengenai lawan melewati bukit ---
{
  const rng = F.buatRngBerurut(20260930); // seed tetap -- kalau gagal, bisa direproduksi persis
  let gagalMedan = 0;
  const CONTOH_MAKS_DITAMPILKAN = 3;
  const contohGagal = [];
  for (let i = 0; i < 1000; i++) {
    const medan = F.buatMedanAcak(rng);
    const bisa = F.adaTembakanBisaMengenai(medan);
    if (!bisa) {
      gagalMedan++;
      if (contohGagal.length < CONTOH_MAKS_DITAMPILKAN) contohGagal.push(medan);
    }
  }
  if (gagalMedan > 0) {
    console.error('Medan yang GAGAL (contoh):', JSON.stringify(contohGagal, null, 2));
  }
  tes(`1000 medan acak: semua winnable (${1000 - gagalMedan}/1000 lolos)`, gagalMedan === 0);
}

console.log('');
if (gagal > 0) {
  console.error(`${gagal} dari ${total} tes GAGAL.`);
  process.exit(1);
} else {
  console.log(`Semua ${total} tes lolos.`);
  process.exit(0);
}
