---
title: "Efek Fotolistrik dan Dualisme Gelombang-Partikel Cahaya"
description: "Kenapa cahaya kadang berperilaku seperti gelombang, kadang seperti partikel? Bahas efek fotolistrik, konsep foton, dan dualisme gelombang-partikel, lengkap simulasi interaktif."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Efek Fotolistrik", "Dualisme Gelombang-Partikel", "Foton", "Fisika Modern", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/efek-fotolistrik.html"
  judul: "Laboratorium Maya: Efek Fotolistrik"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1150
kuis:
  - soal: "Efek fotolistrik adalah peristiwa..."
    pilihan: ["Terlepasnya elektron dari permukaan logam saat disinari cahaya", "Terpantulnya cahaya dari permukaan cermin", "Terbentuknya bayangan di layar", "Berubahnya arah cahaya saat melewati air"]
    jawaban: 0
    penjelasan: "Efek fotolistrik adalah terlepasnya elektron dari permukaan logam ketika disinari cahaya dengan frekuensi yang cukup tinggi."
  - soal: "Yang menentukan bisa/tidaknya elektron terlepas dari logam adalah..."
    pilihan: ["Frekuensi cahaya (energi per foton), bukan intensitasnya", "Intensitas cahaya, bukan frekuensinya", "Warna baju yang dipakai pengamat", "Suhu ruangan"]
    jawaban: 0
    penjelasan: "Energi satu foton (E=hf) harus melebihi fungsi kerja logam (W₀) -- ini bergantung FREKUENSI, bukan intensitas."
  - soal: "Menaikkan intensitas cahaya (pada frekuensi tetap) akan..."
    pilihan: ["Menambah JUMLAH elektron yang terlepas per detik, bukan energi tiap elektron", "Menambah energi kinetik tiap elektron yang terlepas", "Membuat elektron terlepas lebih lambat", "Tidak berpengaruh sama sekali"]
    jawaban: 0
    penjelasan: "Intensitas = jumlah foton per detik. Lebih banyak foton = lebih banyak elektron terlepas, tapi energi tiap elektron tetap ditentukan frekuensi cahayanya."
  - soal: "Einstein menjelaskan efek fotolistrik dengan mengusulkan bahwa cahaya terdiri dari..."
    pilihan: ["Paket-paket energi diskrit yang disebut foton", "Partikel padat yang selalu bergerak lurus", "Gelombang mekanik yang butuh medium", "Medan gravitasi yang berosilasi"]
    jawaban: 0
    penjelasan: "Einstein (1905) mengusulkan cahaya terdiri dari foton, paket energi diskrit sebesar E=hf -- penjelasan inilah yang mengantarkannya meraih Nobel Fisika 1921."
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

Sepanjang bab ini kita sudah membahas relativitas khusus -- konsekuensi aneh yang terjadi kalau BENDA bergerak sangat cepat. Sekarang kita pindah ke topik lain yang sama anehnya, tapi soal CAHAYA: ternyata cahaya sendiri punya kepribadian ganda, kadang berperilaku seperti gelombang, kadang seperti aliran partikel kecil. Fenomena yang membongkar rahasia ini disebut **efek fotolistrik**, dan penjelasannya oleh Einstein-lah (bukan teori relativitasnya!) yang justru mengantarkannya meraih Hadiah Nobel Fisika 1921 -- seperti sempat disinggung di materi [Teori Relativitas Khusus](/materi/teori-relativitas-khusus).

## 🌊 Cahaya Sebagai Gelombang: Bukti yang Sudah Mapan

Sebelum abad ke-20, fisikawan sudah cukup yakin cahaya adalah gelombang -- dibuktikan lewat gejala **interferensi** dan **difraksi** cahaya (pola terang-gelap yang cuma bisa dijelaskan kalau cahaya adalah gelombang yang saling menguatkan/melemahkan). Materi [Spektrum Elektromagnetik](/materi/spektrum-elektromagnetik) juga sudah menegaskan cahaya adalah gelombang elektromagnetik, dengan panjang gelombang dan frekuensi tertentu. Sejauh ini semua konsisten dengan teori gelombang klasik.

## ⚡ Efek Fotolistrik: Fenomena yang Membingungkan

Di tahun 1887, Heinrich Hertz (fisikawan yang sama yang membuktikan keberadaan gelombang radio -- baca lagi materi Spektrum Elektromagnetik) tanpa sengaja menemukan sesuatu yang aneh: kalau permukaan logam disinari cahaya dengan frekuensi cukup tinggi (biasanya ultraviolet), **elektron bisa terlepas keluar dari permukaan logam itu**. Fenomena inilah yang disebut **efek fotolistrik**.

