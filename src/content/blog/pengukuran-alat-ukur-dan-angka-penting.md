---
title: "Pengukuran Tunggal & Pengukuran Berulang"
description: "Belajar cara melaporkan hasil pengukuran yang benar -- dari pengukuran tunggal (x ± setengah skala terkecil) sampai pengukuran berulang: menghitung rata-rata, ketidakpastian, dan cara melaporkan hasil akhirnya."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-28
tags: ["Pengukuran", "Pengukuran Berulang", "Fisika Kelas X"]
kuis:
  - soal: "Kenapa suatu besaran perlu diukur berulang kali, bukan cukup sekali saja?"
    pilihan: ["Supaya angkanya kelihatan lebih banyak", "Untuk mengurangi pengaruh kesalahan acak dan mendapat hasil yang lebih dapat dipercaya", "Karena alat ukur tidak boleh dipakai dua kali berturut-turut", "Supaya hasilnya pasti sama persis tiap kali diukur"]
    jawaban: 1
    penjelasan: "Setiap pengukuran punya kesalahan acak (misalnya karena posisi mata, getaran, atau variasi kecil lainnya). Mengulang pengukuran dan mengambil rata-ratanya membuat hasil akhir lebih dapat dipercaya."
  - soal: "Sebuah mistar punya nilai skala terkecil (NST) 1 mm. Hasil pengukuran tunggal yang benar dilaporkan sebagai..."
    pilihan: ["x ± 1 mm", "x ± 0,5 mm", "x ± 0,1 mm", "x ± 2 mm"]
    jawaban: 1
    penjelasan: "Pada pengukuran tunggal, ketidakpastiannya adalah setengah dari nilai skala terkecil alat. Karena NST mistar = 1 mm, ketidakpastiannya = 0,5 mm."
  - soal: "Lima kali pengukuran panjang meja menghasilkan (cm): 120,2 / 120,4 / 120,1 / 120,3 / 120,5. Berapa nilai rata-ratanya?"
    pilihan: ["120,1 cm", "120,3 cm", "120,5 cm", "121,0 cm"]
    jawaban: 1
    penjelasan: "Rata-rata = (120,2 + 120,4 + 120,1 + 120,3 + 120,5) / 5 = 601,5 / 5 = 120,3 cm."
  - soal: "Format penulisan hasil pengukuran berulang yang benar adalah..."
    pilihan: ["x = x̄ saja, tanpa ketidakpastian", "x = (x̄ ± Δx) satuan", "x = Δx saja, tanpa nilai rata-rata", "x = jumlah semua data pengukuran"]
    jawaban: 1
    penjelasan: "Hasil pengukuran berulang selalu dilaporkan sebagai nilai rata-rata (x̄) disertai ketidakpastiannya (Δx), ditulis x = (x̄ ± Δx) satuan."
  - soal: "Kenapa nilai rata-rata (x̄) dan ketidakpastian (Δx) harus dilaporkan dengan jumlah angka desimal yang sama?"
    pilihan: ["Supaya terlihat lebih rapi saja", "Karena angka desimal x̄ yang melebihi ketelitian Δx tidak punya arti -- kita memang tidak yakin sampai situ", "Karena aturannya harus selalu 2 angka di belakang koma", "Tidak ada alasan khusus, itu cuma kebiasaan"]
    jawaban: 1
    penjelasan: "Δx menunjukkan sampai angka desimal keberapa hasil pengukuran bisa dipercaya. Melaporkan x̄ lebih presisi dari itu cuma memberi kesan palsu bahwa hasilnya lebih teliti dari kenyataan."
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

Materi sebelumnya kita sudah kenalan dengan besaran pokok dan besaran turunan. Sekarang kita masuk ke bagian yang lebih praktis: bagaimana besaran-besaran itu benar-benar diukur, dan yang lebih penting lagi -- bagaimana cara **melaporkan** hasil pengukurannya dengan jujur soal seberapa teliti hasil itu.

## 🔎 Apa Itu Pengukuran?

Pengukuran adalah proses membandingkan suatu besaran dengan besaran sejenis yang sudah ditetapkan sebagai satuan baku, menggunakan alat ukur.

~~Mengukur itu tinggal kira-kira saja pakai mata~~ → tidak begitu. Supaya hasilnya bisa dipercaya dan dibandingkan orang lain, pengukuran harus pakai alat yang standar, bukan sekadar tebakan.

<div class="mtr-note">
🔧 Mau kenalan sama alat-alat ukurnya dulu (mistar, jangka sorong, mikrometer sekrup, neraca, stopwatch, amperemeter, termometer)? Cek materi <a href="/materi/alat-ukur">Alat Ukur</a>, terus langsung latihan baca skalanya di <a href="/lab-maya/alat-ukur">Lab Maya: Alat Ukur</a>.
</div>

