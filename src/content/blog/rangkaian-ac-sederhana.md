---
title: "Rangkaian AC Sederhana: Resistor, Induktor, Kapasitor"
description: "Perilaku Resistor, Induktor, dan Kapasitor saat dialiri arus AC -- hubungan fase tegangan dan arus, reaktansi induktif (XL) dan kapasitif (XC), serta bedanya dari resistansi."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Arus Bolak-Balik", "Reaktansi", "Rangkaian AC", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/rangkaian-ac-sederhana.html"
  judul: "Laboratorium Maya: Rangkaian AC Sederhana"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1150
kuis:
  - soal: "Pada resistor murni dalam rangkaian AC, hubungan fase tegangan dan arusnya adalah..."
    pilihan: ["Sefase (beda fase 0°)", "Arus tertinggal 90° dari tegangan", "Arus mendahului 90° dari tegangan", "Tidak ada hubungan tetap, acak"]
    jawaban: 0
    penjelasan: "Resistor tidak menyimpan energi seperti induktor/kapasitor -- tegangan dan arus naik-turun bersamaan, selalu sefase."
  - soal: "Pada induktor dalam rangkaian AC, arusnya..."
    pilihan: ["Tertinggal 90° dari tegangan", "Mendahului 90° dari tegangan", "Sefase dengan tegangan", "Berlawanan fase 180° dari tegangan"]
    jawaban: 0
    penjelasan: "Ingat jembatan keledai ELI: pada L (induktor), tegangan (E) lebih dulu dari arus (I) -- artinya arus tertinggal."
  - soal: "Reaktansi induktif (XL) akan semakin besar kalau..."
    pilihan: ["Frekuensi rangkaian dinaikkan", "Frekuensi rangkaian diturunkan", "Tegangan sumber diperbesar", "Frekuensi tidak berpengaruh pada XL"]
    jawaban: 0
    penjelasan: "XL = 2πfL berbanding LURUS dengan frekuensi -- makin tinggi f, makin besar XL."
  - soal: "Reaktansi kapasitif (XC) akan semakin KECIL kalau..."
    pilihan: ["Frekuensi rangkaian dinaikkan", "Frekuensi rangkaian diturunkan", "Kapasitansinya diperkecil", "Tegangan sumber diperkecil"]
    jawaban: 0
    penjelasan: "XC = 1/(2πfC) berbanding TERBALIK dengan frekuensi -- makin tinggi f, makin kecil XC."
  - soal: "Kalau frekuensi arus AC pada suatu rangkaian dinaikkan dari 50 Hz menjadi 100 Hz (dua kali lipat), apa yang terjadi pada nilai XL sebuah induktor di rangkaian itu (L tetap)?"
    pilihan: ["XL menjadi dua kali lipat", "XL menjadi setengahnya", "XL tetap sama", "XL menjadi empat kali lipat"]
    jawaban: 0
    penjelasan: "XL = 2πfL berbanding lurus dengan f, jadi kalau f dua kali lipat, XL juga dua kali lipat."
  - soal: "Kalau frekuensi arus AC pada suatu rangkaian dinaikkan dua kali lipat, apa yang terjadi pada nilai XC sebuah kapasitor di rangkaian itu (C tetap)?"
    pilihan: ["XC menjadi setengahnya", "XC menjadi dua kali lipat", "XC tetap sama", "XC menjadi empat kali lipat"]
    jawaban: 0
    penjelasan: "XC = 1/(2πfC) berbanding terbalik dengan f, jadi kalau f dua kali lipat, XC menjadi setengahnya."
  - soal: "Pada frekuensi f = 0 Hz (yaitu arus DC), berapa besar reaktansi kapasitif (XC) sebuah kapasitor?"
    pilihan: ["Tak terhingga (sangat besar), sehingga kapasitor menghalangi total arus DC", "Nol, sehingga kapasitor melewatkan semua arus DC", "Sama dengan nilai resistansi R", "Tidak terdefinisi sama sekali"]
    jawaban: 0
    penjelasan: "XC = 1/(2πfC); saat f = 0, XC menuju tak terhingga -- sesuai artikel, kapasitor 'menghalangi total arus DC yang frekuensinya dianggap 0 Hz'."
  - soal: "Kenapa resistor tidak punya reaktansi yang berubah terhadap frekuensi, berbeda dengan induktor dan kapasitor?"
    pilihan: ["Karena resistor mengubah energi listrik langsung menjadi panas, bukan menyimpan energi sesaat", "Karena resistor tidak dialiri arus AC sama sekali", "Karena resistor hanya bisa dipakai pada rangkaian DC", "Karena nilai resistansinya berubah acak"]
    jawaban: 0
    penjelasan: "Resistor mengubah energi listrik langsung jadi panas (disipasi), tanpa proses penyimpanan energi sesaat, sehingga nilainya tidak bergantung frekuensi."
  - soal: "Jembatan keledai 'ELI' dipakai untuk mengingat hubungan fase pada komponen apa?"
    pilihan: ["Induktor (L) -- tegangan (E) lebih dulu dari arus (I)", "Kapasitor (C) -- arus (I) lebih dulu dari tegangan (E)", "Resistor (R) -- tegangan dan arus sefase", "Tidak berlaku untuk komponen manapun"]
    jawaban: 0
    penjelasan: "ELI: pada L (induktor), E (tegangan) lebih dulu dari I (arus) -- artinya arus tertinggal."
  - soal: "Jembatan keledai 'ICE' dipakai untuk mengingat hubungan fase pada komponen apa?"
    pilihan: ["Kapasitor (C) -- arus (I) lebih dulu dari tegangan (E)", "Induktor (L) -- tegangan (E) lebih dulu dari arus (I)", "Resistor (R) -- arus dan tegangan berlawanan fase", "Tidak ada jembatan keledai untuk kapasitor"]
    jawaban: 0
    penjelasan: "ICE: pada C (kapasitor), I (arus) lebih dulu dari E (tegangan) -- arus mendahului tegangan."
  - soal: "Kenapa arus pada induktor 'tertinggal' terhadap tegangan, menurut Hukum Lenz?"
    pilihan: ["Karena induktor menghasilkan GGL induksi yang melawan setiap perubahan arus yang mencoba mengalir lewatnya", "Karena induktor menyimpan muatan listrik seperti kapasitor", "Karena induktor selalu memiliki resistansi yang sangat besar", "Karena arus AC tidak bisa mengalir lewat induktor sama sekali"]
    jawaban: 0
    penjelasan: "Induktor terus melawan perubahan arus AC yang mencoba mengalir lewatnya (Hukum Lenz), sehingga arusnya jadi tertinggal dari tegangan."
  - soal: "Kenapa arus pada kapasitor 'mendahului' tegangan?"
    pilihan: ["Karena arus harus mengalir dulu untuk mengubah muatan pada keping, sebelum tegangannya sempat berubah", "Karena kapasitor menghasilkan GGL induksi seperti induktor", "Karena kapasitor selalu punya resistansi negatif", "Karena kapasitor tidak bisa dialiri arus AC"]
    jawaban: 0
    penjelasan: "Muatan pada keping kapasitor harus berubah dulu (lewat arus) sebelum tegangannya sempat berubah, sehingga arus mendahului tegangan."
  - soal: "Kalau sebuah rangkaian hanya berisi resistor murni yang dialiri AC, hukum apa yang tetap berlaku persis seperti pada rangkaian DC?"
    pilihan: ["Hukum Ohm (V = I × R)", "Hukum Lenz", "Hukum Faraday", "Hukum Coulomb"]
    jawaban: 0
    penjelasan: "Resistor tidak peduli AC atau DC -- Hukum Ohm (V = I × R) tetap berlaku persis seperti sebelumnya."
  - soal: "Satuan dari reaktansi (XL maupun XC) adalah..."
    pilihan: ["Ohm (Ω), sama seperti resistansi", "Farad (F)", "Henry (H)", "Watt (W)"]
    jawaban: 0
    penjelasan: "Reaktansi dan resistansi satuannya sama-sama Ohm (Ω), meski keduanya besaran fisis yang berbeda secara konsep."
  - soal: "Apa perbedaan UTAMA antara reaktansi (XL, XC) dan resistansi (R) dari segi energi?"
    pilihan: ["Reaktansi tidak menghasilkan disipasi panas, energinya hanya disimpan sesaat lalu dikembalikan ke rangkaian; resistansi mengubah energi jadi panas", "Reaktansi selalu menghasilkan panas lebih besar dari resistansi", "Reaktansi dan resistansi sama-sama tidak menghasilkan panas", "Resistansi menyimpan energi dalam medan magnet, reaktansi mengubahnya jadi panas"]
    jawaban: 0
    penjelasan: "Induktor dan kapasitor hanya menyimpan energi sesaat lalu mengembalikannya, tidak seperti resistor yang mengubah energi jadi panas."
  - soal: "Pada rangkaian penyaring audio (speaker crossover), kenapa kapasitor diarahkan ke tweeter (frekuensi tinggi)?"
    pilihan: ["Karena XC mengecil saat frekuensi tinggi, sehingga arus frekuensi tinggi lebih mudah lewat kapasitor", "Karena XC membesar saat frekuensi tinggi, sehingga arus frekuensi tinggi terhalang di komponen lain", "Karena kapasitor hanya bisa dialiri arus DC", "Karena tweeter tidak membutuhkan arus listrik"]
    jawaban: 0
    penjelasan: "XC mengecil seiring frekuensi naik, sehingga kapasitor meloloskan sinyal frekuensi tinggi ke tweeter."
  - soal: "Pada rangkaian speaker crossover yang sama, kenapa induktor diarahkan ke woofer (frekuensi rendah/bass)?"
    pilihan: ["Karena XL mengecil saat frekuensi rendah, sehingga arus frekuensi rendah lebih mudah lewat induktor", "Karena XL membesar saat frekuensi rendah, sehingga arus frekuensi rendah lebih mudah lewat induktor", "Karena induktor hanya bisa dialiri arus AC berfrekuensi tinggi", "Karena woofer tidak membutuhkan arus listrik sama sekali"]
    jawaban: 0
    penjelasan: "XL = 2πfL berbanding lurus f, jadi frekuensi rendah membuat XL kecil, sehingga arus frekuensi rendah lebih mudah lewat induktor."
  - soal: "Kalau frekuensi sinyal audio dinaikkan terus-menerus, apa yang terjadi pada besar arus yang mengalir lewat cabang KAPASITOR pada speaker crossover?"
    pilihan: ["Arusnya makin besar, karena XC makin kecil", "Arusnya makin kecil, karena XC makin besar", "Arusnya tetap konstan", "Arusnya langsung nol"]
    jawaban: 0
    penjelasan: "XC mengecil seiring frekuensi naik, sehingga arus yang bisa lewat kapasitor makin besar."
  - soal: "Kalau frekuensi sinyal audio dinaikkan terus-menerus, apa yang terjadi pada besar arus yang mengalir lewat cabang INDUKTOR pada speaker crossover?"
    pilihan: ["Arusnya makin kecil, karena XL makin besar", "Arusnya makin besar, karena XL makin kecil", "Arusnya tetap konstan", "Arusnya langsung nol"]
    jawaban: 0
    penjelasan: "XL membesar seiring frekuensi naik, sehingga arus yang bisa lewat induktor makin kecil."
  - soal: "Induktor sering dipakai sebagai penyaring yang meloloskan sinyal frekuensi RENDAH tapi menghalangi frekuensi TINGGI, sedangkan kapasitor sebaliknya. Fenomena ini terjadi karena..."
    pilihan: ["XL berbanding lurus dengan frekuensi, sedangkan XC berbanding terbalik dengan frekuensi", "XL dan XC berbanding lurus dengan frekuensi", "XL dan XC keduanya tidak dipengaruhi frekuensi", "XL berbanding terbalik, XC berbanding lurus dengan frekuensi"]
    jawaban: 0
    penjelasan: "XL naik seiring frekuensi (menghalangi frekuensi tinggi), sedangkan XC turun seiring frekuensi (menghalangi frekuensi rendah)."
  - soal: "Grafik gelombang sinus tegangan V(t) dan arus I(t) pada RESISTOR, jika digambar bersama, akan tampak..."
    pilihan: ["Menempel (sefase), hanya beda ketinggian puncaknya saja", "Bergeser seperempat gelombang", "Saling berlawanan arah sepenuhnya", "Tidak berbentuk gelombang sinus sama sekali"]
    jawaban: 0
    penjelasan: "Pada resistor, V(t) dan I(t) sefase -- kurvanya tampak menempel, cuma beda ketinggian puncaknya."
  - soal: "Kalau di simulasi kamu menaikkan nilai induktansi (L) sebuah induktor tanpa mengubah frekuensi, apa yang terjadi pada XL?"
    pilihan: ["XL bertambah besar", "XL berkurang", "XL tidak berubah", "XL menjadi negatif"]
    jawaban: 0
    penjelasan: "XL = 2πfL juga berbanding lurus dengan L, jadi menaikkan L (f tetap) memperbesar XL."
  - soal: "Kalau di simulasi kamu menaikkan nilai kapasitansi (C) sebuah kapasitor tanpa mengubah frekuensi, apa yang terjadi pada XC?"
    pilihan: ["XC berkurang", "XC bertambah besar", "XC tidak berubah", "XC menjadi negatif"]
    jawaban: 0
    penjelasan: "XC = 1/(2πfC) berbanding terbalik dengan C, jadi menaikkan C memperkecil XC."
  - soal: "Manakah alat elektronik sehari-hari yang disebutkan artikel sebagai contoh yang memanfaatkan perbedaan perilaku resistor, induktor, dan kapasitor terhadap AC?"
    pilihan: ["Radio, speaker, dan charger HP", "Kompor listrik", "Termometer digital", "Kalkulator sederhana"]
    jawaban: 0
    penjelasan: "Artikel menyebut radio, speaker, dan charger HP sebagai contoh alat yang memanfaatkan perbedaan perilaku ketiga komponen ini."
  - soal: "Setelah materi Rangkaian AC Sederhana ini, topik apa yang dibahas selanjutnya menurut penutup artikel?"
    pilihan: ["Spektrum Elektromagnetik", "Semikonduktor dan Dioda", "Sinyal Analog dan Digital", "Teori Relativitas Khusus"]
    jawaban: 0
    penjelasan: "Penutup artikel mengarahkan ke materi Spektrum Elektromagnetik sebagai sesi terakhir Bab Fenomena Elektromagnetik."
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

