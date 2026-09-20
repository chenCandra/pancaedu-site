---
judul: "Latihan TKA: Tekanan, Pascal & Archimedes (Paket 1)"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan -- 6 tipe interaktif (pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, drag & drop) dengan porsi soal HOTS, sesuai kisi-kisi resmi elemen Fluida: tekanan hidrostatis, Hukum Pascal, dan Hukum Archimedes."
materiSlug: hukum-pascal-dan-hukum-archimedes
pinHash: e0a796a7385ef6e7fd9e538fe910596e5c8ac5a32cff90c75cf0fe29541cf52a
pinBerlakuHingga: 2027-03-20
pembahasanPinHash: cbee89b53e9fd67d7dc4933d8472e94d63d5d213af290b3e645f3fd7a149a186
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus yang tepat untuk massa jenis suatu zat adalah..."
    pilihan:
      - { id: a, teks: "ρ = m × V" }
      - { id: b, teks: "ρ = m / V" }
      - { id: c, teks: "ρ = V / m" }
      - { id: d, teks: "ρ = m × g" }
    jawabanBenarId: b
    penjelasan: "Massa jenis (ρ) = massa (m) dibagi volume (V). Satuan SI-nya kg/m³."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah titik berada pada kedalaman 5 m di bawah permukaan air (massa jenis air = 1000 kg/m³, g = 10 m/s²). Besar tekanan hidrostatis pada titik tersebut adalah..."
    pilihan:
      - { id: a, teks: "500 Pa" }
      - { id: b, teks: "5.000 Pa" }
      - { id: c, teks: "50.000 Pa" }
      - { id: d, teks: "500.000 Pa" }
    jawabanBenarId: c
    penjelasan: "P = ρ × g × h = 1000 kg/m³ × 10 m/s² × 5 m = 50.000 Pa."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sebuah dongkrak hidrolik memiliki penampang kecil seluas 5 cm² dan penampang besar seluas 100 cm². Jika gaya yang diberikan pada penampang kecil sebesar 50 N, besar gaya yang dihasilkan pada penampang besar adalah..."
    pilihan:
      - { id: a, teks: "2,5 N" }
      - { id: b, teks: "250 N" }
      - { id: c, teks: "500 N" }
      - { id: d, teks: "1.000 N" }
    jawabanBenarId: d
    penjelasan: "Hukum Pascal: F1/A1 = F2/A2 -> F2 = F1 × (A2/A1) = 50 N × (100/5) = 50 × 20 = 1.000 N."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Sebuah balok kayu bermassa jenis 600 kg/m³ terapung di atas air (massa jenis air = 1000 kg/m³). Fraksi (bagian) volume balok yang tercelup di dalam air adalah..."
    pilihan:
      - { id: a, teks: "40%" }
      - { id: b, teks: "60%" }
      - { id: c, teks: "67%" }
      - { id: d, teks: "100%" }
    jawabanBenarId: b
    penjelasan: "Pada benda terapung, fraksi volume tercelup = ρ_benda / ρ_fluida = 600/1000 = 0,6 = 60%. Semakin kecil massa jenis benda dibanding fluida, semakin sedikit bagian yang tercelup."
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Besar tekanan hidrostatis pada suatu titik dalam fluida hanya bergantung pada kedalaman titik tersebut dan massa jenis fluidanya, BUKAN pada bentuk atau volume wadahnya."
    jawabanBenar: true
    penjelasan: "Benar -- ini disebut 'paradoks hidrostatis'. Dua wadah berbeda bentuk dengan ketinggian permukaan fluida yang sama akan punya tekanan dasar yang SAMA, selama kedalaman dan jenis fluidanya sama."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Menurut Hukum Archimedes, besar gaya apung yang dialami suatu benda dalam fluida sama dengan berat fluida yang dipindahkan oleh bagian benda yang tercelup."
    jawabanBenar: true
    penjelasan: "Benar -- ini bunyi Hukum Archimedes: F_apung = ρ_fluida × g × V_tercelup, yang secara fisis sama dengan berat fluida sebanyak volume yang dipindahkan benda."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah benda memiliki massa 750 gram dan volume 500 cm³ (setara 0,0005 m³). Massa jenis benda tersebut adalah ... kg/m³."
    angka: true
    toleransi: 0
    jawabanBenar: ["1500"]
    penjelasan: "ρ = m/V = 0,75 kg / 0,0005 m³ = 1500 kg/m³."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah titik berada pada kedalaman 8 m di bawah permukaan minyak (massa jenis minyak = 800 kg/m³, g = 10 m/s²). Besar tekanan hidrostatis pada titik tersebut adalah ... Pa."
    angka: true
    toleransi: 0
    jawabanBenar: ["64000"]
    penjelasan: "P = ρ × g × h = 800 × 10 × 8 = 64.000 Pa."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah dongkrak hidrolik memiliki penampang kecil 4 cm² dan penampang besar 200 cm². Agar dapat mengangkat beban 2.000 N pada penampang besar, gaya minimum yang harus diberikan pada penampang kecil adalah ... N."
    angka: true
    toleransi: 0
    jawabanBenar: ["40"]
    penjelasan: "F1/A1 = F2/A2 -> F1 = F2 × (A1/A2) = 2000 × (4/200) = 2000 × 0,02 = 40 N."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan istilah dengan definisi/rumusnya."
    pasangan:
      - { id: p1, kiri: "Massa Jenis", kanan: "ρ = m / V (massa per satuan volume)" }
      - { id: p2, kiri: "Tekanan Hidrostatis", kanan: "P = ρ × g × h (bergantung kedalaman & massa jenis fluida)" }
      - { id: p3, kiri: "Hukum Pascal", kanan: "Tekanan yang diberikan pada fluida tertutup diteruskan sama besar ke segala arah" }
      - { id: p4, kiri: "Hukum Archimedes", kanan: "Gaya apung sama besar dengan berat fluida yang dipindahkan oleh bagian benda yang tercelup" }
    penjelasan: "Keempat konsep ini saling berkaitan -- massa jenis jadi dasar perhitungan tekanan hidrostatis maupun gaya apung, sementara Hukum Pascal & Archimedes menjelaskan dua fenomena fluida statis yang paling banyak diterapkan."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan fenomena sehari-hari berikut dengan hukum/konsep yang paling mendasarinya."
    pasangan:
      - { id: p1, kiri: "Dongkrak hidrolik bisa mengangkat mobil seberat 1 ton dengan gaya tangan yang kecil", kanan: "Hukum Pascal" }
      - { id: p2, kiri: "Kapal besi yang berat tetap bisa mengapung di air", kanan: "Hukum Archimedes" }
      - { id: p3, kiri: "Telinga terasa makin sakit/tertekan saat menyelam makin dalam", kanan: "Tekanan Hidrostatis" }
      - { id: p4, kiri: "Telur yang tenggelam di air tawar bisa mengapung kalau air itu ditambah banyak garam", kanan: "Hukum Archimedes" }
    penjelasan: "Menambah garam membuat massa jenis air garam lebih besar dari air tawar biasa -- begitu massa jenis fluida melebihi massa jenis telur, telur yang tadinya tenggelam jadi terapung (Hukum Archimedes)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menyelesaikan soal Hukum Pascal (mis. dongkrak hidrolik), dari yang paling awal."
    item:
      - { id: i1, teks: "Identifikasi luas penampang kecil (A1) dan luas penampang besar (A2)" }
      - { id: i2, teks: "Tuliskan prinsip Hukum Pascal: tekanan pada kedua penampang sama besar (P1 = P2)" }
      - { id: i3, teks: "Ganti tekanan dengan P = F/A, sehingga menjadi F1/A1 = F2/A2" }
      - { id: i4, teks: "Masukkan nilai gaya dan luas yang sudah diketahui" }
      - { id: i5, teks: "Selesaikan persamaan untuk gaya yang ditanyakan" }
    penjelasan: "Inti Hukum Pascal ada di langkah ke-2: tekanannya yang sama, bukan gayanya -- gaya yang lebih besar dihasilkan justru di penampang yang luasnya lebih besar."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menentukan status sebuah benda dalam fluida (terapung/melayang/tenggelam), dari yang paling awal."
    item:
      - { id: i1, teks: "Bandingkan massa jenis benda (ρ_benda) dengan massa jenis fluida (ρ_fluida)" }
      - { id: i2, teks: "Jika ρ_benda lebih kecil dari ρ_fluida, simpulkan benda akan TERAPUNG" }
      - { id: i3, teks: "Jika ρ_benda sama dengan ρ_fluida, simpulkan benda akan MELAYANG" }
      - { id: i4, teks: "Jika ρ_benda lebih besar dari ρ_fluida, simpulkan benda akan TENGGELAM" }
      - { id: i5, teks: "Khusus benda yang terapung, hitung fraksi volume tercelup dengan V_tercelup/V_total = ρ_benda/ρ_fluida" }
    penjelasan: "Perbandingan massa jenis benda dan fluida adalah kunci utama menentukan status benda -- bukan berat atau ukuran benda secara mutlak."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan kondisi berikut berdasarkan status benda dalam fluida: Terapung, Melayang, atau Tenggelam."
    kategori:
      - { id: terapung, label: "Terapung" }
      - { id: melayang, label: "Melayang" }
      - { id: tenggelam, label: "Tenggelam" }
    item:
      - { id: t1, teks: "Massa jenis benda LEBIH KECIL daripada massa jenis fluida", kategoriBenarId: terapung }
      - { id: t2, teks: "Gabus (massa jenis jauh lebih kecil dari air) dimasukkan ke kolam", kategoriBenarId: terapung }
      - { id: t3, teks: "Massa jenis benda SAMA BESAR dengan massa jenis fluida", kategoriBenarId: melayang }
      - { id: t4, teks: "Kapsul selam mini yang beratnya diatur persis sama dengan gaya apung air di sekelilingnya", kategoriBenarId: melayang }
      - { id: t5, teks: "Massa jenis benda LEBIH BESAR daripada massa jenis fluida", kategoriBenarId: tenggelam }
      - { id: t6, teks: "Batu (massa jenis jauh lebih besar dari air) dimasukkan ke dalam kolam", kategoriBenarId: tenggelam }
    penjelasan: "Tiga kondisi ini murni ditentukan dari PERBANDINGAN massa jenis benda dan fluida -- bukan dari berat benda secara mutlak. Batu kecil bisa tenggelam, kapal besi yang jauh lebih berat bisa terapung, karena bentuknya membuat massa jenis RATA-RATA kapal (termasuk rongga udara di dalamnya) lebih kecil dari air."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan tentang tekanan hidrostatis berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Tekanan hidrostatis pada suatu titik hanya bergantung kedalaman titik tersebut dari permukaan, BUKAN pada bentuk wadahnya", kategoriBenarId: benar }
      - { id: t2, teks: "Dua wadah berbeda bentuk (satu tabung lurus, satu kerucut terbalik) diisi air dengan ketinggian permukaan yang SAMA -- tekanan di dasar kedua wadah tersebut BERBEDA karena bentuknya berbeda", kategoriBenarId: salah }
      - { id: t3, teks: "Semakin dalam suatu titik di bawah permukaan fluida, semakin besar tekanan hidrostatisnya", kategoriBenarId: benar }
      - { id: t4, teks: "Tekanan hidrostatis pada kedalaman yang sama akan selalu sama besar, berapa pun massa jenis fluidanya", kategoriBenarId: salah }
    penjelasan: "Miskonsepsi paling umum: mengira bentuk/volume wadah memengaruhi tekanan hidrostatis (item 2) -- padahal P = ρgh HANYA bergantung kedalaman (h) dan massa jenis fluida (ρ), bukan bentuk wadahnya (disebut paradoks hidrostatis). Begitu juga item 4 -- kedalaman sama TIDAK berarti tekanan sama kalau massa jenis fluidanya berbeda."
    skor: 2
draft: false
---
