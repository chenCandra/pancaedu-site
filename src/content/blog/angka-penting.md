---
title: "Angka Penting dan Notasi Ilmiah"
description: "Belajar angka penting dari nol -- 8 aturan menentukan jumlah angka penting, notasi ilmiah, awalan satuan (kilo, mili, mikro, nano, dst), sampai aturan operasi hitung yang paling sering bikin salah."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-29
tags: ["Angka Penting", "Notasi Ilmiah", "Fisika Kelas X", "Pengukuran"]
kuis:
  - soal: "Berapa jumlah angka penting pada 3,0500?"
    pilihan: ["2", "3", "4", "5"]
    jawaban: 3
    penjelasan: "Semua angka (3, 0, 5, 0, 0) dihitung -- angka nol di antara angka bukan nol dan angka nol di belakang koma setelah angka bukan nol, keduanya termasuk angka penting. Totalnya 5."
  - soal: "Hasil dari 12,34 + 3,1 menurut aturan angka penting adalah..."
    pilihan: ["15,44", "15,4", "15", "15,440"]
    jawaban: 1
    penjelasan: "Pada penjumlahan, hasil dibulatkan sampai angka desimal paling sedikit di antara bilangan yang dijumlahkan. 3,1 cuma punya 1 angka di belakang koma, jadi 12,34 + 3,1 = 15,44 dibulatkan jadi 15,4."
  - soal: "Hasil dari 2,5 × 3,42 menurut aturan angka penting adalah..."
    pilihan: ["8,55", "8,6", "9", "8,550"]
    jawaban: 1
    penjelasan: "Pada perkalian, hasil dibulatkan sampai jumlah angka penting paling sedikit. 2,5 cuma punya 2 angka penting, jadi 2,5 × 3,42 = 8,55 dibulatkan jadi 2 angka penting: 8,6."
  - soal: "Bilangan 0,000045 dengan 2 angka penting, kalau ditulis dalam notasi ilmiah menjadi..."
    pilihan: ["45 × 10⁻⁶", "4,5 × 10⁻⁵", "0,45 × 10⁻⁴", "4,50 × 10⁻⁵"]
    jawaban: 1
    penjelasan: "Notasi ilmiah ditulis sebagai satu angka bukan nol di depan koma. Karena cuma 2 angka penting (4 dan 5) yang perlu dipertahankan, bentuknya 4,5 × 10⁻⁵."
  - soal: "Hasil pengukuran jangka sorong menunjukkan 2,34 cm. Berapa jumlah angka pentingnya?"
    pilihan: ["1", "2", "3", "4"]
    jawaban: 2
    penjelasan: "Ketiga angka (2, 3, 4) semuanya bukan nol, jadi semuanya dihitung sebagai angka penting -- totalnya 3."
  - soal: "Bilangan 1500 ditandai dengan garis bawah HANYA pada angka pertama (angka '1') untuk menunjukkan angka penting terakhirnya. Berapa jumlah angka pentingnya?"
    pilihan: ["1", "2", "3", "4"]
    jawaban: 0
    penjelasan: "Garis bawah menandai angka TERAKHIR yang dianggap penting. Kalau garis bawahnya ada di angka pertama (1), berarti cuma angka itu yang pasti -- jumlah angka pentingnya cuma 1."
  - soal: "Sebuah kapasitor punya nilai 4,7 × 10⁻⁹ F (dibaca 4,7 nF, nano-farad). Berapa jumlah angka penting pada nilai tersebut?"
    pilihan: ["1", "2", "9", "Tak terhingga"]
    jawaban: 1
    penjelasan: "Pada notasi ilmiah, yang dihitung sebagai angka penting HANYA digit pada koefisiennya (4,7) -- pangkat 10 (10⁻⁹, atau awalan 'nano' yang mewakilinya) tidak ikut dihitung. Jumlah angka pentingnya 2."
draft: false
---

<style>
.mtr-table-wrap, .mtr-steps { margin-block: 2rem; }

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
  white-space: nowrap;
}

.mtr-table thead th {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--ink-soft);
  background-color: var(--accent-soft);
}