Di materi [Arus Bolak-Balik: Konsep Dasar](/materi/arus-bolak-balik-konsep-dasar) kita sudah paham bentuk gelombang AC dan kenapa PLN memakainya. Tapi ada satu hal yang belum kita bahas: apa yang sebenarnya terjadi kalau AC itu mengalir lewat komponen-komponen yang sudah kamu kenal dari Rangkaian Listrik dulu -- **resistor**, dan dua komponen baru yang belum pernah kita bahas perilakunya dalam rangkaian: **induktor** dan **kapasitor**?

Jawabannya ternyata cukup mengejutkan: ketiganya bereaksi dengan cara yang SANGAT BERBEDA terhadap arus yang terus berubah arah ini. Memahami perbedaan ini penting, karena hampir semua alat elektronik di sekitarmu -- dari radio, speaker, sampai charger HP -- memanfaatkan perbedaan perilaku ini untuk bekerja.

## ⚡ Resistor: Tenang-Tenang Saja

Kabar baiknya, komponen yang paling kamu kenal ini adalah yang paling sederhana perilakunya di rangkaian AC. **Resistor tidak peduli apakah arusnya AC atau DC** -- ia tetap menghambat arus dengan besar yang SAMA, dan hukum Ohm (V = I × R) tetap berlaku persis seperti sebelumnya.

