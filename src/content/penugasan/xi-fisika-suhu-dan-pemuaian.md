---
judul: "Suhu dan Pemuaian"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar skala suhu dan pemuaian panjang, luas, volume."
materiSlug: suhu-dan-pemuaian
pinHash: eba2b93ac3109ef88821640d98ab835de7a735a903c94ea3a123de6f02719dbb
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Konversi Celsius ke Kelvin menggunakan rumus..."
    pilihan:
      - { id: a, teks: "K = C + 273" }
      - { id: b, teks: "K = C − 273" }
      - { id: c, teks: "K = 9/5 C + 32" }
      - { id: d, teks: "K = 5/9 C" }
    jawabanBenarId: a
    penjelasan: "K = C + 273."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus pemuaian panjang adalah..."
    pilihan:
      - { id: a, teks: "ΔL = L0 × α × ΔT" }
      - { id: b, teks: "ΔL = L0 + α" }
      - { id: c, teks: "ΔL = α × ΔT" }
      - { id: d, teks: "ΔL = L0 / α" }
    jawabanBenarId: a
    penjelasan: "ΔL = L0×α×ΔT."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Suhu 40°C setara dengan berapa Kelvin?"
    pilihan:
      - { id: a, teks: "313 K" }
      - { id: b, teks: "233 K" }
      - { id: c, teks: "40 K" }
      - { id: d, teks: "104 K" }
    jawabanBenarId: a
    penjelasan: "K = 40+273 = 313 K."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Koefisien muai luas (β) berhubungan dengan koefisien muai panjang (α) lewat rumus..."
    pilihan:
      - { id: a, teks: "β = 2α" }
      - { id: b, teks: "β = 3α" }
      - { id: c, teks: "β = α" }
      - { id: d, teks: "β = α/2" }
    jawabanBenarId: a
    penjelasan: "β = 2α karena luas memuai dalam 2 arah."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Rel kereta api diberi celah kecil supaya ada ruang untuk memuai saat suhu naik."
    jawabanBenar: true
    penjelasan: "Benar -- celah mencegah rel melengkung akibat pemuaian yang terhalang."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Semua bahan memiliki koefisien muai (α) yang sama persis."
    jawabanBenar: false
    penjelasan: "Salah -- α adalah sifat khas tiap bahan, berbeda-beda."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Koefisien muai volume (γ) sama dengan 3 kali koefisien muai panjang (α)."
    jawabanBenar: true
    penjelasan: "Benar -- γ=3α karena volume memuai dalam 3 arah."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Batang baja (α=12×10⁻⁶/°C) sepanjang 4 m mengalami kenaikan suhu 50°C. Berapa pertambahan panjangnya, dalam mm?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["2.4", "2,4"]
    penjelasan: "ΔL=4×(12×10⁻⁶)×50=2,4×10⁻³ m=2,4 mm."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Suhu 25°C setara dengan berapa Fahrenheit?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["77"]
    penjelasan: "F=9/5×25+32=45+32=77°F."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Suhu 50°F setara dengan berapa Celsius? (C=5/9(F−32))"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["10"]
    penjelasan: "C=5/9(50−32)=5/9×18=10°C."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan skala suhu dengan titik didih airnya."
    pasangan:
      - { id: p1, kiri: "Celsius", kanan: "100°C" }
      - { id: p2, kiri: "Fahrenheit", kanan: "212°F" }
      - { id: p3, kiri: "Kelvin", kanan: "373 K" }
    penjelasan: "Titik didih air pada masing-masing skala."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan jenis pemuaian dengan koefisiennya."
    pasangan:
      - { id: p1, kiri: "Pemuaian Panjang", kanan: "α" }
      - { id: p2, kiri: "Pemuaian Luas", kanan: "β = 2α" }
      - { id: p3, kiri: "Pemuaian Volume", kanan: "γ = 3α" }
    penjelasan: "Koefisien muai panjang, luas, dan volume."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung pertambahan panjang suatu batang, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan panjang awal (L0) dan koefisien muai (α) bahan" }
      - { id: i2, teks: "Tentukan kenaikan suhu (ΔT)" }
      - { id: i3, teks: "Kalikan L0 × α × ΔT" }
    penjelasan: "L0 dan α dulu, ΔT, baru dikalikan semua."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan besaran berikut sesuai jenis pemuaiannya."
    kategori:
      - { id: panjang, label: "Pemuaian Panjang" }
      - { id: volume, label: "Pemuaian Volume" }
    item:
      - { id: t1, teks: "ΔL = L0αΔT", kategoriBenarId: panjang }
      - { id: t2, teks: "ΔV = V0γΔT", kategoriBenarId: volume }
      - { id: t3, teks: "γ = 3α", kategoriBenarId: volume }
    penjelasan: "Panjang pakai α langsung, volume pakai γ=3α."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan bahan berikut sesuai urutan koefisien muai panjangnya (dari data materi)."
    kategori:
      - { id: kecil, label: "Koefisien Muai Lebih Kecil" }
      - { id: besar, label: "Koefisien Muai Lebih Besar" }
    item:
      - { id: t1, teks: "Kaca (α=9×10⁻⁶/°C)", kategoriBenarId: kecil }
      - { id: t2, teks: "Aluminium (α=24×10⁻⁶/°C)", kategoriBenarId: besar }
    penjelasan: "Kaca punya α lebih kecil (lebih sedikit memuai) dibanding aluminium."
    skor: 1
draft: false
---
