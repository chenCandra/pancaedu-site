---
title: "Hukum Coulomb: Gaya Tarik & Tolak Antar Muatan Listrik"
description: "Kenalan sama Hukum Coulomb -- rumus, arah gaya, prinsip superposisi untuk banyak muatan, dan perbandingannya sama Hukum Gravitasi Newton, lengkap simulasi interaktif."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-08-26
tags: ["Hukum Coulomb", "Fisika Kelas XII", "Fase F", "Listrik Statis"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/hukum-coulomb.html"
  judul: "Hukum Coulomb: Gaya Tarik & Tolak Antar Muatan"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1000
kuis:
  - soal: "Rumus Hukum Coulomb yang benar adalah..."
    pilihan: ["F = k q₁q₂ / r²", "F = k q₁q₂ × r²", "F = k (q₁+q₂) / r²", "F = k / r²"]
    jawaban: 0
    penjelasan: "Gaya Coulomb berbanding lurus dengan hasil kali kedua muatan, dan berbanding terbalik dengan kuadrat jarak antar keduanya: F = k q₁q₂ / r²."
  - soal: "Dua muatan sejenis (misalnya sama-sama positif) yang saling didekatkan akan..."
    pilihan: ["Tarik-menarik", "Tolak-menolak", "Tidak saling memberi gaya", "Bergabung jadi satu muatan"]
    jawaban: 1
    penjelasan: "Muatan sejenis (sama-sama positif atau sama-sama negatif) saling tolak-menolak. Muatan beda jenis yang saling tarik-menarik."
  - soal: "Jika jarak antara dua muatan diperbesar menjadi 2 kali lipat (muatannya tetap sama), gaya Coulomb-nya menjadi..."
    pilihan: ["2 kali lebih besar", "4 kali lebih besar", "1/4 kali semula (lebih kecil)", "1/2 kali semula (lebih kecil)"]
    jawaban: 2
    penjelasan: "Gaya Coulomb berbanding terbalik dengan KUADRAT jarak. Jarak jadi 2r berarti gayanya jadi F/(2)² = F/4 -- seperempat dari semula."
  - soal: "Nilai konstanta Coulomb (k) di udara/vakum kira-kira..."
    pilihan: ["9 × 10⁹ N·m²/C²", "6,67 × 10⁻¹¹ N·m²/kg²", "3 × 10⁸ m/s", "1,6 × 10⁻¹⁹ C"]
    jawaban: 0
    penjelasan: "k ≈ 9 × 10⁹ N·m²/C². Tiga pilihan lain itu konstanta Fisika lain: konstanta gravitasi umum (G), kecepatan cahaya (c), dan muatan elementer (e) -- gampang ketuker kalau tidak hafal betul."
  - soal: "Apa perbedaan utama antara Hukum Coulomb dan Hukum Gravitasi Newton?"
    pilihan: ["Keduanya sama persis, tidak ada beda", "Gaya gravitasi selalu tarik-menarik, sedangkan gaya Coulomb bisa tarik atau tolak tergantung jenis muatan", "Hukum Coulomb cuma berlaku untuk muatan negatif", "Hukum gravitasi berbanding lurus dengan jarak, Coulomb berbanding terbalik"]
    jawaban: 1
    penjelasan: "Struktur rumus keduanya mirip (berbanding terbalik kuadrat jarak), tapi gravitasi SELALU tarik-menarik (massa tidak punya 'jenis'), sedangkan gaya Coulomb bisa tarik ATAU tolak tergantung muatannya sejenis atau tidak."
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
  text-align: center;
}

.mtr-card-icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
.mtr-card h4 { font-family: var(--font-display); margin: 0 0 0.35rem; font-size: 1rem; }
.mtr-card p { margin: 0; font-size: 0.875rem; color: var(--ink-soft); }
</style>

## ⚡ Apa Itu Hukum Coulomb?

Dekatkan dua ujung sisir plastik yang habis dipakai menyisir rambut kering ke potongan kertas kecil -- kertasnya bisa "melompat" nempel ke sisir. Itu salah satu bukti sederhana kalau **muatan listrik saling memberi gaya** satu sama lain, walau tidak saling bersentuhan.

