---
title: "Pengukuran: Alat Ukur & Angka Penting"
description: "Belajar cara mengukur besaran dengan alat yang tepat — mistar, jangka sorong, mikrometer sekrup — sampai aturan angka penting yang sering disepelekan."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-06
tags: ["Pengukuran", "Angka Penting", "Fisika Kelas X"]
kuis:
  - soal: "Alat ukur panjang mana yang ketelitiannya paling tinggi?"
    pilihan: ["Mistar", "Jangka sorong", "Mikrometer sekrup", "Meteran"]
    jawaban: 2
    penjelasan: "Mikrometer sekrup punya ketelitian 0,01 mm — paling teliti dibanding mistar (1 mm) dan jangka sorong (0,1 mm)."
  - soal: "Jangka sorong paling cocok dipakai buat mengukur..."
    pilihan: ["Ketebalan kertas", "Diameter dalam sebuah pipa", "Suhu ruangan", "Massa benda"]
    jawaban: 1
    penjelasan: "Jangka sorong cocok buat benda yang punya rongga atau perlu diukur diameter dalamnya; mikrometer sekrup lebih pas buat benda yang sangat tipis."
  - soal: "Berapa jumlah angka penting pada 205?"
    pilihan: ["1", "2", "3", "4"]
    jawaban: 2
    penjelasan: "Angka nol di antara dua angka bukan nol termasuk angka penting — jadi 2, 0, dan 5 semuanya dihitung, totalnya 3."
  - soal: "Berapa jumlah angka penting pada 0,0025?"
    pilihan: ["5", "4", "3", "2"]
    jawaban: 3
    penjelasan: "Angka nol di depan angka bukan nol (di awal) bukan angka penting — cuma 2 dan 5 yang dihitung sebagai angka penting."
draft: false
---

<style>
.mtr-tree, .mtr-cards, .mtr-table-wrap, .mtr-steps { margin-block: 2rem; }

.mtr-tree-root-wrap { text-align: center; }

.mtr-tree-root {
  display: inline-block;
  margin-inline: auto;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: var(--accent-ink);
  font-family: var(--font-display);
  font-weight: 600;
  text-align: center;
}

/* Tabel perbandingan alat ukur — dibungkus overflow-x:auto biar aman di
   layar sempit, pola sama kayak tabel nilai di /hasil-ujian. */
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

/* Kartu alat ukur */
.mtr-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
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
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.mtr-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.mtr-card-icon { font-size: 1.375rem; display: block; margin-bottom: 0.5rem; }
.mtr-card h4 { font-family: var(--font-display); margin: 0 0 0.35rem; font-size: 1rem; }
.mtr-card .mtr-formula { font-size: 0.8125rem; color: var(--ink-soft); margin: 0 0 0.35rem; }
.mtr-card .mtr-unit {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--gold-soft);
  color: var(--gold);
}

/* Daftar bernomor beraturan (dipakai buat aturan angka penting) */
.mtr-steps {
  display: flex;
  flex-direction: column;
}

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
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
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
  margin-block: 1.5rem;
  font-size: 0.9375rem;
}
</style>

Materi sebelumnya kita sudah kenalan dengan besaran pokok dan besaran turunan. Sekarang kita masuk ke bagian yang lebih praktis: bagaimana besaran-besaran itu benar-benar diukur di dunia nyata.

## Apa Itu Pengukuran?

Pengukuran adalah proses membandingkan suatu besaran dengan besaran sejenis yang sudah ditetapkan sebagai satuan baku, menggunakan alat ukur.

~~Mengukur itu tinggal kira-kira saja pakai mata~~ → tidak begitu. Supaya hasilnya bisa dipercaya dan dibandingkan orang lain, pengukuran harus pakai alat yang standar, bukan sekadar tebakan.

## Alat Ukur Panjang: Tiga yang Wajib Dikenal

