---
judul: "Kalor, Perubahan Wujud, dan Asas Black"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar kalor, kalor laten, dan Asas Black."
materiSlug: kalor-perubahan-wujud-dan-asas-black
pinHash: 11d281ac17b05ad76e8e96c951816e6a2dd1bcdbc21497686d52f4fb8576a7cc
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus kalor sensibel (mengubah suhu) adalah..."
    pilihan:
      - { id: a, teks: "Q = m × c × ΔT" }
      - { id: b, teks: "Q = m × L" }
      - { id: c, teks: "Q = c × ΔT" }
      - { id: d, teks: "Q = m / c" }
    jawabanBenarId: a
    penjelasan: "Q = mcΔT."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus kalor laten (mengubah wujud) adalah..."
    pilihan:
      - { id: a, teks: "Q = m × L" }
      - { id: b, teks: "Q = m × c × ΔT" }
      - { id: c, teks: "Q = L / m" }
      - { id: d, teks: "Q = m + L" }
    jawabanBenarId: a
    penjelasan: "Q = mL."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Asas Black menyatakan bahwa..."
    pilihan:
      - { id: a, teks: "Kalor yang dilepas zat panas sama dengan kalor yang diterima zat dingin" }
      - { id: b, teks: "Kalor yang dilepas selalu lebih besar" }
      - { id: c, teks: "Tidak ada kalor yang berpindah" }
      - { id: d, teks: "Suhu akhir selalu rata-rata sederhana" }
    jawabanBenarId: a
    penjelasan: "Q lepas = Q terima."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Air 0,4 kg (c=4200 J/kg°C) dipanaskan dari 20°C ke 45°C. Berapa kalor yang dibutuhkan?"
    pilihan:
      - { id: a, teks: "42.000 J" }
      - { id: b, teks: "4.200 J" }
      - { id: c, teks: "420.000 J" }
      - { id: d, teks: "16.800 J" }
    jawabanBenarId: a
    penjelasan: "Q=mcΔT=0,4×4200×25=42.000 J."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Suhu air yang sedang mendidih tidak naik lagi karena kalor yang masuk dipakai untuk mengubah wujud, bukan menaikkan suhu."
    jawabanBenar: true
    penjelasan: "Benar -- kalor laten menyerap kalor tanpa menaikkan suhu."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Membeku dan mengembun adalah proses yang MENYERAP kalor."
    jawabanBenar: false
    penjelasan: "Salah -- membeku dan mengembun MELEPASKAN kalor; melebur dan menguap yang menyerap."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Suhu akhir campuran dua zat dengan massa berbeda selalu tepat di tengah-tengah kedua suhu awal."
    jawabanBenar: false
    penjelasan: "Salah -- suhu akhir adalah rata-rata tertimbang oleh massa dan kalor jenis, bukan rata-rata sederhana."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Es 0,3 kg pada suhu leburnya melebur seluruhnya (L=336.000 J/kg). Berapa kalor yang dibutuhkan, dalam Joule?"
    angka: true
    toleransi: 1000
    jawabanBenar: ["100800"]
    penjelasan: "Q=mL=0,3×336.000=100.800 J."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Air panas 0,4 kg bersuhu 80°C dicampur air dingin 0,4 kg bersuhu 20°C (zat sama, massa sama). Berapa suhu akhir campuran, dalam °C?"
    angka: true
    toleransi: 1
    jawabanBenar: ["50"]
    penjelasan: "Massa sama -> Tc = rata-rata sederhana = (80+20)/2 = 50°C."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Air 0,6 kg (c=4200 J/kg°C) dipanaskan dari 30°C ke 60°C. Berapa kalor yang dibutuhkan, dalam kJ?"
    angka: true
    toleransi: 2
    jawabanBenar: ["75.6", "75,6"]
    penjelasan: "Q=mcΔT=0,6×4200×30=75.600 J=75,6 kJ."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan jenis kalor dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Kalor Sensibel", kanan: "Q = mcΔT" }
      - { id: p2, kiri: "Kalor Laten", kanan: "Q = mL" }
    penjelasan: "Sensibel mengubah suhu, laten mengubah wujud."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan perubahan wujud dengan sifat kalornya."
    pasangan:
      - { id: p1, kiri: "Melebur / Menguap", kanan: "Menyerap kalor" }
      - { id: p2, kiri: "Membeku / Mengembun", kanan: "Melepaskan kalor" }
    penjelasan: "Melebur/menguap menyerap, membeku/mengembun melepas."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menerapkan Asas Black untuk mencari suhu akhir campuran, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan massa, kalor jenis, dan suhu awal masing-masing zat" }
      - { id: i2, teks: "Tuliskan persamaan Q lepas = Q terima" }
      - { id: i3, teks: "Substitusikan m1c1(T1−Tc) = m2c2(Tc−T2)" }
      - { id: i4, teks: "Selesaikan persamaan untuk mencari Tc" }
    penjelasan: "Data dulu, tulis persamaan, substitusi, baru selesaikan."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan proses berikut sesuai apakah menyerap atau melepaskan kalor."
    kategori:
      - { id: serap, label: "Menyerap Kalor" }
      - { id: lepas, label: "Melepaskan Kalor" }
    item:
      - { id: t1, teks: "Es mencair menjadi air", kategoriBenarId: serap }
      - { id: t2, teks: "Air mendidih menjadi uap", kategoriBenarId: serap }
      - { id: t3, teks: "Uap mengembun menjadi air", kategoriBenarId: lepas }
      - { id: t4, teks: "Air membeku menjadi es", kategoriBenarId: lepas }
    penjelasan: "Melebur dan menguap menyerap kalor, mengembun dan membeku melepaskan kalor."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan besaran berikut sesuai jenis kalor yang menggunakannya."
    kategori:
      - { id: sensibel, label: "Kalor Sensibel" }
      - { id: laten, label: "Kalor Laten" }
    item:
      - { id: t1, teks: "Kalor jenis (c)", kategoriBenarId: sensibel }
      - { id: t2, teks: "Kalor lebur/kalor uap (L)", kategoriBenarId: laten }
      - { id: t3, teks: "Perubahan suhu (ΔT)", kategoriBenarId: sensibel }
    penjelasan: "Kalor sensibel pakai c dan ΔT, kalor laten pakai L (tanpa ΔT)."
    skor: 1
draft: false
---
