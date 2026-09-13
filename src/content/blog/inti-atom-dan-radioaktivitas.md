---
title: "Inti Atom dan Radioaktivitas"
description: "Struktur inti atom, energi ikat inti, tiga jenis peluruhan radioaktif (alfa, beta, gamma), hukum peluruhan dan waktu paruh, lengkap simulasi interaktif."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Inti Atom", "Radioaktivitas", "Waktu Paruh", "Fisika Modern", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/peluruhan-radioaktif.html"
  judul: "Laboratorium Maya: Peluruhan Radioaktif"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1100
kuis:
  - soal: "Inti atom tersusun dari..."
    pilihan: ["Proton dan neutron", "Proton dan elektron", "Neutron dan elektron", "Hanya elektron"]
    jawaban: 0
    penjelasan: "Inti atom (nukleus) tersusun dari proton dan neutron (disebut nukleon); elektron mengelilingi inti, bukan bagian dari inti."
  - soal: "Peluruhan yang TIDAK mengubah nomor atom (Z) maupun nomor massa (A) suatu inti adalah peluruhan..."
    pilihan: ["Gamma (γ)", "Alfa (α)", "Beta (β)", "Semua jenis peluruhan mengubah Z dan A"]
    jawaban: 0
    penjelasan: "Peluruhan gamma cuma memancarkan foton berenergi tinggi dari inti yang tereksitasi -- tidak ada partikel bermassa yang keluar, jadi Z dan A tetap."
  - soal: "Waktu paruh (T½) adalah..."
    pilihan: ["Waktu yang dibutuhkan setengah dari jumlah inti radioaktif untuk meluruh", "Waktu sampai semua inti radioaktif habis meluruh", "Waktu yang dibutuhkan inti untuk terbentuk", "Waktu paruh selalu sama untuk semua isotop"]
    jawaban: 0
    penjelasan: "Waktu paruh adalah waktu yang dibutuhkan agar jumlah inti radioaktif tersisa tinggal setengah dari jumlah semula -- berbeda-beda untuk tiap isotop."
  - soal: "Setelah 2 kali waktu paruh berlalu, persentase inti radioaktif yang TERSISA adalah..."
    pilihan: ["25%", "50%", "0%", "75%"]
    jawaban: 0
    penjelasan: "Setelah 1×T½ tersisa 50%, setelah 2×T½ tersisa setengah dari 50% = 25%."
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

Kita sudah membahas cahaya yang berkepribadian ganda ([Efek Fotolistrik](/materi/efek-fotolistrik-dan-dualisme-gelombang-partikel)) dan benda yang berperilaku aneh mendekati kecepatan cahaya ([Relativitas Khusus](/materi/teori-relativitas-khusus)). Sekarang kita masuk ke jantung materi itu sendiri: **inti atom** -- struktur mungil yang jadi sumber salah satu energi terbesar yang bisa dihasilkan manusia, sekaligus sumber sinar gamma yang sudah kita singgung di materi [Spektrum Elektromagnetik](/materi/spektrum-elektromagnetik).

## ⚛️ Struktur Inti Atom

Setiap atom punya inti (nukleus) di pusatnya, tersusun dari dua jenis partikel yang disebut **nukleon**:

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">➕</span><h4>Proton</h4><p>Bermuatan POSITIF. Jumlahnya disebut NOMOR ATOM (Z), menentukan jenis unsur (mis. semua atom dengan 6 proton pasti karbon).</p></div>
<div class="mtr-card"><span class="mtr-card-icon">⚪</span><h4>Neutron</h4><p>TIDAK bermuatan (netral). Jumlah proton+neutron disebut NOMOR MASSA (A).</p></div>
</div>
</div>

Sebuah inti atom dituliskan dengan notasi <strong>ᴬ<sub>Z</sub>X</strong>, dengan X adalah lambang unsur. Contoh: karbon-14 ditulis ¹⁴₆C -- artinya nomor massa A=14, nomor atom Z=6 (6 proton), sehingga jumlah neutronnya = A−Z = 14−6 = 8.

<div class="mtr-def">
💡 <strong>Isotop</strong> adalah atom-atom dari unsur yang SAMA (Z sama) tapi jumlah neutronnya BERBEDA (A berbeda). Karbon-12 (¹²₆C, stabil) dan Karbon-14 (¹⁴₆C, radioaktif) adalah isotop -- sama-sama karbon (6 proton), tapi Karbon-14 punya 2 neutron ekstra yang membuatnya tidak stabil.
</div>

## 💪 Gaya Inti dan Energi Ikat

Ini pertanyaan yang mungkin belum pernah kamu pikirkan: proton-proton di dalam inti sama-sama bermuatan POSITIF, jadi menurut Hukum Coulomb yang sudah kamu pelajari, mereka seharusnya saling TOLAK dengan sangat kuat (jaraknya sangat dekat!). Kenapa inti atom tidak langsung berantakan?

