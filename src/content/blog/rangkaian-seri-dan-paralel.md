---
title: "Rangkaian Seri dan Paralel"
description: "Perbedaan rangkaian seri dan paralel -- ciri arus dan tegangannya, cara menghitung hambatan total, dan kenapa lampu rumah dipasang paralel bukan seri."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Listrik Dinamis", "Rangkaian Seri", "Rangkaian Paralel", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/hukum-ohm.html"
  judul: "Virtual Circuit Lab -- Seri & Paralel"
  sumber: "Lab Maya PancaEdu"
  tinggi: 2900
kuis:
  - soal: "Pada rangkaian seri, besaran yang SAMA di setiap titik adalah..."
    pilihan: ["Arus (I)", "Tegangan (V)", "Hambatan (R)", "Daya (P)"]
    jawaban: 0
    penjelasan: "Pada rangkaian seri, arus yang mengalir sama di setiap titik, karena cuma ada satu jalur."
  - soal: "Pada rangkaian paralel, besaran yang SAMA di setiap cabang adalah..."
    pilihan: ["Arus (I)", "Tegangan (V)", "Hambatan total (R)", "Semua berbeda"]
    jawaban: 1
    penjelasan: "Pada rangkaian paralel, tegangan di setiap cabang sama, karena semua cabang terhubung ke titik yang sama."
  - soal: "Dua resistor 10 Ω dan 20 Ω dirangkai SERI. Berapa hambatan totalnya?"
    pilihan: ["10 Ω", "20 Ω", "30 Ω", "6,7 Ω"]
    jawaban: 2
    penjelasan: "Pada rangkaian seri, Rtotal = R1 + R2 = 10 + 20 = 30 Ω."
  - soal: "Kenapa lampu-lampu di rumah biasanya dirangkai PARALEL, bukan seri?"
    pilihan: ["Supaya lebih hemat kabel", "Supaya kalau satu lampu mati/dilepas, lampu lain tetap menyala", "Supaya semua lampu pasti mati bersamaan", "Karena rangkaian seri tidak mungkin dibuat untuk lampu"]
    jawaban: 1
    penjelasan: "Pada rangkaian paralel, tiap cabang independen -- kalau satu lampu dilepas/putus, cabang lain tetap punya jalur lengkap dan tetap menyala."
  - soal: "Dua resistor 10 Ω dirangkai PARALEL. Berapa hambatan totalnya?"
    pilihan: ["20 Ω", "10 Ω", "5 Ω", "0,2 Ω"]
    jawaban: 2
    penjelasan: "1/Rtotal = 1/10 + 1/10 = 2/10, sehingga Rtotal = 10/2 = 5 Ω -- hambatan total paralel selalu lebih kecil dari komponen terkecilnya."
  - soal: "Pada rangkaian seri, tegangan sumber terbagi bagaimana ke tiap komponen?"
    pilihan: ["V = V1 + V2 + ... (dijumlahkan sesuai hambatan tiap komponen)", "V sama besar di setiap komponen", "V dibagi rata tanpa memandang besar hambatan", "V tidak terbagi, tetap penuh di setiap komponen"]
    jawaban: 0
    penjelasan: "Pada rangkaian seri, tegangan sumber terbagi ke tiap komponen sesuai besar hambatannya: V = V1 + V2 + ..."
  - soal: "Pada rangkaian paralel, arus total dari sumber terbagi bagaimana ke tiap cabang?"
    pilihan: ["Itotal = I1 + I2 + ... (dijumlahkan dari arus tiap cabang)", "Itotal sama dengan arus di cabang manapun", "Arus dibagi rata tanpa memandang besar hambatan tiap cabang", "Arus tidak terbagi, tetap penuh di setiap cabang"]
    jawaban: 0
    penjelasan: "Pada rangkaian paralel, arus total dari sumber terbagi ke tiap cabang sesuai besar hambatannya, lalu totalnya adalah jumlah arus semua cabang: Itotal = I1 + I2 + ..."
  - soal: "Tiga resistor 5 Ω, 15 Ω, dan 10 Ω dirangkai seri, dihubungkan ke sumber 15 V. Berapa hambatan total dan arus yang mengalir?"
    pilihan: ["30 Ω dan 0,5 A", "30 Ω dan 2 A", "15 Ω dan 1 A", "300 Ω dan 0,05 A"]
    jawaban: 0
    penjelasan: "Rtotal = 5 + 15 + 10 = 30 Ω. I = V/Rtotal = 15/30 = 0,5 A -- arus ini sama besar di ketiga resistor."
  - soal: "Melanjutkan soal sebelumnya (arus 0,5 A pada resistor 15 Ω), berapa tegangan pada resistor 15 Ω tersebut?"
    pilihan: ["7,5 V", "15 V", "5 V", "3,75 V"]
    jawaban: 0
    penjelasan: "V = I × R = 0,5 × 15 = 7,5 V."
  - soal: "Dua resistor, 6 Ω dan 3 Ω, dirangkai paralel. Berapa hambatan totalnya?"
    pilihan: ["2 Ω", "9 Ω", "4,5 Ω", "1,5 Ω"]
    jawaban: 0
    penjelasan: "1/Rtotal = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, sehingga Rtotal = 2 Ω."
  - soal: "Melanjutkan soal sebelumnya (R1 = 6 Ω, R2 = 3 Ω paralel, Rtotal = 2 Ω), kalau dihubungkan ke sumber 12 V, berapa arus total dan arus di masing-masing cabang?"
    pilihan: ["Itotal = 6 A, I(6Ω) = 2 A, I(3Ω) = 4 A", "Itotal = 2 A, I(6Ω) = 1 A, I(3Ω) = 1 A", "Itotal = 6 A, I(6Ω) = 4 A, I(3Ω) = 2 A", "Itotal = 12 A, I(6Ω) = 2 A, I(3Ω) = 4 A"]
    jawaban: 0
    penjelasan: "Tegangan sama di tiap cabang (12 V): I(6Ω) = 12/6 = 2 A, I(3Ω) = 12/3 = 4 A. Jumlahnya 6 A, sesuai Itotal = V/Rtotal = 12/2 = 6 A."
  - soal: "Kenapa hambatan total rangkaian paralel selalu lebih kecil daripada komponen terkecilnya?"
    pilihan: ["Karena arus punya lebih banyak 'jalan pintas' (cabang tambahan) untuk mengalir", "Karena tegangan yang terpasang jadi lebih kecil", "Karena arus yang mengalir jadi berkurang", "Karena resistor paralel saling menetralkan hambatannya"]
    jawaban: 0
    penjelasan: "Setiap cabang tambahan memberi arus jalur baru untuk mengalir, sehingga secara keseluruhan arus jadi lebih mudah mengalir -- itulah kenapa hambatan total paralel selalu lebih kecil dari komponen terkecilnya."
  - soal: "Apa yang terjadi pada hambatan total kalau kita menambah komponen SERI baru ke rangkaian yang sudah ada?"
    pilihan: ["Hambatan total bertambah besar", "Hambatan total berkurang", "Hambatan total tetap sama", "Bisa naik atau turun secara acak, tergantung suasana rangkaian"]
    jawaban: 0
    penjelasan: "Pada rangkaian seri, Rtotal = R1 + R2 + ... -- menambah komponen baru selalu menambah nilai Rtotal."
  - soal: "Apa yang terjadi pada hambatan total kalau kita menambah CABANG paralel baru ke rangkaian yang sudah ada?"
    pilihan: ["Hambatan total berkurang (makin kecil)", "Hambatan total bertambah besar", "Hambatan total tetap sama", "Bisa naik atau turun secara acak, tergantung suasana rangkaian"]
    jawaban: 0
    penjelasan: "Pada rangkaian paralel, 1/Rtotal = 1/R1 + 1/R2 + ... -- menambah cabang baru selalu menambah nilai 1/Rtotal, sehingga Rtotal-nya sendiri makin kecil."
  - soal: "Kalau satu lampu di rangkaian PARALEL putus atau dicabut, apa yang terjadi pada lampu-lampu lain?"
    pilihan: ["Tetap menyala normal, karena tiap cabang independen", "Semua ikut mati, karena rangkaian jadi terbuka", "Jadi lebih terang dari biasanya", "Berkedip-kedip tidak stabil"]
    jawaban: 0
    penjelasan: "Pada rangkaian paralel, tiap cabang punya jalur sendiri -- kalau satu cabang terputus, cabang lain tetap punya jalur lengkap dan tetap menyala normal."
  - soal: "Kenapa kalau satu komponen di rangkaian SERI putus, SEMUA lampu di rangkaian itu ikut mati?"
    pilihan: ["Karena rangkaian seri cuma punya satu jalur untuk arus, sehingga kalau titik itu terbuka, seluruh rangkaian ikut terbuka", "Karena lampu yang putus menyerap seluruh tegangan sumber", "Karena arus otomatis berbalik arah", "Karena hambatan lampu yang putus menjadi nol"]
    jawaban: 0
    penjelasan: "Rangkaian seri cuma punya SATU jalur untuk arus -- kalau ada satu titik yang terbuka (komponen putus), seluruh rangkaian jadi terbuka dan semua komponen lain ikut kehilangan arus."
  - soal: "Pada pohon natal dengan 2 mode lampu (mode A seri, mode B paralel), mode mana yang membuat SEMUA lampu ikut mati kalau satu bohlam putus?"
    pilihan: ["Mode A (seri) -- karena cuma satu jalur, satu putus semua ikut mati", "Mode B (paralel) -- karena tiap cabang saling bergantung", "Kedua mode sama-sama membuat semua lampu mati", "Tidak ada mode yang membuat lampu lain mati"]
    jawaban: 0
    penjelasan: "Mode A (seri) yang akan membuat semua lampu mati kalau satu bohlam putus, karena rangkaian seri cuma punya satu jalur arus."
  - soal: "Kenapa kebanyakan lampu hias/rumah modern memilih rangkaian paralel, meski butuh lebih banyak kabel?"
    pilihan: ["Supaya kalau satu lampu putus/dicabut, lampu-lampu lain tetap menyala -- keandalan lebih diprioritaskan daripada hemat kabel", "Supaya menghemat kabel meski keandalannya lebih rendah", "Supaya semua lampu menyala dengan tegangan yang berbeda-beda", "Karena rangkaian paralel selalu lebih murah dibuat daripada seri"]
    jawaban: 0
    penjelasan: "Meski butuh lebih banyak kabel, rangkaian paralel dipilih karena keandalannya -- satu lampu putus tidak mematikan lampu lain, beda dengan rangkaian seri."
  - soal: "Menurut ringkasan tabel di materi ini, bagaimana rumus hambatan total pada rangkaian PARALEL dituliskan?"
    pilihan: ["1/Rtotal = 1/R1 + 1/R2 + ...", "Rtotal = R1 + R2 + ...", "Rtotal = R1 × R2", "Rtotal = (R1 + R2)/2"]
    jawaban: 0
    penjelasan: "Pada rangkaian paralel, hambatan total dihitung dengan menjumlahkan KEBALIKAN tiap hambatan: 1/Rtotal = 1/R1 + 1/R2 + ..."
  - soal: "Menurut ringkasan tabel di materi ini, bagaimana rumus hambatan total pada rangkaian SERI dituliskan?"
    pilihan: ["Rtotal = R1 + R2 + ...", "1/Rtotal = 1/R1 + 1/R2 + ...", "Rtotal = R1 × R2 / (R1 + R2)", "Rtotal = R1 − R2"]
    jawaban: 0
    penjelasan: "Pada rangkaian seri, hambatan total dijumlahkan langsung: Rtotal = R1 + R2 + ..."
  - soal: "Tiga resistor, masing-masing 4 Ω, dirangkai paralel. Berapa hambatan totalnya?"
    pilihan: ["Sekitar 1,33 Ω", "12 Ω", "4 Ω", "1,5 Ω"]
    jawaban: 0
    penjelasan: "1/Rtotal = 1/4 + 1/4 + 1/4 = 3/4, sehingga Rtotal = 4/3 ≈ 1,33 Ω."
  - soal: "Dua resistor, 8 Ω dan 12 Ω, dirangkai seri, dihubungkan ke sumber 20 V. Berapa arus yang mengalir dalam rangkaian?"
    pilihan: ["1 A", "2,5 A", "0,4 A", "20 A"]
    jawaban: 0
    penjelasan: "Rtotal = 8 + 12 = 20 Ω. I = V/Rtotal = 20/20 = 1 A."
  - soal: "Melanjutkan soal sebelumnya (arus 1 A), berapa tegangan pada resistor 12 Ω tersebut?"
    pilihan: ["12 V", "8 V", "20 V", "6 V"]
    jawaban: 0
    penjelasan: "V = I × R = 1 × 12 = 12 V."
  - soal: "Kenapa penting mengetahui apakah rangkaian tersusun seri atau paralel sebelum menghitung hambatan totalnya?"
    pilihan: ["Karena rumus hambatan totalnya berbeda -- dijumlah langsung untuk seri, dijumlah kebalikannya untuk paralel", "Karena keduanya menggunakan rumus yang sama persis", "Karena cuma rangkaian seri yang punya hambatan total", "Karena cuma rangkaian paralel yang punya hambatan total"]
    jawaban: 0
    penjelasan: "Rumus hambatan total seri (Rtotal = R1+R2+...) dan paralel (1/Rtotal = 1/R1+1/R2+...) sangat berbeda -- salah mengenali jenis rangkaian bisa membuat seluruh perhitungan meleset."
  - soal: "Setelah tuntas membahas Rangkaian Listrik, bab selanjutnya yang disebutkan di akhir materi ini membahas apa?"
    pilihan: ["Fenomena Elektromagnetik, dimulai dari Medan Magnet: Konsep Dasar", "Listrik Statis dan Hukum Coulomb", "Teori Dasar Fisika Modern", "Transistor dan Gerbang Logika"]
    jawaban: 0
    penjelasan: "Materi ini menutup bab Rangkaian Listrik dan mengarahkan ke bab baru, Fenomena Elektromagnetik, dimulai dari materi Medan Magnet: Konsep Dasar."
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

