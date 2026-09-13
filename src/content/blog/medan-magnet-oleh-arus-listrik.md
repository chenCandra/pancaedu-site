---
title: "Medan Magnet oleh Arus Listrik"
description: "Arus listrik ternyata bisa menghasilkan medan magnet -- kaidah tangan kanan, medan di sekitar kawat lurus, dan prinsip dasar elektromagnet lewat solenoida."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-09-14
tags: ["Medan Magnet", "Elektromagnet", "Fenomena Elektromagnetik", "Fisika Kelas XII"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/medan-magnet.html"
  judul: "Laboratorium Maya: Medan Magnet -- tab Kawat Berarus"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1400
kuis:
  - soal: "Penemuan bahwa arus listrik menghasilkan medan magnet pertama kali diamati lewat percobaan..."
    pilihan: ["Kawat berarus membelokkan jarum kompas di dekatnya", "Magnet yang bergerak menghasilkan listrik", "Dua kawat sejajar saling tarik-menarik tanpa arus", "Kompas yang dipanaskan kehilangan sifat magnetnya"]
    jawaban: 0
    penjelasan: "Hans Christian Oersted (1820) menemukan bahwa kawat berarus listrik bisa membelokkan jarum kompas di dekatnya -- bukti pertama bahwa listrik dan magnet saling berhubungan."
  - soal: "Kaidah tangan kanan untuk kawat lurus berarus: kalau ibu jari menunjuk arah arus, maka lipatan jari lain menunjukkan..."
    pilihan: ["Arah medan magnet yang melingkari kawat", "Arah gaya pada kawat", "Besar arus listrik", "Arah aliran elektron"]
    jawaban: 0
    penjelasan: "Genggam kawat dengan tangan kanan, ibu jari menunjuk arah arus (I) -- lipatan jari-jari lain menunjukkan arah medan magnet (B) yang melingkar di sekitarnya."
  - soal: "Kalau arah arus pada kawat lurus dibalik, apa yang terjadi pada medan magnetnya?"
    pilihan: ["Arah medan magnetnya ikut terbalik", "Medan magnetnya hilang", "Kekuatannya menjadi dua kali lipat", "Tidak ada perubahan"]
    jawaban: 0
    penjelasan: "Membalik arah arus membalik arah lingkaran medan magnet di sekitarnya, sesuai kaidah tangan kanan."
  - soal: "Kumparan kawat yang digulung berbentuk silinder, dipakai untuk memperkuat medan magnet dari arus listrik, disebut..."
    pilihan: ["Solenoida", "Kapasitor", "Resistor", "Dioda"]
    jawaban: 0
    penjelasan: "Solenoida adalah kumparan kawat silinder -- medan dari tiap lilitan saling memperkuat di dalam kumparan, menghasilkan medan magnet yang jauh lebih kuat dari kawat lurus."
draft: false
---

<style>
.mtr-table-wrap, .mtr-cards, .mtr-steps { margin-block: 2rem; }

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

Di materi [Medan Magnet: Konsep Dasar](/materi/medan-magnet-konsep-dasar) kita bahas magnet permanen. Ternyata, medan magnet TIDAK CUMA dihasilkan magnet alami -- **arus listrik juga bisa menghasilkan medan magnet.** Penemuan ini jadi jembatan pertama antara dua topik yang tadinya dianggap terpisah: listrik dan magnet.

## ⚡ Penemuan Oersted

Tahun 1820, ilmuwan Denmark Hans Christian Oersted secara tidak sengaja menemukan bahwa kawat berarus listrik bisa **membelokkan jarum kompas** di dekatnya. Ini bukti pertama bahwa arus listrik menghasilkan medan magnet -- penemuan yang jadi fondasi seluruh bidang elektromagnetisme.

## ✋ Kaidah Tangan Kanan

Untuk menentukan arah medan magnet di sekitar kawat lurus berarus, kita pakai **kaidah tangan kanan**:

<div class="mtr-step">
  <span class="mtr-step-num">1</span>
  <div class="mtr-step-body"><p><strong>Genggam kawat dengan tangan kanan.</strong> Posisikan tangan seolah kamu memegang kawat itu.</p></div>
</div>
<div class="mtr-step">
  <span class="mtr-step-num">2</span>
  <div class="mtr-step-body"><p><strong>Arahkan ibu jari sesuai arah arus (I).</strong> Ibu jari menunjuk ke arah arus mengalir.</p></div>
</div>
<div class="mtr-step">
  <span class="mtr-step-num">3</span>
  <div class="mtr-step-body"><p><strong>Lipatan jari-jari lain menunjukkan arah medan magnet (B).</strong> Medan ini berbentuk LINGKARAN yang mengelilingi kawat, bukan garis lurus seperti pada magnet batang.</p></div>
</div>

Kalau arah arusnya dibalik, arah lingkaran medannya ikut terbalik. Coba buktikan sendiri di simulasi bawah (tab "Kawat Berarus") -- geser kompas ke sekitar kawat dan ganti arah arusnya.

## 🌀 Dari Kawat Lurus ke Solenoida

Medan magnet dari SATU kawat lurus relatif lemah. Tapi kalau kawat itu digulung jadi kumparan silinder (disebut **solenoida**), medan dari SETIAP lilitan saling MEMPERKUAT di bagian dalam kumparan -- hasilnya medan magnet yang jauh lebih kuat, mirip magnet batang biasa (punya kutub N dan S).

Inilah prinsip dasar **elektromagnet**: magnet buatan yang kekuatannya bisa diatur (lebih banyak lilitan atau arus lebih besar = lebih kuat), dan bisa dinyalakan/dimatikan hanya dengan menyambung/memutus arus listrik -- sesuatu yang tidak bisa dilakukan magnet permanen biasa.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Medan magnet di sekitar kawat lurus berbentuk garis lurus, sama seperti magnet batang."</strong><br>
Tidak tepat. <strong class="mtr-right">Medan magnet di sekitar kawat lurus berbentuk LINGKARAN KONSENTRIS</strong> yang mengelilingi kawat -- berbeda dari magnet batang yang medannya melengkung dari kutub N ke S.
</div>

## 🤔 Coba Pikirkan

Sebuah bel listrik sederhana menggunakan elektromagnet untuk memukul lonceng setiap kali arus dinyalakan.

1. Kenapa elektromagnet (bukan magnet permanen biasa) yang dipilih untuk aplikasi seperti ini?
2. Kalau kamu ingin elektromagnet itu lebih kuat tanpa menambah arus listrik, apa yang bisa diubah dari kumparannya?

Coba diskusikan jawabanmu dengan teman sekelas, atau uji dulu lewat simulasi di atas.

<div class="mtr-cta">
<p>Kita sudah tahu arus listrik menghasilkan medan magnet. Sekarang giliran sebaliknya: bagaimana medan magnet memberikan GAYA pada muatan yang bergerak.</p>
<a href="/materi/gaya-lorentz" class="btn btn-primary">🌀 Lanjut ke Gaya Magnetik (Gaya Lorentz) →</a>
</div>
