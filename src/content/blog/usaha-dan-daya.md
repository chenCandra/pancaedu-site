---
title: "Usaha dan Daya"
description: "Pengantar usaha (kerja) dan daya dalam Fisika -- apa bedanya dari arti sehari-hari, hubungannya dengan energi kinetik, dan cara menghitung keduanya secara sederhana."
category: materi
mapel: Fisika
kelas: X
pubDate: 2026-08-29
tags: ["Usaha", "Daya", "Energi", "Fisika Kelas X", "Fase E"]
simulasi:
  url: "https://pancaedu.web.id/lab-embeds/usaha-dan-daya.html"
  judul: "Usaha dan Daya: Gaya, Sudut, dan Perpindahan"
  sumber: "Lab Maya PancaEdu"
  tinggi: 1000
kuis:
  - soal: "Dalam Fisika, usaha (kerja) dikatakan terjadi kalau..."
    pilihan: ["Seseorang mendorong tembok sekuat tenaga tapi tembok itu tidak bergeser sedikit pun", "Sebuah gaya bekerja pada benda DAN benda itu berpindah searah (atau ada komponen searah) gaya tersebut", "Seseorang duduk sambil memegang buku berat tanpa bergerak", "Cukup ada gaya yang bekerja, tidak peduli benda berpindah atau tidak"]
    jawaban: 1
    penjelasan: "Usaha dalam Fisika butuh DUA syarat: ada gaya, DAN ada perpindahan akibat gaya itu. Mendorong tembok yang tidak bergerak = usaha 0, meski capek."
  - soal: "Rumus usaha adalah..."
    pilihan: ["W = F + s", "W = F × s × cos θ", "W = F / s", "W = F × t"]
    jawaban: 1
    penjelasan: "W = F × s × cos θ, dengan θ adalah sudut antara arah gaya dan arah perpindahan."
  - soal: "Menurut teorema usaha-energi, usaha total yang bekerja pada benda sama dengan..."
    pilihan: ["Perubahan energi potensial benda", "Perubahan energi kinetik benda", "Massa benda dikali percepatan gravitasi", "Selalu nol"]
    jawaban: 1
    penjelasan: "Teorema usaha-energi: W = ΔEₖ -- usaha total yang bekerja pada benda sama dengan perubahan energi kinetiknya."
  - soal: "Dua orang mengangkat beban yang sama beratnya ke ketinggian yang sama. Orang A butuh 5 detik, orang B butuh 10 detik. Manakah pernyataan yang benar?"
    pilihan: ["Orang A melakukan usaha lebih besar", "Usaha keduanya sama, tapi daya orang A lebih besar", "Daya keduanya sama", "Orang B melakukan usaha lebih besar"]
    jawaban: 1
    penjelasan: "Usaha (W = F×s) sama karena beban dan ketinggiannya sama. Tapi daya (P = W/t) orang A lebih besar karena waktunya lebih singkat -- daya soal SEBERAPA CEPAT usaha itu dilakukan."
  - soal: "Satuan SI untuk daya adalah..."
    pilihan: ["Joule", "Newton", "Watt", "Pascal"]
    jawaban: 2
    penjelasan: "Satuan daya adalah watt (W), setara dengan 1 joule per sekon."
draft: false
---

<style>
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
</style>

Setelah kenalan sama energi dan [perubahannya](/materi/perubahan-energi), ada dua istilah yang selalu muncul berdampingan tiap kali energi "dipakai" untuk melakukan sesuatu: **usaha** dan **daya**. Sekilas terdengar seperti kata sehari-hari, tapi keduanya punya arti yang jauh lebih spesifik dalam Fisika.

## 💪 Apa Itu Usaha?

~~Usaha itu sama saja dengan capek atau berjuang~~ → dalam Fisika, tidak begitu. Kalian bisa mendorong tembok sekuat tenaga sampai berkeringat, tapi kalau tembok itu tidak bergeser sedikit pun, **usaha yang kalian lakukan (secara Fisika) adalah nol**.

<div class="mtr-def">
💡 <strong>Usaha (W)</strong> adalah hasil kali antara gaya yang bekerja pada benda dengan perpindahan yang dialami benda akibat gaya tersebut, searah dengan gaya itu.
</div>

<div class="mtr-formula">W = F × s × cos θ</div>

* **W** = usaha (J)
* **F** = besar gaya (N)
* **s** = besar perpindahan (m)
* **θ** = sudut antara arah gaya dan arah perpindahan

Karena satuan usaha juga **joule (J)** -- sama seperti satuan energi -- itu bukan kebetulan: usaha pada dasarnya adalah **cara energi berpindah** dari satu benda/sistem ke benda/sistem lain.

<div class="mtr-note">
💡 Kalau θ = 90° (gaya tegak lurus arah perpindahan), usahanya NOL -- meski ada gaya dan ada perpindahan. Contohnya orang membawa tas sambil berjalan datar: gaya angkatnya ke atas, tapi perpindahannya mendatar, jadi usaha oleh gaya angkat itu = 0.
</div>

