---
title: "Arus Bolak-Balik: Konsep Dasar"
description: "Perbedaan arus bolak-balik (AC) dan arus searah (DC), kenapa listrik PLN memakai AC, serta konsep tegangan puncak, nilai RMS, dan frekuensi."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Arus Bolak-Balik", "AC", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/arus-bolak-balik.html"
  judul: "Laboratorium Maya: Arus Bolak-Balik"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1250
kuis:
  - soal: "Arus Bolak-Balik (AC) berbeda dari Arus Searah (DC) karena..."
    pilihan: ["Arah dan besarnya berubah-ubah membentuk gelombang sinus terhadap waktu", "Selalu mengalir satu arah dengan besar konstan", "Hanya bisa dihasilkan oleh baterai", "Tidak bisa dipakai untuk menyalakan lampu"]
    jawaban: 0
    penjelasan: "AC berubah arah dan besarnya secara periodik membentuk gelombang sinus, berbeda dari DC yang konstan satu arah."
  - soal: "Alasan utama listrik PLN memakai AC (bukan DC) adalah..."
    pilihan: ["AC bisa dengan mudah dinaik/turunkan tegangannya pakai transformator", "AC lebih murah diproduksi dari DC", "DC berbahaya bagi manusia sedangkan AC tidak", "AC tidak bisa dipakai untuk peralatan rumah tangga"]
    jawaban: 0
    penjelasan: "Transformator hanya bekerja dengan AC -- kemampuan menaik/turunkan tegangan ini krusial untuk transmisi listrik jarak jauh yang efisien."
  - soal: "Frekuensi listrik PLN di Indonesia adalah..."
    pilihan: ["50 Hz", "100 Hz", "60 Hz", "220 Hz"]
    jawaban: 0
    penjelasan: "Listrik PLN di Indonesia memakai frekuensi 50 Hz (di beberapa negara seperti Amerika Serikat, 60 Hz)."
  - soal: "Tegangan 220V yang tertulis di stopkontak rumah adalah nilai..."
    pilihan: ["RMS (efektif), bukan nilai puncaknya", "Puncak (maksimum) tegangan", "Minimum tegangan", "Rata-rata aritmatika sederhana"]
    jawaban: 0
    penjelasan: "220V adalah nilai RMS -- nilai puncak sebenarnya sekitar 220×√2 ≈ 311V."
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

Di materi [Generator dan Transformator](/materi/generator-dan-transformator) kita singgung soal listrik AC yang mengalir di rumah kita. Sekarang kita bahas TUNTAS: apa sebenarnya Arus Bolak-Balik (AC) itu, dan kenapa hampir semua listrik rumah tangga di dunia memakainya.

## 🔄 AC vs DC

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Ciri</th><th>Arus Searah (DC)</th><th>Arus Bolak-Balik (AC)</th></tr></thead>
<tbody>
<tr><td>Arah arus</td><td>Selalu satu arah, tetap</td><td>Bolak-balik, berubah arah secara periodik</td></tr>
<tr><td>Bentuk grafik terhadap waktu</td><td>Garis lurus (konstan)</td><td>Gelombang sinus</td></tr>
<tr><td>Sumber umum</td><td>Baterai, sel surya</td><td>PLN, generator</td></tr>
<tr><td>Bisa diubah tegangannya pakai trafo?</td><td>Tidak</td><td>Ya</td></tr>
</tbody>
</table>
</div>
</div>

## ⚡ Kenapa PLN Memilih AC?

Alasan utamanya sudah kita singgung di materi Transformator: **AC bisa dengan mudah dinaik/turunkan tegangannya** lewat trafo, sementara DC tidak bisa. Kemampuan ini krusial untuk transmisi listrik jarak jauh yang efisien (tegangan tinggi = arus kecil = kerugian energi panas kecil). Inilah alasan historis kenapa sistem AC (dipelopori Nikola Tesla) akhirnya mengalahkan sistem DC (yang diusung Thomas Edison) untuk jaringan listrik skala besar -- perdebatan yang dikenal sebagai "War of Currents" di akhir abad ke-19.

## 📈 Tegangan Puncak, RMS, dan Frekuensi

Karena nilai AC terus berubah setiap saat, kita butuh beberapa cara untuk menyatakannya:

- **Tegangan Puncak (Vp)**: nilai tertinggi yang dicapai gelombang.
- **Periode (T)**: waktu yang dibutuhkan untuk satu gelombang penuh (dalam detik).
- **Frekuensi (f)**: jumlah gelombang penuh per detik (f = 1/T), satuannya Hertz (Hz). Listrik PLN di Indonesia memakai **f = 50 Hz** -- artinya arus berbalik arah 50 kali per detik!
- **Nilai RMS (Root Mean Square)**: nilai "efektif" yang setara dengan DC dalam hal daya yang dihasilkan. Rumusnya **Vrms = Vp/√2 ≈ 0,707 × Vp**.

Angka **220V** yang tertulis di stopkontak rumahmu adalah nilai RMS, BUKAN nilai puncaknya! Tegangan puncak sebenarnya jauh lebih tinggi: 220 × √2 ≈ **311V**. Coba buktikan sendiri di simulasi bawah -- atur tegangan puncak dan frekuensi, lihat nilai RMS-nya berubah mengikuti.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "220V yang tertulis di stopkontak adalah tegangan maksimum (puncak) listrik rumah."</strong><br>
Tidak tepat. <strong class="mtr-right">220V adalah nilai RMS (efektif)</strong> -- tegangan puncak sesaatnya jauh lebih tinggi, sekitar 311V. Nilai RMS dipakai karena lebih relevan untuk menghitung daya yang dihasilkan alat listrik.
</div>

## 🤔 Coba Pikirkan

Sebuah negara lain memakai frekuensi listrik 60 Hz, berbeda dari Indonesia yang 50 Hz.

1. Apa artinya "60 Hz" dibanding "50 Hz" dalam hal berapa kali arus berbalik arah per detik?
2. Kenapa menurutmu alat elektronik dari luar negeri kadang perlu dicek dulu kompatibilitas frekuensinya sebelum dipakai di Indonesia?

Coba diskusikan jawabanmu dengan teman sekelas, atau uji dulu lewat simulasi di atas.

<div class="mtr-cta">
<p>Sekarang kita paham konsep dasar AC. Selanjutnya kita lihat bagaimana AC berperilaku saat mengalir lewat komponen rangkaian seperti resistor, induktor, dan kapasitor.</p>
<a href="/materi/rangkaian-ac-sederhana" class="btn btn-primary">🔧 Lanjut ke Rangkaian AC Sederhana →</a>
</div>
