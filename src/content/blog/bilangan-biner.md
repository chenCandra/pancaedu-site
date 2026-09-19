---
title: "Bilangan Biner"
description: "Cara komputer 'membaca' angka -- kenalan dengan sistem bilangan biner (basis-2), cara konversi biner ke desimal dan sebaliknya, lengkap simulasi interaktif."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Bilangan Biner", "Sistem Digital", "Konversi Biner Desimal", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/bilangan-biner.html"
  judul: "Laboratorium Maya: Bilangan Biner"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1000
kuis:
  - soal: "Sistem bilangan biner memakai basis berapa?"
    pilihan: ["2 (cuma memakai digit 0 dan 1)", "10 (memakai digit 0-9)", "16 (memakai digit 0-9 dan A-F)", "8 (memakai digit 0-7)"]
    jawaban: 0
    penjelasan: "Bilangan biner adalah sistem bilangan basis-2, cuma memakai dua digit: 0 dan 1 -- persis jumlah level sinyal digital (LOW/HIGH)."
  - soal: "Nilai desimal dari bilangan biner 101 adalah..."
    pilihan: ["5", "3", "10", "101"]
    jawaban: 0
    penjelasan: "101 = (1×4) + (0×2) + (1×1) = 4 + 0 + 1 = 5."
  - soal: "Satu digit biner (0 atau 1) disebut..."
    pilihan: ["Bit", "Byte", "Nibble", "Piksel"]
    jawaban: 0
    penjelasan: "Bit (binary digit) adalah satu digit biner tunggal. Delapan bit disebut satu byte."
  - soal: "Kenapa sistem digital memakai bilangan biner (basis-2), bukan basis-10 seperti bilangan desimal biasa?"
    pilihan: ["Karena sinyal digital cuma punya 2 keadaan (HIGH/LOW), pas dengan 2 digit biner", "Karena basis-2 lebih mudah dihitung manusia", "Karena komputer tidak bisa menghitung bilangan desimal", "Karena basis-2 butuh lebih sedikit digit"]
    jawaban: 0
    penjelasan: "Sinyal digital cuma mengenal 2 keadaan fisik (ada tegangan/tidak), jadi representasi basis-2 (biner) paling pas dan alami untuk direalisasikan secara elektronik."
  - soal: "Nilai desimal dari bilangan biner 1010 adalah..."
    pilihan: ["10", "5", "2", "1010"]
    jawaban: 0
    penjelasan: "1010 = (1×8) + (0×4) + (1×2) + (0×1) = 8 + 0 + 2 + 0 = 10."
  - soal: "Nilai desimal dari bilangan biner 1111 adalah..."
    pilihan: ["15", "11", "1111", "10"]
    jawaban: 0
    penjelasan: "1111 = (1×8) + (1×4) + (1×2) + (1×1) = 8 + 4 + 2 + 1 = 15."
  - soal: "Nilai desimal dari bilangan biner 1101 adalah..."
    pilihan: ["13", "11", "14", "1101"]
    jawaban: 0
    penjelasan: "1101 = (1×8) + (1×4) + (0×2) + (1×1) = 8 + 4 + 0 + 1 = 13."
  - soal: "18 (desimal) diubah ke bentuk biner menjadi..."
    pilihan: ["10010", "10001", "01010", "11010"]
    jawaban: 0
    penjelasan: "18 ≥ 16 (2⁴) sisa 2, lalu 2 ≥ 2 (2¹) sisa 0. Jadi bit ke-5 dan bit ke-2 menyala: 10010."
  - soal: "12 (desimal) diubah ke bentuk biner menjadi..."
    pilihan: ["1100", "1010", "1001", "0110"]
    jawaban: 0
    penjelasan: "12 ≥ 8 (2³) sisa 4, lalu 4 ≥ 4 (2²) sisa 0. Jadi bit ke-4 dan bit ke-3 menyala: 1100."
  - soal: "Nilai tempat bit ke-4 (dari kanan) pada bilangan biner adalah..."
    pilihan: ["2³ = 8", "2⁴ = 16", "2² = 4", "2⁰ = 1"]
    jawaban: 0
    penjelasan: "Bit ke-1 = 2⁰, bit ke-2 = 2¹, bit ke-3 = 2², bit ke-4 = 2³ = 8."
  - soal: "Nilai tempat bit ke-5 (dari kanan) pada bilangan biner adalah..."
    pilihan: ["2⁴ = 16", "2⁵ = 32", "2³ = 8", "2¹ = 2"]
    jawaban: 0
    penjelasan: "Mengikuti pola nilai tempat pangkat 2, bit ke-5 (dari kanan) bernilai 2⁴ = 16."
  - soal: "Satu byte terdiri dari berapa bit?"
    pilihan: ["8 bit", "4 bit", "16 bit", "2 bit"]
    jawaban: 0
    penjelasan: "Delapan bit disebut satu byte -- ini satuan dasar penyimpanan data di komputer."
  - soal: "Satu byte (8 bit) bisa merepresentasikan berapa nilai berbeda?"
    pilihan: ["2⁸ = 256 nilai (0 sampai 255)", "2⁴ = 16 nilai", "8 nilai saja", "Tak terhingga nilai"]
    jawaban: 0
    penjelasan: "Satu byte (8 bit) bisa merepresentasikan 2⁸ = 256 nilai berbeda, dari 0 sampai 255."
  - soal: "Kalau 1 byte (8 bit) bisa merepresentasikan 256 nilai berbeda, berapa banyak nilai berbeda yang bisa direpresentasikan oleh 2 byte (16 bit)?"
    pilihan: ["2¹⁶ = 65.536 nilai", "2⁸ = 256 nilai (sama saja)", "512 nilai (dua kali 256)", "1024 nilai"]
    jawaban: 0
    penjelasan: "Mengikuti pola pangkat 2, 16 bit bisa merepresentasikan 2¹⁶ = 65.536 nilai berbeda -- jauh lebih banyak dari sekadar dua kali lipat 256."
  - soal: "Pada bilangan desimal 234, digit '2' menempati posisi dengan nilai tempat..."
    pilihan: ["10² = 100", "10¹ = 10", "10⁰ = 1", "10³ = 1000"]
    jawaban: 0
    penjelasan: "234 = (2×10²) + (3×10¹) + (4×10⁰), jadi digit 2 menempati posisi ratusan dengan nilai tempat 10² = 100."
  - soal: "Perbedaan mendasar antara sistem bilangan desimal (basis-10) dan biner (basis-2) terletak pada..."
    pilihan: ["Jumlah digit yang dipakai dan pangkat basis yang mewakili setiap posisi digit", "Biner hanya bisa dipakai untuk angka genap", "Desimal tidak punya nilai tempat sama sekali", "Biner tidak bisa dikonversi ke desimal"]
    jawaban: 0
    penjelasan: "Desimal memakai 10 digit dan setiap posisi mewakili pangkat 10, sedangkan biner memakai 2 digit dan setiap posisi (bit) mewakili pangkat 2."
  - soal: "'1010 (biner) bernilai sama dengan 1010 (desimal), yaitu seribu sepuluh.' Pernyataan ini..."
    pilihan: ["Salah -- 1010 biner bernilai 10 dalam desimal, sangat berbeda dari 1010 sebagai bilangan desimal", "Benar, kedua notasi selalu bernilai sama", "Benar, tapi hanya untuk bilangan genap", "Salah, karena biner tidak bisa ditulis dengan digit 1 dan 0 bersamaan"]
    jawaban: 0
    penjelasan: "Bilangan biner TIDAK dibaca seperti bilangan desimal. 1010 dalam biner sama dengan 10 dalam desimal, bukan 'seribu sepuluh'."
  - soal: "Untuk membedakan bilangan biner dan desimal yang kelihatannya sama seperti 1010, biasanya dituliskan dengan keterangan basis seperti..."
    pilihan: ["1010₂ untuk biner dan 1010₁₀ untuk desimal", "1010B dan 1010D tanpa aturan baku", "1010% untuk biner", "Tidak ada cara membedakannya"]
    jawaban: 0
    penjelasan: "Supaya tidak tertukar, keterangan basisnya biasa ditulis sebagai subskrip, misalnya 1010₂ (biner) vs 1010₁₀ (desimal)."
  - soal: "Kode ASCII, yang merepresentasikan huruf/karakter di komputer, memakai berapa byte per karakter?"
    pilihan: ["1 byte", "2 byte", "4 byte", "8 byte"]
    jawaban: 0
    penjelasan: "Kode ASCII memakai 1 byte per karakter."
  - soal: "Kilobyte, megabyte, dan gigabyte adalah satuan yang merupakan kelipatan dari..."
    pilihan: ["Byte", "Bit tunggal", "Piksel", "Hertz"]
    jawaban: 0
    penjelasan: "Byte adalah satuan dasar penyimpanan data di komputer -- kilobyte, megabyte, gigabyte semuanya kelipatan byte."
  - soal: "Kenapa basis-2 disebut representasi yang paling 'alami' untuk direalisasikan secara elektronik, dibanding misalnya basis-10?"
    pilihan: ["Karena rangkaian elektronik lebih mudah dibuat untuk mendeteksi dua keadaan tegangan (ada/tidak) dibanding sepuluh tingkat tegangan berbeda", "Karena rangkaian elektronik tidak bisa dibuat untuk basis-10 sama sekali", "Karena basis-2 tidak memerlukan energi listrik", "Karena basis-10 hanya bisa dipakai untuk angka desimal, bukan untuk sirkuit"]
    jawaban: 0
    penjelasan: "Sinyal digital cuma punya dua keadaan fisik (ada tegangan/tidak), jadi basis-2 paling pas dan gampang direalisasikan secara elektronik dibanding sepuluh tingkat tegangan yang dibutuhkan basis-10."
  - soal: "Metode 'bagi berulang kali dengan 2 dan catat sisanya' dipakai untuk mengonversi bilangan dari..."
    pilihan: ["Desimal ke biner", "Biner ke desimal", "Biner ke heksadesimal", "Desimal ke ASCII"]
    jawaban: 0
    penjelasan: "Metode pembagian berulang dengan 2 (mencatat sisanya dari bawah ke atas) adalah salah satu cara mengubah bilangan desimal jadi biner."
  - soal: "Nilai desimal dari bilangan biner 10000 adalah..."
    pilihan: ["16", "10", "8", "32"]
    jawaban: 0
    penjelasan: "10000 = (1×2⁴) + (0×2³) + (0×2²) + (0×2¹) + (0×2⁰) = 16."
  - soal: "Materi Bilangan Biner ini adalah lanjutan langsung dari materi apa, yang menjelaskan kenapa dunia digital cuma mengenal dua nilai (0 dan 1)?"
    pilihan: ["Sinyal Analog dan Digital", "Semikonduktor dan Dioda", "Transistor: Saklar dan Penguat", "Arus Bolak-Balik: Konsep Dasar"]
    jawaban: 0
    penjelasan: "Materi ini menyambung dari materi Sinyal Analog dan Digital, yang sudah menjelaskan kenapa dunia digital cuma mengenal 0 dan 1."
  - soal: "Pada bilangan biner 11001 (hasil konversi dari 25 di materi ini), digit '1' paling kiri menempati bit ke berapa (dari kanan), dan berapa nilai tempatnya?"
    pilihan: ["Bit ke-5, nilai tempat 2⁴=16", "Bit ke-1, nilai tempat 2⁰=1", "Bit ke-5, nilai tempat 2⁵=32", "Bit ke-4, nilai tempat 2³=8"]
    jawaban: 0
    penjelasan: "Digit paling kiri pada bilangan 5 digit menempati bit ke-5 (dari kanan), dengan nilai tempat 2⁴=16 -- sesuai proses konversi 25=16+8+1 di materi ini."
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

