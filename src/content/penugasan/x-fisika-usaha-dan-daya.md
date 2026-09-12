---
judul: "Usaha dan Daya"
kelas: X
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar rumus usaha (W = F.s.cos theta), teorema usaha-energi, dan daya (P = W/t)."
materiSlug: usaha-dan-daya
pinHash: cf1f6e4776a08d4e266040cc6bdd5d4d8fb76e28496f691bb5151344fa460279
pinBerlakuHingga: 2027-03-11
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus usaha (W) yang benar adalah..."
    pilihan:
      - { id: a, teks: "W = F × s × cos θ" }
      - { id: b, teks: "W = F × s × sin θ" }
      - { id: c, teks: "W = F / s" }
      - { id: d, teks: "W = m × a" }
    jawabanBenarId: a
    penjelasan: "Usaha dirumuskan W = F × s × cos θ, dengan F = gaya, s = perpindahan, dan θ = sudut antara gaya dan perpindahan."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah gaya 20 N mendorong benda sejauh 5 m searah gaya (θ = 0°). Berapa usaha yang dilakukan?"
    pilihan:
      - { id: a, teks: "4 J" }
      - { id: b, teks: "25 J" }
      - { id: c, teks: "100 J" }
      - { id: d, teks: "0 J" }
    jawabanBenarId: c
    penjelasan: "W = F × s × cos θ = 20 × 5 × cos 0° = 20 × 5 × 1 = 100 J."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Menurut teorema usaha-energi, usaha total yang dilakukan pada suatu benda sama dengan..."
    pilihan:
      - { id: a, teks: "Perubahan energi kinetik benda (ΔEₖ)" }
      - { id: b, teks: "Massa benda dikali percepatan" }
      - { id: c, teks: "Perubahan waktu tempuh benda" }
      - { id: d, teks: "Energi potensial benda saja" }
    jawabanBenarId: a
    penjelasan: "Teorema usaha-energi menyatakan W = ΔEₖ -- usaha total yang dilakukan pada benda sama dengan perubahan energi kinetiknya."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Daya (P) menyatakan..."
    pilihan:
      - { id: a, teks: "Besarnya gaya yang bekerja pada benda" }
      - { id: b, teks: "Kecepatan suatu usaha dilakukan, yaitu usaha per satuan waktu" }
      - { id: c, teks: "Jarak yang ditempuh benda" }
      - { id: d, teks: "Massa benda dikali gravitasi" }
    jawabanBenarId: b
    penjelasan: "Daya (P = W/t) menyatakan seberapa cepat usaha dilakukan -- usaha yang dilakukan per satuan waktu."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Kalau gaya tegak lurus (90°) terhadap arah perpindahan, usaha yang dilakukan adalah nol."
    jawabanBenar: true
    penjelasan: "Benar -- karena cos 90° = 0, maka W = F × s × cos 90° = 0."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Satuan SI untuk daya adalah joule."
    jawabanBenar: false
    penjelasan: "Salah -- satuan SI daya adalah watt (W), bukan joule. Joule adalah satuan usaha/energi."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Semakin lama waktu yang dibutuhkan untuk melakukan usaha yang sama, semakin besar dayanya."
    jawabanBenar: false
    penjelasan: "Salah -- justru semakin LAMA waktunya, semakin KECIL dayanya (P = W/t, t di penyebut)."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah gaya 20 N melakukan usaha sebesar 100 J dalam waktu 4 s. Berapa daya yang dihasilkan, dalam watt?"
    angka: true
    toleransi: 0
    jawabanBenar: ["25"]
    penjelasan: "P = W/t = 100/4 = 25 W."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah benda didorong gaya 30 N sejauh 8 m searah gaya. Berapa usaha yang dilakukan, dalam joule?"
    angka: true
    toleransi: 0
    jawabanBenar: ["240"]
    penjelasan: "W = F × s × cos 0° = 30 × 8 × 1 = 240 J."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Satuan SI untuk daya (nama lengkap satuan, satu kata)?"
    angka: false
    toleransi: 0
    jawabanBenar: ["Watt"]
    penjelasan: "Satuan SI daya adalah watt (W), diambil dari nama James Watt."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Usaha", kanan: "F × s × cos θ" }
      - { id: p2, kiri: "Daya", kanan: "W / t" }
      - { id: p3, kiri: "Teorema Usaha-Energi", kanan: "W = ΔEₖ" }
    penjelasan: "Tiga rumus kunci pada materi Usaha dan Daya."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan besaran dengan satuan SI-nya."
    pasangan:
      - { id: p1, kiri: "Usaha", kanan: "Joule" }
      - { id: p2, kiri: "Daya", kanan: "Watt" }
      - { id: p3, kiri: "Gaya", kanan: "Newton" }
      - { id: p4, kiri: "Waktu", kanan: "Sekon" }
    penjelasan: "Empat besaran yang saling berkaitan dalam menghitung usaha dan daya, beserta satuan SI masing-masing."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung daya dari sebuah peristiwa, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan gaya (F), perpindahan (s), dan sudut (θ)" }
      - { id: i2, teks: "Hitung usaha W = F × s × cos θ" }
      - { id: i3, teks: "Tentukan waktu (t) yang dibutuhkan" }
      - { id: i4, teks: "Hitung daya P = W / t" }
    penjelasan: "Menghitung daya perlu menghitung usaha lebih dulu, baru dibagi dengan waktu."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan besaran berikut sebagai berkaitan dengan Usaha atau Daya."
    kategori:
      - { id: usaha, label: "Usaha" }
      - { id: daya, label: "Daya" }
    item:
      - { id: t1, teks: "Satuannya joule", kategoriBenarId: usaha }
      - { id: t2, teks: "Rumusnya F × s × cos θ", kategoriBenarId: usaha }
      - { id: t3, teks: "Satuannya watt", kategoriBenarId: daya }
      - { id: t4, teks: "Menyatakan kecepatan melakukan usaha", kategoriBenarId: daya }
    penjelasan: "Usaha diukur dalam joule dengan rumus F.s.cos θ, sedangkan daya diukur dalam watt dan menyatakan seberapa cepat usaha dilakukan."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Usaha bergantung pada sudut antara gaya dan perpindahan", kategoriBenarId: benar }
      - { id: t2, teks: "Teorema usaha-energi menyatakan W = ΔEₚ", kategoriBenarId: salah }
      - { id: t3, teks: "Daya adalah usaha per satuan waktu", kategoriBenarId: benar }
      - { id: t4, teks: "Satuan daya adalah joule", kategoriBenarId: salah }
    penjelasan: "Teorema usaha-energi sebenarnya W = ΔEₖ (energi kinetik, bukan potensial), dan satuan daya adalah watt, bukan joule."
    skor: 1
draft: false
---
