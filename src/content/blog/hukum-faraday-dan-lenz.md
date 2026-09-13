---
title: "Hukum Faraday dan Hukum Lenz"
description: "Bagaimana perubahan medan magnet bisa menghasilkan listrik -- GGL induksi, Hukum Faraday, dan Hukum Lenz yang menentukan arah arus induksi."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Induksi Elektromagnetik", "Hukum Faraday", "Hukum Lenz", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/induksi-elektromagnetik.html"
  judul: "Faraday Electromagnetic Induction Lab"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1600
kuis:
  - soal: "Induksi elektromagnetik adalah fenomena..."
    pilihan: ["Timbulnya GGL (tegangan) akibat perubahan medan magnet pada kumparan", "Timbulnya medan magnet akibat arus listrik", "Hilangnya medan magnet karena panas", "Perubahan warna kumparan akibat listrik"]
    jawaban: 0
    penjelasan: "Induksi elektromagnetik adalah timbulnya GGL (gaya gerak listrik) pada kumparan akibat perubahan medan magnet di sekitarnya -- kebalikan dari yang kita pelajari sebelumnya (arus menghasilkan magnet)."
  - soal: "Menurut Hukum Faraday, GGL induksi yang timbul bergantung pada..."
    pilihan: ["Kecepatan perubahan fluks magnetik", "Warna kumparan", "Suhu ruangan", "Berat magnet yang digunakan"]
    jawaban: 0
    penjelasan: "Hukum Faraday: GGL induksi sebanding dengan KECEPATAN perubahan fluks magnetik -- makin cepat perubahannya, makin besar GGL yang dihasilkan."
  - soal: "Kalau magnet digerakkan mendekati kumparan lebih CEPAT, apa yang terjadi pada GGL induksinya?"
    pilihan: ["GGL induksi menjadi lebih besar", "GGL induksi menjadi lebih kecil", "GGL induksi tidak berubah", "GGL induksi menjadi nol"]
    jawaban: 0
    penjelasan: "Sesuai Hukum Faraday, makin cepat perubahan fluks (gerakan magnet lebih cepat), makin besar GGL induksi yang timbul."
  - soal: "Hukum Lenz menyatakan bahwa arah arus induksi SELALU..."
    pilihan: ["Melawan perubahan fluks magnetik yang menyebabkannya", "Searah dengan perubahan fluks magnetik", "Tidak memiliki arah tertentu", "Sama dengan arah gerak magnet"]
    jawaban: 0
    penjelasan: "Hukum Lenz: arus induksi selalu berusaha MELAWAN (menentang) perubahan fluks yang menyebabkannya -- prinsip kekekalan energi berlaku di sini."
draft: false
---

<style>
.mtr-table-wrap, .mtr-steps { margin-block: 2rem; }

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

.mtr-step {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 1rem;
  position: relative;
  padding-bottom: 1.5rem;
}

.mtr-step:last-child { padding-bottom: 0; }

.mtr-step-num {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
  background: linear-gradient(135deg, var(--rose), var(--gold));
  color: var(--accent-ink);
  box-shadow: var(--glow-accent);
  position: relative;
  z-index: 1;
}

.mtr-step:not(:last-child) .mtr-step-num::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  width: 1px;
  height: 1.5rem;
  background: var(--border-strong);
}

.mtr-step-body p { margin: 0; color: var(--ink-soft); font-size: 0.9375rem; }
.mtr-step-body strong { color: var(--ink); }

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

Sejauh ini kita sudah bahas bagaimana arus listrik menghasilkan medan magnet ([Medan Magnet oleh Arus Listrik](/materi/medan-magnet-oleh-arus-listrik)) dan bagaimana medan magnet memberikan gaya pada muatan ([Gaya Lorentz](/materi/gaya-lorentz)). Sekarang giliran fenomena yang JUSTRU KEBALIKANNYA: **bagaimana medan magnet bisa menghasilkan listrik.** Inilah **Induksi Elektromagnetik**, ditemukan Michael Faraday tahun 1831.

## ⚡ GGL Induksi: Listrik dari Perubahan Medan Magnet

