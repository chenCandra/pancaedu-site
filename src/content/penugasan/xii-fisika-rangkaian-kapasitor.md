---
judul: "Rangkaian Kapasitor: Seri dan Paralel"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar kapasitansi total rangkaian kapasitor seri dan paralel."
materiSlug: rangkaian-kapasitor
pinHash: 227ab13ff89045896774aa9ffb1ff5f248e302b0e4daaa8f0a296a11c5600d19
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus kapasitansi total untuk DUA kapasitor yang dirangkai PARALEL adalah..."
    pilihan:
      - { id: a, teks: "C_total = C1 + C2" }
      - { id: b, teks: "1/C_total = 1/C1 + 1/C2" }
      - { id: c, teks: "C_total = C1 × C2" }
      - { id: d, teks: "C_total = C1 − C2" }
    jawabanBenarId: a
    penjelasan: "Paralel: C_total = C1 + C2, dijumlahkan langsung."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus kapasitansi total untuk DUA kapasitor yang dirangkai SERI adalah..."
    pilihan:
      - { id: a, teks: "C_total = C1 + C2" }
      - { id: b, teks: "1/C_total = 1/C1 + 1/C2" }
      - { id: c, teks: "C_total = C1 × C2" }
      - { id: d, teks: "C_total = C1 − C2" }
    jawabanBenarId: b
    penjelasan: "Seri: 1/C_total = 1/C1 + 1/C2, pakai resiprokal (kebalikan)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Dua kapasitor 2 μF dan 3 μF dirangkai PARALEL. Berapa kapasitansi totalnya?"
    pilihan:
      - { id: a, teks: "5 μF" }
      - { id: b, teks: "1,2 μF" }
      - { id: c, teks: "6 μF" }
      - { id: d, teks: "0,5 μF" }
    jawabanBenarId: a
    penjelasan: "Paralel: C_total = C1 + C2 = 2 + 3 = 5 μF."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Pada rangkaian kapasitor SERI, besaran yang SAMA di setiap kapasitor adalah..."
    pilihan:
      - { id: a, teks: "Muatan (Q)" }
      - { id: b, teks: "Tegangan (V)" }
      - { id: c, teks: "Kapasitansi (C)" }
      - { id: d, teks: "Energi (W)" }
    jawabanBenarId: a
    penjelasan: "Pada rangkaian seri, muatan (Q) yang tersimpan di setiap kapasitor SAMA besar."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Kapasitansi total rangkaian kapasitor SERI selalu lebih kecil daripada kapasitor terkecil dalam rangkaian itu."
    jawabanBenar: true
    penjelasan: "Benar -- 1/C_total = 1/C1 + 1/C2 selalu menghasilkan C_total yang lebih kecil dari C1 maupun C2."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Pada rangkaian kapasitor PARALEL, tegangan (V) di setiap kapasitor sama besar dengan tegangan sumbernya."
    jawabanBenar: true
    penjelasan: "Benar -- tiap kapasitor paralel terhubung ke dua titik yang sama, jadi tegangannya sama dengan tegangan sumber."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Pola rangkaian kapasitor sama persis dengan pola rangkaian resistor -- kapasitor seri juga membuat nilai totalnya bertambah besar."
    jawabanBenar: false
    penjelasan: "Salah -- justru kebalikannya. Resistor seri dijumlah langsung (membesar), sedangkan kapasitor seri pakai resiprokal (mengecil)."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Dua kapasitor 4 μF dan 4 μF (identik) dirangkai SERI. Berapa kapasitansi totalnya, dalam μF?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["2"]
    penjelasan: "1/C_total = 1/4 + 1/4 = 2/4, jadi C_total = 4/2 = 2 μF."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Dua kapasitor 4 μF dan 4 μF (identik) dirangkai PARALEL. Berapa kapasitansi totalnya, dalam μF?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["8"]
    penjelasan: "C_total = C1 + C2 = 4 + 4 = 8 μF."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Dua kapasitor, 3 μF dan 6 μF, dirangkai seri lalu dihubungkan ke tegangan 9 V. Berapa muatan (Q) yang tersimpan di MASING-MASING kapasitor, dalam μC? (ingat: pada rangkaian seri, Q sama di keduanya)"
    angka: true
    toleransi: 1
    jawabanBenar: ["18"]
    penjelasan: "C_total = (3×6)/(3+6) = 2 μF. Q = C_total×V = 2×9 = 18 μC -- sama di kedua kapasitor karena rangkaian seri."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan mode rangkaian kapasitor dengan besaran yang SAMA di setiap kapasitornya."
    pasangan:
      - { id: p1, kiri: "Rangkaian Paralel", kanan: "Tegangan (V) sama" }
      - { id: p2, kiri: "Rangkaian Seri", kanan: "Muatan (Q) sama" }
    penjelasan: "Paralel -> tegangan sama di tiap kapasitor. Seri -> muatan sama di tiap kapasitor."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan mode rangkaian kapasitor dengan cara menghitung kapasitansi totalnya."
    pasangan:
      - { id: p1, kiri: "Paralel", kanan: "Dijumlahkan langsung (C1+C2)" }
      - { id: p2, kiri: "Seri", kanan: "Resiprokal (1/C1+1/C2)" }
    penjelasan: "Paralel dijumlah langsung (membesar), seri pakai resiprokal (mengecil) -- kebalikan dari pola resistor."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung tegangan pada MASING-MASING kapasitor dalam rangkaian SERI, dari yang paling awal."
    item:
      - { id: i1, teks: "Hitung kapasitansi total (C_total) rangkaian seri" }
      - { id: i2, teks: "Hitung muatan total dengan Q = C_total × V_sumber" }
      - { id: i3, teks: "Muatan (Q) ini sama untuk setiap kapasitor dalam rangkaian" }
      - { id: i4, teks: "Hitung tegangan tiap kapasitor dengan V = Q/C masing-masing" }
    penjelasan: "Kapasitansi total dulu, baru muatan total, baru pakai sifat 'Q sama di rangkaian seri' untuk mencari tegangan tiap kapasitor."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sesuai jenis rangkaian kapasitor yang dimaksud."
    kategori:
      - { id: paralel, label: "Rangkaian Paralel" }
      - { id: seri, label: "Rangkaian Seri" }
    item:
      - { id: t1, teks: "Kapasitansi total selalu lebih besar dari kapasitor mana pun di rangkaian itu", kategoriBenarId: paralel }
      - { id: t2, teks: "Kapasitansi total selalu lebih kecil dari kapasitor mana pun di rangkaian itu", kategoriBenarId: seri }
      - { id: t3, teks: "Tegangan sama di setiap kapasitor", kategoriBenarId: paralel }
      - { id: t4, teks: "Muatan sama di setiap kapasitor", kategoriBenarId: seri }
    penjelasan: "Paralel: C_total membesar, V sama di tiap kapasitor. Seri: C_total mengecil, Q sama di tiap kapasitor."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan rumus berikut sesuai mode rangkaian kapasitor yang tepat."
    kategori:
      - { id: paralel, label: "Rumus Paralel" }
      - { id: seri, label: "Rumus Seri" }
    item:
      - { id: t1, teks: "C_total = C1 + C2", kategoriBenarId: paralel }
      - { id: t2, teks: "1/C_total = 1/C1 + 1/C2", kategoriBenarId: seri }
      - { id: t3, teks: "V1 = V2 = V_sumber", kategoriBenarId: paralel }
      - { id: t4, teks: "Q1 = Q2 = Q_total", kategoriBenarId: seri }
    penjelasan: "Paralel pakai penjumlahan langsung dan tegangan yang sama; seri pakai resiprokal dan muatan yang sama."
    skor: 1
draft: false
---
