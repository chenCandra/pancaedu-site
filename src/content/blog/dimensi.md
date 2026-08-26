---
title: "Dimensi: Cara Fisika 'Membaca' Susunan Sebuah Besaran"
description: "Belajar dimensi besaran -- cara menunjukkan susunan sebuah besaran dari besaran pokok, tanpa bergantung nama satuannya, plus cara pakai dimensi buat memeriksa apakah sebuah persamaan Fisika masuk akal."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-26
tags: ["Dimensi", "Fisika Kelas X", "Analisis Dimensi"]
kuis:
  - soal: "Simbol dimensi yang digunakan untuk menyatakan besaran panjang adalah..."
    pilihan: ["M", "T", "L", "I"]
    jawaban: 2
    penjelasan: "Dimensi panjang dinyatakan dengan simbol L."
  - soal: "Kecepatan memiliki persamaan v = Δx / Δt. Dimensi kecepatan adalah..."
    pilihan: ["LT", "LT⁻¹", "L²T⁻¹", "MLT⁻¹"]
    jawaban: 1
    penjelasan: "Perpindahan memiliki dimensi L, sedangkan waktu memiliki dimensi T. Karena kecepatan merupakan perpindahan dibagi waktu, dimensinya adalah LT⁻¹."
  - soal: "Sebuah besaran memiliki persamaan F = m × a. Jika massa berdimensi M dan percepatan berdimensi LT⁻², maka dimensi gaya adalah..."
    pilihan: ["MLT⁻²", "ML²T⁻²", "ML⁻¹T⁻²", "LT⁻²"]
    jawaban: 0
    penjelasan: "Dari F = m × a, diperoleh [F] = M × LT⁻² = MLT⁻²."
  - soal: "Manakah pernyataan yang benar tentang satuan dan dimensi?"
    pilihan: ["Newton adalah dimensi gaya", "Meter adalah dimensi panjang", "Kilogram adalah dimensi massa", "Newton adalah satuan gaya"]
    jawaban: 3
    penjelasan: "Newton (N) merupakan satuan untuk gaya. Dimensi gaya adalah MLT⁻²."
  - soal: "Persamaan s = v × t diperiksa secara dimensi. Jika s berdimensi L, v berdimensi LT⁻¹, dan t berdimensi T, maka hasil pemeriksaannya adalah..."
    pilihan: ["Ruas kiri dan kanan sama-sama berdimensi L", "Ruas kiri L sedangkan ruas kanan T", "Ruas kiri T sedangkan ruas kanan L", "Kedua ruas tidak memiliki dimensi"]
    jawaban: 0
    penjelasan: "Dimensi ruas kanan adalah LT⁻¹ × T = L, sama dengan dimensi ruas kiri. Jadi persamaan tersebut konsisten secara dimensi."
draft: false
---

<style>
.mtr-table-wrap, .mtr-steps { margin-block: 2rem; }

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

.mtr-step {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 1rem;
  position: relative;
  padding-bottom: 1.5rem;
}

.mtr-step:last-child { padding-bottom: 0; }

.mtr-step-num {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: var(--accent-ink);
  box-shadow: var(--glow-accent);
  position: relative;
  z-index: 1;
}

.mtr-step:not(:last-child) .mtr-step-num::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  width: 1px;
  height: 1.5rem;
  background: var(--border-strong);
}

.mtr-step-body p { margin: 0; color: var(--ink-soft); font-size: 0.9375rem; }
.mtr-step-body strong { color: var(--ink); }

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
</style>

## 🔎 Apa Itu Dimensi?

Ketika kita belajar besaran turunan, kita melihat bahwa satuan suatu besaran bisa berasal dari gabungan satuan besaran pokok. Misalnya, kecepatan memiliki satuan m/s, sedangkan gaya memiliki satuan kg·m/s².

Nah, ada cara lain untuk menunjukkan hubungan tersebut tanpa bergantung pada nama satuannya. Cara itu disebut **dimensi**.

Dimensi menunjukkan bagaimana suatu besaran tersusun dari besaran-besaran pokok.

