---
title: "Spektrum Elektromagnetik"
description: "Gelombang radio, cahaya tampak, dan sinar gamma ternyata gelombang yang sama -- cuma beda panjang gelombang dan frekuensi. Kenalan dengan seluruh spektrum elektromagnetik dan pemanfaatannya."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Gelombang Elektromagnetik", "Spektrum Elektromagnetik", "Fenomena Elektromagnetik", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/spektrum-elektromagnetik.html"
  judul: "Laboratorium Maya: Spektrum Elektromagnetik"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1000
kuis:
  - soal: "Semua gelombang elektromagnetik merambat di ruang hampa dengan..."
    pilihan: ["Kecepatan yang sama, yaitu c ≈ 3×10⁸ m/s", "Kecepatan berbeda-beda tergantung frekuensinya", "Kecepatan berbeda-beda tergantung panjang gelombangnya", "Kecepatan nol karena butuh medium untuk merambat"]
    jawaban: 0
    penjelasan: "Kecepatan cahaya (c) di ruang hampa SELALU sama untuk semua jenis gelombang elektromagnetik, tidak peduli panjang gelombang atau frekuensinya."
  - soal: "Daerah spektrum elektromagnetik yang bisa dideteksi langsung oleh mata manusia adalah..."
    pilihan: ["Cahaya Tampak", "Inframerah", "Ultraviolet", "Gelombang Mikro"]
    jawaban: 0
    penjelasan: "Cahaya tampak hanyalah sepotong sangat kecil dari seluruh spektrum elektromagnetik -- satu-satunya yang bisa ditangkap mata manusia."
  - soal: "Semakin PENDEK panjang gelombang suatu radiasi elektromagnetik, maka..."
    pilihan: ["Frekuensi dan energinya semakin besar", "Frekuensinya semakin kecil, energi tetap", "Frekuensinya tetap, energinya semakin besar", "Frekuensi dan energinya semakin kecil"]
    jawaban: 0
    penjelasan: "λ dan f berbanding terbalik (c=λf, c tetap), dan energi gelombang elektromagnetik sebanding dengan frekuensinya -- makin pendek λ, makin besar f dan energinya."
  - soal: "Radiasi yang dipakai untuk terapi kanker dan sterilisasi alat medis karena energinya sangat tinggi adalah..."
    pilihan: ["Sinar Gamma", "Gelombang Radio", "Inframerah", "Cahaya Tampak"]
    jawaban: 0
    penjelasan: "Sinar Gamma punya panjang gelombang paling pendek dan energi paling tinggi di seluruh spektrum, cukup kuat untuk merusak sel kanker maupun mensterilkan alat medis."
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

Sepanjang Bab Fenomena Elektromagnetik ini, kita sudah bertemu banyak "aktor": medan magnet, arus listrik, GGL induksi, sampai arus AC yang mengalir di rumahmu. Ternyata, semua gejala itu punya benang merah yang sama, dan benang merah itulah yang jadi topik penutup bab ini: **gelombang elektromagnetik**.

## 🔗 Dari Induksi ke Gelombang: Ide Besar Maxwell

Ingat kembali dua hal yang sudah kita pelajari:
- Di materi [Medan Magnet oleh Arus Listrik](/materi/medan-magnet-oleh-arus-listrik), arus listrik yang berubah bisa menghasilkan medan magnet.
- Di materi [Hukum Faraday dan Hukum Lenz](/materi/hukum-faraday-dan-lenz), medan magnet yang berubah bisa menghasilkan GGL (dan medan listrik) induksi.

