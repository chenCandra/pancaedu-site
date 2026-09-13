---
judul: "Aplikasi Induksi: Generator dan Transformator"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar cara kerja generator dan transformator, serta transmisi listrik jarak jauh."
materiSlug: generator-dan-transformator
pinHash: aa66d35e49d82bec8c2ab4cad51ba41cca9c7a9d92fae7c2453f8975233e0d5d
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Generator listrik bekerja dengan cara..."
    pilihan:
      - { id: a, teks: "Memutar kumparan di dalam medan magnet, menghasilkan GGL induksi terus-menerus" }
      - { id: b, teks: "Menyimpan listrik dalam sel kimia" }
      - { id: c, teks: "Menaikkan tegangan listrik AC" }
      - { id: d, teks: "Mengubah listrik AC menjadi DC" }
    jawabanBenarId: a
    penjelasan: "Generator memutar kumparan sehingga fluks yang menembusnya terus berubah, menghasilkan GGL induksi berkelanjutan."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sumber energi gerak yang memutar generator di PLTA berasal dari..."
    pilihan:
      - { id: a, teks: "Aliran/jatuhnya air yang memutar turbin" }
      - { id: b, teks: "Pembakaran bahan bakar fosil langsung" }
      - { id: c, teks: "Reaksi kimia baterai" }
      - { id: d, teks: "Cahaya matahari langsung" }
    jawabanBenarId: a
    penjelasan: "PLTA menggunakan energi gerak air yang memutar turbin, yang kemudian memutar generator."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Transformator (trafo) berfungsi untuk..."
    pilihan:
      - { id: a, teks: "Menaikkan atau menurunkan tegangan listrik AC" }
      - { id: b, teks: "Mengubah energi gerak jadi listrik" }
      - { id: c, teks: "Menyimpan energi listrik" }
      - { id: d, teks: "Mengubah AC menjadi DC" }
    jawabanBenarId: a
    penjelasan: "Transformator mengubah tegangan listrik AC lewat prinsip induksi antara dua kumparan."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Trafo step-up dipakai di gardu listrik SEBELUM transmisi jarak jauh, tujuannya untuk..."
    pilihan:
      - { id: a, teks: "Menaikkan tegangan supaya arus lebih kecil, mengurangi kerugian energi panas di kabel" }
      - { id: b, teks: "Menurunkan tegangan supaya lebih aman" }
      - { id: c, teks: "Mengubah AC jadi DC untuk transmisi" }
      - { id: d, teks: "Menyimpan listrik sementara" }
    jawabanBenarId: a
    penjelasan: "Menaikkan tegangan membuat arus lebih kecil untuk daya yang sama -- mengurangi kerugian energi panas (P=I²R) di kabel."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Transformator bisa bekerja dengan sumber listrik AC maupun DC."
    jawabanBenar: false
    penjelasan: "Salah -- transformator hanya bekerja dengan AC, karena butuh fluks yang terus berubah untuk menginduksi kumparan sekunder."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Trafo step-up punya jumlah lilitan sekunder LEBIH BANYAK dari lilitan primer."
    jawabanBenar: true
    penjelasan: "Benar -- trafo step-up menaikkan tegangan, sesuai Vp/Vs=Np/Ns, lilitan sekunder lebih banyak untuk tegangan sekunder lebih besar."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Yang terhubung langsung ke generator selalu berupa gerak putar, apa pun sumber energi awalnya (air, uap, angin)."
    jawabanBenar: true
    penjelasan: "Benar -- baik PLTA, PLTU, maupun PLTB, semuanya menghasilkan gerak putar yang memutar generator."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Alat yang mengubah energi gerak menjadi energi listrik disebut apa? (satu kata)"
    angka: false
    toleransi: 0
    jawabanBenar: ["Generator"]
    penjelasan: "Generator mengubah energi gerak (mekanik) menjadi energi listrik lewat induksi elektromagnetik."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Jenis trafo yang MENURUNKAN tegangan disebut trafo apa? (2 kata)"
    angka: false
    toleransi: 0
    jawabanBenar: ["Step-Down", "Step Down"]
    penjelasan: "Trafo step-down menurunkan tegangan, dengan lilitan sekunder lebih sedikit dari primer."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Rumus perbandingan tegangan primer-sekunder trafo (Vp, Vs, Np, Ns) adalah Vp/Vs = ...?"
    angka: false
    toleransi: 0
    jawabanBenar: ["Np/Ns"]
    penjelasan: "Vp/Vs = Np/Ns -- perbandingan tegangan sebanding dengan perbandingan jumlah lilitan."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan pembangkit listrik dengan sumber energi gerak yang memutar generatornya."
    pasangan:
      - { id: p1, kiri: "PLTA", kanan: "Aliran/jatuhnya air" }
      - { id: p2, kiri: "PLTU", kanan: "Uap panas dari pembakaran" }
      - { id: p3, kiri: "PLTB", kanan: "Angin yang memutar bilah turbin" }
    penjelasan: "Semua pembangkit ini menghasilkan gerak putar yang memutar generator, meski sumber energi awalnya berbeda."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan jenis trafo dengan ciri lilitannya."
    pasangan:
      - { id: p1, kiri: "Step-Up", kanan: "Lilitan sekunder lebih banyak dari primer" }
      - { id: p2, kiri: "Step-Down", kanan: "Lilitan sekunder lebih sedikit dari primer" }
    penjelasan: "Jumlah lilitan menentukan apakah trafo menaikkan atau menurunkan tegangan."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun perjalanan listrik dari pembangkit sampai ke rumah, dari yang paling awal."
    item:
      - { id: i1, teks: "Generator menghasilkan listrik tegangan menengah" }
      - { id: i2, teks: "Trafo step-up menaikkan tegangan untuk transmisi jarak jauh" }
      - { id: i3, teks: "Listrik tegangan tinggi dialirkan lewat kabel transmisi jarak jauh" }
      - { id: i4, teks: "Trafo step-down menurunkan tegangan mendekati level aman untuk rumah" }
    penjelasan: "Ini adalah perjalanan listrik dari pembangkit sampai ke rumah, memanfaatkan trafo step-up dan step-down secara bergantian."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan alat berikut sebagai Generator (gerak ke listrik) atau Transformator (ubah tegangan)."
    kategori:
      - { id: gen, label: "Generator" }
      - { id: trafo, label: "Transformator" }
    item:
      - { id: t1, teks: "Turbin PLTA yang memutar kumparan", kategoriBenarId: gen }
      - { id: t2, teks: "Gardu listrik yang menaikkan tegangan", kategoriBenarId: trafo }
      - { id: t3, teks: "Dinamo sepeda", kategoriBenarId: gen }
      - { id: t4, teks: "Charger HP yang menurunkan tegangan", kategoriBenarId: trafo }
    penjelasan: "Generator mengubah gerak jadi listrik, transformator mengubah level tegangan listrik AC."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah tentang transmisi listrik."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Tegangan tinggi mengurangi kerugian energi di kabel transmisi", kategoriBenarId: benar }
      - { id: t2, teks: "Arus yang lebih besar mengurangi kerugian panas di kabel", kategoriBenarId: salah }
      - { id: t3, teks: "Trafo step-down dipakai mendekati kota sebelum listrik sampai ke rumah", kategoriBenarId: benar }
      - { id: t4, teks: "Rumah tangga menerima listrik dengan tegangan ratusan ribu volt", kategoriBenarId: salah }
    penjelasan: "Tegangan tinggi (arus kecil) mengurangi kerugian panas (P=I²R), bukan sebaliknya -- dan rumah tangga menerima listrik tegangan rendah (220V) setelah diturunkan trafo step-down."
    skor: 1
draft: false
---