Yang lebih penting lagi: pada resistor, tegangan dan arus **SEFASE** -- keduanya naik bersamaan, turun bersamaan, dan menyentuh nol di saat yang sama. Kalau digambar sebagai grafik gelombang sinus, kurva V(t) dan I(t) akan tampak persis "menempel", cuma beda ketinggian puncaknya saja.

Kenapa bisa begitu? Karena resistor bekerja dengan mengubah energi listrik LANGSUNG menjadi energi panas (disipasi) -- tidak ada proses "penyimpanan energi sesaat" yang bikin arus tertunda mengikuti tegangan. Nilai resistansinya (R) juga **tidak bergantung pada frekuensi** sama sekali -- coba geser slider Frekuensi di simulasi tab Resistor, dan kamu akan lihat nilai reaktansinya (yang di sini sama dengan R) tetap diam di tempat.

## 🌀 Induktor: Arus yang "Malas" Berubah

Induktor (kumparan kawat, sering disebut juga *coil*) berperilaku sangat berbeda. Ingat kembali materi [Hukum Faraday dan Hukum Lenz](/materi/hukum-faraday-dan-lenz): setiap kali arus yang mengalir lewat sebuah kumparan BERUBAH, kumparan itu sendiri menghasilkan GGL induksi yang MELAWAN perubahan tersebut (Hukum Lenz). Nah, arus AC itu sendiri terus-menerus berubah setiap saat -- jadi induktor terus-menerus "melawan" perubahan arus yang mencoba mengalir lewat dirinya.