Fisikawan James Clerk Maxwell di abad ke-19 menyadari sesuatu yang luar biasa dari dua fakta ini: kalau medan listrik yang berubah bisa menghasilkan medan magnet, DAN medan magnet yang berubah bisa menghasilkan medan listrik, maka keduanya bisa saling "menghidupkan" satu sama lain TANPA butuh kawat atau muatan sama sekali -- medan listrik dan medan magnet yang saling berosilasi ini akan merambat sendiri menembus ruang, bahkan ruang hampa sekalipun. Rambatan inilah yang disebut **gelombang elektromagnetik**, dan perhitungan Maxwell memprediksi kecepatan rambatnya sama persis dengan kecepatan cahaya yang sudah diukur -- yang kemudian menuntunnya pada kesimpulan bahwa **cahaya itu sendiri adalah gelombang elektromagnetik**. Prediksi ini kemudian dibuktikan secara eksperimen oleh Heinrich Hertz, yang berhasil menghasilkan dan mendeteksi gelombang radio di laboratoriumnya.

## 🌈 Satu Keluarga, Beda "Ukuran"

Poin pentingnya: gelombang radio, cahaya yang kamu lihat, sampai sinar-X di rumah sakit, semuanya adalah GELOMBANG YANG SAMA secara fisis -- sama-sama osilasi medan listrik dan medan magnet yang merambat. Yang membedakan satu dari yang lain hanyalah **panjang gelombang (λ)** dan **frekuensi (f)** -nya, yang saling terkait lewat rumus yang sudah kamu kenal dari materi [Arus Bolak-Balik](/materi/arus-bolak-balik-konsep-dasar):

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Rumus</th><th>Keterangan</th></tr></thead>
<tbody>
<tr><td><em>c = λ × f</em></td><td>c = kecepatan cahaya (≈3×10⁸ m/s, SELALU sama di ruang hampa), λ = panjang gelombang (m), f = frekuensi (Hz)</td></tr>
</tbody>
</table>
</div>
</div>

Karena c selalu tetap, λ dan f berbanding TERBALIK -- gelombang berpanjang gelombang besar pasti berfrekuensi rendah, dan sebaliknya. Ada satu hal lagi yang berubah mengikuti keduanya: **energi**. Semakin tinggi frekuensinya (semakin pendek panjang gelombangnya), semakin besar energi yang dibawa gelombang itu. Inilah kenapa sinar gamma yang panjang gelombangnya sangat pendek jauh lebih berbahaya bagi tubuh dibanding gelombang radio yang panjang gelombangnya bisa sebesar gedung.

Satu perbedaan besar dari gelombang bunyi yang sudah kamu pelajari sebelumnya: **gelombang elektromagnetik TIDAK butuh medium** untuk merambat -- ia bisa menembus ruang hampa udara sama sekali (itulah kenapa cahaya matahari bisa sampai ke Bumi meski luar angkasa hampa udara). Gelombang bunyi sebaliknya WAJIB butuh medium (udara, air, atau zat padat) untuk merambat.

## 📡 Tujuh Daerah Spektrum Elektromagnetik

Dari panjang gelombang PALING BESAR sampai PALING KECIL, spektrum elektromagnetik dibagi jadi 7 daerah berikut:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Daerah</th><th>Panjang Gelombang (kira-kira)</th><th>Sifat Energi</th></tr></thead>
<tbody>
<tr><td>Gelombang Radio</td><td>&gt; 1 m (bisa sebesar gedung)</td><td>Paling rendah</td></tr>
<tr><td>Gelombang Mikro</td><td>1 mm -- 1 m</td><td>Rendah</td></tr>
<tr><td>Sinar Inframerah</td><td>700 nm -- 1 mm</td><td>Sedang-rendah</td></tr>
<tr><td>Cahaya Tampak</td><td>400 -- 700 nm</td><td>Sedang</td></tr>
<tr><td>Sinar Ultraviolet</td><td>10 -- 400 nm</td><td>Sedang-tinggi</td></tr>
<tr><td>Sinar-X</td><td>0,01 -- 10 nm</td><td>Tinggi</td></tr>
<tr><td>Sinar Gamma</td><td>&lt; 0,01 nm</td><td>Paling tinggi</td></tr>
</tbody>
</table>
</div>
</div>

