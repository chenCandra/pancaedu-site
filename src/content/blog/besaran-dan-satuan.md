---
title: "Besaran dan Satuan"
description: "Materi paling dasar sebelum belajar besaran pokok & turunan -- apa itu besaran dan satuan, kenapa dunia butuh satuan baku (Sistem Internasional), sampai klasifikasi besaran skalar dan vektor."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-29
tags: ["Besaran dan Satuan", "Fisika Kelas X", "Fase E"]
kuis:
  - soal: "Besaran adalah..."
    pilihan: ["Angka hasil pengukuran saja", "Sesuatu yang dapat diukur dan dinyatakan dengan angka serta satuan", "Nama alat ukur yang dipakai", "Satuan yang dipakai dalam pengukuran"]
    jawaban: 1
    penjelasan: "Besaran mencakup TIGA hal sekaligus: apa yang diukur (mis. panjang), nilainya (angka), dan satuannya -- bukan cuma salah satunya."
  - soal: "Kenapa satuan seperti jengkal, hasta, atau depa TIDAK cocok dipakai sebagai satuan baku?"
    pilihan: ["Karena namanya kurang keren", "Karena ukurannya berbeda-beda tergantung orang yang mengukur", "Karena tidak bisa dipakai mengukur panjang", "Karena tidak diajarkan di sekolah"]
    jawaban: 1
    penjelasan: "Jengkal orang dewasa dan anak-anak jelas beda ukurannya -- hasil pengukuran jadi tidak konsisten kalau dibandingkan orang lain. Itulah kenapa dunia butuh satuan yang nilainya sama untuk siapa saja, di mana saja."
  - soal: "Manakah yang BUKAN termasuk syarat satuan baku yang baik?"
    pilihan: ["Nilainya tetap, tidak berubah-ubah", "Mudah ditiru ulang di tempat mana pun", "Diakui dan dipakai secara internasional", "Namanya harus dalam bahasa Inggris"]
    jawaban: 3
    penjelasan: "Bahasa penamaan sama sekali bukan syarat satuan baku -- yang penting nilainya tetap, bisa direproduksi ulang, dan disepakati secara internasional (itulah yang melandasi Sistem Internasional/SI)."
  - soal: "Berdasarkan cara memperolehnya, besaran dalam Fisika dibagi menjadi dua kelompok, yaitu..."
    pilihan: ["Besaran nyata dan besaran maya", "Besaran pokok dan besaran turunan", "Besaran besar dan besaran kecil", "Besaran SI dan besaran non-SI"]
    jawaban: 1
    penjelasan: "Besaran pokok adalah besaran dasar (tidak diturunkan dari besaran lain), sedangkan besaran turunan dibentuk dari kombinasi besaran pokok."
  - soal: "Berdasarkan ada tidaknya arah, manakah dari berikut yang termasuk besaran VEKTOR?"
    pilihan: ["Massa", "Waktu", "Kecepatan", "Jarak"]
    jawaban: 2
    penjelasan: "Kecepatan punya arah (mis. 'ke utara'), jadi termasuk besaran vektor. Massa, waktu, dan jarak cuma punya nilai tanpa arah -- termasuk besaran skalar."
draft: false
---

<style>
.mtr-table-wrap { margin-block: 2rem; }

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

.mtr-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  gap: 1rem;
  margin-block: 1.5rem;
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
.mtr-card p { font-size: 0.875rem; color: var(--ink-soft); margin: 0 0 0.75rem; }

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

Setelah belajar cara [merancang penyelidikan ilmiah](/materi/merancang-dan-melakukan-penyelidikan-ilmiah), sekarang saatnya masuk ke apa yang sebenarnya "diselidiki" itu -- ada dua kata yang bakal terus muncul di hampir setiap materi selanjutnya: **besaran** dan **satuan**. Kedengarannya sepele, tapi keduanya adalah fondasi dari cara Fisika "berbicara" secara kuantitatif. Tanpa memahami ini dengan benar, materi-materi selanjutnya (besaran pokok, besaran turunan, dimensi, pengukuran) bakal terasa membingungkan.

## 🔎 Apa Itu Besaran?

<div class="mtr-def">
💡 <strong>Besaran</strong> adalah sesuatu yang dapat diukur dan dinyatakan dalam bentuk angka serta satuan.
</div>

Perhatikan contoh berikut: **panjang meja = 2 meter**. Ada tiga bagian di situ:

* **Panjang** → besaran yang diukur
* **2** → nilai hasil pengukuran
* **meter** → satuan

