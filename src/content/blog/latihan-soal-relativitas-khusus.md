---
title: "Latihan Soal Relativitas Khusus (1)"
description: "Kumpulan soal latihan seputar relativitas khusus — dilatasi waktu, kontraksi panjang, massa relativistik, dan energi kinetik relativistik, lengkap pembahasannya."
category: materi
mapel: "Fisika"
kelas: XII
pubDate: 2024-01-15
updatedDate: 2026-09-13
tags: ["Relativitas Khusus", "Latihan Soal", "Fisika Kelas XII"]
kuis:
  - soal: "Soal paradoks kembar (seperti Goku & Boruto di latihan ini) berkaitan dengan konsep..."
    pilihan: ["Kontraksi panjang", "Dilatasi waktu", "Massa relativistik", "Hukum Newton III"]
    jawaban: 1
    penjelasan: "Paradoks kembar adalah ilustrasi klasik dilatasi waktu — kembaran yang bepergian dengan kecepatan tinggi jadi lebih muda daripada yang tinggal di Bumi."
  - soal: "Untuk soal batang besi dan kereta yang 'memendek' saat bergerak cepat (Soal 2 & 3), konsep fisika yang dipakai adalah..."
    pilihan: ["Dilatasi waktu", "Kontraksi panjang", "Massa relativistik", "Energi kinetik biasa"]
    jawaban: 1
    penjelasan: "Perubahan panjang benda yang bergerak relatif terhadap pengamat adalah kontraksi panjang."
  - soal: "Untuk menghitung massa sebuah partikel yang bergerak mendekati kecepatan cahaya (Soal 4), rumus yang dipakai adalah rumus..."
    pilihan: ["Kontraksi panjang", "Dilatasi waktu", "Massa relativistik", "Hukum Newton II"]
    jawaban: 2
    penjelasan: "Soal ini tentang perubahan massa akibat kecepatan tinggi — pakai rumus massa relativistik."
  - soal: "Untuk soal energi kinetik roket berkecepatan 0,99c (Soal 5), energi kinetik relativistiknya dihitung dari selisih antara..."
    pilihan: ["Energi total relativistik dan energi diam", "Massa diam dan massa relativistik saja (tanpa dikali c²)", "Kecepatan awal dan kecepatan akhir", "Panjang awal dan panjang akhir"]
    jawaban: 0
    penjelasan: "Energi kinetik relativistik = Energi total (mc²) dikurangi Energi diam (m₀c²), atau ditulis (γ−1)m₀c²."
  - soal: "Semua soal di latihan ini (dilatasi waktu, kontraksi panjang, massa relativistik) punya kesamaan: efeknya baru terasa signifikan kalau kecepatan benda..."
    pilihan: ["Sangat lambat", "Mendekati kecepatan cahaya", "Nol", "Konstan di semua kondisi"]
    jawaban: 1
    penjelasan: "Efek-efek relativistik ini cuma signifikan pada kecepatan yang sangat tinggi, mendekati kecepatan cahaya — di kecepatan sehari-hari nyaris tidak teramati."
draft: false
---

<style>
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

