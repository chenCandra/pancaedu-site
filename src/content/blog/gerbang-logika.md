---
title: "Gerbang Logika: AND, OR, NOT, dan Turunannya"
description: "Bagaimana miliaran transistor di dalam chip komputer bisa 'berpikir'? Kenalan dengan gerbang logika AND, OR, NOT, NAND, NOR, dan XOR, lengkap tabel kebenaran dan simulasi interaktif."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Gerbang Logika", "Sistem Digital", "Aljabar Boolean", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/gerbang-logika.html"
  judul: "Laboratorium Maya: Gerbang Logika"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1050
kuis:
  - soal: "Gerbang logika AND akan menghasilkan output 1 kalau..."
    pilihan: ["SEMUA inputnya bernilai 1", "SALAH SATU inputnya bernilai 1", "SEMUA inputnya bernilai 0", "Inputnya berbeda satu sama lain"]
    jawaban: 0
    penjelasan: "Gerbang AND cuma menghasilkan 1 kalau SEMUA inputnya 1 -- kalau ada satu saja yang 0, outputnya pasti 0."
  - soal: "Gerbang logika OR akan menghasilkan output 0 HANYA JIKA..."
    pilihan: ["SEMUA inputnya bernilai 0", "SEMUA inputnya bernilai 1", "Salah satu inputnya bernilai 1", "Inputnya berjumlah genap"]
    jawaban: 0
    penjelasan: "OR menghasilkan 0 HANYA kalau semua inputnya 0 -- begitu ada satu saja yang 1, outputnya langsung 1."
  - soal: "Gerbang NAND adalah gabungan dari gerbang..."
    pilihan: ["NOT dan AND", "NOT dan OR", "AND dan OR", "XOR dan NOT"]
    jawaban: 0
    penjelasan: "NAND = NOT + AND, hasilnya persis kebalikan dari output gerbang AND."
  - soal: "Gerbang XOR akan menghasilkan output 1 kalau..."
    pilihan: ["Kedua inputnya BERBEDA (satu 0, satu 1)", "Kedua inputnya SAMA", "Semua input bernilai 1", "Semua input bernilai 0"]
    jawaban: 0
    penjelasan: "XOR (exclusive OR) menghasilkan 1 hanya kalau kedua inputnya berbeda nilai."
  - soal: "Sistem digital cuma mengenal dua keadaan (1 dan 0), berbeda dari sinyal analog yang..."
    pilihan: ["Nilainya kontinu, bisa berapa saja", "Nilainya juga hanya 0 dan 1", "Tidak punya nilai sama sekali", "Hanya bisa bernilai negatif"]
    jawaban: 0
    penjelasan: "Sinyal analog nilainya kontinu (bisa berapa saja di suatu rentang), sedangkan sinyal digital cuma mengenal dua keadaan diskrit: 1 (HIGH) atau 0 (LOW)."
  - soal: "Dalam sistem digital, keadaan 0 (LOW) merepresentasikan..."
    pilihan: ["Tidak ada tegangan", "Ada tegangan penuh", "Tegangan negatif", "Tegangan bolak-balik"]
    jawaban: 0
    penjelasan: "Keadaan 0 (LOW) berarti tidak ada tegangan, sedangkan 1 (HIGH) berarti ada tegangan -- inilah dasar representasi fisik dari bit digital."
  - soal: "Gerbang logika yang HANYA punya satu input (bukan dua atau lebih) adalah..."
    pilihan: ["NOT", "AND", "OR", "XOR"]
    jawaban: 0
    penjelasan: "NOT (inverter) unik karena hanya punya satu input -- fungsinya cuma membalik nilai input itu, dari 0 jadi 1 atau sebaliknya."
  - soal: "Kalau input A=1 dimasukkan ke gerbang NOT, outputnya adalah..."
    pilihan: ["0", "1", "Tidak terdefinisi", "Tergantung input B"]
    jawaban: 0
    penjelasan: "NOT selalu membalik nilai input tunggalnya -- input 1 menghasilkan output 0."
  - soal: "Gerbang AND dengan input A=1 dan B=1 akan menghasilkan output..."
    pilihan: ["1", "0", "Tidak terdefinisi", "Bisa 1 atau 0"]
    jawaban: 0
    penjelasan: "Sesuai tabel kebenaran AND, output 1 muncul HANYA kalau semua input (A dan B) bernilai 1 -- kondisi ini terpenuhi di sini."
  - soal: "Gerbang OR dengan input A=0 dan B=0 akan menghasilkan output..."
    pilihan: ["0", "1", "Tidak terdefinisi", "Bisa 1 atau 0"]
    jawaban: 0
    penjelasan: "OR hanya menghasilkan 0 kalau SEMUA inputnya 0 -- karena A=0 dan B=0, outputnya pasti 0."
  - soal: "Gerbang NAND dengan input A=0 dan B=0 akan menghasilkan output..."
    pilihan: ["1", "0", "Tidak terdefinisi", "Sama dengan output AND"]
    jawaban: 0
    penjelasan: "NAND adalah kebalikan dari AND. AND(0,0)=0, jadi NAND(0,0) = NOT(0) = 1."
  - soal: "Gerbang NOR akan menghasilkan output 1 HANYA JIKA..."
    pilihan: ["SEMUA inputnya bernilai 0", "SEMUA inputnya bernilai 1", "Salah satu inputnya bernilai 1", "Kedua inputnya berbeda"]
    jawaban: 0
    penjelasan: "NOR adalah kebalikan dari OR. OR bernilai 0 hanya ketika semua input 0, jadi NOR bernilai 1 justru pada kondisi itu -- semua input 0."
  - soal: "Gerbang XOR dengan input A=1 dan B=1 akan menghasilkan output..."
    pilihan: ["0", "1", "Tidak terdefinisi", "Sama dengan output OR"]
    jawaban: 0
    penjelasan: "XOR hanya menghasilkan 1 kalau kedua inputnya BERBEDA. Karena A dan B sama-sama 1 (tidak berbeda), outputnya 0."
  - soal: "Kalimat yang PALING TEPAT menggambarkan hubungan antara NAND, NOR, dan gerbang-gerbang dasar lainnya adalah..."
    pilihan: ["NAND dan NOR disebut gerbang universal karena semua jenis gerbang lain bisa dibangun hanya dari kombinasi NAND saja, atau hanya dari NOR saja", "NAND dan NOR adalah gerbang yang persis identik, bisa saling dipertukarkan bebas", "Hanya AND dan OR yang bisa dipakai membangun gerbang lain", "Gerbang universal berarti gerbang yang bisa dipakai di semua negara"]
    jawaban: 0
    penjelasan: "NAND dan NOR disebut gerbang universal karena keduanya masing-masing cukup untuk membangun SEMUA jenis gerbang logika lainnya -- inilah salah satu alasan NAND/NOR jadi komponen favorit di desain chip."
  - soal: "Kenapa NAND dan NOR jadi komponen favorit dalam desain chip komputer sungguhan?"
    pilihan: ["Karena keduanya adalah gerbang universal -- cukup dipakai sendirian untuk membangun semua rangkaian logika lain", "Karena keduanya lebih murah untuk dibeli di toko", "Karena keduanya tidak butuh transistor sama sekali", "Karena keduanya hanya berlaku untuk sinyal analog"]
    jawaban: 0
    penjelasan: "Karena sifat universalnya, pabrik chip bisa memproduksi jutaan gerbang NAND/NOR yang seragam untuk membangun rangkaian apa pun -- lebih efisien dibanding memproduksi banyak jenis gerbang berbeda."
  - soal: "Sebuah rangkaian menggabungkan gerbang OR dan NOT: input A dan B masuk ke gerbang OR, hasilnya masuk ke gerbang NOT. Kalau A=0 dan B=0, berapa output akhirnya?"
    pilihan: ["1", "0", "Tidak terdefinisi", "Sama dengan output OR saja"]
    jawaban: 0
    penjelasan: "OR(0,0)=0, lalu NOT(0)=1. Rangkaian OR-lalu-NOT ini sebenarnya persis sama dengan gerbang NOR."
  - soal: "Rangkaian OR-lalu-NOT (input masuk gerbang OR, hasilnya masuk gerbang NOT) pada dasarnya sama persis dengan gerbang tunggal..."
    pilihan: ["NOR", "NAND", "XOR", "AND"]
    jawaban: 0
    penjelasan: "NOR = NOT + OR, jadi rangkaian OR yang hasilnya di-NOT-kan menghasilkan tabel kebenaran yang identik dengan gerbang NOR langsung."
  - soal: "Sebuah rangkaian alarm keamanan baru menyala kalau SENSOR PINTU dan SENSOR GERAK sama-sama mendeteksi sesuatu. Logika gerbang apa yang paling menggambarkan rangkaian ini?"
    pilihan: ["AND", "OR", "NOT", "NOR"]
    jawaban: 0
    penjelasan: "Karena alarm baru menyala kalau SEMUA syarat (kedua sensor) terpenuhi bersamaan, ini persis logika gerbang AND -- output 1 hanya kalau semua input 1."
  - soal: "Sebuah sistem butuh menyalakan lampu HANYA KETIKA SALAH SATU dari dua saklar ditekan, TAPI TIDAK KEDUANYA sekaligus. Gerbang logika yang paling cocok untuk kasus ini adalah..."
    pilihan: ["XOR", "AND", "OR", "NOT"]
    jawaban: 0
    penjelasan: "XOR menghasilkan 1 hanya kalau kedua inputnya BERBEDA (satu 1, satu 0) -- pas untuk kasus 'salah satu tapi tidak keduanya'. Gerbang OR biasa masih akan menyala 1 kalau KEDUA saklar ditekan sekaligus, jadi tidak cocok."
  - soal: "Manakah pernyataan yang PALING TEPAT tentang hubungan NAND dan NOR?"
    pilihan: ["NAND adalah kebalikan dari AND, sedangkan NOR adalah kebalikan dari OR -- keduanya punya tabel kebenaran yang berbeda satu sama lain", "NAND dan NOR punya tabel kebenaran yang identik, hanya namanya berbeda", "NAND adalah kebalikan dari OR, dan NOR adalah kebalikan dari AND", "NAND dan NOR sama sekali tidak berkaitan dengan AND maupun OR"]
    jawaban: 0
    penjelasan: "NAND = NOT+AND (kebalikan AND), NOR = NOT+OR (kebalikan OR) -- meski keduanya sama-sama disebut gerbang universal, tabel kebenarannya tetap berbeda satu sama lain."
  - soal: "Blok bangunan paling dasar dari SEMUA sistem digital, mulai dari kalkulator sederhana sampai prosesor superkomputer, adalah..."
    pilihan: ["Gerbang logika", "Baterai", "Kabel tembaga", "Layar LCD"]
    jawaban: 0
    penjelasan: "Kombinasi jutaan hingga miliaran gerbang logika inilah yang membentuk rangkaian logika kompleks pada semua perangkat digital, dari kalkulator sampai superkomputer."
  - soal: "Sebelum gerbang logika, materi yang menjelaskan bagaimana satu komponen bisa berfungsi sebagai saklar digital ON/OFF adalah..."
    pilihan: ["Transistor: Saklar dan Penguat", "Hukum Faraday dan Lenz", "Kapasitor Keping Sejajar", "Medan Magnet: Konsep Dasar"]
    jawaban: 0
    penjelasan: "Transistor bisa berfungsi sebagai saklar digital ON (1) atau OFF (0) -- inilah fondasi yang kemudian disusun jadi gerbang logika."
  - soal: "Sebuah rangkaian menggabungkan gerbang AND dan NOT: input A dan B masuk ke gerbang AND, lalu hasilnya masuk ke gerbang NOT. Kalau A=1 dan B=1, berapa output akhirnya?"
    pilihan: ["0", "1", "Tidak terdefinisi", "Sama dengan output AND saja"]
    jawaban: 0
    penjelasan: "AND(1,1)=1, lalu NOT(1)=0. Rangkaian AND-lalu-NOT ini sama persis dengan gerbang NAND, dan sesuai tabel kebenaran NAND, NAND(1,1)=0."
  - soal: "Jumlah baris pada tabel kebenaran sebuah gerbang logika dengan DUA input (seperti AND, OR, NAND) selalu ada..."
    pilihan: ["4 baris, mencakup semua kombinasi 0/1 dari dua input", "2 baris saja", "8 baris", "Tidak tentu, tergantung jenis gerbangnya"]
    jawaban: 0
    penjelasan: "Dengan dua input yang masing-masing punya 2 kemungkinan nilai (0 atau 1), total kombinasinya 2×2=4 baris -- inilah yang selalu muncul di tabel kebenaran gerbang AND, OR, NAND, NOR, dan XOR."
  - soal: "Kalau sebuah gerbang NOT dipasang dua kali berurutan (output NOT pertama jadi input NOT kedua) untuk input A=1, hasil akhirnya adalah..."
    pilihan: ["1, sama seperti input aslinya", "0", "Tidak terdefinisi", "Selalu 1 apapun inputnya"]
    jawaban: 0
    penjelasan: "NOT(1)=0, lalu NOT(0)=1 lagi -- dua NOT berurutan saling membatalkan efeknya, sehingga hasil akhirnya kembali sama dengan input semula."
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
</style>

