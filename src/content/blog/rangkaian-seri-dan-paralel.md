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