Dua muatan yang sejenis (sama-sama positif, atau sama-sama negatif) akan **tolak-menolak**. Dua muatan yang berbeda jenis (satu positif, satu negatif) akan **tarik-menarik**. Tapi seberapa besar gaya itu? Itulah yang dijawab oleh **Hukum Coulomb**, dirumuskan oleh fisikawan Prancis Charles-Augustin de Coulomb tahun 1785.

<div class="mtr-def">
💡 <strong>Hukum Coulomb</strong> menyatakan bahwa gaya listrik antara dua muatan titik berbanding lurus dengan hasil kali besar kedua muatan, dan berbanding terbalik dengan kuadrat jarak antara keduanya.
</div>

## 🧮 Rumus Hukum Coulomb

Secara matematis, Hukum Coulomb dituliskan:

<div class="mtr-formula">F = k × |q₁ × q₂| / r²</div>

dengan:

* **F** = besar gaya Coulomb (N)
* **k** = konstanta Coulomb
* **q₁, q₂** = besar muatan pertama dan kedua (C, coulomb)
* **r** = jarak antara kedua muatan (m)

### Konstanta Coulomb (k)

Nilai konstanta Coulomb di udara/ruang hampa adalah:

<div class="mtr-formula">k ≈ 9 × 10⁹ N·m²/C²</div>

Konstanta ini sebenarnya bisa juga dituliskan sebagai **k = 1 / (4πε₀)**, dengan ε₀ (dibaca "epsilon nol") adalah permitivitas ruang hampa (≈ 8,85 × 10⁻¹² C²/N·m²) -- tapi untuk perhitungan sehari-hari, cukup pakai nilai k ≈ 9 × 10⁹ N·m²/C² langsung.

Contoh perhitungannya bisa dilihat di bagian "Contoh Soal" di bawah -- setelah kita bahas dulu soal arah gaya dan superposisi, biar variasi soalnya lebih lengkap.

## 🧲 Arah Gaya Coulomb

Gaya Coulomb bukan cuma soal besarnya -- arahnya juga penting, karena gaya adalah **besaran vektor**. Arah gaya selalu sepanjang garis lurus yang menghubungkan kedua muatan.

<div class="mtr-cards">
<div class="mtr-cards-grid">
  <div class="mtr-card">
    <span class="mtr-card-icon">↔️</span>
    <h4>Muatan Sejenis</h4>
    <p>(+ dan +) atau (− dan −)<br>Saling <strong>tolak-menolak</strong></p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🧲</span>
    <h4>Muatan Beda Jenis</h4>
    <p>(+ dan −)<br>Saling <strong>tarik-menarik</strong></p>
  </div>
</div>
</div>

<div class="mtr-note">
⚖️ Sesuai Hukum III Newton, gaya yang dialami muatan pertama akibat muatan kedua BESARNYA SAMA dengan gaya yang dialami muatan kedua akibat muatan pertama, cuma arahnya berlawanan.
</div>

## 🔀 Banyak Muatan: Prinsip Superposisi

Bagaimana kalau ada lebih dari dua muatan? Hukum Coulomb tetap dipakai per PASANGAN muatan, lalu gaya-gaya itu **dijumlahkan sebagai vektor** -- ini disebut **prinsip superposisi**.

Misalnya ada 3 muatan segaris: A, B, dan C. Gaya total yang dialami muatan B adalah jumlah vektor dari gaya akibat A (F<sub>AB</sub>) dan gaya akibat C (F<sub>CB</sub>). Kalau ketiganya segaris, tinggal dijumlah/dikurang sesuai arahnya (tanda positif/negatif). Kalau tidak segaris, dijumlah pakai aturan penjumlahan vektor (komponen x dan y).

## 📝 Contoh Soal (Variasi Tingkat Kesulitan)

Berikut 4 contoh soal dengan tingkat kesulitan berbeda -- dari perhitungan langsung sampai soal analisis yang butuh penalaran lebih dalam (HOTS).

### Soal 1 — Perhitungan Langsung

