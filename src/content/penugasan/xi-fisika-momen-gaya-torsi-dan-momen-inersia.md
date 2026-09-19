---
judul: "Momen Gaya (Torsi) dan Momen Inersia"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar momen gaya (torsi) dan momen inersia."
materiSlug: momen-gaya-torsi-dan-momen-inersia
pinHash: 9cca403f3d7938c86738f38838e836a1fa0181126632ec18bd549762368a6178
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus momen gaya (torsi) adalah..."
    pilihan:
      - { id: a, teks: "τ = F × r × sinθ" }
      - { id: b, teks: "τ = F × r" }
      - { id: c, teks: "τ = m × a" }
      - { id: d, teks: "τ = F / r" }
    jawabanBenarId: a
    penjelasan: "τ = F×r×sinθ."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Gaya 30 N tegak lurus (θ=90°) pada lengan 0,6 m. Berapa torsinya?"
    pilihan:
      - { id: a, teks: "18 N·m" }
      - { id: b, teks: "30 N·m" }
      - { id: c, teks: "0,6 N·m" }
      - { id: d, teks: "36 N·m" }
    jawabanBenarId: a
    penjelasan: "τ = 30×0,6×sin90° = 30×0,6×1 = 18 N·m."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Momen inersia piringan pejal (disk) dengan poros di pusat adalah..."
    pilihan:
      - { id: a, teks: "I = ½MR²" }
      - { id: b, teks: "I = MR²" }
      - { id: c, teks: "I = ⅖MR²" }
      - { id: d, teks: "I = ⅓MR²" }
    jawabanBenarId: a
    penjelasan: "Piringan pejal: I = ½MR²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Momen inersia (I) menyatakan..."
    pilihan:
      - { id: a, teks: "Kelembaman rotasi, bergantung bentuk dan sebaran massa" }
      - { id: b, teks: "Massa total benda saja" }
      - { id: c, teks: "Kecepatan rotasi benda" }
      - { id: d, teks: "Gaya yang bekerja pada benda" }
    jawabanBenarId: a
    penjelasan: "Momen inersia adalah kelembaman rotasi, bergantung pada bentuk dan sebaran massa terhadap sumbu putar."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Kalau gaya diberikan sejajar dengan lengan gaya (θ=0°), torsi yang dihasilkan adalah nol."
    jawabanBenar: true
    penjelasan: "Benar -- sin0°=0, sehingga τ=F×r×sin0°=0."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Dua benda dengan massa dan jari-jari yang sama pasti punya momen inersia yang sama juga, apa pun bentuknya."
    jawabanBenar: false
    penjelasan: "Salah -- momen inersia bergantung juga pada BENTUK/sebaran massa, bukan cuma massa dan jari-jari."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Cincin (massa di tepi) punya momen inersia lebih besar daripada bola pejal dengan massa dan jari-jari yang sama."
    jawabanBenar: true
    penjelasan: "Benar -- I cincin=MR² lebih besar dari I bola pejal=⅖MR², karena massa cincin lebih jauh dari sumbu."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Gaya 45 N tegak lurus pada lengan 0,8 m. Berapa torsinya, dalam N·m?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["36"]
    penjelasan: "τ = 45×0,8×1 = 36 N·m."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Piringan pejal bermassa 6 kg, jari-jari 0,4 m. Berapa momen inersianya, dalam kg·m²?"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["0.48", "0,48"]
    penjelasan: "I = ½MR² = ½×6×0,16 = 0,48 kg·m²."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Batang bermassa 2 kg sepanjang 1,5 m, poros di ujung. Berapa momen inersianya, dalam kg·m²? (I=⅓ML²)"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["1.5", "1,5"]
    penjelasan: "I = ⅓ML² = ⅓×2×1,5² = ⅓×2×2,25 = 1,5 kg·m²."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan bentuk benda dengan rumus momen inersianya."
    pasangan:
      - { id: p1, kiri: "Cincin/Hoop", kanan: "I = MR²" }
      - { id: p2, kiri: "Piringan Pejal", kanan: "I = ½MR²" }
      - { id: p3, kiri: "Bola Pejal", kanan: "I = ⅖MR²" }
    penjelasan: "Cincin=MR², piringan=½MR², bola pejal=⅖MR²."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan sudut gaya terhadap lengan dengan torsi yang dihasilkan (F dan r tetap)."
    pasangan:
      - { id: p1, kiri: "θ = 90°", kanan: "Torsi maksimum" }
      - { id: p2, kiri: "θ = 0°", kanan: "Torsi nol" }
    penjelasan: "sin90°=1 (maksimum), sin0°=0 (torsi nol)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung torsi dari data gaya, lengan, dan sudut, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan besar gaya (F) dan lengan gaya (r)" }
      - { id: i2, teks: "Tentukan sudut (θ) antara gaya dan lengan" }
      - { id: i3, teks: "Hitung sinθ" }
      - { id: i4, teks: "Kalikan F × r × sinθ untuk mendapatkan torsi" }
    penjelasan: "F dan r dulu, lalu sudut, lalu sinθ, baru dikalikan semua."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Urutkan (kelompokkan) bentuk benda berikut berdasarkan besar momen inersianya untuk massa dan jari-jari yang SAMA."
    kategori:
      - { id: besar, label: "Momen Inersia Lebih Besar" }
      - { id: kecil, label: "Momen Inersia Lebih Kecil" }
    item:
      - { id: t1, teks: "Cincin (I=MR²)", kategoriBenarId: besar }
      - { id: t2, teks: "Bola Pejal (I=⅖MR²)", kategoriBenarId: kecil }
    penjelasan: "Cincin (massa di tepi) lebih besar momen inersianya daripada bola pejal (massa tersebar ke pusat)."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan besaran berikut sesuai satuannya."
    kategori:
      - { id: nm, label: "N·m (Torsi)" }
      - { id: kgm2, label: "kg·m² (Momen Inersia)" }
    item:
      - { id: t1, teks: "τ", kategoriBenarId: nm }
      - { id: t2, teks: "I", kategoriBenarId: kgm2 }
    penjelasan: "Torsi satuannya N·m, momen inersia satuannya kg·m²."
    skor: 1
draft: false
---
