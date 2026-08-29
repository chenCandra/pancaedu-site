---
title: "Konsep Energi"
description: "Apa sebenarnya energi itu -- definisi, satuan, sifatnya sebagai besaran skalar, sampai Hukum Kekekalan Energi yang jadi dasar dari semua pembahasan energi selanjutnya."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-29
tags: ["Energi", "Fisika Kelas X", "Fase E"]
kuis:
  - soal: "Secara fisika, energi paling tepat didefinisikan sebagai..."
    pilihan: ["Sesuatu yang membuat benda bergerak cepat", "Kemampuan untuk melakukan usaha (kerja)", "Kekuatan yang dimiliki benda besar", "Panas yang keluar dari suatu benda"]
    jawaban: 1
    penjelasan: "Energi didefinisikan sebagai kemampuan untuk melakukan usaha -- benda yang punya energi berpotensi menggerakkan, memanaskan, atau mengubah sesuatu."
  - soal: "Satuan SI untuk energi adalah..."
    pilihan: ["Newton", "Watt", "Joule", "Pascal"]
    jawaban: 2
    penjelasan: "Satuan energi dalam SI adalah joule (J). Newton adalah satuan gaya, watt satuan daya, pascal satuan tekanan."
  - soal: "Berdasarkan ada tidaknya arah, energi termasuk besaran..."
    pilihan: ["Vektor, karena energi bisa berpindah", "Skalar, karena energi cukup dinyatakan dengan nilai saja", "Kadang skalar kadang vektor tergantung bentuknya", "Bukan besaran, cuma konsep abstrak"]
    jawaban: 1
    penjelasan: "Energi adalah besaran skalar -- cukup dinyatakan dengan angka dan satuan (mis. 500 J), tidak perlu arah seperti gaya atau kecepatan."
  - soal: "Bunyi Hukum Kekekalan Energi yang paling tepat adalah..."
    pilihan: ["Energi bisa diciptakan kapan saja dibutuhkan", "Energi total suatu sistem tertutup selalu tetap -- tidak diciptakan atau dimusnahkan, cuma berubah bentuk", "Energi selalu berkurang seiring waktu", "Energi cuma berlaku untuk benda yang bergerak"]
    jawaban: 1
    penjelasan: "Hukum Kekekalan Energi menyatakan energi tidak bisa diciptakan atau dimusnahkan -- ia cuma berubah dari satu bentuk ke bentuk lain, atau berpindah dari satu benda ke benda lain."
  - soal: "Sebuah lampu menyala terus-menerus tanpa disambungkan ke sumber listrik apa pun. Kenapa hal ini TIDAK mungkin terjadi?"
    pilihan: ["Karena lampu memang dirancang harus mati", "Karena melanggar Hukum Kekekalan Energi -- energi cahaya & panas yang dipancarkan harus berasal dari suatu sumber energi", "Karena lampu butuh oksigen buat menyala", "Karena cahaya tidak butuh energi sama sekali"]
    jawaban: 1
    penjelasan: "Energi tidak bisa muncul begitu saja dari ketiadaan. Cahaya dan panas yang dipancarkan lampu harus berasal dari energi yang masuk ke dalamnya (listrik) -- kalau tidak ada sumbernya, itu melanggar Hukum Kekekalan Energi."
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

.mtr-cta {
  margin-block: 2.5rem 1rem;
  padding: 1.5rem;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
}

.mtr-cta p { margin: 0 0 1rem; color: var(--ink-soft); }
</style>

Kalian mendorong meja, menyalakan lampu, atau berlari mengejar bus -- semuanya butuh sesuatu yang sama: **energi**. Kata ini dipakai hampir setiap hari, tapi coba tanyakan ke diri sendiri: sebenarnya, apa sih energi itu?

## 🔎 Apa Itu Energi?

<div class="mtr-def">
💡 <strong>Energi</strong> adalah kemampuan untuk melakukan usaha (kerja).
</div>

Kalau sesuatu punya energi, artinya ia *berpotensi* menggerakkan, memanaskan, menerangi, atau mengubah sesuatu yang lain. Air yang mengalir punya energi karena bisa memutar turbin. Baterai punya energi karena bisa menyalakan lampu. Makanan punya energi karena bisa "diubah" tubuh kalian jadi tenaga buat bergerak.

~~Energi cuma soal benda yang bergerak cepat~~ → tidak selalu. Batu yang diam di atas tebing juga punya energi (tersimpan, siap "dipakai" kalau jatuh) -- kita akan bahas ini lebih detail di materi [Bentuk-bentuk Energi](/materi/mengenal-ragam-energi).

## ⚖️ Satuan Energi

Satuan SI untuk energi adalah **joule (J)**, diambil dari nama fisikawan James Prescott Joule. Karena energi adalah besaran turunan, satuan joule bisa diturunkan dari besaran pokok:

<div class="mtr-formula">1 J = 1 kg·m²/s²</div>

Di kehidupan sehari-hari, kalian mungkin lebih sering dengar satuan lain seperti **kalori** (buat energi makanan) atau **kWh** (buat energi listrik) -- keduanya sebenarnya cuma satuan alternatif untuk besaran yang sama, bisa dikonversi ke joule.

