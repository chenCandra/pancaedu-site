---
title: "Hukum Pascal dan Hukum Archimedes"
description: "Kenapa dongkrak hidrolik bisa mengangkat mobil seberat 1 ton dengan tenaga tangan, dan kenapa kapal besi yang berat bisa mengapung -- dua hukum fluida statis paling terkenal."
category: materi
mapel: "Fisika"
kelas: "XI"
pubDate: 2026-09-14
tags: ["Hukum Pascal", "Hukum Archimedes", "Fluida Statis", "Fisika Kelas XI"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/fluida-statis.html"
  judul: "Laboratorium Maya: Fluida Statis"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1500
kuis:
  - soal: "Hukum Pascal menyatakan bahwa tekanan yang diberikan pada fluida tertutup..."
    pilihan: ["Hanya diteruskan ke arah bawah", "Diteruskan sama besar ke segala arah", "Hilang seiring jarak", "Hanya berlaku untuk gas"]
    jawaban: 1
    penjelasan: "Tekanan pada fluida tertutup diteruskan SAMA RATA ke segala arah -- inilah dasar kerja dongkrak hidrolik."
  - soal: "Dongkrak hidrolik punya piston kecil A1 = 10 cm² dan piston besar A2 = 250 cm². Kalau gaya input F1 = 200 N, berapa gaya keluar F2?"
    pilihan: ["200 N", "1.000 N", "5.000 N", "25.000 N"]
    jawaban: 2
    penjelasan: "F2 = F1 × (A2/A1) = 200 × (250/10) = 200 × 25 = 5.000 N."
  - soal: "Gaya apung (Archimedes) yang dialami benda tercelup dirumuskan sebagai..."
    pilihan: ["Fa = m × g", "Fa = ρ_benda × g × V", "Fa = ρ_fluida × g × V_tercelup", "Fa = ρ_fluida / g"]
    jawaban: 2
    penjelasan: "Fa = ρ_fluida × g × V_tercelup -- besarnya SAMA DENGAN berat fluida yang dipindahkan oleh benda."
  - soal: "Kapal besi yang berat bisa mengapung di air karena..."
    pilihan: ["Besi sebenarnya lebih ringan dari air", "Bentuk kapal berongga membuat massa jenis RATA-RATA kapal lebih kecil dari air", "Air laut punya massa jenis sangat besar", "Kapal punya mesin yang menahannya di permukaan"]
    jawaban: 1
    penjelasan: "Badan kapal yang berongga membuat volumenya jauh lebih besar dari volume besi solidnya, sehingga massa jenis RATA-RATA kapal (massa total dibagi volume total termasuk rongga) jadi lebih kecil dari massa jenis air, meski bahannya besi."
  - soal: "Sebuah benda bervolume 2.000 cm³ (0,002 m³) beratnya 150 N di udara, lalu dicelupkan penuh ke air (ρ = 1.000 kg/m³, g = 10 m/s²). Berapa berat semunya di dalam air?"
    pilihan: ["130 N", "150 N", "170 N", "20 N"]
    jawaban: 0
    penjelasan: "Fa = ρgV = 1.000×10×0,002 = 20 N. Berat semu = W − Fa = 150 − 20 = 130 N."
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

Setelah tuntas dengan [Massa Jenis dan Tekanan Hidrostatis](/materi/fluida-dan-massa-jenis), kita bahas dua hukum fluida statis paling terkenal -- yang satu bikin dongkrak bisa mengangkat mobil, yang satu bikin kapal besi bisa mengapung.

## 🔧 Hukum Pascal

> "Tekanan yang diberikan pada fluida tertutup diteruskan sama besar ke segala arah."

Karena tekanan $P = F/A$ harus sama di seluruh bagian fluida tertutup itu, kalau ada dua piston dengan luas berbeda yang terhubung lewat fluida yang sama:

$$P_1 = P_2 \quad\Rightarrow\quad \frac{F_1}{A_1} = \frac{F_2}{A_2}$$

Karena itu, piston yang lebih LUAS akan menghasilkan gaya yang jauh lebih BESAR. Inilah kenapa dongkrak hidrolik bisa mengangkat mobil 1 ton hanya dengan tenaga tangan -- kita menekan piston kecil, dan tekanannya diteruskan ke piston besar yang luasnya berkali-kali lipat.

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">🚗</span><h4>Dongkrak Hidrolik</h4><p>Mengangkat mobil dengan gaya tangan, memanfaatkan piston kecil-besar.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🛑</span><h4>Rem Hidrolik Mobil</h4><p>Tekanan dari pedal rem diteruskan ke seluruh sistem, mengunci keempat roda serentak.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">💈</span><h4>Kursi Hidrolik Salon/Bengkel</h4><p>Pompa kaki kecil bisa menaikkan kursi berikut orang yang duduk di atasnya.</p></div>
</div>
</div>

### ✏️ Contoh Soal Pascal

Sebuah dongkrak hidrolik punya piston kecil dengan luas 10 cm² dan piston besar dengan luas 250 cm². Kalau gaya yang diberikan pada piston kecil adalah 200 N, berapa gaya yang dihasilkan piston besar?

**Pembahasan**: $F_2 = F_1 \times \dfrac{A_2}{A_1} = 200 \times \dfrac{250}{10} = 200 \times 25 = \textbf{5.000 N}$ (25 kali lipat lebih besar dari gaya yang kita berikan!)

## 🏋️ Hukum Archimedes

> "Benda yang tercelup sebagian atau seluruhnya dalam fluida akan mengalami gaya apung ke atas sebesar berat fluida yang dipindahkannya."

$$F_a = \rho_{fluida} \cdot g \cdot V_{tercelup}$$

Ingat kembali tiga kondisi dari sesi sebelumnya -- sekarang kita bisa memahaminya lewat KESEIMBANGAN GAYA antara berat benda (W) dan gaya apung (Fa):

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Kondisi Gaya</th><th>Yang Terjadi</th></tr></thead>
<tbody>
<tr><td>W &gt; Fa maksimum (benda tercelup penuh)</td><td><em>Tenggelam</em> -- gaya apung tidak cukup menahan berat benda</td></tr>
<tr><td>W = Fa (saat tercelup penuh)</td><td><em>Melayang</em> -- kedua gaya persis seimbang</td></tr>
<tr><td>W = Fa (saat tercelup sebagian)</td><td><em>Terapung</em> -- benda cukup naik sedikit sampai Fa menyeimbangkan W</td></tr>
</tbody>
</table>
</div>
</div>

### ✏️ Contoh Soal Archimedes

Sebuah benda bervolume 2.000 cm³ (0,002 m³) memiliki berat 150 N di udara. Benda itu dicelupkan PENUH ke dalam air (ρ = 1.000 kg/m³, g = 10 m/s²). Berapa berat semunya di dalam air?

**Pembahasan**:
$F_a = \rho g V = 1.000 \times 10 \times 0{,}002 = 20$ N

$W_{semu} = W - F_a = 150 - 20 = \textbf{130 N}$

## 🚢 Kenapa Kapal Besi Bisa Mengapung?

Ini pertanyaan klasik: besi (ρ ≈ 7.870 kg/m³) jauh lebih rapat dari air (ρ = 1.000 kg/m³), tapi kapal besi bisa mengapung. Rahasianya ada di BENTUK, bukan bahan. Badan kapal dibuat BERONGGA (banyak ruang kosong berisi udara), sehingga volume totalnya jadi jauh lebih besar dari volume besi solidnya. Massa jenis RATA-RATA kapal (massa total ÷ volume total termasuk rongga) jadi jauh lebih kecil dari massa jenis air -- itulah kenapa kapal bisa terapung, bahkan kapal selam bisa mengatur naik-turunnya dengan mengisi/mengosongkan tangki ballast dengan air.

## 🔬 Coba Sendiri di Lab Maya

Buka tab **Pascal & Archimedes** di simulasi bawah. Coba mode "Dongkrak Hidrolik" -- ubah luas piston, lihat gaya keluarnya berubah. Lalu coba mode "Gaya Apung" -- celupkan berbagai benda dan amati timbangan pegasnya.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Gaya apung yang dialami sebuah benda selalu sama, tidak peduli dicelupkan ke fluida apa."</strong><br>
Tidak tepat. <strong class="mtr-right">Gaya apung Fa = ρ_fluida × g × V bergantung pada massa jenis FLUIDANYA</strong>, bukan cuma volume benda. Benda yang sama akan mendapat gaya apung lebih BESAR saat dicelupkan ke air raksa (ρ = 13.600 kg/m³) dibanding saat dicelupkan ke air biasa (ρ = 1.000 kg/m³), meski volumenya persis sama.
</div>

## 🤔 Coba Pikirkan

1. Sebuah kapal yang sama akan lebih mudah mengapung di air laut atau di air sungai (tawar)? Kenapa?
2. Kalau kamu menimbang badanmu di darat, lalu "menimbang" lagi saat berendam di kolam renang (misalnya pakai timbangan bawah air), kenapa angkanya jauh lebih kecil?

<div class="mtr-cta">
<p>Fluida Statis belum selesai -- masih ada satu hal menarik: kenapa serangga bisa "berjalan" di atas air, dan kenapa air bisa naik sendiri lewat pipa yang sangat sempit?</p>
<a href="/materi/tegangan-permukaan-kapilaritas-dan-viskositas" class="btn btn-primary">💧 Lanjut ke Tegangan Permukaan, Kapilaritas, dan Viskositas →</a>
</div>
