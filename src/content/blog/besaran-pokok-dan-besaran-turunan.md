---
title: "Besaran Pokok & Besaran Turunan: Alat Ukur Dasar buat 'Ngukur' Dunia"
description: "Kenalan sama 7 besaran pokok & besaran turunan dalam fisika, plus miskonsepsi klasik massa vs berat yang sering ketuker."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-06
tags: ["Besaran Pokok", "Besaran Turunan", "Fisika Kelas X"]
kuis:
  - soal: "Ada berapa besaran pokok dalam fisika?"
    pilihan: ["5", "6", "7", "8"]
    jawaban: 2
    penjelasan: "Tujuh besaran pokok: panjang, massa, waktu, kuat arus listrik, suhu, jumlah zat, dan intensitas cahaya."
  - soal: "Manakah dari berikut yang termasuk besaran turunan?"
    pilihan: ["Massa", "Waktu", "Kecepatan", "Suhu"]
    jawaban: 2
    penjelasan: "Kecepatan = jarak ÷ waktu, hasil kombinasi dua besaran pokok — jadi termasuk besaran turunan."
  - soal: "Kenapa massa dan berat itu beda, bukan sekadar beda istilah?"
    pilihan:
      - "Karena namanya beda tapi satuannya sama"
      - "Massa besaran pokok (kg) dan tetap di mana pun, berat besaran turunan (N) yang berubah tergantung gravitasi"
      - "Berat besaran pokok, massa besaran turunan"
      - "Keduanya sama-sama besaran turunan"
    jawaban: 1
    penjelasan: "Massa kamu tetap sama di Bulan maupun Bumi, tapi berat kamu berubah karena gravitasi Bulan lebih kecil."
  - soal: "'Jarak sekolah ke rumah saya 5' — kenapa kalimat ini kurang tepat secara fisika?"
    pilihan: ["Angka 5 terlalu kecil", "Tidak ada satuannya", "Harusnya pakai koma", "Jarak bukan besaran"]
    jawaban: 1
    penjelasan: "Angka tanpa satuan nggak ada artinya — satuan itu wajib, bukan pelengkap."
draft: false
---

<style>
.mtr-tree, .mtr-cards, .mtr-table-wrap { margin-block: 2rem; }

.mtr-tree-root-wrap { text-align: center; }

.mtr-tree-root {
  display: inline-block;
  margin-inline: auto;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: var(--accent-ink);
  font-family: var(--font-display);
  font-weight: 600;
  text-align: center;
}

.mtr-tree-branches {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  padding-top: 2rem;
  position: relative;
  flex-wrap: wrap;
}

.mtr-tree-branches::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 2rem;
  background: var(--border-strong);
}

.mtr-tree-branch {
  flex: 1 1 14rem;
  max-width: 20rem;
  position: relative;
  padding-top: 1.5rem;
}

.mtr-tree-branch::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 1.5rem;
  background: var(--border-strong);
}

.mtr-tree-card {
  background: var(--surface);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: 1.25rem;
  text-align: center;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.mtr-tree-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.mtr-tree-icon { font-size: 1.5rem; display: block; margin-bottom: 0.4rem; }
.mtr-tree-card h4 { font-family: var(--font-display); margin: 0 0 0.35rem; font-size: 1.05rem; }
.mtr-tree-card p { margin: 0; font-size: 0.875rem; color: var(--ink-soft); }

@media (max-width: 40rem) {
  .mtr-tree-branches { flex-direction: column; align-items: center; padding-top: 0; }
  .mtr-tree-branches::before { display: none; }
  .mtr-tree-branch { max-width: 100%; width: 100%; }
}

/* Tabel besaran pokok — bungkus overflow-x:auto biar aman di layar sempit,
   pola sama kayak tabel nilai di /hasil-ujian. */
.mtr-table-scroll {
  overflow-x: auto;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  background: var(--surface);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  box-shadow: var(--shadow-sm);
}

.mtr-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
}

.mtr-table th, .mtr-table td {
  padding: 0.65rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}

.mtr-table thead th {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--ink-soft);
  background-color: var(--accent-soft);
}

.mtr-table tbody tr:last-child td { border-bottom: none; }
.mtr-table td em { color: var(--accent); font-style: normal; font-weight: 600; }

/* Kartu contoh besaran turunan */
.mtr-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
  gap: 1rem;
}

.mtr-card {
  background: var(--surface);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: 1.25rem;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.mtr-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.mtr-card-icon { font-size: 1.375rem; display: block; margin-bottom: 0.5rem; }
.mtr-card h4 { font-family: var(--font-display); margin: 0 0 0.35rem; font-size: 1rem; }
.mtr-card .mtr-formula { font-size: 0.8125rem; color: var(--ink-soft); margin: 0 0 0.35rem; }
.mtr-card .mtr-unit {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--gold-soft);
  color: var(--gold);
}

