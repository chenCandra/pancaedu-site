---
judul: "Resonansi dan Pelayangan Bunyi"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar resonansi pipa organa dan pelayangan bunyi."
materiSlug: resonansi-dan-pelayangan-bunyi
pinHash: a5748b4b8c3353a9443e95cc70f57577e003a7f9be9ce6de605f8fcefb6174f1
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Resonansi bunyi terjadi ketika..."
    pilihan:
      - { id: a, teks: "Frekuensi getaran sumber sama dengan frekuensi alami sistem lain" }
      - { id: b, teks: "Dua bunyi saling meniadakan sepenuhnya" }
      - { id: c, teks: "Bunyi dipantulkan sempurna oleh dinding" }
      - { id: d, teks: "Frekuensi bunyi berubah karena gerak sumbernya" }
    jawabanBenarId: a
    penjelasan: "Resonansi: penguatan getaran karena frekuensi sama dengan frekuensi alami sistem."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Pada pipa organa terbuka, hubungan panjang pipa (L) dan panjang gelombang nada dasar (λ) adalah..."
    pilihan:
      - { id: a, teks: "λ = 2L" }
      - { id: b, teks: "λ = 4L" }
      - { id: c, teks: "λ = L" }
      - { id: d, teks: "λ = L/2" }
    jawabanBenarId: a
    penjelasan: "Pipa terbuka: L=λ/2, sehingga λ=2L."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Pada pipa organa tertutup, hubungan panjang pipa (L) dan panjang gelombang nada dasar (λ) adalah..."
    pilihan:
      - { id: a, teks: "λ = 4L" }
      - { id: b, teks: "λ = 2L" }
      - { id: c, teks: "λ = L" }
      - { id: d, teks: "λ = L/4" }
    jawabanBenarId: a
    penjelasan: "Pipa tertutup: L=λ/4, sehingga λ=4L."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Rumus frekuensi pelayangan (fb) dari dua sumber bunyi berfrekuensi f1 dan f2 adalah..."
    pilihan:
      - { id: a, teks: "fb = |f1 − f2|" }
      - { id: b, teks: "fb = f1 + f2" }
      - { id: c, teks: "fb = f1 × f2" }
      - { id: d, teks: "fb = (f1+f2)/2" }
    jawabanBenarId: a
    penjelasan: "fb = |f1 − f2|."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Pipa organa terbuka dan tertutup dengan panjang yang sama menghasilkan nada dasar yang berbeda."
    jawabanBenar: true
    penjelasan: "Benar -- pola gelombang berdiri berbeda (λ=2L vs λ=4L), jadi f berbeda."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Pipa yang lebih panjang menghasilkan nada dasar yang lebih tinggi."
    jawabanBenar: false
    penjelasan: "Salah -- pipa lebih panjang berarti λ lebih besar, sehingga f=v/λ lebih kecil (nada lebih rendah)."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Resonansi hanya bermanfaat (misalnya pada alat musik) dan tidak pernah berbahaya."
    jawabanBenar: false
    penjelasan: "Salah -- resonansi bisa berbahaya, misalnya menyebabkan kerusakan struktur bangunan/jembatan bila frekuensi gaya luar sama dengan frekuensi alami struktur."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Pipa organa terbuka panjangnya 0,85 m, cepat rambat bunyi 340 m/s. Berapa frekuensi nada dasarnya, dalam Hz?"
    angka: true
    toleransi: 1
    jawabanBenar: ["200"]
    penjelasan: "λ=2×0,85=1,7 m. f=340/1,7=200 Hz."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Pipa organa tertutup panjangnya 1 m, cepat rambat bunyi 340 m/s. Berapa frekuensi nada dasarnya, dalam Hz?"
    angka: true
    toleransi: 1
    jawabanBenar: ["85"]
    penjelasan: "λ=4×1=4 m. f=340/4=85 Hz."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Dua garpu tala berfrekuensi 512 Hz dan 509 Hz dibunyikan bersamaan. Berapa frekuensi pelayangan yang terdengar, dalam Hz?"
    angka: true
    toleransi: 1
    jawabanBenar: ["3"]
    penjelasan: "fb=|512−509|=3 Hz."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan jenis pipa organa dengan hubungan panjang gelombang nada dasarnya."
    pasangan:
      - { id: p1, kiri: "Pipa organa terbuka", kanan: "λ = 2L" }
      - { id: p2, kiri: "Pipa organa tertutup", kanan: "λ = 4L" }
    penjelasan: "Terbuka: λ=2L. Tertutup: λ=4L."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan pernyataan dengan konsep fisika yang sesuai."
    pasangan:
      - { id: p1, kiri: "Penguatan getaran karena frekuensi sama dengan frekuensi alami sistem", kanan: "Resonansi" }
      - { id: p2, kiri: "Interferensi dua bunyi berfrekuensi hampir sama", kanan: "Pelayangan (beat)" }
    penjelasan: "Definisi resonansi dan pelayangan bunyi."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung frekuensi nada dasar pipa organa dari panjang pipa, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan jenis pipa (terbuka atau tertutup) dan panjangnya (L)" }
      - { id: i2, teks: "Hitung λ menggunakan λ=2L (terbuka) atau λ=4L (tertutup)" }
      - { id: i3, teks: "Tentukan cepat rambat bunyi (v)" }
      - { id: i4, teks: "Hitung frekuensi f = v/λ" }
    penjelasan: "Tentukan jenis pipa dan L, hitung λ, tentukan v, baru hitung f."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pipa organa berikut sesuai jenisnya berdasarkan rumus λ yang digunakan."
    kategori:
      - { id: terbuka, label: "Pipa Organa Terbuka (λ=2L)" }
      - { id: tertutup, label: "Pipa Organa Tertutup (λ=4L)" }
    item:
      - { id: t1, teks: "Suling bambu dengan kedua ujung terbuka", kategoriBenarId: terbuka }
      - { id: t2, teks: "Botol kaca dengan satu ujung tertutup ditiup dari atas", kategoriBenarId: tertutup }
      - { id: t3, teks: "Pipa organa gereja dengan kedua ujung terbuka", kategoriBenarId: terbuka }
    penjelasan: "Kedua ujung terbuka = pipa terbuka; satu ujung tertutup = pipa tertutup."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan contoh berikut sesuai fenomena fisika yang terjadi."
    kategori:
      - { id: resonansi, label: "Resonansi" }
      - { id: pelayangan, label: "Pelayangan Bunyi" }
    item:
      - { id: t1, teks: "Kotak gitar bergetar memperkuat bunyi senar", kategoriBenarId: resonansi }
      - { id: t2, teks: "Dua garpu tala berfrekuensi hampir sama menghasilkan bunyi 'menguat-melemah'", kategoriBenarId: pelayangan }
      - { id: t3, teks: "Jembatan runtuh karena angin bertiup pada frekuensi yang sama dengan frekuensi alami jembatan", kategoriBenarId: resonansi }
    penjelasan: "Resonansi: penguatan getaran karena kesamaan frekuensi. Pelayangan: interferensi dua frekuensi hampir sama."
    skor: 1
draft: false
---
