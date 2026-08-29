---
title: "Merancang dan Melakukan Penyelidikan Ilmiah"
description: "Belajar merancang percobaan sungguhan -- menentukan variabel bebas, terikat, dan kontrol, menyusun prosedur kerja, sampai menulis laporan hasil penyelidikan. Lengkap contoh rancangan percobaan bandul sederhana."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-29
tags: ["Penyelidikan Ilmiah", "Metode Ilmiah", "Fisika Kelas X", "Praktikum"]
kuis:
  - soal: "Dalam percobaan 'pengaruh panjang tali terhadap periode ayunan bandul', yang menjadi variabel bebas adalah..."
    pilihan: ["Periode ayunan", "Panjang tali", "Massa beban", "Warna tali"]
    jawaban: 1
    penjelasan: "Variabel bebas adalah yang SENGAJA diubah-ubah oleh peneliti -- dalam percobaan ini, panjang talinya yang divariasikan (misalnya 20 cm, 40 cm, 60 cm)."
  - soal: "Pada percobaan yang sama, yang menjadi variabel terikat adalah..."
    pilihan: ["Panjang tali", "Jumlah ayunan", "Periode ayunan (waktu satu ayunan penuh)", "Jenis bandul"]
    jawaban: 2
    penjelasan: "Variabel terikat adalah yang DIUKUR sebagai akibat dari perubahan variabel bebas -- di sini, periode ayunan yang diamati berubah seiring panjang tali."
  - soal: "Supaya hasil percobaan bandul itu valid, yang harus DIBUAT TETAP (variabel kontrol) adalah..."
    pilihan: ["Panjang tali", "Massa beban dan sudut simpangan awal", "Waktu percobaan dimulai", "Nama orang yang mengukur"]
    jawaban: 1
    penjelasan: "Variabel kontrol dijaga tetap supaya perubahan hasil (periode) benar-benar disebabkan oleh variabel bebas (panjang tali), bukan faktor lain yang ikut berubah."
  - soal: "Kenapa prosedur kerja dalam rancangan percobaan harus ditulis detail dan berurutan?"
    pilihan: ["Supaya laporan terlihat lebih tebal", "Supaya percobaan bisa diulang orang lain dan menghasilkan data yang konsisten", "Karena itu aturan baku yang tidak boleh dipertanyakan", "Supaya lebih mudah dihafalkan"]
    jawaban: 1
    penjelasan: "Prosedur yang detail dan berurutan membuat percobaan bisa direplikasi (diulang) oleh siapa pun dengan hasil yang sebanding -- ini salah satu ciri penyelidikan ilmiah yang bisa dipercaya."
  - soal: "Kenapa data pengukuran dalam sebuah penyelidikan sebaiknya diambil beberapa kali, bukan cuma sekali?"
    pilihan: ["Supaya tabelnya kelihatan lebih panjang", "Untuk mengurangi pengaruh kesalahan acak dan mendapat rata-rata yang lebih dapat dipercaya", "Karena aturan wajib tanpa alasan ilmiah", "Supaya semua anggota kelompok kebagian tugas mengukur"]
    jawaban: 1
    penjelasan: "Sama seperti prinsip pengukuran berulang -- data yang diambil beberapa kali dan dirata-ratakan lebih tahan terhadap kesalahan acak dibanding satu kali pengukuran saja."
draft: false
---

<style>
.mtr-table-wrap, .mtr-steps, .mtr-cards { margin-block: 2rem; }

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
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.mtr-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.mtr-card-icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
.mtr-card h4 { font-family: var(--font-display); margin: 0 0 0.35rem; font-size: 1rem; }
.mtr-card p { font-size: 0.8438rem; color: var(--ink-soft); margin: 0; }

.mtr-step {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 1rem;
  position: relative;
  padding-bottom: 1.5rem;
}

.mtr-step:last-child { padding-bottom: 0; }

.mtr-step-num {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: var(--accent-ink);
  box-shadow: var(--glow-accent);
  position: relative;
  z-index: 1;
}

.mtr-step:not(:last-child) .mtr-step-num::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  width: 1px;
  height: 1.5rem;
  background: var(--border-strong);
}

.mtr-step-body p { margin: 0; color: var(--ink-soft); font-size: 0.9375rem; }
.mtr-step-body strong { color: var(--ink); }

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

