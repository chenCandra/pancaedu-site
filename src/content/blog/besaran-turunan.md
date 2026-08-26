---
title: "Besaran Turunan: Ketika Besaran Pokok 'Dikombinasikan'"
description: "Kenalan sama besaran turunan -- luas, volume, kecepatan, gaya, tekanan, sampai daya -- dan gimana semuanya dibentuk dari kombinasi besaran pokok, lengkap contoh perhitungan & miskonsepsi umum."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-26
tags: ["Besaran Turunan", "Fisika Kelas X", "Fase E"]
kuis:
  - soal: "Manakah yang termasuk besaran turunan?"
    pilihan: ["Massa", "Waktu", "Panjang", "Kecepatan"]
    jawaban: 3
    penjelasan: "Kecepatan diperoleh dari panjang dibagi waktu, sehingga termasuk besaran turunan. Massa, waktu, dan panjang adalah besaran pokok."
  - soal: "Sebuah benda memiliki panjang 4 m dan lebar 2 m. Luas benda tersebut adalah..."
    pilihan: ["6 m²", "8 m²", "8 m", "2 m²"]
    jawaban: 1
    penjelasan: "Luas dihitung dengan A = p × l, sehingga A = 4 × 2 = 8 m²."
  - soal: "Sebuah benda bermassa 5 kg mengalami percepatan 2 m/s². Besarnya gaya yang bekerja pada benda adalah..."
    pilihan: ["2 N", "5 N", "7 N", "10 N"]
    jawaban: 3
    penjelasan: "Berdasarkan F = m × a, gaya = 5 × 2 = 10 N."
  - soal: "Satuan SI untuk tekanan adalah..."
    pilihan: ["Newton", "Joule", "Pascal", "Watt"]
    jawaban: 2
    penjelasan: "Tekanan merupakan besaran turunan yang memiliki satuan SI pascal (Pa)."
  - soal: "Pernyataan yang paling tepat tentang besaran turunan adalah..."
    pilihan: ["Besaran yang tidak memiliki satuan", "Besaran yang hanya dapat diukur menggunakan alat khusus", "Besaran yang dibentuk dari kombinasi besaran pokok", "Besaran yang selalu memiliki nama satuan khusus"]
    jawaban: 2
    penjelasan: "Besaran turunan diperoleh dari kombinasi satu atau lebih besaran pokok melalui hubungan matematis."
draft: false
---

<style>
.mtr-table-wrap { margin-block: 2rem; }

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
}

.mtr-table thead th {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--ink-soft);
  background-color: var(--accent-soft);
}

.mtr-table tbody tr:last-child td { border-bottom: none; }
.mtr-table td em { color: var(--accent); font-style: normal; font-weight: 600; }