Jadi, kalau satuan menjawab pertanyaan "diukur dengan apa?", dimensi lebih menjawab **"tersusun dari besaran apa?"**

Sebagai contoh, kecepatan memiliki satuan meter per sekon (v = m/s). Dalam dimensi, panjang dinyatakan dengan simbol **L** dan waktu dengan **T**, sehingga:

<div class="mtr-formula">[v] = [L][T]⁻¹, atau ditulis [v] = LT⁻¹</div>

Simbol kurung siku `[ ]` digunakan untuk menyatakan dimensi suatu besaran.

## 🧱 Dimensi Besaran Pokok

Karena besaran turunan dibentuk dari besaran pokok, kita perlu mengenal simbol dimensi dari tujuh besaran pokok SI.

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Besaran Pokok</th><th>Satuan SI</th><th>Simbol Satuan</th><th>Simbol Dimensi</th></tr>
</thead>
<tbody>
<tr><td>Panjang</td><td>meter</td><td>m</td><td><em>L</em></td></tr>
<tr><td>Massa</td><td>kilogram</td><td>kg</td><td><em>M</em></td></tr>
<tr><td>Waktu</td><td>sekon</td><td>s</td><td><em>T</em></td></tr>
<tr><td>Kuat arus listrik</td><td>ampere</td><td>A</td><td><em>I</em></td></tr>
<tr><td>Suhu termodinamik</td><td>kelvin</td><td>K</td><td><em>Θ</em></td></tr>
<tr><td>Jumlah zat</td><td>mol</td><td>mol</td><td><em>N</em></td></tr>
<tr><td>Intensitas cahaya</td><td>kandela</td><td>cd</td><td><em>J</em></td></tr>
</tbody>
</table>
</div>
</div>

Ada satu hal yang perlu diperhatikan: **simbol satuan dan simbol dimensi bukanlah hal yang sama.**

Contohnya:

* Panjang → satuan meter (m) → dimensi L
* Massa → satuan kilogram (kg) → dimensi M
* Waktu → satuan sekon (s) → dimensi T

Jadi, jangan sampai tertukar antara **m** sebagai simbol satuan meter dan **L** sebagai simbol dimensi panjang.

## 📐 Menghitung Dimensi Besaran Turunan

Sekarang kita coba turunkan dimensi beberapa besaran turunan yang sering muncul, satu per satu. Polanya selalu sama: tulis rumusnya, ganti tiap besaran dengan dimensinya, lalu sederhanakan.

### Luas

Luas diperoleh dari panjang dikalikan panjang: **A = p × l**.

Dimensi panjang adalah [L]. Karena ada dua besaran panjang yang dikalikan:

<div class="mtr-formula">[A] = [L][L] = L²</div>

Perhatikan perbedaannya: satuan luas → m², sedangkan dimensi luas → L². Satuan menggunakan meter, dimensi menggunakan simbol dasar panjang.

### Volume

Volume balok diperoleh dari **V = p × l × t** — ketiganya merupakan besaran panjang. Maka:

<div class="mtr-formula">[V] = [L][L][L] = L³</div>

Pola ini cukup mudah: jika suatu besaran diperoleh dari tiga besaran panjang yang dikalikan, dimensinya akan memiliki pangkat tiga (satuan → m³, dimensi → L³).

### Kecepatan

Kecepatan diperoleh dari perpindahan dibagi waktu: **v = Δx / Δt**.

Perpindahan memiliki dimensi panjang [Δx] = L, sedangkan waktu memiliki dimensi [Δt] = T. Maka:

<div class="mtr-formula">[v] = L / T = LT⁻¹</div>

Satuan → m/s, dimensi → LT⁻¹. Keduanya menunjukkan hal yang sama dari sudut pandang yang berbeda.

### Percepatan

Percepatan merupakan perubahan kecepatan terhadap waktu: **a = Δv / Δt**.

Kita sudah tahu [v] = LT⁻¹. Kemudian dibagi dengan waktu (T):

<div class="mtr-formula">[a] = LT⁻¹ / T = LT⁻²</div>