.mtr-report {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  padding: 1.25rem 1.5rem;
  margin-block: 1.5rem;
}

.mtr-report h4 {
  font-family: var(--font-display);
  margin: 1rem 0 0.35rem;
  font-size: 1rem;
  color: var(--accent);
}

.mtr-report h4:first-child { margin-top: 0; }
.mtr-report p, .mtr-report li { color: var(--ink-soft); font-size: 0.9375rem; }
</style>

Di materi [Hakikat Fisika & Metode Ilmiah](/materi/hakikat-fisika-dan-metode-ilmiah), kalian sudah kenalan sama 6 langkah metode ilmiah -- dari identifikasi masalah sampai kesimpulan. Kalian juga sudah kenalan sama [Keselamatan Kerja di Laboratorium](/materi/keselamatan-kerja-di-laboratorium) sebelum praktikum. Sekarang kita masuk lebih dalam ke satu langkah yang sering dianggap paling ribet: **merancang dan melakukan penyelidikan (penelitian) itu sendiri**. Ternyata ada bagian-bagian pentingnya yang harus disiapkan matang-matang sebelum eksperimen dimulai.

## 🎯 Merancang, Bukan Sekadar Coba-Coba

~~Penyelidikan ilmiah itu ya tinggal coba-coba aja sampai ketemu hasilnya~~ → kalau begitu, hasilnya susah dipercaya dan susah diulang orang lain. Penyelidikan yang baik itu **dirancang dulu** sebelum dilakukan -- supaya jelas apa yang mau diubah, apa yang mau diukur, dan apa yang harus dijaga tetap sama.

Itulah bedanya eksperimen ilmiah dengan sekadar "coba-coba lihat hasilnya" -- ada rancangan yang membuat hasilnya bisa dipertanggungjawabkan.

## 🔀 Variabel dalam Penyelidikan Ilmiah

Bagian paling penting dari sebuah rancangan percobaan adalah menentukan **variabel** -- faktor-faktor yang terlibat dalam percobaan itu. Ada tiga jenis variabel yang wajib dikenali:

<div class="mtr-cards">
<div class="mtr-cards-grid">
  <div class="mtr-card">
    <span class="mtr-card-icon">🎛️</span>
    <h4>Variabel Bebas</h4>
    <p>Faktor yang SENGAJA diubah-ubah oleh peneliti untuk dilihat pengaruhnya.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">📊</span>
    <h4>Variabel Terikat</h4>
    <p>Faktor yang DIUKUR/DIAMATI sebagai akibat dari perubahan variabel bebas.</p>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🔒</span>
    <h4>Variabel Kontrol</h4>
    <p>Faktor yang DIBUAT TETAP supaya tidak ikut memengaruhi hasil percobaan.</p>
  </div>
</div>
</div>

Supaya lebih kebayang, ini contohnya pada percobaan **"Pengaruh Panjang Tali terhadap Periode Ayunan Bandul"**:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Jenis Variabel</th><th>Contoh pada Percobaan Bandul</th></tr>
</thead>
<tbody>
<tr><td>Variabel Bebas</td><td><em>Panjang tali</em> (misalnya divariasikan 20 cm, 40 cm, 60 cm)</td></tr>
<tr><td>Variabel Terikat</td><td><em>Periode ayunan</em> (waktu satu ayunan penuh, dalam sekon)</td></tr>
<tr><td>Variabel Kontrol</td><td><em>Massa beban</em> dan <em>sudut simpangan awal</em> -- harus sama di setiap percobaan</td></tr>
</tbody>
</table>
</div>
</div>

<div class="mtr-note">
💡 Kalau variabel kontrolnya tidak dijaga tetap -- misalnya sudut simpangannya beda-beda tiap kali dicoba -- kita jadi tidak tahu pasti apakah perubahan periode itu benar-benar disebabkan oleh panjang tali, atau ikut dipengaruhi faktor lain yang berubah-ubah juga.
</div>

## 🛠️ Menyusun Rancangan Percobaan