Setelah paham [Hukum Ohm dan Rangkaian Sederhana](/materi/hukum-ohm-dan-rangkaian-sederhana) dengan satu komponen, sekarang kita bahas bagaimana beberapa komponen dirangkai bersama -- ada dua cara dasar: **seri** dan **paralel**, masing-masing punya ciri khas yang sangat berbeda.

## 🔗 Rangkaian Seri

Pada rangkaian seri, komponen-komponen disusun **berurutan dalam satu jalur** -- Battery → Switch → R1 → R2 → Lampu → kembali ke Battery. Cuma ada SATU jalur untuk arus mengalir.

**Ciri khas rangkaian seri:**
- **Arus (I) SAMA** di setiap titik rangkaian (cuma ada satu jalur, jadi semua muatan yang mengalir harus melewati semua komponen).
- **Tegangan TERBAGI** ke tiap komponen: V = V1 + V2 + V-lampu.
- **Hambatan total dijumlahkan langsung**: Rtotal = R1 + R2 + ...

### Contoh Soal

Dua resistor R1 = 10 Ω dan R2 = 20 Ω dirangkai seri, dihubungkan ke sumber 12 V. Berapa hambatan total dan arusnya?

- Rtotal = R1 + R2 = 10 + 20 = **30 Ω**
- I = V/Rtotal = 12/30 = **0,4 A** (arus ini sama di R1 maupun R2)