Di materi [Transistor: Saklar dan Penguat](/materi/transistor-saklar-dan-penguat) kita belajar transistor bisa berfungsi sebagai saklar digital: ON (1) atau OFF (0). Pertanyaannya sekarang: bagaimana caranya jutaan saklar sederhana seperti itu bisa disusun jadi sesuatu serumit prosesor HP-mu yang bisa menjalankan game, memutar musik, dan menghitung? Jawabannya dimulai dari unit paling dasar: **gerbang logika (logic gate)**.

## 🔢 Sinyal Digital: Cuma Ada Dua Pilihan

Berbeda dari sinyal analog (yang nilainya bisa berapa saja, kontinu), sistem digital cuma mengenal DUA keadaan: **1 (HIGH/ada tegangan)** atau **0 (LOW/tidak ada tegangan)**. Kombinasi dari sekumpulan transistor yang saling terhubung bisa dirancang untuk mengolah kombinasi input 0/1 ini jadi output 0/1 tertentu, mengikuti aturan logika tertentu -- itulah **gerbang logika**.

## 🚪 Tiga Gerbang Dasar

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">🔗</span><h4>AND</h4><p>Output 1 HANYA JIKA SEMUA input bernilai 1. Ibarat syarat ganda -- semuanya harus terpenuhi.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">➕</span><h4>OR</h4><p>Output 1 kalau ADA MINIMAL SATU input yang bernilai 1. Cukup salah satu syarat terpenuhi.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🔄</span><h4>NOT</h4><p>Cuma punya SATU input, fungsinya membalik nilai: 0 jadi 1, 1 jadi 0. Disebut juga inverter.</p></div>
</div>
</div>