<div class="mtr-note">
🔗 Ingat lagi materi <a href="/materi/besaran-turunan">Besaran Turunan</a>? Energi adalah salah satu contohnya -- terbentuk dari kombinasi besaran pokok massa, panjang, dan waktu.
</div>

## 📐 Energi Itu Besaran Skalar

Masih ingat klasifikasi besaran skalar dan vektor dari materi [Besaran dan Satuan](/materi/besaran-dan-satuan)? Energi termasuk **besaran skalar** -- cukup dinyatakan dengan nilai dan satuan saja (misalnya "500 J"), tanpa perlu arah.

Ini beda dengan gaya atau kecepatan yang butuh arah supaya bermakna lengkap. Energi tidak punya "arah" -- baterai 5000 J energinya ya tetap 5000 J, tidak peduli baterainya menghadap ke mana.

## ♻️ Hukum Kekekalan Energi

Ini salah satu hukum paling fundamental dalam Fisika, bahkan berlaku di semua cabang ilmu sains:

<div class="mtr-def">
♻️ <strong>Hukum Kekekalan Energi:</strong> energi tidak dapat diciptakan atau dimusnahkan -- energi cuma bisa berubah dari satu bentuk ke bentuk lain, atau berpindah dari satu benda/sistem ke benda/sistem lain.
</div>

Artinya, energi total di alam semesta ini jumlahnya **tetap**. Yang berubah cuma bentuknya -- energi kimia dalam makanan berubah jadi energi gerak saat kalian berlari, energi listrik berubah jadi energi cahaya dan panas di lampu, dan seterusnya. Perubahan bentuk energi ini akan kita bahas tuntas di materi [Perubahan Energi](/materi/perubahan-energi).

<div class="mtr-note">
⚠️ <strong>Ini bukan berarti energi tidak pernah "hilang" dalam artian sehari-hari.</strong> Kalau bola menggelinding lalu berhenti karena gesekan, energi geraknya tidak lenyap -- ia berubah jadi energi panas (kalor) akibat gesekan, cuma bentuknya jadi kurang "berguna" buat kita.
</div>

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Energi bisa habis kalau dipakai terus-menerus."</strong><br>
Kurang tepat. <strong class="mtr-right">Energi tidak pernah benar-benar habis</strong> -- ia berubah bentuk. Yang "habis" biasanya adalah SUMBER energi yang bisa kita manfaatkan dengan mudah (mis. bensin di tangki), bukan energinya itu sendiri secara total.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Cuma benda yang bergerak yang punya energi."</strong><br>
Salah. <strong class="mtr-right">Benda diam pun bisa punya energi</strong> -- misalnya energi potensial (posisi/ketinggian) atau energi kimia (tersimpan dalam ikatan molekul).
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Alat/mesin bisa menciptakan energi baru kalau dirancang dengan cermat."</strong><br>
Tidak mungkin. <strong class="mtr-right">Tidak ada alat yang bisa menciptakan energi dari nol</strong> -- setiap mesin cuma bisa mengubah energi dari satu bentuk ke bentuk lain, dan selalu ada energi yang "terbuang" jadi panas di prosesnya.
</div>

## 🎯 Intinya

Perhatikan bahwa satu prinsip -- Hukum Kekekalan Energi -- sebenarnya menjadi jawaban untuk hampir semua pertanyaan "kenapa" seputar energi yang mungkin muncul di kepala kalian. Kenapa mesin tidak bisa 100% efisien? Kenapa tidak ada "mesin gerak abadi" yang bisa terus menyala tanpa sumber energi? Kenapa bola yang menggelinding akhirnya berhenti? Semuanya berakar dari fakta bahwa **energi cuma bisa dipindah-pindahkan bentuknya, tidak pernah bisa diciptakan dari kekosongan atau benar-benar dimusnahkan.**

Prinsip inilah yang akan terus jadi pegangan kalian di dua materi selanjutnya -- saat mengenal berbagai bentuk energi, dan saat melihat bagaimana energi berpindah dari satu bentuk ke bentuk lainnya.

## 🤔 Coba Pikirkan

Sebuah mainan mobil-mobilan bertenaga baterai bergerak sampai baterainya "habis", lalu berhenti.

1. Menurut Hukum Kekekalan Energi, apakah energi di baterai itu benar-benar hilang total? Kalau tidak, ke mana perginya?
2. Coba sebutkan minimal 2 bentuk energi yang mungkin terlibat selama mobil-mobilan itu bergerak (sebelum kalian membaca materi Bentuk-bentuk Energi).

Tuliskan dugaanmu dulu, baru cek lagi setelah membaca materi selanjutnya.

<div class="mtr-cta">
<p>Sekarang kamu paham fondasinya: energi, satuannya, dan Hukum Kekekalan Energi. Saatnya kenalan sama berbagai bentuk energi yang ada di sekitar kita.</p>
<a href="/materi/mengenal-ragam-energi" class="btn btn-primary">⚡ Lanjut ke Bentuk-bentuk Energi →</a>
</div>
