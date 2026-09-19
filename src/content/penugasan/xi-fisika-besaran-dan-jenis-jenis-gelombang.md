---
judul: "Besaran dan Jenis-jenis Gelombang"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar besaran gelombang dan klasifikasinya."
materiSlug: besaran-dan-jenis-jenis-gelombang
pinHash: 8eaedd6a98b0ee751ee883072e3e68618e1692b1d7805a64bfc92b088562006c
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus cepat rambat gelombang adalah..."
    pilihan:
      - { id: a, teks: "v = λ × f" }
      - { id: b, teks: "v = λ / f" }
      - { id: c, teks: "v = λ + f" }
      - { id: d, teks: "v = f / λ" }
    jawabanBenarId: a
    penjelasan: "v = λf."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Gelombang transversal adalah gelombang yang arah getarnya..."
    pilihan:
      - { id: a, teks: "Tegak lurus arah rambat" }
      - { id: b, teks: "Sejajar arah rambat" }
      - { id: c, teks: "Selalu diam" }
      - { id: d, teks: "Melingkar" }
    jawabanBenarId: a
    penjelasan: "Transversal: getar tegak lurus rambat."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Gelombang longitudinal adalah gelombang yang arah getarnya..."
    pilihan:
      - { id: a, teks: "Sejajar arah rambat" }
      - { id: b, teks: "Tegak lurus arah rambat" }
      - { id: c, teks: "Selalu diam" }
      - { id: d, teks: "Melingkar" }
    jawabanBenarId: a
    penjelasan: "Longitudinal: getar sejajar rambat."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Gelombang dengan λ=3 m dan f=6 Hz. Berapa cepat rambatnya?"
    pilihan:
      - { id: a, teks: "18 m/s" }
      - { id: b, teks: "9 m/s" }
      - { id: c, teks: "2 m/s" }
      - { id: d, teks: "0,5 m/s" }
    jawabanBenarId: a
    penjelasan: "v=3×6=18 m/s."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Gelombang bunyi adalah contoh gelombang longitudinal."
    jawabanBenar: true
    penjelasan: "Benar."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Gelombang elektromagnetik membutuhkan medium untuk merambat."
    jawabanBenar: false
    penjelasan: "Salah -- gelombang elektromagnetik bisa merambat lewat ruang hampa."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Gelombang memindahkan materi/partikel medium secara permanen ke tempat lain."
    jawabanBenar: false
    penjelasan: "Salah -- gelombang memindahkan energi dan pola getaran, bukan materinya."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Gelombang dengan v=15 m/s dan f=3 Hz. Berapa panjang gelombangnya, dalam meter?"
    angka: true
    toleransi: 0.2
    jawabanBenar: ["5"]
    penjelasan: "λ=v/f=15/3=5 m."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Gelombang dengan λ=0,8 m dan f=425 Hz. Berapa cepat rambatnya, dalam m/s?"
    angka: true
    toleransi: 5
    jawabanBenar: ["340"]
    penjelasan: "v=0,8×425=340 m/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Kalau frekuensi gelombang diperbesar 4 kali lipat (v tetap), panjang gelombangnya menjadi berapa kali lipat semula?"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["0.25", "0,25"]
    penjelasan: "λ=v/f, f 4x membuat λ menjadi 1/4 kali."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan jenis gelombang dengan contohnya."
    pasangan:
      - { id: p1, kiri: "Transversal", kanan: "Gelombang tali" }
      - { id: p2, kiri: "Longitudinal", kanan: "Gelombang bunyi" }
    penjelasan: "Tali transversal, bunyi longitudinal."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan jenis gelombang dengan kebutuhan mediumnya."
    pasangan:
      - { id: p1, kiri: "Gelombang Mekanik", kanan: "Butuh medium" }
      - { id: p2, kiri: "Gelombang Elektromagnetik", kanan: "Tidak butuh medium" }
    penjelasan: "Mekanik butuh medium, elektromagnetik tidak."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung panjang gelombang dari cepat rambat dan frekuensi, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan cepat rambat gelombang (v)" }
      - { id: i2, teks: "Tentukan frekuensi gelombang (f)" }
      - { id: i3, teks: "Hitung λ = v/f" }
    penjelasan: "v dan f dulu, baru dihitung λ."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan gelombang berikut sesuai jenisnya (arah getar)."
    kategori:
      - { id: transversal, label: "Transversal" }
      - { id: longitudinal, label: "Longitudinal" }
    item:
      - { id: t1, teks: "Gelombang cahaya", kategoriBenarId: transversal }
      - { id: t2, teks: "Gelombang tali", kategoriBenarId: transversal }
      - { id: t3, teks: "Gelombang bunyi", kategoriBenarId: longitudinal }
      - { id: t4, teks: "Gelombang pegas slinky ditekan-tarik", kategoriBenarId: longitudinal }
    penjelasan: "Cahaya dan tali transversal, bunyi dan slinky longitudinal."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan besaran gelombang sesuai definisinya."
    kategori:
      - { id: amplitudo, label: "Amplitudo" }
      - { id: panjang, label: "Panjang Gelombang" }
    item:
      - { id: t1, teks: "Simpangan maksimum dari titik setimbang", kategoriBenarId: amplitudo }
      - { id: t2, teks: "Jarak antar dua puncak berurutan", kategoriBenarId: panjang }
    penjelasan: "Amplitudo simpangan maksimum, panjang gelombang jarak antar titik identik."
    skor: 1
draft: false
---
