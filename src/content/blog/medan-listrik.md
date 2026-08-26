---
title: "Medan Listrik: Pengaruh yang Tak Terlihat di Sekitar Muatan"
description: "Kenapa muatan listrik bisa 'memengaruhi' muatan lain tanpa bersentuhan? Kenalan sama medan listrik -- definisi, rumus, arah, dan hubungannya dengan Hukum Coulomb."
category: materi
mapel: Fisika
kelas: XII
pubDate: 2026-08-26
tags: ["Medan Listrik", "Fisika Kelas XII", "Fase F", "Listrik Statis"]
kuis:
  - soal: "Medan listrik di suatu titik didefinisikan sebagai..."
    pilihan: ["Jumlah muatan yang ada di titik tersebut", "Gaya listrik yang bekerja pada satu satuan muatan uji positif di titik itu", "Jarak antara dua muatan", "Energi potensial listrik di titik itu"]
    jawaban: 1
    penjelasan: "Medan listrik (E) didefinisikan sebagai E = F/q -- gaya listrik per satuan muatan uji positif."
  - soal: "Sebuah muatan titik +5 μC berada sendirian di suatu titik. Berapa kuat medan listrik pada jarak 10 cm darinya?"
    pilihan: ["4,5 × 10⁴ N/C", "4,5 × 10⁵ N/C", "4,5 × 10⁶ N/C", "4,5 × 10⁷ N/C"]
    jawaban: 2
    penjelasan: "E = kQ/r² = (9×10⁹ × 5×10⁻⁶) / (0,1)² = 4,5×10⁶ N/C."
  - soal: "Sebuah muatan +4 nC ditempatkan di titik yang punya kuat medan listrik 2.000 N/C. Berapa gaya yang dialami muatan tersebut?"
    pilihan: ["8 × 10⁻⁶ N", "8 × 10⁻³ N", "2 × 10⁻⁶ N", "500 N"]
    jawaban: 0
    penjelasan: "F = qE = (4×10⁻⁹)(2000) = 8×10⁻⁶ N."
  - soal: "Pernyataan: 'Nilai kuat medan listrik di suatu titik akan berubah kalau kita mengganti muatan uji dengan yang lebih besar.' Manakah penilaian yang paling tepat?"
    pilihan: ["Benar, karena E = F/q, jadi q yang lebih besar pasti mengubah E", "Salah -- E ditentukan oleh muatan SUMBER di titik itu, bukan oleh muatan uji yang dipakai mengukurnya", "Benar, karena gaya F selalu berubah kalau q berubah", "Tidak bisa ditentukan tanpa tahu jenis muatan sumbernya"]
    jawaban: 1
    penjelasan: "Memang F berubah kalau q berubah -- TAPI rasio F/q (yaitu E) tetap konstan, karena E adalah properti ruang di titik itu (ditentukan muatan sumber), bukan tergantung muatan uji yang dipakai mengukurnya."
  - soal: "Arah medan listrik di sekitar sebuah muatan negatif adalah..."
    pilihan: ["Menjauhi muatan (radial keluar)", "Menuju muatan (radial masuk)", "Selalu horizontal", "Tidak memiliki arah tertentu"]
    jawaban: 1
    penjelasan: "Arah medan listrik = arah gaya pada muatan uji POSITIF. Karena muatan negatif menarik muatan positif, arah medannya menuju ke muatan negatif itu (radial masuk)."
  - soal: "Dua muatan +Q yang identik diletakkan berjauhan. Di titik tengah-tengah antara keduanya, kuat medan listrik totalnya adalah..."
    pilihan: ["Dua kali lebih besar dari medan salah satu muatan", "Sama dengan medan salah satu muatan", "Nol, karena kedua medan saling meniadakan", "Tidak bisa ditentukan"]
    jawaban: 2
    penjelasan: "Di titik tengah, medan dari tiap muatan mengarah saling menjauhi pusat (berlawanan arah) dan sama besar (jarak sama) -- sehingga total medannya nol."
draft: false
---

<style>
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

