---
judul: "Vektor"
kelas: X
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar pengertian vektor, komponen vektor, dan cara menjumlahkan vektor."
materiSlug: vektor
pinHash: 7f4797378f6ef8952a79e7b6149d47ce6f2fed8a5129a588f4c81b06a288abc9
pinBerlakuHingga: 2027-03-11
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Vektor adalah besaran yang punya..."
    pilihan:
      - { id: a, teks: "Cuma nilai saja" }
      - { id: b, teks: "Nilai (besar) dan arah" }
      - { id: c, teks: "Cuma arah saja, tanpa nilai" }
      - { id: d, teks: "Satuan khusus yang tidak dimiliki besaran lain" }
    jawabanBenarId: b
    penjelasan: "Vektor membawa dua informasi sekaligus: besar (magnitude) dan arah."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Manakah dari berikut yang termasuk besaran vektor?"
    pilihan:
      - { id: a, teks: "Massa" }
      - { id: b, teks: "Waktu" }
      - { id: c, teks: "Perpindahan" }
      - { id: d, teks: "Suhu" }
    jawabanBenarId: c
    penjelasan: "Perpindahan punya arah (mis. '5 m ke utara'), jadi termasuk besaran vektor. Massa, waktu, dan suhu cuma punya nilai -- besaran skalar."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Komponen vektor pada sumbu x dirumuskan sebagai..."
    pilihan:
      - { id: a, teks: "Rx = R sin θ" }
      - { id: b, teks: "Rx = R cos θ" }
      - { id: c, teks: "Rx = R tan θ" }
      - { id: d, teks: "Rx = R/θ" }
    jawabanBenarId: b
    penjelasan: "Rx = R cos θ, sedangkan komponen sumbu y adalah Ry = R sin θ."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Dua gaya bekerja pada benda: F1 = 3 N searah sumbu x dan F2 = 4 N searah sumbu y (tegak lurus F1). Besar resultannya adalah..."
    pilihan:
      - { id: a, teks: "7 N" }
      - { id: b, teks: "5 N" }
      - { id: c, teks: "1 N" }
      - { id: d, teks: "12 N" }
    jawabanBenarId: b
    penjelasan: "R = √(Rx²+Ry²) = √(3²+4²) = √25 = 5 N (segitiga 3-4-5), BUKAN 3+4=7 N."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Menjumlahkan dua vektor yang arahnya berbeda sama saja seperti menjumlahkan dua bilangan biasa."
    jawabanBenar: false
    penjelasan: "Salah -- kalau arahnya tidak sama, vektor harus dijumlahkan lewat metode grafis atau komponen, bukan dijumlahkan langsung seperti bilangan biasa."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Pada metode segitiga, pangkal vektor kedua disambung ke ujung vektor pertama (head-to-tail)."
    jawabanBenar: true
    penjelasan: "Benar -- inilah cara kerja metode segitiga (poligon) dalam menjumlahkan vektor secara grafis."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Kalau dua vektor yang besarnya sama justru berlawanan arah, resultannya nol."
    jawabanBenar: true
    penjelasan: "Benar -- komponen kedua vektor saling meniadakan karena arahnya berlawanan, sehingga resultannya nol."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah vektor gaya besarnya 10 N pada sudut 30° terhadap sumbu x. Berapa komponen sumbu y-nya (Fy = F sin θ), dalam N? (sin 30° = 0,5)"
    angka: true
    toleransi: 0
    jawabanBenar: ["5"]
    penjelasan: "Fy = F sin θ = 10 × sin 30° = 10 × 0,5 = 5 N."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Dua vektor A = 6 satuan (searah sumbu x) dan B = 8 satuan (searah sumbu y, tegak lurus A). Berapa besar resultannya, dalam satuan?"
    angka: true
    toleransi: 0
    jawabanBenar: ["10"]
    penjelasan: "R = √(6²+8²) = √(36+64) = √100 = 10 satuan."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Rumus untuk menghitung arah vektor resultan adalah θ = arctan(...). Isi bagian dalam kurung (dua huruf, dipisah garis miring, format: Ry/Rx)."
    angka: false
    toleransi: 0
    jawabanBenar: ["Ry/Rx"]
    penjelasan: "θ = arctan(Ry/Rx), dari komponen Ry dan Rx resultan yang sudah dijumlahkan."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan istilah dengan definisinya."
    pasangan:
      - { id: p1, kiri: "Vektor", kanan: "Besaran yang punya nilai dan arah" }
      - { id: p2, kiri: "Skalar", kanan: "Besaran yang cuma punya nilai" }
      - { id: p3, kiri: "Komponen Vektor", kanan: "Uraian vektor pada sumbu x dan y" }
      - { id: p4, kiri: "Resultan", kanan: "Hasil penjumlahan beberapa vektor" }
    penjelasan: "Empat konsep dasar pembuka materi Vektor."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan besaran dengan klasifikasinya (skalar/vektor)."
    pasangan:
      - { id: p1, kiri: "Massa", kanan: "Skalar" }
      - { id: p2, kiri: "Waktu", kanan: "Skalar" }
      - { id: p3, kiri: "Perpindahan", kanan: "Vektor" }
      - { id: p4, kiri: "Gaya", kanan: "Vektor" }
    penjelasan: "Besaran skalar cukup dinyatakan dengan nilai saja, besaran vektor perlu nilai DAN arah."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menjumlahkan dua vektor dengan metode analitis (komponen), dari yang paling awal."
    item:
      - { id: i1, teks: "Uraikan setiap vektor jadi komponen sumbu x dan y" }
      - { id: i2, teks: "Jumlahkan semua komponen sumbu x (Rx = ΣAx)" }
      - { id: i3, teks: "Jumlahkan semua komponen sumbu y (Ry = ΣAy)" }
      - { id: i4, teks: "Hitung besar resultan R = √(Rx²+Ry²)" }
      - { id: i5, teks: "Hitung arah resultan θ = arctan(Ry/Rx)" }
    penjelasan: "Lima langkah ini berlaku untuk menjumlahkan berapa pun banyaknya vektor sekaligus, tidak cuma dua."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan besaran berikut sebagai Skalar atau Vektor."
    kategori:
      - { id: skalar, label: "Skalar" }
      - { id: vektor, label: "Vektor" }
    item:
      - { id: t1, teks: "Massa", kategoriBenarId: skalar }
      - { id: t2, teks: "Suhu", kategoriBenarId: skalar }
      - { id: t3, teks: "Kecepatan", kategoriBenarId: vektor }
      - { id: t4, teks: "Perpindahan", kategoriBenarId: vektor }
    penjelasan: "Massa dan suhu cukup dinyatakan dengan nilai saja. Kecepatan dan perpindahan perlu nilai DAN arah."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Komponen vektor sumbu x dirumuskan Rx = R cos θ", kategoriBenarId: benar }
      - { id: t2, teks: "Metode jajaran genjang menyusun dua vektor dari titik pangkal yang sama", kategoriBenarId: benar }
      - { id: t3, teks: "Dua vektor tegak lurus 3 N dan 4 N resultannya 7 N", kategoriBenarId: salah }
      - { id: t4, teks: "Metode segitiga menyambung pangkal ke pangkal vektor kedua", kategoriBenarId: salah }
    penjelasan: "Dua vektor tegak lurus 3 N dan 4 N resultannya 5 N (bukan 7 N), dan metode segitiga menyambung pangkal vektor kedua ke UJUNG vektor pertama, bukan ke pangkalnya."
    skor: 1
draft: false
---
