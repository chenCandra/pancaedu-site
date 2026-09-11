---
judul: "Medan Listrik, Memahami Pengaruh Muatan di Sekitarnya"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar definisi medan listrik, rumus E=F/q dan E=kQ/r², arah medan, dan hubungannya dengan Hukum Coulomb."
materiSlug: medan-listrik
pinHash: eb37df2dff04af16cd408823dc76a441832fce9ce7c7e86899bc290726c6ab4e
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Medan listrik di suatu titik didefinisikan sebagai..."
    pilihan:
      - { id: a, teks: "Jumlah muatan yang ada di titik tersebut" }
      - { id: b, teks: "Gaya listrik yang bekerja pada satu satuan muatan uji positif di titik itu" }
      - { id: c, teks: "Jarak antara dua muatan" }
      - { id: d, teks: "Energi potensial listrik di titik itu" }
    jawabanBenarId: b
    penjelasan: "Medan listrik (E) didefinisikan sebagai E = F/q -- gaya listrik per satuan muatan uji positif."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah muatan titik +2 μC berada sendirian di suatu titik. Berapa kira-kira kuat medan listrik pada jarak 5 cm darinya? (k = 9×10⁹ N·m²/C²)"
    pilihan:
      - { id: a, teks: "7,2 × 10⁶ N/C" }
      - { id: b, teks: "7,2 × 10⁵ N/C" }
      - { id: c, teks: "7,2 × 10⁷ N/C" }
      - { id: d, teks: "7,2 × 10⁴ N/C" }
    jawabanBenarId: a
    penjelasan: "E = kQ/r² = (9×10⁹ × 2×10⁻⁶) / (0,05)² = 1,8×10⁴ / 2,5×10⁻³ = 7,2×10⁶ N/C."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sebuah muatan +3 nC ditempatkan di titik yang punya kuat medan listrik 1.000 N/C. Berapa gaya yang dialami muatan tersebut?"
    pilihan:
      - { id: a, teks: "3 × 10⁻⁶ N" }
      - { id: b, teks: "3 × 10⁻³ N" }
      - { id: c, teks: "3 × 10⁻⁹ N" }
      - { id: d, teks: "3.000 N" }
    jawabanBenarId: a
    penjelasan: "F = qE = (3×10⁻⁹)(1.000) = 3×10⁻⁶ N."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Arah medan listrik di sekitar sebuah muatan POSITIF adalah..."
    pilihan:
      - { id: a, teks: "Menjauhi muatan (radial keluar)" }
      - { id: b, teks: "Menuju muatan (radial masuk)" }
      - { id: c, teks: "Selalu horizontal" }
      - { id: d, teks: "Tidak memiliki arah tertentu" }
    jawabanBenarId: a
    penjelasan: "Arah medan listrik = arah gaya pada muatan uji POSITIF. Muatan positif menolak muatan uji positif, sehingga arah medannya menjauhi muatan (radial keluar)."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Medan listrik hanya ada kalau ada DUA muatan yang saling berdekatan."
    jawabanBenar: false
    penjelasan: "Salah -- medan listrik sudah ada di sekitar SATU muatan saja, tanpa perlu muatan kedua. Yang butuh muatan kedua adalah GAYA yang bisa 'dirasakan', bukan medannya sendiri."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Nilai kuat medan listrik E di suatu titik TIDAK berubah walau muatan uji yang dipakai untuk mengukurnya diganti dengan yang lebih besar atau lebih kecil."
    jawabanBenar: true
    penjelasan: "Benar -- E ditentukan oleh muatan SUMBER di titik itu, bukan oleh muatan uji yang dipakai mengukurnya. Rasio F/q selalu konstan di titik yang sama."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Garis-garis medan listrik keluar dari muatan positif dan masuk ke muatan negatif."
    jawabanBenar: true
    penjelasan: "Benar -- ini sesuai definisi arah medan listrik sebagai arah gaya pada muatan uji positif."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Muatan +6 μC berada sendirian. Berapa kuat medan listrik pada jarak 30 cm (0,3 m) darinya, dalam satuan 10⁵ N/C? (misal kalau hasilnya 2×10⁵ N/C, jawab 2)"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["6"]
    penjelasan: "E = kQ/r² = (9×10⁹)(6×10⁻⁶)/(0,3)² = 5,4×10⁴/0,09 = 6×10⁵ N/C -- dalam satuan 10⁵ N/C, jawabannya 6."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Muatan +5 nC ditempatkan di titik dengan kuat medan listrik 4.000 N/C. Berapa gaya yang dialaminya, dalam satuan mikronewton (μN)?"
    angka: true
    toleransi: 1
    jawabanBenar: ["20"]
    penjelasan: "F = qE = (5×10⁻⁹)(4.000) = 2×10⁻⁵ N = 20 μN (karena 1 μN = 10⁻⁶ N)."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Dua muatan +Q yang identik diletakkan berjauhan. Berapa kuat medan listrik total (dalam N/C) tepat di titik tengah-tengah antara keduanya? (jawab dengan angka)"
    angka: true
    toleransi: 0
    jawabanBenar: ["0"]
    penjelasan: "Di titik tengah, medan dari kedua muatan sama besar tapi berlawanan arah (saling menjauhi pusat), sehingga total medannya nol."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran dengan satuannya."
    pasangan:
      - { id: p1, kiri: "E (kuat medan listrik)", kanan: "N/C" }
      - { id: p2, kiri: "F (gaya listrik)", kanan: "Newton" }
      - { id: p3, kiri: "q (muatan)", kanan: "Coulomb" }
      - { id: p4, kiri: "k (konstanta Coulomb)", kanan: "N·m²/C²" }
    penjelasan: "Kuat medan listrik satuannya N/C (bisa juga V/m), gaya dalam Newton, muatan dalam Coulomb, dan konstanta Coulomb dalam N·m²/C²."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan pernyataan dengan rumus yang sesuai."
    pasangan:
      - { id: p1, kiri: "Gaya per satuan muatan uji", kanan: "E = F/q" }
      - { id: p2, kiri: "Medan dari sebuah muatan titik", kanan: "E = kQ/r²" }
      - { id: p3, kiri: "Gaya pada muatan yang berada di dalam medan", kanan: "F = qE" }
    penjelasan: "Tiga rumus inti medan listrik: definisi umumnya (E=F/q), rumus untuk muatan titik (E=kQ/r²), dan cara mencari gaya kalau medannya sudah diketahui (F=qE)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah mencari gaya yang dialami sebuah muatan q yang ditaruh di titik yang sudah diketahui kuat medannya, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan kuat medan listrik E di titik tersebut" }
      - { id: i2, teks: "Tentukan besar muatan q yang akan ditaruh di titik itu" }
      - { id: i3, teks: "Masukkan nilai E dan q ke rumus F = qE" }
      - { id: i4, teks: "Hitung hasilnya untuk mendapatkan besar gaya F" }
    penjelasan: "Kalau medan E di suatu titik sudah diketahui, mencari gaya pada muatan yang ditaruh di situ jadi jauh lebih sederhana -- tinggal F = qE, tidak perlu tahu muatan sumbernya lagi."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sebagai Arah Menjauhi Muatan atau Arah Menuju Muatan."
    kategori:
      - { id: menjauhi, label: "Arah Menjauhi Muatan" }
      - { id: menuju, label: "Arah Menuju Muatan" }
    item:
      - { id: t1, teks: "Medan di sekitar muatan positif", kategoriBenarId: menjauhi }
      - { id: t2, teks: "Medan di sekitar muatan negatif", kategoriBenarId: menuju }
      - { id: t3, teks: "Garis medan keluar dari muatan positif", kategoriBenarId: menjauhi }
      - { id: t4, teks: "Garis medan masuk ke muatan negatif", kategoriBenarId: menuju }
    penjelasan: "Arah medan listrik selalu didefinisikan dari arah gaya pada muatan uji POSITIF -- menjauh dari sumber positif, menuju ke sumber negatif."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan rumus berikut sesuai besaran yang dihasilkannya."
    kategori:
      - { id: medan, label: "Menghasilkan Medan Listrik (E)" }
      - { id: gaya, label: "Menghasilkan Gaya (F)" }
    item:
      - { id: t1, teks: "F/q", kategoriBenarId: medan }
      - { id: t2, teks: "kQ/r²", kategoriBenarId: medan }
      - { id: t3, teks: "qE", kategoriBenarId: gaya }
      - { id: t4, teks: "kq₁q₂/r²", kategoriBenarId: gaya }
    penjelasan: "F/q dan kQ/r² sama-sama menghasilkan medan listrik (E) -- satu dari definisi umum, satu dari sumber muatan titik. qE dan kq₁q₂/r² sama-sama menghasilkan gaya (F) -- satu dari medan yang sudah ada, satu dari Hukum Coulomb langsung."
    skor: 1
draft: false
---
