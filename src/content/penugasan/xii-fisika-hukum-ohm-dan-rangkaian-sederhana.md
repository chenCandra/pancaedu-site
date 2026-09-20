---
judul: "Hukum Ohm dan Rangkaian Sederhana"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar Hukum Ohm, pemasangan amperemeter/voltmeter, serta daya dan energi listrik."
materiSlug: hukum-ohm-dan-rangkaian-sederhana
pinHash: 4cf0a8c1f2fbc9ab3ad508a0ca7df28945c4789d6acad6466c680ddc4bd7d9da
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Hukum Ohm menyatakan hubungan antara..."
    pilihan:
      - { id: a, teks: "Tegangan, arus, dan hambatan" }
      - { id: b, teks: "Massa, gaya, dan percepatan" }
      - { id: c, teks: "Usaha, energi, dan daya" }
      - { id: d, teks: "Muatan, medan, dan gaya" }
    jawabanBenarId: a
    penjelasan: "Hukum Ohm menyatakan V = I × R -- hubungan antara tegangan (V), arus (I), dan hambatan (R)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Satuan SI untuk hambatan (resistansi) adalah..."
    pilihan:
      - { id: a, teks: "Volt" }
      - { id: b, teks: "Ampere" }
      - { id: c, teks: "Ohm" }
      - { id: d, teks: "Watt" }
    jawabanBenarId: c
    penjelasan: "Satuan SI untuk hambatan adalah ohm (Ω)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Amperemeter harus dipasang secara..."
    pilihan:
      - { id: a, teks: "Seri, di jalur utama rangkaian" }
      - { id: b, teks: "Paralel, melintang di komponen yang diukur" }
      - { id: c, teks: "Tidak masalah, seri atau paralel sama saja" }
      - { id: d, teks: "Terpisah dari rangkaian" }
    jawabanBenarId: a
    penjelasan: "Amperemeter dipasang SERI supaya seluruh arus yang mau diukur melewatinya."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Voltmeter harus dipasang secara..."
    pilihan:
      - { id: a, teks: "Seri, di jalur utama rangkaian" }
      - { id: b, teks: "Paralel, melintang di komponen yang diukur" }
      - { id: c, teks: "Tidak masalah, seri atau paralel sama saja" }
      - { id: d, teks: "Terpisah dari rangkaian" }
    jawabanBenarId: b
    penjelasan: "Voltmeter dipasang PARALEL terhadap komponen yang diukur."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Menurunkan hambatan rangkaian sampai mendekati nol itu aman-aman saja."
    jawabanBenar: false
    penjelasan: "Salah -- hambatan yang terlalu kecil menyebabkan hubung singkat (short circuit), arus jadi sangat besar dan berbahaya."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Daya listrik dirumuskan sebagai P = V × I."
    jawabanBenar: true
    penjelasan: "Benar -- daya listrik adalah hasil kali tegangan dan arus."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Amperemeter dan voltmeter boleh dipasang tertukar posisinya, tidak masalah."
    jawabanBenar: false
    penjelasan: "Salah -- amperemeter wajib seri dan voltmeter wajib paralel, memasang terbalik membuat pembacaan jadi tidak akurat."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah resistor 20 Ω dihubungkan ke sumber tegangan 6 V. Berapa arus yang mengalir, dalam A?"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["0.3"]
    penjelasan: "I = V/R = 6/20 = 0,3 A."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah lampu menyala dengan tegangan 6 V dan arus 0,3 A. Berapa dayanya, dalam W?"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["1.8"]
    penjelasan: "P = V × I = 6 × 0,3 = 1,8 W."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Sebuah alat berdaya 1,8 W menyala selama 2 jam. Berapa energi yang dipakai, dalam Wh?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["3.6"]
    penjelasan: "E = P × t = 1,8 × 2 = 3,6 Wh."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran dengan satuannya."
    pasangan:
      - { id: p1, kiri: "Tegangan", kanan: "Volt" }
      - { id: p2, kiri: "Arus", kanan: "Ampere" }
      - { id: p3, kiri: "Hambatan", kanan: "Ohm" }
      - { id: p4, kiri: "Daya", kanan: "Watt" }
    penjelasan: "Empat besaran dasar rangkaian listrik beserta satuan SI-nya."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan alat ukur dengan cara pemasangannya."
    pasangan:
      - { id: p1, kiri: "Amperemeter", kanan: "Seri" }
      - { id: p2, kiri: "Voltmeter", kanan: "Paralel" }
    penjelasan: "Amperemeter mengukur arus jadi harus dilewati semua arus (seri). Voltmeter mengukur beda potensial jadi dipasang melintang (paralel)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung daya dan energi listrik suatu alat, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan tegangan (V) dan arus (I)" }
      - { id: i2, teks: "Hitung daya P = V × I" }
      - { id: i3, teks: "Tentukan waktu pemakaian (t)" }
      - { id: i4, teks: "Hitung energi E = P × t" }
    penjelasan: "Menghitung energi perlu menghitung daya lebih dulu, baru dikalikan waktu."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "I = V/R adalah bentuk lain dari Hukum Ohm", kategoriBenarId: benar }
      - { id: t2, teks: "Amperemeter dipasang paralel", kategoriBenarId: salah }
      - { id: t3, teks: "Satuan energi listrik bisa dinyatakan dalam Wh", kategoriBenarId: benar }
      - { id: t4, teks: "Hubung singkat terjadi kalau hambatan sangat besar", kategoriBenarId: salah }
    penjelasan: "Amperemeter dipasang SERI (bukan paralel), dan hubung singkat justru terjadi kalau hambatan sangat KECIL (bukan besar)."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan kondisi berikut sebagai Circuit Open atau Circuit Closed."
    kategori:
      - { id: open, label: "Circuit Open" }
      - { id: closed, label: "Circuit Closed" }
    item:
      - { id: t1, teks: "Sakelar dalam posisi OFF", kategoriBenarId: open }
      - { id: t2, teks: "Arus tidak mengalir, I = 0 A", kategoriBenarId: open }
      - { id: t3, teks: "Sakelar dalam posisi ON, rangkaian tersambung penuh", kategoriBenarId: closed }
      - { id: t4, teks: "Arus mengalir normal sesuai Hukum Ohm", kategoriBenarId: closed }
    penjelasan: "Circuit open berarti rangkaian terbuka (sakelar OFF, arus 0). Circuit closed berarti rangkaian tersambung penuh dan arus mengalir."
    skor: 1
draft: false
---
