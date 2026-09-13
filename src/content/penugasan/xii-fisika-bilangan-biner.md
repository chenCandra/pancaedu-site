---
judul: "Bilangan Biner"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar sistem bilangan biner dan konversi biner-desimal."
materiSlug: bilangan-biner
pinHash: 977ac96feb207c54d3bb289817af282bb6b69a33589a3f27e13bbc521e8268c6
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Sistem bilangan biner memakai basis berapa?"
    pilihan:
      - { id: a, teks: "2 (cuma memakai digit 0 dan 1)" }
      - { id: b, teks: "10 (memakai digit 0-9)" }
      - { id: c, teks: "16 (memakai digit 0-9 dan A-F)" }
      - { id: d, teks: "8 (memakai digit 0-7)" }
    jawabanBenarId: a
    penjelasan: "Bilangan biner adalah sistem bilangan basis-2, cuma memakai dua digit: 0 dan 1."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Nilai desimal dari bilangan biner 101 adalah..."
    pilihan:
      - { id: a, teks: "5" }
      - { id: b, teks: "3" }
      - { id: c, teks: "10" }
      - { id: d, teks: "101" }
    jawabanBenarId: a
    penjelasan: "101 = (1×4) + (0×2) + (1×1) = 4 + 0 + 1 = 5."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Nilai desimal dari bilangan biner 1100 adalah..."
    pilihan:
      - { id: a, teks: "12" }
      - { id: b, teks: "4" }
      - { id: c, teks: "1100" }
      - { id: d, teks: "6" }
    jawabanBenarId: a
    penjelasan: "1100 = (1×8) + (1×4) + (0×2) + (0×1) = 8 + 4 + 0 + 0 = 12."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Satu digit biner (0 atau 1) disebut..."
    pilihan:
      - { id: a, teks: "Bit" }
      - { id: b, teks: "Byte" }
      - { id: c, teks: "Nibble" }
      - { id: d, teks: "Piksel" }
    jawabanBenarId: a
    penjelasan: "Bit (binary digit) adalah satu digit biner tunggal."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-5
    soal: "Delapan bit disebut satu..."
    pilihan:
      - { id: a, teks: "Byte" }
      - { id: b, teks: "Kilobit" }
      - { id: c, teks: "Piksel" }
      - { id: d, teks: "Desimal" }
    jawabanBenarId: a
    penjelasan: "Delapan bit disebut satu byte, satuan dasar penyimpanan data di komputer."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-6
    soal: "Kenapa sistem digital memakai bilangan biner (basis-2), bukan basis-10 seperti bilangan desimal biasa?"
    pilihan:
      - { id: a, teks: "Karena sinyal digital cuma punya 2 keadaan (HIGH/LOW), pas dengan 2 digit biner" }
      - { id: b, teks: "Karena basis-2 lebih mudah dihitung manusia" }
      - { id: c, teks: "Karena komputer tidak bisa menghitung bilangan desimal" }
      - { id: d, teks: "Karena basis-2 butuh lebih sedikit digit" }
    jawabanBenarId: a
    penjelasan: "Sinyal digital cuma mengenal 2 keadaan fisik, jadi representasi basis-2 (biner) paling pas dan alami untuk direalisasikan secara elektronik."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-7
    soal: "Bilangan desimal 12 diubah ke biner menjadi..."
    pilihan:
      - { id: a, teks: "1100" }
      - { id: b, teks: "1010" }
      - { id: c, teks: "1001" }
      - { id: d, teks: "1111" }
    jawabanBenarId: a
    penjelasan: "12 = 8 + 4 = (1×8)+(1×4)+(0×2)+(0×1) = 1100 dalam biner."
    skor: 1
  - tipe: benar-salah
    id: soal-8
    soal: "Bilangan biner 1010 dibaca sebagai 'seribu sepuluh', sama seperti membaca angka desimal biasa."
    jawabanBenar: false
    penjelasan: "Salah -- 1010 dalam biner sama dengan 10 dalam desimal, BUKAN 'seribu sepuluh'. Biner tidak dibaca seperti desimal."
    skor: 1
  - tipe: benar-salah
    id: soal-9
    soal: "Satu byte terdiri dari 8 bit."
    jawabanBenar: true
    penjelasan: "Benar -- 8 bit membentuk 1 byte, yang bisa merepresentasikan 256 nilai berbeda (0-255)."
    skor: 1
  - tipe: benar-salah
    id: soal-10
    soal: "Nilai tempat pada bilangan biner mengikuti pangkat 10, sama seperti bilangan desimal."
    jawabanBenar: false
    penjelasan: "Salah -- nilai tempat pada bilangan biner mengikuti PANGKAT 2 (1,2,4,8,16,...), bukan pangkat 10."
    skor: 1
  - tipe: isian-singkat
    id: soal-11
    soal: "Berapa nilai desimal dari bilangan biner 110?"
    angka: true
    toleransi: 0
    jawabanBenar: ["6"]
    penjelasan: "110 = (1×4) + (1×2) + (0×1) = 4 + 2 + 0 = 6."
    skor: 1
  - tipe: isian-singkat
    id: soal-12
    soal: "Ubah bilangan desimal 18 menjadi biner."
    angka: false
    toleransi: 0
    jawabanBenar: ["10010"]
    penjelasan: "18 = 16 + 2 = (1×16)+(0×8)+(0×4)+(1×2)+(0×1) = 10010 dalam biner."
    skor: 1
  - tipe: menjodohkan
    id: soal-13
    soal: "Jodohkan istilah dengan penjelasannya."
    pasangan:
      - { id: p1, kiri: "Bit", kanan: "Satu digit biner tunggal (0 atau 1)" }
      - { id: p2, kiri: "Byte", kanan: "Kumpulan 8 bit" }
      - { id: p3, kiri: "Basis-2", kanan: "Sistem bilangan yang dipakai bilangan biner" }
    penjelasan: "Bit adalah satuan terkecil, byte adalah kumpulan 8 bit, dan basis-2 adalah dasar sistem bilangan biner."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-14
    soal: "Susun langkah mengonversi bilangan desimal ke biner (metode pengurangan pangkat 2), dari yang paling awal."
    item:
      - { id: i1, teks: "Cari pangkat 2 terbesar yang nilainya masih kurang dari atau sama dengan bilangan desimal itu" }
      - { id: i2, teks: "Kurangi bilangan desimal itu dengan pangkat 2 tersebut, catat bit itu sebagai 1" }
      - { id: i3, teks: "Ulangi langkah yang sama untuk sisa hasil pengurangan, sampai sisanya nol" }
      - { id: i4, teks: "Posisi bit yang tidak terpakai (dilewati) diisi dengan 0" }
    penjelasan: "Metode pengurangan pangkat 2 terbesar adalah salah satu cara cepat mengonversi bilangan desimal ke biner."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan ciri berikut sebagai milik Bilangan Biner atau Bilangan Desimal."
    kategori:
      - { id: biner, label: "Bilangan Biner" }
      - { id: desimal, label: "Bilangan Desimal" }
    item:
      - { id: t1, teks: "Basis-2, cuma memakai digit 0 dan 1", kategoriBenarId: biner }
      - { id: t2, teks: "Basis-10, memakai digit 0-9", kategoriBenarId: desimal }
      - { id: t3, teks: "Nilai tempat mengikuti pangkat 2", kategoriBenarId: biner }
      - { id: t4, teks: "Nilai tempat mengikuti pangkat 10", kategoriBenarId: desimal }
    penjelasan: "Bilangan biner (basis-2) dan desimal (basis-10) sama-sama punya konsep nilai tempat, tapi mengikuti pangkat basisnya masing-masing."
    skor: 1
draft: false
---