Dua muatan, +4 μC dan −2 μC, terpisah sejauh 2 cm (0,02 m). Tentukan besar gaya Coulomb di antara keduanya, beserta sifatnya (tarik atau tolak).

**Penyelesaian:** q₁ = 4 × 10⁻⁶ C, q₂ = 2 × 10⁻⁶ C (dipakai nilai mutlaknya untuk menghitung besar gaya), r = 0,02 m.

<div class="mtr-formula">F = (9 × 10⁹) × (4 × 10⁻⁶ × 2 × 10⁻⁶) / (0,02)² = 180 N</div>

Karena kedua muatan berbeda jenis (+ dan −), gayanya bersifat **tarik-menarik**.

### Soal 2 — Mencari Jarak (Membalik Rumus)

Dua muatan identik, masing-masing +5 μC, saling tolak dengan gaya 10 N. Berapa jarak antara keduanya?

**Penyelesaian:** dari F = kq₁q₂/r², kita balik untuk mencari r:

<div class="mtr-formula">r² = k × q² / F = (9 × 10⁹) × (5 × 10⁻⁶)² / 10 = 0,0225 m²</div>

<div class="mtr-formula">r = √0,0225 = 0,15 m = 15 cm</div>

### Soal 3 — Analisis Perbandingan

Dua muatan menghasilkan gaya Coulomb sebesar F pada jarak r. Jika salah satu muatan diperbesar menjadi **3 kali** semula, dan jaraknya diperbesar menjadi **2 kali** semula, berapa gaya Coulomb yang baru (dinyatakan dalam F)?

**Penyelesaian:** karena F = kq₁q₂/r², kita tinggal masukkan faktor perubahannya:

<div class="mtr-formula">F_baru = k(3q₁)(q₂) / (2r)² = (3/4) × kq₁q₂/r² = (3/4)F</div>

Jadi gaya yang baru menjadi **¾ kali** gaya semula (mengecil), meskipun salah satu muatannya diperbesar -- karena efek memperbesar jarak (dibagi kuadrat) lebih dominan daripada efek memperbesar muatan.

<div class="mtr-note">
🎓 <strong>Soal HOTS</strong> -- soal berikut butuh menganalisis ARAH medan dari dua muatan sekaligus, bukan cuma substitusi angka ke rumus.
</div>

### Soal 4 — Titik dengan Resultan Gaya Nol

Dua muatan sejenis, Q₁ = +2 μC dan Q₂ = +8 μC, diletakkan segaris dengan jarak 15 cm. Tentukan letak titik di ANTARA kedua muatan yang resultan gaya Coulomb-nya sama dengan nol.

**Penyelesaian:**

Karena kedua muatan sejenis (sama-sama positif), medan dari Q₁ dan medan dari Q₂ di titik mana pun DI ANTARA keduanya saling berlawanan arah -- jadi titik nolnya memang mungkin ada di sana (beda kalau muatannya berbeda jenis, titik nolnya justru ada di LUAR garis hubung).

Misalkan jarak titik itu dari Q₁ adalah *x*, maka jaraknya dari Q₂ = (15 − *x*) cm. Di titik itu, besar medan dari Q₁ harus sama dengan besar medan dari Q₂:

<div class="mtr-formula">2/x² = 8/(15−x)² → √2/x = √8/(15−x) → (15−x)√2 = x√8</div>

Sederhanakan (√8 = 2√2):

<div class="mtr-formula">15√2 = x√2 + 2x√2 = 3x√2 → x = 15/3 = 5 cm</div>

Jadi titik itu berada **5 cm dari Q₁** (dan otomatis **10 cm dari Q₂**). Titiknya lebih dekat ke muatan yang lebih KECIL (Q₁) -- masuk akal, karena jarak yang lebih dekat "mengompensasi" muatannya yang lebih kecil.

*Cek: k(2)/(0,05)² dan k(8)/(0,10)² -- dua-duanya menghasilkan angka yang sama, jadi resultannya benar nol di titik itu.*

## 🪐 Hukum Coulomb vs Hukum Gravitasi Newton