## ⚡ Usaha dan Energi Kinetik

Ingat lagi rumus energi kinetik, Eₖ = ½mv², dari materi [Bentuk-bentuk Energi](/materi/mengenal-ragam-energi)? Usaha dan energi kinetik ternyata berhubungan langsung lewat **teorema usaha-energi**:

<div class="mtr-formula">W = ΔEₖ = Eₖ akhir − Eₖ awal</div>

Artinya, usaha total yang bekerja pada benda sama dengan perubahan energi kinetiknya. Kalau ada usaha positif bekerja pada benda, kecepatannya bertambah (energi kinetiknya naik). Kalau usahanya negatif (misalnya gaya gesek yang melawan gerak), kecepatannya berkurang.

## ⏱️ Apa Itu Daya?

Bayangkan dua orang mengangkat beban yang sama beratnya, ke ketinggian yang sama -- usaha yang mereka lakukan **sama besar**. Tapi kalau orang pertama menyelesaikannya dalam 5 detik dan orang kedua dalam 10 detik, ada sesuatu yang jelas beda: **seberapa cepat** usaha itu dilakukan. Itulah yang disebut daya.

<div class="mtr-def">
💡 <strong>Daya (P)</strong> adalah besar usaha yang dilakukan tiap satuan waktu -- seberapa cepat energi dipindahkan atau diubah.
</div>

<div class="mtr-formula">P = W / t</div>

* **P** = daya (watt, W)
* **W** = usaha (J)
* **t** = waktu (s)

Satuan daya adalah **watt**, setara 1 joule per sekon. Ini juga satuan yang sama dipakai buat menandai daya alat listrik di rumah kalian (lampu 10 watt, setrika 350 watt, dst) -- makin besar wattnya, makin cepat alat itu "memakai" energi.

<div class="mtr-note">
🔗 Ingat konsep efisiensi dari materi <a href="/materi/perubahan-energi">Perubahan Energi</a>? Efisiensi daya bekerja dengan prinsip yang persis sama -- tidak semua daya listrik yang masuk ke sebuah alat berubah jadi daya yang berguna, sebagian selalu "bocor" jadi panas.
</div>

## 🧮 Contoh Soal Sederhana

Sebuah gaya 20 N mendorong balok sejauh 5 m searah gaya tersebut, dalam waktu 4 sekon. Berapa usaha dan daya yang dihasilkan?

<div class="mtr-formula">W = F × s = 20 × 5 = 100 J</div>
<div class="mtr-formula">P = W / t = 100 / 4 = 25 watt</div>

Sekarang coba geser-geser sendiri simulasinya di bawah -- ubah sudut gayanya sampai 90°, lihat langsung kenapa usahanya bisa jadi nol meski gaya dan perpindahannya tetap ada.

## ⚠️ Kesalahan Umum

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Kalau saya kelelahan mendorong sesuatu, berarti saya sudah melakukan usaha besar."</strong><br>
Belum tentu. <strong class="mtr-right">Kalau benda itu tidak berpindah sama sekali, usahanya nol</strong> secara Fisika -- capek bukan ukuran usaha, perpindahan yang jadi ukurannya.
</div>

<div class="mtr-note">
<strong class="mtr-wrong">❌ "Usaha dan daya itu sebenarnya konsep yang sama, cuma istilah beda."</strong><br>
Tidak sama. <strong class="mtr-right">Usaha soal SEBERAPA BESAR energi berpindah, daya soal SEBERAPA CEPAT itu terjadi.</strong> Dua orang bisa melakukan usaha yang sama besar tapi dayanya beda jauh, tergantung waktu yang mereka pakai.
</div>

## 🎯 Intinya

Perhatikan bahwa usaha dan daya sebenarnya cuma menjawab dua pertanyaan yang berbeda tentang hal yang sama: usaha menjawab **"berapa banyak energi yang berpindah?"**, sedangkan daya menjawab **"seberapa cepat perpindahan itu terjadi?"**. Begitu kalian bisa memisahkan dua pertanyaan ini di kepala, soal-soal yang kelihatannya membingungkan (seperti soal dua orang mengangkat beban di atas) jadi jauh lebih mudah dianalisis -- tinggal tentukan dulu, ini sedang menanyakan besarnya usaha, atau kecepatan melakukannya?

## 🤔 Coba Pikirkan

Sebuah motor listrik dipakai untuk mengangkat galon air ke atas meja. Motor lain yang lebih murah juga bisa mengangkat galon yang sama ke ketinggian yang sama, tapi butuh waktu dua kali lebih lama.

1. Apakah usaha yang dilakukan kedua motor itu sama besar? Kenapa?
2. Motor mana yang dayanya lebih besar?
3. Menurutmu, kenapa motor dengan daya lebih besar biasanya lebih mahal, padahal usaha yang dihasilkan bisa sama saja?

Materi selanjutnya kita ambil jarak dari rumus-rumus, dan lihat dari mana sebenarnya energi yang kita pakai berasal -- lanjut ke [Sumber Energi](/materi/sumber-energi).
