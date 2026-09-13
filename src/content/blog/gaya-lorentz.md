---
title: "Gaya Magnetik (Gaya Lorentz)"
description: "Gaya yang dialami muatan bergerak dan kawat berarus di dalam medan magnet -- rumus F=qvB, arah gaya lewat kaidah tangan kanan, dan aplikasinya pada motor listrik."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Gaya Lorentz", "Medan Magnet", "Fenomena Elektromagnetik", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/gaya-lorentz.html"
  judul: "Laboratorium Maya: Gaya Lorentz"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1250
kuis:
  - soal: "Gaya Lorentz adalah gaya yang dialami..."
    pilihan: ["Muatan yang bergerak di dalam medan magnet", "Muatan yang diam di dalam medan magnet", "Medan magnet itu sendiri", "Muatan yang bergerak sejajar medan listrik saja"]
    jawaban: 0
    penjelasan: "Gaya Lorentz (F=qvB) hanya dialami muatan yang BERGERAK di dalam medan magnet -- muatan diam tidak merasakan gaya ini."
  - soal: "Arah Gaya Lorentz terhadap arah gerak muatan dan arah medan magnet SELALU..."
    pilihan: ["Tegak lurus terhadap keduanya", "Sejajar dengan arah gerak", "Sejajar dengan arah medan magnet", "Berlawanan dengan arah gerak"]
    jawaban: 0
    penjelasan: "Gaya Lorentz selalu tegak lurus terhadap arah kecepatan DAN arah medan magnet -- inilah kenapa gaya ini tidak pernah mengubah kelajuan, hanya arah gerak (menghasilkan lintasan melingkar)."
  - soal: "Kalau tanda muatan partikel dibalik dari positif jadi negatif (v dan B tetap sama), apa yang terjadi pada arah geraknya?"
    pilihan: ["Membelok ke arah berlawanan", "Bergerak lurus tanpa membelok", "Berhenti total", "Jari-jari lintasannya menjadi dua kali lebih besar"]
    jawaban: 0
    penjelasan: "Membalik tanda muatan membalik arah gaya (F=qvB), sehingga partikel membelok ke arah berlawanan -- besar jari-jari lintasan tidak berubah."
  - soal: "Prinsip Gaya Lorentz pada kawat berarus di dalam medan magnet dimanfaatkan pada alat..."
    pilihan: ["Motor listrik", "Baterai", "Resistor", "Kapasitor"]
    jawaban: 0
    penjelasan: "Motor listrik memanfaatkan gaya pada kawat berarus di dalam medan magnet untuk menghasilkan gerak putar (energi listrik menjadi energi gerak)."
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
</style>

Kita sudah tahu di materi [Medan Magnet oleh Arus Listrik](/materi/medan-magnet-oleh-arus-listrik) bahwa arus listrik menghasilkan medan magnet. Sekarang kita bahas kebalikannya: **apa yang terjadi kalau muatan bergerak berada DI DALAM medan magnet?** Jawabannya adalah gaya yang disebut **Gaya Lorentz**.

## 🌀 Rumus Gaya Lorentz

Untuk muatan (q) yang bergerak dengan kecepatan (v) tegak lurus medan magnet (B), besar Gaya Lorentz yang dialaminya:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Simbol</th><th>Artinya</th><th>Satuan</th></tr></thead>
<tbody>
<tr><td>F</td><td>Gaya Lorentz</td><td>Newton (N)</td></tr>
<tr><td>q</td><td>Besar muatan</td><td>Coulomb (C)</td></tr>
<tr><td>v</td><td>Kecepatan muatan</td><td>meter/detik (m/s)</td></tr>
<tr><td>B</td><td>Kuat medan magnet</td><td>Tesla (T)</td></tr>
</tbody>
</table>
</div>
</div>

**F = qvB**

Sifat unik Gaya Lorentz: arahnya SELALU tegak lurus terhadap arah kecepatan (v) DAN arah medan magnet (B) sekaligus. Karena gaya selalu tegak lurus arah gerak, gaya ini TIDAK PERNAH mempercepat atau memperlambat muatan (tidak menambah/mengurangi kelajuan) -- ia HANYA membelokkan arah geraknya. Akibatnya, muatan yang bergerak tegak lurus medan magnet seragam akan bergerak melingkar beraturan.

## 🎯 Jari-jari Lintasan Melingkar

Karena Gaya Lorentz berperan sebagai gaya sentripetal (gaya yang menjaga benda tetap melingkar), jari-jari lintasannya:

**r = mv / (qB)**

Artinya: makin CEPAT muatannya atau makin LEMAH medannya, makin BESAR lingkarannya. Coba buktikan sendiri di simulasi bawah -- geser slider kecepatan dan kuat medan, amati bagaimana ukuran lingkaran lintasannya berubah.

## 🔄 Arah Belokan: Bergantung Tanda Muatan

Arah Gaya Lorentz ditentukan kaidah tangan kanan (untuk muatan POSITIF) -- kalau muatannya NEGATIF, arah gayanya justru terbalik. Jadi dua partikel dengan v dan B yang sama tapi tanda muatan berbeda akan membelok ke arah yang BERLAWANAN, meski jari-jari lingkarannya sama besar (karena besar muatan |q| yang menentukan jari-jari, bukan tandanya).

## ⚙️ Aplikasi: Motor Listrik

Prinsip yang sama (gaya pada muatan bergerak di medan magnet) berlaku juga untuk **kawat berarus listrik** yang ditempatkan di dalam medan magnet -- karena arus adalah muatan yang bergerak, kawat itu akan mengalami gaya. Inilah prinsip dasar **motor listrik**: kumparan kawat berarus di dalam medan magnet mengalami gaya yang membuatnya BERPUTAR, mengubah energi listrik menjadi energi gerak. Motor listrik ada di mana-mana: kipas angin, mesin cuci, mobil listrik, sampai motor kecil di dalam drone.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Gaya Lorentz mempercepat gerak muatan, sama seperti gaya pada umumnya."</strong><br>
Tidak tepat. <strong class="mtr-right">Gaya Lorentz SELALU tegak lurus arah gerak</strong>, jadi ia tidak pernah menambah/mengurangi kelajuan -- hanya membelokkan arahnya, menghasilkan lintasan melingkar dengan kelajuan tetap.
</div>

## 🤔 Coba Pikirkan

Sebuah pemercepat partikel (particle accelerator) menggunakan medan magnet kuat untuk menjaga partikel bermuatan tetap bergerak melingkar di dalam terowongannya.

1. Kenapa medan magnet dipilih untuk menjaga lintasan melingkar itu, bukan medan listrik?
2. Kalau ilmuwan ingin memperbesar jari-jari lintasan partikel tanpa mengubah kecepatannya, apa yang harus diubah?

Coba diskusikan jawabanmu dengan teman sekelas, atau uji dulu lewat simulasi di atas.

<div class="mtr-cta">
<p>Sampai di sini kita tuntas membahas Medan Magnet (2.1). Sekarang kita masuk ke topik baru: Induksi Elektromagnetik -- bagaimana justru medan magnet bisa MENGHASILKAN listrik.</p>
<a href="/materi/hukum-faraday-dan-lenz" class="btn btn-primary">⚡ Lanjut ke Hukum Faraday dan Hukum Lenz →</a>
</div>