## 🌿 Rangkaian Paralel

Pada rangkaian paralel, komponen-komponen disusun **bercabang** -- Battery → Switch → [R1 ‖ R2 ‖ Lampu] → kembali ke Battery. Arus bercabang di titik percabangan, lalu bergabung kembali.

**Ciri khas rangkaian paralel:**
- **Tegangan (V) SAMA** di setiap cabang (semua cabang terhubung ke titik yang sama).
- **Arus TERBAGI** ke tiap cabang: Itotal = I1 + I2 + I-lampu.
- **Hambatan total dihitung dengan kebalikan**: 1/Rtotal = 1/R1 + 1/R2 + ...

### Contoh Soal

Dua resistor R1 = 10 Ω dan R2 = 10 Ω dirangkai paralel, dihubungkan ke sumber 12 V. Berapa hambatan total, dan berapa arus total?

- 1/Rtotal = 1/10 + 1/10 = 2/10, sehingga Rtotal = 10/2 = **5 Ω**
- Itotal = V/Rtotal = 12/5 = **2,4 A**

Perhatikan: hambatan total paralel (5 Ω) justru **lebih kecil** dari salah satu resistornya (10 Ω) -- ini ciri khas rangkaian paralel yang sering bikin bingung.

## 📋 Ringkasan Perbandingan

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Ciri</th><th>Seri</th><th>Paralel</th></tr>
</thead>
<tbody>
<tr><td>Arus (I)</td><td>Sama di semua titik</td><td>Terbagi di tiap cabang</td></tr>
<tr><td>Tegangan (V)</td><td>Terbagi di tiap komponen</td><td>Sama di semua cabang</td></tr>
<tr><td>Hambatan Total</td><td>Rtotal = R1 + R2 + ...</td><td>1/Rtotal = 1/R1 + 1/R2 + ...</td></tr>
<tr><td>Kalau satu komponen putus</td><td>Seluruh rangkaian mati</td><td>Cabang lain tetap menyala</td></tr>
</tbody>
</table>
</div>
</div>

