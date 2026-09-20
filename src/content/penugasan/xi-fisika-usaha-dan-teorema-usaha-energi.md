---
judul: "Usaha dan Teorema Usaha-Energi"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar usaha, energi kinetik, dan Teorema Usaha-Energi."
materiSlug: usaha-dan-teorema-usaha-energi
pinHash: 0c13a79609457932b9c092b785b40824a372608253db6d90076c873101b21c60
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus usaha adalah..."
    pilihan:
      - { id: a, teks: "W = F cosθ × s" }
      - { id: b, teks: "W = F × t" }
      - { id: c, teks: "W = m × v" }
      - { id: d, teks: "W = F / s" }
    jawabanBenarId: a
    penjelasan: "W = F cosθ × s -- hanya komponen gaya searah perpindahan yang menghasilkan usaha."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Teorema Usaha-Energi menyatakan bahwa..."
    pilihan:
      - { id: a, teks: "W_total = ΔEk" }
      - { id: b, teks: "W_total = ΔEp" }
      - { id: c, teks: "W_total selalu nol" }
      - { id: d, teks: "W_total = massa benda" }
    jawabanBenarId: a
    penjelasan: "Usaha total sama dengan perubahan energi kinetik (W_total = ΔEk)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Rumus energi kinetik adalah..."
    pilihan:
      - { id: a, teks: "Ek = ½mv²" }
      - { id: b, teks: "Ek = mgh" }
      - { id: c, teks: "Ek = mv" }
      - { id: d, teks: "Ek = ½kx²" }
    jawabanBenarId: a
    penjelasan: "Ek = ½mv², energi kinetik berbanding lurus dengan kuadrat kecepatan."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Gaya 60 N mendorong benda 5 m searah gaya. Berapa usahanya?"
    pilihan:
      - { id: a, teks: "300 J" }
      - { id: b, teks: "65 J" }
      - { id: c, teks: "55 J" }
      - { id: d, teks: "12 J" }
    jawabanBenarId: a
    penjelasan: "W = F cosθ × s = 60×1×5 = 300 J."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Gaya yang tegak lurus terhadap arah gerak benda tidak melakukan usaha sama sekali."
    jawabanBenar: true
    penjelasan: "Benar -- karena cos90°=0, W=F cos90°×s=0."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Kalau kecepatan suatu benda menjadi 2 kali lipat, energi kinetiknya juga menjadi 2 kali lipat."
    jawabanBenar: false
    penjelasan: "Salah -- Ek=½mv², kecepatan dikuadratkan, jadi 2 kali lipat kecepatan menghasilkan 4 kali lipat energi kinetik."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Usaha tidak pernah bisa bernilai negatif."
    jawabanBenar: false
    penjelasan: "Salah -- usaha bisa negatif kalau gaya berlawanan arah gerak (misalnya gesekan), yang mengurangi energi kinetik."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Benda 4 kg bergerak dengan kecepatan 5 m/s. Berapa energi kinetiknya, dalam Joule?"
    angka: true
    toleransi: 1
    jawabanBenar: ["50"]
    penjelasan: "Ek = ½mv² = ½×4×25 = 50 J."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Benda 2 kg mula-mula diam, lalu usaha total 16 J bekerja padanya. Berapa kecepatan akhirnya, dalam m/s?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["4"]
    penjelasan: "16=½×2×v² → v²=16 → v=4 m/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Benda 3 kg bergerak dengan kecepatan 4 m/s, lalu melambat jadi 2 m/s akibat gesekan. Berapa usaha yang dilakukan gesekan itu, dalam Joule? (jawab dengan tanda negatif kalau usahanya negatif)"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["-18"]
    penjelasan: "W=ΔEk=½×3×2²−½×3×4²=6−24=−18 J."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Usaha", kanan: "W = F cosθ × s" }
      - { id: p2, kiri: "Energi Kinetik", kanan: "Ek = ½mv²" }
    penjelasan: "Usaha dari gaya-perpindahan, energi kinetik dari massa-kecepatan kuadrat."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan tanda usaha dengan akibatnya terhadap energi kinetik."
    pasangan:
      - { id: p1, kiri: "Usaha Positif", kanan: "Energi kinetik bertambah" }
      - { id: p2, kiri: "Usaha Negatif", kanan: "Energi kinetik berkurang" }
    penjelasan: "W_total=ΔEk -- usaha positif menambah Ek, usaha negatif mengurangi Ek."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah mencari kecepatan akhir benda dari usaha total yang bekerja, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan energi kinetik awal benda (Ek awal = ½mv1²)" }
      - { id: i2, teks: "Hitung usaha total yang bekerja pada benda" }
      - { id: i3, teks: "Gunakan W_total = ΔEk untuk mencari energi kinetik akhir" }
      - { id: i4, teks: "Hitung kecepatan akhir dari Ek akhir (v2=√(2×Ek akhir/m))" }
    penjelasan: "Ek awal dulu, usaha total, lalu Ek akhir lewat teorema usaha-energi, baru kecepatan akhir."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan situasi berikut sesuai tanda usahanya."
    kategori:
      - { id: positif, label: "Usaha Positif" }
      - { id: negatif, label: "Usaha Negatif" }
      - { id: nol, label: "Usaha Nol" }
    item:
      - { id: t1, teks: "Gaya dorong searah gerak benda", kategoriBenarId: positif }
      - { id: t2, teks: "Gaya gesek yang melawan arah gerak", kategoriBenarId: negatif }
      - { id: t3, teks: "Gaya normal pada benda yang bergerak horizontal", kategoriBenarId: nol }
    penjelasan: "Searah gerak = positif, berlawanan = negatif, tegak lurus = nol."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan besaran berikut sesuai satuannya."
    kategori:
      - { id: joule, label: "Joule (J)" }
      - { id: bukan, label: "Bukan Joule" }
    item:
      - { id: t1, teks: "Usaha (W)", kategoriBenarId: joule }
      - { id: t2, teks: "Energi Kinetik (Ek)", kategoriBenarId: joule }
      - { id: t3, teks: "Momentum (p)", kategoriBenarId: bukan }
    penjelasan: "Usaha dan energi kinetik sama-sama Joule, momentum satuannya kg·m/s (bukan Joule)."
    skor: 1
draft: false
---