.mtr-note {
  border-left: 3px solid var(--accent);
  background: var(--accent-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.5rem;
  font-size: 0.9375rem;
}
</style>

Materi kemarin kita udah kenalan sama hakikat fisika & metode ilmiah — sekarang waktunya masuk ke alat paling dasar yang dipakai fisika buat "ngomong": **besaran**.

~~Besaran itu istilah ribet buat rumus-rumus~~ → sebenarnya sederhana banget. Besaran itu cuma **sesuatu yang bisa diukur dan dinyatakan dalam angka + satuan**. Sepanjang bisa diukur pakai alat & hasilnya angka, itu besaran.

Contoh yang **bukan** besaran: kecantikan, kesedihan, atau "seberapa enak mi ayam abang itu". Kenapa? Karena nggak ada alat ukur standarnya, dan hasilnya beda-beda tergantung siapa yang nilai — bukan angka yang objektif.

<div class="mtr-note">
💡 Ingat juga: <strong>angka doang tanpa satuan itu nggak ada artinya</strong>. "Jarak sekolah ke rumah gue 5" — 5 apa? Meter? Kilometer? Satuan itu wajib, bukan pelengkap.
</div>

## Besaran Kebagi Dua: Pokok & Turunan

<div class="mtr-tree">
  <div class="mtr-tree-root-wrap">
    <span class="mtr-tree-root">📏 Besaran</span>
  </div>
  <div class="mtr-tree-branches">
    <div class="mtr-tree-branch">
      <div class="mtr-tree-card">
        <span class="mtr-tree-icon">🧱</span>
        <h4>Besaran Pokok</h4>
        <p>Besaran dasar yang satuannya udah ditentuin langsung, bukan turunan dari besaran lain.</p>
      </div>
    </div>
    <div class="mtr-tree-branch">
      <div class="mtr-tree-card">
        <span class="mtr-tree-icon">🧮</span>
        <h4>Besaran Turunan</h4>
        <p>Besaran hasil kombinasi (dikali/dibagi) dari dua atau lebih besaran pokok.</p>
      </div>
    </div>
  </div>
</div>

~~Besaran pokok itu "lebih penting" dibanding besaran turunan~~ → bukan soal penting-pentingan. Turunan cuma disebut gitu karena satuannya **diturunkan secara matematis** dari besaran pokok — bukan karena levelnya lebih rendah.

### Besaran Pokok: Cuma Ada 7

Di fisika, cuma ada 7 besaran pokok. Segala besaran lain di luar ini pasti turunan dari ketujuh ini.

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Besaran</th><th>Simbol</th><th>Satuan SI</th><th>Simbol Satuan</th></tr>
</thead>
<tbody>
<tr><td>Panjang</td><td><em>l</em></td><td>meter</td><td>m</td></tr>
<tr><td>Massa</td><td><em>m</em></td><td>kilogram</td><td>kg</td></tr>
<tr><td>Waktu</td><td><em>t</em></td><td>sekon</td><td>s</td></tr>
<tr><td>Kuat Arus Listrik</td><td><em>I</em></td><td>ampere</td><td>A</td></tr>
<tr><td>Suhu</td><td><em>T</em></td><td>kelvin</td><td>K</td></tr>
<tr><td>Jumlah Zat</td><td><em>n</em></td><td>mol</td><td>mol</td></tr>
<tr><td>Intensitas Cahaya</td><td><em>Iv</em></td><td>kandela</td><td>cd</td></tr>
</tbody>
</table>
</div>
</div>

Ini tabel yang paling wajib diapalin di awal — nanti hampir semua bab fisika balik lagi ke tabel ini.

### Besaran Turunan: Hasil "Racikan"

Nah, ini yang seru. Besaran turunan itu kayak resep — tinggal kombinasiin besaran pokok, jadilah besaran baru.

<div class="mtr-cards">
<div class="mtr-cards-grid">
  <div class="mtr-card">
    <span class="mtr-card-icon">📐</span>
    <h4>Luas</h4>
    <p class="mtr-formula">panjang × panjang</p>
    <span class="mtr-unit">m²</span>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">📦</span>
    <h4>Volume</h4>
    <p class="mtr-formula">panjang × panjang × panjang</p>
    <span class="mtr-unit">m³</span>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🏃</span>
    <h4>Kecepatan</h4>
    <p class="mtr-formula">jarak ÷ waktu</p>
    <span class="mtr-unit">m/s</span>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🧱</span>
    <h4>Massa Jenis</h4>
    <p class="mtr-formula">massa ÷ volume</p>
    <span class="mtr-unit">kg/m³</span>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">💪</span>
    <h4>Gaya</h4>
    <p class="mtr-formula">massa × percepatan</p>
    <span class="mtr-unit">Newton (N)</span>
  </div>
</div>
</div>

Perhatiin: satuan besaran turunan itu **bukan satuan baru yang dikarang bebas** — semua ketarik dari satuan besaran pokok yang dikombinasiin. m/s itu asalnya dari meter (panjang) dibagi sekon (waktu), bukan satuan lepas berdiri sendiri.

## Miskonsepsi Klasik: Massa vs Berat

Ini yang paling sering ketuker, bahkan sampai kelas atas.

~~Massa dan berat itu sama aja, cuma beda istilah~~ → **beda total**:

- **Massa** = besaran pokok, satuannya kilogram (kg), nilainya tetap di mana pun kalian berada
- **Berat** = besaran turunan (hasil dari massa × percepatan gravitasi), satuannya Newton (N), nilainya bisa berubah tergantung lokasi

Makanya di Bulan, massa kalian tetap sama kayak di Bumi — tapi berat kalian jadi lebih ringan, soalnya gravitasi Bulan lebih kecil.

## Intinya

- Besaran = sesuatu yang bisa diukur, dinyatakan dalam angka **+ satuan** (satuan wajib, nggak opsional)
- Besaran Pokok cuma ada 7: panjang, massa, waktu, kuat arus listrik, suhu, jumlah zat, intensitas cahaya
- Besaran Turunan = hasil kombinasi besaran pokok — satuannya ikut ketarik dari situ
- Massa ≠ Berat — yang satu besaran pokok, satunya lagi besaran turunan

Materi selanjutnya kita bahas gimana caranya besaran-besaran ini beneran diukur di dunia nyata: alat ukur & angka penting. 🔧
