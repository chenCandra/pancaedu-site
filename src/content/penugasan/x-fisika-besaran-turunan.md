---
judul: "Besaran Turunan"
kelas: X
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar luas, volume, kecepatan, gaya, tekanan, usaha, dan daya sebagai besaran turunan."
materiSlug: besaran-turunan
pinHash: bddac7e1ab8c9798a0a7beaf54f2f3b3d682dc7a48c2a2e47946355e520126b8
pinBerlakuHingga: 2027-03-11
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Manakah yang termasuk besaran turunan?"
    pilihan:
      - { id: a, teks: "Massa" }
      - { id: b, teks: "Waktu" }
      - { id: c, teks: "Panjang" }
      - { id: d, teks: "Kecepatan" }
    jawabanBenarId: d
    penjelasan: "Kecepatan diperoleh dari panjang dibagi waktu, sehingga termasuk besaran turunan. Massa, waktu, dan panjang adalah besaran pokok."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah benda memiliki panjang 4 m dan lebar 2 m. Luas benda tersebut adalah..."
    pilihan:
      - { id: a, teks: "6 m²" }
      - { id: b, teks: "8 m²" }
      - { id: c, teks: "8 m" }
      - { id: d, teks: "2 m²" }
    jawabanBenarId: b
    penjelasan: "Luas dihitung dengan A = p × l, sehingga A = 4 × 2 = 8 m²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sebuah benda bermassa 5 kg mengalami percepatan 2 m/s². Besarnya gaya yang bekerja pada benda adalah..."
    pilihan:
      - { id: a, teks: "2 N" }
      - { id: b, teks: "5 N" }
      - { id: c, teks: "7 N" }
      - { id: d, teks: "10 N" }
    jawabanBenarId: d
    penjelasan: "Berdasarkan F = m × a, gaya = 5 × 2 = 10 N."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Satuan SI untuk tekanan adalah..."
    pilihan:
      - { id: a, teks: "Newton" }
      - { id: b, teks: "Joule" }
      - { id: c, teks: "Pascal" }
      - { id: d, teks: "Watt" }
    jawabanBenarId: c
    penjelasan: "Tekanan merupakan besaran turunan yang memiliki satuan SI pascal (Pa)."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Newton adalah besaran pokok baru selain 7 besaran pokok yang sudah ada."
    jawabanBenar: false
    penjelasan: "Salah -- newton adalah nama SATUAN untuk besaran gaya (besaran turunan), bukan besaran pokok baru."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Kecepatan dibentuk dari besaran panjang dan waktu."
    jawabanBenar: true
    penjelasan: "Benar -- v = s/t, dibentuk dari perpindahan (panjang) dibagi waktu."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Meter persegi (m²) adalah nama besaran turunan itu sendiri."
    jawabanBenar: false
    penjelasan: "Salah -- Luas adalah nama besaran turunannya, meter persegi (m²) adalah satuannya."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah kotak berukuran panjang 3 m, lebar 2 m, tinggi 1 m. Berapa volumenya, dalam m³?"
    angka: true
    toleransi: 0
    jawabanBenar: ["6"]
    penjelasan: "V = p × l × t = 3 × 2 × 1 = 6 m³."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah mobil menempuh jarak 150 m dalam waktu 10 s. Berapa kecepatannya, dalam m/s?"
    angka: true
    toleransi: 0
    jawabanBenar: ["15"]
    penjelasan: "v = s/t = 150/10 = 15 m/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Gaya 80 N bekerja pada permukaan seluas 4 m². Berapa tekanannya, dalam Pa?"
    angka: true
    toleransi: 0
    jawabanBenar: ["20"]
    penjelasan: "P = F/A = 80/4 = 20 Pa."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran turunan dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Luas", kanan: "p × l" }
      - { id: p2, kiri: "Kecepatan", kanan: "s / t" }
      - { id: p3, kiri: "Gaya", kanan: "m × a" }
      - { id: p4, kiri: "Tekanan", kanan: "F / A" }
    penjelasan: "Empat rumus besaran turunan yang paling sering dipakai di Fisika Kelas X."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan besaran turunan dengan satuan SI-nya."
    pasangan:
      - { id: p1, kiri: "Gaya", kanan: "newton" }
      - { id: p2, kiri: "Usaha", kanan: "joule" }
      - { id: p3, kiri: "Daya", kanan: "watt" }
      - { id: p4, kiri: "Tekanan", kanan: "pascal" }
    penjelasan: "Newton, joule, watt, dan pascal adalah nama-nama satuan khusus untuk besaran turunan tertentu."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menentukan apakah suatu besaran termasuk besaran turunan, dari yang paling awal."
    item:
      - { id: i1, teks: "Tuliskan rumus/persamaan besaran tersebut" }
      - { id: i2, teks: "Identifikasi besaran-besaran penyusunnya" }
      - { id: i3, teks: "Periksa apakah penyusunnya besaran pokok" }
      - { id: i4, teks: "Kalau ya, besaran itu adalah besaran turunan" }
    penjelasan: "Pola ini berlaku untuk besaran turunan apa pun -- kuncinya cari tahu apakah besaran itu bisa dinyatakan sebagai kombinasi besaran pokok."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan besaran berikut sebagai Besaran Pokok atau Besaran Turunan."
    kategori:
      - { id: pokok, label: "Besaran Pokok" }
      - { id: turunan, label: "Besaran Turunan" }
    item:
      - { id: t1, teks: "Panjang", kategoriBenarId: pokok }
      - { id: t2, teks: "Massa", kategoriBenarId: pokok }
      - { id: t3, teks: "Waktu", kategoriBenarId: pokok }
      - { id: t4, teks: "Luas", kategoriBenarId: turunan }
      - { id: t5, teks: "Kecepatan", kategoriBenarId: turunan }
      - { id: t6, teks: "Gaya", kategoriBenarId: turunan }
    penjelasan: "Panjang, massa, waktu adalah besaran dasar. Luas, kecepatan, gaya dibentuk dari kombinasi besaran pokok."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan besaran berikut berdasarkan jenis satuannya."
    kategori:
      - { id: khusus, label: "Punya Nama Satuan Khusus" }
      - { id: gabungan, label: "Satuan Gabungan Langsung" }
    item:
      - { id: t1, teks: "Gaya (newton)", kategoriBenarId: khusus }
      - { id: t2, teks: "Tekanan (pascal)", kategoriBenarId: khusus }
      - { id: t3, teks: "Kecepatan (m/s)", kategoriBenarId: gabungan }
      - { id: t4, teks: "Massa jenis (kg/m³)", kategoriBenarId: gabungan }
    penjelasan: "Newton dan pascal adalah nama satuan khusus (walau bisa diuraikan ke satuan dasar). Kecepatan dan massa jenis satuannya langsung berupa gabungan satuan dasar."
    skor: 1
draft: false
---
