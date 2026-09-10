---
title: "Kapasitor Keping Sejajar: Menyimpan Muatan dalam Medan Listrik"
description: "Kenalan sama kapasitor -- komponen yang menyimpan muatan dan energi listrik lewat medan listrik, bukan arus yang mengalir terus. Bahas struktur keping sejajar, rumus kapasitansi C = ε₀A/d, dan faktor yang memengaruhinya."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-09
tags: ["Kapasitor", "Kapasitor Keping Sejajar", "Fisika Kelas XII", "Fase F", "Listrik Statis"]
kuis:
  - soal: "Kapasitor pada dasarnya berfungsi untuk..."
    pilihan: ["Menghasilkan muatan listrik dari nol", "Menyimpan muatan dan energi listrik dalam bentuk medan listrik", "Mengubah listrik AC menjadi DC", "Menghambat aliran arus seperti resistor"]
    jawaban: 1
    penjelasan: "Kapasitor menyimpan muatan pada dua kepingnya, sehingga tersimpan pula energi dalam medan listrik di antara keduanya -- bukan menciptakan muatan baru maupun mengubah jenis arus."
  - soal: "Kapasitansi (C) suatu kapasitor didefinisikan sebagai..."
    pilihan: ["Jumlah muatan yang tersimpan", "Beda potensial antara dua kepingnya", "Perbandingan muatan yang tersimpan terhadap beda potensial (C = Q/V)", "Luas keping dikali jaraknya"]
    jawaban: 2
    penjelasan: "C = Q/V -- kapasitansi menyatakan seberapa besar muatan yang bisa disimpan kapasitor untuk setiap satu volt beda potensial yang diberikan."
  - soal: "Sebuah kapasitor keping sejajar di udara punya luas keping 2 × 10⁻² m² dan jarak antar keping 1 mm. Berapa kapasitansinya? (ε₀ = 8,85 × 10⁻¹² C²/N·m²)"
    pilihan: ["1,77 × 10⁻¹⁰ F", "1,77 × 10⁻¹² F", "8,85 × 10⁻¹⁰ F", "1,77 × 10⁻⁸ F"]
    jawaban: 0
    penjelasan: "C = ε₀A/d = (8,85×10⁻¹²)(2×10⁻²) / (1×10⁻³) = 1,77 × 10⁻¹⁰ F."
  - soal: "Kalau jarak antar keping kapasitor keping sejajar diperbesar dua kali (luas & bahan tetap), kapasitansinya akan..."
    pilihan: ["Menjadi dua kali lebih besar", "Menjadi setengah kali (lebih kecil)", "Tidak berubah", "Menjadi empat kali lebih besar"]
    jawaban: 1
    penjelasan: "C = ε₀A/d -- C berbanding TERBALIK dengan jarak d, jadi kalau d dijadikan dua kali, C jadi setengahnya."
  - soal: "Menyisipkan bahan dielektrik (misalnya kertas atau keramik) di antara dua keping kapasitor akan membuat kapasitansinya..."
    pilihan: ["Selalu berkurang, karena menghalangi medan listrik", "Bertambah, karena konstanta dielektrik bahan (εᵣ) lebih besar dari 1", "Tidak berpengaruh sama sekali", "Berubah jadi nol"]
    jawaban: 1
    penjelasan: "C = ε₀εᵣA/d -- bahan dielektrik punya εᵣ > 1, sehingga kapasitansi justru BERTAMBAH dibanding kapasitor dengan udara/vakum di antara kepingnya (εᵣ ≈ 1)."
  - soal: "Sebuah kapasitor 4 μF dihubungkan ke sumber tegangan 12 V. Berapa muatan yang tersimpan?"
    pilihan: ["3 μC", "16 μC", "48 μC", "0,33 μC"]
    jawaban: 2
    penjelasan: "Q = CV = (4×10⁻⁶)(12) = 48 × 10⁻⁶ C = 48 μC."
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
  font-weight: 600;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
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

