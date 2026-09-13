---
title: "Aplikasi Induksi: Generator dan Transformator"
description: "Dua alat yang memanfaatkan induksi elektromagnetik dalam kehidupan sehari-hari -- generator yang mengubah energi gerak jadi listrik, dan transformator yang menaikkan/menurunkan tegangan AC."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Induksi Elektromagnetik", "Generator", "Transformator", "Fisika Kelas XII"]
kuis:
  - soal: "Generator listrik bekerja dengan cara..."
    pilihan: ["Memutar kumparan di dalam medan magnet, menghasilkan GGL induksi terus-menerus", "Menyimpan listrik dalam sel kimia", "Menaikkan tegangan listrik AC", "Mengubah listrik AC menjadi DC"]
    jawaban: 0
    penjelasan: "Generator memutar kumparan (atau magnet) sehingga fluks yang menembus kumparan terus berubah, menghasilkan GGL induksi yang berkelanjutan."
  - soal: "Sumber energi gerak (mekanik) yang memutar generator di PLTA berasal dari..."
    pilihan: ["Aliran/jatuhnya air yang memutar turbin", "Pembakaran bahan bakar fosil langsung", "Reaksi kimia baterai", "Cahaya matahari langsung"]
    jawaban: 0
    penjelasan: "PLTA (Pembangkit Listrik Tenaga Air) menggunakan energi gerak air yang memutar turbin, yang kemudian memutar generator."
  - soal: "Transformator (trafo) berfungsi untuk..."
    pilihan: ["Menaikkan atau menurunkan tegangan listrik AC", "Mengubah energi gerak jadi listrik", "Menyimpan energi listrik", "Mengubah AC menjadi DC"]
    jawaban: 0
    penjelasan: "Transformator mengubah (menaikkan/menurunkan) tegangan listrik AC lewat prinsip induksi elektromagnetik antara dua kumparan."
  - soal: "Trafo step-up dipakai di gardu listrik SEBELUM transmisi jarak jauh, tujuannya untuk..."
    pilihan: ["Menaikkan tegangan supaya arus lebih kecil, mengurangi kerugian energi panas di kabel", "Menurunkan tegangan supaya lebih aman", "Mengubah AC jadi DC untuk transmisi", "Menyimpan listrik sementara"]
    jawaban: 0
    penjelasan: "Menaikkan tegangan (dengan trafo step-up) membuat arus yang mengalir lebih kecil untuk daya yang sama -- mengurangi kerugian energi akibat panas (P=I²R) sepanjang kabel transmisi jarak jauh."
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

Di materi [Hukum Faraday dan Hukum Lenz](/materi/hukum-faraday-dan-lenz) kita paham mekanisme dasar induksi elektromagnetik. Sekarang kita lihat bagaimana prinsip itu dimanfaatkan lewat dua alat yang kita pakai setiap hari tanpa sadar: **Generator** dan **Transformator**.

## ⚙️ Generator: Gerak Menjadi Listrik

**Generator** mengubah energi GERAK (mekanik) menjadi energi LISTRIK, lewat prinsip induksi elektromagnetik. Caranya: sebuah kumparan diputar terus-menerus di dalam medan magnet (atau sebaliknya, magnet yang diputar mengelilingi kumparan diam) -- perputaran ini membuat fluks magnetik yang menembus kumparan TERUS BERUBAH, sehingga GGL induksi timbul secara berkelanjutan, bukan cuma sesaat.

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">💧</span><h4>PLTA</h4><p>Aliran/jatuhnya air memutar turbin, turbin memutar generator.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🔥</span><h4>PLTU</h4><p>Uap panas dari pembakaran bahan bakar memutar turbin uap, yang memutar generator.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">💨</span><h4>PLTB</h4><p>Angin memutar bilah turbin angin, yang memutar generator.</p></div>
</div>
</div>