<div class="mtr-table-wrap">
<div class="mtr-table-scroll">
<table class="mtr-table">
<thead>
<tr><th>Alat</th><th>Ketelitian</th><th>Biasa Dipakai untuk</th></tr>
</thead>
<tbody>
<tr><td>Mistar</td><td><em>1 mm</em></td><td>Mengukur panjang benda yang ukurannya cukup besar</td></tr>
<tr><td>Jangka Sorong</td><td><em>0,1 mm</em></td><td>Diameter luar, diameter dalam, dan kedalaman suatu benda</td></tr>
<tr><td>Mikrometer Sekrup</td><td><em>0,01 mm</em></td><td>Benda yang sangat tipis atau kecil, misalnya tebal kertas atau diameter kawat</td></tr>
</tbody>
</table>
</div>
</div>

~~Jangka sorong dan mikrometer sekrup fungsinya sama saja~~ → beda. Jangka sorong lebih cocok untuk benda yang punya rongga atau perlu diukur diameter dalamnya, sementara mikrometer sekrup dipakai kalau butuh ketelitian lebih tinggi untuk benda yang sangat tipis.

<div class="mtr-note">
🧪 <strong>Lab Maya:</strong> daripada cuma dibaca, langsung coba praktik baca skalanya sendiri —
benda diukur diacak tiap ronde, kamu yang geser rahangnya dan tebak hasilnya. Ada juga
mikrometer sekrup buat dicoba.<br />
<a href="/lab-maya/alat-ukur#jangka-sorong" class="btn btn-primary" style="margin-top: 0.75rem;">Buka Lab Maya: Alat Ukur Panjang →</a>
</div>

## Alat Ukur Besaran Lain

<div class="mtr-cards">
<div class="mtr-cards-grid">
  <div class="mtr-card">
    <span class="mtr-card-icon">⚖️</span>
    <h4>Massa</h4>
    <p class="mtr-formula">Diukur pakai neraca (timbangan)</p>
    <span class="mtr-unit">kg</span>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">⏱️</span>
    <h4>Waktu</h4>
    <p class="mtr-formula">Diukur pakai stopwatch atau jam</p>
    <span class="mtr-unit">s</span>
  </div>
  <div class="mtr-card">
    <span class="mtr-card-icon">🌡️</span>
    <h4>Suhu</h4>
    <p class="mtr-formula">Diukur pakai termometer</p>
    <span class="mtr-unit">K</span>
  </div>
</div>
</div>

## Angka Penting

Angka penting adalah semua angka hasil pengukuran yang menunjukkan seberapa teliti alat ukur yang digunakan — terdiri dari angka pasti ditambah satu angka taksiran terakhir.

Ada beberapa aturan dasar yang perlu diingat:

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Semua angka bukan nol adalah angka penting.</strong> Contoh: 245 punya 3 angka penting.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Angka nol di antara dua angka bukan nol termasuk angka penting.</strong> Contoh: 205 punya 3 angka penting.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Angka nol di belakang koma, setelah angka bukan nol, termasuk angka penting.</strong> Contoh: 2,50 punya 3 angka penting.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Angka nol di depan angka bukan nol bukan angka penting.</strong> Contoh: 0,0025 hanya punya 2 angka penting, yaitu 2 dan 5.</p>
    </div>
  </div>
</div>

<div class="mtr-note">
💡 <del>Makin banyak angka di belakang koma, hasilnya makin ilmiah dan akurat</del> → jumlah angka yang ditulis harus sesuai ketelitian alat ukurnya, bukan ditambah-tambah supaya terlihat presisi. Menulis angka penting yang salah justru menunjukkan belum paham cara membacanya, bukan sebaliknya.
</div>

## Intinya

- Pengukuran adalah membandingkan besaran dengan satuan baku memakai alat ukur, bukan sekadar perkiraan
- Mistar, jangka sorong, dan mikrometer sekrup punya ketelitian berbeda, dipilih sesuai kebutuhan benda yang diukur
- Angka penting menunjukkan tingkat ketelitian hasil pengukuran, bukan soal seberapa banyak angka di belakang koma

Materi selanjutnya kita mulai membahas besaran yang punya arah, bukan cuma nilai — namanya vektor.
