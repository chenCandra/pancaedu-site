---
judul: "Angka Penting dan Notasi Ilmiah"
kelas: X
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar aturan angka penting, notasi ilmiah, awalan satuan, dan aturan operasi hitung."
materiSlug: angka-penting
pinHash: dc9a6ad25af10a4c36876a26b19ea3a2c10a40d610018a46a350de5624322eeb
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Berapa jumlah angka penting pada bilangan 205?"
    pilihan:
      - { id: a, teks: "1" }
      - { id: b, teks: "2" }
      - { id: c, teks: "3" }
      - { id: d, teks: "4" }
    jawabanBenarId: c
    penjelasan: "Angka nol di ANTARA dua angka bukan nol termasuk angka penting -- jadi 2, 0, dan 5 semuanya dihitung. Totalnya 3."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Bilangan 0,000045 dengan 2 angka penting, kalau ditulis dalam notasi ilmiah menjadi..."
    pilihan:
      - { id: a, teks: "45 × 10⁻⁶" }
      - { id: b, teks: "4,5 × 10⁻⁵" }
      - { id: c, teks: "0,45 × 10⁻⁴" }
      - { id: d, teks: "4,50 × 10⁻⁵" }
    jawabanBenarId: b
    penjelasan: "Notasi ilmiah ditulis sebagai satu angka bukan nol di depan koma. Karena cuma 2 angka penting (4 dan 5) yang perlu dipertahankan, bentuknya 4,5 × 10⁻⁵."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Hasil dari 2,5 × 3,42 menurut aturan angka penting adalah..."
    pilihan:
      - { id: a, teks: "8,55" }
      - { id: b, teks: "8,6" }
      - { id: c, teks: "9" }
      - { id: d, teks: "8,550" }
    jawabanBenarId: b
    penjelasan: "Pada perkalian, hasil dibulatkan sampai jumlah angka penting PALING SEDIKIT. 2,5 cuma punya 2 angka penting, jadi 8,55 dibulatkan jadi 2 angka penting: 8,6."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "1 μC (mikrocoulomb) setara dengan..."
    pilihan:
      - { id: a, teks: "10³ C" }
      - { id: b, teks: "10⁻³ C" }
      - { id: c, teks: "10⁻⁶ C" }
      - { id: d, teks: "10⁻⁹ C" }
    jawabanBenarId: c
    penjelasan: "Awalan 'mikro' (μ) mewakili faktor pengali 10⁻⁶ -- 1 μC = 1 × 10⁻⁶ C."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "245 (bilangan bulat tanpa tanda koma sama sekali) tetap punya 3 angka penting."
    jawabanBenar: true
    penjelasan: "Benar -- angka penting soal ketelitian pengukuran, bukan soal ada-tidaknya tanda koma. Semua angka bukan nol (2, 4, 5) dihitung."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Pada operasi PENJUMLAHAN/PENGURANGAN, hasil dibulatkan berdasarkan jumlah ANGKA PENTING paling sedikit di antara bilangan yang dioperasikan."
    jawabanBenar: false
    penjelasan: "Salah -- itu aturan untuk PERKALIAN/PEMBAGIAN. Penjumlahan/pengurangan berpatokan pada jumlah angka DI BELAKANG KOMA paling sedikit."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Bilangan eksak (hasil membilang langsung, mis. '3 buah apel') dianggap punya angka penting tak terhingga."
    jawabanBenar: true
    penjelasan: "Benar -- bilangan eksak (bukan hasil pengukuran alat) dianggap pasti 100%, jadi tidak membatasi ketelitian hasil operasi hitung."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Hasil dari 12,34 + 3,1 menurut aturan angka penting adalah... (jawab dengan angka, pakai titik atau koma untuk desimal)"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["15.4"]
    penjelasan: "12,34 + 3,1 = 15,44 secara hitungan murni, tapi 3,1 cuma diukur sampai 1 angka di belakang koma -- jadi hasilnya dibulatkan jadi 15,4."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Berapa jumlah angka penting pada bilangan 4,20 × 10⁵? (jawab dengan angka)"
    angka: true
    toleransi: 0
    jawabanBenar: ["3"]
    penjelasan: "Pada notasi ilmiah, yang dihitung cuma digit koefisiennya (4, 2, 0) -- pangkat 10 tidak ikut dihitung. Totalnya 3 angka penting."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "250 nm bila ditulis dalam notasi ilmiah menjadi (koefisien) × 10⁻⁷ m. Berapa nilai koefisiennya?"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["2.5"]
    penjelasan: "250 nm = 250 × 10⁻⁹ m = 2,5 × 10⁻⁷ m."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan awalan satuan dengan faktor pengalinya."
    pasangan:
      - { id: p1, kiri: "Kilo", kanan: "10³" }
      - { id: p2, kiri: "Mili", kanan: "10⁻³" }
      - { id: p3, kiri: "Mikro", kanan: "10⁻⁶" }
      - { id: p4, kiri: "Nano", kanan: "10⁻⁹" }
    penjelasan: "Kilo = 10³, Mili = 10⁻³, Mikro = 10⁻⁶, Nano = 10⁻⁹ -- awalan-awalan ini cuma 'nama panggilan' buat pangkat 10 tertentu."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan operasi hitung dengan patokan pembulatan angka pentingnya."
    pasangan:
      - { id: p1, kiri: "Penjumlahan / Pengurangan", kanan: "Angka di belakang koma paling sedikit" }
      - { id: p2, kiri: "Perkalian / Pembagian", kanan: "Jumlah angka penting paling sedikit" }
    penjelasan: "Tambah-kurang -> lihat angka di belakang koma. Kali-bagi -> lihat total angka pentingnya. Dua aturan ini paling sering tertukar."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menentukan notasi ilmiah suatu bilangan, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan digit-digit yang termasuk angka penting" }
      - { id: i2, teks: "Tulis satu angka bukan nol di depan koma sebagai digit pertama" }
      - { id: i3, teks: "Hitung berapa kali koma harus digeser untuk sampai ke posisi itu" }
      - { id: i4, teks: "Tulis pangkat 10 sesuai jumlah pergeseran koma (positif untuk bilangan besar, negatif untuk bilangan kecil)" }
    penjelasan: "Angka penting harus dikenali dulu sebelum menentukan koefisien, baru kemudian pergeseran koma menentukan besar pangkat 10-nya."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan posisi angka nol berikut, apakah termasuk angka penting atau tidak."
    kategori:
      - { id: termasuk, label: "Termasuk Angka Penting" }
      - { id: bukan, label: "BUKAN Angka Penting" }
    item:
      - { id: t1, teks: "Nol di antara dua angka bukan nol (mis. 205)", kategoriBenarId: termasuk }
      - { id: t2, teks: "Nol di depan angka bukan nol / awal bilangan (mis. 0,0025)", kategoriBenarId: bukan }
      - { id: t3, teks: "Nol di belakang koma setelah angka bukan nol (mis. 2,50)", kategoriBenarId: termasuk }
      - { id: t4, teks: "Angka pada pangkat 10 di notasi ilmiah (mis. 10⁻⁵)", kategoriBenarId: bukan }
    penjelasan: "Nol di antara angka bukan nol & nol di belakang koma (setelah angka bukan nol) itu penting. Nol di depan bilangan cuma penanda tempat, dan pangkat 10 pada notasi ilmiah memang tidak pernah dihitung sebagai angka penting."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sesuai jenis operasi hitungnya."
    kategori:
      - { id: tambah, label: "Penjumlahan / Pengurangan" }
      - { id: kali, label: "Perkalian / Pembagian" }
    item:
      - { id: t1, teks: "Patokan: jumlah angka di belakang koma paling sedikit", kategoriBenarId: tambah }
      - { id: t2, teks: "Patokan: jumlah angka penting paling sedikit", kategoriBenarId: kali }
      - { id: t3, teks: "Contoh: 12,34 + 3,1 = 15,4", kategoriBenarId: tambah }
      - { id: t4, teks: "Contoh: 2,5 × 3,42 = 8,6", kategoriBenarId: kali }
    penjelasan: "Penjumlahan/pengurangan berpatokan pada angka di belakang koma; perkalian/pembagian berpatokan pada total angka penting."
    skor: 1
draft: false
---