Perhatikan pola pentingnya: apa pun sumber energinya (air, uap, angin), yang terhubung LANGSUNG ke generator selalu adalah GERAK PUTAR. Ini menghubungkan kembali ke materi [Energi Terbarukan](/materi/energi-terbarukan) yang sudah kamu pelajari sebelumnya di Kelas X.

## 🔌 Transformator: Menaikkan/Menurunkan Tegangan

**Transformator (trafo)** memanfaatkan induksi elektromagnetik dengan cara berbeda: dua kumparan (primer dan sekunder) dililitkan pada inti besi yang sama, TIDAK saling bersentuhan secara listrik. Ketika arus AC (bolak-balik) mengalir di kumparan primer, medan magnetnya terus berubah -- perubahan inilah yang menginduksi GGL pada kumparan sekunder, meski keduanya tidak terhubung kabel langsung.

**Kenapa harus arus AC?** Karena trafo butuh fluks yang TERUS BERUBAH untuk bisa menginduksi -- arus DC yang konstan tidak menghasilkan perubahan fluks, sehingga trafo tidak akan bekerja dengan sumber DC.

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Jenis Trafo</th><th>Fungsi</th><th>Ciri Lilitan</th></tr></thead>
<tbody>
<tr><td>Step-Up</td><td>MENAIKKAN tegangan</td><td>Lilitan sekunder LEBIH BANYAK dari primer</td></tr>
<tr><td>Step-Down</td><td>MENURUNKAN tegangan</td><td>Lilitan sekunder LEBIH SEDIKIT dari primer</td></tr>
</tbody>
</table>
</div>
</div>

Perbandingan tegangan sebanding dengan perbandingan jumlah lilitan: **Vp/Vs = Np/Ns** (p = primer, s = sekunder).

## 🗼 Kenapa Transmisi Listrik Pakai Tegangan Sangat Tinggi?

Ini yang sering bikin bingung: kenapa listrik ditransmisikan dari PLTA/PLTU ke kota dengan tegangan SANGAT TINGGI (ratusan ribu volt), padahal di rumah kita cuma butuh 220V? Jawabannya soal EFISIENSI:

Untuk daya listrik yang sama, kalau TEGANGAN dinaikkan (pakai trafo step-up), ARUS yang mengalir jadi lebih KECIL. Kerugian energi akibat panas di kabel (P=I²R) sangat bergantung pada besar arus (dikuadratkan!) -- jadi arus kecil = kerugian energi jauh lebih kecil sepanjang kabel transmisi yang panjang. Setelah sampai dekat kota, trafo step-down menurunkan tegangannya lagi ke level aman untuk dipakai di rumah.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Transformator bisa menaikkan/menurunkan tegangan listrik AC maupun DC."</strong><br>
Tidak tepat. <strong class="mtr-right">Transformator HANYA bekerja dengan arus AC</strong> -- karena butuh fluks magnetik yang terus berubah untuk menginduksi kumparan sekunder. Arus DC yang konstan tidak menghasilkan perubahan fluks, sehingga trafo tidak berfungsi.
</div>

## 🤔 Coba Pikirkan

Charger HP-mu mengubah listrik 220V AC dari stopkontak menjadi sekitar 5V DC untuk mengisi baterai.

1. Trafo di dalam charger itu termasuk jenis step-up atau step-down? Kenapa?
2. Kenapa charger butuh komponen TAMBAHAN (bukan cuma trafo) untuk mengubah AC jadi DC?

Coba diskusikan jawabanmu dengan teman sekelas.

<div class="mtr-cta">
<p>Sampai di sini kita tuntas membahas Induksi Elektromagnetik (2.2). Selanjutnya kita bahas listrik yang mengalir di rumah kita sehari-hari secara lebih mendalam: Arus Bolak-Balik (AC).</p>
<a href="/materi/arus-bolak-balik-konsep-dasar" class="btn btn-primary">📈 Lanjut ke Arus Bolak-Balik: Konsep Dasar →</a>
</div>