Ketiganya berbeda, dan sering tertukar. ~~Besaran itu ya angkanya~~ → bukan. Angka cuma salah satu bagian dari besaran, bukan besaran itu sendiri. "2" saja tanpa satuan tidak bermakna apa-apa dalam Fisika -- 2 apa? Meter? Kilogram? Detik?

## ⚖️ Apa Itu Satuan?

<div class="mtr-def">
💡 <strong>Satuan</strong> adalah besaran pembanding yang digunakan untuk menyatakan hasil pengukuran suatu besaran.
</div>

Kalau kita bilang "panjang meja 2 meter", artinya panjang meja itu **2 kali lipat** dari besaran pembanding yang disebut "1 meter". Satuan pada dasarnya adalah kesepakatan tentang seberapa besar "satu" itu.

## 📏 Satuan Baku dan Tidak Baku

Dulu, sebelum ada satuan seperti yang kita kenal sekarang, orang mengukur panjang pakai bagian tubuhnya sendiri -- **jengkal** (rentang jari tangan), **hasta** (dari siku ke ujung jari), atau **depa** (rentang kedua tangan).

Masalahnya: jengkal orang dewasa jelas beda dengan jengkal anak kecil. Kalau dua orang mengukur panjang kain yang sama pakai jengkal masing-masing, hasilnya bisa beda-beda.

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Jenis Satuan</th><th>Ciri-ciri</th><th>Contoh</th></tr>
</thead>
<tbody>
<tr><td>Satuan Tidak Baku</td><td>Nilainya berbeda-beda tergantung siapa yang memakai, tidak konsisten</td><td>Jengkal, hasta, depa, langkah kaki</td></tr>
<tr><td>Satuan Baku</td><td>Nilainya tetap dan sama untuk semua orang, di mana pun diukur</td><td>Meter, kilogram, sekon</td></tr>
</tbody>
</table>
</div>
</div>

~~Yang penting bisa dipakai buat mengukur, satuan baku atau tidak sama saja~~ → tidak sama. Satuan tidak baku boleh saja dipakai buat perkiraan santai sehari-hari, tapi dalam Fisika (dan sains pada umumnya), hasil pengukuran harus bisa dibandingkan dan diperiksa ulang oleh orang lain di tempat berbeda -- itu cuma mungkin kalau satuannya baku.

## 🌐 Sistem Internasional (SI)

Karena dunia butuh satu kesepakatan bersama, disusunlah **Sistem Internasional (SI)** -- sistem satuan baku yang dipakai ilmuwan di seluruh dunia. Supaya bisa disebut "satuan baku yang baik", sebuah satuan harus memenuhi tiga syarat:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Syarat</th><th>Maksudnya</th></tr>
</thead>
<tbody>
<tr><td>Tetap</td><td>Nilainya tidak berubah-ubah karena waktu, tempat, atau kondisi</td></tr>
<tr><td>Mudah ditiru ulang</td><td>Bisa direproduksi di laboratorium mana pun dengan hasil yang sama</td></tr>
<tr><td>Berlaku universal</td><td>Diakui dan dipakai secara internasional, bukan cuma satu negara</td></tr>
</tbody>
</table>
</div>
</div>

<div class="mtr-note">
🌍 Menariknya, definisi satuan dasar SI juga terus disempurnakan seiring waktu. Dulu 1 meter didefinisikan dari sepersepuluh juta jarak kutub Bumi ke khatulistiwa -- sekarang, 1 meter didefinisikan dari jarak yang ditempuh cahaya dalam waktu sangat singkat tertentu, karena kecepatan cahaya jauh lebih presisi dan bisa direproduksi ulang di laboratorium mana pun di dunia.
</div>

## 🧱 Klasifikasi Besaran Berdasarkan Cara Memperolehnya

Berdasarkan cara memperolehnya, besaran dalam Fisika dibagi menjadi dua kelompok besar:

<div class="mtr-cards-grid">
  <div class="mtr-card">
    <span class="mtr-card-icon">🧭</span>
    <h4>Besaran Pokok</h4>
    <p>Besaran dasar yang TIDAK diturunkan dari besaran lain -- ada 7 dalam SI (panjang, massa, waktu, dst).</p>
    <a href="/materi/besaran-pokok" class="btn btn-ghost">Lihat detailnya →</a>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🧩</span>
    <h4>Besaran Turunan</h4>
    <p>Besaran yang dibentuk dari kombinasi besaran pokok, misalnya luas, kecepatan, dan gaya.</p>
    <a href="/materi/besaran-turunan" class="btn btn-ghost">Lihat detailnya →</a>
  </div>
</div>

Dua materi selanjutnya akan membahas keduanya satu per satu secara mendalam -- di sini cukup pahami dulu bahwa pembagian ini ada.