.mtr-def {
  border-left: 3px solid var(--gold);
  background: var(--gold-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}

.mtr-note {
  border-left: 3px solid var(--accent);
  background: var(--accent-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}
</style>

Latihan ini menguji tiga konsep yang sudah dibahas satu per satu: [Dilatasi Waktu](/materi/dilatasi-waktu), [Kontraksi Panjang](/materi/kontraksi-panjang), dan [Massa Relativistik dan Momentum Relativistik](/materi/massa-relativistik-dan-momentum-relativistik). Coba kerjakan dulu sendiri sebelum membaca pembahasannya -- kalau masih ragu sama rumusnya, buka lagi materi terkait.

## Soal 1: Paradoks Kembar

Dua orang kembar, Goku dan Boruto, berusia 15 tahun dengan jam yang selalu menunjukkan waktu yang sama. Boruto tinggal di Bumi, sedangkan Goku berangkat ke planet NameX dan menempuh waktu 10 tahun (menurut jamnya sendiri) dengan kecepatan 0,8c. Setelah sampai di planet NameX, Goku langsung kembali ke Bumi dengan kecepatan yang sama, juga menempuh 10 tahun menurut jamnya sendiri. Berapa usia Goku dan Boruto saat mereka bertemu kembali di Bumi?

**Pembahasan:**

Total waktu yang dialami LANGSUNG oleh Goku (waktu sejati/proper time) untuk seluruh perjalanan pulang-pergi adalah 10 + 10 = 20 tahun. Yang perlu dicari adalah berapa lama waktu itu MENURUT Boruto yang diam di Bumi.

<div class="mtr-formula">Δt' = Δt / √(1 − v²/c²) = 20 / √(1 − (0,8c)²/c²)</div>
<div class="mtr-formula">Δt' = 20 / √(1 − 0,64) = 20 / √0,36 = 20 / 0,6 ≈ 33,3 tahun</div>

Jadi menurut Boruto, perjalanan Goku memakan waktu sekitar 33,3 tahun. Umur mereka saat bertemu kembali:

<div class="mtr-formula">Usia Goku = 15 + 20 = 35 tahun &nbsp;|&nbsp; Usia Boruto = 15 + 33,3 ≈ 48,3 tahun</div>

Goku (yang bepergian) jadi 13 tahun lebih muda daripada Boruto yang tinggal di Bumi.

## Soal 2: Kontraksi Panjang

Sebuah batang besi memiliki panjang 1 m saat diam. Jika batang besi tersebut bergerak dengan kecepatan 0,6c relatif terhadap seorang pengamat, berapa panjang batang besi yang diukur oleh pengamat tersebut?

**Pembahasan:**

Diketahui L₀ = 1 m, v = 0,6c.

<div class="mtr-formula">L = L₀ × √(1 − v²/c²) = 1 × √(1 − 0,36) = √0,64 = 0,8 m</div>

Pengamat itu akan mengukur panjang batang besinya hanya **0,8 m**, lebih pendek dari panjang aslinya (1 m).

## Soal 3: Kontraksi Panjang

Sebuah kereta api bergerak dengan kecepatan 0,9c relatif terhadap tanah. Seorang penumpang DI DALAM kereta api mengukur panjang kereta itu sebesar 100 m. Berapa panjang kereta api yang diukur oleh seorang pengamat di tanah?

**Pembahasan:**

Karena penumpang ikut bergerak bersama kereta (diam relatif terhadap kereta), 100 m yang ia ukur adalah panjang sejati (L₀). Pengamat di tanah, yang melihat kereta itu bergerak, akan mengukur panjang yang terkontraksi (L).

<div class="mtr-formula">L = L₀ × √(1 − v²/c²) = 100 × √(1 − 0,81) = 100 × √0,19</div>
<div class="mtr-formula">L = 100 × 0,436 ≈ 43,6 m</div>

Bagi pengamat di tanah, kereta itu terlihat memendek jadi sekitar **43,6 m** -- kurang dari separuh panjang aslinya, karena kecepatannya sudah sangat mendekati kecepatan cahaya (0,9c).

## Soal 4: Massa Relativistik

Sebuah partikel bermassa diam 1 kg bergerak dengan kecepatan 0,5c relatif terhadap seorang pengamat. Berapa massa partikel yang diukur oleh pengamat tersebut?

**Pembahasan:**

Diketahui m₀ = 1 kg, v = 0,5c.

<div class="mtr-formula">m = m₀ / √(1 − v²/c²) = 1 / √(1 − 0,25) = 1 / √0,75 ≈ 1 / 0,866</div>
<div class="mtr-formula">m ≈ 1,15 kg</div>

Massa yang terukur pengamat itu sekitar **1,15 kg**, lebih besar 15% dari massa diamnya.

## Soal 5: Energi Kinetik Relativistik

Sebuah roket bermassa diam 10.000 kg bergerak dengan kecepatan 0,99c relatif terhadap Bumi. Berapa energi kinetik roket itu yang diukur oleh seorang pengamat di Bumi?

**Pembahasan:**

<div class="mtr-def">
💡 Soal ini butuh satu rumus tambahan yang belum dibahas eksplisit di materi sebelumnya: <strong>Energi Kinetik Relativistik = Energi Total − Energi Diam</strong>, atau ditulis <strong>Eₖ = (γ − 1) × m₀c²</strong>, dengan γ = 1/√(1−v²/c²) adalah faktor Lorentz yang sama seperti di rumus dilatasi waktu, kontraksi panjang, dan massa relativistik. Rumus ini muncul langsung dari E=mc² yang disinggung di materi <a href="/materi/teori-relativitas-khusus">Teori Relativitas Khusus</a> -- energi total benda yang bergerak adalah E=mc² (m = massa relativistik), sedangkan energi diamnya (saat v=0) adalah E₀=m₀c². Selisih keduanya adalah energi kinetik "ekstra" akibat gerakannya.
</div>

Diketahui m₀ = 10.000 kg, v = 0,99c, c = 3×10⁸ m/s. Cari dulu faktor Lorentz-nya:

<div class="mtr-formula">γ = 1 / √(1 − v²/c²) = 1 / √(1 − 0,9801) = 1 / √0,0199 ≈ 1 / 0,141 ≈ 7,09</div>

Baru masukkan ke rumus energi kinetik:

<div class="mtr-formula">Eₖ = (γ − 1) × m₀c² = (7,09 − 1) × 10.000 × (3×10⁸)²</div>
<div class="mtr-formula">Eₖ = 6,09 × 10.000 × 9×10¹⁶ ≈ 5,48×10²¹ J</div>

Energi kinetik roket itu sekitar **5,48×10²¹ Joule** -- angka yang luar biasa besar, jauh melampaui energi kinetik roket mana pun di kecepatan "normal". Inilah gambaran nyata kenapa mustahil mendorong benda sebesar itu sampai benar-benar mencapai kecepatan cahaya: butuh energi yang terus membengkak tak terhingga.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong>Kalau jawabanmu meleset,</strong> cek dulu dua hal yang paling sering jadi sumber kesalahan: (1) lupa mengkuadratkan v/c sebelum dikurangkan dari 1 (bukan cuma v/c biasa), dan (2) salah menempatkan mana yang L₀/m₀ (nilai "diam"/"sejati") dan mana yang L/m (nilai hasil pengukuran pengamat yang relatif bergerak) -- kesalahan menukar keduanya adalah kesalahan paling umum di soal-soal seperti ini.
</div>

<div class="mtr-cta">
<p>Sudah menguasai relativitas khusus? Sekarang kita bahas topik lain di Bab Teori Dasar Fisika Modern yang sama anehnya: ternyata cahaya sendiri punya kepribadian ganda, kadang seperti gelombang, kadang seperti partikel.</p>
<a href="/materi/efek-fotolistrik-dan-dualisme-gelombang-partikel" class="btn btn-primary">💡 Lanjut ke Efek Fotolistrik dan Dualisme Gelombang-Partikel →</a>
</div>
