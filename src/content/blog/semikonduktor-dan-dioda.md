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
  - soal: "Kenapa Silikon dan Germanium dalam keadaan MURNI (belum didoping) hampir berperilaku seperti isolator?"
    pilihan: ["Karena belum diberi atom pengotor yang bisa mengubah sifat kelistrikannya secara drastis", "Karena keduanya logam berat", "Karena keduanya selalu dalam bentuk cairan", "Karena keduanya tidak punya elektron sama sekali"]
    jawaban: 0
    penjelasan: "Dalam keadaan murni, Silikon dan Germanium nyaris seperti isolator -- baru lewat proses doping sifat kelistrikannya bisa diubah drastis."
  - soal: "Doping semikonduktor dengan atom trivalen (3 elektron valensi, misalnya Boron) menghasilkan semikonduktor tipe..."
    pilihan: ["P (kekurangan elektron/hole sebagai pembawa muatan mayoritas)", "N (kelebihan elektron bebas)", "Netral, tidak berubah sama sekali", "Isolator sempurna"]
    jawaban: 0
    penjelasan: "Atom trivalen (mis. Boron) menghasilkan semikonduktor tipe-P, dengan hole sebagai pembawa muatan mayoritas."
  - soal: "Apa sebenarnya 'hole' pada semikonduktor tipe-P?"
    pilihan: ["Tempat kosong yang ditinggalkan elektron, yang berperilaku seolah pembawa muatan positif yang bergerak", "Partikel sungguhan yang bermuatan positif seperti proton bebas", "Lubang fisik yang bisa dilihat pada permukaan bahan", "Elektron ekstra yang tertahan di dalam bahan"]
    jawaban: 0
    penjelasan: "Hole bukan benda sungguhan -- ia menggambarkan tempat kosong yang ditinggalkan elektron, yang berperilaku seolah pembawa muatan positif."
  - soal: "Yang SEBENARNYA bergerak saat 'hole' tampak berpindah di semikonduktor tipe-P adalah..."
    pilihan: ["Elektron-elektron di sekitarnya yang mengisi kekosongan itu satu per satu", "Proton yang berpindah dari satu atom ke atom lain", "Hole itu sendiri sebagai partikel fisik", "Inti atom silikon yang bergeser"]
    jawaban: 0
    penjelasan: "Yang sebenarnya bergerak adalah elektron-elektron di sekitar yang mengisi kekosongan satu per satu, bukan hole sebagai benda fisik."
  - soal: "Berapa kira-kira tegangan ambang (threshold) forward bias yang harus dilampaui agar dioda silikon mulai menghantarkan arus?"
    pilihan: ["Sekitar 0,7 V", "Sekitar 5 V", "Sekitar 12 V", "Sekitar 220 V"]
    jawaban: 0
    penjelasan: "Dioda silikon baru menghantar saat forward bias melebihi tegangan ambang sekitar 0,7 V."
  - soal: "Pada kondisi forward bias, kutub P dihubungkan ke kutub (+) sumber tegangan, sedangkan kutub N dihubungkan ke..."
    pilihan: ["Kutub (−) sumber tegangan", "Kutub (+) sumber tegangan juga", "Tidak dihubungkan sama sekali", "Ground netral tanpa polaritas"]
    jawaban: 0
    penjelasan: "Forward bias: P ke (+), N ke (−) sumber tegangan."
  - soal: "Pada kondisi reverse bias (P ke −, N ke +), apa yang terjadi pada arus yang melewati dioda?"
    pilihan: ["Tidak ada arus yang mengalir, berapa pun besar tegangannya (sampai batas tertentu)", "Arus mengalir sama besar seperti forward bias", "Arus mengalir dua kali lebih besar dari forward bias", "Arus mengalir tapi arahnya bolak-balik"]
    jawaban: 0
    penjelasan: "Pada reverse bias, dioda tetap 'tertutup' -- tidak ada arus yang mengalir, berapa pun besar tegangannya (sampai batas tertentu)."
  - soal: "Kenapa dioda sangat berguna sebagai penyearah (rectifier) dalam mengubah arus AC menjadi DC?"
    pilihan: ["Karena sifatnya yang cuma mengalirkan arus satu arah bisa memotong bagian gelombang AC yang arahnya salah", "Karena dioda bisa menyimpan energi listrik dalam jumlah besar", "Karena dioda bisa mengubah tegangan AC menjadi lebih tinggi", "Karena dioda tidak pernah menghasilkan panas"]
    jawaban: 0
    penjelasan: "Sifat satu-arah dioda membuatnya bisa memotong bagian gelombang AC yang arahnya salah, mengubah AC jadi DC."
  - soal: "Pada contoh charger HP yang mengubah 220V AC dari stopkontak jadi tegangan DC, komponen apa (selain trafo) yang disebut artikel sebagai salah satu kunci prosesnya?"
    pilihan: ["Dioda penyearah", "Resistor pemanas", "Kapasitor keping sejajar saja", "Solenoida"]
    jawaban: 0
    penjelasan: "Artikel menyebut dioda penyearah sebagai salah satu komponen kunci selain trafo untuk mengubah AC 220V jadi DC."
  - soal: "LED adalah singkatan dari..."
    pilihan: ["Light Emitting Diode", "Low Energy Device", "Light Electric Detector", "Linear Electronic Diode"]
    jawaban: 0
    penjelasan: "LED singkatan dari Light Emitting Diode -- dioda yang memancarkan cahaya saat forward bias."
  - soal: "Kenapa LED yang dipasang TERBALIK (reverse bias) tidak akan menyala walau sudah diberi sumber tegangan?"
    pilihan: ["Karena pada reverse bias, dioda (termasuk LED) tetap tertutup dan tidak ada arus yang mengalir", "Karena LED hanya menyala dengan arus DC, tidak pernah dengan tegangan sumber apa pun", "Karena LED akan langsung terbakar saat dipasang terbalik", "Karena posisi kutub tidak berpengaruh sama sekali pada LED"]
    jawaban: 0
    penjelasan: "LED adalah jenis dioda -- pada reverse bias ia tetap tertutup, tidak ada arus yang mengalir, sehingga tidak menyala."
  - soal: "Manakah pernyataan yang benar tentang muatan keseluruhan semikonduktor tipe-P?"
    pilihan: ["Tetap netral secara keseluruhan, meski hole berperilaku seolah pembawa muatan positif", "Bermuatan positif secara keseluruhan karena kelebihan proton", "Bermuatan negatif secara keseluruhan", "Tidak memiliki muatan apa pun, bahkan hole-nya"]
    jawaban: 0
    penjelasan: "Semikonduktor tipe-P tetap netral secara keseluruhan -- jumlah total proton dan elektron tetap seimbang."
  - soal: "Sama seperti tipe-P, semikonduktor tipe-N yang kelebihan elektron bebas juga tetap..."
    pilihan: ["Netral secara keseluruhan", "Bermuatan negatif secara keseluruhan", "Bermuatan positif secara keseluruhan", "Kehilangan elektron sepenuhnya"]
    jawaban: 0
    penjelasan: "Semikonduktor tipe-N juga tetap netral secara keseluruhan meski kelebihan elektron bebas."
  - soal: "Kenapa remote control TV inframerah memilih LED (bukan lampu pijar biasa) untuk mengirim sinyal?"
    pilihan: ["Karena LED bisa dinyalakan/dimatikan dengan sangat cepat dan hemat energi untuk sinyal digital, sedangkan lampu pijar merespons terlalu lambat", "Karena lampu pijar tidak bisa memancarkan cahaya inframerah sama sekali", "Karena LED jauh lebih besar ukurannya", "Karena lampu pijar hanya bisa menyala dengan arus AC"]
    jawaban: 0
    penjelasan: "LED merespons sangat cepat dan hemat energi, cocok untuk sinyal digital berkedip cepat seperti pada remote inframerah."
  - soal: "Golongan bahan yang daya hantar listriknya di ANTARA konduktor dan isolator, dan sifatnya bisa diatur, disebut..."
    pilihan: ["Semikonduktor", "Superkonduktor", "Isolator murni", "Elektrolit"]
    jawaban: 0
    penjelasan: "Semikonduktor punya daya hantar di antara konduktor dan isolator, dan sifat ini bisa diatur lewat doping."
  - soal: "Apa yang disebut sebagai komponen elektronika PALING DASAR yang tercipta saat semikonduktor tipe-P dan tipe-N disambung jadi satu?"
    pilihan: ["Dioda", "Transistor", "Resistor", "Kapasitor"]
    jawaban: 0
    penjelasan: "Sambungan P-N menciptakan dioda -- komponen paling dasar dalam elektronika."
  - soal: "Menurut tabel doping pada artikel, pembawa muatan mayoritas pada semikonduktor tipe-N adalah..."
    pilihan: ["Elektron bebas", "Hole", "Proton bebas", "Ion positif"]
    jawaban: 0
    penjelasan: "Tabel doping menyebut elektron bebas sebagai pembawa muatan mayoritas pada tipe-N."
  - soal: "Materi Semikonduktor dan Dioda ini disebutkan sebagai jawaban atas pertanyaan lanjutan dari materi apa (yang membahas kenapa dunia digital cuma butuh dua keadaan 0 dan 1)?"
    pilihan: ["Sinyal Analog dan Digital", "Rangkaian AC Sederhana", "Spektrum Elektromagnetik", "Percobaan Michelson-Morley"]
    jawaban: 0
    penjelasan: "Artikel membuka dengan menyebut materi Sinyal Analog dan Digital sebagai dasar pertanyaan yang dijawab di sini."
  - soal: "Setelah materi ini, topik apa yang dibahas selanjutnya menurut penutup artikel, sebagai komponen yang jadi dasar chip komputer modern?"
    pilihan: ["Transistor: Saklar dan Penguat", "Bilangan Biner", "Gaya Lorentz", "Spektrum Elektromagnetik"]
    jawaban: 0
    penjelasan: "Penutup artikel mengarahkan ke materi Transistor sebagai komponen yang jadi dasar chip komputer modern."
  - soal: "Apa perbedaan mendasar antara konduktor seperti tembaga dan semikonduktor?"
    pilihan: ["Konduktor selalu menghantar listrik dengan baik, sedangkan sifat hantar semikonduktor bisa diubah lewat doping", "Konduktor dan semikonduktor punya daya hantar yang identik", "Semikonduktor selalu menghantar listrik lebih baik dari konduktor", "Konduktor tidak bisa menghantarkan listrik sama sekali"]
    jawaban: 0
    penjelasan: "Konduktor menghantar listrik dengan sangat baik dan tetap, sedangkan semikonduktor sifat hantarnya bisa diatur lewat doping."
  - soal: "Kalau tegangan forward bias yang diberikan pada dioda silikon MASIH DI BAWAH tegangan ambang (misalnya 0,3 V), apa yang terjadi?"
    pilihan: ["Dioda belum menghantarkan arus secara signifikan", "Dioda langsung menghantarkan arus penuh seperti biasa", "Dioda akan rusak permanen", "Dioda akan berfungsi sebagai reverse bias"]
    jawaban: 0
    penjelasan: "Dioda baru menghantar signifikan setelah tegangan forward bias melebihi tegangan ambang (~0,7V); di bawah itu belum menghantar signifikan."
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
