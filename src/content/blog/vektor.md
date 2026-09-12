---
title: "Vektor"
description: "Pengertian vektor, cara menggambar dan menuliskannya, komponen vektor pada sumbu x-y, serta dua cara menjumlahkan vektor -- metode grafis dan metode analitis."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-09-12
tags: ["Vektor", "Fisika Kelas X", "Fase E"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/vektor.html"
  judul: "Vector Playground"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1550
kuis:
  - soal: "Manakah dari berikut yang termasuk besaran vektor?"
    pilihan: ["Massa", "Waktu", "Perpindahan", "Suhu"]
    jawaban: 2
    penjelasan: "Perpindahan punya arah (mis. '5 m ke timur'), jadi termasuk besaran vektor. Massa, waktu, dan suhu cuma punya nilai -- besaran skalar."
  - soal: "Sebuah gaya 3 N ke arah sumbu x dan gaya 4 N ke arah sumbu y (tegak lurus) bekerja pada benda yang sama. Besar resultan kedua gaya itu adalah..."
    pilihan: ["7 N", "5 N", "1 N", "12 N"]
    jawaban: 1
    penjelasan: "Karena tegak lurus, R = √(3²+4²) = √25 = 5 N (segitiga 3-4-5) -- BUKAN 3+4=7 N."
  - soal: "Komponen vektor pada sumbu x dirumuskan sebagai..."
    pilihan: ["R sin θ", "R cos θ", "R tan θ", "R/θ"]
    jawaban: 1
    penjelasan: "Rx = R cos θ, sedangkan komponen sumbu y adalah Ry = R sin θ."
  - soal: "Metode grafis penjumlahan vektor dengan menyambung ujung vektor pertama ke pangkal vektor kedua disebut metode..."
    pilihan: ["Jajaran genjang", "Segitiga (poligon)", "Komponen", "Substitusi"]
    jawaban: 1
    penjelasan: "Itu metode segitiga (poligon) -- ujung ke ujung. Metode jajaran genjang menyusun kedua vektor dari titik pangkal yang sama."
  - soal: "Kalau dua vektor gaya yang besarnya sama justru berlawanan arah, resultannya adalah..."
    pilihan: ["Dua kali besar salah satu vektor", "Nol", "Sama dengan salah satu vektor", "Tidak dapat ditentukan"]
    jawaban: 1
    penjelasan: "Komponen kedua vektor saling meniadakan karena arahnya berlawanan -- resultannya nol, meski kedua vektor asalnya tidak nol."
  - soal: "Arah vektor resultan dapat ditentukan dari rumus..."
    pilihan: ["tan θ = Ry/Rx", "tan θ = Rx/Ry", "sin θ = Ry", "cos θ = Rx"]
    jawaban: 0
    penjelasan: "Arah resultan dihitung dengan θ = arctan(Ry/Rx), dari komponen Ry dan Rx yang sudah dijumlahkan."
draft: false
---

<style>
.mtr-table-wrap, .mtr-cards, .mtr-steps { margin-block: 2rem; }

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

Ingat materi [Besaran dan Satuan](/materi/besaran-dan-satuan)? Di sana kita sudah kenal pembagian besaran jadi dua jenis: **skalar** (cuma punya nilai, mis. massa, waktu, suhu) dan **vektor** (punya nilai DAN arah, mis. perpindahan, kecepatan, gaya). Sekarang saatnya kita bedah lebih dalam bagaimana vektor ini digambar, dituliskan, dan yang paling penting -- bagaimana cara menjumlahkannya.

## 📐 Apa itu Vektor?

Vektor adalah besaran yang membawa dua informasi sekaligus: **besar (magnitude)** dan **arah**. Contoh paling gampang: kalau kamu bilang "aku berjalan 5 meter", itu belum lengkap -- 5 meter ke mana? Ke utara? Ke arah sekolah? Baru lengkap kalau ditulis "aku berjalan 5 meter ke utara" -- itulah vektor perpindahan.

Vektor digambar sebagai **anak panah**:
- **Panjang** anak panah menyatakan besar vektor.
- **Arah** anak panah menyatakan arah vektor.

Secara notasi, vektor biasa ditulis dengan huruf tebal (**A**) atau huruf dengan tanda panah di atasnya (A⃗). Besar vektor A ditulis |A| atau cukup A saja (tanpa tanda tebal/panah).

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">📍</span><h4>Vektor Posisi</h4><p>Menyatakan letak suatu titik relatif terhadap titik acuan (biasanya titik asal/origin).</p></div>
<div class="mtr-card"><span class="mtr-card-icon">➡️</span><h4>Vektor Perpindahan</h4><p>Menyatakan perubahan posisi -- dari titik awal ke titik akhir, dalam garis lurus.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🏃</span><h4>Vektor Kecepatan</h4><p>Menyatakan kecepatan berikut arah geraknya, bukan cuma seberapa cepat.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">💪</span><h4>Vektor Gaya</h4><p>Menyatakan besar dorongan/tarikan berikut arah gaya itu bekerja.</p></div>
</div>
</div>

## 🧩 Komponen Vektor

Supaya vektor lebih mudah dihitung secara matematis, sebuah vektor bisa **diuraikan** jadi dua komponen tegak lurus: komponen pada sumbu x dan komponen pada sumbu y. Kalau vektor R punya besar R dan membentuk sudut θ terhadap sumbu x positif, komponennya adalah:

- **Rx = R cos θ** (komponen sumbu x)
- **Ry = R sin θ** (komponen sumbu y)

Contoh: vektor gaya sebesar 10 N pada sudut 30° terhadap sumbu x. Maka Fx = 10 × cos 30° ≈ 8,66 N dan Fy = 10 × sin 30° = 5 N.

## ➕ Menjumlahkan Vektor

Ada dua cara menjumlahkan vektor -- keduanya selalu memberi hasil yang sama, cuma beda pendekatan.

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Metode Grafis -- Segitiga (Poligon).</strong> Gambar vektor pertama, lalu sambungkan pangkal vektor kedua ke UJUNG vektor pertama (bukan ke pangkalnya). Resultan adalah anak panah dari pangkal vektor pertama sampai ujung vektor terakhir.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Metode Grafis -- Jajaran Genjang.</strong> Gambar kedua vektor dari titik pangkal yang SAMA, lalu bentuk jajaran genjang. Resultan adalah diagonal jajaran genjang itu, dari titik pangkal bersama.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Metode Analitis (Komponen).</strong> Uraikan SETIAP vektor jadi komponen x dan y, lalu jumlahkan komponen x semuanya dan komponen y semuanya secara terpisah: Rx = ΣAx dan Ry = ΣAy.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Hitung Besar dan Arah Resultan.</strong> Besar resultan R = √(Rx² + Ry²) (Teorema Pythagoras), dan arahnya θ = arctan(Ry/Rx).</p>
    </div>
  </div>
</div>

### Contoh Soal

Dua gaya bekerja pada sebuah benda: F1 = 3 N searah sumbu x, dan F2 = 4 N searah sumbu y (tegak lurus F1). Berapa besar resultan gaya tersebut?

Karena F1 dan F2 tegak lurus, komponennya sudah langsung di sumbu x dan y: Rx = 3 N, Ry = 4 N. Maka:

R = √(Rx² + Ry²) = √(3² + 4²) = √(9 + 16) = √25 = **5 N**

Ini adalah pola segitiga 3-4-5 yang gampang diingat -- perhatikan hasilnya BUKAN 3+4=7 N, karena kedua gaya tidak searah.

## 📋 Ringkasan Rumus Vektor

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Yang Dihitung</th><th>Rumus</th></tr>
</thead>
<tbody>
<tr><td>Komponen sumbu x</td><td><em>Rx = R cos θ</em></td></tr>
<tr><td>Komponen sumbu y</td><td><em>Ry = R sin θ</em></td></tr>
<tr><td>Resultan dari komponen</td><td><em>Rx = ΣAx, Ry = ΣAy</em></td></tr>
<tr><td>Besar resultan</td><td><em>R = √(Rx² + Ry²)</em></td></tr>
<tr><td>Arah resultan</td><td><em>θ = arctan(Ry/Rx)</em></td></tr>
</tbody>
</table>
</div>
</div>

Coba sendiri di simulasi di bawah ini -- atur besar dan arah dua vektor, lalu bandingkan hasil metode grafis dan metode analitis. Keduanya akan selalu memberi resultan yang sama.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Menjumlahkan vektor sama saja seperti menjumlahkan angka biasa (3 N + 4 N = 7 N)."</strong><br>
Kurang tepat. <strong class="mtr-right">Kalau arahnya tidak sama, vektor TIDAK dijumlahkan seperti bilangan biasa</strong> -- harus lewat metode grafis atau komponen. Dua vektor tegak lurus 3 N dan 4 N justru menghasilkan resultan 5 N, bukan 7 N.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Metode segitiga menyambung pangkal ke pangkal vektor kedua."</strong><br>
Terbalik. <strong class="mtr-right">Pada metode segitiga, pangkal vektor kedua disambung ke UJUNG vektor pertama</strong> (head-to-tail), bukan ke pangkalnya.
</div>

## 🤔 Coba Pikirkan

Sebuah kapal berlayar dengan kecepatan 6 m/s ke arah timur, sementara arus air laut mendorongnya dengan kecepatan 8 m/s ke arah utara (tegak lurus arah kapal).

1. Berapa besar kecepatan resultan kapal itu (relatif terhadap daratan)?
2. Kalau arus airnya justru berlawanan arah dengan laju kapal (bukan tegak lurus), apa yang terjadi pada besar kecepatan resultannya?

Coba diskusikan jawabanmu dengan teman sekelas, atau buktikan sendiri lewat simulasi di atas.

<div class="mtr-cta">
<p>Sekarang setelah paham cara menjumlahkan vektor, saatnya menerapkannya ke gerak dua dimensi yang sesungguhnya: gerak parabola.</p>
<a href="/materi/gerak-parabola" class="btn btn-primary">🎯 Lanjut ke Gerak Parabola →</a>
</div>
