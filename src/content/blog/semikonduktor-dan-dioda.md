---
title: "Semikonduktor dan Dioda"
description: "Kenalan dengan bahan di balik seluruh elektronika modern -- semikonduktor, proses doping, dan dioda sebagai penyearah arus, lengkap simulasi interaktif."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Sistem Elektronika", "Semikonduktor", "Dioda", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/dioda-dan-transistor.html"
  judul: "Laboratorium Maya: Dioda dan Transistor"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1050
kuis:
  - soal: "Semikonduktor adalah bahan yang..."
    pilihan: ["Daya hantar listriknya di antara konduktor dan isolator, bisa diatur/diubah", "Selalu menghantarkan listrik dengan sangat baik seperti logam", "Sama sekali tidak bisa menghantarkan listrik", "Hanya ditemukan dalam bentuk cairan"]
    jawaban: 0
    penjelasan: "Semikonduktor (mis. Silikon, Germanium) punya daya hantar di antara konduktor dan isolator, dan sifat ini bisa diubah lewat proses doping."
  - soal: "Doping semikonduktor dengan atom pentavalen (5 elektron valensi) menghasilkan semikonduktor tipe..."
    pilihan: ["N (kelebihan elektron bebas)", "P (kekurangan elektron/hole)", "Netral, tidak berubah", "Isolator sempurna"]
    jawaban: 0
    penjelasan: "Atom pentavalen menyumbang elektron ekstra yang jadi pembawa muatan bebas, menghasilkan semikonduktor tipe-N."
  - soal: "Sifat utama dioda adalah..."
    pilihan: ["Hanya mengalirkan arus satu arah (saat forward bias melebihi tegangan ambang)", "Mengalirkan arus ke segala arah dengan sama mudahnya", "Memperbesar sinyal listrik", "Menyimpan energi listrik"]
    jawaban: 0
    penjelasan: "Dioda cuma menghantar saat forward bias dan tegangannya melebihi tegangan ambang (≈0,7V untuk silikon) -- sifat satu-arah inilah yang membuatnya cocok jadi penyearah."
  - soal: "LED (Light Emitting Diode) akan memancarkan cahaya saat..."
    pilihan: ["Dipasang forward bias dan tegangannya melebihi tegangan ambang", "Dipasang reverse bias", "Suhu ruangan sangat rendah", "Tidak dialiri arus sama sekali"]
    jawaban: 0
    penjelasan: "LED adalah jenis dioda khusus -- sama seperti dioda biasa, ia baru menghantar (dan pada LED, memancarkan cahaya) saat forward bias melebihi tegangan ambang."
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