.mtr-note strong.mtr-wrong { color: var(--rose); }
.mtr-note strong.mtr-right { color: var(--teal); }

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
</style>

Di materi [Sinyal Analog dan Digital](/materi/sinyal-analog-dan-digital) kita sudah paham kenapa dunia digital cuma mengenal dua nilai: 0 dan 1. Sekarang kita belajar cara MEMBACA angka dalam sistem yang cuma pakai dua digit ini -- disebut **bilangan biner**.

## 🔟 Review Kilat: Bilangan Desimal (Basis-10)

Bilangan yang biasa kamu pakai sehari-hari adalah bilangan **desimal**, sistem basis-10 yang memakai 10 digit (0-9). Setiap posisi digit mewakili PANGKAT 10. Contoh angka **234**:

<div class="mtr-formula">234 = (2×10²) + (3×10¹) + (4×10⁰) = 200 + 30 + 4</div>

## 🔢 Bilangan Biner (Basis-2)

<div class="mtr-def">
💡 <strong>Bilangan biner</strong> adalah sistem bilangan basis-2, cuma memakai DUA digit: 0 dan 1. Setiap posisi digit (disebut <strong>bit</strong>, singkatan dari *binary digit*) mewakili PANGKAT 2, bukan pangkat 10.
</div>

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Posisi (dari kanan)</th><th>Nilai Tempat</th></tr></thead>
<tbody>
<tr><td>Bit ke-1 (paling kanan)</td><td>2⁰ = 1</td></tr>
<tr><td>Bit ke-2</td><td>2¹ = 2</td></tr>
<tr><td>Bit ke-3</td><td>2² = 4</td></tr>
<tr><td>Bit ke-4</td><td>2³ = 8</td></tr>
<tr><td>Bit ke-5</td><td>2⁴ = 16</td></tr>
<tr><td>...dst</td><td>...dst (kelipatan 2 terus)</td></tr>
</tbody>
</table>
</div>
</div>

