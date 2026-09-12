---
title: "Gerak Lurus Berubah Beraturan (GLBB)"
description: "Gerak pada lintasan lurus dengan percepatan konstan -- rumus kecepatan dan posisi, GLBB dipercepat vs diperlambat, gerak jatuh bebas sebagai kasus khusus, lengkap contoh soal."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-09-13
tags: ["Gerak Lurus", "GLBB", "Kinematika", "Fisika Kelas X", "Fase E"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/gerak-lurus.html"
  judul: "Virtual Motion Lab -- Mode GLBB"
  sumber: "Lab Maya PancaEdu"
  tinggi: 2900
kuis:
  - soal: "Gerak Lurus Berubah Beraturan (GLBB) adalah gerak pada lintasan lurus dengan..."
    pilihan: ["Kecepatan konstan", "Percepatan konstan (tetap)", "Percepatan yang terus berubah", "Lintasan melengkung"]
    jawaban: 1
    penjelasan: "GLBB dicirikan oleh percepatan yang konstan -- kecepatannya berubah secara teratur dari waktu ke waktu."
  - soal: "Pada GLBB yang dipercepat, arah percepatan (a) terhadap arah kecepatan (v) adalah..."
    pilihan: ["Searah", "Berlawanan arah", "Tegak lurus", "Tidak ada hubungan"]
    jawaban: 0
    penjelasan: "Pada GLBB dipercepat, a searah dengan v sehingga kelajuan benda makin besar. Kalau berlawanan arah, benda justru diperlambat."
  - soal: "Sebuah motor mula-mula diam (v0 = 0), lalu bergerak dengan percepatan 2 m/s². Kecepatannya setelah 4 sekon adalah..."
    pilihan: ["2 m/s", "4 m/s", "6 m/s", "8 m/s"]
    jawaban: 3
    penjelasan: "v = v0 + at = 0 + 2×4 = 8 m/s."
  - soal: "Gerak jatuh bebas adalah kasus khusus GLBB dengan percepatan sebesar..."
    pilihan: ["0 m/s²", "Percepatan gravitasi (g)", "Kecepatan awal benda", "Selalu berubah-ubah"]
    jawaban: 1
    penjelasan: "Gerak jatuh bebas adalah GLBB dengan percepatan tetap sebesar percepatan gravitasi (g ≈ 10 m/s²), arah ke bawah."
  - soal: "Pada grafik kecepatan terhadap waktu (v-t) untuk GLBB, bentuk grafiknya adalah..."
    pilihan: ["Garis lurus datar", "Garis lurus miring", "Parabola", "Lingkaran"]
    jawaban: 1
    penjelasan: "Grafik v-t pada GLBB berupa garis lurus miring, dengan kemiringan (gradien) sama dengan percepatannya."
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

Kalau di materi [Gerak Lurus Beraturan (GLB)](/materi/gerak-lurus-beraturan) kecepatannya konstan, sekarang kita bahas kebalikannya: gerak lurus yang kecepatannya **berubah secara teratur** -- disebut **Gerak Lurus Berubah Beraturan (GLBB)**.

## 🏎️ Apa itu GLBB?

GLBB adalah gerak pada lintasan lurus dengan **percepatan konstan** (tetap) -- artinya kecepatan benda berubah dengan laju yang sama setiap detiknya. GLBB ada dua jenis:

- **GLBB dipercepat**: percepatan (a) SEARAH dengan kecepatan (v), sehingga kelajuan benda makin lama makin besar. Contoh: mobil yang menginjak gas dari posisi diam.
- **GLBB diperlambat**: percepatan (a) BERLAWANAN ARAH dengan kecepatan (v), sehingga kelajuan benda makin lama makin kecil (bisa sampai berhenti). Contoh: mobil yang mengerem.

## 📐 Rumus GLBB

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Yang Dihitung</th><th>Rumus</th></tr>
</thead>
<tbody>
<tr><td>Kecepatan pada waktu t</td><td><em>v = v₀ + at</em></td></tr>
<tr><td>Posisi pada waktu t</td><td><em>x = x₀ + v₀t + ½at²</em></td></tr>
<tr><td>Tanpa variabel waktu</td><td><em>v² = v₀² + 2a(x − x₀)</em></td></tr>
</tbody>
</table>
</div>
</div>

dengan v₀ = kecepatan awal, a = percepatan (konstan), t = waktu, dan x₀ = posisi awal.

### Contoh Soal

Sebuah motor mula-mula diam (v₀ = 0 m/s), lalu bergerak dengan percepatan 2 m/s². Berapa kecepatannya setelah 4 sekon, dan berapa jarak yang sudah ditempuh?

- v = v₀ + at = 0 + 2×4 = **8 m/s**
- x = x₀ + v₀t + ½at² = 0 + 0 + ½×2×4² = ½×2×16 = **16 m**

## ⬇️ Gerak Jatuh Bebas -- Kasus Khusus GLBB

Gerak jatuh bebas (benda dijatuhkan tanpa kecepatan awal, cuma dipengaruhi gravitasi) adalah kasus khusus GLBB, dengan percepatan tetap sebesar **percepatan gravitasi (g ≈ 10 m/s²)**, arah ke bawah. Semua rumus GLBB di atas tetap berlaku, tinggal ganti a dengan g.

## 📈 Ciri Khas Grafik GLBB

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Grafik</th><th>Bentuknya</th><th>Artinya</th></tr>
</thead>
<tbody>
<tr><td>Posisi vs Waktu (x-t)</td><td>Parabola (melengkung)</td><td>Kemiringan garis singgungnya berubah -- itulah kecepatan yang berubah</td></tr>
<tr><td>Kecepatan vs Waktu (v-t)</td><td>Garis lurus miring</td><td>Kemiringan (gradien) garis = percepatan (a)</td></tr>
<tr><td>Percepatan vs Waktu (a-t)</td><td>Garis datar (bukan nol)</td><td>Percepatan tetap sepanjang gerak (kecuali berhenti)</td></tr>
</tbody>
</table>
</div>
</div>

Coba sendiri di simulasi di bawah -- pilih mode GLBB, atur kecepatan awal dan percepatannya, lalu bandingkan bentuk ketiga grafiknya dengan GLB.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "GLBB selalu berarti benda makin cepat."</strong><br>
Tidak selalu. <strong class="mtr-right">GLBB bisa dipercepat ATAU diperlambat</strong>, tergantung apakah arah percepatan searah atau berlawanan arah dengan kecepatan.
</div>

## 🤔 Coba Pikirkan

Sebuah kereta mainan bergerak dengan kecepatan awal 6 m/s, lalu direm dengan percepatan -2 m/s² (berlawanan arah kecepatan).

1. Berapa lama waktu yang dibutuhkan kereta itu sampai benar-benar berhenti?
2. Apa yang terjadi kalau pengereman terus berlangsung setelah kereta berhenti -- apakah kereta akan bergerak mundur?

Coba buktikan jawabanmu lewat simulasi di atas (aktifkan mode GLBB dengan percepatan berlawanan arah kecepatan).

<div class="mtr-cta">
<p>Sekarang setelah paham dua jenis gerak lurus (GLB dan GLBB), saatnya belajar alat matematika penting untuk gerak dua dimensi: Vektor.</p>
<a href="/materi/vektor" class="btn btn-primary">🧭 Lanjut ke Vektor →</a>
</div>
