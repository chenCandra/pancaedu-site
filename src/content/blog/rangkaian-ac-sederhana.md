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