Kenapa basis-2? Karena sinyal digital cuma punya DUA keadaan fisik: ada tegangan (1/HIGH) atau tidak ada tegangan (0/LOW) -- basis-2 adalah representasi paling ALAMI dan gampang direalisasikan secara elektronik untuk keadaan seperti ini (nanti kamu akan lihat sendiri di materi [Semikonduktor dan Dioda](/materi/semikonduktor-dan-dioda) dan [Transistor](/materi/transistor-saklar-dan-penguat), bagaimana komponen elektronik betul-betul mewujudkan dua keadaan ini).

## 🧮 Konversi Biner ke Desimal

Caranya sama seperti bilangan desimal: kalikan tiap digit dengan nilai tempatnya, lalu jumlahkan.

**Contoh:** Bilangan biner **1011**

<div class="mtr-formula">1011 = (1×2³) + (0×2²) + (1×2¹) + (1×2⁰)</div>
<div class="mtr-formula">1011 = (1×8) + (0×4) + (1×2) + (1×1) = 8 + 0 + 2 + 1 = 11</div>

Jadi 1011 (biner) = 11 (desimal). Coba jelajahi sendiri di simulasi bawah -- nyalakan/matikan bit-nya dan lihat nilai desimalnya berubah live.

## 🔁 Konversi Desimal ke Biner