Tapi ada satu hal yang tidak bisa dihindari: **setiap pengukuran, sebagus apa pun alatnya, selalu punya ketidakpastian.** Bukan karena alatnya jelek atau kalian ceroboh, tapi karena memang begitu sifat pengukuran -- selalu ada batas ketelitian.

## 📏 Pengukuran Tunggal

Pengukuran tunggal adalah pengukuran yang dilakukan **satu kali saja**. Hasilnya dilaporkan dengan format:

<div class="mtr-formula">x = (x₀ ± ½ NST) satuan</div>

**NST** singkatan dari **Nilai Skala Terkecil** -- jarak antara dua garis skala terdekat pada alat ukur. Ketidakpastian pada pengukuran tunggal diambil setengah dari NST, karena itulah batas terkecil yang masih bisa "ditaksir" mata saat membaca skala.

Contoh: mistar punya NST 1 mm. Kalau panjang sebuah pensil terbaca 12,3 cm, hasil pengukurannya dilaporkan:

<div class="mtr-formula">x = (12,3 ± 0,05) cm</div>

<div class="mtr-note">
💡 0,05 cm di sini setara 0,5 mm -- setengah dari NST mistar (1 mm), lalu diubah ke satuan cm supaya sepadan dengan angka hasil bacanya.
</div>

## 🔁 Kenapa Perlu Pengukuran Berulang?

Kalau cuma diukur sekali, hasilnya rawan dipengaruhi **kesalahan acak (random error)** -- posisi mata yang sedikit meleset, getaran kecil, atau variasi lain yang sifatnya kebetulan, bukan kesalahan sistematis alat.

Solusinya: ukur besaran yang sama **beberapa kali**, lalu olah datanya. Dengan begitu, kesalahan acak yang kadang bikin hasil lebih besar dan kadang lebih kecil akan saling menutupi, dan kita dapat gambaran yang lebih dapat dipercaya soal nilai sebenarnya.

~~Kalau sudah diulang 5 kali, hasil yang dipakai adalah yang paling sering muncul~~ → bukan begitu caranya. Yang dihitung adalah **rata-rata** dari semua data, bukan modus (nilai yang paling sering muncul).

## 🧮 Cara Melaporkan Pengukuran Berulang

Ada beberapa langkah yang harus dilakukan secara berurutan:

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Hitung nilai rata-rata (x̄).</strong></p>
      <div class="mtr-formula">x̄ = (x₁ + x₂ + ... + xₙ) / n</div>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Hitung selisih (deviasi) tiap data terhadap rata-rata,</strong> yaitu (xᵢ − x̄), untuk setiap data pengukuran.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Kuadratkan tiap selisihnya, lalu jumlahkan semua.</strong> Dikuadratkan supaya nilai negatif dan positif tidak saling menghilangkan.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Hitung ketidakpastian (Δx)</strong> memakai rumus:</p>
      <div class="mtr-formula">Δx = √[ Σ(xᵢ − x̄)² / (n(n−1)) ]</div>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">5</span>
    <div class="mtr-step-body">
      <p><strong>Laporkan hasil akhirnya</strong> dalam format:</p>
      <div class="mtr-formula">x = (x̄ ± Δx) satuan</div>
    </div>
  </div>
</div>

## 📝 Contoh Soal Lengkap

Panjang sebuah meja diukur 5 kali pakai mistar, hasilnya (dalam cm):

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Pengukuran ke-</th><th>xᵢ (cm)</th><th>xᵢ − x̄ (cm)</th><th>(xᵢ − x̄)²</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>120,2</td><td>−0,1</td><td>0,01</td></tr>
<tr><td>2</td><td>120,4</td><td>+0,1</td><td>0,01</td></tr>
<tr><td>3</td><td>120,1</td><td>−0,2</td><td>0,04</td></tr>
<tr><td>4</td><td>120,3</td><td>0</td><td>0</td></tr>
<tr><td>5</td><td>120,5</td><td>+0,2</td><td>0,04</td></tr>
</tbody>
</table>
</div>
</div>

**Langkah 1 -- Rata-rata:**

<div class="mtr-formula">x̄ = (120,2 + 120,4 + 120,1 + 120,3 + 120,5) / 5 = 601,5 / 5 = 120,3 cm</div>

**Langkah 2 & 3 -- Jumlah kuadrat selisih** (lihat kolom terakhir tabel):

<div class="mtr-formula">Σ(xᵢ − x̄)² = 0,01 + 0,01 + 0,04 + 0 + 0,04 = 0,10</div>

**Langkah 4 -- Ketidakpastian**, dengan n = 5:

<div class="mtr-formula">Δx = √[0,10 / (5 × 4)] = √0,005 ≈ 0,07 cm</div>

**Langkah 5 -- Laporan akhir:**

<div class="mtr-formula">x = (120,30 ± 0,07) cm</div>

<div class="mtr-note">
💡 Perhatikan x̄ ditulis <strong>120,30</strong>, bukan <strong>120,3</strong> -- angka desimalnya disamakan dengan Δx (dua angka di belakang koma) supaya keduanya sepadan. Ini bukan basa-basi penulisan; angka desimal ketiga dan seterusnya pada x̄ memang sudah tidak bisa dipercaya lagi karena ketidakpastiannya sudah sebesar 0,07.
</div>

## 🎯 Berapa Angka Penting yang Boleh Dilaporkan?

Semakin kecil ketidakpastian **relatif** (dibandingkan nilai rata-ratanya), semakin banyak angka penting yang boleh dituliskan pada hasil akhir.

<div class="mtr-formula">Ketidakpastian relatif = (Δx / x̄) × 100%</div>

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Ketidakpastian Relatif</th><th>Jumlah Angka Penting yang Disarankan</th></tr>
</thead>
<tbody>
<tr><td>&lt; 0,1%</td><td><em>4 angka penting</em></td></tr>
<tr><td>0,1% -- 1%</td><td><em>3 angka penting</em></td></tr>
<tr><td>1% -- 10%</td><td><em>2 angka penting</em></td></tr>
<tr><td>10% -- 100%</td><td><em>1 angka penting</em></td></tr>
</tbody>
</table>
</div>
</div>

Tabel ini cuma patokan cepat. Aturan yang paling utama tetap yang di atas: **samakan jumlah angka desimal x̄ dengan Δx.** Kalau mau baca lebih detail soal aturan angka penting (termasuk cara menghitungnya pada operasi tambah, kurang, kali, dan bagi), cek materi <a href="/materi/angka-penting">Angka Penting</a>.

<div class="mtr-note">
🧪 <strong>Coba sendiri:</strong> buka <a href="/lab-maya/alat-ukur">Lab Maya: Alat Ukur</a>, ukur benda yang sama beberapa kali pakai tombol "Coba Lagi", catat tiap hasil bacaannya di kertas, lalu praktikkan langkah-langkah di atas buat menghitung rata-rata dan ketidakpastiannya sendiri.
</div>

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Kalau sudah diukur berulang, ketidakpastiannya tidak perlu ditulis lagi."</strong><br>
Salah. <strong class="mtr-right">Hasil pengukuran berulang justru WAJIB disertai Δx</strong> -- itu bagian penting yang menunjukkan seberapa bisa dipercaya rata-ratanya.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Rata-rata dan ketidakpastian boleh ditulis dengan jumlah desimal berbeda, yang penting angkanya benar."</strong><br>
Kurang tepat. <strong class="mtr-right">Keduanya harus disamakan jumlah angka desimalnya</strong> -- x̄ tidak boleh terlihat lebih presisi daripada yang sebenarnya diizinkan oleh Δx.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Semakin banyak data diulang, ketidakpastiannya pasti makin kecil, berapa pun jumlah pengulangannya."</strong><br>
Umumnya benar tapi ada batasnya -- <strong class="mtr-right">kalau ada kesalahan sistematis (misalnya alatnya memang tidak dikalibrasi dengan benar), mengulang pengukuran sebanyak apa pun tidak akan memperbaikinya.</strong> Pengulangan cuma efektif mengurangi kesalahan acak, bukan kesalahan sistematis.
</div>

## Intinya

- Pengukuran tunggal dilaporkan sebagai x = (x₀ ± ½ NST) satuan
- Pengukuran berulang perlu dilakukan buat mengurangi pengaruh kesalahan acak, bukan supaya "kelihatan lebih teliti"
- Laporan pengukuran berulang mengikuti 5 langkah: rata-rata → selisih tiap data → kuadratkan & jumlahkan → hitung Δx → laporkan x = (x̄ ± Δx) satuan
- Jumlah angka desimal x̄ harus disamakan dengan Δx -- angka lebih dari itu tidak lagi bisa dipercaya

Ini melengkapi rangkaian materi Pengukuran -- kalau butuh diulang, urutannya: <a href="/materi/besaran-dan-satuan">Besaran dan Satuan</a> → <a href="/materi/besaran-pokok">Besaran Pokok</a> → <a href="/materi/besaran-turunan">Besaran Turunan</a> → <a href="/materi/dimensi">Dimensi</a> → <a href="/materi/alat-ukur">Alat Ukur</a> → <a href="/materi/angka-penting">Angka Penting</a> → materi ini.
