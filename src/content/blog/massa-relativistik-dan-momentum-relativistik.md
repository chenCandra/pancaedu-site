---
title: "Massa Relativistik dan Momentum Relativistik"
description: "Kenapa massa benda ikut berubah kalau bergerak mendekati kecepatan cahaya? Bahas massa & momentum relativistik lengkap dengan contoh soal."
category: materi
mapel: "Fisika"
kelas: XII
pubDate: 2024-01-14
updatedDate: 2026-09-13
tags: ["Relativitas Khusus", "Massa Relativistik", "Fisika Kelas XII"]
kuis:
  - soal: "Massa relativistik adalah..."
    pilihan: ["Massa benda yang selalu tetap di semua kecepatan", "Massa benda yang bergerak mendekati kecepatan cahaya, diukur pengamat diam", "Massa yang diukur pakai neraca pegas", "Massa benda di ruang hampa"]
    jawaban: 1
    penjelasan: "Berbeda dari massa diam, massa relativistik berkaitan dengan benda yang bergerak mendekati kecepatan cahaya, sebagaimana terukur oleh pengamat yang diam."
  - soal: "Kalau kecepatan benda = 0, maka massa relativistiknya..."
    pilihan: ["Sama dengan massa diamnya", "Menjadi nol", "Menjadi tak terhingga", "Tidak terdefinisi"]
    jawaban: 0
    penjelasan: "Saat v = 0, rumus massa relativistik kembali menjadi sama dengan massa diam biasa."
  - soal: "Kalau kecepatan benda mendekati kecepatan cahaya, massa relativistiknya akan..."
    pilihan: ["Tetap sama", "Menurun drastis", "Meningkat drastis, mendekati tak terhingga", "Menjadi nol"]
    jawaban: 2
    penjelasan: "Semakin dekat ke kecepatan cahaya, massa relativistik meningkat drastis -- inilah kenapa mustahil mempercepat benda bermassa sampai persis secepat cahaya."
  - soal: "Kalau kecepatan benda = 0, momentum relativistiknya..."
    pilihan: ["Sama dengan nol", "Tak terhingga", "Sama dengan massa diam", "Negatif"]
    jawaban: 0
    penjelasan: "Momentum = 0 kalau kecepatannya 0, sama seperti momentum pada fisika klasik."
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
</style>

Setelah kenalan sama [dilatasi waktu](/materi/dilatasi-waktu) dan [kontraksi panjang](/materi/kontraksi-panjang), sekarang giliran besaran ketiga yang ikut berubah kalau benda bergerak sangat cepat: **massa**.

## ⚖️ Massa Relativistik

<div class="mtr-def">
💡 <strong>Massa relativistik</strong> adalah massa yang TERUKUR oleh pengamat diam, untuk benda yang bergerak mendekati kecepatan cahaya. Ini berbeda dari <strong>massa diam (m₀)</strong> -- massa benda itu sendiri saat tidak bergerak (atau diukur oleh pengamat yang ikut bergerak bersamanya).
</div>

<div class="mtr-formula">m = m₀ / √(1 − v²/c²)</div>

dengan:

* **m** = massa relativistik (kg)
* **m₀** = massa diam benda (kg)
* **v** = kecepatan benda relatif terhadap pengamat (m/s)
* **c** = kecepatan cahaya di ruang hampa (≈ 3×10⁸ m/s)

Perhatikan pola yang sama dengan dua materi sebelumnya: kalau v=0, rumus ini otomatis kembali jadi m=m₀ (tidak ada efek relativistik). Tapi begitu v mendekati c, penyebutnya mendekati nol, sehingga **m membengkak drastis, mendekati tak terhingga**.

<div class="mtr-note">
🚀 Inilah salah satu alasan paling mendasar kenapa TIDAK ADA benda bermassa yang bisa mencapai kecepatan cahaya persis: semakin cepat sebuah roket dipacu mendekati c, massanya makin besar, sehingga makin besar pula gaya (dan energi) yang dibutuhkan untuk mempercepatnya lebih jauh lagi. Untuk benar-benar mencapai v=c, dibutuhkan energi TAK TERHINGGA -- sesuatu yang mustahil disediakan.
</div>

## 🏃 Momentum Relativistik

Ingat dari fisika klasik, momentum p = m×v. Karena massa sekarang berubah mengikuti kecepatan, momentum relativistik pun ikut menyesuaikan:

<div class="mtr-formula">p = m₀v / √(1 − v²/c²)</div>

dengan **p** = momentum relativistik (kg·m/s), dan simbol lainnya sama seperti rumus massa relativistik di atas.

Sama seperti massa, kalau v=0 maka p=0 (sama seperti momentum klasik biasa). Kalau v mendekati c, momentumnya juga membengkak menuju tak terhingga.

## ✏️ Contoh Soal

**Soal:** Sebuah partikel bermassa diam 1 kg bergerak dengan kecepatan 0,6c relatif terhadap seorang pengamat. Berapa massa relativistik dan momentum relativistik partikel itu?

**Pembahasan:**

Diketahui: m₀ = 1 kg, v = 0,6c

<div class="mtr-formula">m = m₀ / √(1 − v²/c²) = 1 / √(1 − 0,36) = 1 / √0,64 = 1 / 0,8 = 1,25 kg</div>

Massa relativistiknya jadi 1,25 kg -- lebih besar 25% dari massa diamnya. Untuk momentumnya, dengan v = 0,6c = 0,6 × (3×10⁸) = 1,8×10⁸ m/s:

<div class="mtr-formula">p = m₀v / √(1 − v²/c²) = (1 × 1,8×10⁸) / 0,8 = 2,25×10⁸ kg·m/s</div>

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Massa benda BERTAMBAH secara fisik -- ada 'materi baru' yang muncul saat benda bergerak cepat."</strong><br>
Tidak tepat. <strong class="mtr-right">Tidak ada materi baru yang muncul.</strong> Massa diam (m₀) benda itu tetap sama persis. Yang berubah adalah massa relativistik -- besaran yang menggambarkan betapa besar RESISTANSI benda itu terhadap percepatan lebih lanjut (mirip peran massa dalam Hukum Newton II, F=ma), sebagaimana terukur oleh pengamat yang diam. Banyak fisikawan modern bahkan lebih suka tidak memakai istilah "massa relativistik" sama sekali, dan langsung bekerja dengan massa diam plus energi relativistik untuk menghindari kesalahpahaman ini.
</div>

## 🤔 Coba Pikirkan

1. Kalau sebuah benda punya massa diam 2 kg dan bergerak dengan kecepatan 0,8c, berapa massa relativistiknya? (Petunjuk: pakai rumus di atas, hasil kuadrat 0,8 sudah pernah muncul di contoh soal materi Kontraksi Panjang)
2. Kenapa menurutmu ilmuwan lebih suka mempercepat PARTIKEL SUBATOMIK (seperti proton/elektron) daripada benda berukuran besar, kalau ingin mengamati efek relativistik massa dan momentum secara langsung di laboratorium?

Coba diskusikan jawabanmu dengan teman sekelas.

<div class="mtr-cta">
<p>Sekarang kita sudah kenal tiga efek utama relativitas khusus -- waktu, panjang, dan massa. Saatnya lihat rangkumannya sekaligus dalam satu gambaran utuh.</p>
<a href="/materi/benda-bergerak-mendekati-kecepatan-cahaya" class="btn btn-primary">🌌 Lanjut ke: Apa yang Terjadi Jika Benda Bergerak Mendekati Kecepatan Cahaya? →</a>
</div>