.mtr-diagram {
  font-family: ui-monospace, 'Courier New', monospace;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 1rem;
  margin-block: 1rem;
  line-height: 1.9;
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
</style>

## 🌱 Apersepsi

Pernah lihat lampu kilat (flash) kamera menyala sangat terang, padahal cuma sekejap dan sumber tenaganya cuma baterai kecil? Baterai itu sendiri sebenarnya tidak sanggup mendorong arus sebesar itu secara langsung -- ada komponen lain di dalam kamera yang "mengisi" energi pelan-pelan dari baterai, lalu melepaskannya sekaligus dalam waktu sangat singkat. Komponen itu bernama **kapasitor**.

## 🤔 Coba Pikirkan

Bayangkan dua keping logam sejajar, dipisahkan oleh udara, lalu dihubungkan ke kutub positif dan negatif sebuah baterai. Menurutmu, apakah arus akan terus mengalir selamanya seperti pada rangkaian lampu biasa? Atau ada saatnya arus itu berhenti, meski baterainya belum dilepas?

## 🔎 Eksplorasi Konsep

### Apa Itu Kapasitor?

Di materi [Medan Listrik](/materi/medan-listrik), kamu sudah belajar bahwa muatan listrik menciptakan medan di sekitarnya. Kapasitor adalah komponen yang memanfaatkan ide itu secara langsung: dua permukaan konduktor yang dipisahkan sedikit jarak, dipakai untuk **menyimpan** muatan listrik -- dan karena ada muatan, otomatis tersimpan juga energi dalam bentuk medan listrik di antara kedua permukaan itu.

<div class="mtr-def">
🔋 <strong>Kapasitor</strong> adalah komponen yang menyimpan muatan listrik (dan energi listrik) dalam bentuk medan listrik di antara dua konduktor yang dipisahkan oleh jarak tertentu.
</div>

Jawaban dari pertanyaan di atas: arus **tidak mengalir selamanya**. Begitu kedua keping penuh terisi muatan sampai beda potensialnya sama dengan tegangan baterai, arus berhenti -- persis seperti mengisi ember dengan air, begitu penuh, air berhenti masuk walau keran masih terbuka.

### Struktur Kapasitor Keping Sejajar

Bentuk kapasitor paling sederhana adalah dua keping konduktor identik yang disusun **sejajar**, saling berhadapan, dipisahkan jarak kecil *d*. Saat dihubungkan ke sumber tegangan, satu keping terisi muatan positif (+Q) dan keping lainnya terisi muatan negatif sama besar (−Q).

<div class="mtr-diagram">
┌─────────────┐  +Q&nbsp;&nbsp;(keping 1)<br>
│ + + + + + + │<br>
│ ↓ ↓ ↓ ↓ ↓ ↓ │&nbsp;&nbsp;medan listrik (E), arah + → −<br>
│ − − − − − − │<br>
└─────────────┘  −Q&nbsp;&nbsp;(keping 2)<br>
&larr;&mdash;&mdash; d &mdash;&mdash;&rarr;
</div>

Di antara kedua keping itu muncul medan listrik yang (hampir) seragam, mengarah dari keping positif ke keping negatif -- inilah tempat energinya "disimpan".

### Kapasitansi (C)

Setiap kapasitor punya kemampuan menyimpan muatan yang berbeda-beda, tergantung bentuk dan ukurannya. Kemampuan ini diukur lewat besaran **kapasitansi**:

<div class="mtr-formula">C = Q / V</div>

* **C** = kapasitansi, satuannya **farad (F)**
* **Q** = muatan yang tersimpan pada salah satu keping (C)
* **V** = beda potensial antara dua keping (V)

Satu farad itu sangat besar untuk ukuran sehari-hari, jadi kapasitor yang kita temui biasanya bersatuan **mikrofarad (μF)**, **nanofarad (nF)**, atau **pikofarad (pF)**.

<div class="mtr-note">
⚠️ <strong>Hati-hati miskonsepsi:</strong> <del>kapasitansi besar berarti muatan yang tersimpan pasti besar</del>. Yang benar: muatan (Q) tergantung DUA hal, yaitu kapasitansi (C) DAN tegangan yang diberikan (V) -- lewat Q = CV. Kapasitor berkapasitansi besar yang diberi tegangan kecil, bisa saja menyimpan muatan lebih sedikit dibanding kapasitor kecil yang diberi tegangan besar.
</div>

### Kapasitansi Kapasitor Keping Sejajar

Untuk kapasitor keping sejajar, kapasitansinya bisa dihitung langsung dari bentuk fisiknya:

<div class="mtr-formula">C = ε₀ A / d &nbsp;&nbsp;(di udara/vakum)</div>

* **ε₀** = permitivitas vakum ≈ 8,85 × 10⁻¹² C²/N·m²
* **A** = luas permukaan tiap keping (m²)
* **d** = jarak antar keping (m)

Kalau ruang di antara keping diisi bahan **dielektrik** (bahan isolator seperti kertas, mika, atau keramik) dengan konstanta dielektrik relatif εᵣ, rumusnya jadi:

<div class="mtr-formula">C = ε₀ εᵣ A / d</div>

Karena εᵣ bahan dielektrik selalu lebih besar dari 1 (udara/vakum ≈ 1), menyisipkan dielektrik selalu **memperbesar** kapasitansi -- ini sebabnya kapasitor komersial hampir selalu punya bahan dielektrik di dalamnya, bukan cuma udara.

<div class="mtr-table-scroll">
<table class="mtr-table">
<tr><th>Faktor</th><th>Kalau diperbesar</th><th>Efek ke kapasitansi (C)</th></tr>
<tr><td>Luas keping (A)</td><td>diperbesar</td><td>C ikut membesar (berbanding lurus)</td></tr>
<tr><td>Jarak antar keping (d)</td><td>diperbesar</td><td>C mengecil (berbanding terbalik)</td></tr>
<tr><td>Konstanta dielektrik (εᵣ)</td><td>diperbesar (bahan berbeda)</td><td>C ikut membesar (berbanding lurus)</td></tr>
</table>
</div>

### Energi yang Tersimpan

Karena kapasitor menyimpan muatan sekaligus mengalami beda potensial, ia juga menyimpan **energi listrik**:

<div class="mtr-formula">W = ½QV = ½CV²</div>

Energi inilah yang dilepaskan sekaligus dalam waktu sangat singkat pada kasus lampu kilat kamera di awal artikel ini -- makanya cahayanya bisa jauh lebih terang daripada kemampuan baterai mendorong arus secara langsung.

## 🧠 Mari Kita Analisis

Dani bilang: **"Kalau luas keping DAN jarak antar keping kapasitor sama-sama diperbesar dua kali lipat, kapasitansinya pasti ikut berubah -- entah membesar atau mengecil."**

Menurutmu, apakah pernyataan Dani ini tepat?

Coba pikirkan dulu sebelum lanjut baca. ...

Pernyataan Dani **kurang tepat**. Memang benar A yang membesar 2× akan menggandakan C, TAPI d yang membesar 2× juga akan membuat C jadi setengahnya. Dua efek itu **saling meniadakan** (2× dikali ½× = tetap 1×), sehingga kapasitansinya justru **tidak berubah** sama sekali. Ini contoh kenapa kita harus mengecek SEMUA variabel dalam rumus, bukan cuma menyimpulkan dari satu variabel yang berubah.

## 🧮 Contoh Soal

### Contoh 1 — Mencari Kapasitansi

Sebuah kapasitor keping sejajar di udara punya luas keping 4 × 10⁻² m² dan jarak antar keping 2 mm. Berapa kapasitansinya?

Diketahui: A = 4×10⁻² m², d = 2×10⁻³ m, ε₀ = 8,85×10⁻¹² C²/N·m².

<div class="mtr-formula">C = ε₀A/d = (8,85×10⁻¹²)(4×10⁻²) / (2×10⁻³) = 1,77 × 10⁻¹⁰ F</div>

### Contoh 2 — Dari Kapasitansi ke Muatan

Sebuah kapasitor 6 μF dihubungkan ke sumber tegangan 9 V. Berapa muatan yang tersimpan, dan berapa energinya?

<div class="mtr-formula">Q = CV = (6×10⁻⁶)(9) = 54 μC</div>
<div class="mtr-formula">W = ½CV² = ½(6×10⁻⁶)(9)² = 2,43 × 10⁻⁴ J</div>

### Contoh 3 — Kontekstual: Menyisipkan Dielektrik

Sebuah kapasitor keping sejajar di udara punya kapasitansi 2 pF. Kalau di antara kepingnya disisipkan bahan dielektrik dengan εᵣ = 5 (tanpa mengubah A atau d), berapa kapasitansi barunya?

<div class="mtr-formula">C_baru = εᵣ × C_awal = 5 × 2 pF = 10 pF</div>

Kapasitansinya naik 5 kali lipat -- inilah kenapa dielektrik dipakai di hampir semua kapasitor buatan pabrik, supaya ukurannya bisa dibuat lebih kecil untuk kapasitansi yang sama besar.

## 💡 Coba Pikirkan Lagi

Tadi kamu memikirkan apakah arus terus mengalir selamanya pada kapasitor yang dihubungkan ke baterai. Sekarang setelah belajar konsepnya, gimana -- jawabanmu masih sama?

Jawaban ilmiahnya: arus **berhenti** begitu kedua keping penuh terisi sampai beda potensialnya menyamai tegangan sumbernya. Kapasitor "berhenti menerima" muatan baru, tapi tetap **menyimpan** muatan dan energi yang sudah masuk -- berbeda dari resistor yang membiarkan arus terus mengalir selama ada tegangan.

## 🔥 Tantangan HOTS

Dua kapasitor keping sejajar A dan B punya luas keping dan bahan dielektrik yang identik. Satu-satunya perbedaan: jarak antar keping kapasitor B adalah **tiga kali** jarak antar keping kapasitor A. Kalau keduanya dihubungkan ke sumber tegangan yang SAMA, bandingkan **muatan** yang tersimpan pada kapasitor A dan B. Kapasitor mana yang menyimpan muatan lebih banyak, dan berapa kali lipat perbedaannya?

<div class="mtr-note">
💭 <strong>Petunjuk:</strong> cari dulu perbandingan kapasitansi C_A : C_B dari rumus C = ε₀εᵣA/d (perhatikan d yang berbeda), baru masukkan ke rumus Q = CV dengan V yang sama untuk keduanya.
</div>

## 🪞 Refleksi

✨ Coba lengkapi kalimat ini di catatanmu: **"Sekarang saya paham bahwa kapasitor itu ..."**

Atau renungkan: bagian mana yang masih terasa membingungkan -- struktur keping sejajarnya, rumus kapasitansinya, atau peran bahan dielektrik?

## 🌟 Ringkasan

* 🔋 Kapasitor menyimpan muatan dan energi listrik dalam bentuk medan listrik antara dua keping konduktor, bukan arus yang mengalir terus.
* 🔋 Kapasitansi: **C = Q/V**, satuannya farad (F) -- praktis dipakai μF, nF, atau pF.
* 🔋 Untuk kapasitor keping sejajar: **C = ε₀A/d** (udara/vakum), atau **C = ε₀εᵣA/d** kalau ada dielektrik.
* 🔋 C berbanding lurus dengan luas keping (A) dan konstanta dielektrik (εᵣ), tapi berbanding TERBALIK dengan jarak antar keping (d).
* 🔋 Energi yang tersimpan: **W = ½QV = ½CV²**.

Setelah paham satu kapasitor sendirian, materi berikutnya akan membahas apa yang terjadi kalau beberapa kapasitor dirangkai bersama, seri maupun paralel -- apakah kapasitansi totalnya bertambah atau berkurang?
