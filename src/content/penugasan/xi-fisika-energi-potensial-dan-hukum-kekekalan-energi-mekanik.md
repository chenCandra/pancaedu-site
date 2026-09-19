---
judul: "Energi Potensial dan Hukum Kekekalan Energi Mekanik"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar energi potensial, energi mekanik, dan hukum kekekalannya."
materiSlug: energi-potensial-dan-hukum-kekekalan-energi-mekanik
pinHash: 3dc2f442ccdfd2fb70d37cfe917e6ae92cefeda2d140314199a364f78cdeb904
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus energi potensial gravitasi adalah..."
    pilihan:
      - { id: a, teks: "Ep = mgh" }
      - { id: b, teks: "Ep = ½mv²" }
      - { id: c, teks: "Ep = F×s" }
      - { id: d, teks: "Ep = ½kx²" }
    jawabanBenarId: a
    penjelasan: "Ep = mgh, berbanding lurus dengan massa, gravitasi, dan ketinggian."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Energi mekanik (Em) adalah..."
    pilihan:
      - { id: a, teks: "Jumlah energi kinetik dan energi potensial" }
      - { id: b, teks: "Selisih energi kinetik dan potensial" }
      - { id: c, teks: "Hanya energi potensial" }
      - { id: d, teks: "Hanya energi kinetik" }
    jawabanBenarId: a
    penjelasan: "Em = Ek + Ep."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Hukum Kekekalan Energi Mekanik berlaku ketika..."
    pilihan:
      - { id: a, teks: "Tidak ada gaya non-konservatif (gesekan/hambatan udara) yang bekerja" }
      - { id: b, teks: "Ada gesekan besar" }
      - { id: c, teks: "Benda diam total" }
      - { id: d, teks: "Selalu berlaku tanpa syarat apa pun" }
    jawabanBenarId: a
    penjelasan: "Hukum ini berlaku hanya kalau gaya yang bekerja konservatif saja (misal gravitasi), tanpa gesekan."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Benda 5 kg berada di ketinggian 6 m (g=10 m/s²). Berapa energi potensialnya?"
    pilihan:
      - { id: a, teks: "300 J" }
      - { id: b, teks: "30 J" }
      - { id: c, teks: "60 J" }
      - { id: d, teks: "11 J" }
    jawabanBenarId: a
    penjelasan: "Ep = mgh = 5×10×6 = 300 J."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Saat benda jatuh, energi potensialnya berkurang dan berubah jadi energi kinetik, sementara energi mekanik totalnya tetap sama."
    jawabanBenar: true
    penjelasan: "Benar -- ini inti Hukum Kekekalan Energi Mekanik."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Hukum Kekekalan Energi Mekanik tetap berlaku persis sama meski ada gesekan besar pada sistemnya."
    jawabanBenar: false
    penjelasan: "Salah -- gesekan menyerap sebagian energi mekanik jadi panas, sehingga Em tidak lagi tetap."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Bandul yang berayun (tanpa gesekan) mencapai kecepatan maksimum di titik TERTINGGI ayunannya."
    jawabanBenar: false
    penjelasan: "Salah -- kecepatan maksimum justru di titik TERENDAH, karena di situ Ep minimum sehingga Ek maksimum."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Benda 2 kg dijatuhkan dari ketinggian 4 m tanpa gesekan udara (g=10 m/s²). Berapa energi mekanik totalnya, dalam Joule?"
    angka: true
    toleransi: 1
    jawabanBenar: ["80"]
    penjelasan: "Em = Ep awal (diam) = mgh = 2×10×4 = 80 J."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Masih dari benda 2 kg yang dijatuhkan dari 4 m di atas (Em=80 J), berapa kecepatannya tepat saat menyentuh tanah, dalam m/s?"
    angka: true
    toleransi: 0.2
    jawabanBenar: ["8.94", "8,94"]
    penjelasan: "Di tanah, Ek=Em=80 J. ½×2×v²=80 → v²=80 → v=√80≈8,94 m/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Benda 1 kg dilempar vertikal ke atas dengan kecepatan awal 8 m/s (g=10 m/s²). Berapa ketinggian maksimum yang dicapai, dalam meter?"
    angka: true
    toleransi: 0.2
    jawabanBenar: ["3.2", "3,2"]
    penjelasan: "Em=Ek awal=½×1×8²=32 J. Di titik tertinggi Ek=0, jadi Ep=32=1×10×h → h=3,2 m."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Energi Potensial", kanan: "Ep = mgh" }
      - { id: p2, kiri: "Energi Mekanik", kanan: "Em = Ek + Ep" }
    penjelasan: "Ep dari massa-gravitasi-tinggi, Em jumlah Ek dan Ep."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan posisi bandul dengan kondisi energinya (tanpa gesekan udara)."
    pasangan:
      - { id: p1, kiri: "Titik tertinggi ayunan", kanan: "Ep maksimum, Ek minimum" }
      - { id: p2, kiri: "Titik terendah ayunan", kanan: "Ep minimum, Ek maksimum" }
    penjelasan: "Di titik tertinggi kecepatan minimum (Ek kecil, Ep besar), sebaliknya di titik terendah."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah mencari kecepatan benda yang jatuh dari ketinggian tertentu memakai kekekalan energi mekanik, dari yang paling awal."
    item:
      - { id: i1, teks: "Hitung energi mekanik awal (Em = mgh, saat diam di ketinggian h)" }
      - { id: i2, teks: "Tentukan energi potensial di posisi yang ditanyakan" }
      - { id: i3, teks: "Hitung energi kinetik di posisi itu (Ek = Em − Ep)" }
      - { id: i4, teks: "Hitung kecepatan dari energi kinetik (v = √(2Ek/m))" }
    penjelasan: "Em awal dulu, lalu Ep di posisi baru, lalu Ek dari selisihnya, baru kecepatan."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan besaran berikut sesuai jenis energinya saat benda jatuh bebas."
    kategori:
      - { id: bertambah, label: "Bertambah Saat Jatuh" }
      - { id: berkurang, label: "Berkurang Saat Jatuh" }
      - { id: tetap, label: "Tetap Sama" }
    item:
      - { id: t1, teks: "Energi Kinetik", kategoriBenarId: bertambah }
      - { id: t2, teks: "Energi Potensial", kategoriBenarId: berkurang }
      - { id: t3, teks: "Energi Mekanik (tanpa gesekan udara)", kategoriBenarId: tetap }
    penjelasan: "Ek bertambah, Ep berkurang, Em totalnya tetap (tanpa gesekan)."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan gaya berikut sesuai jenisnya."
    kategori:
      - { id: konservatif, label: "Gaya Konservatif" }
      - { id: nonkonservatif, label: "Gaya Non-Konservatif" }
    item:
      - { id: t1, teks: "Gaya gravitasi", kategoriBenarId: konservatif }
      - { id: t2, teks: "Gaya gesek", kategoriBenarId: nonkonservatif }
      - { id: t3, teks: "Hambatan udara", kategoriBenarId: nonkonservatif }
    penjelasan: "Gravitasi konservatif (energi mekanik kekal), gesekan dan hambatan udara non-konservatif (menyerap energi jadi panas)."
    skor: 1
draft: false
---
