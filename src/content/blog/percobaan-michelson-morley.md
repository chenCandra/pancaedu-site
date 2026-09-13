---
title: "Percobaan Michelson-Morley: Eksperimen yang Mengubah Fisika"
description: "Eksperimen yang gagal membuktikan eter, tapi justru membuka jalan ke teori relativitas khusus Einstein."
category: materi
mapel: "Fisika"
kelas: XII
pubDate: 2024-01-11
updatedDate: 2026-09-13
tags: ["Relativitas Khusus", "Michelson-Morley", "Fisika Kelas XII"]
kuis:
  - soal: "Apa tujuan awal percobaan Michelson-Morley?"
    pilihan: ["Membuktikan Bumi itu bulat", "Menguji keberadaan eter sebagai medium rambat cahaya", "Mengukur massa elektron", "Menghitung percepatan gravitasi"]
    jawaban: 1
    penjelasan: "Percobaan ini didesain untuk mendeteksi 'angin eter' akibat gerak Bumi melalui eter."
  - soal: "Alat yang dipakai Michelson dan Morley dalam percobaannya disebut..."
    pilihan: ["Teleskop", "Interferometer", "Spektrometer", "Osiloskop"]
    jawaban: 1
    penjelasan: "Interferometer bisa mendeteksi perubahan kecil pola interferensi cahaya dari dua lengan yang saling tegak lurus."
  - soal: "Apa hasil dari percobaan Michelson-Morley?"
    pilihan: ["Ditemukan angin eter sesuai prediksi", "Tidak ditemukan perbedaan kecepatan cahaya / angin eter", "Cahaya terbukti butuh medium padat", "Kecepatan cahaya berubah-ubah tergantung arah"]
    jawaban: 1
    penjelasan: "Hasilnya justru 'gagal' mendeteksi eter — hasil tak terduga inilah yang jadi petunjuk penting menuju relativitas khusus."
  - soal: "Kenapa hasil percobaan Michelson-Morley penting bagi fisika modern?"
    pilihan: ["Karena membuktikan hukum Newton benar", "Karena membuka jalan bagi teori relativitas khusus Einstein", "Karena menemukan partikel baru", "Karena berhasil mengukur usia alam semesta"]
    jawaban: 1
    penjelasan: "Hasil 'negatif' (tidak ada eter) menjadi salah satu petunjuk terkuat yang mengarah ke lahirnya teori relativitas khusus."
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

Di materi [Teori Relativitas Khusus](/materi/teori-relativitas-khusus) sempat disinggung soal eksperimen yang jadi salah satu pemicu lahirnya teori itu. Kali ini kita bahas tuntas: **Percobaan Michelson-Morley** tahun 1887, salah satu eksperimen paling terkenal dalam sejarah fisika -- bukan karena berhasil membuktikan sesuatu, tapi justru karena "gagal total" membuktikan apa yang seharusnya ia buktikan.

## 🌊 Eter: Medium yang (Katanya) Dibutuhkan Cahaya

Di abad ke-19, fisikawan percaya gelombang butuh medium untuk merambat -- persis seperti gelombang bunyi yang butuh udara. Karena cahaya juga gelombang, mereka menyimpulkan pasti ada medium serupa yang mengisi seluruh alam semesta, termasuk ruang hampa. Medium hipotetis ini dinamai **eter** (*luminiferous aether*).

<div class="mtr-def">
💡 Kalau eter memang ada dan diam mutlak di alam semesta, maka Bumi yang mengorbit Matahari seharusnya bergerak MENEMBUS eter itu -- menciptakan semacam "angin eter" (*ether wind*), mirip angin yang kamu rasakan saat menjulurkan tangan dari mobil yang melaju.
</div>

Kalau angin eter itu nyata, cahaya yang merambat SEARAH gerak Bumi seharusnya terukur sedikit berbeda kecepatannya dibanding cahaya yang merambat TEGAK LURUS arah gerak Bumi. Albert Michelson dan Edward Morley di Cleveland, Ohio, merancang eksperimen untuk mengukur perbedaan sekecil apa pun ini.

## 🔬 Cara Kerja Interferometer Michelson

Alat yang mereka pakai disebut **interferometer** -- mampu mendeteksi perbedaan superkecil dalam jarak tempuh cahaya lewat pola interferensi (garis terang-gelap yang muncul saat dua gelombang cahaya bertemu).

