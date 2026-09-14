---
title: "Asas Bernoulli dan Penerapannya"
description: "Rahasia di balik gaya angkat sayap pesawat, penyemprot parfum, dan karburator -- semua memanfaatkan satu prinsip: aliran cepat, tekanan rendah."
category: materi
mapel: "Fisika"
kelas: "XI"
pubDate: 2026-09-14
tags: ["Asas Bernoulli", "Fluida Dinamis", "Fisika Kelas XI"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/fluida-dinamis.html"
  judul: "Laboratorium Maya: Fluida Dinamis"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1300
kuis:
  - soal: "Persamaan Bernoulli untuk aliran mendatar (ketinggian sama) menyatakan bahwa..."
    pilihan: ["P + ½ρv² selalu tetap di sepanjang aliran", "P selalu tetap, tidak peduli kecepatan aliran", "v selalu tetap, tidak peduli tekanan", "Tidak ada hubungan antara P dan v"]
    jawaban: 0
    penjelasan: "Untuk aliran mendatar, P + ½ρv² = konstan -- kalau v membesar, P harus mengecil, dan sebaliknya."
  - soal: "Di bagian pipa yang lebih SEMPIT (kecepatan aliran lebih besar), tekanannya menjadi..."
    pilihan: ["Lebih besar", "Lebih kecil", "Tetap sama", "Nol"]
    jawaban: 1
    penjelasan: "Sesuai asas Bernoulli, di bagian yang alirannya lebih CEPAT (pipa sempit), tekanannya justru LEBIH KECIL -- kebalikan dari yang sering dikira orang."
  - soal: "Sayap pesawat dirancang agar udara mengalir lebih cepat di sisi ATAS dibanding sisi BAWAH. Akibatnya..."
    pilihan: ["Tekanan di atas lebih besar, pesawat terdorong turun", "Tekanan di atas lebih kecil, pesawat terdorong naik (gaya angkat)", "Tidak ada pengaruh ke pesawat", "Pesawat akan terbalik"]
    jawaban: 1
    penjelasan: "Aliran lebih cepat di atas sayap → tekanan di atas lebih rendah dari di bawah → selisih tekanan ini mendorong sayap (dan pesawat) ke ATAS, disebut gaya angkat (lift)."
  - soal: "Air mengalir dengan kecepatan 1 m/s di pipa berdiameter 12 cm, lalu memasuki penyempitan berdiameter 6 cm (ρ air = 1.000 kg/m³). Berapa selisih tekanan (P1 − P2) antara bagian lebar dan bagian sempit?"
    pilihan: ["1.500 Pa", "7.500 Pa", "15.000 Pa", "500 Pa"]
    jawaban: 1
    penjelasan: "v2 = v1×(12/6)² = 1×4 = 4 m/s. ΔP = ½ρ(v2²−v1²) = ½×1.000×(16−1) = 500×15 = 7.500 Pa."
  - soal: "Alat yang mengukur kecepatan aliran fluida dalam pipa dengan memanfaatkan selisih tekanan akibat penyempitan pipa disebut..."
    pilihan: ["Barometer", "Venturimeter", "Termometer", "Hidrometer"]
    jawaban: 1
    penjelasan: "Venturimeter memanfaatkan penyempitan pipa dan asas Bernoulli untuk mengukur kecepatan (dan debit) aliran fluida dari selisih tekanan yang terbaca."
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

Di sesi [Asas Kontinuitas](/materi/asas-kontinuitas-dan-debit-aliran) kita sudah tahu KECEPATAN aliran berubah saat pipa menyempit. Sekarang kita bahas apa yang terjadi pada TEKANAN-nya -- dan ternyata inilah rahasia di balik gaya angkat pesawat terbang.

## ✈️ Persamaan Bernoulli

Bentuk umumnya (memperhitungkan ketinggian $h$) adalah:

$$P + \frac{1}{2}\rho v^2 + \rho g h = \text{konstan}$$

Untuk pipa MENDATAR (ketinggian sama di semua titik, $h_1 = h_2$), suku $\rho g h$ saling meniadakan, sehingga persamaannya sederhana:

$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

Konsekuensinya: di bagian yang alirannya lebih CEPAT, tekanannya harus lebih KECIL, supaya jumlah keduanya tetap konstan. Inilah **Asas Bernoulli** -- sering diringkas: "aliran cepat, tekanan rendah."

## 🔬 Coba Sendiri di Lab Maya

Buka tab **Asas Bernoulli** di simulasi bawah. Perhatikan dua "kolom" tekanan (manometer) di atas pipa lebar dan pipa sempit -- kolom di bagian sempit (aliran cepat) akan selalu lebih PENDEK, menunjukkan tekanan yang lebih rendah di sana.

## 🛩️ Penerapan Asas Bernoulli

<div class="mtr-cards">
<div class="mtr-cards-grid">
<div class="mtr-card"><span class="mtr-card-icon">✈️</span><h4>Gaya Angkat Sayap Pesawat</h4><p>Bentuk sayap membuat udara mengalir lebih cepat di sisi atas -- tekanan di atas jadi lebih rendah, mendorong sayap ke atas.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🧴</span><h4>Penyemprot Parfum</h4><p>Meniup udara cepat melintasi ujung pipa vertikal menciptakan tekanan rendah yang "menghisap" cairan parfum naik lalu ikut tersembur.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">🚗</span><h4>Karburator</h4><p>Udara yang mengalir cepat lewat penyempitan (venturi) menciptakan tekanan rendah yang menarik bahan bakar untuk bercampur dengan udara.</p></div>
<div class="mtr-card"><span class="mtr-card-icon">📏</span><h4>Venturimeter</h4><p>Alat ukur kecepatan/debit aliran fluida dalam pipa, memanfaatkan selisih tekanan akibat penyempitan pipa.</p></div>
</div>
</div>

## ✏️ Contoh Soal

Air mengalir dengan kecepatan 1 m/s di sebuah pipa berdiameter 12 cm. Pipa itu menyempit menjadi berdiameter 6 cm (ρ air = 1.000 kg/m³). Berapa selisih tekanan antara bagian lebar dan bagian sempit?

**Pembahasan**:

Kecepatan di bagian sempit (asas kontinuitas): $v_2 = v_1 \times \left(\dfrac{d_1}{d_2}\right)^2 = 1 \times \left(\dfrac{12}{6}\right)^2 = 1 \times 4 = 4$ m/s

Selisih tekanan (Bernoulli): $P_1 - P_2 = \dfrac{1}{2}\rho(v_2^2 - v_1^2) = \dfrac{1}{2} \times 1.000 \times (16 - 1) = 500 \times 15 = \textbf{7.500 Pa}$

Tekanan di bagian sempit ($P_2$) lebih rendah 7.500 Pa dibanding di bagian lebar ($P_1$).

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Tekanan tinggi terjadi di tempat aliran fluidanya cepat."</strong><br>
Justru terbalik! <strong class="mtr-right">Tekanan RENDAH terjadi di tempat aliran fluidanya CEPAT</strong> (dan tekanan tinggi di tempat alirannya lambat). Ini kesalahan paling umum soal Asas Bernoulli -- ingat baik-baik urutannya: aliran cepat → tekanan rendah.
</div>

## 🤔 Coba Pikirkan

1. Kenapa tirai kamar mandi kadang "tersedot" ke dalam ke arah pancuran air saat shower menyala?
2. Dua kapal yang berlayar sejajar dan berdekatan di laut bisa saling "tertarik" mendekat kalau jaraknya terlalu dekat. Bagaimana Asas Bernoulli menjelaskan ini? (Petunjuk: bagaimana aliran air di celah sempit antara dua kapal itu?)

<div class="mtr-cta">
<p>Sampai di sini, Bab Fluida (Statis dan Dinamis) sudah lengkap kita bahas. Lanjutkan belajar lewat halaman Ruang Belajar untuk melihat bab-bab Kelas XI berikutnya.</p>
<a href="/ruang-belajar" class="btn btn-primary">📚 Kembali ke Ruang Belajar →</a>
</div>
