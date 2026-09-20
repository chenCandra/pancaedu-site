---
judul: "Latihan TKA: Momen Gaya & Momen Inersia (Dasar)"
kelas: TKA
mapel: Fisika
deskripsi: "10 soal latihan tingkat dasar (pemahaman & aplikasi) -- variasi tipe interaktif, sesuai kisi-kisi resmi elemen Dinamika: Momen Gaya & Momen Inersia. Lanjutkan ke Latihan HOTS setelah menguasai sesi ini."
materiSlug: momen-gaya-torsi-dan-momen-inersia
pinHash: e899f976dd7af3400d4fc15ad49d42af08c0b5663f2d3501f6387ec3640e9782
pinBerlakuHingga: 2027-03-20T00:00:00.000Z
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: Rumus untuk menghitung momen gaya (torsi) akibat gaya yang bekerja tegak lurus pada lengan momennya adalah...
    pilihan:
      - id: a
        teks: τ = F × d
      - id: b
        teks: τ = m × a
      - id: c
        teks: τ = m × r²
      - id: d
        teks: τ = F × Δt
    jawabanBenarId: a
    penjelasan: Torsi (τ) = gaya (F) × lengan momen (d, jarak tegak lurus dari poros ke garis kerja gaya). Semakin panjang lengan momennya, semakin besar torsi yang dihasilkan untuk gaya yang sama.
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: Sebuah gaya sebesar 40 N bekerja tegak lurus pada ujung kunci pas yang panjangnya 0,25 m dari porosnya (baut). Besar torsi yang dihasilkan adalah...
    pilihan:
      - id: a
        teks: 2,5 N·m
      - id: b
        teks: 10 N·m
      - id: c
        teks: 16 N·m
      - id: d
        teks: 40,25 N·m
    jawabanBenarId: b
    penjelasan: τ = F × d = 40 N × 0,25 m = 10 N·m.
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: Sebuah gaya 20 N bekerja pada jarak 0,5 m dari poros, membentuk sudut 30° terhadap batang (sin 30° = 0,5). Besar torsi yang dihasilkan gaya tersebut adalah...
    pilihan:
      - id: a
        teks: 2,5 N·m
      - id: b
        teks: 5 N·m
      - id: c
        teks: 10 N·m
      - id: d
        teks: 17,3 N·m
    jawabanBenarId: b
    penjelasan: τ = F × r × sin θ = 20 N × 0,5 m × 0,5 = 5 N·m. Kalau gaya TIDAK tegak lurus terhadap lengan, cuma komponen gaya yang tegak lurus (F sin θ) yang menghasilkan torsi.
    skor: 1
  - tipe: benar-salah
    id: soal-4
    soal: Torsi (momen gaya) dihitung dari perkalian gaya dengan lengan momen (jarak tegak lurus dari poros ke garis kerja gaya).
    jawabanBenar: true
    penjelasan: "Benar -- ini definisi dasar torsi: τ = F × d, dengan d adalah lengan momen (jarak tegak lurus)."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: Sebuah bola pejal dan sebuah bola berongga (cincin bola tipis) memiliki massa dan jari-jari yang sama persis. Keduanya memiliki momen inersia yang sama besar.
    jawabanBenar: false
    penjelasan: Salah -- momen inersia TIDAK cuma bergantung massa dan jari-jari total, tapi juga bagaimana massa itu TERDISTRIBUSI terhadap sumbu putar. Bola berongga (massa terkumpul dekat permukaan luar, jauh dari sumbu) punya momen inersia LEBIH BESAR daripada bola pejal (massa tersebar merata sampai ke pusat) meski massa & jari-jarinya sama.
    skor: 1
  - tipe: isian-singkat
    id: soal-6
    soal: Sebuah gaya 60 N bekerja tegak lurus pada jarak 0,4 m dari poros. Besar torsi yang dihasilkan adalah ... N·m.
    angka: true
    toleransi: 0
    jawabanBenar:
      - "24"
    penjelasan: τ = F × d = 60 N × 0,4 m = 24 N·m.
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: Sebuah partikel bermassa 2 kg berada pada jarak 0,5 m dari sumbu putar. Besar momen inersia partikel tersebut adalah ... kg·m².
    angka: true
    toleransi: 0
    jawabanBenar:
      - "0.5"
    penjelasan: I = m × r² = 2 kg × (0,5 m)² = 2 × 0,25 = 0,5 kg·m².
    skor: 1
  - tipe: menjodohkan
    id: soal-8
    soal: Jodohkan istilah dengan definisi/rumusnya.
    pasangan:
      - id: p1
        kiri: Torsi (Momen Gaya)
        kanan: τ = F × d (gaya × lengan momen tegak lurus)
      - id: p2
        kiri: Momen Inersia
        kanan: Ukuran kelembaman rotasi suatu benda (I = m × r² untuk sebuah partikel)
      - id: p3
        kiri: Kesetimbangan Rotasi
        kanan: Jumlah semua torsi yang bekerja pada benda sama dengan nol (Στ = 0)
    penjelasan: Torsi adalah 'penyebab' perubahan gerak rotasi (mirip peran gaya pada gerak lurus), sedangkan momen inersia adalah 'ketahanan' benda terhadap perubahan gerak rotasi itu (mirip peran massa pada gerak lurus).
    skor: 1
  - tipe: menyusun-urutan
    id: soal-9
    soal: Susun langkah menghitung torsi total pada sebuah benda yang dikenai beberapa gaya, dari yang paling awal.
    item:
      - id: i1
        teks: Tentukan poros/sumbu putar yang menjadi acuan
      - id: i2
        teks: Identifikasi semua gaya yang bekerja pada benda beserta titik kerjanya
      - id: i3
        teks: Hitung lengan momen (jarak tegak lurus dari poros ke garis kerja tiap gaya)
      - id: i4
        teks: Hitung torsi masing-masing gaya (τ = F × lengan momen)
      - id: i5
        teks: Jumlahkan seluruh torsi dengan memperhatikan arah putarnya (searah/berlawanan jarum jam)
    penjelasan: Torsi punya arah putar (bukan cuma besar) -- torsi yang memutar searah jarum jam dan berlawanan jarum jam harus diberi tanda berlawanan sebelum dijumlahkan.
    skor: 1
  - tipe: drag-drop
    id: soal-10
    soal: "Kelompokkan faktor berikut: apakah faktor tersebut Memperbesar Torsi, atau TIDAK Memperbesar Torsi (dengan faktor lain tetap)."
    kategori:
      - id: memperbesar
        label: Memperbesar Torsi
      - id: tidak
        label: TIDAK Memperbesar Torsi
    item:
      - id: t1
        teks: Memperpanjang lengan momen (jarak tegak lurus dari poros ke garis kerja gaya)
        kategoriBenarId: memperbesar
      - id: t2
        teks: Memperbesar sudut antara gaya dan lengan, mendekati 90°
        kategoriBenarId: memperbesar
      - id: t3
        teks: Memperbesar massa benda yang berputar (gaya dan lengan momen tetap)
        kategoriBenarId: tidak
      - id: t4
        teks: Memberikan gaya SEARAH dengan lengan momen (sudut mendekati 0°)
        kategoriBenarId: tidak
    penjelasan: Rumus torsi (τ = F × r × sin θ) TIDAK melibatkan massa benda yang berputar sama sekali -- massa berpengaruh ke momen inersia, bukan ke torsi. Gaya yang segaris dengan lengan momen (θ mendekati 0°) juga tidak menghasilkan torsi, karena sin 0° = 0.
    skor: 1
draft: false
---