Masalahnya, ada tiga hal aneh yang SAMA SEKALI tidak bisa dijelaskan teori gelombang klasik:

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">🚧</span><h4>Ada Frekuensi Ambang</h4><p>Di bawah frekuensi tertentu, TIDAK ADA elektron yang terlepas -- walau intensitas cahaya dibesarkan berkali-kali lipat. Teori gelombang klasik memprediksi cahaya seterang apa pun seharusnya bisa "mengumpulkan" cukup energi, asal ditunggu cukup lama.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">⚡</span><h4>Terlepas SEKETIKA</h4><p>Begitu frekuensinya cukup, elektron langsung terlepas TANPA jeda waktu -- bahkan pada intensitas sangat rendah. Klasik memprediksi butuh waktu untuk "mengisi" energi elektron sampai cukup untuk lepas.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🎯</span><h4>Energi Bergantung Frekuensi</h4><p>Energi kinetik elektron yang terlepas ternyata bergantung pada FREKUENSI cahaya, bukan intensitasnya. Menaikkan intensitas cuma menambah JUMLAH elektron yang terlepas, bukan energi masing-masing.</p></div>
</div>
</div>

## 💡 Penjelasan Einstein: Foton

Tahun 1905 (tahun yang sama dengan makalah relativitas khususnya!), Einstein mengusulkan ide radikal: **cahaya tidak merambat sebagai gelombang kontinu, melainkan sebagai paket-paket energi diskrit** yang disebut **foton**. Setiap foton membawa energi sebesar:

<div class="mtr-formula">E = h × f = hc/λ</div>

dengan:

* **E** = energi satu foton (Joule, atau elektronvolt/eV untuk skala atomik)
* **h** = konstanta Planck ≈ 6,626×10⁻³⁴ J·s (atau ≈ 4,136×10⁻¹⁵ eV·s)
* **f** = frekuensi cahaya (Hz)
* **λ** = panjang gelombang cahaya (m), dengan **c = λf**

Dalam efek fotolistrik, **satu foton berinteraksi dengan satu elektron sekaligus** -- bukan energi yang terkumpul pelan-pelan dari banyak gelombang. Kalau energi foton itu (hf) lebih besar dari **fungsi kerja (W₀)** logam -- energi minimum yang dibutuhkan elektron untuk lepas dari ikatan logamnya -- elektron langsung terlepas SEKETIKA, dengan sisa energinya menjadi energi kinetik:

<div class="mtr-formula">Eₖ maks = h×f − W₀</div>

Persamaan inilah yang disebut **Persamaan Fotolistrik Einstein**. Perhatikan bagaimana ini menjawab TIGA keanehan di atas sekaligus:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Keanehan</th><th>Penjelasan lewat konsep foton</th></tr></thead>
<tbody>
<tr><td>Ada frekuensi ambang</td><td>Kalau energi SATU foton (hf) sudah kurang dari W₀, berapa banyak pun foton yang datang (intensitas tinggi), tidak akan ada yang cukup energinya sendirian untuk melepaskan elektron</td></tr>
<tr><td>Terlepas seketika</td><td>Satu foton langsung menyerahkan SELURUH energinya ke satu elektron sekaligus, tidak perlu waktu "mengisi" energi sedikit demi sedikit</td></tr>
<tr><td>Energi bergantung frekuensi</td><td>Eₖ maks = hf − W₀ jelas cuma bergantung pada f (lewat energi foton), bukan pada jumlah foton (intensitas)</td></tr>
</tbody>
</table>
</div>
</div>

**Frekuensi ambang (f₀)** sendiri adalah frekuensi minimum yang energi fotonnya PERSIS sama dengan W₀ (Eₖ maks = 0), dihitung dari **f₀ = W₀/h**.

## ✏️ Contoh Soal

**Soal:** Sebuah logam natrium punya fungsi kerja W₀ = 2,3 eV. Kalau disinari cahaya ungu dengan panjang gelombang 400 nm, berapa energi kinetik maksimum elektron yang terlepas? (gunakan pendekatan hc ≈ 1240 eV·nm)

**Pembahasan:**

<div class="mtr-formula">E = hc/λ = 1240/400 = 3,1 eV</div>
<div class="mtr-formula">Eₖ maks = E − W₀ = 3,1 − 2,3 = 0,8 eV</div>