Sebuah rancangan percobaan yang lengkap perlu menjawab enam pertanyaan berikut, secara berurutan:

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Rumusan Masalah & Hipotesis.</strong> Pertanyaan apa yang mau dijawab, dan dugaan awal seperti apa (lihat lagi materi Metode Ilmiah kalau lupa caranya).</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Tentukan variabel bebas, terikat, dan kontrolnya.</strong> Ini menentukan apa yang akan diubah, apa yang akan diukur, dan apa yang harus dijaga tetap.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Tentukan alat dan bahan.</strong> Daftar semua yang dibutuhkan, termasuk alat ukur yang sesuai ketelitiannya (lihat materi <a href="/materi/alat-ukur">Alat Ukur</a>).</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Susun prosedur kerja.</strong> Langkah-langkah yang jelas dan berurutan -- ditulis sedetail mungkin, supaya orang lain bisa mengikutinya dan mendapat hasil yang sebanding.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">5</span>
    <div class="mtr-step-body">
      <p><strong>Rancang tabel pengumpulan data.</strong> Siapkan tabel sebelum percobaan dimulai, bukan setelahnya -- supaya data bisa langsung dicatat rapi saat percobaan berjalan.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">6</span>
    <div class="mtr-step-body">
      <p><strong>Lakukan percobaan & catat data.</strong> Ukur berulang kali untuk tiap variasi variabel bebas -- ingat prinsip <a href="/materi/pengukuran-alat-ukur-dan-angka-penting">Pengukuran Berulang</a>, jangan cukup sekali saja.</p>
    </div>
  </div>
</div>

## 📝 Contoh Rancangan Percobaan Lengkap

Berikut contoh rancangan percobaan sederhana yang sudah lengkap, memakai topik bandul tadi:

<div class="mtr-report">
  <h4>Judul Percobaan</h4>
  <p>Pengaruh Panjang Tali terhadap Periode Ayunan Bandul Sederhana</p>

  <h4>Rumusan Masalah</h4>
  <p>Apakah panjang tali memengaruhi periode ayunan bandul sederhana?</p>

  <h4>Hipotesis</h4>
  <p>Semakin panjang tali bandul, semakin besar periode ayunannya (semakin lama waktu satu ayunan penuh).</p>

  <h4>Variabel</h4>
  <ul>
    <li>Bebas: panjang tali (20 cm, 40 cm, 60 cm)</li>
    <li>Terikat: periode ayunan (sekon)</li>
    <li>Kontrol: massa beban, sudut simpangan awal (± 10°)</li>
  </ul>

  <h4>Alat dan Bahan</h4>
  <p>Statif, tali/benang, beban (bola logam), busur derajat, stopwatch, mistar.</p>

  <h4>Prosedur Kerja</h4>
  <ol>
    <li>Pasang tali sepanjang 20 cm pada statif, gantungkan beban di ujungnya.</li>
    <li>Simpangkan bandul sejauh 10° dari posisi seimbang, lalu lepaskan.</li>
    <li>Gunakan stopwatch untuk mengukur waktu 10 ayunan penuh, lalu bagi 10 untuk mendapat periode satu ayunan.</li>
    <li>Ulangi langkah 2–3 sebanyak 3 kali untuk panjang tali yang sama, catat semua hasilnya.</li>
    <li>Ganti panjang tali menjadi 40 cm, ulangi langkah 2–4.</li>
    <li>Ganti panjang tali menjadi 60 cm, ulangi langkah 2–4.</li>
  </ol>

  <h4>Tabel Data</h4>
</div>

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Panjang Tali (cm)</th><th>Percobaan ke-</th><th>Waktu 10 Ayunan (s)</th><th>Periode (s)</th></tr>
</thead>
<tbody>
<tr><td rowspan="3">20</td><td>1</td><td>...</td><td>...</td></tr>
<tr><td>2</td><td>...</td><td>...</td></tr>
<tr><td>3</td><td>...</td><td>...</td></tr>
<tr><td rowspan="3">40</td><td>1</td><td>...</td><td>...</td></tr>
<tr><td>2</td><td>...</td><td>...</td></tr>
<tr><td>3</td><td>...</td><td>...</td></tr>
</tbody>
</table>
</div>
</div>

<div class="mtr-note">
💡 Kolom "Percobaan ke-" dan pengulangan 3 kali di tabel itu bukan formalitas -- itulah bentuk konkret dari <strong>pengukuran berulang</strong> yang sudah kalian pelajari. Setelah data terkumpul, hitung rata-rata periode untuk tiap panjang tali sebelum dianalisis lebih lanjut.
</div>

## 📄 Menulis Laporan Hasil Penyelidikan