Kebalikannya, untuk mengubah desimal ke biner, bagi berulang kali dengan 2 dan catat sisanya (dari bawah ke atas), atau cara yang lebih cepat: cari pangkat 2 terbesar yang muat, kurangi, ulangi.

**Contoh:** Ubah **25** (desimal) jadi biner.

<div class="mtr-formula">25 ≥ 16 (2⁴) → bit ke-5 = 1, sisa 25−16 = 9</div>
<div class="mtr-formula">9 ≥ 8 (2³) → bit ke-4 = 1, sisa 9−8 = 1</div>
<div class="mtr-formula">1 &lt; 4 (2²) → bit ke-3 = 0 &nbsp;|&nbsp; 1 &lt; 2 (2¹) → bit ke-2 = 0</div>
<div class="mtr-formula">1 ≥ 1 (2⁰) → bit ke-1 = 1, sisa 0</div>
<div class="mtr-formula">Hasil: 25 (desimal) = 11001 (biner)</div>

## 📦 Bit dan Byte

<div class="mtr-def">
💡 <strong>Bit</strong> (binary digit) adalah satu digit biner tunggal (0 atau 1). Delapan bit disebut satu <strong>byte</strong>. Satu byte bisa merepresentasikan 2⁸ = 256 nilai berbeda (0 sampai 255) -- inilah kenapa slider "geser nilai desimal" di simulasi bawah dibatasi 0-255, karena memakai 8 bit (1 byte).
</div>

Byte inilah satuan dasar penyimpanan data di komputer -- kilobyte (KB), megabyte (MB), gigabyte (GB) semuanya kelipatan byte. Kode ASCII (representasi huruf/karakter di komputer) juga memakai 1 byte per karakter.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "1010 (biner) dibaca sebagai 'seribu sepuluh', sama seperti membaca angka desimal biasa."</strong><br>
Tidak tepat. <strong class="mtr-right">Bilangan biner TIDAK dibaca seperti bilangan desimal.</strong> 1010 dalam biner sama dengan 10 dalam desimal (bukan "seribu sepuluh")! Supaya tidak tertukar, biasanya ditulis dengan keterangan basisnya, misalnya 1010₂ (biner) vs 1010₁₀ (desimal) -- dua bilangan yang kelihatannya sama tapi nilainya jauh berbeda.
</div>

## 🤔 Coba Pikirkan

1. Berapa nilai desimal dari bilangan biner 1111 (4 bit semuanya menyala)? Coba hitung dulu manual, baru cocokkan dengan simulasi di atas.
2. Kalau 1 byte (8 bit) bisa merepresentasikan 256 nilai berbeda (0-255), menurutmu berapa banyak nilai berbeda yang bisa direpresentasikan oleh 2 byte (16 bit)? (Petunjuk: pola pangkat 2 yang sudah kamu pelajari di atas)

Coba diskusikan jawabanmu dengan teman sekelas, atau buktikan sendiri lewat simulasi di atas.

<div class="mtr-cta">
<p>Sekarang kita paham bagaimana angka direpresentasikan dalam sistem digital. Selanjutnya kita lihat bagaimana keadaan 0/1 ini benar-benar diwujudkan secara fisik lewat komponen elektronik.</p>
<a href="/materi/semikonduktor-dan-dioda" class="btn btn-primary">🔌 Lanjut ke Semikonduktor dan Dioda →</a>
</div>
