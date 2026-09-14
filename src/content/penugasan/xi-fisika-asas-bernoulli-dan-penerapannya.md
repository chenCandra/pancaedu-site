---
judul: "Asas Bernoulli dan Penerapannya"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar Asas Bernoulli dan penerapannya pada gaya angkat pesawat dan alat sehari-hari."
materiSlug: asas-bernoulli-dan-penerapannya
pinHash: 8aa5ab500efda4ed52ec92b07f96b27e7b896fdfde61f34cf3fccc5590f702ae
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Persamaan Bernoulli untuk aliran mendatar (ketinggian sama) menyatakan bahwa..."
    pilihan:
      - { id: a, teks: "P + ½ρv² selalu tetap di sepanjang aliran" }
      - { id: b, teks: "P selalu tetap, tidak peduli kecepatan aliran" }
      - { id: c, teks: "v selalu tetap, tidak peduli tekanan" }
      - { id: d, teks: "Tidak ada hubungan antara P dan v" }
    jawabanBenarId: a
    penjelasan: "Untuk aliran mendatar, P + ½ρv² = konstan -- kalau v membesar, P harus mengecil, dan sebaliknya."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Di bagian pipa yang lebih SEMPIT (kecepatan aliran lebih besar), tekanannya menjadi..."
    pilihan:
      - { id: a, teks: "Lebih besar" }
      - { id: b, teks: "Lebih kecil" }
      - { id: c, teks: "Tetap sama" }
      - { id: d, teks: "Nol" }
    jawabanBenarId: b
    penjelasan: "Sesuai asas Bernoulli, di bagian yang alirannya lebih cepat, tekanannya justru lebih kecil."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sayap pesawat dirancang agar udara mengalir lebih cepat di sisi ATAS dibanding sisi BAWAH. Akibatnya..."
    pilihan:
      - { id: a, teks: "Tekanan di atas lebih besar, pesawat terdorong turun" }
      - { id: b, teks: "Tekanan di atas lebih kecil, pesawat terdorong naik (gaya angkat)" }
      - { id: c, teks: "Tidak ada pengaruh ke pesawat" }
      - { id: d, teks: "Pesawat akan terbalik" }
    jawabanBenarId: b
    penjelasan: "Aliran lebih cepat di atas sayap → tekanan di atas lebih rendah → selisih tekanan ini mendorong sayap ke atas, disebut gaya angkat (lift)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Air mengalir dengan kecepatan 1 m/s di pipa berdiameter 12 cm, lalu memasuki penyempitan berdiameter 6 cm (ρ air = 1.000 kg/m³). Berapa selisih tekanan (P1 − P2) antara bagian lebar dan bagian sempit?"
    pilihan:
      - { id: a, teks: "1.500 Pa" }
      - { id: b, teks: "7.500 Pa" }
      - { id: c, teks: "15.000 Pa" }
      - { id: d, teks: "500 Pa" }
    jawabanBenarId: b
    penjelasan: "v2 = v1×(12/6)² = 1×4 = 4 m/s. ΔP = ½ρ(v2²−v1²) = ½×1.000×(16−1) = 500×15 = 7.500 Pa."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Tekanan tinggi terjadi di tempat aliran fluidanya cepat."
    jawabanBenar: false
    penjelasan: "Salah -- justru terbalik. Tekanan RENDAH terjadi di tempat aliran fluidanya CEPAT."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Persamaan Bernoulli dalam bentuk lengkapnya (P + ½ρv² + ρgh = konstan) memperhitungkan suku ρgh untuk perbedaan ketinggian."
    jawabanBenar: true
    penjelasan: "Benar -- suku ρgh baru bisa diabaikan kalau ketinggiannya sama di semua titik (pipa mendatar)."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Venturimeter mengukur kecepatan aliran fluida dalam pipa dengan memanfaatkan selisih tekanan akibat penyempitan pipa."
    jawabanBenar: true
    penjelasan: "Benar -- venturimeter memanfaatkan asas Bernoulli dan Kontinuitas untuk mengukur kecepatan/debit aliran."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Alat yang mengukur kecepatan aliran fluida dalam pipa dengan memanfaatkan selisih tekanan akibat penyempitan pipa disebut...? (1 kata)"
    angka: false
    toleransi: 0
    jawabanBenar: ["Venturimeter"]
    penjelasan: "Disebut venturimeter."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Air mengalir 2 m/s di pipa berdiameter 10 cm, lalu menyempit ke diameter 5 cm (ρ air = 1.000 kg/m³). Berapa selisih tekanan P1−P2 (dalam Pa)?"
    angka: true
    toleransi: 0
    jawabanBenar: ["30000"]
    penjelasan: "v2 = 2×(10/5)² = 8 m/s. ΔP = ½×1.000×(8²−2²) = 500×60 = 30.000 Pa."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Air mengalir 1 m/s di pipa berdiameter 20 cm, lalu menyempit ke diameter 10 cm. Berapa kecepatan alirannya di bagian sempit (dalam m/s)?"
    angka: true
    toleransi: 0
    jawabanBenar: ["4"]
    penjelasan: "v2 = v1×(d1/d2)² = 1×(20/10)² = 1×4 = 4 m/s."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan penerapan Asas Bernoulli dengan mekanismenya."
    pasangan:
      - { id: p1, kiri: "Sayap pesawat", kanan: "Udara di atas mengalir lebih cepat, tekanan lebih rendah, menghasilkan gaya angkat" }
      - { id: p2, kiri: "Penyemprot parfum", kanan: "Aliran udara cepat menciptakan tekanan rendah yang menghisap cairan naik" }
      - { id: p3, kiri: "Karburator", kanan: "Aliran udara cepat lewat penyempitan menarik bahan bakar bercampur udara" }
    penjelasan: "Ketiganya memanfaatkan prinsip yang sama: aliran cepat menciptakan zona bertekanan rendah."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan persamaan dengan nama hukum/asasnya."
    pasangan:
      - { id: p1, kiri: "P + ½ρv² + ρgh = konstan", kanan: "Persamaan Bernoulli" }
      - { id: p2, kiri: "A1v1 = A2v2", kanan: "Asas Kontinuitas" }
      - { id: p3, kiri: "ΔP = ½ρ(v2² − v1²)", kanan: "Selisih tekanan Bernoulli pada pipa mendatar" }
    penjelasan: "Asas Kontinuitas menentukan kecepatan di tiap bagian pipa, sedangkan Bernoulli menghubungkan kecepatan itu dengan tekanannya."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung selisih tekanan antara dua bagian pipa mendatar yang berbeda diameter, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan diameter kedua bagian pipa (d1, d2) dan kecepatan awal (v1)" }
      - { id: i2, teks: "Hitung kecepatan di bagian lain (v2) memakai Asas Kontinuitas" }
      - { id: i3, teks: "Hitung selisih tekanan ΔP = ½ρ(v2² − v1²) memakai Asas Bernoulli" }
      - { id: i4, teks: "Simpulkan bagian mana yang tekanannya lebih rendah (bagian dengan v lebih besar)" }
    penjelasan: "Asas Kontinuitas dulu dipakai untuk mencari v2, baru Bernoulli dipakai untuk menghitung selisih tekanannya."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan alat/fenomena berikut sebagai penerapan Asas Bernoulli atau BUKAN (melainkan Pascal/Archimedes)."
    kategori:
      - { id: bernoulli, label: "Asas Bernoulli" }
      - { id: bukan, label: "Bukan Bernoulli" }
    item:
      - { id: t1, teks: "Gaya angkat sayap pesawat", kategoriBenarId: bernoulli }
      - { id: t2, teks: "Penyemprot parfum", kategoriBenarId: bernoulli }
      - { id: t3, teks: "Venturimeter", kategoriBenarId: bernoulli }
      - { id: t4, teks: "Dongkrak hidrolik", kategoriBenarId: bukan }
      - { id: t5, teks: "Kapal laut mengapung", kategoriBenarId: bukan }
    penjelasan: "Dongkrak hidrolik memanfaatkan Hukum Pascal, dan kapal mengapung memanfaatkan Hukum Archimedes -- bukan Asas Bernoulli."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Aliran cepat berarti tekanan rendah", kategoriBenarId: benar }
      - { id: t2, teks: "Sayap pesawat dirancang agar udara di BAWAH mengalir lebih cepat dari atas", kategoriBenarId: salah }
      - { id: t3, teks: "Persamaan Bernoulli berlaku untuk fluida ideal", kategoriBenarId: benar }
      - { id: t4, teks: "Tekanan selalu konstan di sepanjang pipa, berapa pun kecepatan alirannya", kategoriBenarId: salah }
    penjelasan: "Sayap pesawat justru dirancang agar udara di ATAS mengalir lebih cepat, bukan di bawah."
    skor: 1
draft: false
---