Setiap gerbang logika punya **tabel kebenaran (truth table)** yang mendaftar semua kemungkinan output untuk setiap kombinasi input:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>A</th><th>B</th><th>AND</th><th>OR</th></tr></thead>
<tbody>
<tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
</tbody>
</table>
</div>
</div>

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>A</th><th>NOT</th></tr></thead>
<tbody>
<tr><td>0</td><td>1</td></tr>
<tr><td>1</td><td>0</td></tr>
</tbody>
</table>
</div>
</div>

## 🔀 Tiga Gerbang Turunan

Menggabungkan gerbang NOT dengan AND/OR/XOR menghasilkan tiga gerbang turunan yang juga sangat sering dipakai:

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">🚫🔗</span><h4>NAND (NOT+AND)</h4><p>Kebalikan dari AND. Output 0 HANYA JIKA semua input 1, selain itu outputnya 1.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🚫➕</span><h4>NOR (NOT+OR)</h4><p>Kebalikan dari OR. Output 1 HANYA JIKA semua input 0, selain itu outputnya 0.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">⚡</span><h4>XOR (Exclusive OR)</h4><p>Output 1 HANYA JIKA kedua inputnya BERBEDA (satu 0, satu 1). Kalau kedua input SAMA, outputnya 0.</p></div>
</div>
</div>

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>A</th><th>B</th><th>NAND</th><th>NOR</th><th>XOR</th></tr></thead>
<tbody>
<tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
</tbody>
</table>
</div>
</div>

