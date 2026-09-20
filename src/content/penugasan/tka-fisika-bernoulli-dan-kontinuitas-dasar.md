---
judul: "Latihan TKA: Bernoulli & Kontinuitas (Dasar)"
kelas: TKA
mapel: Fisika
deskripsi: "11 soal latihan tingkat dasar (pemahaman & aplikasi) -- variasi tipe interaktif, sesuai kisi-kisi resmi elemen Fluida: Bernoulli & Kontinuitas. Lanjutkan ke Latihan HOTS setelah menguasai sesi ini."
materiSlug: asas-kontinuitas-dan-debit-aliran
pinHash: a377176be5010f356b0e4e0ce4ae6913c653ff9e9bd2b5ddd3821f4b0ce746b2
pinBerlakuHingga: 2027-03-20T00:00:00.000Z
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: Rumus debit aliran fluida yang tepat adalah...
    pilihan:
      - id: a
        teks: Q = A + v
      - id: b
        teks: Q = A × v
      - id: c
        teks: Q = A / v
      - id: d
        teks: Q = A × g
    jawabanBenarId: b
    penjelasan: Debit (Q) = luas penampang (A) × kecepatan aliran (v). Debit juga bisa dihitung sebagai Q = V/t (volume dibagi waktu).
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: Air mengalir melalui pipa berpenampang 0,002 m² dengan kecepatan 3 m/s. Debit aliran air tersebut adalah...
    pilihan:
      - id: a
        teks: 6 × 10⁻⁴ m³/s
      - id: b
        teks: 1,5 × 10⁻³ m³/s
      - id: c
        teks: 6 × 10⁻³ m³/s
      - id: d
        teks: 6 × 10⁻² m³/s
    jawabanBenarId: c
    penjelasan: Q = A × v = 0,002 m² × 3 m/s = 0,006 m³/s = 6 × 10⁻³ m³/s.
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: Air mengalir dalam pipa yang menyempit dari penampang besar (A1 = 6 cm²) dengan kecepatan 2 m/s, ke penampang kecil (A2 = 2 cm²). Kecepatan aliran air di penampang kecil tersebut adalah...
    pilihan:
      - id: a
        teks: 0,67 m/s
      - id: b
        teks: 2 m/s
      - id: c
        teks: 4 m/s
      - id: d
        teks: 6 m/s
    jawabanBenarId: d
    penjelasan: "Asas Kontinuitas: A1v1 = A2v2 -> v2 = (A1 × v1) / A2 = (6 × 2) / 2 = 6 m/s. Pipa yang menyempit membuat aliran bergerak lebih cepat."
    skor: 1
  - tipe: benar-salah
    id: soal-4
    soal: Debit aliran fluida pada pipa yang tidak bercabang selalu sama besar di sepanjang pipa tersebut, meski luas penampangnya berubah-ubah.
    jawabanBenar: true
    penjelasan: Benar -- ini bunyi Asas Kontinuitas. Debit tetap konstan (Q1 = Q2), sehingga kalau penampang mengecil, kecepatan aliran otomatis membesar untuk menjaga debit tetap sama.
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: Menurut Asas Bernoulli, pada pipa mendatar (ketinggian sama), bagian aliran yang kecepatannya lebih besar memiliki tekanan yang lebih besar pula.
    jawabanBenar: false
    penjelasan: Salah -- justru SEBALIKNYA. Kecepatan aliran yang lebih besar berkaitan dengan tekanan yang lebih RENDAH. Ini prinsip di balik efek venturi dan gaya angkat sayap pesawat.
    skor: 1
  - tipe: isian-singkat
    id: soal-6
    soal: Sebuah kolam diisi air sebanyak 3.000 liter (setara 3 m³) dalam waktu 5 menit (300 sekon). Debit air yang mengisi kolam tersebut adalah ... m³/s.
    angka: true
    toleransi: 0
    jawabanBenar:
      - "0.01"
    penjelasan: Q = V/t = 3 m³ / 300 s = 0,01 m³/s.
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: Air mengalir dalam pipa yang menyempit dari penampang besar (A1 = 10 cm²) berkecepatan 4 m/s, ke penampang kecil (A2 = 5 cm²). Kecepatan aliran di penampang kecil tersebut adalah ... m/s.
    angka: true
    toleransi: 0
    jawabanBenar:
      - "8"
    penjelasan: A1v1 = A2v2 -> v2 = (10 × 4) / 5 = 8 m/s.
    skor: 1
  - tipe: menjodohkan
    id: soal-8
    soal: Jodohkan istilah dengan rumus/definisinya.
    pasangan:
      - id: p1
        kiri: Debit
        kanan: Q = A × v (luas penampang × kecepatan aliran)
      - id: p2
        kiri: Asas Kontinuitas
        kanan: A1v1 = A2v2 (debit tetap sepanjang pipa tanpa cabang)
      - id: p3
        kiri: Asas Bernoulli
        kanan: P + ½ρv² + ρgh = konstan di sepanjang aliran fluida ideal
    penjelasan: Asas Kontinuitas berbicara soal KECEPATAN aliran berubah sesuai luas penampang, sementara Asas Bernoulli menghubungkan kecepatan itu dengan perubahan TEKANAN fluidanya.
    skor: 1
  - tipe: menjodohkan
    id: soal-9
    soal: Jodohkan fenomena sehari-hari berikut dengan prinsip yang paling mendasarinya.
    pasangan:
      - id: p1
        kiri: Air menyembur lebih deras saat ujung selang ditekan/disempitkan dengan ibu jari
        kanan: Asas Kontinuitas
      - id: p2
        kiri: Sayap pesawat menghasilkan gaya angkat saat pesawat melaju
        kanan: Asas Bernoulli
      - id: p3
        kiri: Semprotan parfum menyemprotkan cairan saat udara ditiup cepat melewati pipa kecil di atasnya
        kanan: Asas Bernoulli
      - id: p4
        kiri: Venturimeter mengukur kecepatan aliran fluida dari selisih tekanan pada pipa yang menyempit
        kanan: Gabungan Asas Kontinuitas & Bernoulli
    penjelasan: Kontinuitas menjelaskan KENAPA kecepatan berubah (soal ibu jari di ujung selang), sedangkan Bernoulli menjelaskan AKIBAT dari perubahan kecepatan itu terhadap tekanan (sayap pesawat, parfum, venturimeter).
    skor: 1
  - tipe: menyusun-urutan
    id: soal-10
    soal: Susun langkah menyelesaikan soal Asas Kontinuitas pada pipa yang luas penampangnya berubah, dari yang paling awal.
    item:
      - id: i1
        teks: Identifikasi luas penampang (A1, A2) pada dua titik berbeda di sepanjang pipa
      - id: i2
        teks: "Tuliskan prinsip Asas Kontinuitas: debit di kedua titik sama besar (Q1 = Q2)"
      - id: i3
        teks: Ganti debit dengan Q = A × v, sehingga menjadi A1v1 = A2v2
      - id: i4
        teks: Masukkan nilai luas penampang dan kecepatan yang sudah diketahui
      - id: i5
        teks: Selesaikan persamaan untuk besaran yang ditanyakan
    penjelasan: "Kunci Asas Kontinuitas ada pada langkah ke-2: yang tetap adalah DEBIT-nya, bukan kecepatannya -- kecepatan justru berubah mengikuti luas penampang supaya debit tetap sama."
    skor: 1
  - tipe: drag-drop
    id: soal-11
    soal: "Kelompokkan bagian pipa berikut berdasarkan kecepatan alirannya (Asas Kontinuitas): Kecepatan Lebih Besar, atau Kecepatan Lebih Kecil."
    kategori:
      - id: besar
        label: Kecepatan Lebih Besar
      - id: kecil
        label: Kecepatan Lebih Kecil
    item:
      - id: t1
        teks: Bagian pipa dengan luas penampang KECIL
        kategoriBenarId: besar
      - id: t2
        teks: Bagian pipa dengan luas penampang BESAR
        kategoriBenarId: kecil
      - id: t3
        teks: Ujung selang yang ditekan/disempitkan dengan ibu jari
        kategoriBenarId: besar
      - id: t4
        teks: Bagian pipa utama sebelum disempitkan
        kategoriBenarId: kecil
    penjelasan: Karena debit harus tetap sama (Asas Kontinuitas), penampang yang lebih SEMPIT memaksa fluida mengalir lebih CEPAT supaya volume yang lewat per detik tetap sama dengan penampang yang lebih lebar.
    skor: 1
draft: false
---
