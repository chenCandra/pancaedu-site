---
title: "Gerak Parabola"
description: "Gerak dua dimensi yang merupakan gabungan GLB (horizontal) dan GLBB (vertikal) -- rumus posisi, kecepatan, tinggi maksimum, waktu di udara, dan jangkauan, lengkap contoh soal."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-09-12
tags: ["Gerak Parabola", "Gerak Dua Dimensi", "Fisika Kelas X", "Fase E"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/gerak-parabola.html"
  judul: "Projectile Motion Lab"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1500
kuis:
  - soal: "Gerak parabola adalah gabungan dari dua jenis gerak, yaitu..."
    pilihan: ["GLB horizontal dan GLBB vertikal", "GLBB horizontal dan GLB vertikal", "GLB pada kedua sumbu", "GLBB pada kedua sumbu"]
    jawaban: 0
    penjelasan: "Gerak horizontal berkecepatan konstan (GLB) karena tidak ada gaya horizontal, sedangkan gerak vertikal dipengaruhi gravitasi (GLBB)."
  - soal: "Sepanjang lintasan gerak parabola (tanpa gesekan udara), komponen kecepatan horizontal (vx)..."
    pilihan: ["Terus bertambah", "Terus berkurang", "Tetap konstan", "Berubah jadi nol di titik tertinggi"]
    jawaban: 2
    penjelasan: "Karena tidak ada gaya pada sumbu horizontal, vx tetap konstan sepanjang lintasan -- inilah sebabnya gerak horizontalnya disebut GLB."
  - soal: "Pada titik tertinggi lintasan gerak parabola, komponen kecepatan vertikal (vy) besarnya..."
    pilihan: ["Sama dengan v0y", "Nol", "Maksimum", "Negatif"]
    jawaban: 1
    penjelasan: "Di titik tertinggi, benda sesaat berhenti bergerak naik sebelum mulai turun -- vy = 0 tepat di titik itu."
  - soal: "Sebuah peluru ditembakkan dengan sudut 30° dan peluru lain dengan sudut 60°, keduanya dengan kecepatan awal yang sama. Jangkauan (R) keduanya..."
    pilihan: ["30° lebih jauh", "60° lebih jauh", "Sama", "Tidak dapat ditentukan"]
    jawaban: 2
    penjelasan: "Sudut θ dan (90°-θ) selalu memberi jangkauan yang sama, karena sin(2×30°) = sin(60°) = sin(120°) = sin(2×60°)."
  - soal: "Sudut elevasi yang menghasilkan jangkauan (R) paling jauh untuk kecepatan awal yang sama adalah..."
    pilihan: ["30°", "45°", "60°", "90°"]
    jawaban: 1
    penjelasan: "Jangkauan maksimum tercapai saat sin(2θ) = 1, yaitu ketika 2θ = 90°, sehingga θ = 45°."
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
</style>

Sekarang kita gabungkan dua hal yang sudah kita pelajari sebelumnya: gerak lurus (GLB/GLBB, lihat materi [Pengukuran Tunggal & Pengukuran Berulang](/materi/pengukuran-alat-ukur-dan-angka-penting) dan Lab Maya Virtual Motion Lab) dengan [Vektor](/materi/vektor). Hasilnya: **gerak parabola** -- gerak dua dimensi yang lintasannya melengkung, seperti bola yang ditendang, peluru yang ditembakkan, atau bola basket yang dilempar ke ring.

## 🎯 Apa itu Gerak Parabola?

Gerak parabola terjadi ketika sebuah benda dilempar/ditembakkan dengan sudut elevasi tertentu (tidak tegak lurus ke atas, dan tidak mendatar sempurna), lalu bergerak hanya dipengaruhi gravitasi (mengabaikan gesekan udara). Yang membuatnya menarik: gerak ini sebenarnya adalah **gabungan dua gerak yang berjalan bersamaan tapi saling bebas (independen)**:

- **Sumbu horizontal (x): GLB** -- kecepatan konstan, karena tidak ada gaya yang bekerja secara horizontal.
- **Sumbu vertikal (y): GLBB** -- dipengaruhi gravitasi (g = 10 m/s², arah ke bawah), sama seperti gerak jatuh bebas tapi dengan kecepatan awal.

Poin pentingnya: **gerak horizontal TIDAK memengaruhi gerak vertikal, dan sebaliknya.** Keduanya cuma "kebetulan" terjadi di waktu yang sama, sehingga gabungannya membentuk lintasan parabola.

## 🧭 Menguraikan Kecepatan Awal

Kalau benda ditembakkan dengan kecepatan awal v₀ pada sudut elevasi θ (terhadap tanah/sumbu horizontal), kecepatan awal itu diuraikan jadi dua komponen -- sama seperti yang kita pelajari di materi Vektor:

- **v₀x = v₀ cos θ** (komponen horizontal, nilainya TETAP sepanjang lintasan)
- **v₀y = v₀ sin θ** (komponen vertikal, berubah karena gravitasi)

## 📈 Persamaan Posisi dan Kecepatan

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Sumbu</th><th>Posisi</th><th>Kecepatan</th></tr>
</thead>
<tbody>
<tr><td>Horizontal (x)</td><td><em>x(t) = v₀x · t</em></td><td><em>vx(t) = v₀x</em> (konstan)</td></tr>
<tr><td>Vertikal (y)</td><td><em>y(t) = v₀y · t − ½gt²</em></td><td><em>vy(t) = v₀y − gt</em></td></tr>
</tbody>
</table>
</div>
</div>

## ⬆️ Titik Tertinggi, Waktu di Udara, dan Jangkauan

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Waktu mencapai titik tertinggi.</strong> Di titik tertinggi, vy = 0 sesaat (benda berhenti naik sebelum mulai turun). Dari vy = v₀y − gt = 0, didapat <em>t naik = v₀y / g</em>.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Tinggi maksimum.</strong> Substitusi t naik ke persamaan y(t), didapat <em>h maks = v₀y² / (2g)</em>.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Waktu total di udara.</strong> Karena lintasannya simetris (waktu naik = waktu turun), <em>t total = 2 × t naik = 2v₀y / g</em>.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Jangkauan (jarak horizontal maksimum).</strong> Karena vx konstan, jangkauan <em>R = v₀x × t total</em>. Ini bisa juga ditulis <em>R = (v₀² sin 2θ) / g</em> -- dan karena sin(2θ) maksimum saat θ = 45°, sudut itulah yang memberi jangkauan paling jauh.</p>
    </div>
  </div>
</div>

### Contoh Soal 1

Sebuah bola ditendang dengan komponen kecepatan awal vx₀ = 10 m/s dan vy₀ = 10 m/s (g = 10 m/s²). Tentukan tinggi maksimum, waktu total di udara, dan jangkauannya.

- t naik = v₀y/g = 10/10 = **1 s**
- h maks = v₀y²/(2g) = 10²/(2×10) = 100/20 = **5 m**
- t total = 2 × t naik = **2 s**
- R = v₀x × t total = 10 × 2 = **20 m**

### Contoh Soal 2

Sebuah peluru ditembakkan dengan vx₀ = 15 m/s dan vy₀ = 20 m/s (g = 10 m/s²). Tentukan tinggi maksimum, waktu total di udara, dan jangkauannya.

- t naik = 20/10 = **2 s**
- h maks = 20²/(2×10) = 400/20 = **20 m**
- t total = 2 × 2 = **4 s**
- R = 15 × 4 = **60 m**

Coba sendiri di simulasi di bawah -- atur kecepatan awal dan sudut elevasi, tembakkan peluru virtualnya, lalu nyalakan mode "Bandingkan" untuk membuktikan sendiri kenapa sudut θ dan (90°-θ) selalu menghasilkan jangkauan yang sama.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Gerak horizontal dan gerak vertikal saling memengaruhi satu sama lain."</strong><br>
Tidak tepat. <strong class="mtr-right">Kedua gerak itu independen (saling bebas)</strong> -- gravitasi hanya bekerja pada sumbu vertikal, sehingga vx tetap konstan sepanjang lintasan, tidak peduli seberapa jauh benda sudah jatuh secara vertikal.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Sudut elevasi makin besar (mis. 80°), jangkauannya makin jauh."</strong><br>
Salah. <strong class="mtr-right">Jangkauan paling jauh justru terjadi pada sudut 45°</strong> -- sudut yang lebih besar dari itu (mis. 80°) membuat benda lebih banyak "naik" daripada "melaju", sehingga jangkauannya justru lebih pendek dibanding sudut 45°.
</div>

## 🤔 Coba Pikirkan

Dua bola ditendang dari titik yang sama dengan kecepatan awal yang sama besar, tapi Bola A ditendang dengan sudut 20° dan Bola B dengan sudut 70°.

1. Menurutmu, bola mana yang jangkauannya lebih jauh?
2. Bola mana yang mencapai titik tertinggi yang lebih tinggi?

Coba buktikan jawabanmu lewat simulasi di atas, lalu diskusikan dengan teman sekelas.