Satuan → m/s², dimensi → LT⁻². Pangkat negatif pada T muncul karena waktu berada di penyebut.

### Massa Jenis

Massa jenis dirumuskan **ρ = m / V**.

Massa memiliki dimensi [m] = M, volume memiliki dimensi [V] = L³. Maka:

<div class="mtr-formula">[ρ] = M / L³ = ML⁻³</div>

Satuan massa jenis adalah kg/m³, sedangkan dimensinya ML⁻³.

### Gaya

Gaya dapat dihitung menggunakan Hukum II Newton: **F = m × a**.

Massa memiliki dimensi [m] = M, percepatan memiliki dimensi [a] = LT⁻². Maka:

<div class="mtr-formula">[F] = M × LT⁻² = MLT⁻²</div>

Menariknya, dari sini kita juga dapat melihat asal satuan newton. Satuan gaya adalah N = kg·m/s², sedangkan dimensinya [F] = MLT⁻². Jadi, **newton adalah satuan, sedangkan MLT⁻² adalah dimensi.**

### Tekanan

Tekanan dirumuskan **P = F / A**.

Dimensi gaya [F] = MLT⁻², dimensi luas [A] = L². Maka:

<div class="mtr-formula">[P] = MLT⁻² / L² = ML⁻¹T⁻²</div>

Satuan → Pa atau N/m², dimensi → ML⁻¹T⁻².

### Energi dan Usaha

Untuk usaha, kita dapat menggunakan **W = F × s**.

Dimensi gaya [F] = MLT⁻², sedangkan perpindahan memiliki dimensi [s] = L. Maka:

<div class="mtr-formula">[W] = MLT⁻² × L = ML²T⁻²</div>

Energi memiliki dimensi yang sama dengan usaha: **[E] = ML²T⁻²**. Satuannya adalah joule (J).

### Daya

Daya dapat dirumuskan **P = W / t**.

Dimensi usaha [W] = ML²T⁻², kemudian dibagi dengan waktu:

<div class="mtr-formula">[P] = ML²T⁻² / T = ML²T⁻³</div>

Satuan → watt (W), dimensi → ML²T⁻³.

## 🧩 Cara Menentukan Dimensi Suatu Besaran

Kalau nanti kalian diminta menentukan dimensi sebuah besaran, tidak perlu panik. Gunakan langkah sederhana berikut, misalnya untuk mencari dimensi gaya (F = ma):

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Cari persamaannya.</strong> Misalnya ingin mencari dimensi gaya: F = ma.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Ganti setiap besaran dengan dimensinya.</strong> Massa: [m] = M. Percepatan: [a] = LT⁻².</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Gabungkan.</strong> [F] = M(LT⁻²)</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Sederhanakan.</strong> [F] = MLT⁻². Selesai.</p>
    </div>
  </div>
</div>

Jadi, kuncinya bukan menghafalkan semua dimensi, tetapi mengetahui persamaan yang digunakan dan memahami dimensi besaran pokok.

## 📋 Beberapa Dimensi yang Perlu Diingat

Berikut beberapa besaran yang sering muncul pada materi Fisika kelas X.

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Besaran</th><th>Satuan SI</th><th>Dimensi</th></tr>
</thead>
<tbody>
<tr><td>Panjang</td><td>m</td><td><em>L</em></td></tr>
<tr><td>Massa</td><td>kg</td><td><em>M</em></td></tr>
<tr><td>Waktu</td><td>s</td><td><em>T</em></td></tr>
<tr><td>Luas</td><td>m²</td><td><em>L²</em></td></tr>
<tr><td>Volume</td><td>m³</td><td><em>L³</em></td></tr>
<tr><td>Kecepatan</td><td>m/s</td><td><em>LT⁻¹</em></td></tr>
<tr><td>Percepatan</td><td>m/s²</td><td><em>LT⁻²</em></td></tr>
<tr><td>Massa jenis</td><td>kg/m³</td><td><em>ML⁻³</em></td></tr>
<tr><td>Gaya</td><td>N</td><td><em>MLT⁻²</em></td></tr>
<tr><td>Tekanan</td><td>Pa</td><td><em>ML⁻¹T⁻²</em></td></tr>
<tr><td>Energi/Usaha</td><td>J</td><td><em>ML²T⁻²</em></td></tr>
<tr><td>Daya</td><td>W</td><td><em>ML²T⁻³</em></td></tr>
</tbody>
</table>
</div>
</div>

