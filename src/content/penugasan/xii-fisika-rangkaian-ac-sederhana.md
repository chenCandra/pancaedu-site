---
judul: "Rangkaian AC Sederhana: Resistor, Induktor, Kapasitor"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar hubungan fase tegangan-arus pada resistor, induktor, kapasitor, serta reaktansi induktif dan kapasitif."
materiSlug: rangkaian-ac-sederhana
pinHash: a1f3a414d452816c01e2ba16fd075b223950e98a014528bd704676510d337dc9
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Pada RESISTOR murni dalam rangkaian AC, hubungan fase antara tegangan dan arusnya adalah..."
    pilihan:
      - { id: a, teks: "Sefase (beda fase 0°)" }
      - { id: b, teks: "Arus tertinggal 90° dari tegangan" }
      - { id: c, teks: "Arus mendahului 90° dari tegangan" }
      - { id: d, teks: "Berlawanan fase 180°" }
    jawabanBenarId: a
    penjelasan: "Resistor tidak menyimpan energi seperti induktor/kapasitor -- tegangan dan arus naik-turun bersamaan, selalu sefase."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Pada INDUKTOR dalam rangkaian AC, hubungan fase antara tegangan dan arusnya adalah..."
    pilihan:
      - { id: a, teks: "Arus tertinggal 90° dari tegangan" }
      - { id: b, teks: "Arus mendahului 90° dari tegangan" }
      - { id: c, teks: "Sefase (beda fase 0°)" }
      - { id: d, teks: "Berlawanan fase 180°" }
    jawabanBenarId: a
    penjelasan: "Induktor melawan PERUBAHAN arus (Hukum Lenz), sehingga arus tertinggal 90° dari tegangan -- ingat jembatan keledai ELI."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Pada KAPASITOR dalam rangkaian AC, hubungan fase antara tegangan dan arusnya adalah..."
    pilihan:
      - { id: a, teks: "Arus mendahului 90° dari tegangan" }
      - { id: b, teks: "Arus tertinggal 90° dari tegangan" }
      - { id: c, teks: "Sefase (beda fase 0°)" }
      - { id: d, teks: "Berlawanan fase 180°" }
    jawabanBenarId: a
    penjelasan: "Arus harus mengalir dulu untuk mengubah muatan kapasitor, baru tegangannya menyusul berubah -- ingat jembatan keledai ICE."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Jembatan keledai 'ELI' dipakai untuk mengingat bahwa..."
    pilihan:
      - { id: a, teks: "Pada induktor (L), tegangan (E) mendahului arus (I)" }
      - { id: b, teks: "Pada kapasitor (C), tegangan mendahului arus" }
      - { id: c, teks: "Pada resistor (R), arus mendahului tegangan" }
      - { id: d, teks: "Pada induktor, arus mendahului tegangan" }
    jawabanBenarId: a
    penjelasan: "ELI: pada L (induktor), E (tegangan) lebih dulu dari I (arus) -- artinya arus tertinggal dari tegangan."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-5
    soal: "Jembatan keledai 'ICE' dipakai untuk mengingat bahwa..."
    pilihan:
      - { id: a, teks: "Pada kapasitor (C), arus (I) mendahului tegangan (E)" }
      - { id: b, teks: "Pada induktor, arus mendahului tegangan" }
      - { id: c, teks: "Pada kapasitor, tegangan mendahului arus" }
      - { id: d, teks: "Pada resistor, tegangan tertinggal dari arus" }
    jawabanBenarId: a
    penjelasan: "ICE: pada C (kapasitor), I (arus) lebih dulu dari E (tegangan) -- artinya arus mendahului tegangan."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-6
    soal: "Sebuah induktor L = 200 mH (0,2 H) dipasang pada rangkaian AC berfrekuensi f = 50 Hz. Reaktansi induktifnya (gunakan π≈3,14) adalah..."
    pilihan:
      - { id: a, teks: "62,8 Ω" }
      - { id: b, teks: "31,4 Ω" }
      - { id: c, teks: "6,28 Ω" }
      - { id: d, teks: "628 Ω" }
    jawabanBenarId: a
    penjelasan: "XL = 2πfL = 2 × 3,14 × 50 × 0,2 = 62,8 Ω."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-7
    soal: "Sebuah kapasitor C = 100 µF dipasang pada rangkaian AC berfrekuensi f = 50 Hz. Reaktansi kapasitifnya (gunakan π≈3,14) adalah..."
    pilihan:
      - { id: a, teks: "31,8 Ω" }
      - { id: b, teks: "62,8 Ω" }
      - { id: c, teks: "3,18 Ω" }
      - { id: d, teks: "318 Ω" }
    jawabanBenarId: a
    penjelasan: "XC = 1/(2πfC) = 1/(2 × 3,14 × 50 × 0,0001) ≈ 31,8 Ω."
    skor: 1
  - tipe: benar-salah
    id: soal-8
    soal: "Reaktansi (XL dan XC) menghasilkan disipasi energi dalam bentuk panas, sama seperti resistansi."
    jawabanBenar: false
    penjelasan: "Salah -- reaktansi hanya MENYIMPAN energi sesaat (di medan magnet/medan listrik) lalu mengembalikannya, tidak seperti resistansi yang benar-benar mengubah energi jadi panas."
    skor: 1
  - tipe: benar-salah
    id: soal-9
    soal: "Semakin tinggi frekuensi rangkaian AC, reaktansi induktif (XL) semakin besar."
    jawabanBenar: true
    penjelasan: "Benar -- XL = 2πfL berbanding LURUS dengan frekuensi."
    skor: 1
  - tipe: benar-salah
    id: soal-10
    soal: "Semakin tinggi frekuensi rangkaian AC, reaktansi kapasitif (XC) semakin besar."
    jawabanBenar: false
    penjelasan: "Salah -- XC = 1/(2πfC) berbanding TERBALIK dengan frekuensi, jadi XC justru semakin KECIL."
    skor: 1
  - tipe: benar-salah
    id: soal-11
    soal: "Pada resistor murni, nilai resistansinya berubah mengikuti frekuensi arus AC yang mengalir."
    jawabanBenar: false
    penjelasan: "Salah -- resistansi (R) TIDAK bergantung pada frekuensi, berbeda dari reaktansi (XL, XC) yang berubah mengikuti frekuensi."
    skor: 1
  - tipe: isian-singkat
    id: soal-12
    soal: "Sebuah induktor L = 100 mH dipasang pada rangkaian AC berfrekuensi f = 50 Hz. Berapa reaktansi induktifnya, dalam Ω? (Gunakan π≈3,14, bulatkan satu desimal)"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["31.4"]
    penjelasan: "XL = 2πfL = 2 × 3,14 × 50 × 0,1 = 31,4 Ω."
    skor: 1
  - tipe: menjodohkan
    id: soal-13
    soal: "Jodohkan komponen dengan hubungan fase arus terhadap tegangannya dalam rangkaian AC."
    pasangan:
      - { id: p1, kiri: "Resistor", kanan: "Sefase (0°)" }
      - { id: p2, kiri: "Induktor", kanan: "Arus tertinggal 90°" }
      - { id: p3, kiri: "Kapasitor", kanan: "Arus mendahului 90°" }
    penjelasan: "Resistor sefase, induktor membuat arus tertinggal (ELI), kapasitor membuat arus mendahului (ICE)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-14
    soal: "Susun langkah menghitung reaktansi kapasitif (XC) sebuah kapasitor, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan nilai frekuensi (f) dan kapasitansi (C) rangkaian" }
      - { id: i2, teks: "Hitung hasil kali 2πfC" }
      - { id: i3, teks: "Ambil kebalikan (1 dibagi hasil kali tersebut)" }
      - { id: i4, teks: "Itulah nilai reaktansi kapasitif (XC) dalam Ohm" }
    penjelasan: "XC = 1/(2πfC) -- tentukan dulu f dan C, hitung 2πfC, baru ambil kebalikannya."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut berdasarkan komponen yang paling tepat menggambarkannya."
    kategori:
      - { id: resistor, label: "Resistor" }
      - { id: induktor, label: "Induktor" }
      - { id: kapasitor, label: "Kapasitor" }
    item:
      - { id: t1, teks: "Arus dan tegangan selalu sefase", kategoriBenarId: resistor }
      - { id: t2, teks: "Reaktansinya semakin besar kalau frekuensi dinaikkan", kategoriBenarId: induktor }
      - { id: t3, teks: "Reaktansinya semakin kecil kalau frekuensi dinaikkan", kategoriBenarId: kapasitor }
      - { id: t4, teks: "Mengubah energi listrik jadi panas (disipasi), bukan menyimpan sementara", kategoriBenarId: resistor }
    penjelasan: "Resistor mendisipasi energi jadi panas dan selalu sefase; induktor (XL=2πfL) makin besar reaktansinya seiring frekuensi naik; kapasitor (XC=1/(2πfC)) justru makin kecil."
    skor: 1
draft: false
---
