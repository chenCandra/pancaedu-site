---
judul: "Massa Jenis dan Tekanan Hidrostatis"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar massa jenis, terapung-melayang-tenggelam, dan tekanan hidrostatis."
materiSlug: fluida-dan-massa-jenis
pinHash: c2fc5f52c53980a80361cf9279df376fbe4c7a8ada56c6fe06263a75131f4c5c
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus massa jenis adalah..."
    pilihan:
      - { id: a, teks: "ρ = m × V" }
      - { id: b, teks: "ρ = m / V" }
      - { id: c, teks: "ρ = V / m" }
      - { id: d, teks: "ρ = m + V" }
    jawabanBenarId: b
    penjelasan: "Massa jenis dihitung dengan membagi massa benda dengan volumenya (ρ = m/V)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah balok bermassa 540 gram punya volume 200 cm³. Apakah balok itu terapung atau tenggelam di air (ρ air = 1 g/cm³)?"
    pilihan:
      - { id: a, teks: "ρ = 1,8 g/cm³, terapung" }
      - { id: b, teks: "ρ = 2,0 g/cm³, melayang" }
      - { id: c, teks: "ρ = 2,7 g/cm³, tenggelam" }
      - { id: d, teks: "ρ = 3,7 g/cm³, tenggelam" }
    jawabanBenarId: c
    penjelasan: "ρ = 540/200 = 2,7 g/cm³. Karena 2,7 > 1 (massa jenis air), balok tenggelam."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Tekanan hidrostatis pada kedalaman h dirumuskan sebagai..."
    pilihan:
      - { id: a, teks: "P = m × g × h" }
      - { id: b, teks: "P = ρ × g × h" }
      - { id: c, teks: "P = ρ × g / h" }
      - { id: d, teks: "P = ρ + g + h" }
    jawabanBenarId: b
    penjelasan: "Tekanan hidrostatis P = ρgh -- makin dalam atau makin rapat fluidanya, makin besar tekanannya."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Seorang penyelam berada 10 m di bawah permukaan air (ρ air = 1.000 kg/m³, g = 10 m/s², tekanan atmosfer P₀ = 100.000 Pa). Berapa tekanan total yang dialaminya?"
    pilihan:
      - { id: a, teks: "100.000 Pa" }
      - { id: b, teks: "150.000 Pa" }
      - { id: c, teks: "200.000 Pa" }
      - { id: d, teks: "1.000.000 Pa" }
    jawabanBenarId: c
    penjelasan: "Ph = ρgh = 1.000×10×10 = 100.000 Pa. Tekanan total = P₀ + Ph = 100.000 + 100.000 = 200.000 Pa."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Tekanan hidrostatis di dasar wadah bergantung pada bentuk wadahnya -- wadah yang lebih lebar punya tekanan hidrostatis lebih besar di dasarnya, walaupun kedalamannya sama."
    jawabanBenar: false
    penjelasan: "Salah -- tekanan hidrostatis P = ρgh HANYA bergantung pada kedalaman dan massa jenis fluida, tidak peduli bentuk atau lebar wadahnya."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Benda dengan massa jenis yang PERSIS SAMA dengan massa jenis fluida akan melayang di dalam fluida itu."
    jawabanBenar: true
    penjelasan: "Benar -- kondisi melayang terjadi saat massa jenis benda sama dengan massa jenis fluida."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Menurut Hukum Utama Hidrostatis, titik-titik pada kedalaman yang sama (di fluida sejenis) memiliki tekanan hidrostatis yang sama, berapa pun bentuk wadahnya."
    jawabanBenar: true
    penjelasan: "Benar -- inilah Hukum Utama Hidrostatis, tekanan hanya bergantung pada kedalaman dan jenis fluida."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Hukum yang menyatakan tekanan hidrostatis pada kedalaman sama selalu sama, tidak peduli bentuk wadahnya, disebut Hukum...? (2-4 kata)"
    angka: false
    toleransi: 0
    jawabanBenar: ["Hukum Utama Hidrostatis", "Utama Hidrostatis"]
    penjelasan: "Disebut Hukum Utama Hidrostatis."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah benda bermassa 800 gram punya volume 400 cm³. Berapa massa jenisnya dalam g/cm³?"
    angka: true
    toleransi: 0
    jawabanBenar: ["2"]
    penjelasan: "ρ = m/V = 800/400 = 2 g/cm³."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Berapa tekanan hidrostatis (dalam Pa) pada kedalaman 5 m di dalam air (ρ = 1.000 kg/m³, g = 10 m/s²)?"
    angka: true
    toleransi: 0
    jawabanBenar: ["50000"]
    penjelasan: "P = ρgh = 1.000 × 10 × 5 = 50.000 Pa."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan perbandingan massa jenis dengan kondisi yang terjadi."
    pasangan:
      - { id: p1, kiri: "ρ benda < ρ fluida", kanan: "Terapung" }
      - { id: p2, kiri: "ρ benda = ρ fluida", kanan: "Melayang" }
      - { id: p3, kiri: "ρ benda > ρ fluida", kanan: "Tenggelam" }
    penjelasan: "Perbandingan massa jenis benda terhadap fluida menentukan apakah benda terapung, melayang, atau tenggelam."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan fenomena sehari-hari dengan penjelasan tekanan hidrostatisnya."
    pasangan:
      - { id: p1, kiri: "Telinga terasa sakit saat menyelam dalam", kanan: "Tekanan hidrostatis membesar seiring kedalaman" }
      - { id: p2, kiri: "Dinding bendungan lebih tebal di bagian bawah", kanan: "Menahan tekanan air yang jauh lebih besar di dasar" }
      - { id: p3, kiri: "Kapal selam riset butuh badan sangat kuat", kanan: "Tekanan di palung laut dalam bisa ribuan kali tekanan atmosfer" }
    penjelasan: "Semua fenomena ini adalah akibat langsung dari tekanan hidrostatis yang membesar seiring bertambahnya kedalaman."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung tekanan TOTAL pada suatu kedalaman, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan kedalaman (h) yang diukur dari permukaan fluida" }
      - { id: i2, teks: "Tentukan massa jenis fluida (ρ) yang digunakan" }
      - { id: i3, teks: "Hitung tekanan hidrostatis dengan rumus P = ρgh" }
      - { id: i4, teks: "Jumlahkan dengan tekanan atmosfer (P₀) untuk mendapat tekanan total" }
    penjelasan: "Tekanan total = P₀ + ρgh, dihitung setelah kedalaman, massa jenis fluida, dan tekanan hidrostatisnya diketahui."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan benda berikut berdasarkan nasibnya kalau dimasukkan ke dalam air (ρ air = 1.000 kg/m³)."
    kategori:
      - { id: apung, label: "Terapung" }
      - { id: tenggelam, label: "Tenggelam" }
    item:
      - { id: t1, teks: "Kayu (ρ = 600 kg/m³)", kategoriBenarId: apung }
      - { id: t2, teks: "Gabus (ρ = 240 kg/m³)", kategoriBenarId: apung }
      - { id: t3, teks: "Es batu (ρ = 920 kg/m³)", kategoriBenarId: apung }
      - { id: t4, teks: "Besi (ρ = 7.870 kg/m³)", kategoriBenarId: tenggelam }
      - { id: t5, teks: "Aluminium (ρ = 2.700 kg/m³)", kategoriBenarId: tenggelam }
      - { id: t6, teks: "Emas (ρ = 19.300 kg/m³)", kategoriBenarId: tenggelam }
    penjelasan: "Benda dengan massa jenis lebih kecil dari air (1.000 kg/m³) akan terapung; yang lebih besar akan tenggelam."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah tentang tekanan hidrostatis."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Tekanan hidrostatis makin besar makin dalam kedudukannya", kategoriBenarId: benar }
      - { id: t2, teks: "Bentuk wadah memengaruhi besar tekanan hidrostatis pada kedalaman yang sama", kategoriBenarId: salah }
      - { id: t3, teks: "Tekanan total = tekanan atmosfer + tekanan hidrostatis", kategoriBenarId: benar }
      - { id: t4, teks: "Tekanan hidrostatis sama besar di semua kedalaman", kategoriBenarId: salah }
    penjelasan: "Tekanan hidrostatis bertambah seiring kedalaman dan tidak bergantung pada bentuk wadah; tekanan total adalah jumlah tekanan atmosfer dan tekanan hidrostatis."
    skor: 1
draft: false
---
