---
title: "Rangkaian Kapasitor: Seri dan Paralel"
description: "Belajar apa yang terjadi kalau beberapa kapasitor dirangkai bersama -- rumus kapasitansi total rangkaian seri dan paralel, kenapa hasilnya justru KEBALIKAN dari resistor, plus contoh soal muatan dan tegangan tiap kapasitor."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-12
tags: ["Kapasitor", "Rangkaian Kapasitor", "Fisika Kelas XII", "Fase F", "Listrik Statis"]
coverImage: /covers/rangkaian-kapasitor.svg
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/rangkaian-kapasitor.html"
  judul: "Laboratorium Maya: Rangkaian Kapasitor (Seri & Paralel)"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1150
kuis:
  - soal: "Kapasitansi total DUA kapasitor yang dirangkai PARALEL dihitung dengan..."
    pilihan: ["C_total = C1 + C2", "1/C_total = 1/C1 + 1/C2", "C_total = C1 × C2", "C_total = (C1 + C2) / 2"]
    jawaban: 0
    penjelasan: "Kapasitor paralel: kapasitansi totalnya cukup DIJUMLAHKAN langsung, C_total = C1 + C2 -- sama seperti menambah luas keping efektif."
  - soal: "Kapasitansi total DUA kapasitor yang dirangkai SERI dihitung dengan..."
    pilihan: ["C_total = C1 + C2", "1/C_total = 1/C1 + 1/C2", "C_total = C1 × C2", "C_total = C1 − C2"]
    jawaban: 1
    penjelasan: "Kapasitor seri: 1/C_total = 1/C1 + 1/C2 -- kebalikannya (resiprokal) yang dijumlahkan, sama seperti menambah jarak efektif antar keping."
  - soal: "Dua kapasitor 4 μF dan 6 μF dirangkai PARALEL. Berapa kapasitansi totalnya?"
    pilihan: ["10 μF", "2,4 μF", "24 μF", "1 μF"]
    jawaban: 0
    penjelasan: "Paralel: C_total = C1 + C2 = 4 + 6 = 10 μF."
  - soal: "Dua kapasitor 4 μF dan 6 μF dirangkai SERI. Berapa kapasitansi totalnya?"
    pilihan: ["2,4 μF", "10 μF", "24 μF", "0,42 μF"]
    jawaban: 0
    penjelasan: "Seri: 1/C_total = 1/4 + 1/6 = 3/12 + 2/12 = 5/12, jadi C_total = 12/5 = 2,4 μF (bisa juga pakai rumus cepat C1×C2/(C1+C2) = 24/10 = 2,4 μF)."
  - soal: "Kenapa kapasitansi total rangkaian SERI selalu lebih KECIL daripada kapasitor terkecil dalam rangkaian itu?"
    pilihan: ["Karena menyusun seri sama seperti menambah jarak efektif antar keping (d bertambah), sehingga C = ε₀A/d ikut mengecil", "Karena arus pada rangkaian seri selalu lebih kecil", "Karena kapasitor seri saling menetralkan muatan satu sama lain", "Karena rumus C_total = C1 + C2 selalu menghasilkan angka kecil"]
    jawaban: 0
    penjelasan: "Menyusun kapasitor seri secara efektif menambah jarak antar keping paling luar (d bertambah), dan karena C=ε₀A/d berbanding terbalik dengan d, kapasitansi totalnya justru mengecil -- lebih kecil dari kapasitor mana pun dalam rangkaian itu."
  - soal: "Pada rangkaian kapasitor PARALEL, besaran apa yang SAMA di setiap kapasitor?"
    pilihan: ["Tegangan (V)", "Muatan (Q)", "Kapasitansi (C)", "Energi (W)"]
    jawaban: 0
    penjelasan: "Paralel: setiap kapasitor terhubung langsung ke dua titik yang sama, jadi tegangan (V) di tiap kapasitor SAMA dengan tegangan sumber -- muatannya (Q) yang berbeda-beda sesuai kapasitansi masing-masing."
  - soal: "Pada rangkaian kapasitor SERI, besaran apa yang SAMA di setiap kapasitor?"
    pilihan: ["Muatan (Q)", "Tegangan (V)", "Kapasitansi (C)", "Energi (W)"]
    jawaban: 0
    penjelasan: "Seri: muatan (Q) yang tersimpan di setiap kapasitor dalam rangkaian itu SAMA besar -- tegangannya (V) yang berbeda-beda, bergantung kapasitansi masing-masing (V = Q/C)."
  - soal: "Dua kapasitor 3 μF dan 6 μF dirangkai SERI, lalu dihubungkan ke sumber tegangan 9 V. Berapa muatan (Q) yang tersimpan di MASING-MASING kapasitor?"
    pilihan: ["18 μC di keduanya (sama)", "27 μC di kapasitor 3 μF, 54 μC di kapasitor 6 μF", "9 μC dan 18 μC", "3 μC dan 6 μC"]
    jawaban: 0
    penjelasan: "C_total seri = (3×6)/(3+6) = 2 μF. Q_total = C_total × V = 2×9 = 18 μC -- dan pada rangkaian SERI, muatan ini SAMA di setiap kapasitor: 18 μC di keduanya."
  - soal: "Dua kapasitor 3 μF dan 6 μF dirangkai PARALEL, lalu dihubungkan ke sumber tegangan 9 V. Berapa muatan (Q) yang tersimpan di kapasitor 6 μF?"
    pilihan: ["54 μC", "27 μC", "18 μC", "9 μC"]
    jawaban: 0
    penjelasan: "Paralel: V di tiap kapasitor sama dengan tegangan sumber = 9 V. Q = CV = 6 μF × 9 V = 54 μC."
  - soal: "Tiga kapasitor identik, masing-masing bernilai C, dirangkai PARALEL semua. Berapa kapasitansi totalnya, dalam kelipatan C?"
    pilihan: ["3C", "C/3", "C", "9C"]
    jawaban: 0
    penjelasan: "Paralel: C_total = C + C + C = 3C."
  - soal: "Tiga kapasitor identik, masing-masing bernilai C, dirangkai SERI semua. Berapa kapasitansi totalnya, dalam kelipatan C?"
    pilihan: ["C/3", "3C", "C", "9C"]
    jawaban: 0
    penjelasan: "Seri: 1/C_total = 1/C + 1/C + 1/C = 3/C, jadi C_total = C/3."
  - soal: "Rasio kapasitansi total antara 3 kapasitor identik yang dirangkai PARALEL semua dibanding SERI semua adalah..."
    pilihan: ["9 kali lebih besar (paralel dibanding seri)", "3 kali lebih besar", "Sama saja, tidak ada bedanya", "3 kali lebih kecil"]
    jawaban: 0
    penjelasan: "Paralel menghasilkan 3C, seri menghasilkan C/3. Rasio 3C : (C/3) = 9 : 1 -- paralel menghasilkan kapasitansi 9 kali lebih besar daripada seri, untuk kapasitor identik yang sama."
  - soal: "Kenapa hasil rangkaian kapasitor terasa 'kebalikan' dari rangkaian resistor (yang dipelajari di materi Rangkaian Seri dan Paralel)?"
    pilihan: ["Karena rumus penjumlahan langsung dan resiprokal tertukar posisinya: resistor seri dijumlah langsung (makin besar), kapasitor seri malah pakai resiprokal (makin kecil) -- begitu juga sebaliknya untuk paralel", "Karena kapasitor tidak mematuhi hukum kekekalan muatan", "Karena kapasitor cuma bisa dirangkai seri, tidak bisa paralel", "Karena istilah 'seri' dan 'paralel' punya arti berbeda untuk kapasitor"]
    jawaban: 0
    penjelasan: "Resistor: R_total seri = R1+R2 (dijumlah langsung, makin besar), R_total paralel pakai resiprokal (makin kecil). Kapasitor: justru TERBALIK -- C_total seri pakai resiprokal (makin kecil), C_total paralel dijumlah langsung (makin besar)."
  - soal: "Manakah pernyataan yang BENAR tentang energi total (W) yang tersimpan pada rangkaian kapasitor?"
    pilihan: ["Energi total tetap bisa dihitung dengan W = ½C_total×V_total², asalkan C_total rangkaiannya (seri/paralel) sudah dihitung dengan benar", "Energi total selalu nol pada rangkaian seri", "Energi total tidak bisa dihitung sama sekali untuk rangkaian gabungan", "Energi total hanya berlaku untuk rangkaian paralel, tidak untuk seri"]
    jawaban: 0
    penjelasan: "Begitu C_total rangkaian (seri atau paralel) sudah diketahui, kapasitor gabungan itu bisa diperlakukan sebagai SATU kapasitor pengganti -- energi totalnya tetap W = ½C_total×V_total², sama seperti kapasitor tunggal biasa."
  - soal: "Menurut analogi C = ε₀A/d, menyusun kapasitor PARALEL itu seperti..."
    pilihan: ["Memperluas luas keping efektif (A bertambah)", "Memperjauh jarak antar keping (d bertambah)", "Mengganti bahan dielektrik jadi lebih tipis", "Tidak ada analogi yang cocok"]
    jawaban: 0
    penjelasan: "Menyusun kapasitor paralel secara efektif menambah luas keping total yang tersedia untuk menyimpan muatan (A bertambah) -- karena C berbanding lurus dengan A, kapasitansi totalnya ikut bertambah."
  - soal: "Sebuah kapasitor 5 μF dan kapasitor 20 μF dirangkai SERI. Berapa kapasitansi totalnya?"
    pilihan: ["4 μF", "25 μF", "100 μF", "15 μF"]
    jawaban: 0
    penjelasan: "C_total = (C1×C2)/(C1+C2) = (5×20)/(5+20) = 100/25 = 4 μF."
  - soal: "Sebuah kapasitor 5 μF dan kapasitor 20 μF dirangkai PARALEL. Berapa kapasitansi totalnya?"
    pilihan: ["25 μF", "4 μF", "100 μF", "15 μF"]
    jawaban: 0
    penjelasan: "Paralel: C_total = C1 + C2 = 5 + 20 = 25 μF."
  - soal: "Kalau ingin mendapatkan kapasitansi total yang BESAR dari beberapa kapasitor kecil, rangkaian apa yang harus dipilih?"
    pilihan: ["Paralel", "Seri", "Campuran acak, tidak masalah", "Tidak mungkin, kapasitansi total selalu lebih kecil dari yang terkecil"]
    jawaban: 0
    penjelasan: "Paralel selalu menghasilkan kapasitansi total yang LEBIH BESAR dari kapasitor mana pun dalam rangkaian (C_total = jumlah semua C) -- kebalikan dari seri yang selalu menghasilkan kapasitansi lebih kecil."
  - soal: "Dua kapasitor identik 8 μF dirangkai SERI, lalu dihubungkan ke tegangan 12 V. Berapa tegangan yang jatuh pada MASING-MASING kapasitor?"
    pilihan: ["6 V di keduanya (sama rata, karena kapasitansinya identik)", "12 V di keduanya", "4 V dan 8 V", "24 V di keduanya"]
    jawaban: 0
    penjelasan: "Untuk kapasitor SERI yang identik, tegangan sumber terbagi rata: V1 = V2 = V_total/2 = 12/2 = 6 V (bisa dicek: Q sama di keduanya karena C sama, jadi V=Q/C juga sama)."
