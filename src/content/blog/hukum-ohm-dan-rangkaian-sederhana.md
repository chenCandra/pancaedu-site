---
title: "Hukum Ohm dan Rangkaian Sederhana"
description: "Hubungan tegangan, arus, dan hambatan (Hukum Ohm), cara memasang amperemeter dan voltmeter dengan benar, serta menghitung daya dan energi listrik."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Listrik Dinamis", "Hukum Ohm", "Fisika Kelas XII", "Rangkaian Listrik"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/hukum-ohm.html"
  judul: "Virtual Circuit Lab -- Rangkaian Sederhana"
  sumber: "Lab Maya PancaEdu"
  tinggi: 2900
kuis:
  - soal: "Hukum Ohm menyatakan hubungan antara..."
    pilihan: ["Tegangan, arus, dan hambatan", "Massa, gaya, dan percepatan", "Usaha, energi, dan daya", "Muatan, medan, dan gaya"]
    jawaban: 0
    penjelasan: "Hukum Ohm menyatakan V = I × R -- hubungan antara tegangan (V), arus (I), dan hambatan (R)."
  - soal: "Sebuah resistor 20 Ω dihubungkan ke sumber tegangan 6 V. Berapa arus yang mengalir?"
    pilihan: ["0,2 A", "0,3 A", "3,3 A", "120 A"]
    jawaban: 1
    penjelasan: "I = V/R = 6/20 = 0,3 A."
  - soal: "Amperemeter harus dipasang secara..."
    pilihan: ["Seri, di jalur utama rangkaian", "Paralel, melintang di komponen yang diukur", "Tidak masalah, seri atau paralel sama saja", "Terpisah dari rangkaian"]
    jawaban: 0
    penjelasan: "Amperemeter dipasang SERI supaya seluruh arus yang mau diukur melewatinya. Kalau dipasang paralel, pembacaannya jadi tidak akurat."
  - soal: "Voltmeter harus dipasang secara..."
    pilihan: ["Seri, di jalur utama rangkaian", "Paralel, melintang di komponen yang diukur", "Tidak masalah, seri atau paralel sama saja", "Terpisah dari rangkaian"]
    jawaban: 1
    penjelasan: "Voltmeter dipasang PARALEL terhadap komponen yang diukur, supaya bisa membandingkan beda potensial di kedua ujungnya."
  - soal: "Daya listrik dirumuskan sebagai..."
    pilihan: ["P = V × I", "P = V / I", "P = I / V", "P = V + I"]
    jawaban: 0
    penjelasan: "Daya listrik P = V × I -- hasil kali tegangan dan arus."
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

Setelah membahas [Listrik Statis](/materi/hukum-coulomb) (muatan diam), sekarang kita masuk ke **Listrik Dinamis** -- listrik yang bergerak sebagai arus, mengalir di dalam rangkaian. Kita mulai dari hubungan paling mendasar antara tegangan, arus, dan hambatan: **Hukum Ohm**.

## ⚡ Tiga Besaran Dasar Rangkaian Listrik

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Besaran</th><th>Simbol</th><th>Satuan</th><th>Artinya</th></tr>
</thead>
<tbody>
<tr><td>Tegangan (Beda Potensial)</td><td>V</td><td>Volt (V)</td><td>"Dorongan" yang membuat muatan mengalir</td></tr>
<tr><td>Arus Listrik</td><td>I</td><td>Ampere (A)</td><td>Banyaknya muatan yang mengalir tiap detik</td></tr>
<tr><td>Hambatan (Resistansi)</td><td>R</td><td>Ohm (Ω)</td><td>Seberapa besar komponen "menghalangi" aliran arus</td></tr>
</tbody>
</table>
</div>
</div>

## 📐 Hukum Ohm

Hukum Ohm menyatakan hubungan ketiga besaran itu:

**V = I × R** &nbsp; atau setara dengan &nbsp; **I = V / R**

### Contoh Soal

Sebuah resistor 20 Ω dihubungkan ke sumber tegangan 6 V. Berapa arus yang mengalir?

I = V/R = 6/20 = **0,3 A**

## 📟 Memasang Amperemeter dan Voltmeter dengan Benar

Ini bagian yang paling sering keliru -- perhatikan baik-baik:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Alat Ukur</th><th>Mengukur</th><th>Cara Pasang</th></tr>
</thead>
<tbody>
<tr><td>Amperemeter</td><td>Arus (I)</td><td><em>SERI</em> -- disisipkan di jalur utama, supaya SELURUH arus yang mau diukur melewatinya</td></tr>
<tr><td>Voltmeter</td><td>Tegangan (V)</td><td><em>PARALEL</em> -- dipasang melintang di komponen yang diukur, membandingkan beda potensial kedua ujungnya</td></tr>
</tbody>
</table>
</div>
</div>

Coba sendiri di simulasi di bawah -- tarik amperemeter dan voltmeter ke titik yang salah dulu, lihat apa yang terjadi (muncul peringatan "CONNECTION ERROR"), baru pasang di titik yang benar.

## ⚡ Daya dan Energi Listrik

Selain V, I, dan R, ada dua besaran turunan penting:

- **Daya listrik: P = V × I** (satuan watt, W) -- seberapa cepat energi listrik "dipakai" atau diubah jadi bentuk lain (cahaya, panas, dst).
- **Energi listrik: E = P × t** (satuan watt-jam/Wh, atau joule kalau t dalam sekon) -- total energi yang terpakai selama waktu tertentu. Inilah dasar perhitungan tagihan listrik rumah tangga (biasanya dalam kWh).

### Contoh Soal

Sebuah lampu menyala dengan tegangan 6 V dan arus 0,3 A. Berapa dayanya, dan berapa energi yang dipakai dalam 2 jam?

- P = V × I = 6 × 0,3 = **1,8 W**
- E = P × t = 1,8 × 2 = **3,6 Wh**

Coba jelajahi tab "🏠 Home Electricity" di simulasi bawah untuk melihat langsung bagaimana perangkat rumah tangga memakai energi listrik dari waktu ke waktu.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Amperemeter dan voltmeter sama-sama boleh dipasang seri atau paralel, tidak masalah."</strong><br>
Salah. <strong class="mtr-right">Amperemeter WAJIB seri, voltmeter WAJIB paralel</strong> -- memasang terbalik membuat pembacaan alat ukur jadi tidak akurat (bahkan bisa merusak alat ukur dalam praktik nyata).
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Menurunkan hambatan rangkaian sampai nol itu aman-aman saja."</strong><br>
Tidak tepat. <strong class="mtr-right">Hambatan yang terlalu kecil menyebabkan hubung singkat (short circuit)</strong> -- arus jadi sangat besar dan berbahaya, itulah kenapa ada mode proteksi otomatis pada sumber daya nyata.
</div>

## 🤔 Coba Pikirkan

Sebuah rangkaian sederhana memakai sumber tegangan 12 V dan resistor 50 Ω.

1. Berapa arus yang mengalir?
2. Kalau resistornya diganti jadi 100 Ω (dua kali lipat), apa yang terjadi pada arusnya?

Coba buktikan jawabanmu lewat simulasi di atas.

<div class="mtr-cta">
<p>Sekarang setelah paham dasar rangkaian sederhana, saatnya belajar bagaimana beberapa komponen dirangkai bersama: seri dan paralel.</p>
<a href="/materi/rangkaian-seri-dan-paralel" class="btn btn-primary">🔗 Lanjut ke Rangkaian Seri dan Paralel →</a>
</div>
