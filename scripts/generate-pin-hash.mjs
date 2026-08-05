// Utilitas untuk membuat `pinHash` yang ditaruh di frontmatter
// src/content/hasil-ujian/*.md — dijalankan manual, bukan bagian dari build.
//
// Pakai kode PIN yang cukup panjang/acak (bukan angka pendek seperti "1234"),
// karena hash ini tidak di-salt: siapa pun yang cukup niat bisa brute-force
// PIN pendek dari hash-nya. PIN dibagikan langsung ke kelas (mis. lewat wali
// kelas/grup), bukan ditaruh di halaman publik mana pun.
//
// Pemakaian:
//   node scripts/generate-pin-hash.mjs "KODE-PIN-KELAS"

import { createHash } from 'node:crypto';

const pin = process.argv[2];

if (!pin) {
  console.error('Pemakaian: node scripts/generate-pin-hash.mjs "KODE-PIN-KELAS"');
  process.exit(1);
}

const hash = createHash('sha256').update(pin.trim()).digest('hex');

console.log(`PIN     : ${pin}`);
console.log(`pinHash : ${hash}`);