Kalau kamu menggerakkan magnet mendekati/menjauhi kumparan kawat, akan timbul **GGL induksi** (Gaya Gerak Listrik, semacam "tegangan sementara") pada kumparan itu -- meski tidak ada baterai atau sumber listrik lain yang terhubung! Yang penting BUKAN keberadaan medan magnetnya, tapi PERUBAHAN medan magnet itu (fluks magnetik) yang menembus kumparan.

Coba buktikan sendiri di simulasi bawah -- tarik magnet mendekati/menjauhi kumparan dengan tangan sendiri, dan amati galvanometer (alat ukur arus kecil) merespons.

## 📐 Hukum Faraday

**Hukum Faraday** menyatakan: besar GGL induksi yang timbul SEBANDING dengan KECEPATAN perubahan fluks magnetik yang menembus kumparan.

Tiga faktor yang membuat GGL induksi lebih besar:

<div class="mtr-step">
  <span class="mtr-step-num">1</span>
  <div class="mtr-step-body"><p><strong>Gerakan lebih cepat.</strong> Makin cepat magnet digerakkan mendekati/menjauhi kumparan, makin cepat perubahan fluksnya, makin besar GGL-nya.</p></div>
</div>
<div class="mtr-step">
  <span class="mtr-step-num">2</span>
  <div class="mtr-step-body"><p><strong>Magnet lebih kuat.</strong> Medan magnet yang lebih kuat menghasilkan perubahan fluks yang lebih besar untuk gerakan yang sama.</p></div>
</div>
<div class="mtr-step">
  <span class="mtr-step-num">3</span>
  <div class="mtr-step-body"><p><strong>Jumlah lilitan kumparan lebih banyak.</strong> Tiap lilitan menyumbang GGL-nya sendiri -- makin banyak lilitan, makin besar GGL total.</p></div>
</div>

## 🔄 Hukum Lenz: Menentukan Arah

Hukum Faraday menjelaskan BESAR GGL induksi, tapi tidak menjelaskan ARAHNYA. Di sinilah **Hukum Lenz** berperan: arus induksi yang timbul akan SELALU melawan (menentang) perubahan fluks yang menyebabkannya.

Kenapa harus "melawan"? Ini sebenarnya konsekuensi dari **Hukum Kekekalan Energi** -- kalau arus induksi justru MEMPERKUAT perubahan fluks (bukan melawannya), energi akan tercipta dari kehampaan (perpetual motion), yang melanggar hukum fisika dasar. Jadi alam "memaksa" arus induksi untuk melawan, sehingga dibutuhkan usaha (energi) dari luar untuk terus menggerakkan magnetnya.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Medan magnet yang diam (tidak berubah) di dekat kumparan akan tetap menghasilkan GGL induksi."</strong><br>
Tidak tepat. <strong class="mtr-right">GGL induksi hanya timbul kalau ada PERUBAHAN fluks magnetik</strong> -- medan magnet yang diam (statis) di dekat kumparan TIDAK menghasilkan arus induksi apa pun, seberapa pun kuatnya.
</div>

## 🤔 Coba Pikirkan

Kamu menarik magnet dengan kecepatan konstan mendekati sebuah kumparan, lalu tiba-tiba berhenti tepat di depan kumparan.

1. Apa yang terjadi pada GGL induksi saat magnet berhenti bergerak?
2. Kalau kamu ingin GGL induksinya dua kali lebih besar tanpa mengganti magnet, apa yang bisa kamu ubah dari cara menggerakkannya atau dari kumparannya?

Coba diskusikan jawabanmu dengan teman sekelas, atau uji dulu lewat simulasi di atas.

<div class="mtr-cta">
<p>Sekarang kita paham mekanisme dasarnya. Selanjutnya kita lihat bagaimana prinsip ini dimanfaatkan di dunia nyata -- lewat Generator dan Transformator.</p>
<a href="/materi/generator-dan-transformator" class="btn btn-primary">🔋 Lanjut ke Aplikasi Induksi: Generator dan Transformator →</a>
</div>