.mtr-note {
  border-left: 3px solid var(--accent);
  background: var(--accent-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.9rem 1.1rem;
  margin-block: 1.25rem;
  font-size: 0.9375rem;
}

.mtr-diagram {
  font-family: ui-monospace, 'Courier New', monospace;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 1rem;
  margin-block: 1rem;
  line-height: 1.9;
  font-size: 0.9375rem;
}
</style>

## 🌱 Apersepsi

Pernahkah kamu mendekatkan balon yang habis digosokkan ke rambut, lalu melihat rambutmu ikut "berdiri" mengejarnya -- padahal balonnya belum menyentuh rambutmu sama sekali? Ada sesuatu yang tak terlihat di sekitar balon itu, yang bisa "menjangkau" dan memengaruhi benda lain dari jarak jauh.

## 🤔 Coba Pikirkan

Kalau ada satu muatan listrik sendirian di suatu ruangan, dan belum ada muatan lain di dekatnya yang bisa "merasakan" pengaruhnya -- menurutmu, apakah pengaruh itu tetap ada di ruang sekitar muatan tersebut, atau baru muncul begitu ada muatan lain yang didekatkan?

## 🔎 Eksplorasi Konsep

### Medan Listrik Itu Apa?

Di materi [Hukum Coulomb](/materi/hukum-coulomb), kamu sudah belajar gaya antara DUA muatan. Tapi sebenarnya, satu muatan saja sudah cukup untuk "mengubah" ruang di sekitarnya -- ruang itu jadi punya kemampuan memberi gaya ke muatan lain, kapan pun muatan lain itu didatangkan. Kemampuan itulah yang disebut **medan listrik**.

<div class="mtr-def">
⚡ <strong>Medan listrik (E)</strong> adalah ruang di sekitar muatan listrik yang memiliki kemampuan memberi gaya listrik pada muatan lain yang berada di dalamnya.
</div>

Jawaban dari pertanyaan di atas: **medan listrik tetap ada**, walau belum ada muatan lain yang merasakannya. Medan itu properti dari ruang di sekitar muatan sumbernya sendiri -- bukan sesuatu yang baru "muncul" pas ada muatan lain datang.

### Rumus Medan Listrik

Secara matematis, medan listrik didefinisikan sebagai gaya per satuan muatan uji:

<div class="mtr-formula">E = F / q</div>

* **E** = kuat medan listrik (N/C, bisa juga ditulis V/m)
* **F** = gaya listrik yang dialami muatan uji (N)
* **q** = besar muatan uji positif (C)

Kenapa harus muatan uji **positif** dan **kecil**? Positif, supaya arah medan bisa didefinisikan konsisten (searah gaya yang dialami muatan positif). Kecil, supaya muatan uji itu sendiri tidak ikut "mengganggu" medan yang sedang diukur.

Kalau sumber medannya adalah satu muatan titik Q, rumusnya bisa diturunkan dari Hukum Coulomb (F = kQq/r², lalu dibagi q):

<div class="mtr-formula">E = k|Q| / r²</div>

* **k** ≈ 9 × 10⁹ N·m²/C²
* **Q** = muatan sumber (C)
* **r** = jarak dari muatan sumber (m)

Perhatikan maknanya: **E ∝ 1/r²** -- makin jauh dari muatan sumber, medannya melemah secara kuadrat, persis seperti gaya Coulomb.

### Arah Medan Listrik

Arah medan listrik selalu didefinisikan sebagai arah gaya yang dialami muatan uji **positif**:

<div class="mtr-diagram">
+  ⟶ ⟶ ⟶ ⟶   (medan menjauhi muatan positif)<br>
−  ⟵ ⟵ ⟵ ⟵   (medan menuju muatan negatif)
</div>

Kalau digambar sebagai garis medan, garis-garisnya **keluar** dari muatan positif dan **masuk** ke muatan negatif. Makin rapat garisnya, makin kuat medannya di situ.

### Kalau Ada Muatan di Dalam Medan

Sebaliknya, kalau sudah tahu kuat medan E di suatu titik, dan ada muatan q ditaruh di titik itu, gaya yang dialaminya tinggal dihitung balik:

<div class="mtr-formula">F = qE</div>

Ini rumus yang sama persis dengan Hukum Coulomb, cuma dilihat dari sudut pandang berbeda -- bukan "gaya antara dua muatan", tapi "gaya pada satu muatan akibat medan yang sudah ada di situ".

## 🧠 Mari Kita Analisis

Rani bilang: **"Medan listrik cuma ada kalau ada dua muatan yang saling berdekatan."**

Menurutmu, apakah pernyataan Rani ini tepat?

Coba pikirkan dulu sebelum lanjut baca. ...

Pernyataan Rani **kurang tepat**. Medan listrik sudah ada di sekitar SATU muatan saja, tanpa perlu muatan kedua. Yang butuh dua muatan itu bukan medannya, tapi **efek/gaya yang bisa diukur** dari medan itu -- karena gaya cuma "kelihatan" kalau ada muatan lain yang merasakannya. Medannya sendiri sudah eksis duluan.

## 🧮 Contoh Soal

### Contoh 1 — Mencari Kuat Medan

Sebuah muatan titik +4 μC berada sendirian di suatu ruang. Berapa kuat medan listrik pada jarak 3 cm dari muatan itu?

Diketahui: Q = 4×10⁻⁶ C, r = 0,03 m.

<div class="mtr-formula">E = kQ/r² = (9×10⁹)(4×10⁻⁶) / (0,03)² = 4 × 10⁷ N/C</div>

### Contoh 2 — Dari Medan ke Gaya

Titik P memiliki kuat medan listrik 500 N/C. Kalau sebuah muatan uji +2 nC ditaruh di titik P, berapa gaya yang dialaminya?

<div class="mtr-formula">F = qE = (2×10⁻⁹)(500) = 1 × 10⁻⁶ N = 1 μN</div>

### Contoh 3 — Kontekstual: Medan Listrik Saat Badai Petir

Awan bermuatan negatif yang sangat besar bisa menciptakan medan listrik ekstrem menjelang petir menyambar. Andaikan sebuah titik di tanah berjarak 200 m dari pusat muatan awan yang diperkirakan sekitar 50 C, berapa kira-kira kuat medan listrik di titik tersebut?

<div class="mtr-formula">E = kQ/r² = (9×10⁹)(50) / (200)² ≈ 1,1 × 10⁷ N/C</div>

Medan sebesar itu sudah cukup kuat untuk mengionisasi udara di sekitarnya -- salah satu alasan kenapa petir bisa "menyambar" lewat udara yang biasanya tidak menghantarkan listrik.

## 💡 Coba Pikirkan Lagi

Tadi kamu memikirkan apakah pengaruh sebuah muatan tetap ada meski belum ada muatan lain yang merasakannya. Sekarang setelah belajar konsep medan listrik, gimana -- jawabanmu masih sama?

Jawaban ilmiahnya: **iya, tetap ada**. Medan listrik adalah properti ruang di sekitar muatan sumbernya sendiri -- ia tidak "menunggu" kehadiran muatan lain untuk eksis, cuma menunggu muatan lain untuk bisa "dirasakan" efeknya.

## 🔥 Tantangan HOTS

Dua muatan diletakkan pada jarak tertentu: +4 μC dan −1 μC (berbeda jenis, besarnya juga berbeda). Apakah ada titik di sekitar kedua muatan itu (di mana pun posisinya) di mana kuat medan listrik totalnya sama dengan nol? Jelaskan alasanmu -- tanpa perlu menghitung posisi persisnya, cukup analisis apakah titik seperti itu MUNGKIN ada, dan kira-kira di daerah mana.

<div class="mtr-note">
💭 <strong>Petunjuk:</strong> gambarkan dulu arah medan dari masing-masing muatan di tiga daerah berbeda -- di ANTARA kedua muatan, di luar garis hubung dekat muatan +4 μC, dan di luar garis hubung dekat muatan −1 μC. Bandingkan arahnya di tiap daerah.
</div>

## 🪞 Refleksi

✨ Coba lengkapi kalimat ini di catatanmu: **"Sekarang saya paham bahwa medan listrik itu ..."**

Atau renungkan: bagian mana yang masih terasa membingungkan -- arah medannya, rumusnya, atau hubungannya dengan Hukum Coulomb?

## 🌟 Ringkasan

* ⚡ Medan listrik (E) = gaya listrik per satuan muatan uji positif: **E = F/q**.
* ⚡ Untuk muatan titik: **E = kQ/r²** -- makin jauh, medannya makin lemah (berbanding terbalik kuadrat jarak).
* ⚡ Arah medan: menjauh dari muatan positif, menuju muatan negatif.
* ⚡ Kalau ada muatan q di dalam medan E, gaya yang dialaminya **F = qE**.
* ⚡ Medan listrik tetap "ada" di ruang sekitar muatan, meski belum ada muatan lain yang merasakannya.
