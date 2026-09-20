---
judul: "Asas Kontinuitas dan Debit Aliran"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar fluida ideal, debit aliran, dan Asas Kontinuitas."
materiSlug: asas-kontinuitas-dan-debit-aliran
pinHash: 19b445ea0ca83adb8775c491f00c9caea361fa340f15063031f3ec477e2d8afe
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Fluida ideal dalam Fisika diasumsikan memiliki sifat-sifat berikut, KECUALI..."
    pilihan:
      - { id: a, teks: "Tak termampatkan (massa jenis tetap)" }
      - { id: b, teks: "Alirannya tunak/stasioner" }
      - { id: c, teks: "Tak kental (tanpa gesekan internal)" }
      - { id: d, teks: "Bisa berubah wujud sewaktu-waktu" }
    jawabanBenarId: d
    penjelasan: "Fluida ideal diasumsikan tak termampatkan, alirannya tunak, tak kental, dan laminar -- bukan berubah wujud sewaktu-waktu."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Debit aliran (Q) dirumuskan sebagai..."
    pilihan:
      - { id: a, teks: "Q = A + v" }
      - { id: b, teks: "Q = A × v" }
      - { id: c, teks: "Q = A / v" }
      - { id: d, teks: "Q = v / A" }
    jawabanBenarId: b
    penjelasan: "Debit Q = A × v, dengan A luas penampang pipa dan v kecepatan aliran fluida."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Asas Kontinuitas menyatakan bahwa untuk fluida ideal yang mengalir di pipa tertutup..."
    pilihan:
      - { id: a, teks: "Kecepatan aliran selalu sama di semua bagian pipa" }
      - { id: b, teks: "Debit aliran selalu sama di semua bagian pipa (A1v1 = A2v2)" }
      - { id: c, teks: "Tekanan selalu sama di semua bagian pipa" }
      - { id: d, teks: "Luas penampang selalu sama di semua bagian pipa" }
    jawabanBenarId: b
    penjelasan: "Asas Kontinuitas: A1v1 = A2v2 -- debitnya harus sama, meski luas penampang dan kecepatannya berbeda di tiap bagian pipa."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Air mengalir dengan kecepatan 2 m/s di pipa berdiameter 10 cm, lalu masuk ke pipa berdiameter 5 cm. Berapa kecepatan alirannya di pipa yang lebih sempit?"
    pilihan:
      - { id: a, teks: "1 m/s" }
      - { id: b, teks: "2 m/s" }
      - { id: c, teks: "4 m/s" }
      - { id: d, teks: "8 m/s" }
    jawabanBenarId: d
    penjelasan: "v2 = v1 × (d1/d2)² = 2 × (10/5)² = 2 × 4 = 8 m/s."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Untuk debit yang tetap sama, makin SEMPIT sebuah pipa, makin CEPAT kecepatan alirannya."
    jawabanBenar: true
    penjelasan: "Benar -- A dan v berbanding terbalik dalam asas kontinuitas (A1v1 = A2v2)."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Untuk fluida ideal, debit aliran di sepanjang pipa tertutup boleh berbeda-beda dari satu bagian ke bagian lain."
    jawabanBenar: false
    penjelasan: "Salah -- justru Asas Kontinuitas menyatakan debitnya harus SAMA di semua bagian pipa tertutup."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Fluida ideal diasumsikan tidak kental, artinya tidak ada gesekan internal antar-lapisan fluida yang mengalir."
    jawabanBenar: true
    penjelasan: "Benar -- salah satu asumsi fluida ideal adalah tak kental (tanpa gesekan internal/viskositas)."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Debit aliran sebuah pipa adalah 0,02 m³/s. Kalau luas penampangnya 0,01 m², berapa kecepatan alirannya (dalam m/s)?"
    angka: true
    toleransi: 0
    jawabanBenar: ["2"]
    penjelasan: "v = Q/A = 0,02/0,01 = 2 m/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah pipa berdiameter 8 cm menyempit menjadi 4 cm. Kalau kecepatan aliran di bagian lebar adalah 1 m/s, berapa kecepatan di bagian sempit (dalam m/s)?"
    angka: true
    toleransi: 0
    jawabanBenar: ["4"]
    penjelasan: "v2 = v1 × (d1/d2)² = 1 × (8/4)² = 1 × 4 = 4 m/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Asas yang menyatakan debit aliran fluida ideal selalu sama di setiap bagian pipa disebut Asas...? (1 kata)"
    angka: false
    toleransi: 0
    jawabanBenar: ["Kontinuitas"]
    penjelasan: "Disebut Asas Kontinuitas."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan sifat fluida ideal dengan penjelasannya."
    pasangan:
      - { id: p1, kiri: "Tak termampatkan", kanan: "Massa jenisnya tetap" }
      - { id: p2, kiri: "Aliran tunak (stasioner)", kanan: "Kecepatan di suatu titik tidak berubah terhadap waktu" }
      - { id: p3, kiri: "Tak kental", kanan: "Tidak ada gesekan internal (viskositas)" }
    penjelasan: "Ketiga sifat ini (ditambah aliran laminar) adalah asumsi dasar fluida ideal."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan fenomena dengan penjelasan Asas Kontinuitasnya."
    pasangan:
      - { id: p1, kiri: "Ujung selang taman ditekan ibu jari", kanan: "Luas penampang mengecil, kecepatan aliran membesar" }
      - { id: p2, kiri: "Aliran sungai lebih deras di bagian jeram yang menyempit", kanan: "Luas penampang mengecil, kecepatan aliran membesar" }
      - { id: p3, kiri: "Darah mengalir lebih lambat di pembuluh kapiler", kanan: "Total luas penampang seluruh kapiler jauh lebih besar dari aorta" }
    penjelasan: "Kecepatan aliran ditentukan oleh perbandingan luas penampang -- makin kecil luasnya, makin besar kecepatannya, untuk debit yang sama."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menerapkan Asas Kontinuitas untuk mencari kecepatan aliran (v2) di bagian pipa yang lain, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan luas penampang A1 dan A2 di kedua bagian pipa" }
      - { id: i2, teks: "Tentukan kecepatan aliran v1 yang sudah diketahui" }
      - { id: i3, teks: "Gunakan rumus Asas Kontinuitas: A1v1 = A2v2" }
      - { id: i4, teks: "Hitung v2 = (A1 × v1) / A2" }
    penjelasan: "Asas Kontinuitas dipakai untuk mencari kecepatan di bagian pipa lain setelah luas penampang dan salah satu kecepatannya diketahui."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sebagai ciri Fluida Ideal atau BUKAN ciri Fluida Ideal."
    kategori:
      - { id: ideal, label: "Ciri Fluida Ideal" }
      - { id: bukan, label: "Bukan Ciri Fluida Ideal" }
    item:
      - { id: t1, teks: "Tak termampatkan", kategoriBenarId: ideal }
      - { id: t2, teks: "Aliran tunak/stasioner", kategoriBenarId: ideal }
      - { id: t3, teks: "Tak kental", kategoriBenarId: ideal }
      - { id: t4, teks: "Alirannya turbulen/bergolak", kategoriBenarId: bukan }
      - { id: t5, teks: "Bisa berubah wujud sewaktu-waktu", kategoriBenarId: bukan }
    penjelasan: "Fluida ideal mengalir laminar (bukan turbulen) dan tidak berubah wujud -- keempat ciri utamanya adalah tak termampatkan, tunak, tak kental, dan laminar."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Q = A × v", kategoriBenarId: benar }
      - { id: t2, teks: "Debit selalu berubah-ubah di sepanjang pipa tertutup untuk fluida ideal", kategoriBenarId: salah }
      - { id: t3, teks: "Pipa yang menyempit membuat kecepatan aliran membesar", kategoriBenarId: benar }
      - { id: t4, teks: "Luas penampang tidak memengaruhi kecepatan aliran fluida", kategoriBenarId: salah }
    penjelasan: "Luas penampang dan kecepatan aliran berbanding terbalik (A1v1=A2v2) supaya debitnya tetap konstan."
    skor: 1
draft: false
---
