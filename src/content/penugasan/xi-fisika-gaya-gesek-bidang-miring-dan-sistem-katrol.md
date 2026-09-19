---
judul: "Gaya Gesek, Bidang Miring, dan Sistem Katrol"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar gaya gesek, bidang miring, dan sistem katrol."
materiSlug: gaya-gesek-bidang-miring-dan-sistem-katrol
pinHash: 792e7cf564f54a0e3f7de5b177d17fac53d0efafc8db677c5593cee55a0ef212
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus gaya gesek adalah..."
    pilihan:
      - { id: a, teks: "f = μN" }
      - { id: b, teks: "f = μ/N" }
      - { id: c, teks: "f = N/μ" }
      - { id: d, teks: "f = μ + N" }
    jawabanBenarId: a
    penjelasan: "Gaya gesek f = μN, hasil kali koefisien gesek (μ) dan gaya normal (N)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Komponen gaya berat yang SEJAJAR bidang miring (menarik benda meluncur turun) adalah..."
    pilihan:
      - { id: a, teks: "mg sinθ" }
      - { id: b, teks: "mg cosθ" }
      - { id: c, teks: "mg tanθ" }
      - { id: d, teks: "mg" }
    jawabanBenarId: a
    penjelasan: "mg sinθ adalah komponen gaya berat yang sejajar bidang miring."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Balok 6 kg di bidang miring licin bersudut 30° (g=10 m/s², sin30°=0,5). Berapa percepatannya?"
    pilihan:
      - { id: a, teks: "5 m/s²" }
      - { id: b, teks: "3 m/s²" }
      - { id: c, teks: "10 m/s²" }
      - { id: d, teks: "0,5 m/s²" }
    jawabanBenarId: a
    penjelasan: "Tanpa gesekan, a = g sinθ = 10×0,5 = 5 m/s² (massa tidak berpengaruh)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Pada sistem katrol (m1 di meja, m2 menggantung), percepatan kedua benda itu..."
    pilihan:
      - { id: a, teks: "Selalu sama besar, karena dihubungkan tali yang sama" }
      - { id: b, teks: "Selalu berbeda, tergantung massanya" }
      - { id: c, teks: "Tidak bisa ditentukan" }
      - { id: d, teks: "Selalu nol" }
    jawabanBenarId: a
    penjelasan: "Karena tali tidak mulur dan katrol tidak bermassa, kedua benda punya percepatan yang sama besar."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Gaya normal (N) pada bidang miring selalu sama dengan mg, sama seperti di lantai datar."
    jawabanBenar: false
    penjelasan: "Salah -- di bidang miring, N = mg cosθ, lebih kecil dari mg (kecuali θ=0°)."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Gaya gesek kinetis bekerja saat benda sedang bergerak relatif terhadap permukaannya."
    jawabanBenar: true
    penjelasan: "Benar -- gesekan kinetis bekerja saat benda sedang bergerak, melawan arah geraknya."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Pada sistem katrol dengan gesekan pada m1, gaya gesek itu SELALU mempercepat sistem, bukan menahannya."
    jawabanBenar: false
    penjelasan: "Salah -- gaya gesek selalu melawan arah gerak, sehingga MENGURANGI percepatan sistem, bukan mempercepat."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Balok 5 kg di bidang miring bersudut 37° dengan μ=0,2 (g=10, sin37°=0,6, cos37°=0,8). Berapa gaya normal (N), dalam Newton?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["40"]
    penjelasan: "N = mg cosθ = 5×10×0,8 = 40 N."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Masih dari balok 5 kg di bidang miring 37° dengan μ=0,2, berapa gaya gesek (f), dalam Newton?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["8"]
    penjelasan: "f = μN = 0,2×40 = 8 N."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Sistem katrol licin: m1=3 kg di meja, m2=2 kg menggantung (g=10 m/s²). Berapa percepatan sistemnya, dalam m/s²?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["4"]
    penjelasan: "a = (m2g)/(m1+m2) = (2×10)/(3+2) = 20/5 = 4 m/s²."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan komponen gaya di bidang miring dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Sejajar bidang (menarik turun)", kanan: "mg sinθ" }
      - { id: p2, kiri: "Tegak lurus bidang (= gaya normal)", kanan: "mg cosθ" }
    penjelasan: "mg sinθ sejajar bidang (menarik turun), mg cosθ tegak lurus bidang (ditahan gaya normal)."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan jenis gesekan dengan kondisinya."
    pasangan:
      - { id: p1, kiri: "Gesekan Statis", kanan: "Bekerja saat benda masih diam" }
      - { id: p2, kiri: "Gesekan Kinetis", kanan: "Bekerja saat benda sedang bergerak" }
    penjelasan: "Statis menahan benda supaya tidak mulai bergerak, kinetis melawan gerak yang sudah terjadi."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung percepatan sistem katrol dengan gesekan pada m1, dari yang paling awal."
    item:
      - { id: i1, teks: "Hitung gaya normal pada m1 (N = m1×g, kalau meja datar)" }
      - { id: i2, teks: "Hitung gaya gesek pada m1 (f = μN)" }
      - { id: i3, teks: "Hitung percepatan sistem: a = (m2×g − f)/(m1+m2)" }
      - { id: i4, teks: "Hitung tegangan tali: T = m1×a + f" }
    penjelasan: "Normal dulu, baru gesekan, baru percepatan sistem, baru tegangan tali."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan besaran berikut sesuai bagian sistem yang mempengaruhinya (bidang miring)."
    kategori:
      - { id: sejajar, label: "Sejajar Bidang" }
      - { id: tegaklurus, label: "Tegak Lurus Bidang" }
    item:
      - { id: t1, teks: "mg sinθ", kategoriBenarId: sejajar }
      - { id: t2, teks: "mg cosθ", kategoriBenarId: tegaklurus }
      - { id: t3, teks: "Gaya normal (N)", kategoriBenarId: tegaklurus }
      - { id: t4, teks: "Gaya gesek (f)", kategoriBenarId: sejajar }
    penjelasan: "mg sinθ dan f bekerja sejajar bidang, mg cosθ dan N bekerja tegak lurus bidang."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sesuai konsep yang paling tepat."
    kategori:
      - { id: gesek, label: "Gaya Gesek" }
      - { id: miring, label: "Bidang Miring" }
      - { id: katrol, label: "Sistem Katrol" }
    item:
      - { id: t1, teks: "Ban aus lebih mudah selip karena koefisien geseknya kecil", kategoriBenarId: gesek }
      - { id: t2, teks: "Mobil butuh gas lebih besar di jalan yang makin curam", kategoriBenarId: miring }
      - { id: t3, teks: "Dua benda yang dihubungkan tali lewat katrol punya percepatan sama", kategoriBenarId: katrol }
    penjelasan: "Tiga konsep berbeda dengan konteks penerapannya masing-masing."
    skor: 1
draft: false
---