.mtr-table tbody tr:last-child td { border-bottom: none; }
.mtr-table td em { color: var(--accent); font-style: normal; font-weight: 600; }

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

Setiap kali kita mengukur sesuatu -- panjang meja, massa benda, suhu ruangan -- hasilnya tidak pernah 100% pasti sampai tak terhingga angka di belakang koma. Ada batas ketelitian yang ditentukan oleh alat ukurnya. Nah, angka penting adalah cara kita menuliskan hasil pengukuran itu supaya jujur soal seberapa teliti alat yang dipakai -- tidak kurang, tidak juga dilebih-lebihkan.

## 🔎 Apa Itu Angka Penting?

Angka penting adalah semua angka hasil pengukuran yang terdiri dari **angka pasti** (yang benar-benar terbaca di skala) ditambah **satu angka taksiran** terakhir (perkiraan di antara dua garis skala terkecil).

Contohnya, waktu kalian baca skala utama jangka sorong dan dapat hasil 2,34 cm: angka 2 dan 3 itu pasti (langsung terbaca dari garis skala), sedangkan angka 4 di belakangnya itu taksiran (perkiraan posisi di antara dua garis nonius). Ketiganya tetap dihitung sebagai angka penting.

~~Angka penting itu sama saja dengan angka desimal~~ → tidak sama. 250 (tanpa koma) tetap punya angka penting, dan 2,50 juga punya angka penting yang berbeda jumlahnya dari 2,5. Angka penting soal ketelitian, bukan sekadar "ada berapa angka di belakang koma".

## 📏 Aturan Menentukan Jumlah Angka Penting

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Semua angka bukan nol adalah angka penting.</strong> Contoh: 245 punya 3 angka penting (2, 4, 5).</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Angka nol di antara dua angka bukan nol termasuk angka penting.</strong> Contoh: 205 punya 3 angka penting (2, 0, 5).</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Angka nol di depan angka bukan nol (di awal bilangan) bukan angka penting.</strong> Contoh: 0,0025 hanya punya 2 angka penting, yaitu 2 dan 5. Angka nol di depannya cuma "penanda tempat", bukan hasil pengukuran.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Angka nol di belakang koma, setelah angka bukan nol, termasuk angka penting.</strong> Contoh: 2,50 punya 3 angka penting (2, 5, 0) -- beda dengan 2,5 yang cuma 2 angka penting.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">5</span>
    <div class="mtr-step-body">
      <p><strong>Angka nol di belakang, pada bilangan bulat tanpa koma, sifatnya ambigu (tidak jelas)</strong> -- jumlahnya tergantung konteks. Supaya jelas, angka <strong>terakhir yang dianggap penting ditandai dengan garis bawah</strong>. Contoh: <strong>1<u>5</u>00</strong> berarti cuma 2 angka penting (nol di belakangnya cuma penanda tempat), sedangkan <strong>150<u>0</u></strong> berarti 4 angka penting (garis bawah di angka nol terakhir berarti semuanya dianggap pasti). Cara lain yang juga sering dipakai: tulis dalam <strong>notasi ilmiah</strong> (lihat bagian selanjutnya).</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">6</span>
    <div class="mtr-step-body">
      <p><strong>Pada notasi ilmiah (a,bcd × 10ⁿ), jumlah angka penting cuma dihitung dari koefisiennya (a,bcd) saja</strong> -- angka pada pangkat 10 (eksponen n) TIDAK ikut dihitung sebagai angka penting. Contoh: 4,20 × 10⁵ punya 3 angka penting (4, 2, 0), bukan 6.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">7</span>
    <div class="mtr-step-body">
      <p><strong>Bilangan eksak (hasil membilang langsung, bukan hasil pengukuran alat) dianggap punya angka penting TAK TERHINGGA.</strong> Contoh: "3 buah apel" atau angka konversi seperti "1 jam = 60 menit" -- angka-angka ini pasti 100%, jadi tidak membatasi ketelitian hasil operasi hitung.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">8</span>
    <div class="mtr-step-body">
      <p><strong>Dalam satu hasil pengukuran, hanya boleh ada SATU angka taksiran</strong> (perkiraan) di ujung akhir -- bukan dua atau lebih. Kalau jangka sorong terbaca 2,34 cm, angka 4 di ujung itu satu-satunya taksiran; menuliskan "2,344 cm" (dua angka taksiran) tidak dibenarkan kalau alatnya cuma bisa menaksir sampai situ.</p>
    </div>
  </div>