Kalau kalian sudah belajar Hukum Gravitasi Newton, rumus Hukum Coulomb ini mungkin terasa familier -- strukturnya memang mirip.

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th></th><th>Hukum Coulomb</th><th>Hukum Gravitasi Newton</th></tr>
</thead>
<tbody>
<tr><td>Rumus</td><td>F = k q₁q₂/r²</td><td>F = G m₁m₂/r²</td></tr>
<tr><td>Berlaku untuk</td><td>Muatan listrik</td><td>Massa</td></tr>
<tr><td>Sifat gaya</td><td><em>Tarik ATAU tolak</em></td><td><em>SELALU tarik</em></td></tr>
<tr><td>Konstanta</td><td>k ≈ 9 × 10⁹ N·m²/C²</td><td>G ≈ 6,67 × 10⁻¹¹ N·m²/kg²</td></tr>
</tbody>
</table>
</div>
</div>

Bedanya yang paling penting: massa **tidak punya "jenis"** (semua massa positif), jadi gravitasi selalu tarik-menarik. Muatan listrik punya dua jenis (positif dan negatif), jadi gaya Coulomb bisa tarik ATAU tolak tergantung kombinasinya.

<div class="mtr-note">
💡 Gaya (F) dan satuannya (newton, N) sudah kalian kenal dari materi <a href="/materi/besaran-turunan">Besaran Turunan</a> -- gaya Coulomb tetaplah gaya biasa, cuma penyebabnya beda (muatan listrik, bukan gesekan/dorongan/tarikan mekanis).
</div>

## ⚠️ Miskonsepsi Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Gaya Coulomb selalu tarik-menarik, sama seperti gravitasi."</strong><br>
Salah. <strong class="mtr-right">Gaya Coulomb bisa tarik-menarik ATAU tolak-menolak</strong>, tergantung jenis muatannya sejenis atau berbeda.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Kalau jaraknya 2 kali lebih jauh, gayanya jadi 2 kali lebih kecil."</strong><br>
Kurang tepat. Gaya Coulomb berbanding terbalik dengan <strong class="mtr-right">KUADRAT</strong> jarak -- jarak 2 kali lebih jauh berarti gayanya jadi 4 kali lebih kecil (1/4), bukan cuma setengah.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "k adalah besaran pokok."</strong><br>
Bukan. <strong class="mtr-right">k adalah konstanta empiris</strong> (hasil pengukuran eksperimen), bukan besaran pokok maupun besaran turunan.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Muatan yang lebih besar pasti punya gaya Coulomb yang lebih besar, berapa pun jaraknya."</strong><br>
Belum tentu. <strong class="mtr-right">Gayanya bergantung pada KOMBINASI besar muatan DAN jarak</strong> -- muatan besar tapi jaraknya sangat jauh bisa saja menghasilkan gaya yang lebih kecil daripada muatan kecil yang sangat berdekatan.
</div>

## 💡 Coba Pikirkan

Dua muatan identik (besarnya sama) awalnya berjarak r dan menghasilkan gaya F. Kalau jaraknya diubah jadi 3r, berapa gaya yang baru (dalam F)? Bagaimana kalau kedua muatannya juga digandakan besarnya, sambil jaraknya tetap 3r?

Coba kerjakan sendiri sebelum lihat simulasinya di bawah.

## 🎯 Intinya

* Hukum Coulomb: **F = k q₁q₂ / r²** -- berbanding lurus hasil kali muatan, berbanding terbalik kuadrat jarak.
* k ≈ **9 × 10⁹ N·m²/C²** di udara/ruang hampa.
* Muatan **sejenis → tolak-menolak**, muatan **beda jenis → tarik-menarik**.
* Gaya adalah **vektor** -- arahnya sepanjang garis penghubung kedua muatan.
* Untuk lebih dari 2 muatan, pakai **prinsip superposisi** (jumlahkan vektor gaya tiap pasangan).
* Strukturnya mirip Hukum Gravitasi Newton, tapi gravitasi selalu tarik, Coulomb bisa tarik atau tolak.

Sekarang coba geser-geser sendiri simulasinya di bawah -- ubah jarak dan besar muatannya, lihat langsung bagaimana gayanya berubah.