## ➡️ Klasifikasi Besaran Berdasarkan Arahnya

Ada satu lagi cara mengelompokkan besaran, kali ini berdasarkan **ada atau tidaknya arah**:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Jenis</th><th>Ciri-ciri</th><th>Contoh</th></tr>
</thead>
<tbody>
<tr><td>Besaran Skalar</td><td>Cukup dinyatakan dengan NILAI saja, tanpa arah</td><td>Massa, waktu, suhu, jarak, energi</td></tr>
<tr><td>Besaran Vektor</td><td>Perlu dinyatakan dengan NILAI dan ARAH sekaligus</td><td>Perpindahan, kecepatan, percepatan, gaya</td></tr>
</tbody>
</table>
</div>
</div>

Contohnya, "mobil bergerak dengan kelajuan 60 km/jam" (skalar, cuma nilai) berbeda maknanya dengan "mobil bergerak dengan kecepatan 60 km/jam ke arah utara" (vektor, nilai + arah). Perbedaan jarak dan perpindahan, atau kelajuan dan kecepatan, justru terletak di sini -- dan akan dibahas lebih detail waktu kita masuk ke materi Gerak.

<div class="mtr-note">
💡 Perhatikan: klasifikasi pokok/turunan dan klasifikasi skalar/vektor adalah DUA SUDUT PANDANG BERBEDA, bukan saling menggantikan. Massa contohnya besaran pokok SEKALIGUS besaran skalar. Gaya contohnya besaran turunan SEKALIGUS besaran vektor. Keduanya bisa dipakai bersamaan untuk mendeskripsikan satu besaran yang sama.
</div>

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Besaran dan satuan itu sama saja, cuma istilah beda."</strong><br>
Tidak sama. <strong class="mtr-right">Besaran adalah APA yang diukur (mis. panjang), satuan adalah CARA menyatakan hasil ukurnya (mis. meter).</strong>
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Yang penting satuannya konsisten dipakai sendiri, tidak masalah beda dari orang lain."</strong><br>
Keliru. <strong class="mtr-right">Justru tujuan satuan baku adalah supaya hasil pengukuran bisa dibandingkan ANTAR orang</strong> -- kalau tiap orang pakai patokan sendiri-sendiri, hasil pengukuran jadi tidak bisa dipercaya di luar lingkupnya sendiri.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Semua besaran pokok itu skalar, semua besaran turunan itu vektor."</strong><br>
Tidak selalu. <strong class="mtr-right">Waktu (pokok) itu skalar, tapi kecepatan (turunan) itu vektor -- namun massa jenis (turunan) tetap skalar.</strong> Dua klasifikasi ini independen satu sama lain.
</div>

## 🎯 Intinya

Perhatikan sesuatu yang menarik: cuma dengan **7 besaran pokok**, Fisika bisa mendeskripsikan hampir semua fenomena di alam semesta -- dari kecepatan cahaya sampai massa sebutir debu. Ini mirip seperti alfabet: cuma 26 huruf, tapi dari situ bisa dibentuk jutaan kata berbeda.

Begitu juga besaran pokok -- fondasi kecil yang menjadi "alfabet" untuk menyusun "kosakata" Fisika yang jauh lebih luas, yaitu besaran turunan. Paham hubungan ini dari awal akan bikin materi-materi selanjutnya terasa saling tersambung, bukan sekadar daftar rumus terpisah yang harus dihafal satu per satu.

## 🤔 Coba Pikirkan

Bayangkan kamu diminta mendeskripsikan sebuah pesawat kertas yang baru saja dilempar temanmu.

1. Sebutkan minimal 3 besaran yang bisa kamu ukur atau amati dari pesawat kertas itu (mis. massa, jarak tempuhnya, dst).
2. Dari besaran-besaran itu, mana yang termasuk besaran skalar dan mana yang termasuk besaran vektor?
3. Kalau kamu cuma bilang "pesawatnya terbang sejauh 5" tanpa keterangan lain -- informasi apa yang masih kurang supaya kalimat itu bermakna lengkap secara Fisika?

Coba diskusikan jawabanmu dengan teman sebangku sebelum melanjutkan ke materi Besaran Pokok.

<div class="mtr-cta">
<p>Sekarang kamu sudah paham fondasinya -- besaran, satuan, satuan baku, dan dua cara mengklasifikasikan besaran. Saatnya masuk lebih dalam ke tujuh besaran paling dasar dalam Fisika.</p>
<a href="/materi/besaran-pokok" class="btn btn-primary">🧭 Lanjut ke Besaran Pokok →</a>
</div>
