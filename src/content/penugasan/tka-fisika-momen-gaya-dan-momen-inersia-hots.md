---
judul: "Latihan TKA: Momen Gaya & Momen Inersia (HOTS)"
kelas: TKA
mapel: Fisika
deskripsi: "5 soal latihan HOTS (penalaran tingkat tinggi, analisis, & penerapan lanjutan) -- variasi tipe interaktif, sesuai kisi-kisi resmi elemen Dinamika: Momen Gaya & Momen Inersia. Lanjutan dari Latihan Dasar."
materiSlug: momen-gaya-torsi-dan-momen-inersia
pinHash: ba126ed29334033ced106f3431e3d8bcdc5b0f01e7e9e9d68bb375924965f759
pinBerlakuHingga: 2027-03-20T00:00:00.000Z
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Andi menggunakan kunci pas sepanjang 20 cm, sedangkan Budi menggunakan kunci pas sepanjang 40 cm untuk baut yang sama. Jika keduanya memberikan gaya tegak lurus yang SAMA besar pada ujung kunci pas, perbandingan torsi yang dihasilkan Andi terhadap Budi (τ_Andi : τ_Budi) adalah..."
    pilihan:
      - id: a
        teks: "1 : 1"
      - id: b
        teks: "1 : 2"
      - id: c
        teks: "2 : 1"
      - id: d
        teks: "1 : 4"
    jawabanBenarId: b
    penjelasan: "Karena gaya (F) sama untuk keduanya, torsi hanya bergantung pada lengan momen (d): τ_Andi : τ_Budi = d_Andi : d_Budi = 20 : 40 = 1 : 2. Inilah alasan kunci pas yang lebih panjang lebih mudah melepas baut yang keras."
    skor: 2
  - tipe: isian-singkat
    id: soal-2
    soal: Sebuah batang tuas (jungkat-jungkit) diberi gaya 100 N pada jarak 2 m di satu sisi poros. Agar tuas tersebut tepat seimbang (Στ = 0), besar gaya yang harus diberikan pada sisi berlawanan, pada jarak 4 m dari poros, adalah ... N.
    angka: true
    toleransi: 0
    jawabanBenar:
      - "50"
    penjelasan: "Syarat seimbang: torsi kedua sisi harus sama besar (berlawanan arah putar). τ₁ = τ₂ -> 100 N × 2 m = F₂ × 4 m -> F₂ = 200/4 = 50 N. Gaya yang lengan momennya lebih panjang butuh gaya yang lebih kecil untuk torsi yang sama."
    skor: 2
  - tipe: menjodohkan
    id: soal-3
    soal: Jodohkan situasi sehari-hari berikut dengan konsep yang paling sesuai menjelaskannya.
    pasangan:
      - id: p1
        kiri: Kunci pas bertangkai panjang lebih mudah melepas baut yang keras dibanding kunci pas pendek
        kanan: Lengan momen (torsi) lebih besar
      - id: p2
        kiri: Roda sepeda (massa terpusat di lingkaran luar/pelek) lebih sulit dipercepat putarannya dibanding piringan pejal bermassa sama
        kanan: Momen inersia lebih besar
      - id: p3
        kiri: Jungkat-jungkit tetap bisa seimbang meski berat badan kedua anak berbeda, asal jaraknya diatur
        kanan: Kesetimbangan rotasi (Στ = 0)
    penjelasan: Ketiga konsep ini saling terkait tapi berbeda peran -- torsi soal SEBERAPA KUAT gaya memutar, momen inersia soal SEBERAPA SULIT benda diputar, kesetimbangan rotasi soal KAPAN benda tidak berputar sama sekali.
    skor: 2
  - tipe: menyusun-urutan
    id: soal-4
    soal: Susun langkah menyelesaikan soal kesetimbangan rotasi (tuas/jungkat-jungkit), dari yang paling awal.
    item:
      - id: i1
        teks: Tentukan poros yang dijadikan acuan (biasanya titik yang gayanya tidak diketahui/ditanyakan)
      - id: i2
        teks: Tetapkan konvensi arah putar positif (mis. berlawanan jarum jam = positif)
      - id: i3
        teks: Hitung torsi tiap gaya terhadap poros tersebut, sesuai konvensi arah yang ditetapkan
      - id: i4
        teks: Jumlahkan seluruh torsi dan samakan dengan nol (Στ = 0)
      - id: i5
        teks: Selesaikan persamaan untuk mendapatkan gaya/jarak yang ditanyakan
    penjelasan: Memilih poros dengan cerdas (mis. di titik gaya yang tidak diketahui) bisa membuat gaya itu langsung hilang dari persamaan (lengan momennya = 0), sehingga soal jadi jauh lebih mudah diselesaikan.
    skor: 2
  - tipe: drag-drop
    id: soal-5
    soal: "Empat benda berikut memiliki massa dan jari-jari yang SAMA. Kelompokkan berdasarkan besar momen inersianya terhadap sumbu pusat: Momen Inersia Lebih Kecil, atau Momen Inersia Lebih Besar."
    kategori:
      - id: kecil
        label: Momen Inersia Lebih Kecil
      - id: besar
        label: Momen Inersia Lebih Besar
    item:
      - id: t1
        teks: Bola pejal (massa merata sampai ke pusat)
        kategoriBenarId: kecil
      - id: t2
        teks: Silinder pejal (massa merata sampai ke sumbu tengah)
        kategoriBenarId: kecil
      - id: t3
        teks: Cincin/gelang tipis (semua massa terkumpul di tepi terluar)
        kategoriBenarId: besar
      - id: t4
        teks: Bola berongga tipis (massa terkumpul dekat permukaan luar)
        kategoriBenarId: besar
    penjelasan: Untuk massa dan jari-jari luar yang sama, momen inersia lebih besar kalau massanya terkonsentrasi JAUH dari sumbu putar (seperti cincin/bola berongga), dan lebih kecil kalau massanya tersebar sampai DEKAT sumbu (seperti bola/silinder pejal).
    skor: 2
draft: false
---
