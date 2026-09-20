---
judul: "Rangkaian Seri dan Paralel"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar ciri-ciri rangkaian seri dan paralel, serta cara menghitung hambatan totalnya."
materiSlug: rangkaian-seri-dan-paralel
pinHash: 078c484ab3f7747fe73c151ac51396af74502a77253e577afad435a3be9a073e
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Pada rangkaian seri, besaran yang SAMA di setiap titik adalah..."
    pilihan:
      - { id: a, teks: "Arus (I)" }
      - { id: b, teks: "Tegangan (V)" }
      - { id: c, teks: "Hambatan (R)" }
      - { id: d, teks: "Daya (P)" }
    jawabanBenarId: a
    penjelasan: "Pada rangkaian seri, arus yang mengalir sama di setiap titik, karena cuma ada satu jalur."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Pada rangkaian paralel, besaran yang SAMA di setiap cabang adalah..."
    pilihan:
      - { id: a, teks: "Arus (I)" }
      - { id: b, teks: "Tegangan (V)" }
      - { id: c, teks: "Hambatan total (R)" }
      - { id: d, teks: "Semua berbeda" }
    jawabanBenarId: b
    penjelasan: "Pada rangkaian paralel, tegangan di setiap cabang sama, karena semua cabang terhubung ke titik yang sama."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Dua resistor 10 Ω dan 20 Ω dirangkai SERI. Berapa hambatan totalnya?"
    pilihan:
      - { id: a, teks: "10 Ω" }
      - { id: b, teks: "20 Ω" }
      - { id: c, teks: "30 Ω" }
      - { id: d, teks: "6,7 Ω" }
    jawabanBenarId: c
    penjelasan: "Pada rangkaian seri, Rtotal = R1 + R2 = 10 + 20 = 30 Ω."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Kenapa lampu-lampu di rumah biasanya dirangkai PARALEL, bukan seri?"
    pilihan:
      - { id: a, teks: "Supaya lebih hemat kabel" }
      - { id: b, teks: "Supaya kalau satu lampu mati/dilepas, lampu lain tetap menyala" }
      - { id: c, teks: "Supaya semua lampu pasti mati bersamaan" }
      - { id: d, teks: "Karena rangkaian seri tidak mungkin dibuat untuk lampu" }
    jawabanBenarId: b
    penjelasan: "Pada rangkaian paralel, tiap cabang independen -- kalau satu lampu dilepas/putus, cabang lain tetap punya jalur lengkap dan tetap menyala."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Menambah cabang pada rangkaian paralel membuat hambatan totalnya semakin besar."
    jawabanBenar: false
    penjelasan: "Salah -- menambah cabang pada rangkaian paralel justru membuat hambatan total semakin KECIL."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Kalau satu komponen di rangkaian seri putus, seluruh rangkaian ikut mati."
    jawabanBenar: true
    penjelasan: "Benar -- rangkaian seri cuma punya satu jalur, kalau ada yang putus seluruh rangkaian jadi terbuka."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Hambatan total rangkaian paralel selalu lebih kecil dari komponen terkecilnya."
    jawabanBenar: true
    penjelasan: "Benar -- ciri khas rangkaian paralel adalah hambatan totalnya lebih kecil dari resistor terkecil yang dirangkai."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Dua resistor R1=10 Ω dan R2=20 Ω dirangkai seri, sumber tegangan 12 V. Berapa arus yang mengalir, dalam A? (I=V/Rtotal)"
    angka: true
    toleransi: 0.02
    jawabanBenar: ["0.4"]
    penjelasan: "Rtotal = 10+20 = 30 Ω. I = 12/30 = 0,4 A."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Dua resistor 10 Ω dirangkai paralel. Berapa hambatan totalnya, dalam Ω?"
    angka: true
    toleransi: 0
    jawabanBenar: ["5"]
    penjelasan: "1/Rtotal = 1/10 + 1/10 = 2/10, Rtotal = 10/2 = 5 Ω."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Dua resistor 10 Ω dirangkai paralel, sumber tegangan 12 V. Berapa arus totalnya, dalam A? (Itotal=V/Rtotal)"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["2.4"]
    penjelasan: "Rtotal = 5 Ω (dari soal sebelumnya). Itotal = 12/5 = 2,4 A."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan jenis rangkaian dengan rumus hambatan totalnya."
    pasangan:
      - { id: p1, kiri: "Seri", kanan: "Rtotal = R1 + R2 + ..." }
      - { id: p2, kiri: "Paralel", kanan: "1/Rtotal = 1/R1 + 1/R2 + ..." }
    penjelasan: "Dua rumus dasar yang membedakan cara menghitung hambatan total seri dan paralel."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan jenis rangkaian dengan ciri besaran yang tetap sama."
    pasangan:
      - { id: p1, kiri: "Seri", kanan: "Arus sama di semua titik" }
      - { id: p2, kiri: "Paralel", kanan: "Tegangan sama di semua cabang" }
    penjelasan: "Ciri paling mendasar yang membedakan rangkaian seri dan paralel."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung arus total pada rangkaian paralel, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan nilai R1 dan R2" }
      - { id: i2, teks: "Hitung 1/Rtotal = 1/R1 + 1/R2" }
      - { id: i3, teks: "Hitung Rtotal (kebalikan dari 1/Rtotal)" }
      - { id: i4, teks: "Hitung Itotal = V/Rtotal" }
    penjelasan: "Urutan ini memastikan hambatan total dihitung dengan benar sebelum mencari arus total."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan ciri berikut sebagai Rangkaian Seri atau Rangkaian Paralel."
    kategori:
      - { id: seri, label: "Rangkaian Seri" }
      - { id: paralel, label: "Rangkaian Paralel" }
    item:
      - { id: t1, teks: "Arus sama di setiap titik", kategoriBenarId: seri }
      - { id: t2, teks: "Cuma ada satu jalur untuk arus", kategoriBenarId: seri }
      - { id: t3, teks: "Tegangan sama di setiap cabang", kategoriBenarId: paralel }
      - { id: t4, teks: "Kalau satu cabang putus, cabang lain tetap menyala", kategoriBenarId: paralel }
    penjelasan: "Rangkaian seri punya satu jalur dengan arus seragam. Rangkaian paralel punya cabang-cabang independen dengan tegangan seragam."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Lampu rumah tangga umumnya dirangkai paralel", kategoriBenarId: benar }
      - { id: t2, teks: "Rangkaian paralel membuat hambatan total makin besar", kategoriBenarId: salah }
      - { id: t3, teks: "Pada rangkaian seri, tegangan terbagi ke tiap komponen", kategoriBenarId: benar }
      - { id: t4, teks: "Pada rangkaian paralel, arus sama di semua cabang", kategoriBenarId: salah }
    penjelasan: "Rangkaian paralel justru membuat hambatan total makin KECIL, dan pada rangkaian paralel yang sama adalah TEGANGAN (bukan arus) di setiap cabang."
    skor: 1
draft: false
---