Efeknya: **arus jadi TERTINGGAL 90° dari tegangan**. Tegangan sudah mencapai puncaknya duluan, baru beberapa saat kemudian (seperempat gelombang) arus menyusul mencapai puncaknya. Cara gampang mengingat ini: jembatan keledai **"ELI"** -- pada **L** (induktor), **E** (tegangan/EMF) lebih dulu dari **I** (arus).

Besarnya "hambatan" yang diberikan induktor terhadap AC disebut **reaktansi induktif (XL)**, dihitung dengan rumus:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Rumus</th><th>Keterangan</th></tr></thead>
<tbody>
<tr><td><em>XL = 2πfL</em></td><td>f = frekuensi (Hz), L = induktansi (Henry, H)</td></tr>
</tbody>
</table>
</div>
</div>

Perhatikan: XL **berbanding LURUS** dengan frekuensi. Semakin tinggi frekuensi arus AC, semakin besar reaktansi induktornya, semakin KECIL arus yang bisa lewat (mirip resistansi yang makin besar). Inilah sebabnya induktor sering dipakai sebagai "penyaring" yang meloloskan sinyal frekuensi RENDAH tapi menghalangi sinyal frekuensi TINGGI.

## 🔋 Kapasitor: Kebalikannya Induktor

Kapasitor bekerja dengan logika yang justru berkebalikan. Ingat dari materi [Kapasitor Keping Sejajar](/materi/kapasitor-keping-sejajar): kapasitor menyimpan muatan di antara dua kepingnya. Supaya tegangan pada kapasitor bisa berubah, muatan di kepingnya harus berubah dulu -- dan perubahan muatan itu sendiri artinya ada ARUS yang mengalir (mengisi atau mengosongkan kapasitor).

