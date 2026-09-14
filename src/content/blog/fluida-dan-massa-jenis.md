---
title: "Massa Jenis dan Tekanan Hidrostatis"
description: "Pengertian massa jenis dan kaitannya dengan terapung-melayang-tenggelam, ditambah tekanan hidrostatis (P = ρgh) yang bikin telinga terasa sakit saat menyelam makin dalam."
category: materi
mapel: "Fisika"
kelas: "XI"
pubDate: 2026-09-14
tags: ["Massa Jenis", "Tekanan Hidrostatis", "Fluida Statis", "Fisika Kelas XI"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/fluida-statis.html"
  judul: "Laboratorium Maya: Fluida Statis"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1500
kuis:
  - soal: "Rumus massa jenis adalah..."
    pilihan: ["ρ = m × V", "ρ = m / V", "ρ = V / m", "ρ = m + V"]
    jawaban: 1
    penjelasan: "Massa jenis dihitung dengan membagi massa benda dengan volumenya (ρ = m/V)."
  - soal: "Kalau massa jenis benda LEBIH KECIL dari massa jenis fluida, benda akan..."
    pilihan: ["Tenggelam", "Melayang", "Terapung", "Meledak"]
    jawaban: 2
    penjelasan: "Massa jenis benda lebih kecil dari fluida → benda terapung, seperti kayu di air."
  - soal: "Sebuah balok bermassa 540 gram punya volume 200 cm³. Berapa massa jenisnya?"
    pilihan: ["1,8 g/cm³", "2,0 g/cm³", "2,7 g/cm³", "3,7 g/cm³"]
    jawaban: 2
    penjelasan: "ρ = 540/200 = 2,7 g/cm³ — sama seperti contoh soal di materi ini (dan karena 2,7 > 1, balok itu tenggelam di air)."
  - soal: "Tekanan hidrostatis pada kedalaman h dirumuskan sebagai..."
    pilihan: ["P = m × g × h", "P = ρ × g × h", "P = ρ × g / h", "P = ρ + g + h"]
    jawaban: 1
    penjelasan: "Tekanan hidrostatis P = ρgh — makin dalam (h besar) atau makin rapat fluidanya (ρ besar), makin besar tekanannya."
  - soal: "Seorang penyelam berada 10 m di bawah permukaan air (ρ air = 1.000 kg/m³, g = 10 m/s², tekanan atmosfer P₀ = 100.000 Pa). Berapa tekanan TOTAL yang dialaminya?"
    pilihan: ["100.000 Pa", "150.000 Pa", "200.000 Pa", "1.000.000 Pa"]
    jawaban: 2
    penjelasan: "Ph = ρgh = 1.000×10×10 = 100.000 Pa. Tekanan total = P₀ + Ph = 100.000 + 100.000 = 200.000 Pa (2 kali tekanan atmosfer!)."
draft: false
---

<style>
.mtr-table-wrap, .mtr-cards { margin-block: 2rem; }

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

.mtr-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
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
}

.mtr-card-icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
.mtr-card h4 { font-family: var(--font-display); margin: 0 0 0.35rem; font-size: 1rem; }
.mtr-card p { font-size: 0.8438rem; color: var(--ink-soft); margin: 0; }

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

Kita mulai bab baru: **Fluida** -- ilmu yang mempelajari zat yang bisa mengalir (cairan dan gas). Sesi pertama ini membahas dua konsep dasar Fluida Statis (fluida yang diam): massa jenis, dan tekanan yang ditimbulkan oleh fluida diam itu sendiri -- tekanan hidrostatis.

## ⚖️ Rumus Massa Jenis

Massa jenis (densitas) menyatakan seberapa rapat massa suatu benda terhadap volumenya.

$$\rho = \frac{m}{V}$$

- $\rho$ = massa jenis (kg/m³ atau g/cm³)
- $m$ = massa benda (kg atau g)
- $V$ = volume benda (m³ atau cm³)

## 🌊 Kaitan dengan Terapung, Melayang, Tenggelam

- **Terapung**: massa jenis benda lebih kecil dari massa jenis fluida
- **Melayang**: massa jenis benda sama dengan massa jenis fluida
- **Tenggelam**: massa jenis benda lebih besar dari massa jenis fluida

## 🔵 Tekanan Hidrostatis

Coba selam ke kolam yang agak dalam -- telinga kalian akan terasa makin tertekan makin dalam kalian menyelam. Itu bukan perasaan saja: fluida diam ternyata memberi tekanan, dan tekanan itu membesar seiring kedalaman. Inilah **tekanan hidrostatis**.

$$P_h = \rho \cdot g \cdot h$$