draft: false
---

<style>
.mtr-def {
  border-left: 3px solid var(--gold);
  background: var(--gold-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}

.mtr-formula {
  text-align: center;
  font-size: 1.0625rem;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  color: #831843;
  background: linear-gradient(135deg, #fdf2f8, #fce7f3);
  border: 1.5px solid #f9a8d4;
  border-left: 5px solid #db2777;
  border-radius: var(--radius-sm);
  padding: 0.75rem 1.1rem;
  margin-block: 1rem;
}

.mtr-note {
  border-left: 3px solid var(--accent);
  background: var(--accent-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}

.mtr-table-scroll {
  overflow-x: auto;
  margin-block: 1.25rem;
}

.mtr-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
  min-width: 30rem;
}

.mtr-table th,
.mtr-table td {
  border: 1px solid var(--border);
  padding: 0.6rem 0.8rem;
  text-align: left;
}

.mtr-table th {
  background: var(--surface);
  font-weight: 600;
}

.mtr-ilustrasi { margin-block: 1.75rem; padding: 1.25rem; border-radius: 1rem; background: linear-gradient(135deg, #fdf2f8, #fce7f3); border: 1px solid #f9a8d4; text-align: center; }
.mtr-ilustrasi svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
.mtr-ilustrasi-caption { margin: 0.75rem 0 0; font-size: 0.875rem; color: #831843; font-weight: 600; }
</style>

## 🌱 Apersepsi

Di materi [Kapasitor Keping Sejajar](/materi/kapasitor-keping-sejajar), kamu sudah belajar satu kapasitor sendirian. Tapi kalau kamu bongkar rangkaian elektronik sungguhan (radio tua, power supply, dsb.), kapasitor jarang berdiri sendiri -- biasanya dirangkai bersama beberapa kapasitor lain, entah seri atau paralel, supaya dapat kapasitansi total yang pas dengan kebutuhan rangkaian.

Materinya mirip dengan [Rangkaian Seri dan Paralel](/materi/rangkaian-seri-dan-paralel) pada resistor yang sudah kamu pelajari -- tapi hati-hati, rumusnya justru KEBALIK! Supaya lebih kebayang, coba pakai analogi **tangki air**: kapasitansi itu ibarat "kapasitas tampung" tangki. Menyusun beberapa tangki **berdampingan (paralel)** jelas menambah total kapasitas tampung airnya -- tinggal dijumlah langsung. Tapi menyusun tangki **berurutan memanjang (seri)**, dengan pipa sempit menghubungkan satu ke yang lain, sebenarnya membuat "kapasitas efektif" air yang bisa mengalir lewat jalur itu malah mengecil, dibatasi oleh tangki yang paling kecil. Itulah kenapa pola kapasitor seri/paralel kebalikan dari resistor.

## 🤔 Coba Pikirkan

Kamu mungkin sudah tahu (atau akan segera belajar) bahwa merangkai resistor SERI membuat hambatan totalnya BERTAMBAH BESAR. Menurutmu, apakah merangkai kapasitor secara SERI juga membuat kapasitansi totalnya bertambah besar, dengan pola yang sama?

## 🔎 Eksplorasi Konsep

### Rangkaian Paralel

Pada rangkaian **paralel**, setiap kapasitor dihubungkan pada dua titik (node) yang sama, sehingga setiap kapasitor mengalami tegangan yang sama persis dengan tegangan sumbernya.

<div class="mtr-diagram" style="font-family: ui-monospace, 'Courier New', monospace; text-align: center; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1rem; margin-block: 1rem; line-height: 1.9; font-size: 0.9375rem;">
&nbsp;&nbsp;┌──┤├──┐&nbsp;&nbsp;(C1)<br>
──┤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──<br>
&nbsp;&nbsp;└──┤├──┘&nbsp;&nbsp;(C2)
</div>

<div class="mtr-def">
🔋 <strong>Kapasitansi total rangkaian paralel</strong> dihitung dengan menjumlahkan langsung: <strong>C_total = C1 + C2 + C3 + ...</strong> -- selalu LEBIH BESAR daripada kapasitor mana pun dalam rangkaian itu.
</div>

Karena setiap kapasitor mengalami tegangan (V) yang sama, tapi kapasitansinya (C) berbeda-beda, muatan (Q) yang tersimpan di tiap kapasitor ikut berbeda sesuai Q = CV masing-masing. Muatan total rangkaian adalah jumlah muatan di semua kapasitor: Q_total = Q1 + Q2 + ...

### Rangkaian Seri

Pada rangkaian **seri**, kapasitor disusun berurutan dalam satu jalur, ujung ke ujung.

<div class="mtr-diagram" style="font-family: ui-monospace, 'Courier New', monospace; text-align: center; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1rem; margin-block: 1rem; line-height: 1.9; font-size: 0.9375rem;">
──┤├────┤├──<br>
&nbsp;&nbsp;C1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C2
</div>

<div class="mtr-def">
🔋 <strong>Kapasitansi total rangkaian seri</strong> dihitung lewat resiprokal (kebalikan): <strong>1/C_total = 1/C1 + 1/C2 + ...</strong> -- selalu LEBIH KECIL daripada kapasitor mana pun dalam rangkaian itu.
</div>

Pada rangkaian seri, muatan (Q) yang tersimpan di SETIAP kapasitor justru SAMA besar (proses pengisiannya berantai lewat induksi), sedangkan tegangan (V) di tiap kapasitor berbeda-beda sesuai V = Q/C masing-masing. Jumlah tegangan semua kapasitor sama dengan tegangan sumber: V_total = V1 + V2 + ...

<div class="mtr-ilustrasi">
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
    <text x="200" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#831843">Seri</text>
    <line x1="40" y1="60" x2="150" y2="60" stroke="#26243b" stroke-width="3"/>
    <line x1="150" y1="40" x2="150" y2="80" stroke="#ef4444" stroke-width="5"/>
    <line x1="165" y1="40" x2="165" y2="80" stroke="#3b82f6" stroke-width="5"/>
    <line x1="165" y1="60" x2="235" y2="60" stroke="#26243b" stroke-width="3"/>
    <line x1="235" y1="40" x2="235" y2="80" stroke="#ef4444" stroke-width="5"/>
    <line x1="250" y1="40" x2="250" y2="80" stroke="#3b82f6" stroke-width="5"/>
    <line x1="250" y1="60" x2="360" y2="60" stroke="#26243b" stroke-width="3"/>
    <text x="157" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="#831843">C1</text>
    <text x="242" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="#831843">C2</text>
    <text x="200" y="135" text-anchor="middle" font-size="14" font-weight="700" fill="#831843">Paralel</text>
    <line x1="40" y1="175" x2="90" y2="175" stroke="#26243b" stroke-width="3"/>
    <line x1="90" y1="150" x2="90" y2="200" stroke="#26243b" stroke-width="3"/>
    <line x1="310" y1="150" x2="310" y2="200" stroke="#26243b" stroke-width="3"/>
    <line x1="310" y1="175" x2="360" y2="175" stroke="#26243b" stroke-width="3"/>
    <line x1="90" y1="155" x2="200" y2="155" stroke="#26243b" stroke-width="3"/>
    <line x1="195" y1="140" x2="195" y2="170" stroke="#ef4444" stroke-width="5"/>
    <line x1="210" y1="140" x2="210" y2="170" stroke="#3b82f6" stroke-width="5"/>
    <line x1="210" y1="155" x2="310" y2="155" stroke="#26243b" stroke-width="3"/>
    <line x1="90" y1="195" x2="200" y2="195" stroke="#26243b" stroke-width="3"/>
    <line x1="195" y1="180" x2="195" y2="210" stroke="#ef4444" stroke-width="5"/>
    <line x1="210" y1="180" x2="210" y2="210" stroke="#3b82f6" stroke-width="5"/>
    <line x1="210" y1="195" x2="310" y2="195" stroke="#26243b" stroke-width="3"/>
  </svg>
  <p class="mtr-ilustrasi-caption">Simbol kapasitor dirangkai seri (satu jalur) dan paralel (berdampingan) -- rumus kapasitansi totalnya kebalikan satu sama lain.</p>
</div>

<div class="mtr-note">
⚠️ <strong>Kebalikan dari resistor!</strong> Kalau nanti kamu belajar rangkaian resistor, kamu akan lihat pola yang justru TERBALIK: resistor seri dijumlah langsung (R_total = R1+R2, makin besar), sementara resistor paralel yang pakai resiprokal (makin kecil). Kapasitor persis kebalikannya. Jangan sampai tertukar!
</div>

### Kenapa Bisa Terbalik? (Analogi C = ε₀A/d)

Ingat rumus kapasitansi keping sejajar dari materi sebelumnya: C = ε₀A/d. Menyusun kapasitor **paralel** secara efektif menambah luas keping total yang tersedia (A bertambah) -- makanya kapasitansinya ikut bertambah. Menyusun kapasitor **seri** secara efektif menambah jarak total antar keping paling luar (d bertambah) -- makanya kapasitansinya justru berkurang.

<div class="mtr-table-scroll">
<table class="mtr-table">
<tr><th>Rangkaian</th><th>Kapasitansi Total</th><th>Tegangan (V)</th><th>Muatan (Q)</th></tr>
<tr><td>Paralel</td><td>C_total = C1+C2+... (membesar)</td><td>Sama di tiap kapasitor</td><td>Berbeda-beda (Q=CV)</td></tr>
<tr><td>Seri</td><td>1/C_total = 1/C1+1/C2+... (mengecil)</td><td>Berbeda-beda (V=Q/C)</td><td>Sama di tiap kapasitor</td></tr>
</table>
</div>

## 🧠 Mari Kita Analisis

Rani bilang: **"Kapasitor itu sama aja kayak resistor -- kalau dirangkai seri, kapasitansi totalnya pasti bertambah besar."**

Menurutmu, apakah pernyataan Rani ini tepat?

Coba pikirkan dulu sebelum lanjut baca. ...

Pernyataan Rani **keliru**. Untuk KAPASITOR, rangkaian seri justru membuat kapasitansi total MENGECIL (lebih kecil dari kapasitor mana pun di rangkaian itu), bukan bertambah. Yang bertambah lewat penjumlahan langsung justru rangkaian PARALEL. Ini persis kebalikan dari pola resistor -- jangan disamakan begitu saja hanya karena istilahnya sama ("seri"/"paralel").

## 🧮 Contoh Soal

### Contoh 1 — Paralel

Dua kapasitor, 2 μF dan 3 μF, dirangkai paralel. Berapa kapasitansi totalnya?

<div class="mtr-formula">C_total = C1 + C2 = 2 + 3 = 5 μF</div>

### Contoh 2 — Seri

Dua kapasitor yang sama, 2 μF dan 3 μF, dirangkai seri. Berapa kapasitansi totalnya?

<div class="mtr-formula">1/C_total = 1/2 + 1/3 = 3/6 + 2/6 = 5/6 &nbsp;&rarr;&nbsp; C_total = 6/5 = 1,2 μF</div>

### Contoh 3 — Kontekstual: Muatan dan Tegangan pada Rangkaian Seri

Dua kapasitor, 4 μF dan 12 μF, dirangkai seri lalu dihubungkan ke sumber tegangan 12 V. Berapa muatan (Q) yang tersimpan, dan berapa tegangan (V) pada masing-masing kapasitor?

<div class="mtr-formula">C_total = (4×12)/(4+12) = 48/16 = 3 μF</div>
<div class="mtr-formula">Q = C_total × V = 3 × 12 = 36 μC &nbsp;(sama di kedua kapasitor, karena seri)</div>
<div class="mtr-formula">V1 = Q/C1 = 36/4 = 9 V &nbsp;&nbsp;|&nbsp;&nbsp; V2 = Q/C2 = 36/12 = 3 V &nbsp;(9+3 = 12 V ✓)</div>

## 💡 Coba Pikirkan Lagi

Tadi kamu menebak apakah kapasitor seri membuat kapasitansi total bertambah, sama seperti resistor. Sekarang setelah belajar konsepnya, gimana -- jawabanmu masih sama?

Jawaban ilmiahnya: **tidak** -- kapasitor seri justru membuat kapasitansi total MENGECIL, kebalikan dari resistor seri yang membuat hambatan total membesar.

## 🔥 Tantangan HOTS

Tiga kapasitor identik, masing-masing bernilai C, tersedia di mejamu. Bandingkan kapasitansi total yang kamu dapat kalau ketiganya dirangkai PARALEL semua, dengan kapasitansi total kalau ketiganya dirangkai SERI semua. Berapa kali lipat perbedaannya?

<div class="mtr-note">
💭 <strong>Petunjuk:</strong> hitung dulu C_total paralel (jumlah langsung) dan C_total seri (resiprokal) dalam bentuk kelipatan C, baru bandingkan rasio keduanya.
</div>

## 🪞 Refleksi

✨ Coba lengkapi kalimat ini di catatanmu: **"Sekarang saya paham bahwa rangkaian kapasitor itu ..."**

Atau renungkan: bagian mana yang masih terasa membingungkan -- kenapa hasilnya kebalikan dari resistor, atau cara menghitung muatan/tegangan pada rangkaian seri?

## 🌟 Ringkasan

* 🔋 Kapasitor **paralel**: C_total = C1+C2+... (dijumlah langsung, MEMBESAR), tegangan sama di tiap kapasitor, muatan berbeda-beda.
* 🔋 Kapasitor **seri**: 1/C_total = 1/C1+1/C2+... (resiprokal, MENGECIL), muatan sama di tiap kapasitor, tegangan berbeda-beda.
* 🔋 Pola ini KEBALIKAN dari resistor seri/paralel -- jangan tertukar.
* 🔋 Analoginya lewat C=ε₀A/d: paralel = menambah luas efektif (A naik), seri = menambah jarak efektif (d naik).