Inilah sebabnya **lampu-lampu di rumah dirangkai paralel, bukan seri** -- kalau satu lampu putus atau dicabut, lampu lain di ruangan lain tetap menyala normal. Coba sendiri di simulasi di bawah -- bandingkan tab "Seri Lab" dan "Paralel Lab", lihat langsung bedanya lewat animasi arus dan data.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Hambatan total selalu bertambah besar kalau ditambah komponen, baik seri maupun paralel."</strong><br>
Tidak tepat. <strong class="mtr-right">Ini cuma berlaku untuk rangkaian SERI</strong> -- pada rangkaian PARALEL, menambah cabang justru membuat hambatan total makin KECIL (karena arus punya lebih banyak "jalan pintas").
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Kalau satu lampu di rangkaian seri putus, lampu lain tetap menyala."</strong><br>
Salah. <strong class="mtr-right">Rangkaian seri cuma punya SATU jalur</strong> -- kalau ada satu komponen yang putus, seluruh rangkaian jadi terbuka dan semua lampu ikut mati.
</div>

## 🤔 Coba Pikirkan

Sebuah pohon natal punya 2 mode lampu: mode A (semua lampu seri) dan mode B (semua lampu paralel).

1. Kalau satu bohlam lampu putus, mode mana yang membuat SEMUA lampu ikut mati?
2. Menurutmu, kenapa kebanyakan lampu hias modern memilih rangkaian paralel meski butuh lebih banyak kabel?

Coba diskusikan jawabanmu dengan teman sekelas, atau buktikan sendiri lewat simulasi di atas.

<div class="mtr-cta">
<p>Setelah tuntas membahas Rangkaian Listrik, sekarang kita masuk ke bab baru: Fenomena Elektromagnetik -- dimulai dari dasar-dasar medan magnet.</p>
<a href="/materi/medan-magnet-konsep-dasar" class="btn btn-primary">🧲 Lanjut ke Medan Magnet: Konsep Dasar →</a>
</div>
