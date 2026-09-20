---
judul: "Latihan TKA: Pengukuran & Alat Ukur"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan -- 6 tipe interaktif (pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, drag & drop) dengan porsi soal HOTS (penalaran, bukan sekadar hafalan), sesuai kisi-kisi resmi elemen Kinematika (Pengukuran dengan alat ukur)."
materiSlug: alat-ukur
pinHash: 8230b2a045b5c6ac48ad0634c36754bfe4a1060ab27e9c7e173933df9cc25239
pinBerlakuHingga: 2027-03-20
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Untuk mengukur diameter kawat tembaga yang sangat tipis (kurang dari 1 mm), alat ukur panjang yang paling tepat digunakan adalah..."
    pilihan:
      - { id: a, teks: "Penggaris" }
      - { id: b, teks: "Meteran gulung" }
      - { id: c, teks: "Jangka sorong" }
      - { id: d, teks: "Mikrometer sekrup" }
    jawabanBenarId: d
    penjelasan: "Mikrometer sekrup punya ketelitian tertinggi (biasanya 0,01 mm) di antara alat ukur panjang, sehingga paling sesuai untuk benda yang sangat tipis/kecil seperti kawat."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Seorang siswa mengukur tebal balok dengan jangka sorong: skala utama menunjukkan angka 4,2 cm, dan garis skala nonius yang paling berimpit dengan skala utama berada di angka ke-6 (ketelitian jangka sorong 0,01 cm). Hasil pengukurannya adalah..."
    pilihan:
      - { id: a, teks: "4,20 cm" }
      - { id: b, teks: "4,26 cm" }
      - { id: c, teks: "4,60 cm" }
      - { id: d, teks: "4,62 cm" }
    jawabanBenarId: b
    penjelasan: "Hasil pengukuran jangka sorong = skala utama + (angka skala nonius × ketelitian) = 4,2 cm + (6 × 0,01 cm) = 4,2 cm + 0,06 cm = 4,26 cm."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Hasil pembacaan mikrometer sekrup menunjukkan skala utama 5,5 mm dan skala putar di angka 28 (ketelitian mikrometer 0,01 mm). Diameter benda yang terukur adalah..."
    pilihan:
      - { id: a, teks: "5,50 mm" }
      - { id: b, teks: "5,78 mm" }
      - { id: c, teks: "5,82 mm" }
      - { id: d, teks: "8,30 mm" }
    jawabanBenarId: b
    penjelasan: "Hasil pengukuran mikrometer sekrup = skala utama + (skala putar × ketelitian) = 5,5 mm + (28 × 0,01 mm) = 5,5 mm + 0,28 mm = 5,78 mm."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Kelompok A dan Kelompok B sama-sama mengukur panjang meja yang sama sebanyak 5 kali. Data Kelompok A sangat berdekatan satu sama lain, tetapi jauh dari nilai sebenarnya (hasil pengukuran alat kalibrasi acuan). Data Kelompok B lebih bervariasi, tetapi rata-ratanya sangat dekat dengan nilai sebenarnya. Kesimpulan yang tepat adalah..."
    pilihan:
      - { id: a, teks: "Kelompok A teliti namun tidak tepat; Kelompok B tidak teliti namun tepat" }
      - { id: b, teks: "Kelompok A tepat namun tidak teliti; Kelompok B teliti namun tidak tepat" }
      - { id: c, teks: "Kedua kelompok sama-sama teliti dan tepat" }
      - { id: d, teks: "Kedua kelompok sama-sama tidak teliti dan tidak tepat" }
    jawabanBenarId: a
    penjelasan: "Data yang konsisten/berdekatan satu sama lain menunjukkan ketelitian (presisi) tinggi, terlepas dari benar-tidaknya. Data yang rata-ratanya dekat nilai sebenarnya menunjukkan ketepatan (akurasi) tinggi, meski variasinya besar. Jadi Kelompok A teliti tapi tidak tepat, Kelompok B tidak teliti tapi tepat."
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Massa dan berat adalah besaran yang sama persis, sehingga alat ukurnya juga sama."
    jawabanBenar: false
    penjelasan: "Salah -- massa (diukur dengan neraca) berkaitan dengan banyaknya materi, sedangkan berat adalah gaya gravitasi (w = mg), diukur dengan alat yang berbeda."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Dari penggaris, jangka sorong, sampai mikrometer sekrup, ketelitiannya semakin tinggi secara berurutan."
    jawabanBenar: true
    penjelasan: "Benar -- penggaris (skala terkecil ~1 mm) < jangka sorong (lebih teliti, baca skala nonius) < mikrometer sekrup (paling teliti, untuk benda sangat kecil)."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah mistar memiliki skala terkecil 1 mm. Ketidakpastian pengukuran TUNGGAL menggunakan mistar tersebut adalah ... mm."
    angka: true
    toleransi: 0
    jawabanBenar: ["0.5"]
    penjelasan: "Untuk pengukuran tunggal, ketidakpastian diambil setengah dari skala terkecil alat: ½ × 1 mm = 0,5 mm."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Lima kali pengukuran diameter sebuah kelereng menghasilkan data: 1,52 cm; 1,54 cm; 1,53 cm; 1,52 cm; dan 1,54 cm. Nilai rata-rata hasil pengukuran tersebut adalah ... cm."
    angka: true
    toleransi: 0.01
    jawabanBenar: ["1.53"]
    penjelasan: "Rata-rata = (1,52 + 1,54 + 1,53 + 1,52 + 1,54) / 5 = 7,65 / 5 = 1,53 cm."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Hasil pengukuran panjang suatu benda dilaporkan sebagai x = (12,5 ± 0,1) cm. Berapa persen ketidakpastian relatif pengukuran tersebut? (bulatkan ke satu angka desimal, tulis angkanya saja tanpa simbol %)"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["0.8"]
    penjelasan: "Ketidakpastian relatif = (Δx / x̄) × 100% = (0,1 / 12,5) × 100% = 0,8%. Semakin kecil persentase ini, semakin bisa dipercaya hasil pengukurannya dibanding nilai yang diukur."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan besaran dengan alat ukur mekanik yang sesuai."
    pasangan:
      - { id: p1, kiri: "Panjang benda berukuran kecil (butuh ketelitian tinggi)", kanan: "Jangka sorong" }
      - { id: p2, kiri: "Massa benda", kanan: "Neraca" }
      - { id: p3, kiri: "Selang waktu suatu peristiwa", kanan: "Stopwatch" }
      - { id: p4, kiri: "Diameter kawat yang sangat tipis", kanan: "Mikrometer sekrup" }
    penjelasan: "Tiap besaran punya alat ukur khususnya sendiri -- kunci utamanya: kenali dulu besaran apa yang mau diukur DAN seberapa kecil/teliti kebutuhannya, baru pilih alatnya."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan situasi pengukuran berikut dengan alat yang PALING tepat digunakan."
    pasangan:
      - { id: p1, kiri: "Mengukur ketebalan selembar kertas HVS", kanan: "Mikrometer sekrup" }
      - { id: p2, kiri: "Mengukur diameter luar sebuah pipa PVC", kanan: "Jangka sorong" }
      - { id: p3, kiri: "Mengukur panjang meja belajar", kanan: "Penggaris atau meteran" }
      - { id: p4, kiri: "Mengukur waktu tempuh lari 100 meter", kanan: "Stopwatch" }
    penjelasan: "Bukan cuma soal besaran apa yang diukur, tapi juga ukuran benda & kebutuhan ketelitiannya -- kertas HVS sangat tipis (butuh mikrometer), meja cukup pakai penggaris/meteran biasa."
    skor: 2
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah membaca hasil pengukuran dengan jangka sorong, dari yang paling awal."
    item:
      - { id: i1, teks: "Tempatkan benda di antara rahang yang sesuai (luar/dalam/kedalaman)" }
      - { id: i2, teks: "Kunci posisi rahang supaya tidak bergeser" }
      - { id: i3, teks: "Baca skala utama (angka di depan garis nol skala nonius)" }
      - { id: i4, teks: "Baca skala nonius (garis yang paling sejajar dengan skala utama)" }
      - { id: i5, teks: "Jumlahkan hasil skala utama + skala nonius" }
    penjelasan: "Hasil pengukuran jangka sorong = skala utama + pembacaan skala nonius -- keduanya harus dibaca berurutan, bukan sekaligus ditebak."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah yang benar untuk melaporkan hasil pengukuran BERULANG suatu besaran, dari yang paling awal."
    item:
      - { id: i1, teks: "Ukur besaran yang sama secara berulang (misalnya 5-10 kali)" }
      - { id: i2, teks: "Hitung nilai rata-rata (x̄) dari seluruh data pengukuran" }
      - { id: i3, teks: "Hitung ketidakpastian (Δx) dari sebaran data terhadap rata-rata" }
      - { id: i4, teks: "Laporkan hasil akhir dalam bentuk x = (x̄ ± Δx) lengkap dengan satuannya" }
    penjelasan: "Pengukuran berulang bukan cuma diulang lalu diambil satu angka saja -- alurnya selalu: ukur berulang, rata-ratakan, hitung ketidakpastiannya, baru dilaporkan lengkap dengan rentang kepercayaannya."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sebagai contoh Ketelitian atau Ketepatan."
    kategori:
      - { id: ketelitian, label: "Ketelitian" }
      - { id: ketepatan, label: "Ketepatan" }
    item:
      - { id: t1, teks: "Seberapa rapat/konsisten hasil pengukuran berulang satu sama lain", kategoriBenarId: ketelitian }
      - { id: t2, teks: "Hasil pengukuran berulang selalu mirip satu sama lain, meski belum tentu mendekati nilai sebenarnya", kategoriBenarId: ketelitian }
      - { id: t3, teks: "Seberapa dekat hasil pengukuran dengan nilai sebenarnya/acuan", kategoriBenarId: ketepatan }
      - { id: t4, teks: "Hasil pengukuran tepat sesuai nilai acuan, walau sedikit bervariasi antar percobaan", kategoriBenarId: ketepatan }
    penjelasan: "Ketelitian (presisi) = konsistensi hasil. Ketepatan (akurasi) = kedekatan dengan nilai sebenarnya. Alat/pengukur bisa teliti tapi tidak tepat, atau sebaliknya."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan sumber kesalahan pengukuran berikut: apakah pengaruhnya BERKURANG kalau pengukuran diulang berkali-kali lalu dirata-ratakan, atau TIDAK BERKURANG walau diulang berapa kali pun."
    kategori:
      - { id: berkurang, label: "Berkurang dengan Pengukuran Berulang" }
      - { id: tidak-berkurang, label: "Tidak Berkurang dengan Pengukuran Berulang" }
    item:
      - { id: t1, teks: "Neraca yang belum di-nolkan (tara) sebelum dipakai, sehingga semua hasil bergeser sama besar", kategoriBenarId: tidak-berkurang }
      - { id: t2, teks: "Variasi kecil hasil pengukuran berulang akibat kondisi yang tidak persis sama tiap kali (getaran, posisi mata sedikit berbeda)", kategoriBenarId: berkurang }
      - { id: t3, teks: "Stopwatch yang berjalan sedikit lebih cepat dari seharusnya akibat kerusakan internal", kategoriBenarId: tidak-berkurang }
      - { id: t4, teks: "Sedikit perbedaan hasil tiap kali mengulang pengukuran panjang benda yang sama dengan penggaris yang sama", kategoriBenarId: berkurang }
    penjelasan: "Kesalahan ACAK (getaran, variasi baca kecil) memang berubah-ubah ke dua arah, jadi rata-rata dari banyak pengukuran akan saling meniadakan. Kesalahan SISTEMATIS (alat belum dikalibrasi/tara, kerusakan alat) selalu menggeser hasil ke arah yang SAMA setiap kali -- diulang berapa kali pun, hasilnya tetap bergeser, harus diperbaiki dari alatnya, bukan dari jumlah pengulangan."
    skor: 2
draft: false
---