- $P_h$ = tekanan hidrostatis (Pa)
- $\rho$ = massa jenis fluida (kg/m³)
- $g$ = percepatan gravitasi (≈ 10 m/s²)
- $h$ = kedalaman diukur dari permukaan fluida (m)

Satu sifat penting (disebut **Hukum Utama Hidrostatis**): tekanan hidrostatis HANYA bergantung pada kedalaman dan jenis fluidanya, **tidak peduli bentuk wadahnya**. Titik-titik pada kedalaman yang sama, di wadah apa pun bentuknya, punya tekanan hidrostatis yang persis sama.

Kalau permukaan fluida juga menanggung tekanan atmosfer (P₀ ≈ 1×10⁵ Pa di permukaan laut), maka **tekanan total** yang dialami suatu titik di kedalaman h adalah:

$$P_{total} = P_0 + \rho \cdot g \cdot h$$

## 🏗️ Fenomena Sehari-hari

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">🏊</span><h4>Telinga Sakit Saat Menyelam</h4><p>Makin dalam menyelam, tekanan hidrostatis di gendang telinga makin besar -- makanya penyelam perlu "menyamakan tekanan" (equalizing) secara berkala.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🧱</span><h4>Dinding Bendungan Menebal ke Bawah</h4><p>Bagian bawah bendungan menahan tekanan air jauh lebih besar dari bagian atas, jadi dindingnya sengaja dibuat lebih tebal di dasar.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🌊</span><h4>Palung Laut Dalam</h4><p>Di kedalaman 10.000 m, tekanan air bisa mencapai lebih dari 1.000 kali tekanan atmosfer -- makanya kapal selam riset butuh badan super kuat.</p></div>
</div>
</div>

## 🔬 Coba Sendiri di Lab Maya

Gunakan tab **Massa Jenis & Tekanan** di simulasi bawah ini. Coba ubah benda dan fluidanya, amati kapan benda terapung/melayang/tenggelam. Lalu geser slider kedalaman dan lihat sendiri bagaimana tekanan berubah -- catat bahwa bentuk tangkinya sama sekali tidak memengaruhi angka tekanannya.

## ✏️ Contoh Soal 1: Massa Jenis

Sebuah balok bermassa 540 gram memiliki volume 200 cm³. Apakah balok tersebut akan terapung atau tenggelam di air (massa jenis air = 1 g/cm³)?

**Pembahasan**: $\rho = m/V = 540/200 = 2{,}7$ g/cm³. Karena $2{,}7 > 1$, balok akan **tenggelam**.

## ✏️ Contoh Soal 2: Tekanan Hidrostatis

Seorang penyelam berada di kedalaman 10 m di bawah permukaan air laut (ρ air = 1.000 kg/m³, g = 10 m/s², tekanan atmosfer P₀ = 1×10⁵ Pa). Berapa tekanan total yang dialaminya?

**Pembahasan**:
$P_h = \rho g h = 1.000 \times 10 \times 10 = 100.000$ Pa

$P_{total} = P_0 + P_h = 100.000 + 100.000 = \textbf{200.000 Pa}$ (setara 2 atmosfer -- tekanan di kedalaman itu sudah dua kali lipat tekanan di permukaan!)

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Tekanan hidrostatis di dasar wadah yang lebar pasti lebih besar dari wadah yang sempit, kalau kedalamannya sama."</strong><br>
Tidak tepat. <strong class="mtr-right">Tekanan hidrostatis P = ρgh HANYA bergantung pada kedalaman h dan massa jenis fluida ρ</strong> -- sama sekali tidak peduli lebar atau bentuk wadahnya. Wadah lebar dan wadah sempit dengan kedalaman air yang sama akan punya tekanan hidrostatis yang PERSIS SAMA di dasarnya (meski totalnya jelas menampung volume air yang berbeda).
</div>

## 🤔 Coba Pikirkan

1. Kalau kamu menyelam di kolam renang sedalam 3 m, lalu menyelam lagi di laut sedalam 3 m, di mana tekanan hidrostatisnya lebih besar? (Petunjuk: bandingkan massa jenis air kolam vs air laut.)
2. Kenapa kapal selam butuh badan yang jauh lebih kuat dibanding kapal permukaan?

Coba uji jawabanmu lewat simulasi di atas dengan mengganti-ganti jenis fluidanya.

<div class="mtr-cta">
<p>Sekarang kita paham massa jenis dan tekanan hidrostatis. Selanjutnya kita pakai kedua konsep itu untuk memahami dua hukum fluida statis yang paling terkenal: Hukum Pascal (dongkrak hidrolik) dan Hukum Archimedes (gaya apung).</p>
<a href="/materi/hukum-pascal-dan-hukum-archimedes" class="btn btn-primary">🔧 Lanjut ke Hukum Pascal dan Hukum Archimedes →</a>
</div>
