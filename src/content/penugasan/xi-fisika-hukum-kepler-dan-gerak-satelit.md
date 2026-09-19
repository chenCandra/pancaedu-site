---
judul: "Hukum Kepler dan Gerak Satelit"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar tiga Hukum Kepler dan gerak satelit."
materiSlug: hukum-kepler-dan-gerak-satelit
pinHash: 297aacbc405f68b3901b308ec9f227ec671f22dc9a8f812743d7609cbf9d1aed
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Hukum Kepler I menyatakan orbit planet berbentuk..."
    pilihan:
      - { id: a, teks: "Elips, dengan Matahari di salah satu fokus" }
      - { id: b, teks: "Lingkaran sempurna, Matahari di pusat" }
      - { id: c, teks: "Garis lurus" }
      - { id: d, teks: "Spiral mengecil" }
    jawabanBenarId: a
    penjelasan: "Kepler I: orbit elips, Matahari di salah satu fokus."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Menurut Hukum Kepler II, planet bergerak paling cepat saat berada di titik..."
    pilihan:
      - { id: a, teks: "Perihelion (paling dekat Matahari)" }
      - { id: b, teks: "Aphelion (paling jauh dari Matahari)" }
      - { id: c, teks: "Tengah-tengah orbit" }
      - { id: d, teks: "Kecepatannya selalu sama di semua titik" }
    jawabanBenarId: a
    penjelasan: "Planet bergerak paling cepat di perihelion (titik terdekat Matahari)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Dalam satuan SA dan tahun, Hukum Kepler III untuk planet mengorbit Matahari menyederhanakan jadi..."
    pilihan:
      - { id: a, teks: "T² = r³" }
      - { id: b, teks: "T = r³" }
      - { id: c, teks: "T² = r" }
      - { id: d, teks: "T = 2r" }
    jawabanBenarId: a
    penjelasan: "T²=r³ dalam satuan SA-tahun untuk Matahari."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Planet berjarak 4 SA dari Matahari. Berapa periode orbitnya?"
    pilihan:
      - { id: a, teks: "8 tahun" }
      - { id: b, teks: "4 tahun" }
      - { id: c, teks: "16 tahun" }
      - { id: d, teks: "2 tahun" }
    jawabanBenarId: a
    penjelasan: "T²=4³=64, T=8 tahun."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Kecepatan planet konstan sepanjang orbitnya, tidak pernah berubah."
    jawabanBenar: false
    penjelasan: "Salah -- kecepatan berubah-ubah sesuai Hukum Kepler II, lebih cepat di perihelion."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "T²=r³ (dalam SA-tahun) berlaku untuk semua benda langit di alam semesta, tanpa syarat."
    jawabanBenar: false
    penjelasan: "Salah -- hanya berlaku untuk benda yang mengorbit Matahari; benda pusat lain punya konstanta berbeda."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Ketiga Hukum Kepler bisa diturunkan secara matematis dari Hukum Gravitasi Newton."
    jawabanBenar: true
    penjelasan: "Benar -- Newton membuktikan konsistensi Hukum Kepler dengan hukum gravitasinya."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Planet berjarak 9 SA dari Matahari. Berapa periode orbitnya, dalam tahun?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["27"]
    penjelasan: "T²=9³=729, T=27 tahun."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Planet berjarak 16 SA dari Matahari. Berapa periode orbitnya, dalam tahun?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["64"]
    penjelasan: "T²=16³=4096, T=64 tahun."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Bumi (1 SA, 1 tahun) dibandingkan planet berjarak 4 SA. Berapa kali lebih lama periode planet itu dibanding Bumi?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["8"]
    penjelasan: "T=4^1,5=8 tahun, 8 kali lebih lama dari Bumi (1 tahun)."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan hukum Kepler dengan isinya."
    pasangan:
      - { id: p1, kiri: "Kepler I", kanan: "Orbit berbentuk elips" }
      - { id: p2, kiri: "Kepler II", kanan: "Luas sapuan sama dalam waktu sama" }
      - { id: p3, kiri: "Kepler III", kanan: "T²/r³ konstan" }
    penjelasan: "Tiga hukum Kepler dengan isinya masing-masing."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan posisi orbit dengan kecepatan planet."
    pasangan:
      - { id: p1, kiri: "Perihelion", kanan: "Kecepatan maksimum" }
      - { id: p2, kiri: "Aphelion", kanan: "Kecepatan minimum" }
    penjelasan: "Perihelion (dekat) = cepat, aphelion (jauh) = lambat."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung periode orbit planet dari jaraknya, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan jarak planet dari Matahari dalam SA (r)" }
      - { id: i2, teks: "Pangkatkan r dengan 3 (r³)" }
      - { id: i3, teks: "Akar-kuadratkan hasilnya untuk mendapat T (T=√r³)" }
    penjelasan: "r dulu, pangkat 3, baru akar kuadrat untuk T."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan istilah berikut sesuai definisinya."
    kategori:
      - { id: dekat, label: "Titik Terdekat dari Matahari" }
      - { id: jauh, label: "Titik Terjauh dari Matahari" }
    item:
      - { id: t1, teks: "Perihelion", kategoriBenarId: dekat }
      - { id: t2, teks: "Aphelion", kategoriBenarId: jauh }
    penjelasan: "Perihelion dekat, aphelion jauh dari Matahari."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sesuai hukum Kepler yang paling tepat menjelaskannya."
    kategori:
      - { id: k1, label: "Kepler I" }
      - { id: k2, label: "Kepler II" }
      - { id: k3, label: "Kepler III" }
    item:
      - { id: t1, teks: "Matahari tidak berada tepat di pusat orbit planet", kategoriBenarId: k1 }
      - { id: t2, teks: "Planet bergerak lebih cepat saat dekat Matahari", kategoriBenarId: k2 }
      - { id: t3, teks: "Planet yang lebih jauh punya periode orbit yang jauh lebih lama, tidak sekadar linear", kategoriBenarId: k3 }
    penjelasan: "Kepler I bentuk orbit, Kepler II kecepatan berubah, Kepler III hubungan T dan r."
    skor: 1
draft: false
---