<div class="mtr-def">
💡 Fakta menarik: gerbang NAND dan NOR disebut <strong>"gerbang universal"</strong> -- SEMUA jenis gerbang logika lain (AND, OR, NOT, XOR, dst) bisa dibangun HANYA dari kombinasi NAND saja (atau HANYA dari NOR saja). Inilah salah satu alasan kenapa NAND/NOR jadi komponen favorit dalam desain chip komputer sungguhan.
</div>

## ✏️ Contoh Soal

**Soal:** Sebuah rangkaian menggabungkan gerbang AND dan NOT: input A dan B masuk ke gerbang AND, lalu hasilnya masuk ke gerbang NOT. Kalau A=1 dan B=0, berapa output akhirnya?

**Pembahasan:**

<div class="mtr-formula" style="text-align:center;font-weight:600;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:0.75rem 1rem;margin-block:1rem;">Langkah 1: AND(1, 0) = 0 &nbsp;→&nbsp; Langkah 2: NOT(0) = 1</div>

Jadi output akhirnya adalah **1**. Perhatikan bahwa rangkaian AND-lalu-NOT ini sebenarnya PERSIS SAMA dengan gerbang NAND langsung -- coba buktikan sendiri dengan membandingkan ke tabel kebenaran NAND di atas!

## 🖥️ Aplikasi: Fondasi Semua Komputer Digital

