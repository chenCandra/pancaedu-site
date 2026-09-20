---
judul: "Gerak Parabola"
kelas: X
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar gerak parabola sebagai gabungan GLB dan GLBB, tinggi maksimum, waktu di udara, dan jangkauan."
materiSlug: gerak-parabola
pinHash: 27186643c08f5f383844e98298ae4fe5bec78889d2c957e9b6175de9b886ce53
pinBerlakuHingga: 2027-03-11
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Gerak parabola adalah gabungan dari dua jenis gerak, yaitu..."
    pilihan:
      - { id: a, teks: "GLB horizontal dan GLBB vertikal" }
      - { id: b, teks: "GLBB horizontal dan GLB vertikal" }
      - { id: c, teks: "GLB pada kedua sumbu" }
      - { id: d, teks: "GLBB pada kedua sumbu" }
    jawabanBenarId: a
    penjelasan: "Gerak horizontal berkecepatan konstan (GLB) karena tidak ada gaya horizontal, sedangkan gerak vertikal dipengaruhi gravitasi (GLBB)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sepanjang lintasan gerak parabola (tanpa gesekan udara), komponen kecepatan horizontal (vx)..."
    pilihan:
      - { id: a, teks: "Terus bertambah" }
      - { id: b, teks: "Terus berkurang" }
      - { id: c, teks: "Tetap konstan" }
      - { id: d, teks: "Berubah jadi nol di titik tertinggi" }
    jawabanBenarId: c
    penjelasan: "Karena tidak ada gaya pada sumbu horizontal, vx tetap konstan sepanjang lintasan."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Pada titik tertinggi lintasan gerak parabola, komponen kecepatan vertikal (vy) besarnya..."
    pilihan:
      - { id: a, teks: "Sama dengan v0y" }
      - { id: b, teks: "Nol" }
      - { id: c, teks: "Maksimum" }
      - { id: d, teks: "Negatif" }
    jawabanBenarId: b
    penjelasan: "Di titik tertinggi, benda sesaat berhenti naik sebelum mulai turun -- vy = 0 tepat di titik itu."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Sudut elevasi yang menghasilkan jangkauan (R) paling jauh untuk kecepatan awal yang sama adalah..."
    pilihan:
      - { id: a, teks: "30°" }
      - { id: b, teks: "45°" }
      - { id: c, teks: "60°" }
      - { id: d, teks: "90°" }
    jawabanBenarId: b
    penjelasan: "Jangkauan maksimum tercapai saat sin(2θ) = 1, yaitu ketika 2θ = 90°, sehingga θ = 45°."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Gerak horizontal dan gerak vertikal pada gerak parabola saling memengaruhi satu sama lain."
    jawabanBenar: false
    penjelasan: "Salah -- kedua gerak itu independen (saling bebas). Gravitasi hanya bekerja pada sumbu vertikal."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Sudut θ dan (90°-θ) selalu memberi jangkauan yang sama untuk kecepatan awal yang sama."
    jawabanBenar: true
    penjelasan: "Benar -- karena sin(2θ) = sin(2(90°-θ)), mis. sin(2×30°)=sin(60°)=sin(120°)=sin(2×60°)."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Waktu yang dibutuhkan benda untuk naik ke titik tertinggi sama dengan waktu untuk turun kembali ke tanah (lintasan simetris)."
    jawabanBenar: true
    penjelasan: "Benar -- karena lintasan simetris, t naik = t turun, sehingga t total = 2 × t naik."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah bola ditendang dengan komponen kecepatan awal vy0 = 10 m/s (g = 10 m/s²). Berapa waktu (t naik) untuk mencapai titik tertinggi, dalam sekon?"
    angka: true
    toleransi: 0
    jawabanBenar: ["1"]
    penjelasan: "t naik = v0y/g = 10/10 = 1 s."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah bola ditendang dengan komponen kecepatan awal vy0 = 10 m/s (g = 10 m/s²). Berapa tinggi maksimumnya, dalam meter?"
    angka: true
    toleransi: 0
    jawabanBenar: ["5"]
    penjelasan: "h maks = v0y²/(2g) = 10²/(2×10) = 100/20 = 5 m."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Sebuah peluru ditembakkan dengan vx0 = 15 m/s dan vy0 = 20 m/s (g = 10 m/s²). Berapa jangkauannya (R), dalam meter? (t total = 2×vy0/g)"
    angka: true
    toleransi: 0
    jawabanBenar: ["60"]
    penjelasan: "t total = 2×20/10 = 4 s. R = vx0 × t total = 15 × 4 = 60 m."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Waktu Naik", kanan: "v0y / g" }
      - { id: p2, kiri: "Tinggi Maksimum", kanan: "v0y² / (2g)" }
      - { id: p3, kiri: "Waktu Total di Udara", kanan: "2 × v0y / g" }
      - { id: p4, kiri: "Jangkauan", kanan: "v0x × t total" }
    penjelasan: "Empat rumus kunci untuk menganalisis gerak parabola."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan sumbu gerak dengan jenis geraknya pada gerak parabola."
    pasangan:
      - { id: p1, kiri: "Sumbu Horizontal (x)", kanan: "GLB (kecepatan konstan)" }
      - { id: p2, kiri: "Sumbu Vertikal (y)", kanan: "GLBB (dipengaruhi gravitasi)" }
    penjelasan: "Gerak parabola adalah gabungan GLB pada sumbu x dan GLBB pada sumbu y, berjalan bersamaan tapi saling bebas."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menganalisis gerak parabola, dari yang paling awal."
    item:
      - { id: i1, teks: "Uraikan kecepatan awal jadi v0x = v0cos θ dan v0y = v0sin θ" }
      - { id: i2, teks: "Hitung waktu mencapai titik tertinggi (t naik = v0y/g)" }
      - { id: i3, teks: "Hitung tinggi maksimum (h maks = v0y²/2g)" }
      - { id: i4, teks: "Hitung waktu total di udara (t total = 2 × t naik)" }
      - { id: i5, teks: "Hitung jangkauan (R = v0x × t total)" }
    penjelasan: "Urutan ini memastikan setiap besaran dihitung berdasarkan besaran yang sudah didapat sebelumnya."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sesuai sumbu gerak yang relevan."
    kategori:
      - { id: horizontal, label: "Sumbu Horizontal (x)" }
      - { id: vertikal, label: "Sumbu Vertikal (y)" }
    item:
      - { id: t1, teks: "Kecepatan tetap konstan (GLB)", kategoriBenarId: horizontal }
      - { id: t2, teks: "Tidak ada gaya yang bekerja", kategoriBenarId: horizontal }
      - { id: t3, teks: "Dipengaruhi gravitasi (GLBB)", kategoriBenarId: vertikal }
      - { id: t4, teks: "Kecepatan bernilai nol di titik tertinggi", kategoriBenarId: vertikal }
    penjelasan: "Sumbu horizontal berkecepatan konstan tanpa gaya, sedangkan sumbu vertikal dipengaruhi gravitasi dan kecepatannya berubah."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "vx tetap konstan sepanjang lintasan gerak parabola", kategoriBenarId: benar }
      - { id: t2, teks: "Sudut 45° menghasilkan jangkauan paling jauh", kategoriBenarId: benar }
      - { id: t3, teks: "Sudut elevasi 80° menghasilkan jangkauan lebih jauh dari 45°", kategoriBenarId: salah }
      - { id: t4, teks: "vy sama dengan v0y sepanjang seluruh lintasan", kategoriBenarId: salah }
    penjelasan: "Sudut 80° justru menghasilkan jangkauan lebih pendek dari 45° (karena benda lebih banyak naik daripada melaju), dan vy berubah terus akibat gravitasi, tidak tetap sama dengan v0y."
    skor: 1
draft: false
---