<div class="mtr-steps">
  <div class="mtr-step">
    <span class="mtr-step-num">1</span>
    <div class="mtr-step-body">
      <p><strong>Cahaya dari satu sumber dipancarkan ke sebuah cermin setengah perak</strong> (cermin yang memantulkan sebagian cahaya, meneruskan sebagian lainnya) -- cahaya ini terbagi jadi dua berkas.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">2</span>
    <div class="mtr-step-body">
      <p><strong>Kedua berkas merambat di dua lengan yang saling TEGAK LURUS</strong>, satu lengan searah gerak Bumi (dugaan arah "angin eter"), satu lengan lagi tegak lurus terhadapnya.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">3</span>
    <div class="mtr-step-body">
      <p><strong>Di ujung tiap lengan, cermin memantulkan berkas cahaya itu kembali</strong> ke cermin setengah perak di tengah.</p>
    </div>
  </div>
  <div class="mtr-step">
    <span class="mtr-step-num">4</span>
    <div class="mtr-step-body">
      <p><strong>Kedua berkas digabung kembali dan diamati lewat teleskop.</strong> Kalau ada "angin eter", cahaya di kedua lengan akan menempuh waktu sedikit berbeda -- menghasilkan pola interferensi yang bergeser saat seluruh alat diputar perlahan.</p>
    </div>
  </div>
</div>

## 😲 Hasilnya: Nihil

Michelson dan Morley mengulang percobaan ini dengan sangat teliti, memutar interferometernya ke berbagai arah dan waktu berbeda sepanjang tahun (supaya menangkap variasi arah gerak Bumi mengelilingi Matahari). Hasilnya?

<div class="mtr-note">
<strong class="mtr-right">TIDAK ADA pergeseran pola interferensi yang berarti.</strong> Kecepatan cahaya terukur SAMA PERSIS di kedua lengan, berapa pun arahnya. Tidak ada jejak "angin eter" sama sekali -- persis kebalikan dari yang diprediksi.
</div>

Ini adalah salah satu "kegagalan" paling berpengaruh dalam sejarah sains. Michelson bahkan meraih Hadiah Nobel Fisika 1907, justru untuk eksperimen yang "gagal" membuktikan hipotesisnya sendiri! Hasil nihil inilah yang kemudian disebut sebagai salah satu petunjuk terkuat yang menuntun ke kesimpulan radikal: mungkin tidak ada eter sama sekali, dan cahaya memang secara alami merambat dengan kecepatan konstan c bagi SEMUA pengamat, tidak peduli bagaimana mereka bergerak.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Percobaan Michelson-Morley itu percobaan yang gagal/tidak berguna, karena tidak menemukan apa yang dicari."</strong><br>
Tidak tepat. <strong class="mtr-right">Hasil "negatif" dalam sains justru bisa sama berharganya dengan hasil "positif"</strong> -- percobaan ini dirancang dan dijalankan dengan sangat presisi, dan hasilnya (tidak ada angin eter) itu SENDIRI adalah data ilmiah yang valid. Justru karena hasil tak terduga inilah, fisikawan terdorong mencari penjelasan baru, yang berujung pada teori relativitas khusus Einstein delapan belas tahun kemudian.
</div>

## 🤔 Coba Pikirkan

1. Kalau kamu jadi fisikawan di akhir abad ke-19 dan hasil percobaanmu bertentangan total dengan teori yang sudah diyakini semua orang selama puluhan tahun, menurutmu apa yang lebih sulit: merancang percobaannya, atau meyakinkan orang lain menerima hasilnya?
2. Einstein tidak "membuktikan" ketiadaan eter lewat percobaan baru -- ia malah mengubah ASUMSI dasarnya (ruang & waktu relatif, bukan mutlak) supaya hasil Michelson-Morley jadi masuk akal. Menurutmu, kenapa cara ini bisa dibilang lebih radikal daripada sekadar mencari alasan teknis kenapa percobaannya "gagal"?

Coba diskusikan jawabanmu dengan teman sekelas.

<div class="mtr-cta">
<p>Salah satu konsekuensi paling terkenal dari "ruang dan waktu yang relatif" ini adalah dilatasi waktu -- waktu yang bisa "melambat" bagi benda yang bergerak sangat cepat.</p>
<a href="/materi/dilatasi-waktu" class="btn btn-primary">⏱️ Lanjut ke Dilatasi Waktu →</a>
</div>
