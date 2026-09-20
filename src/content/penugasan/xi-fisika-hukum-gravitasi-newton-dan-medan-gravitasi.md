---
judul: "Hukum Gravitasi Newton dan Medan Gravitasi"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar Hukum Gravitasi Newton dan medan gravitasi."
materiSlug: hukum-gravitasi-newton-dan-medan-gravitasi
pinHash: fa883548cc8d493ae126282ffc9d145c150f0a9533fd1b8058d144d3725f7a59
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus Hukum Gravitasi Newton adalah..."
    pilihan:
      - { id: a, teks: "F = G × m1 × m2 / r²" }
      - { id: b, teks: "F = G × m1 × m2 × r²" }
      - { id: c, teks: "F = m1 × m2 / G" }
      - { id: d, teks: "F = G / (m1 × m2)" }
    jawabanBenarId: a
    penjelasan: "F = Gm1m2/r²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus medan gravitasi akibat massa M pada jarak r adalah..."
    pilihan:
      - { id: a, teks: "g = G × M / r²" }
      - { id: b, teks: "g = G × M × r²" }
      - { id: c, teks: "g = M / r" }
      - { id: d, teks: "g = G / M" }
    jawabanBenarId: a
    penjelasan: "g = GM/r²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Kalau jarak antara dua massa diperbesar 3 kali lipat, gaya gravitasinya menjadi..."
    pilihan:
      - { id: a, teks: "1/9 kali (mengecil)" }
      - { id: b, teks: "1/3 kali" }
      - { id: c, teks: "3 kali lebih besar" }
      - { id: d, teks: "9 kali lebih besar" }
    jawabanBenarId: a
    penjelasan: "F berbanding terbalik dengan r² -- r menjadi 3x membuat F menjadi 1/9 kali."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Dua massa 1000 kg dan 4000 kg berjarak 20 m. Berapa gaya gravitasinya? (G=6,674×10⁻¹¹ N·m²/kg²)"
    pilihan:
      - { id: a, teks: "6,674×10⁻⁷ N" }
      - { id: b, teks: "6,674×10⁻¹¹ N" }
      - { id: c, teks: "4×10⁶ N" }
      - { id: d, teks: "6,674×10⁻⁵ N" }
    jawabanBenarId: a
    penjelasan: "F=G×1000×4000/20²=(6,674×10⁻¹¹)×(4×10⁶)/400=(6,674×10⁻¹¹)×10⁴≈6,674×10⁻⁷ N."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Hukum Gravitasi Newton hanya berlaku untuk benda-benda langit seperti planet dan bintang."
    jawabanBenar: false
    penjelasan: "Salah -- Hukum Gravitasi Newton bersifat universal, berlaku untuk semua benda bermassa."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Gaya gravitasi (F) dan medan gravitasi (g) adalah besaran yang persis sama."
    jawabanBenar: false
    penjelasan: "Salah -- F adalah interaksi dua massa, g adalah efek satu massa di suatu titik ruang."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Astronot di ISS terlihat 'melayang' karena gravitasi Bumi berhenti bekerja di ketinggian itu."
    jawabanBenar: false
    penjelasan: "Salah -- gravitasi Bumi masih bekerja kuat di ketinggian ISS, 'melayang' terjadi karena keadaan jatuh bebas mengorbit."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Kalau jarak antara dua massa diperkecil jadi setengah (1/2) kali semula, gaya gravitasinya menjadi berapa kali lipat semula? (jawab dengan angka)"
    angka: true
    toleransi: 0.2
    jawabanBenar: ["4"]
    penjelasan: "F berbanding terbalik dengan r² -- r menjadi 1/2 kali membuat F menjadi (1/(1/2))²=4 kali lipat."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Massa Bumi ≈6×10²⁴ kg, jari-jari Bumi ≈6,4×10⁶ m. Hitung medan gravitasi di permukaan Bumi (dalam m/s², G=6,674×10⁻¹¹)."
    angka: true
    toleransi: 0.5
    jawabanBenar: ["9.8", "9,8"]
    penjelasan: "g=GM/R²=(6,674×10⁻¹¹)(6×10²⁴)/(6,4×10⁶)²≈9,8 m/s²."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Planet dengan massa 2 kali massa Bumi dan jari-jari 2 kali jari-jari Bumi. Medan gravitasi di permukaannya menjadi berapa kali g Bumi? (jawab dengan desimal)"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["0.5", "0,5"]
    penjelasan: "g_baru=G(2M)/(2R)²=G(2M)/(4R²)=½×GM/R²=½g_Bumi=0,5 kali."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Gaya Gravitasi", kanan: "F = Gm1m2/r²" }
      - { id: p2, kiri: "Medan Gravitasi", kanan: "g = GM/r²" }
    penjelasan: "F interaksi dua massa, g efek satu massa di suatu titik."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan perubahan jarak dengan efeknya terhadap gaya gravitasi (massa tetap)."
    pasangan:
      - { id: p1, kiri: "Jarak diperbesar 2x", kanan: "Gaya menjadi 1/4 kali" }
      - { id: p2, kiri: "Jarak diperkecil jadi 1/2x", kanan: "Gaya menjadi 4 kali" }
    penjelasan: "F berbanding terbalik dengan kuadrat jarak."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung gaya gravitasi antara dua benda, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan massa kedua benda (m1 dan m2)" }
      - { id: i2, teks: "Tentukan jarak antara pusat kedua benda (r)" }
      - { id: i3, teks: "Kuadratkan jarak (r²)" }
      - { id: i4, teks: "Hitung F = G×m1×m2/r²" }
    penjelasan: "Massa dan jarak dulu, kuadratkan jarak, baru hitung gaya."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sesuai apakah tentang gaya gravitasi (F) atau medan gravitasi (g)."
    kategori:
      - { id: gaya, label: "Gaya Gravitasi (F)" }
      - { id: medan, label: "Medan Gravitasi (g)" }
    item:
      - { id: t1, teks: "Interaksi antara dua massa", kategoriBenarId: gaya }
      - { id: t2, teks: "Efek satu massa di suatu titik ruang", kategoriBenarId: medan }
      - { id: t3, teks: "Rumus F = Gm1m2/r²", kategoriBenarId: gaya }
      - { id: t4, teks: "Rumus g = GM/r²", kategoriBenarId: medan }
    penjelasan: "F melibatkan dua massa, g hanya satu massa sumber."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sesuai kebenarannya."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Gravitasi berlaku universal untuk semua benda bermassa", kategoriBenarId: benar }
      - { id: t2, teks: "Gaya gravitasi berbanding lurus dengan jarak (bukan terbalik)", kategoriBenarId: salah }
      - { id: t3, teks: "Bulan tetap ditarik gravitasi Bumi meski tidak jatuh ke Bumi", kategoriBenarId: benar }
    penjelasan: "Gravitasi universal (benar). F berbanding TERBALIK dengan kuadrat jarak, bukan lurus (pernyataan kedua salah). Bulan tetap ditarik gravitasi meski orbitnya membuatnya tidak jatuh (benar)."
    skor: 1
draft: false
---