Karena arus harus "bekerja duluan" untuk mengubah muatan sebelum tegangannya sempat berubah, hasilnya: **arus MENDAHULUI 90° dari tegangan** pada kapasitor -- kebalikan persis dari induktor. Jembatan keledainya: **"ICE"** -- pada **C** (kapasitor), **I** (arus) lebih dulu dari **E** (tegangan).

Reaktansi kapasitif (XC) dihitung dengan rumus:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Rumus</th><th>Keterangan</th></tr></thead>
<tbody>
<tr><td><em>XC = 1 / (2πfC)</em></td><td>f = frekuensi (Hz), C = kapasitansi (Farad, F)</td></tr>
</tbody>
</table>
</div>
</div>

Kali ini XC **berbanding TERBALIK** dengan frekuensi -- makin tinggi frekuensi, makin KECIL reaktansi kapasitornya, makin BESAR arus yang bisa lewat. Kapasitor jadinya seperti "penyaring" kebalikan dari induktor: meloloskan sinyal frekuensi TINGGI, menghalangi sinyal frekuensi RENDAH (bahkan menghalangi total arus DC yang frekuensinya dianggap 0 Hz -- makanya kapasitor sering dipakai untuk memblokir komponen DC dari sebuah sinyal).

## 📊 Rangkuman Perbandingan

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">⚡</span><h4>Resistor</h4><p>Sefase (0°). X = R, tetap terhadap frekuensi. Mengubah energi jadi panas (disipasi).</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🌀</span><h4>Induktor</h4><p>Arus tertinggal 90° (ELI). XL = 2πfL, membesar seiring frekuensi naik.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🔋</span><h4>Kapasitor</h4><p>Arus mendahului 90° (ICE). XC = 1/(2πfC), mengecil seiring frekuensi naik.</p></div>
</div>
</div>