</div>

<div class="mtr-note">
💡 <del>Makin banyak angka di belakang koma, hasilnya makin ilmiah dan akurat</del> → jumlah angka yang ditulis harus sesuai ketelitian alat ukurnya, bukan ditambah-tambah supaya kelihatan presisi. Menuliskan angka penting yang salah justru menunjukkan belum paham cara membacanya, bukan sebaliknya.
</div>

## 🔢 Notasi Ilmiah: Solusi buat Angka Nol yang Ambigu

Notasi ilmiah menuliskan bilangan sebagai satu angka bukan nol di depan koma, dikalikan pangkat 10. Bentuknya:

<div class="mtr-formula">a,bcd × 10ⁿ</div>

Dengan cara ini, jumlah angka penting langsung kelihatan jelas dari angka-angka sebelum "× 10ⁿ" -- angka nol yang cuma penanda tempat otomatis hilang.

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Bilangan Biasa</th><th>Notasi Ilmiah</th><th>Jumlah Angka Penting</th></tr>
</thead>
<tbody>
<tr><td>1<u>5</u>00</td><td><em>1,5 × 10³</em></td><td>2</td></tr>
<tr><td>150<u>0</u></td><td><em>1,500 × 10³</em></td><td>4</td></tr>
<tr><td>0,000045</td><td><em>4,5 × 10⁻⁵</em></td><td>2</td></tr>
<tr><td>6.400.000</td><td><em>6,4 × 10⁶</em></td><td>2</td></tr>
</tbody>
</table>
</div>
</div>

Perhatikan dua baris pertama: sama-sama "1500", tapi jumlah angka pentingnya bisa beda tergantung apakah angka nolnya itu hasil pengukuran asli atau cuma pembulatan. Notasi ilmiah membuat maksud si penulis jadi jelas, tidak menebak-nebak lagi.

## 📐 Awalan Satuan: Kilo, Mili, Mikro, Nano, dan Kawan-kawannya

Selain notasi ilmiah, ada cara lain yang lebih sering dipakai sehari-hari buat menyingkat bilangan yang sangat besar atau sangat kecil: **awalan satuan** (prefiks). Awalan ini sebenarnya cuma "nama panggilan" buat pangkat 10 tertentu -- daripada menulis 10⁻³, cukup tempelkan awalan "mili" di depan satuannya.

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Awalan</th><th>Simbol</th><th>Faktor Pengali</th><th>Contoh</th></tr>
</thead>
<tbody>
<tr><td>Tera</td><td>T</td><td><em>10¹²</em></td><td>1 TB (terabyte)</td></tr>
<tr><td>Giga</td><td>G</td><td><em>10⁹</em></td><td>1 GHz (gigahertz)</td></tr>
<tr><td>Mega</td><td>M</td><td><em>10⁶</em></td><td>1 MW (megawatt)</td></tr>
<tr><td>Kilo</td><td>k</td><td><em>10³</em></td><td>1 km (kilometer)</td></tr>
<tr><td>(satuan dasar)</td><td>--</td><td><em>10⁰</em></td><td>1 m, 1 g, 1 s</td></tr>
<tr><td>Desi</td><td>d</td><td><em>10⁻¹</em></td><td>1 dL (desiliter)</td></tr>
<tr><td>Senti</td><td>c</td><td><em>10⁻²</em></td><td>1 cm (sentimeter)</td></tr>
<tr><td>Mili</td><td>m</td><td><em>10⁻³</em></td><td>1 mA (miliampere)</td></tr>
<tr><td>Mikro</td><td>μ</td><td><em>10⁻⁶</em></td><td>1 μC (mikrocoulomb)</td></tr>
<tr><td>Nano</td><td>n</td><td><em>10⁻⁹</em></td><td>1 nF (nanofarad)</td></tr>
<tr><td>Piko</td><td>p</td><td><em>10⁻¹²</em></td><td>1 pF (pikofarad)</td></tr>
</tbody>
</table>
</div>
</div>