Perhatikan betapa SEMPITNYA daerah **Cahaya Tampak** (400-700 nm) dibanding keseluruhan spektrum -- itulah satu-satunya "jendela" kecil yang bisa ditangkap mata manusia, di antara jangkauan spektrum yang jauh lebih luas dan tidak kasat mata di kedua sisinya.

## 🔧 Pemanfaatan Tiap Daerah Spektrum

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">📻</span><h4>Gelombang Radio</h4><p>Siaran radio & TV, komunikasi satelit -- panjang gelombangnya besar sehingga mudah dipancarkan jarak jauh dan menembus rintangan.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">📡</span><h4>Gelombang Mikro</h4><p>WiFi & Bluetooth, microwave oven (memanaskan makanan lewat getaran molekul air), GPS, radar.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🌡️</span><h4>Inframerah</h4><p>Remote control TV/AC, kamera termal (thermal imaging) buat mendeteksi suhu tubuh, pemanas ruangan.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">👁️</span><h4>Cahaya Tampak</h4><p>Penglihatan manusia, fotosintesis tumbuhan, lampu dan layar elektronik.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">☀️</span><h4>Ultraviolet</h4><p>Penyebab sunburn dari sinar matahari, sterilisasi alat/ruangan (lampu UV), deteksi uang palsu.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🦴</span><h4>Sinar-X</h4><p>Rontgen medis (menembus jaringan lunak, diserap tulang), pemindai keamanan di bandara.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">☢️</span><h4>Sinar Gamma</h4><p>Terapi radiasi kanker, sterilisasi alat medis dosis tinggi, dipancarkan lewat peluruhan radioaktif inti atom.</p></div>
</div>
</div>

Coba jelajahi sendiri di simulasi bawah -- geser slider dari ujung radio ke ujung gamma, dan lihat panjang gelombang, frekuensi, serta contoh pemanfaatannya berubah otomatis mengikuti posisi slidernya.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Gelombang radio dan cahaya adalah dua jenis gelombang yang benar-benar berbeda -- satu untuk radio, satu untuk melihat."</strong><br>
Tidak tepat. <strong class="mtr-right">Keduanya adalah gelombang elektromagnetik yang PERSIS SAMA secara fisis</strong> -- sama-sama osilasi medan listrik dan medan magnet yang merambat dengan kecepatan cahaya. Satu-satunya perbedaan adalah panjang gelombang dan frekuensinya. "Cahaya" dalam pengertian sehari-hari cuma menyebut daerah sempit yang kebetulan bisa ditangkap mata manusia -- bukan jenis gelombang yang berbeda secara fundamental dari gelombang radio.
</div>

## 🤔 Coba Pikirkan

Sinyal WiFi di rumahmu (gelombang mikro, ≈2,4 GHz) bisa menembus tembok kamar dengan cukup baik, tapi cahaya tampak (dari lampu di ruangan sebelah) sama sekali tidak bisa menembus tembok yang sama.

1. Berdasarkan perbedaan panjang gelombang keduanya, menurutmu kenapa gelombang mikro lebih mudah menembus tembok dibanding cahaya tampak?
2. Sinar-X bisa menembus jaringan lunak tubuh manusia tapi diserap oleh tulang, sehingga tulang terlihat sebagai bayangan putih di hasil rontgen. Menurutmu, sifat apa dari sinar-X (dibanding cahaya tampak) yang memungkinkan ini terjadi?

Coba diskusikan jawabanmu dengan teman sekelas, atau uji dulu intuisimu lewat simulasi di atas.

<div class="mtr-cta">
<p>Sampai di sini kita tuntas membahas seluruh Bab Fenomena Elektromagnetik -- dari medan magnet, induksi elektromagnetik, arus bolak-balik, sampai spektrum gelombang elektromagnetik. Bab berikutnya, Teori Dasar Fisika Modern, sedang disiapkan.</p>
<a href="/ruang-belajar" class="btn btn-primary">📚 Lihat Semua Sesi Ruang Belajar →</a>
</div>
