---
judul: "Susunan Pegas Seri dan Paralel"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar kapasitas pegas total rangkaian seri dan paralel."
materiSlug: susunan-pegas-seri-dan-paralel
pinHash: c5ee0d7308ae3efc1d7d804879f484e8f52dfda589d2069624fe1fc85aabc1ee
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Konstanta pegas total rangkaian PARALEL dihitung dengan..."
    pilihan:
      - { id: a, teks: "k_total = k1 + k2" }
      - { id: b, teks: "1/k_total = 1/k1 + 1/k2" }
      - { id: c, teks: "k_total = k1 × k2" }
      - { id: d, teks: "k_total = k1 − k2" }
    jawabanBenarId: a
    penjelasan: "Paralel: k_total = k1 + k2, dijumlah langsung."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Konstanta pegas total rangkaian SERI dihitung dengan..."
    pilihan:
      - { id: a, teks: "1/k_total = 1/k1 + 1/k2" }
      - { id: b, teks: "k_total = k1 + k2" }
      - { id: c, teks: "k_total = k1 × k2" }
      - { id: d, teks: "k_total = k1 − k2" }
    jawabanBenarId: a
    penjelasan: "Seri: 1/k_total = 1/k1 + 1/k2, resiprokal."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Dua pegas 80 N/m dan 120 N/m dirangkai paralel. Berapa konstanta totalnya?"
    pilihan:
      - { id: a, teks: "200 N/m" }
      - { id: b, teks: "48 N/m" }
      - { id: c, teks: "9600 N/m" }
      - { id: d, teks: "40 N/m" }
    jawabanBenarId: a
    penjelasan: "k_total = 80+120 = 200 N/m."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Pada rangkaian pegas paralel, besaran yang SAMA di tiap pegas adalah..."
    pilihan:
      - { id: a, teks: "Pertambahan panjang (Δx)" }
      - { id: b, teks: "Gaya (F)" }
      - { id: c, teks: "Konstanta pegas (k)" }
      - { id: d, teks: "Energi potensial elastis" }
    jawabanBenarId: a
    penjelasan: "Paralel: Δx sama di tiap pegas, gaya berbeda-beda."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Pegas mengikuti pola yang sama seperti kapasitor (bukan resistor) dalam rangkaian seri-paralel."
    jawabanBenar: true
    penjelasan: "Benar -- paralel dijumlah langsung, seri resiprokal, sama seperti kapasitor."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Rangkaian pegas seri menghasilkan konstanta total yang lebih besar dari pegas mana pun dalam rangkaian."
    jawabanBenar: false
    penjelasan: "Salah -- seri menghasilkan konstanta total yang lebih KECIL (lebih lunak)."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Pada rangkaian pegas seri, gaya (F) yang diteruskan sama di setiap pegas."
    jawabanBenar: true
    penjelasan: "Benar -- ciri khas rangkaian seri."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Dua pegas 60 N/m dan 90 N/m dirangkai seri. Berapa konstanta pegas totalnya, dalam N/m?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["36"]
    penjelasan: "k_total=(60×90)/(60+90)=5400/150=36 N/m."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Dua pegas identik k=50 N/m dirangkai paralel. Berapa konstanta pegas totalnya, dalam N/m?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["100"]
    penjelasan: "k_total = 50+50 = 100 N/m."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Dua pegas 100 N/m dan 400 N/m dirangkai seri, diberi gaya 40 N pada keduanya. Berapa Δx pegas pertama (k=100 N/m), dalam meter?"
    angka: true
    toleransi: 0.02
    jawabanBenar: ["0.4", "0,4"]
    penjelasan: "Seri: gaya sama = 40 N. Δx1 = F/k1 = 40/100 = 0,4 m."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan rangkaian dengan besaran yang sama di tiap pegasnya."
    pasangan:
      - { id: p1, kiri: "Paralel", kanan: "Pertambahan panjang (Δx)" }
      - { id: p2, kiri: "Seri", kanan: "Gaya (F)" }
    penjelasan: "Paralel sama Δx, seri sama gaya."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan rangkaian dengan cara menghitung konstanta totalnya."
    pasangan:
      - { id: p1, kiri: "Paralel", kanan: "Dijumlahkan langsung" }
      - { id: p2, kiri: "Seri", kanan: "Resiprokal" }
    penjelasan: "Paralel jumlah langsung (membesar), seri resiprokal (mengecil)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung Δx masing-masing pegas pada rangkaian seri, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan gaya total yang bekerja pada rangkaian" }
      - { id: i2, teks: "Catat bahwa gaya ini sama untuk setiap pegas (ciri rangkaian seri)" }
      - { id: i3, teks: "Hitung Δx tiap pegas dengan Δx=F/k masing-masing" }
    penjelasan: "Gaya total dulu, ingat gaya sama di seri, baru hitung Δx tiap pegas."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan ciri berikut sesuai jenis rangkaian pegasnya."
    kategori:
      - { id: paralel, label: "Paralel" }
      - { id: seri, label: "Seri" }
    item:
      - { id: t1, teks: "Konstanta total selalu lebih besar", kategoriBenarId: paralel }
      - { id: t2, teks: "Konstanta total selalu lebih kecil", kategoriBenarId: seri }
      - { id: t3, teks: "Δx sama di tiap pegas", kategoriBenarId: paralel }
      - { id: t4, teks: "Gaya sama di tiap pegas", kategoriBenarId: seri }
    penjelasan: "Paralel: total besar, Δx sama. Seri: total kecil, gaya sama."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan rumus berikut sesuai rangkaian yang tepat."
    kategori:
      - { id: paralel, label: "Rumus Paralel" }
      - { id: seri, label: "Rumus Seri" }
    item:
      - { id: t1, teks: "k_total = k1+k2", kategoriBenarId: paralel }
      - { id: t2, teks: "1/k_total = 1/k1+1/k2", kategoriBenarId: seri }
    penjelasan: "Paralel penjumlahan langsung, seri resiprokal."
    skor: 1
draft: false
---