Gerbang logika adalah blok bangunan paling dasar dari SEMUA sistem digital -- dari kalkulator sederhana sampai prosesor superkomputer. Kombinasi jutaan hingga miliaran gerbang logika inilah yang membentuk **rangkaian logika** yang bisa melakukan penjumlahan, penyimpanan data (memori), sampai menjalankan program yang jauh lebih kompleks. Contoh sederhana rangkaian kombinasional: sistem alarm keamanan yang baru menyala kalau SENSOR PINTU dan SENSOR GERAK sama-sama mendeteksi sesuatu -- ini persis logika gerbang AND.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "NAND cuma kebalikan dari NOR, keduanya bisa saling dipertukarkan."</strong><br>
Tidak tepat. <strong class="mtr-right">NAND adalah kebalikan dari AND, dan NOR adalah kebalikan dari OR</strong> -- keduanya punya tabel kebenaran yang BERBEDA satu sama lain (coba bandingkan lagi tabel NAND dan NOR di atas). Keduanya memang sama-sama disebut "gerbang universal", tapi itu bukan berarti keduanya identik atau bisa saling menggantikan begitu saja dalam satu rangkaian.
</div>

## 🤔 Coba Pikirkan

1. Coba buat tabel kebenaran untuk rangkaian OR-lalu-NOT (input A dan B masuk ke gerbang OR, hasilnya masuk ke NOT). Gerbang dasar apa yang hasilnya persis sama dengan rangkaian ini?
2. Sebuah sistem butuh menyalakan lampu HANYA KETIKA SALAH SATU dari dua saklar ditekan, TAPI TIDAK KEDUANYA sekaligus (misalnya supaya tidak short circuit). Gerbang logika apa yang paling cocok dipakai untuk kasus ini?

Coba diskusikan jawabanmu dengan teman sekelas, atau buktikan langsung lewat simulasi di atas -- coba semua kombinasi input di tiap gerbang dan bandingkan dengan tabel kebenarannya.

<div class="mtr-cta">
<p>Dengan ini kita tuntas membahas seluruh Bab Teori Dasar Digital, sekaligus menyelesaikan seluruh materi Fisika Kelas XII di situs ini. Jelajahi lagi materi-materi lain lewat halaman Materi.</p>
<a href="/materi" class="btn btn-primary">📚 Lihat Semua Materi →</a>
</div>
