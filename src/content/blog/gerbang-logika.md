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
