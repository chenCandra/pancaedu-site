---
title: "Gerak Lurus Beraturan (GLB)"
description: "Gerak pada lintasan lurus dengan kecepatan konstan -- rumus posisi, ciri khas grafik x-t/v-t/a-t, dan contoh soal, sebagai bekal sebelum masuk ke gerak dua dimensi."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-09-13
tags: ["Gerak Lurus", "GLB", "Kinematika", "Fisika Kelas X", "Fase E"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/gerak-lurus.html"
  judul: "Virtual Motion Lab -- Mode GLB"
  sumber: "Lab Maya PancaEdu"
  tinggi: 2900
kuis:
  - soal: "Gerak Lurus Beraturan (GLB) adalah gerak pada lintasan lurus dengan..."
    pilihan: ["Kecepatan yang terus berubah", "Kecepatan konstan (tetap)", "Percepatan konstan tapi bukan nol", "Lintasan melengkung"]
    jawaban: 1
    penjelasan: "GLB dicirikan oleh kecepatan yang konstan -- tidak berubah besar maupun arahnya."
  - soal: "Pada GLB, berapa besar percepatannya?"
    pilihan: ["Selalu nol", "Selalu positif", "Selalu negatif", "Berubah-ubah"]
    jawaban: 0
    penjelasan: "Karena kecepatan tidak berubah, percepatan pada GLB selalu nol (a = 0)."
  - soal: "Sebuah mobil melaju konstan 20 m/s selama 5 sekon. Jarak yang ditempuh adalah..."
    pilihan: ["25 m", "50 m", "100 m", "4 m"]
    jawaban: 2
    penjelasan: "x = v × t = 20 × 5 = 100 m."
  - soal: "Pada grafik posisi terhadap waktu (x-t) untuk GLB, bentuk grafiknya adalah..."
    pilihan: ["Garis lurus miring", "Parabola", "Garis lurus datar", "Lingkaran"]
    jawaban: 0
    penjelasan: "Grafik x-t pada GLB berupa garis lurus miring, dengan kemiringan (gradien) sama dengan kecepatannya."
  - soal: "Kenapa jarak yang ditempuh benda GLB setiap detiknya selalu sama?"
    pilihan: ["Karena percepatannya nol, sehingga kecepatan tetap konstan", "Karena benda tidak benar-benar bergerak", "Karena gaya yang bekerja sangat besar", "Ini cuma kebetulan, tidak ada alasan khusus"]
    jawaban: 0
    penjelasan: "Karena a = 0, kecepatan v selalu sama dari detik ke detik -- sehingga jarak per detik (x = v × t) juga selalu sama."
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

Setelah tuntas dengan [Besaran dan Satuan](/materi/besaran-dan-satuan) serta cara [mengukur dan melaporkan hasil pengukuran](/materi/pengukuran-alat-ukur-dan-angka-penting), sekarang kita mulai bab baru: **Gerak**. Kita mulai dari jenis gerak paling sederhana -- gerak pada lintasan lurus dengan kecepatan yang tidak berubah, disebut **Gerak Lurus Beraturan (GLB)**.

## 🚗 Apa itu GLB?

GLB adalah gerak suatu benda pada lintasan lurus dengan **kecepatan konstan** -- besarnya tidak berubah, dan arahnya juga tidak berubah. Karena kecepatan tidak berubah, otomatis **percepatan pada GLB selalu nol** (a = 0). Contoh yang mendekati GLB dalam kehidupan sehari-hari: mobil yang melaju di jalan tol lurus dengan cruise control, atau kereta yang melaju stabil di rel lurus.

## 📐 Rumus GLB

Karena kecepatan (v) konstan, posisi benda pada waktu t dirumuskan:

**x = x₀ + v·t**

dengan x₀ = posisi awal, v = kecepatan (konstan), dan t = waktu.

### Contoh Soal

Sebuah mobil bergerak GLB dengan kecepatan 20 m/s, mulai dari posisi x₀ = 0. Berapa posisinya setelah 5 sekon?

x = x₀ + v·t = 0 + 20 × 5 = **100 m**

## 📈 Ciri Khas Grafik GLB

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Grafik</th><th>Bentuknya</th><th>Artinya</th></tr>
</thead>
<tbody>
<tr><td>Posisi vs Waktu (x-t)</td><td>Garis lurus miring</td><td>Kemiringan (gradien) garis = kecepatan (v)</td></tr>
<tr><td>Kecepatan vs Waktu (v-t)</td><td>Garis lurus datar (horizontal)</td><td>Kecepatan tidak berubah dari waktu ke waktu</td></tr>
<tr><td>Percepatan vs Waktu (a-t)</td><td>Garis datar di angka nol</td><td>Percepatan selalu nol sepanjang gerak</td></tr>
</tbody>
</table>
</div>
</div>

Coba sendiri di simulasi di bawah -- pilih mode GLB, atur kecepatannya, jalankan eksperimen, lalu perhatikan ketiga grafik itu terbentuk secara real-time, tersinkron dengan animasi keretanya.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Kalau kecepatannya besar, berarti percepatannya juga besar."</strong><br>
Tidak tepat. <strong class="mtr-right">Kecepatan dan percepatan itu dua besaran berbeda</strong> -- benda GLB bisa punya kecepatan 100 m/s sekalipun, tapi percepatannya tetap nol, karena kecepatannya tidak berubah dari waktu ke waktu.
</div>

## 🤔 Coba Pikirkan

Dua mobil melaju GLB di jalan yang sama: Mobil A dengan kecepatan 15 m/s, Mobil B dengan kecepatan 25 m/s, keduanya berangkat dari titik yang sama pada waktu yang sama.

1. Setelah 4 sekon, berapa jarak masing-masing mobil dari titik awal?
2. Berapa selisih jarak kedua mobil itu pada detik ke-4?

Coba buktikan jawabanmu lewat simulasi di atas.

<div class="mtr-cta">
<p>Sekarang setelah paham gerak dengan kecepatan konstan, saatnya belajar gerak yang kecepatannya berubah secara teratur.</p>
<a href="/materi/gerak-lurus-berubah-beraturan" class="btn btn-primary">🏎️ Lanjut ke Gerak Lurus Berubah Beraturan (GLBB) →</a>
</div>
