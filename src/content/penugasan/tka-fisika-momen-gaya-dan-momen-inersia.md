---
judul: "Latihan TKA: Momen Gaya & Momen Inersia (Paket 1)"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan -- 6 tipe interaktif (pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, drag & drop) dengan porsi soal HOTS, sesuai kisi-kisi resmi elemen Dinamika (Momen Gaya & Momen Inersia): torsi, kesetimbangan rotasi, dan momen inersia."
materiSlug: momen-gaya-torsi-dan-momen-inersia
pinHash: 967fe0f9281d1ce17ba5dd06fdfc67c126b76d900e2bdcbfdc777d4fb2a5a5f8
pinBerlakuHingga: 2027-03-20
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus untuk menghitung momen gaya (torsi) akibat gaya yang bekerja tegak lurus pada lengan momennya adalah..."
    pilihan:
      - { id: a, teks: "τ = F × d" }
      - { id: b, teks: "τ = m × a" }
      - { id: c, teks: "τ = m × r²" }
      - { id: d, teks: "τ = F × Δt" }
    jawabanBenarId: a
    penjelasan: "Torsi (τ) = gaya (F) × lengan momen (d, jarak tegak lurus dari poros ke garis kerja gaya). Semakin panjang lengan momennya, semakin besar torsi yang dihasilkan untuk gaya yang sama."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah gaya sebesar 40 N bekerja tegak lurus pada ujung kunci pas yang panjangnya 0,25 m dari porosnya (baut). Besar torsi yang dihasilkan adalah..."
    pilihan:
      - { id: a, teks: "2,5 N·m" }
      - { id: b, teks: "10 N·m" }
      - { id: c, teks: "16 N·m" }
      - { id: d, teks: "40,25 N·m" }
    jawabanBenarId: b
    penjelasan: "τ = F × d = 40 N × 0,25 m = 10 N·m."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sebuah gaya 20 N bekerja pada jarak 0,5 m dari poros, membentuk sudut 30° terhadap batang (sin 30° = 0,5). Besar torsi yang dihasilkan gaya tersebut adalah..."
    pilihan:
      - { id: a, teks: "2,5 N·m" }
      - { id: b, teks: "5 N·m" }
      - { id: c, teks: "10 N·m" }
      - { id: d, teks: "17,3 N·m" }
    jawabanBenarId: b
    penjelasan: "τ = F × r × sin θ = 20 N × 0,5 m × 0,5 = 5 N·m. Kalau gaya TIDAK tegak lurus terhadap lengan, cuma komponen gaya yang tegak lurus (F sin θ) yang menghasilkan torsi."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Andi menggunakan kunci pas sepanjang 20 cm, sedangkan Budi menggunakan kunci pas sepanjang 40 cm untuk baut yang sama. Jika keduanya memberikan gaya tegak lurus yang SAMA besar pada ujung kunci pas, perbandingan torsi yang dihasilkan Andi terhadap Budi (τ_Andi : τ_Budi) adalah..."
    pilihan:
      - { id: a, teks: "1 : 1" }
      - { id: b, teks: "1 : 2" }
      - { id: c, teks: "2 : 1" }
      - { id: d, teks: "1 : 4" }
    jawabanBenarId: b
    penjelasan: "Karena gaya (F) sama untuk keduanya, torsi hanya bergantung pada lengan momen (d): τ_Andi : τ_Budi = d_Andi : d_Budi = 20 : 40 = 1 : 2. Inilah alasan kunci pas yang lebih panjang lebih mudah melepas baut yang keras."
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Torsi (momen gaya) dihitung dari perkalian gaya dengan lengan momen (jarak tegak lurus dari poros ke garis kerja gaya)."
    jawabanBenar: true
    penjelasan: "Benar -- ini definisi dasar torsi: τ = F × d, dengan d adalah lengan momen (jarak tegak lurus)."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Sebuah bola pejal dan sebuah bola berongga (cincin bola tipis) memiliki massa dan jari-jari yang sama persis. Keduanya memiliki momen inersia yang sama besar."
    jawabanBenar: false
    penjelasan: "Salah -- momen inersia TIDAK cuma bergantung massa dan jari-jari total, tapi juga bagaimana massa itu TERDISTRIBUSI terhadap sumbu putar. Bola berongga (massa terkumpul dekat permukaan luar, jauh dari sumbu) punya momen inersia LEBIH BESAR daripada bola pejal (massa tersebar merata sampai ke pusat) meski massa & jari-jarinya sama."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah gaya 60 N bekerja tegak lurus pada jarak 0,4 m dari poros. Besar torsi yang dihasilkan adalah ... N·m."
    angka: true
    toleransi: 0
    jawabanBenar: ["24"]
    penjelasan: "τ = F × d = 60 N × 0,4 m = 24 N·m."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah partikel bermassa 2 kg berada pada jarak 0,5 m dari sumbu putar. Besar momen inersia partikel tersebut adalah ... kg·m²."
    angka: true
    toleransi: 0
    jawabanBenar: ["0.5"]
    penjelasan: "I = m × r² = 2 kg × (0,5 m)² = 2 × 0,25 = 0,5 kg·m²."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah batang tuas (jungkat-jungkit) diberi gaya 100 N pada jarak 2 m di satu sisi poros. Agar tuas tersebut tepat seimbang (Στ = 0), besar gaya yang harus diberikan pada sisi berlawanan, pada jarak 4 m dari poros, adalah ... N."
    angka: true
    toleransi: 0
    jawabanBenar: ["50"]
    penjelasan: "Syarat seimbang: torsi kedua sisi harus sama besar (berlawanan arah putar). τ₁ = τ₂ -> 100 N × 2 m = F₂ × 4 m -> F₂ = 200/4 = 50 N. Gaya yang lengan momennya lebih panjang butuh gaya yang lebih kecil untuk torsi yang sama."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan istilah dengan definisi/rumusnya."
    pasangan:
      - { id: p1, kiri: "Torsi (Momen Gaya)", kanan: "τ = F × d (gaya × lengan momen tegak lurus)" }
      - { id: p2, kiri: "Momen Inersia", kanan: "Ukuran kelembaman rotasi suatu benda (I = m × r² untuk sebuah partikel)" }
      - { id: p3, kiri: "Kesetimbangan Rotasi", kanan: "Jumlah semua torsi yang bekerja pada benda sama dengan nol (Στ = 0)" }
    penjelasan: "Torsi adalah 'penyebab' perubahan gerak rotasi (mirip peran gaya pada gerak lurus), sedangkan momen inersia adalah 'ketahanan' benda terhadap perubahan gerak rotasi itu (mirip peran massa pada gerak lurus)."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan situasi sehari-hari berikut dengan konsep yang paling sesuai menjelaskannya."
    pasangan:
      - { id: p1, kiri: "Kunci pas bertangkai panjang lebih mudah melepas baut yang keras dibanding kunci pas pendek", kanan: "Lengan momen (torsi) lebih besar" }
      - { id: p2, kiri: "Roda sepeda (massa terpusat di lingkaran luar/pelek) lebih sulit dipercepat putarannya dibanding piringan pejal bermassa sama", kanan: "Momen inersia lebih besar" }
      - { id: p3, kiri: "Jungkat-jungkit tetap bisa seimbang meski berat badan kedua anak berbeda, asal jaraknya diatur", kanan: "Kesetimbangan rotasi (Στ = 0)" }
    penjelasan: "Ketiga konsep ini saling terkait tapi berbeda peran -- torsi soal SEBERAPA KUAT gaya memutar, momen inersia soal SEBERAPA SULIT benda diputar, kesetimbangan rotasi soal KAPAN benda tidak berputar sama sekali."
    skor: 2
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menghitung torsi total pada sebuah benda yang dikenai beberapa gaya, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan poros/sumbu putar yang menjadi acuan" }
      - { id: i2, teks: "Identifikasi semua gaya yang bekerja pada benda beserta titik kerjanya" }
      - { id: i3, teks: "Hitung lengan momen (jarak tegak lurus dari poros ke garis kerja tiap gaya)" }
      - { id: i4, teks: "Hitung torsi masing-masing gaya (τ = F × lengan momen)" }
      - { id: i5, teks: "Jumlahkan seluruh torsi dengan memperhatikan arah putarnya (searah/berlawanan jarum jam)" }
    penjelasan: "Torsi punya arah putar (bukan cuma besar) -- torsi yang memutar searah jarum jam dan berlawanan jarum jam harus diberi tanda berlawanan sebelum dijumlahkan."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menyelesaikan soal kesetimbangan rotasi (tuas/jungkat-jungkit), dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan poros yang dijadikan acuan (biasanya titik yang gayanya tidak diketahui/ditanyakan)" }
      - { id: i2, teks: "Tetapkan konvensi arah putar positif (mis. berlawanan jarum jam = positif)" }
      - { id: i3, teks: "Hitung torsi tiap gaya terhadap poros tersebut, sesuai konvensi arah yang ditetapkan" }
      - { id: i4, teks: "Jumlahkan seluruh torsi dan samakan dengan nol (Στ = 0)" }
      - { id: i5, teks: "Selesaikan persamaan untuk mendapatkan gaya/jarak yang ditanyakan" }
    penjelasan: "Memilih poros dengan cerdas (mis. di titik gaya yang tidak diketahui) bisa membuat gaya itu langsung hilang dari persamaan (lengan momennya = 0), sehingga soal jadi jauh lebih mudah diselesaikan."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan faktor berikut: apakah faktor tersebut Memperbesar Torsi, atau TIDAK Memperbesar Torsi (dengan faktor lain tetap)."
    kategori:
      - { id: memperbesar, label: "Memperbesar Torsi" }
      - { id: tidak, label: "TIDAK Memperbesar Torsi" }
    item:
      - { id: t1, teks: "Memperpanjang lengan momen (jarak tegak lurus dari poros ke garis kerja gaya)", kategoriBenarId: memperbesar }
      - { id: t2, teks: "Memperbesar sudut antara gaya dan lengan, mendekati 90°", kategoriBenarId: memperbesar }
      - { id: t3, teks: "Memperbesar massa benda yang berputar (gaya dan lengan momen tetap)", kategoriBenarId: tidak }
      - { id: t4, teks: "Memberikan gaya SEARAH dengan lengan momen (sudut mendekati 0°)", kategoriBenarId: tidak }
    penjelasan: "Rumus torsi (τ = F × r × sin θ) TIDAK melibatkan massa benda yang berputar sama sekali -- massa berpengaruh ke momen inersia, bukan ke torsi. Gaya yang segaris dengan lengan momen (θ mendekati 0°) juga tidak menghasilkan torsi, karena sin 0° = 0."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Empat benda berikut memiliki massa dan jari-jari yang SAMA. Kelompokkan berdasarkan besar momen inersianya terhadap sumbu pusat: Momen Inersia Lebih Kecil, atau Momen Inersia Lebih Besar."
    kategori:
      - { id: kecil, label: "Momen Inersia Lebih Kecil" }
      - { id: besar, label: "Momen Inersia Lebih Besar" }
    item:
      - { id: t1, teks: "Bola pejal (massa merata sampai ke pusat)", kategoriBenarId: kecil }
      - { id: t2, teks: "Silinder pejal (massa merata sampai ke sumbu tengah)", kategoriBenarId: kecil }
      - { id: t3, teks: "Cincin/gelang tipis (semua massa terkumpul di tepi terluar)", kategoriBenarId: besar }
      - { id: t4, teks: "Bola berongga tipis (massa terkumpul dekat permukaan luar)", kategoriBenarId: besar }
    penjelasan: "Untuk massa dan jari-jari luar yang sama, momen inersia lebih besar kalau massanya terkonsentrasi JAUH dari sumbu putar (seperti cincin/bola berongga), dan lebih kecil kalau massanya tersebar sampai DEKAT sumbu (seperti bola/silinder pejal)."
    skor: 2
draft: false
---
