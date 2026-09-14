---
title: "Asas Kontinuitas dan Debit Aliran"
description: "Kenapa air menyembur lebih deras saat ujung selang ditekan dengan ibu jari? Jawabannya ada di Asas Kontinuitas -- aturan dasar Fluida Dinamis."
category: materi
mapel: "Fisika"
kelas: "XI"
pubDate: 2026-09-14
tags: ["Asas Kontinuitas", "Debit Aliran", "Fluida Dinamis", "Fisika Kelas XI"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/fluida-dinamis.html"
  judul: "Laboratorium Maya: Fluida Dinamis"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1300
kuis:
  - soal: "Fluida ideal dalam Fisika diasumsikan memiliki sifat-sifat berikut, KECUALI..."
    pilihan: ["Tak termampatkan (massa jenis tetap)", "Alirannya tunak/stasioner", "Tak kental (tanpa gesekan internal)", "Bisa berubah wujud sewaktu-waktu"]
    jawaban: 3
    penjelasan: "Fluida ideal diasumsikan tak termampatkan, alirannya tunak (kecepatan di suatu titik tidak berubah terhadap waktu), tak kental, dan alirannya laminar (streamline) -- bukan berubah wujud sewaktu-waktu."
  - soal: "Debit aliran (Q) dirumuskan sebagai..."
    pilihan: ["Q = A + v", "Q = A × v", "Q = A / v", "Q = v / A"]
    jawaban: 1
    penjelasan: "Debit Q = A × v, dengan A luas penampang pipa dan v kecepatan aliran fluida."
  - soal: "Asas Kontinuitas menyatakan bahwa untuk fluida ideal yang mengalir di pipa tertutup..."
    pilihan: ["Kecepatan aliran selalu sama di semua bagian pipa", "Debit aliran selalu sama di semua bagian pipa (A1v1 = A2v2)", "Tekanan selalu sama di semua bagian pipa", "Luas penampang selalu sama di semua bagian pipa"]
    jawaban: 1
    penjelasan: "Asas Kontinuitas: A1v1 = A2v2 -- debitnya harus sama, meski luas penampang dan kecepatannya bisa berbeda-beda di tiap bagian pipa."
  - soal: "Air mengalir dengan kecepatan 2 m/s di pipa berdiameter 10 cm, lalu masuk ke pipa berdiameter 5 cm. Berapa kecepatan alirannya di pipa yang lebih sempit?"
    pilihan: ["1 m/s", "2 m/s", "4 m/s", "8 m/s"]
    jawaban: 3
    penjelasan: "v2 = v1 × (d1/d2)² = 2 × (10/5)² = 2 × 4 = 8 m/s. Diameter jadi setengah → luas jadi 1/4 → kecepatan naik 4 kali lipat."
  - soal: "Kenapa menutup sebagian ujung selang taman dengan ibu jari membuat air memancar lebih jauh?"
    pilihan: ["Air jadi lebih ringan", "Luas penampang keluaran mengecil, sehingga menurut asas kontinuitas kecepatan aliran harus membesar", "Tekanan air di dalam selang menurun", "Ibu jari menambah energi pada air"]
    jawaban: 1
    penjelasan: "Menutup sebagian ujung selang memperkecil luas penampang keluaran (A). Karena debit Q = A×v harus tetap sama, mengecilnya A memaksa v (kecepatan) membesar -- makanya semburannya lebih deras dan jauh."
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

Setelah tuntas dengan Fluida Statis, sekarang kita masuk ke **Fluida Dinamis** -- fluida yang MENGALIR. Kita mulai dari aturan paling mendasar: hukum kekekalan untuk fluida yang mengalir di pipa.

## 🌀 Fluida Ideal

Supaya perhitungannya sederhana, Fisika SMA menganggap fluida yang mengalir sebagai **fluida ideal**, dengan empat asumsi:

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">🧊</span><h4>Tak Termampatkan</h4><p>Massa jenisnya tetap, tidak berubah walau tekanan berubah.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">⏱️</span><h4>Aliran Tunak (Stasioner)</h4><p>Kecepatan aliran di suatu titik tidak berubah terhadap waktu.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🚫</span><h4>Tak Kental</h4><p>Tidak ada gesekan internal (viskositas) yang menghambat aliran.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">➡️</span><h4>Aliran Laminar</h4><p>Mengalir mulus mengikuti garis arus (streamline), tidak bergolak/turbulen.</p></div>
</div>
</div>

## 🔀 Debit Aliran

**Debit** (Q) adalah volume fluida yang mengalir melewati suatu penampang tiap satuan waktu.

$$Q = \frac{V}{t} = A \cdot v$$

- $Q$ = debit (m³/s)
- $A$ = luas penampang pipa (m²)
- $v$ = kecepatan aliran fluida (m/s)

## ⚖️ Asas Kontinuitas

Karena fluida ideal tak termampatkan (massa jenisnya tetap) dan tidak ada fluida yang "hilang" di sepanjang pipa tertutup, DEBIT-nya harus SAMA di setiap bagian pipa, berapa pun luas penampangnya berubah:

$$Q_1 = Q_2 \quad\Rightarrow\quad A_1 \cdot v_1 = A_2 \cdot v_2$$

Konsekuensinya: begitu pipa MENYEMPIT (A mengecil), kecepatan alirannya HARUS membesar supaya debitnya tetap sama. Inilah yang terjadi saat kamu menutup sebagian ujung selang taman dengan ibu jari -- air menyembur jauh lebih deras dan lebih jauh.

## 🏞️ Fenomena Sehari-hari

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">🌊</span><h4>Sungai Menyempit</h4><p>Aliran sungai jauh lebih deras di bagian yang menyempit (jeram) dibanding di bagian yang lebar dan tenang.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🚿</span><h4>Selang Taman</h4><p>Menutup sebagian ujung selang membuat air memancar lebih jauh -- luas penampang mengecil, kecepatan membesar.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🩸</span><h4>Aliran Darah</h4><p>Darah mengalir lebih lambat di pembuluh kapiler dibanding di arteri utama -- meski tiap kapiler sangat sempit, TOTAL luas penampang seluruh kapiler jauh lebih besar dari aorta.</p></div>
</div>
</div>

## 🔬 Coba Sendiri di Lab Maya

Buka tab **Kontinuitas & Debit** di simulasi bawah. Ubah diameter pipa lebar dan sempit, lalu perhatikan titik-titik partikel yang mewakili aliran fluida -- kecepatannya otomatis berubah di bagian yang lebih sempit, sementara debitnya (angka Q) tetap sama.

## ✏️ Contoh Soal

Air mengalir di sebuah pipa berdiameter 10 cm dengan kecepatan 2 m/s. Pipa itu kemudian menyempit menjadi berdiameter 5 cm. Berapa kecepatan aliran di bagian yang sempit, dan berapa debitnya?

**Pembahasan**:

$A_1 = \pi r_1^2 = \pi (0{,}05)^2 = 0{,}00785$ m², $A_2 = \pi r_2^2 = \pi (0{,}025)^2 = 0{,}00196$ m²

$v_2 = v_1 \times \dfrac{A_1}{A_2} = v_1 \times \left(\dfrac{d_1}{d_2}\right)^2 = 2 \times \left(\dfrac{10}{5}\right)^2 = 2 \times 4 = \textbf{8 m/s}$

$Q = A_1 v_1 = 0{,}00785 \times 2 = 0{,}0157 \text{ m}^3\text{/s} = \textbf{15,7 L/s}$ (sama di kedua bagian pipa)

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Makin lebar pipanya, makin cepat alirannya."</strong><br>
Justru terbalik. <strong class="mtr-right">Makin SEMPIT pipanya, makin CEPAT alirannya</strong> (untuk debit yang sama) -- karena A dan v berbanding TERBALIK dalam asas kontinuitas (A1v1 = A2v2). Pipa lebar justru punya aliran yang lebih lambat.
</div>

## 🤔 Coba Pikirkan

1. Kenapa perawat harus berhati-hati soal ukuran jarum suntik/selang infus -- apa hubungannya dengan debit dan kecepatan aliran?
2. Kalau diameter pipa diperbesar 3 kali, berapa kali lipat kecepatan alirannya berubah (dengan debit tetap)?

<div class="mtr-cta">
<p>Kita sudah tahu bagaimana KECEPATAN aliran berubah saat pipa menyempit. Selanjutnya kita bahas apa yang terjadi pada TEKANAN-nya -- inilah rahasia di balik gaya angkat sayap pesawat.</p>
<a href="/materi/asas-bernoulli-dan-penerapannya" class="btn btn-primary">✈️ Lanjut ke Asas Bernoulli dan Penerapannya →</a>
</div>