Setelah percobaan selesai, hasilnya perlu dituliskan dalam bentuk laporan supaya bisa dibaca dan dievaluasi orang lain. Struktur laporan yang umum dipakai:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Bagian</th><th>Isinya</th></tr>
</thead>
<tbody>
<tr><td>Judul</td><td>Menggambarkan apa yang diteliti, singkat dan jelas</td></tr>
<tr><td>Tujuan</td><td>Apa yang ingin diketahui dari percobaan ini</td></tr>
<tr><td>Dasar Teori</td><td>Konsep/rumus yang mendasari percobaan (opsional, tergantung tingkat)</td></tr>
<tr><td>Alat dan Bahan</td><td>Daftar lengkap yang dipakai</td></tr>
<tr><td>Langkah Kerja</td><td>Prosedur yang dilakukan, ditulis dalam bentuk lampau ("bandul digantung...", bukan perintah)</td></tr>
<tr><td>Data Hasil Pengamatan</td><td>Tabel data mentah yang diperoleh, lengkap dengan satuan</td></tr>
<tr><td>Pembahasan</td><td>Analisis data -- apakah sesuai hipotesis? Kenapa bisa begitu?</td></tr>
<tr><td>Kesimpulan</td><td>Jawaban atas rumusan masalah, berdasarkan data yang diperoleh</td></tr>
</tbody>
</table>
</div>
</div>

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Yang penting hasil akhirnya sesuai hipotesis, cara mendapatkannya belakangan dipikirkan."</strong><br>
Terbalik. <strong class="mtr-right">Rancangan percobaan (termasuk variabel dan prosedurnya) harus disusun SEBELUM percobaan dilakukan</strong> -- bukan direkayasa setelahnya supaya cocok dengan hasil yang diinginkan.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Kalau cuma satu variabel bebas, tidak perlu dipikirkan variabel kontrolnya."</strong><br>
Keliru. <strong class="mtr-right">Variabel kontrol tetap wajib ditentukan</strong>, bahkan kalau cuma ada satu variabel bebas -- tanpa variabel kontrol yang terjaga, kita tidak bisa yakin penyebab perubahan hasilnya benar-benar dari variabel bebas itu.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Data yang tidak sesuai hipotesis boleh tidak dicantumkan di laporan."</strong><br>
Tidak boleh. <strong class="mtr-right">Semua data harus dilaporkan apa adanya</strong>, termasuk yang tidak sesuai dugaan awal -- ini bagian dari sikap ilmiah jujur yang sudah dibahas di materi <a href="/materi/hakikat-fisika-dan-metode-ilmiah">Hakikat Fisika</a>.
</div>

## 🎯 Intinya

Semua elemen rancangan percobaan di atas -- variabel, prosedur yang detail, data yang diambil berulang -- sebenarnya menjawab satu pertanyaan yang sama: **kalau orang lain mengulang percobaan ini persis seperti rancanganmu, apakah mereka akan mendapat hasil yang mirip?**

Kalau jawabannya "belum tentu", berarti ada bagian rancangan yang belum cukup ketat -- entah variabel kontrolnya kurang jelas, atau prosedurnya masih bisa ditafsirkan macam-macam. Di situlah sebenarnya beda penyelidikan ilmiah dengan sekadar cerita pengalaman pribadi: ilmu pengetahuan cuma bisa dipercaya kalau hasilnya bisa diverifikasi ulang oleh orang lain, bukan cuma terjadi sekali lalu dipercaya begitu saja.

## 🤔 Coba Pikirkan

Kamu ingin menyelidiki apakah **warna kertas memengaruhi seberapa cepat kertas itu memanas** kalau dijemur di bawah sinar matahari langsung.

Coba rancang sendiri penyelidikannya:

1. Apa variabel bebas, variabel terikat, dan variabel kontrolnya?
2. Alat dan bahan sederhana apa saja yang kira-kira kamu butuhkan?
3. Bagaimana urutan langkah kerjanya, supaya percobaan ini bisa diulang temanmu dengan hasil yang sebanding?

Coba tuliskan rancanganmu di catatan, lalu diskusikan dengan teman sekelas -- bandingkan rancangan kalian, adakah variabel yang terlewat?

Materi selanjutnya kita mulai masuk ke konten yang biasanya jadi objek penyelidikan itu sendiri: [Besaran dan Satuan](/materi/besaran-dan-satuan).
