---
judul: "Dimensi"
kelas: X
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar simbol dimensi besaran pokok, menurunkan dimensi besaran turunan, dan memeriksa konsistensi persamaan Fisika."
materiSlug: dimensi
pinHash: 42adbb601cfd837042b2dc906e28a5dbdd44f00e61f1e9cee4fd92ebc10666b4
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Simbol dimensi yang digunakan untuk menyatakan besaran waktu adalah..."
    pilihan:
      - { id: a, teks: "M" }
      - { id: b, teks: "L" }
      - { id: c, teks: "T" }
      - { id: d, teks: "I" }
    jawabanBenarId: c
    penjelasan: "Dimensi waktu dinyatakan dengan simbol T, beda dengan dimensi panjang (L) dan massa (M)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Energi kinetik dirumuskan Ek = ½mv², dengan dimensi massa [m] = M dan dimensi kecepatan [v] = LT⁻¹. Dimensi energi kinetik adalah..."
    pilihan:
      - { id: a, teks: "MLT⁻²" }
      - { id: b, teks: "ML²T⁻²" }
      - { id: c, teks: "ML²T⁻¹" }
      - { id: d, teks: "MLT⁻¹" }
    jawabanBenarId: b
    penjelasan: "[Ek] = M × (LT⁻¹)² = M × L²T⁻² = ML²T⁻² -- sama dengan dimensi energi/usaha pada umumnya."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Manakah pasangan besaran-dimensi berikut yang BENAR?"
    pilihan:
      - { id: a, teks: "Massa jenis -- ML³" }
      - { id: b, teks: "Volume -- L²" }
      - { id: c, teks: "Gaya -- MLT⁻²" }
      - { id: d, teks: "Tekanan -- MLT⁻²" }
    jawabanBenarId: c
    penjelasan: "Gaya (F = ma) berdimensi MLT⁻². Massa jenis sebenarnya ML⁻³ (bukan ML³), volume sebenarnya L³ (bukan L²), dan tekanan sebenarnya ML⁻¹T⁻² (bukan MLT⁻²)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Tekanan dirumuskan P = F/A, dengan dimensi gaya [F] = MLT⁻² dan dimensi luas [A] = L². Dimensi tekanan yang dihasilkan adalah..."
    pilihan:
      - { id: a, teks: "MLT⁻²" }
      - { id: b, teks: "ML⁻¹T⁻²" }
      - { id: c, teks: "ML²T⁻²" }
      - { id: d, teks: "ML⁻²T⁻²" }
    jawabanBenarId: b
    penjelasan: "[P] = MLT⁻² / L² = ML⁻¹T⁻² -- pangkat L dikurangi 2 (dari pembagian dengan L²)."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Dimensi kecepatan sama dengan dimensi percepatan."
    jawabanBenar: false
    penjelasan: "Salah -- dimensi kecepatan adalah LT⁻¹, sedangkan dimensi percepatan adalah LT⁻². Pangkat T-nya berbeda."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Energi dan usaha memiliki dimensi yang sama, yaitu ML²T⁻²."
    jawabanBenar: true
    penjelasan: "Benar -- usaha dan energi memang punya rumus turunan yang sama (W = F×s), sehingga dimensinya sama-sama ML²T⁻², konsisten dengan satuan SI-nya yang juga sama (joule)."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Newton adalah dimensi dari besaran gaya."
    jawabanBenar: false
    penjelasan: "Salah -- newton (N) adalah SATUAN gaya, bukan dimensinya. Dimensi gaya adalah MLT⁻²."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Kecepatan dirumuskan v = Δx/Δt. Dimensi kecepatan dituliskan LT^n. Berapa nilai pangkat (n) dari T tersebut? (jawab dengan angka, termasuk tanda minus kalau ada)"
    angka: true
    toleransi: 0
    jawabanBenar: ["-1"]
    penjelasan: "[v] = [Δx]/[Δt] = L/T = LT⁻¹ -- pangkat T-nya adalah -1, karena waktu berada di penyebut."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Gaya dirumuskan F = m × a, dengan dimensi massa [m] = M dan dimensi percepatan [a] = LT⁻². Dimensi gaya dituliskan M^n L T⁻². Berapa nilai pangkat (n) dari M tersebut?"
    angka: true
    toleransi: 0
    jawabanBenar: ["1"]
    penjelasan: "[F] = M × LT⁻² = M¹LT⁻² -- pangkat M-nya adalah 1 (biasanya tidak dituliskan karena pangkat 1)."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Energi/usaha berdimensi ML²T⁻². Berapa nilai pangkat dari L pada dimensi tersebut?"
    angka: true
    toleransi: 0
    jawabanBenar: ["2"]
    penjelasan: "Dimensi energi ML²T⁻² -- pangkat L-nya adalah 2, muncul dari [W] = [F][s] = (MLT⁻²)(L) = ML²T⁻²."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran pokok dengan simbol dimensinya."
    pasangan:
      - { id: p1, kiri: "Panjang", kanan: "L" }
      - { id: p2, kiri: "Massa", kanan: "M" }
      - { id: p3, kiri: "Waktu", kanan: "T" }
      - { id: p4, kiri: "Kuat arus listrik", kanan: "I" }
    penjelasan: "Panjang-L, Massa-M, Waktu-T, Kuat arus-I -- empat dari tujuh simbol dimensi besaran pokok SI."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan besaran turunan dengan dimensinya."
    pasangan:
      - { id: p1, kiri: "Luas", kanan: "L²" }
      - { id: p2, kiri: "Volume", kanan: "L³" }
      - { id: p3, kiri: "Kecepatan", kanan: "LT⁻¹" }
      - { id: p4, kiri: "Gaya", kanan: "MLT⁻²" }
    penjelasan: "Luas dari dua besaran panjang (L²), Volume dari tiga besaran panjang (L³), Kecepatan dari panjang dibagi waktu (LT⁻¹), Gaya dari massa kali percepatan (MLT⁻²)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menentukan dimensi gaya (F = ma), dari yang paling awal."
    item:
      - { id: i1, teks: "Cari persamaannya: F = m × a" }
      - { id: i2, teks: "Ganti setiap besaran dengan dimensinya: [m] = M, [a] = LT⁻²" }
      - { id: i3, teks: "Gabungkan: [F] = M(LT⁻²)" }
      - { id: i4, teks: "Sederhanakan menjadi bentuk akhir: [F] = MLT⁻²" }
    penjelasan: "Pola ini berlaku untuk besaran turunan apa pun: tulis rumusnya, ganti tiap besaran dengan dimensinya, gabungkan, lalu sederhanakan."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan besaran berikut sebagai Besaran Pokok atau Besaran Turunan."
    kategori:
      - { id: pokok, label: "Besaran Pokok" }
      - { id: turunan, label: "Besaran Turunan" }
    item:
      - { id: t1, teks: "Panjang", kategoriBenarId: pokok }
      - { id: t2, teks: "Massa", kategoriBenarId: pokok }
      - { id: t3, teks: "Waktu", kategoriBenarId: pokok }
      - { id: t4, teks: "Kecepatan", kategoriBenarId: turunan }
      - { id: t5, teks: "Gaya", kategoriBenarId: turunan }
      - { id: t6, teks: "Luas", kategoriBenarId: turunan }
    penjelasan: "Panjang, Massa, Waktu adalah besaran pokok (dimensinya tunggal: L, M, T). Kecepatan, Gaya, Luas adalah besaran turunan, dimensinya gabungan dari besaran pokok."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Newton adalah satuan gaya", kategoriBenarId: benar }
      - { id: t2, teks: "MLT⁻² adalah dimensi gaya", kategoriBenarId: benar }
      - { id: t3, teks: "Dimensi kecepatan adalah m/s", kategoriBenarId: salah }
      - { id: t4, teks: "Energi dan usaha punya dimensi yang berbeda", kategoriBenarId: salah }
    penjelasan: "m/s adalah SATUAN kecepatan (dimensinya LT⁻¹), dan energi-usaha justru punya dimensi yang SAMA (ML²T⁻²) -- dua miskonsepsi paling umum soal dimensi."
    skor: 1
draft: false
---
