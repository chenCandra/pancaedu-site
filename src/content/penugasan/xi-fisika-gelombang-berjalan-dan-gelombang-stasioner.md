---
judul: "Gelombang Berjalan dan Gelombang Stasioner"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar gelombang berjalan, gelombang stasioner, simpul, dan perut."
materiSlug: gelombang-berjalan-dan-gelombang-stasioner
pinHash: fcbfb2a5fa7b11ebac4da07ce95c042c66cf7e01cba9095a8410fda86f927c52
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Gelombang stasioner terbentuk dari..."
    pilihan:
      - { id: a, teks: "Superposisi dua gelombang identik berlawanan arah" }
      - { id: b, teks: "Satu gelombang tunggal yang diam" }
      - { id: c, teks: "Gelombang dengan frekuensi nol" }
      - { id: d, teks: "Gelombang yang tidak membawa energi" }
    jawabanBenarId: a
    penjelasan: "Superposisi dua gelombang berlawanan arah."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Titik yang selalu diam pada gelombang stasioner disebut..."
    pilihan:
      - { id: a, teks: "Simpul (node)" }
      - { id: b, teks: "Perut (antinode)" }
      - { id: c, teks: "Puncak" }
      - { id: d, teks: "Sumber" }
    jawabanBenarId: a
    penjelasan: "Simpul (node)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Rumus jumlah simpul pada dawai kedua ujung terikat dengan n perut adalah..."
    pilihan:
      - { id: a, teks: "n+1" }
      - { id: b, teks: "n" }
      - { id: c, teks: "n−1" }
      - { id: d, teks: "2n" }
    jawabanBenarId: a
    penjelasan: "Jumlah simpul = n+1."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Dawai 1 m dengan 2 perut. Berapa panjang gelombangnya? (L=n×λ/2)"
    pilihan:
      - { id: a, teks: "1 m" }
      - { id: b, teks: "0,5 m" }
      - { id: c, teks: "2 m" }
      - { id: d, teks: "4 m" }
    jawabanBenarId: a
    penjelasan: "1=2×(λ/2) → λ=1 m."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Amplitudo gelombang berjalan sama di semua titik sepanjang gelombang."
    jawabanBenar: true
    penjelasan: "Benar."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Amplitudo gelombang stasioner sama di semua titik, seperti gelombang berjalan."
    jawabanBenar: false
    penjelasan: "Salah -- amplitudo bervariasi, nol di simpul, maksimum di perut."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Kedua ujung dawai yang terikat selalu menjadi simpul."
    jawabanBenar: true
    penjelasan: "Benar -- ujung terikat tidak bisa bergerak, otomatis simpul."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Dawai 2,4 m dengan 6 perut. Berapa panjang gelombangnya, dalam meter?"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["0.8", "0,8"]
    penjelasan: "λ=2×2,4/6=4,8/6=0,8 m."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Dawai 1 m membentuk gelombang stasioner dengan λ=0,4 m. Berapa jumlah perutnya?"
    angka: true
    toleransi: 0.2
    jawabanBenar: ["5"]
    penjelasan: "n=L/(λ/2)=1/0,2=5."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Dawai dengan 4 perut punya berapa jumlah simpul?"
    angka: true
    toleransi: 0.2
    jawabanBenar: ["5"]
    penjelasan: "Jumlah simpul = n+1 = 4+1 = 5."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan istilah dengan definisinya."
    pasangan:
      - { id: p1, kiri: "Simpul", kanan: "Amplitudo nol" }
      - { id: p2, kiri: "Perut", kanan: "Amplitudo maksimum (2A)" }
    penjelasan: "Simpul diam, perut bergetar maksimum."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan jenis gelombang dengan ciri amplitudonya."
    pasangan:
      - { id: p1, kiri: "Gelombang Berjalan", kanan: "Amplitudo sama di semua titik" }
      - { id: p2, kiri: "Gelombang Stasioner", kanan: "Amplitudo bervariasi per posisi" }
    penjelasan: "Berjalan seragam, stasioner bervariasi."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung jumlah simpul dari panjang dawai dan panjang gelombang, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan panjang dawai (L) dan panjang gelombang (λ)" }
      - { id: i2, teks: "Hitung jumlah perut n = L/(λ/2)" }
      - { id: i3, teks: "Hitung jumlah simpul = n+1" }
    penjelasan: "L dan λ dulu, hitung n, baru jumlah simpul."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sesuai jenis gelombangnya."
    kategori:
      - { id: berjalan, label: "Gelombang Berjalan" }
      - { id: stasioner, label: "Gelombang Stasioner" }
    item:
      - { id: t1, teks: "Terus merambat membawa energi", kategoriBenarId: berjalan }
      - { id: t2, teks: "Terbentuk dari superposisi dua gelombang berlawanan arah", kategoriBenarId: stasioner }
      - { id: t3, teks: "Punya simpul dan perut", kategoriBenarId: stasioner }
    penjelasan: "Berjalan merambat, stasioner punya simpul-perut dari superposisi."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sesuai kebenarannya."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Partikel medium tetap bergetar naik-turun pada gelombang stasioner (kecuali di simpul)", kategoriBenarId: benar }
      - { id: t2, teks: "Gelombang stasioner berarti tidak ada gerakan sama sekali", kategoriBenarId: salah }
      - { id: t3, teks: "Jarak simpul ke perut bersebelahan adalah λ/4", kategoriBenarId: benar }
    penjelasan: "Partikel tetap bergetar (benar). 'Diam total' salah -- yang diam polanya. Jarak simpul-perut λ/4 (benar)."
    skor: 1
draft: false
---
