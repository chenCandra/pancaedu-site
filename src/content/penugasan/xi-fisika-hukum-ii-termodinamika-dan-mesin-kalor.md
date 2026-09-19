---
judul: "Hukum II Termodinamika dan Mesin Kalor"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar Hukum II Termodinamika dan efisiensi mesin kalor (Carnot)."
materiSlug: hukum-ii-termodinamika-dan-mesin-kalor
pinHash: b3f7b21448a9fff719e4581493d4cb927932a1b94d920f9f3d17c91ff3612167
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Menurut Hukum II Termodinamika, kalor mengalir secara spontan dari..."
    pilihan:
      - { id: a, teks: "Suhu tinggi ke suhu rendah" }
      - { id: b, teks: "Suhu rendah ke suhu tinggi" }
      - { id: c, teks: "Ke segala arah secara acak" }
      - { id: d, teks: "Tidak pernah mengalir sama sekali" }
    jawabanBenarId: a
    penjelasan: "Kalor mengalir spontan dari suhu tinggi ke rendah."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus efisiensi Carnot adalah..."
    pilihan:
      - { id: a, teks: "η = 1 − Tc/Th" }
      - { id: b, teks: "η = Tc/Th" }
      - { id: c, teks: "η = Th − Tc" }
      - { id: d, teks: "η = Th × Tc" }
    jawabanBenarId: a
    penjelasan: "η = 1 − Tc/Th."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Mesin Carnot bekerja antara 400 K dan 200 K. Berapa efisiensi maksimumnya?"
    pilihan:
      - { id: a, teks: "50%" }
      - { id: b, teks: "25%" }
      - { id: c, teks: "75%" }
      - { id: d, teks: "100%" }
    jawabanBenarId: a
    penjelasan: "η=1−200/400=0,5=50%."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Menurut Hukum II Termodinamika, efisiensi mesin kalor..."
    pilihan:
      - { id: a, teks: "Tidak akan pernah mencapai 100%" }
      - { id: b, teks: "Selalu bisa mencapai 100%" }
      - { id: c, teks: "Tidak berhubungan dengan suhu" }
      - { id: d, teks: "Selalu sama untuk semua mesin" }
    jawabanBenarId: a
    penjelasan: "Tidak ada mesin kalor dengan efisiensi 100%."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Kulkas membutuhkan usaha (listrik) untuk memindahkan kalor dari dingin ke panas."
    jawabanBenar: true
    penjelasan: "Benar -- ini berlawanan dengan arah alami aliran kalor."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Efisiensi Carnot adalah efisiensi yang benar-benar bisa dicapai mesin sungguhan."
    jawabanBenar: false
    penjelasan: "Salah -- efisiensi Carnot adalah batas atas teoritis, mesin sungguhan selalu lebih rendah."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Entropi total sistem tertutup tidak pernah berkurang menurut Hukum II Termodinamika."
    jawabanBenar: true
    penjelasan: "Benar."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Mesin Carnot antara 900 K dan 300 K. Berapa efisiensi maksimumnya, dalam persen?"
    angka: true
    toleransi: 1
    jawabanBenar: ["66.7", "66,7"]
    penjelasan: "η=1−300/900=1−0,333=0,667=66,7%."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Mesin kalor menyerap 5000 J dengan efisiensi 30%. Berapa usaha yang dihasilkan, dalam Joule?"
    angka: true
    toleransi: 20
    jawabanBenar: ["1500"]
    penjelasan: "W=0,3×5000=1.500 J."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Masih dari mesin di atas (Qmasuk=5000 J, W=1500 J), berapa kalor yang terbuang, dalam Joule?"
    angka: true
    toleransi: 20
    jawabanBenar: ["3500"]
    penjelasan: "Qkeluar=5000−1500=3.500 J."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Efisiensi Mesin", kanan: "η = W/Qmasuk" }
      - { id: p2, kiri: "Efisiensi Carnot", kanan: "η = 1 − Tc/Th" }
    penjelasan: "Efisiensi umum dan efisiensi maksimum teoritis."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan alat dengan arah perpindahan kalornya."
    pasangan:
      - { id: p1, kiri: "Mesin Kalor", kanan: "Panas ke dingin (alami)" }
      - { id: p2, kiri: "Kulkas/AC", kanan: "Dingin ke panas (butuh usaha)" }
    penjelasan: "Mesin kalor alami, kulkas/AC melawan arah alami."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung efisiensi dan usaha mesin Carnot, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan suhu reservoir panas (Th) dan dingin (Tc) dalam Kelvin" }
      - { id: i2, teks: "Hitung efisiensi η = 1 − Tc/Th" }
      - { id: i3, teks: "Tentukan kalor yang diserap (Qmasuk)" }
      - { id: i4, teks: "Hitung usaha W = η × Qmasuk" }
    penjelasan: "Suhu dulu, efisiensi, kalor masuk, baru usaha."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sesuai kebenarannya."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Menaikkan suhu reservoir panas (Th) meningkatkan efisiensi Carnot", kategoriBenarId: benar }
      - { id: t2, teks: "Mesin dengan efisiensi 100% bisa dibuat dengan teknologi canggih", kategoriBenarId: salah }
      - { id: t3, teks: "Selalu ada kalor yang terbuang pada mesin kalor sungguhan", kategoriBenarId: benar }
    penjelasan: "Th naik menaikkan efisiensi (benar). Efisiensi 100% mustahil secara teori (pernyataan kedua salah). Selalu ada kalor terbuang (benar)."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan hukum termodinamika sesuai isinya."
    kategori:
      - { id: satu, label: "Hukum I" }
      - { id: dua, label: "Hukum II" }
    item:
      - { id: t1, teks: "Energi kekal, ΔU=Q−W", kategoriBenarId: satu }
      - { id: t2, teks: "Kalor mengalir spontan dari panas ke dingin", kategoriBenarId: dua }
      - { id: t3, teks: "Tidak ada mesin dengan efisiensi 100%", kategoriBenarId: dua }
    penjelasan: "Hukum I tentang kekekalan energi, Hukum II tentang arah proses dan batasan efisiensi."
    skor: 1
draft: false
---