Jawabannya: ada **gaya inti (gaya nuklir kuat)** yang bekerja di jarak sangat pendek (skala inti atom), jauh lebih kuat dari gaya Coulomb pada jarak sedekat itu, dan menarik semua nukleon (proton MAUPUN neutron) agar tetap menyatu.

Menariknya, massa sebuah inti atom ternyata SEDIKIT LEBIH KECIL dibanding jumlah massa proton dan neutron penyusunnya secara terpisah. Selisih ini disebut **defek massa (Δm)**, dan "massa yang hilang" ini sebenarnya berubah menjadi **energi ikat inti** yang menahan nukleon-nukleon tetap menyatu -- persis seperti rumus **E=mc²** yang sudah kita kenal dari materi [Teori Relativitas Khusus](/materi/teori-relativitas-khusus)!

<div class="mtr-formula">Δm = (Z×mₚ + N×mₙ) − mᵢₙₜᵢ &nbsp;&nbsp;|&nbsp;&nbsp; Eᵢₖₐₜ = Δm × c²</div>

**Contoh:** Inti Helium-4 (²p+2n) tersusun dari 2 proton (mₚ≈1,0078 sma) dan 2 neutron (mₙ≈1,0087 sma), tapi massa inti He-4 yang terukur cuma 4,0026 sma. Maka:

<div class="mtr-formula">Δm = (2×1,0078 + 2×1,0087) − 4,0026 = 4,0330 − 4,0026 = 0,0304 sma</div>
<div class="mtr-formula">Eᵢₖₐₜ = 0,0304 × 931 MeV = 28,3 MeV</div>

(1 sma ≈ 931 MeV/c² -- satuan energi yang lebih praktis dipakai di skala inti atom dibanding Joule). Energi 28,3 MeV inilah yang harus "dibayar" kalau ingin memisahkan kembali inti Helium-4 jadi 2 proton dan 2 neutron terpisah -- semakin besar energi ikat per nukleon suatu inti, semakin stabil inti itu.

## ☢️ Radioaktivitas: Inti yang Tidak Stabil

Tidak semua inti atom stabil. Inti yang PROTON-NEUTRON-nya tidak seimbang (biasanya terlalu banyak neutron, atau inti yang terlalu besar) cenderung tidak stabil, dan akan meluruh secara SPONTAN memancarkan radiasi sampai mencapai konfigurasi yang lebih stabil. Fenomena inilah yang disebut **radioaktivitas**, ditemukan pertama kali oleh Henri Becquerel tahun 1896.

Ada tiga jenis peluruhan radioaktif utama:

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead><tr><th>Jenis</th><th>Yang Dipancarkan</th><th>Perubahan pada Inti</th><th>Daya Tembus</th></tr></thead>
<tbody>
<tr><td>Alfa (α)</td><td>Partikel alfa (inti Helium, 2p+2n)</td><td>A berkurang 4, Z berkurang 2</td><td>Paling lemah -- dihalangi selembar kertas</td></tr>
<tr><td>Beta (β)</td><td>Elektron (β⁻) atau positron (β⁺)</td><td>A tetap, Z berubah ±1</td><td>Sedang -- dihalangi lempeng aluminium tipis</td></tr>
<tr><td>Gamma (γ)</td><td>Foton berenergi sangat tinggi</td><td>A dan Z TIDAK berubah</td><td>Paling kuat -- perlu beton/timbal tebal untuk menghalangi</td></tr>
</tbody>
</table>
</div>
</div>

Perhatikan pola pentingnya: peluruhan gamma TIDAK mengubah jenis unsurnya sama sekali (Z tetap) -- ini terjadi saat inti sudah dalam konfigurasi proton-neutron yang benar tapi masih dalam keadaan "tereksitasi" (kelebihan energi), lalu melepaskan energi ekstra itu sebagai foton gamma untuk kembali ke keadaan dasar. Ini mirip seperti elektron yang berpindah tingkat energi dan memancarkan foton, tapi terjadi di dalam INTI, bukan di kulit elektron.

## 📉 Hukum Peluruhan Radioaktif dan Waktu Paruh

Kamu tidak bisa memprediksi KAPAN PERSIS satu inti radioaktif tertentu akan meluruh -- ini murni proses acak (probabilistik). Tapi untuk sekumpulan BESAR inti radioaktif, polanya sangat bisa diprediksi secara statistik, mengikuti hukum peluruhan eksponensial:

<div class="mtr-formula">N = N₀ × (1/2)^(t/T½)</div>

dengan:

* **N** = jumlah inti radioaktif yang tersisa setelah waktu t
* **N₀** = jumlah inti radioaktif mula-mula
* **T½** = waktu paruh (*half-life*) -- waktu yang dibutuhkan agar jumlah inti tersisa tinggal SETENGAH dari sebelumnya
* **t** = waktu yang sudah berlalu

Setiap isotop punya waktu paruh sendiri-sendiri -- ada yang hanya beberapa detik, ada yang miliaran tahun -- tapi POLA peluruhannya selalu sama: setiap kali berlalu satu T½, sisa inti radioaktif selalu berkurang jadi setengahnya, TIDAK PEDULI berapa jumlah awalnya.

## ✏️ Contoh Soal

**Soal 1:** Sebuah sampel Iodin-131 (dipakai di kedokteran nuklir, T½=8 hari) awalnya bermassa 80 gram. Berapa massa yang tersisa setelah 24 hari?

**Pembahasan:** 24 hari = 24/8 = 3 kali waktu paruh.

<div class="mtr-formula">N = 80 × (1/2)³ = 80 × 1/8 = 10 gram</div>

**Soal 2 (Penanggalan Karbon):** Sebuah fosil purba mengandung Karbon-14 (T½=5.730 tahun) sebanyak 25% dibanding kadar C-14 pada organisme hidup sezamannya. Berapa perkiraan umur fosil itu?

**Pembahasan:** 25% = 1/4 = (1/2)², berarti sudah berlalu 2 kali waktu paruh.

<div class="mtr-formula">Umur fosil = 2 × 5.730 = 11.460 tahun</div>

Inilah prinsip di balik **penanggalan karbon (carbon dating)** yang dipakai arkeolog untuk memperkirakan umur fosil/artefak purba -- coba jelajahi sendiri berbagai isotop dan waktunya di simulasi bawah.

## 🔬 Aplikasi Radioaktivitas

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">⚡</span><h4>PLTN</h4><p>Pembangkit Listrik Tenaga Nuklir memanfaatkan reaksi fisi (pembelahan) inti atom berat (mis. Uranium-235) untuk menghasilkan panas, yang kemudian memutar turbin generator.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🏥</span><h4>Kedokteran Nuklir</h4><p>Iodin-131 dan Teknesium-99m dipakai untuk diagnosis (pencitraan organ) maupun terapi (mis. terapi kanker tiroid), memanfaatkan radiasi untuk melacak atau menghancurkan sel tertentu.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🦴</span><h4>Penanggalan Karbon</h4><p>Karbon-14 dipakai arkeolog untuk memperkirakan umur fosil/artefak organik purba, memanfaatkan waktu paruhnya yang panjang (5.730 tahun).</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🚨</span><h4>Detektor Asap</h4><p>Sebagian detektor asap memakai sedikit Americium-241 untuk mengionisasi udara di dalamnya -- asap yang masuk mengganggu aliran ion ini, memicu alarm.</p></div>
</div>
</div>

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Setelah 2 kali waktu paruh, semua inti radioaktifnya sudah habis meluruh (0% tersisa)."</strong><br>
Tidak tepat. <strong class="mtr-right">Setelah 2×T½, yang tersisa adalah 25%, BUKAN 0%.</strong> Peluruhan radioaktif mengikuti pola eksponensial (dibagi 2 terus-menerus), bukan pola linear (habis dalam waktu tetap). Secara matematis, jumlah inti radioaktif tidak akan PERNAH benar-benar mencapai nol persis -- hanya mendekatinya, semakin kecil dan kecil setelah tiap kelipatan waktu paruh.
</div>

## 🤔 Coba Pikirkan

1. Teknesium-99m (dipakai di kedokteran nuklir) punya waktu paruh sangat pendek, cuma 6 jam. Menurutmu, kenapa waktu paruh PENDEK justru jadi keunggulan untuk isotop yang disuntikkan ke tubuh pasien (dibanding isotop berwaktu paruh sangat panjang)?
2. Kalau sebuah fosil ternyata mengandung 12,5% Karbon-14 dibanding organisme hidup sezamannya, kira-kira berapa umur fosil itu? (Petunjuk: 12,5% = 1/8, ada hubungannya dengan pangkat berapa dari 1/2?)

Coba diskusikan jawabanmu dengan teman sekelas, atau buktikan sendiri lewat simulasi di atas.

<div class="mtr-cta">
<p>Dengan ini kita tuntas membahas seluruh Bab Teori Dasar Fisika Modern -- dari relativitas khusus, dualisme gelombang-partikel, sampai inti atom dan radioaktivitas. Bab terakhir membawa kita ke fondasi teknologi yang kamu pakai setiap hari: dunia digital.</p>
<a href="/materi/sinyal-analog-dan-digital" class="btn btn-primary">📶 Lanjut ke Sinyal Analog dan Digital →</a>
</div>