.mtr-def {
  border-left: 3px solid var(--gold);
  background: var(--gold-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}

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
</style>

Di materi [Sinyal Analog dan Digital](/materi/sinyal-analog-dan-digital) dan [Bilangan Biner](/materi/bilangan-biner) kita sudah paham KENAPA dunia digital cuma butuh dua keadaan (0 dan 1), dan bagaimana angka direpresentasikan dalam sistem itu. Sekarang saatnya menjawab pertanyaan berikutnya: bagaimana caranya dua keadaan itu benar-benar DIWUJUDKAN secara fisik lewat komponen elektronik? Jawabannya dimulai dari bahan paling dasar: **semikonduktor**, dan komponen pertama yang dibangun darinya, **dioda**.

## 🔬 Semikonduktor: Bukan Konduktor, Bukan Isolator

Ingat kembali dari materi Rangkaian Listrik: **konduktor** (mis. tembaga) menghantarkan listrik dengan sangat baik, sedangkan **isolator** (mis. karet) hampir tidak menghantarkan sama sekali. Ada golongan bahan ketiga yang jadi kunci seluruh elektronika modern: **semikonduktor** -- daya hantarnya ada DI ANTARA keduanya, dan yang lebih penting, sifat ini bisa DIATUR sesuai kebutuhan.

<div class="mtr-def">
💡 <strong>Semikonduktor</strong> paling umum adalah Silikon (Si) dan Germanium (Ge). Dalam keadaan murni, keduanya nyaris seperti isolator -- barulah lewat proses <strong>doping</strong> (menambahkan sedikit atom "pengotor" tertentu), sifat kelistrikannya bisa diubah drastis.
</div>

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Tipe</th><th>Atom Doping</th><th>Pembawa Muatan Mayoritas</th></tr></thead>
<tbody>
<tr><td>Tipe-N</td><td>Pentavalen (5 elektron valensi, mis. Fosfor)</td><td>Elektron bebas (kelebihan elektron)</td></tr>
<tr><td>Tipe-P</td><td>Trivalen (3 elektron valensi, mis. Boron)</td><td>"Hole" / lubang (kekurangan elektron)</td></tr>
</tbody>
</table>
</div>
</div>

"Hole" di semikonduktor tipe-P bukan benda sungguhan -- ini cara menggambarkan TEMPAT KOSONG yang ditinggalkan elektron, yang berperilaku seolah-olah jadi pembawa muatan POSITIF yang bisa "bergerak" (padahal yang sebenarnya bergerak adalah elektron-elektron di sekitarnya yang mengisi kekosongan itu satu per satu).

## ➡️ Dioda: Sambungan P-N yang Cuma Bisa Satu Arah

Kalau semikonduktor tipe-P dan tipe-N disambung jadi satu, terciptalah **dioda** -- komponen paling dasar dalam elektronika. Sifat uniknya: **dioda cuma bisa mengalirkan arus SATU ARAH**.

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">✅</span><h4>Forward Bias</h4><p>Kutub P dihubungkan ke (+) dan N ke (−) sumber tegangan. Kalau tegangannya melebihi tegangan ambang (≈0,7V untuk silikon), dioda "terbuka" dan arus mengalir.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🚫</span><h4>Reverse Bias</h4><p>Kutub P dihubungkan ke (−) dan N ke (+). Dioda tetap "tertutup" -- TIDAK ADA arus yang mengalir, berapa pun besar tegangannya (sampai batas tertentu).</p></div>
</div>
</div>

Sifat satu-arah inilah yang membuat dioda sangat berguna sebagai **penyearah (rectifier)** -- mengubah arus AC (bolak-balik) jadi DC (searah), dengan cara "memotong" bagian gelombang AC yang arahnya salah. Ingat kembali materi [Rangkaian AC Sederhana](/materi/rangkaian-ac-sederhana): waktu itu kita membahas contoh charger HP yang mengubah 220V AC dari stopkontak jadi tegangan DC untuk mengisi baterai, dan bertanya "komponen tambahan apa yang dibutuhkan selain trafo?" -- jawabannya adalah **dioda penyearah** inilah salah satu komponen kuncinya!

Salah satu jenis dioda khusus yang sudah sangat familiar buatmu adalah **LED (Light Emitting Diode)** -- dioda yang memancarkan cahaya saat dialiri arus forward bias, dipakai di hampir semua lampu indikator, layar, dan penerangan hemat energi modern.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Semikonduktor tipe-P bermuatan positif secara keseluruhan, seperti benda yang kelebihan proton."</strong><br>
Tidak tepat. <strong class="mtr-right">Semikonduktor tipe-P tetap NETRAL secara keseluruhan.</strong> "Hole" (kekosongan elektron) memang berperilaku SEOLAH-OLAH pembawa muatan positif yang bisa "bergerak", tapi jumlah total proton dan elektron di bahan itu tetap seimbang -- sama seperti semikonduktor tipe-N yang juga tetap netral meski kelebihan elektron BEBAS (bukan kelebihan muatan negatif secara keseluruhan).
</div>

## 🤔 Coba Pikirkan

1. Kenapa menurutmu dioda LED yang dipasang TERBALIK (reverse bias) di sebuah rangkaian tidak akan menyala, walau sudah diberi sumber tegangan?
2. Sebuah remote control TV inframerah (ingat lagi materi [Spektrum Elektromagnetik](/materi/spektrum-elektromagnetik)) memakai LED inframerah untuk mengirim sinyal. Menurutmu, kenapa LED (bukan lampu pijar biasa) yang dipilih untuk aplikasi ini?

Coba diskusikan jawabanmu dengan teman sekelas, atau uji dulu pemahamanmu lewat tab Dioda di simulasi bawah.

<div class="mtr-cta">
<p>Sekarang kita paham bahan dasarnya dan komponen pertama yang dibangun darinya. Selanjutnya kita bahas komponen yang jauh lebih canggih: transistor, yang jadi dasar semua chip komputer modern.</p>
<a href="/materi/transistor-saklar-dan-penguat" class="btn btn-primary">🔀 Lanjut ke Transistor: Saklar dan Penguat →</a>
</div>