Cara pakainya tinggal kalikan angka di depan awalan dengan faktor pengalinya:

<div class="mtr-formula">5 mA = 5 × 10⁻³ A = 0,005 A</div>
<div class="mtr-formula">250 nm = 250 × 10⁻⁹ m = 2,5 × 10⁻⁷ m</div>

<div class="mtr-note">
🔗 Awalan-awalan ini bukan hal asing -- kamu sudah sering ketemu di materi <a href="/materi/hukum-coulomb">Hukum Coulomb</a> dan <a href="/materi/medan-listrik">Medan Listrik</a> (muatan ditulis dalam μC atau nC). Sekarang kamu tahu μC itu sebenarnya cuma cara singkat menulis × 10⁻⁶ C.
</div>

## ➕ Aturan Operasi Hitung: Penjumlahan & Pengurangan

Ini bagian yang paling sering salah dikerjakan murid: hasil penjumlahan/pengurangan angka penting **dibulatkan sampai jumlah angka di belakang koma yang PALING SEDIKIT** di antara bilangan-bilangan yang dioperasikan -- bukan berdasarkan jumlah angka penting.

<div class="mtr-formula">12,34 + 3,1 = 15,44 → dibulatkan jadi 15,4</div>

Kenapa begitu? Karena 3,1 cuma diukur sampai 1 angka di belakang koma (ketelitiannya sampai persepuluhan), jadi hasil akhirnya juga tidak boleh "berpura-pura" lebih teliti dari itu. Angka 4 terakhir pada 15,44 tidak berarti apa-apa, karena kita sama sekali tidak tahu angka persepuluhan-keduanya si 3,1 yang sebenarnya.

<div class="mtr-note">
<strong class="mtr-wrong">❌ "12,34 + 3,1 hasilnya 15,44, kan itu hasil hitungannya."</strong><br>
Kurang tepat. Hasil hitungan murni memang 15,44, tapi <strong class="mtr-right">penulisan akhirnya harus dibulatkan jadi 15,4</strong> supaya sesuai ketelitian bilangan yang paling tidak teliti (3,1).
</div>

## ✖️ Aturan Operasi Hitung: Perkalian & Pembagian

Berbeda dengan penjumlahan, pada perkalian dan pembagian, hasilnya **dibulatkan sampai jumlah angka penting yang PALING SEDIKIT** di antara bilangan-bilangan yang dioperasikan.

<div class="mtr-formula">2,5 × 3,42 = 8,55 → dibulatkan jadi 8,6</div>

2,5 cuma punya 2 angka penting, sedangkan 3,42 punya 3 angka penting. Karena aturannya "yang paling sedikit yang menentukan", hasil akhirnya dibulatkan sampai 2 angka penting saja: 8,55 dibulatkan jadi 8,6.

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Operasi</th><th>Patokan Pembulatan</th></tr>
</thead>
<tbody>
<tr><td>Penjumlahan / Pengurangan</td><td>Jumlah angka <em>di belakang koma</em> paling sedikit</td></tr>
<tr><td>Perkalian / Pembagian</td><td>Jumlah <em>angka penting</em> paling sedikit</td></tr>
</tbody>
</table>
</div>
</div>

<div class="mtr-note">
💡 Dua aturan ini gampang tertukar karena sekilas mirip. Cara gampang mengingatnya: <strong class="mtr-right">tambah-kurang → lihat angka di belakang koma. Kali-bagi → lihat total angka pentingnya.</strong>
</div>

## 🔄 Aturan Pembulatan

Setelah tahu sampai angka ke berapa hasil harus dibulatkan, cara membulatkannya pakai aturan pembulatan biasa:

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Angka yang dibuang ≥ 5 → angka terakhir yang disimpan dibulatkan naik satu.</strong> Contoh: 8,55 dibulatkan ke 2 angka penting jadi 8,6 (karena angka 5 yang dibuang ≥ 5).</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Angka yang dibuang &lt; 5 → angka terakhir yang disimpan tetap.</strong> Contoh: 8,53 dibulatkan ke 2 angka penting jadi 8,5.</p>
    </div>
  </div>
