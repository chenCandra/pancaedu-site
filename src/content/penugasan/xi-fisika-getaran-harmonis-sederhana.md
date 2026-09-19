---
judul: "Getaran Harmonis Sederhana (Pegas dan Bandul)"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar getaran harmonis pegas dan bandul."
materiSlug: getaran-harmonis-sederhana
pinHash: 34dc6edbf203b93f82b86494dfd94d8b70f7bcba6bdfe26f5c65a41e6ca7ad3f
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus periode getaran pegas adalah..."
    pilihan:
      - { id: a, teks: "T = 2π√(m/k)" }
      - { id: b, teks: "T = 2π√(L/g)" }
      - { id: c, teks: "T = 2π√(k/m)" }
      - { id: d, teks: "T = m/k" }
    jawabanBenarId: a
    penjelasan: "T = 2π√(m/k)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus periode ayunan bandul adalah..."
    pilihan:
      - { id: a, teks: "T = 2π√(L/g)" }
      - { id: b, teks: "T = 2π√(m/k)" }
      - { id: c, teks: "T = 2π√(g/L)" }
      - { id: d, teks: "T = L/g" }
    jawabanBenarId: a
    penjelasan: "T = 2π√(L/g)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Hubungan periode dan frekuensi adalah..."
    pilihan:
      - { id: a, teks: "f = 1/T" }
      - { id: b, teks: "f = T" }
      - { id: c, teks: "f = 2T" }
      - { id: d, teks: "T = f" }
    jawabanBenarId: a
    penjelasan: "f = 1/T."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Pegas dengan massa 8 kg dan konstanta 32 N/m. Berapa periodenya?"
    pilihan:
      - { id: a, teks: "π s" }
      - { id: b, teks: "2π s" }
      - { id: c, teks: "4 s" }
      - { id: d, teks: "0,25 s" }
    jawabanBenarId: a
    penjelasan: "T=2π√(8/32)=2π√0,25=2π×0,5=π s."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Periode ayunan bandul tidak bergantung pada massa beban."
    jawabanBenar: true
    penjelasan: "Benar -- rumus T=2π√(L/g) tidak melibatkan massa."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Periode getaran pegas dan bandul menggunakan rumus yang sama persis."
    jawabanBenar: false
    penjelasan: "Salah -- pegas T=2π√(m/k), bandul T=2π√(L/g), berbeda."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Periode ayunan bandul berubah signifikan kalau simpangannya diperbesar (untuk simpangan kecil)."
    jawabanBenar: false
    penjelasan: "Salah -- periode tidak berubah untuk simpangan yang relatif kecil."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Bandul dengan panjang tali 4,9 m (g=9,8 m/s²). Berapa periode ayunannya, dalam sekon? (petunjuk: hasilnya bilangan bulat sederhana)"
    angka: true
    toleransi: 0.2
    jawabanBenar: ["4.44", "4,44"]
    penjelasan: "T=2π√(4,9/9,8)=2π√0,5=2π×0,707≈4,44 s."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Pegas melakukan 10 getaran dalam 5 sekon. Berapa frekuensinya, dalam Hz?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["2"]
    penjelasan: "T=5/10=0,5 s. f=1/T=2 Hz."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Kalau massa beban pegas diperbesar 9 kali lipat (k tetap), periode getarannya menjadi berapa kali lipat?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["3"]
    penjelasan: "T∝√m, massa 9x menghasilkan T=√9=3 kali lipat."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan jenis getaran dengan rumus periodenya."
    pasangan:
      - { id: p1, kiri: "Pegas", kanan: "T = 2π√(m/k)" }
      - { id: p2, kiri: "Bandul", kanan: "T = 2π√(L/g)" }
    penjelasan: "Dua rumus periode getaran yang berbeda."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan besaran dengan pengaruhnya terhadap periode bandul."
    pasangan:
      - { id: p1, kiri: "Panjang tali (L) diperbesar", kanan: "Periode bertambah" }
      - { id: p2, kiri: "Gravitasi (g) diperbesar", kanan: "Periode berkurang" }
    penjelasan: "T berbanding lurus akar L, berbanding terbalik akar g."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung frekuensi dari jumlah getaran dan waktu, dari yang paling awal."
    item:
      - { id: i1, teks: "Catat jumlah getaran dan waktu total" }
      - { id: i2, teks: "Hitung periode T = waktu/jumlah getaran" }
      - { id: i3, teks: "Hitung frekuensi f = 1/T" }
    penjelasan: "Data dulu, hitung T, baru f."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan besaran berikut sesuai jenis getarannya."
    kategori:
      - { id: pegas, label: "Memengaruhi Periode Pegas" }
      - { id: bandul, label: "Memengaruhi Periode Bandul" }
    item:
      - { id: t1, teks: "Massa beban (m)", kategoriBenarId: pegas }
      - { id: t2, teks: "Konstanta pegas (k)", kategoriBenarId: pegas }
      - { id: t3, teks: "Panjang tali (L)", kategoriBenarId: bandul }
    penjelasan: "Pegas dipengaruhi m dan k, bandul dipengaruhi L (dan g)."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sesuai kebenarannya."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Periode bandul tidak bergantung massa beban", kategoriBenarId: benar }
      - { id: t2, teks: "Periode pegas tidak bergantung massa beban", kategoriBenarId: salah }
      - { id: t3, teks: "Frekuensi adalah kebalikan dari periode", kategoriBenarId: benar }
    penjelasan: "Bandul independen massa (benar). Pegas justru bergantung massa (pernyataan kedua salah). f=1/T (benar)."
    skor: 1
draft: false
---