Tabel ini boleh digunakan sebagai ringkasan setelah kalian memahami cara mendapatkannya. Jangan menjadikannya sekadar daftar yang harus dihafalkan.

## 🔍 Dimensi Bukan Satuan

Ini salah satu bagian yang paling sering membuat siswa tertukar.

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Dimensi gaya adalah newton."</strong><br>
Salah. Newton (N) adalah <strong class="mtr-right">satuan</strong> gaya. Dimensi gaya adalah MLT⁻².
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Dimensi kecepatan adalah m/s."</strong><br>
Salah. m/s adalah <strong class="mtr-right">satuan</strong> kecepatan. Dimensi kecepatan adalah LT⁻¹.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Dimensi massa adalah kilogram."</strong><br>
Salah. Kilogram (kg) adalah <strong class="mtr-right">satuan</strong> massa. Dimensi massa adalah M.
</div>

## 🧠 Memeriksa Persamaan Fisika dengan Dimensi

Dimensi bukan hanya simbol tambahan yang harus kalian hafalkan. Salah satu kegunaannya adalah **memeriksa apakah sebuah persamaan Fisika masuk akal secara dimensi.**

### Contoh: s = vt

Apakah persamaan ini benar secara dimensi?

* Dimensi ruas kiri: [s] = L
* Dimensi ruas kanan: [vt] = (LT⁻¹)(T) = L

Kedua ruas memiliki dimensi yang sama (L = L) — berarti persamaan tersebut **konsisten secara dimensi**.

### Contoh: s = vt²

Sekarang coba periksa persamaan ini. Apakah masih konsisten?

* Ruas kiri: [s] = L
* Ruas kanan: [vt²] = (LT⁻¹)(T²) = LT

Hasilnya, L ≠ LT — jadi persamaan ini **tidak konsisten secara dimensi**.

Namun, ada satu hal penting: **persamaan yang konsisten secara dimensi belum tentu benar secara Fisika.** Analisis dimensi dapat membantu menemukan kesalahan, tetapi tidak selalu dapat membuktikan bahwa sebuah persamaan benar sepenuhnya.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Kalau dimensinya sama, berarti persamaannya pasti benar."</strong><br>
Belum tentu. Persamaan yang benar harus memenuhi prinsip Fisika yang sesuai — <strong class="mtr-right">analisis dimensi hanya membantu memeriksa konsistensi, bukan bukti kebenaran penuh.</strong>
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Besaran yang satuannya berbeda pasti dimensinya berbeda."</strong><br>
Tidak selalu. <strong class="mtr-right">Energi dan usaha punya satuan SI yang sama (joule) dan dimensi yang sama (ML²T⁻²)</strong> -- ada juga besaran yang bisa pakai satuan berbeda tapi tetap punya dimensi yang sama.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Dimensi digunakan untuk menggantikan satuan."</strong><br>
Bukan begitu. <strong class="mtr-right">Satuan dipakai dalam pengukuran & perhitungan kuantitatif, sedangkan dimensi dipakai untuk menunjukkan susunan suatu besaran dan membantu memeriksa persamaan.</strong>
</div>

## 🌍 Dimensi dalam Fisika

Ketika kalian mulai mempelajari Fisika lebih jauh, jumlah rumus yang ditemui akan semakin banyak. Tidak semuanya harus dihafalkan.

Dengan memahami dimensi, kita memiliki salah satu alat untuk memeriksa apakah hubungan antarbesaran dalam sebuah persamaan masuk akal. Misalnya kita tahu [v] = LT⁻¹ dan [t] = T, maka kita dapat langsung mengetahui:

<div class="mtr-formula">[vt] = L</div>

Artinya, hasil perkalian kecepatan dan waktu memiliki dimensi panjang — itulah yang terjadi pada persamaan **s = vt**.
