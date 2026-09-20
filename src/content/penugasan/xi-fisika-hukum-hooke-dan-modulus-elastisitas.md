---
judul: "Hukum Hooke dan Modulus Elastisitas"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar Hukum Hooke, energi potensial elastis, dan modulus elastisitas."
materiSlug: hukum-hooke-dan-modulus-elastisitas
pinHash: abe68c3eba269c495ff5964cf17446167e0afbe7c8582c00a39603bf03ea8693
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus Hukum Hooke adalah..."
    pilihan:
      - { id: a, teks: "F = k × Δx" }
      - { id: b, teks: "F = k / Δx" }
      - { id: c, teks: "F = ½kΔx²" }
      - { id: d, teks: "F = m × Δx" }
    jawabanBenarId: a
    penjelasan: "F = kΔx, gaya berbanding lurus dengan pertambahan panjang."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus energi potensial elastis adalah..."
    pilihan:
      - { id: a, teks: "Ep = ½kΔx²" }
      - { id: b, teks: "Ep = kΔx" }
      - { id: c, teks: "Ep = ½mv²" }
      - { id: d, teks: "Ep = mgh" }
    jawabanBenarId: a
    penjelasan: "Ep = ½kΔx²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Pegas dengan k=180 N/m diregangkan 0,3 m. Berapa gayanya?"
    pilihan:
      - { id: a, teks: "54 N" }
      - { id: b, teks: "180 N" }
      - { id: c, teks: "0,6 N" }
      - { id: d, teks: "600 N" }
    jawabanBenarId: a
    penjelasan: "F = k×Δx = 180×0,3 = 54 N."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Modulus Young (E) suatu bahan didefinisikan sebagai..."
    pilihan:
      - { id: a, teks: "E = σ/e (tegangan dibagi regangan)" }
      - { id: b, teks: "E = σ × e" }
      - { id: c, teks: "E = F/Δx" }
      - { id: d, teks: "E = k × Δx" }
    jawabanBenarId: a
    penjelasan: "E = σ/e, tegangan dibagi regangan."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Melewati batas elastis membuat bahan mengalami deformasi permanen, tidak kembali 100% ke ukuran semula."
    jawabanBenar: true
    penjelasan: "Benar -- ciri khas melewati batas elastis."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Konstanta pegas (k) dan Modulus Young (E) adalah besaran yang sama persis."
    jawabanBenar: false
    penjelasan: "Salah -- k adalah sifat satu pegas tertentu (bergantung bentuk), E adalah sifat bahan (independen bentuk)."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Untuk gaya yang sama, pegas dengan Δx lebih besar berarti lebih kaku (k lebih besar)."
    jawabanBenar: false
    penjelasan: "Salah -- k=F/Δx, Δx lebih besar untuk F sama berarti k lebih KECIL (lebih lunak, bukan lebih kaku)."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Pegas dengan k=200 N/m diregangkan 0,05 m. Berapa gayanya, dalam Newton?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["10"]
    penjelasan: "F = 200×0,05 = 10 N."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Pegas dengan k=120 N/m diregangkan 0,1 m. Berapa energi potensial elastisnya, dalam Joule?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["0.6", "0,6"]
    penjelasan: "Ep=½×120×0,1²=½×120×0,01=0,6 J."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Kawat dengan luas penampang 4×10⁻⁶ m² ditarik gaya 80 N. Berapa tegangannya, dalam Pa? (jawab dalam notasi biasa, misal 20000000)"
    angka: true
    toleransi: 500000
    jawabanBenar: ["20000000"]
    penjelasan: "σ = F/A = 80/(4×10⁻⁶) = 2×10⁷ = 20.000.000 Pa."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Hukum Hooke", kanan: "F = kΔx" }
      - { id: p2, kiri: "Energi Potensial Elastis", kanan: "Ep = ½kΔx²" }
      - { id: p3, kiri: "Modulus Young", kanan: "E = σ/e" }
    penjelasan: "Tiga rumus dasar elastisitas dan hubungannya."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan istilah dengan definisinya."
    pasangan:
      - { id: p1, kiri: "Tegangan (σ)", kanan: "F/A" }
      - { id: p2, kiri: "Regangan (e)", kanan: "ΔL/L₀" }
    penjelasan: "Tegangan dari gaya-luas, regangan dari pertambahan panjang-panjang mula-mula."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung Modulus Young dari data gaya, luas, dan panjang, dari yang paling awal."
    item:
      - { id: i1, teks: "Hitung tegangan (σ = F/A)" }
      - { id: i2, teks: "Hitung regangan (e = ΔL/L₀)" }
      - { id: i3, teks: "Bagi tegangan dengan regangan (E = σ/e)" }
    penjelasan: "Tegangan dulu, regangan, baru dibagi untuk mendapat Modulus Young."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan besaran berikut sesuai apakah sifat BAHAN atau sifat PEGAS TERTENTU."
    kategori:
      - { id: bahan, label: "Sifat Bahan (Independen Bentuk)" }
      - { id: pegas, label: "Sifat Pegas Tertentu" }
    item:
      - { id: t1, teks: "Modulus Young (E)", kategoriBenarId: bahan }
      - { id: t2, teks: "Konstanta Pegas (k)", kategoriBenarId: pegas }
    penjelasan: "E sifat bahan (misal baja selalu sama), k bergantung bentuk pegas tertentu."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sesuai kebenarannya."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Ep berbanding lurus dengan kuadrat Δx", kategoriBenarId: benar }
      - { id: t2, teks: "Melewati batas elastis, bahan tetap kembali 100% ke bentuk semula", kategoriBenarId: salah }
      - { id: t3, teks: "Regangan (e) tidak memiliki satuan", kategoriBenarId: benar }
    penjelasan: "Ep=½kΔx² (kuadrat, benar). Melewati batas elastis menyebabkan deformasi permanen (pernyataan salah). Regangan e=ΔL/L₀ adalah rasio panjang, tidak bersatuan (benar)."
    skor: 1
draft: false
---