.mtr-note {
  border-left: 3px solid var(--accent);
  background: var(--accent-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}

.mtr-note strong.mtr-wrong { color: var(--rose); }
.mtr-note strong.mtr-right { color: var(--teal); }

.mtr-def {
  border-left: 3px solid var(--gold);
  background: var(--gold-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}

.mtr-formula {
  text-align: center;
  font-size: 1.0625rem;
  font-weight: 600;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  margin-block: 1rem;
}

.mtr-cta {
  margin-block: 2.5rem 1rem;
  padding: 1.5rem;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
}

.mtr-cta p { margin: 0 0 1rem; color: var(--ink-soft); }
</style>

## 🔗 Apa Itu Besaran Turunan?

Kita mengenal panjang, massa, dan waktu sebagai [besaran pokok](/materi/besaran-pokok). Tetapi ketika menghitung luas meja, volume air, kecepatan kendaraan, massa jenis benda, atau gaya yang bekerja pada suatu benda, kita menggunakan besaran yang dibentuk dari besaran-besaran pokok itu. Besaran seperti itu disebut **besaran turunan**.

<div class="mtr-def">
💡 <strong>Besaran turunan</strong> adalah besaran yang diperoleh dari gabungan satu atau lebih besaran pokok melalui suatu hubungan matematis.
</div>

Contohnya, kecepatan diperoleh dari panjang dibagi waktu: **v = s / t**. Karena panjang dan waktu merupakan besaran pokok, maka kecepatan termasuk besaran turunan.

Kata "turunan" di sini **tidak berarti turunan dalam matematika seperti kalkulus** -- disebut besaran turunan karena besaran tersebut diturunkan atau dibentuk dari besaran pokok. Misalnya kecepatan = panjang ÷ waktu (keduanya besaran pokok), atau luas = panjang × panjang (dibentuk dari besaran panjang).

## 📐 Menghitung Besaran Turunan Satu per Satu

### Luas

Luas menunjukkan ukuran suatu permukaan atau bidang. Untuk persegi panjang: **A = p × l**. Panjang dan lebar sama-sama merupakan besaran panjang, dengan satuan SI meter (m), sehingga:

<div class="mtr-formula">Satuan luas = m × m = m²</div>

**Contoh:** sebuah meja memiliki panjang 2 m dan lebar 1 m. Luas meja = 2 × 1 = **2 m²**.

### Volume

Volume menunjukkan ruang yang ditempati oleh suatu benda. Untuk balok: **V = p × l × t**. Ketiga ukuran tersebut merupakan besaran panjang, sehingga:

<div class="mtr-formula">Satuan volume = m × m × m = m³</div>

**Contoh:** sebuah kotak berukuran panjang 2 m, lebar 1 m, tinggi 0,5 m. V = 2 × 1 × 0,5 = **1 m³**.

### Kecepatan

Ketika sebuah kendaraan bergerak, kita sering ingin tahu seberapa cepat kendaraan itu bergerak. Kecepatan dihitung dari perpindahan yang ditempuh setiap satuan waktu:

<div class="mtr-formula">v = s / t</div>

dengan v = kecepatan, s = perpindahan, t = waktu. Satuan SI: v = meter/sekon = **m/s**. Karena dibentuk dari panjang dan waktu, kecepatan termasuk besaran turunan.

**Contoh:** sebuah mobil menempuh jarak 100 m dalam waktu 5 s. v = 100/5 = **20 m/s**.

### Percepatan

Kecepatan suatu benda tidak selalu tetap -- ketika sebuah kendaraan semakin cepat, kendaraan tersebut mengalami percepatan, dinyatakan sebagai perubahan kecepatan setiap satuan waktu:

<div class="mtr-formula">a = Δv / Δt</div>

Satuan percepatan: **m/s²**. Karena dibentuk dari besaran panjang dan waktu, percepatan termasuk besaran turunan.

**Contoh:** kecepatan sebuah sepeda motor berubah dari 5 m/s menjadi 15 m/s dalam waktu 2 s. a = (15 − 5)/2 = 10/2 = **5 m/s²**.

### Massa Jenis

Pernahkah kalian bertanya mengapa batu tenggelam di air, sedangkan beberapa benda lain dapat mengapung? Salah satu konsep yang membantu menjelaskan karakteristik materi adalah massa jenis -- perbandingan massa terhadap volume:

<div class="mtr-formula">ρ = m / V</div>

dengan ρ = massa jenis, m = massa, V = volume. Satuan SI massa jenis: **kg/m³**. Karena dibentuk dari massa dan volume, massa jenis termasuk besaran turunan.

**Contoh:** sebuah benda memiliki massa 2 kg dan volume 0,001 m³. ρ = 2/0,001 = **2000 kg/m³**.

### Gaya

Ketika kalian mendorong meja, menarik pintu, atau menendang bola, kalian memberikan gaya. Dalam mekanika, gaya dihitung memakai Hukum II Newton:

<div class="mtr-formula">F = m × a</div>

dengan F = gaya, m = massa, a = percepatan. Satuan SI gaya adalah newton (N), atau dalam satuan dasar SI: **1 N = 1 kg·m/s²**. Jadi gaya merupakan besaran turunan karena dibentuk dari massa dan percepatan.

**Contoh:** sebuah benda bermassa 4 kg mengalami percepatan 3 m/s². F = 4 × 3 = **12 N**.

### Tekanan

Ketika kalian berdiri menggunakan sepatu hak tinggi, tekanan yang diberikan pada lantai berbeda dengan ketika memakai sepatu bersol lebih luas. Tekanan didefinisikan sebagai gaya yang bekerja pada setiap satuan luas:

<div class="mtr-formula">P = F / A</div>

dengan P = tekanan, F = gaya, A = luas permukaan. Satuan SI tekanan adalah pascal (Pa), atau **1 Pa = 1 N/m²**. Karena dibentuk dari gaya dan luas, tekanan termasuk besaran turunan.

**Contoh:** gaya 100 N bekerja pada permukaan seluas 2 m². P = 100/2 = **50 Pa**.

### Usaha dan Energi

Dalam Fisika, usaha punya pengertian yang lebih khusus daripada pemakaian kata "usaha" sehari-hari. Untuk gaya yang searah dengan perpindahan:

<div class="mtr-formula">W = F × s</div>

dengan W = usaha, F = gaya, s = perpindahan. Satuan SI usaha adalah joule (J) -- energi memiliki satuan SI yang sama, yaitu joule (J).

Kenapa energi juga termasuk besaran turunan? Karena satuan joule bisa dinyatakan pakai satuan dasar: 1 J = 1 N·m, sedangkan 1 N = 1 kg·m/s², sehingga **1 J = 1 kg·m²/s²** -- satuan energi ternyata bisa dibentuk dari satuan besaran pokok juga.

### Daya

Coba bayangkan dua orang melakukan usaha yang sama -- orang pertama menyelesaikannya dalam 10 detik, orang kedua butuh 20 detik. Keduanya melakukan usaha yang sama, tapi orang pertama lebih cepat. Konsep yang berkaitan dengan laju melakukan usaha adalah **daya**:

<div class="mtr-formula">P = W / t</div>

dengan P = daya, W = usaha, t = waktu. Satuan SI daya adalah watt (W), atau **1 W = 1 J/s**. Jadi daya juga merupakan besaran turunan.

## 🌊 Ringkasan Besaran Turunan

Besaran turunan sebenarnya sangat banyak dan dipakai di berbagai bidang Fisika. Berikut beberapa yang sering muncul di Fisika Kelas X:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Besaran Turunan</th><th>Satuan SI</th></tr>
</thead>
<tbody>
<tr><td>Luas</td><td>m²</td></tr>
<tr><td>Volume</td><td>m³</td></tr>
<tr><td>Kecepatan</td><td>m/s</td></tr>
<tr><td>Percepatan</td><td>m/s²</td></tr>
<tr><td>Massa jenis</td><td>kg/m³</td></tr>
<tr><td>Gaya</td><td>newton (N)</td></tr>
<tr><td>Tekanan</td><td>pascal (Pa)</td></tr>
<tr><td>Usaha</td><td>joule (J)</td></tr>
<tr><td>Energi</td><td>joule (J)</td></tr>
<tr><td>Daya</td><td>watt (W)</td></tr>
</tbody>
</table>
</div>
</div>

Perhatikan bahwa beberapa besaran punya nama satuan khusus, seperti newton, pascal, joule, dan watt. Tapi satuan-satuan itu tetap bisa diuraikan kembali menjadi satuan dasar SI -- contohnya gaya:

<div class="mtr-formula">F = m × a → satuan massa (kg) × satuan percepatan (m/s²) → N = kg·m/s²</div>

Jadi **newton bukan besaran pokok baru** -- newton adalah nama satuan turunan untuk gaya.

## 🧠 Besaran Pokok vs Besaran Turunan

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Besaran Pokok</th><th>Besaran Turunan</th></tr>
</thead>
<tbody>
<tr><td>Tidak dibentuk dari besaran lain dalam sistem SI</td><td>Dibentuk dari besaran pokok</td></tr>
<tr><td>Memiliki satuan dasar SI</td><td>Memiliki satuan turunan</td></tr>
<tr><td>Contoh: panjang</td><td>Contoh: luas</td></tr>
<tr><td>Contoh: massa</td><td>Contoh: kecepatan</td></tr>
<tr><td>Contoh: waktu</td><td>Contoh: gaya</td></tr>
<tr><td>Contoh: suhu</td><td>Contoh: tekanan</td></tr>
</tbody>
</table>
</div>
</div>

Contoh sederhananya: panjang → besaran pokok. Luas (panjang × panjang) → besaran turunan. Kecepatan (panjang ÷ waktu) → besaran turunan. Gaya (massa × percepatan) → besaran turunan.

## ⚠️ Miskonsepsi yang Sering Terjadi

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Meter persegi adalah besaran turunan."</strong><br>
Kurang tepat. <strong class="mtr-right">Luas</strong> adalah besaran turunannya, sedangkan meter persegi (m²) adalah satuannya.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Newton adalah besaran."</strong><br>
Yang dimaksud besaran di sini adalah <strong class="mtr-right">gaya</strong>. Newton (N) adalah satuan SI untuk gaya.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Semua besaran yang memiliki satuan khusus merupakan besaran pokok."</strong><br>
Salah. <strong class="mtr-right">Newton, pascal, joule, dan watt punya nama satuan khusus, tapi semuanya satuan untuk besaran turunan.</strong>
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Besaran turunan tidak berhubungan dengan besaran pokok."</strong><br>
Justru sebaliknya. <strong class="mtr-right">Besaran turunan terbentuk dari kombinasi besaran pokok.</strong>
</div>

## 🧩 Cara Menentukan Apakah Suatu Besaran Termasuk Besaran Turunan

Gunakan pertanyaan sederhana: **"apakah besaran ini dapat dinyatakan sebagai kombinasi dari besaran pokok?"**

Contohnya, kecepatan = panjang/waktu -- karena tersusun dari panjang dan waktu, maka kecepatan adalah besaran turunan. Contoh lain, gaya = massa × percepatan -- percepatan sendiri tersusun dari panjang dan waktu, jadi gaya juga pada akhirnya bisa dinyatakan berdasarkan besaran pokok.

## 🔗 Hubungan Besaran Turunan dengan Dimensi

Besaran turunan juga bisa dihubungkan dengan materi [dimensi](/materi/dimensi) yang sudah kita pelajari sebelumnya. Contohnya gaya:

<div class="mtr-formula">F = m × a → [F] = M × LT⁻² = MLT⁻²</div>

Ini menunjukkan bahwa besaran turunan dapat dianalisis berdasarkan besaran pokok penyusunnya lewat dimensinya.

## 🚀 Coba Sendiri

Perhatikan beberapa persamaan berikut:

* v = s/t
* ρ = m/V
* F = m × a
* P = F/A

Cobalah tentukan: besaran apa yang dihasilkan? Besaran pokok apa saja yang menyusunnya? Apa satuan SI-nya? Bagaimana bentuk dimensinya?

Jika kalian sudah bisa menjawab keempat pertanyaan tersebut, berarti kalian mulai memahami hubungan antara besaran pokok, besaran turunan, satuan, dan dimensi.

<div class="mtr-cta">
<p>Sudah paham besaran pokok, besaran turunan, dan dimensi -- yuk lihat semuanya dari sudut pandang alat yang benar-benar dipakai untuk mengukur.</p>
<a href="/materi/alat-ukur" class="btn btn-primary">🔧 Lihat Materi Alat Ukur →</a>
</div>