Coba jelajahi ketiganya langsung di simulasi bawah -- pindah-pindah tab, geser slider Frekuensi dan nilai komponennya, lalu amati bagaimana bentuk gelombang arus (garis biru) bergeser maju/mundur relatif terhadap tegangan (garis kuning), dan bagaimana angka reaktansinya berubah.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Reaktansi (XL atau XC) sama saja dengan resistansi (R) -- sama-sama menghambat arus, jadi sama-sama menghasilkan panas."</strong><br>
Tidak tepat. <strong class="mtr-right">Reaktansi TIDAK menghasilkan disipasi energi (panas) seperti resistansi.</strong> Induktor dan kapasitor hanya MENYIMPAN energi sesaat (dalam medan magnet atau medan listrik) lalu MENGEMBALIKANNYA ke rangkaian di bagian lain siklus gelombangnya -- tidak ada energi yang benar-benar hilang jadi panas seperti pada resistor. Itulah kenapa reaktansi dan resistansi, meski satuannya sama-sama Ohm (Ω), adalah dua besaran fisis yang berbeda secara konsep.
</div>

## 🤔 Coba Pikirkan

Sebuah rangkaian penyaring audio (*speaker crossover*) memakai kapasitor untuk mengalirkan sinyal ke *tweeter* (speaker nada tinggi) dan induktor untuk mengalirkan sinyal ke *woofer* (speaker nada rendah/bass).

1. Berdasarkan sifat XC dan XL terhadap frekuensi yang sudah kamu pelajari, kenapa kapasitor cocok diarahkan ke tweeter (frekuensi tinggi), dan induktor cocok diarahkan ke woofer (frekuensi rendah)?
2. Kalau frekuensi sinyal audio dinaikkan terus-menerus, apa yang akan terjadi pada besar arus yang mengalir lewat cabang kapasitor, dan lewat cabang induktor?

Coba diskusikan jawabanmu dengan teman sekelas, atau buktikan sendiri lewat simulasi di atas.

<div class="mtr-cta">
<p>Dengan ini kita tuntas membahas Arus Bolak-Balik. Sesi terakhir Bab Fenomena Elektromagnetik akan membawa kita ke topik yang lebih luas: Gelombang Elektromagnetik, mulai dari gelombang radio sampai sinar gamma.</p>
<a href="/materi/spektrum-elektromagnetik" class="btn btn-primary">🌈 Lanjut ke Spektrum Elektromagnetik →</a>
</div>
