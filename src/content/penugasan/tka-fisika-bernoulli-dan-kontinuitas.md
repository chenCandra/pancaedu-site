---
judul: "Latihan TKA: Bernoulli & Kontinuitas (Paket 1)"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan -- 6 tipe interaktif (pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, drag & drop) dengan porsi soal HOTS, sesuai kisi-kisi resmi elemen Fluida: debit aliran, Asas Kontinuitas, dan Hukum/Asas Bernoulli."
materiSlug: asas-kontinuitas-dan-debit-aliran
pinHash: a25e6071f43b34775c99da262033279c4ea998130ca638e28af027197a78ec34
pinBerlakuHingga: 2027-03-20
pembahasanPinHash: 8a0df489872270ffb486ff084e893ce175375d7c5a8ada416e2a4396ca8daa15
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus debit aliran fluida yang tepat adalah..."
    pilihan:
      - { id: a, teks: "Q = A + v" }
      - { id: b, teks: "Q = A × v" }
      - { id: c, teks: "Q = A / v" }
      - { id: d, teks: "Q = A × g" }
    jawabanBenarId: b
    penjelasan: "Debit (Q) = luas penampang (A) × kecepatan aliran (v). Debit juga bisa dihitung sebagai Q = V/t (volume dibagi waktu)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Air mengalir melalui pipa berpenampang 0,002 m² dengan kecepatan 3 m/s. Debit aliran air tersebut adalah..."
    pilihan:
      - { id: a, teks: "6 × 10⁻⁴ m³/s" }
      - { id: b, teks: "1,5 × 10⁻³ m³/s" }
      - { id: c, teks: "6 × 10⁻³ m³/s" }
      - { id: d, teks: "6 × 10⁻² m³/s" }
    jawabanBenarId: c
    penjelasan: "Q = A × v = 0,002 m² × 3 m/s = 0,006 m³/s = 6 × 10⁻³ m³/s."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Air mengalir dalam pipa yang menyempit dari penampang besar (A1 = 6 cm²) dengan kecepatan 2 m/s, ke penampang kecil (A2 = 2 cm²). Kecepatan aliran air di penampang kecil tersebut adalah..."
    pilihan:
      - { id: a, teks: "0,67 m/s" }
      - { id: b, teks: "2 m/s" }
      - { id: c, teks: "4 m/s" }
      - { id: d, teks: "6 m/s" }
    jawabanBenarId: d
    penjelasan: "Asas Kontinuitas: A1v1 = A2v2 -> v2 = (A1 × v1) / A2 = (6 × 2) / 2 = 6 m/s. Pipa yang menyempit membuat aliran bergerak lebih cepat."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Air mengalir mendatar melalui pipa yang menyempit (dari penampang besar ke penampang kecil). Berdasarkan Asas Bernoulli, yang terjadi pada bagian pipa yang menyempit tersebut adalah..."
    pilihan:
      - { id: a, teks: "Kecepatan aliran turun, tekanan naik" }
      - { id: b, teks: "Kecepatan aliran naik, tekanan turun" }
      - { id: c, teks: "Kecepatan dan tekanan sama-sama naik" }
      - { id: d, teks: "Kecepatan dan tekanan sama-sama turun" }
    jawabanBenarId: b
    penjelasan: "Di penampang yang menyempit, kecepatan aliran NAIK (Asas Kontinuitas). Menurut Asas Bernoulli, kenaikan kecepatan pada pipa mendatar diimbangi dengan PENURUNAN tekanan -- inilah efek venturi."
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Debit aliran fluida pada pipa yang tidak bercabang selalu sama besar di sepanjang pipa tersebut, meski luas penampangnya berubah-ubah."
    jawabanBenar: true
    penjelasan: "Benar -- ini bunyi Asas Kontinuitas. Debit tetap konstan (Q1 = Q2), sehingga kalau penampang mengecil, kecepatan aliran otomatis membesar untuk menjaga debit tetap sama."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Menurut Asas Bernoulli, pada pipa mendatar (ketinggian sama), bagian aliran yang kecepatannya lebih besar memiliki tekanan yang lebih besar pula."
    jawabanBenar: false
    penjelasan: "Salah -- justru SEBALIKNYA. Kecepatan aliran yang lebih besar berkaitan dengan tekanan yang lebih RENDAH. Ini prinsip di balik efek venturi dan gaya angkat sayap pesawat."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah kolam diisi air sebanyak 3.000 liter (setara 3 m³) dalam waktu 5 menit (300 sekon). Debit air yang mengisi kolam tersebut adalah ... m³/s."
    angka: true
    toleransi: 0
    jawabanBenar: ["0.01"]
    penjelasan: "Q = V/t = 3 m³ / 300 s = 0,01 m³/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Air mengalir dalam pipa yang menyempit dari penampang besar (A1 = 10 cm²) berkecepatan 4 m/s, ke penampang kecil (A2 = 5 cm²). Kecepatan aliran di penampang kecil tersebut adalah ... m/s."
    angka: true
    toleransi: 0
    jawabanBenar: ["8"]
    penjelasan: "A1v1 = A2v2 -> v2 = (10 × 4) / 5 = 8 m/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah tangki air memiliki lubang kebocoran kecil pada dindingnya, 5 m di bawah permukaan air (g = 10 m/s²). Menurut teorema Torricelli, kecepatan pancaran air yang keluar dari lubang tersebut adalah ... m/s."
    angka: true
    toleransi: 0
    jawabanBenar: ["10"]
    penjelasan: "Teorema Torricelli (turunan dari Asas Bernoulli): v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan istilah dengan rumus/definisinya."
    pasangan:
      - { id: p1, kiri: "Debit", kanan: "Q = A × v (luas penampang × kecepatan aliran)" }
      - { id: p2, kiri: "Asas Kontinuitas", kanan: "A1v1 = A2v2 (debit tetap sepanjang pipa tanpa cabang)" }
      - { id: p3, kiri: "Asas Bernoulli", kanan: "P + ½ρv² + ρgh = konstan di sepanjang aliran fluida ideal" }
    penjelasan: "Asas Kontinuitas berbicara soal KECEPATAN aliran berubah sesuai luas penampang, sementara Asas Bernoulli menghubungkan kecepatan itu dengan perubahan TEKANAN fluidanya."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan fenomena sehari-hari berikut dengan prinsip yang paling mendasarinya."
    pasangan:
      - { id: p1, kiri: "Air menyembur lebih deras saat ujung selang ditekan/disempitkan dengan ibu jari", kanan: "Asas Kontinuitas" }
      - { id: p2, kiri: "Sayap pesawat menghasilkan gaya angkat saat pesawat melaju", kanan: "Asas Bernoulli" }
      - { id: p3, kiri: "Semprotan parfum menyemprotkan cairan saat udara ditiup cepat melewati pipa kecil di atasnya", kanan: "Asas Bernoulli" }
      - { id: p4, kiri: "Venturimeter mengukur kecepatan aliran fluida dari selisih tekanan pada pipa yang menyempit", kanan: "Gabungan Asas Kontinuitas & Bernoulli" }
    penjelasan: "Kontinuitas menjelaskan KENAPA kecepatan berubah (soal ibu jari di ujung selang), sedangkan Bernoulli menjelaskan AKIBAT dari perubahan kecepatan itu terhadap tekanan (sayap pesawat, parfum, venturimeter)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menyelesaikan soal Asas Kontinuitas pada pipa yang luas penampangnya berubah, dari yang paling awal."
    item:
      - { id: i1, teks: "Identifikasi luas penampang (A1, A2) pada dua titik berbeda di sepanjang pipa" }
      - { id: i2, teks: "Tuliskan prinsip Asas Kontinuitas: debit di kedua titik sama besar (Q1 = Q2)" }
      - { id: i3, teks: "Ganti debit dengan Q = A × v, sehingga menjadi A1v1 = A2v2" }
      - { id: i4, teks: "Masukkan nilai luas penampang dan kecepatan yang sudah diketahui" }
      - { id: i5, teks: "Selesaikan persamaan untuk besaran yang ditanyakan" }
    penjelasan: "Kunci Asas Kontinuitas ada pada langkah ke-2: yang tetap adalah DEBIT-nya, bukan kecepatannya -- kecepatan justru berubah mengikuti luas penampang supaya debit tetap sama."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun alur penalaran yang menjelaskan mengapa sayap pesawat menghasilkan gaya angkat, dari yang paling awal."
    item:
      - { id: i1, teks: "Bentuk sayap pesawat dirancang membuat aliran udara di permukaan ATAS lebih cepat daripada di permukaan BAWAH" }
      - { id: i2, teks: "Menurut Asas Bernoulli, aliran udara yang lebih cepat (di atas sayap) memiliki tekanan yang lebih RENDAH" }
      - { id: i3, teks: "Akibatnya, tekanan udara di bagian BAWAH sayap menjadi lebih BESAR daripada di bagian atas" }
      - { id: i4, teks: "Selisih tekanan ini menghasilkan gaya neto ke ARAH ATAS (gaya angkat) pada sayap pesawat" }
    penjelasan: "Gaya angkat sayap pesawat BUKAN sihir -- murni akibat selisih tekanan yang timbul dari perbedaan kecepatan aliran udara di kedua permukaan sayap, sesuai Asas Bernoulli."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan bagian pipa berikut berdasarkan kecepatan alirannya (Asas Kontinuitas): Kecepatan Lebih Besar, atau Kecepatan Lebih Kecil."
    kategori:
      - { id: besar, label: "Kecepatan Lebih Besar" }
      - { id: kecil, label: "Kecepatan Lebih Kecil" }
    item:
      - { id: t1, teks: "Bagian pipa dengan luas penampang KECIL", kategoriBenarId: besar }
      - { id: t2, teks: "Bagian pipa dengan luas penampang BESAR", kategoriBenarId: kecil }
      - { id: t3, teks: "Ujung selang yang ditekan/disempitkan dengan ibu jari", kategoriBenarId: besar }
      - { id: t4, teks: "Bagian pipa utama sebelum disempitkan", kategoriBenarId: kecil }
    penjelasan: "Karena debit harus tetap sama (Asas Kontinuitas), penampang yang lebih SEMPIT memaksa fluida mengalir lebih CEPAT supaya volume yang lewat per detik tetap sama dengan penampang yang lebih lebar."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan bagian aliran fluida berikut berdasarkan besar tekanannya (Asas Bernoulli, pada ketinggian yang sama): Tekanan Lebih Rendah, atau Tekanan Lebih Tinggi."
    kategori:
      - { id: rendah, label: "Tekanan Lebih Rendah" }
      - { id: tinggi, label: "Tekanan Lebih Tinggi" }
    item:
      - { id: t1, teks: "Bagian aliran dengan kecepatan LEBIH CEPAT", kategoriBenarId: rendah }
      - { id: t2, teks: "Bagian aliran dengan kecepatan LEBIH LAMBAT", kategoriBenarId: tinggi }
      - { id: t3, teks: "Permukaan ATAS sayap pesawat (aliran udara lebih cepat)", kategoriBenarId: rendah }
      - { id: t4, teks: "Permukaan BAWAH sayap pesawat (aliran udara lebih lambat)", kategoriBenarId: tinggi }
    penjelasan: "Inti Asas Bernoulli: pada ketinggian yang sama, kecepatan aliran yang lebih tinggi selalu berkaitan dengan tekanan yang lebih rendah, dan sebaliknya -- prinsip inilah yang membuat sayap pesawat bisa menghasilkan gaya angkat."
    skor: 2
draft: false
---