</div>

## 🧪 Angka Penting dan Alat Ukur

Jumlah angka penting yang bisa kalian tuliskan bergantung langsung pada ketelitian alat ukur yang dipakai -- ini sebabnya angka penting tidak bisa dilepaskan dari materi alat ukur.

<div class="mtr-note">
🔧 Mau tahu detail masing-masing alat ukur (mistar, jangka sorong, mikrometer sekrup, neraca, stopwatch, amperemeter, termometer) dan cara bacanya? Cek materi <a href="/materi/alat-ukur">Alat Ukur</a>.<br /><br />
🧪 Terus, biar tidak cuma teori, langsung latihan baca skalanya sendiri di <a href="/lab-maya/alat-ukur">Lab Maya: Alat Ukur</a> -- nilainya diacak tiap ronde, kamu yang mengoperasikan alatnya dan menuliskan hasil bacaan sesuai jumlah angka penting yang benar.
</div>

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Angka penting sama dengan angka di belakang koma."</strong><br>
Tidak sama. <strong class="mtr-right">245 (tanpa koma sama sekali) tetap punya 3 angka penting.</strong> Angka penting soal ketelitian pengukuran, bukan soal ada-tidaknya tanda koma.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Hasil kali/bagi ditulis apa adanya sesuai hasil kalkulator."</strong><br>
Kalkulator tidak tahu berapa ketelitian alat ukur kalian. <strong class="mtr-right">Hasil akhir tetap harus dibulatkan sesuai jumlah angka penting paling sedikit dari bilangan yang dioperasikan.</strong>
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Aturan tambah-kurang dan kali-bagi sama saja."</strong><br>
Beda. <strong class="mtr-right">Tambah-kurang berpatokan pada angka di belakang koma, sedangkan kali-bagi berpatokan pada total angka penting.</strong> Tertukar keduanya adalah kesalahan paling umum di soal ujian.
</div>

## 🎯 Intinya

Kalau dirangkum jadi satu kalimat, semua aturan di atas sebenarnya menjaga **satu prinsip yang sama: hasil akhir tidak boleh terlihat lebih teliti daripada bagian yang paling tidak teliti di dalamnya** -- persis seperti rantai yang kekuatannya ditentukan oleh mata rantai paling lemah, bukan yang paling kuat.

Itu sebabnya penjumlahan berpatokan pada angka desimal paling sedikit, perkalian berpatokan pada angka penting paling sedikit, dan kenapa menuliskan "2,344 cm" padahal jangka sorongnya cuma bisa menaksir sampai "2,34 cm" itu bukan ketelitian ekstra -- itu kebohongan kecil. Sekali kalian paham prinsip tunggal ini, aturan-aturan di atas berhenti terasa seperti daftar hafalan terpisah, karena semuanya cuma penerapan dari ide yang sama.

## 🤔 Coba Pikirkan

Kamu mengukur diameter sebuah kawat tipis pakai mikrometer sekrup dan mendapat hasil **0,45 mm**. Temanmu mengukur kawat yang sama pakai jangka sorong dan mendapat hasil **0,4 mm**.

1. Berapa jumlah angka penting dari masing-masing hasil?
2. Kalau kedua hasil itu dijumlahkan (misalnya buat menghitung total ketebalan dua kawat yang ditumpuk), berapa hasil akhirnya menurut aturan angka penting?
3. Menurutmu, kenapa dua alat yang berbeda bisa menghasilkan jumlah angka desimal yang berbeda untuk benda yang seharusnya sama?

Coba kerjakan sendiri dulu -- kalau masih ragu, buka lagi bagian aturan operasi hitung dan materi <a href="/materi/alat-ukur">Alat Ukur</a> di atas.

Materi selanjutnya kita bahas apa yang terjadi kalau benda yang sama diukur lebih dari sekali -- lanjut ke <a href="/materi/pengukuran-alat-ukur-dan-angka-penting">Pengukuran Tunggal & Pengukuran Berulang</a>.