Karena energi foton (3,1 eV) lebih besar dari fungsi kerja (2,3 eV), elektron terlepas dengan energi kinetik maksimum 0,8 eV. Coba ganti-ganti logam dan panjang gelombangnya sendiri di simulasi di bawah untuk melihat kapan elektronnya terlepas dan kapan tidak.

## 🌗 Dualisme Gelombang-Partikel

Di sinilah letak keanehan terbesarnya: efek fotolistrik membuktikan cahaya berperilaku seperti PARTIKEL (foton, paket energi diskrit yang mengenai satu elektron sekaligus) -- tapi interferensi dan difraksi cahaya tetap membuktikan cahaya berperilaku seperti GELOMBANG. Keduanya sama-sama benar, tergantung eksperimen apa yang dilakukan.

<div class="mtr-def">
💡 <strong>Dualisme Gelombang-Partikel</strong>: cahaya (dan, seperti akan kamu pelajari lebih lanjut, semua materi) memiliki sifat gelombang SEKALIGUS sifat partikel. Bukan "kadang gelombang, kadang partikel" secara terpisah -- keduanya adalah cara berbeda untuk mendeskripsikan hal yang sama, dan aspek mana yang "terlihat" tergantung jenis eksperimen yang dilakukan untuk mengamatinya.
</div>

Fisikawan Perancis Louis de Broglie kemudian melangkah lebih jauh di tahun 1924: kalau cahaya (biasanya dianggap gelombang) bisa berperilaku seperti partikel, mungkinkah partikel materi (seperti elektron, biasanya dianggap partikel) juga bisa berperilaku seperti gelombang? Hipotesisnya terbukti benar -- setiap partikel bermomentum p ternyata punya **panjang gelombang de Broglie**, λ = h/p, dan ini sudah dibuktikan lewat eksperimen difraksi elektron. Dualisme gelombang-partikel ternyata berlaku UNIVERSAL, bukan cuma untuk cahaya.

## 🔬 Aplikasi Efek Fotolistrik

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">☀️</span><h4>Sel Surya</h4><p>Panel surya memanfaatkan prinsip serupa (efek fotovoltaik) untuk mengubah energi foton cahaya matahari langsung menjadi energi listrik.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">📡</span><h4>Sensor Cahaya</h4><p>Detektor cahaya otomatis (mis. lampu jalan yang menyala sendiri saat gelap) memanfaatkan perubahan sifat listrik akibat cahaya yang mengenai bahan tertentu.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🔭</span><h4>Tabung Penggandaan Foton</h4><p>Photomultiplier tube, dipakai di teleskop dan detektor radiasi, memanfaatkan efek fotolistrik untuk mendeteksi cahaya dalam jumlah sangat sedikit (bahkan satu foton saja).</p></div>
</div>
</div>

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Cahaya yang lebih terang (intensitas tinggi) pasti bisa melepaskan elektron dari logam mana pun, asal cukup terang."</strong><br>
Tidak tepat. <strong class="mtr-right">Intensitas setinggi apa pun TIDAK BISA menggantikan kekurangan frekuensi.</strong> Kalau frekuensi cahaya di bawah frekuensi ambang logam itu (energi satu foton lebih kecil dari fungsi kerjanya), tidak akan ada elektron yang terlepas -- berapa pun banyaknya foton yang menghantam permukaan logam per detik. Ini persis kebalikan dari intuisi "gelombang" klasik, dan jadi bukti kuat sifat partikel cahaya.
</div>

## 🤔 Coba Pikirkan

1. Logam platina punya fungsi kerja sangat tinggi (6,35 eV), jauh lebih tinggi dari natrium (2,3 eV). Menurutmu, kenapa logam dengan fungsi kerja tinggi seperti ini butuh cahaya ultraviolet (bukan cahaya tampak biasa) untuk menghasilkan efek fotolistrik?
2. Kalau energi foton PERSIS sama dengan fungsi kerja logam (E = W₀), berapa energi kinetik maksimum elektron yang terlepas? Apa artinya secara fisis?

Coba diskusikan jawabanmu dengan teman sekelas, atau buktikan sendiri lewat simulasi di atas.

<div class="mtr-cta">
<p>Sudah paham dualisme gelombang-partikel cahaya? Materi Fisika Modern lainnya bisa kamu jelajahi lewat halaman Materi.</p>
<a href="/materi" class="btn btn-primary">📚 Lihat Semua Materi →</a>
</div>
