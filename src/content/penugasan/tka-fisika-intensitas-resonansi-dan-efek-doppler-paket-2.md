---
judul: "Latihan TKA: Intensitas, Resonansi & Efek Doppler (Paket 2)"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan (Paket 2, soal baru) -- 6 tipe interaktif dengan porsi HOTS, mencakup efek Doppler karena pendengar bergerak, penggabungan taraf intensitas, dan pipa organa yang belum dibahas di Paket 1."
materiSlug: intensitas-bunyi-dan-efek-doppler
pinHash: 8d37f2e1f46472302f7e18af0fd91aeb6cf90fba3eb12859b7f5352d6eae5872
pinBerlakuHingga: 2027-03-20
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Pada pipa organa TERTUTUP (satu ujung tertutup, satu terbuka), hubungan panjang kolom udara (L) dengan panjang gelombang nada dasarnya (λ) adalah..."
    pilihan:
      - { id: a, teks: "L = ¼λ" }
      - { id: b, teks: "L = ½λ" }
      - { id: c, teks: "L = λ" }
      - { id: d, teks: "L = 2λ" }
    jawabanBenarId: a
    penjelasan: "Pipa organa tertutup: L = ¼λ untuk nada dasar. Ini BEDA dari pipa organa terbuka (kedua ujung terbuka), yang nada dasarnya L = ½λ."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Seorang pendengar bergerak MENDEKATI sumber bunyi yang diam dengan kecepatan 17 m/s. Jika frekuensi asli sumber bunyi 640 Hz dan cepat rambat bunyi di udara 340 m/s, frekuensi bunyi yang didengar pendengar tersebut adalah..."
    pilihan:
      - { id: a, teks: "608 Hz" }
      - { id: b, teks: "640 Hz" }
      - { id: c, teks: "672 Hz" }
      - { id: d, teks: "704 Hz" }
    jawabanBenarId: c
    penjelasan: "Untuk pendengar mendekati sumber diam: f' = f × (v+vp)/v = 640 × (340+17)/340 = 640 × 357/340 = 640 × 1,05 = 672 Hz."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Tiga buah sumber bunyi identik, masing-masing menghasilkan intensitas 2×10⁻⁶ W/m² jika dibunyikan sendiri-sendiri. Jika ketiganya dibunyikan bersamaan di titik yang sama, intensitas total yang dihasilkan adalah..."
    pilihan:
      - { id: a, teks: "2×10⁻⁶ W/m²" }
      - { id: b, teks: "4×10⁻⁶ W/m²" }
      - { id: c, teks: "6×10⁻⁶ W/m²" }
      - { id: d, teks: "8×10⁻⁶ W/m²" }
    jawabanBenarId: c
    penjelasan: "Intensitas (berbeda dengan taraf intensitas) BISA dijumlahkan langsung: I total = 3 × (2×10⁻⁶) = 6×10⁻⁶ W/m²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Sebuah sumber bunyi tunggal menghasilkan taraf intensitas 60 dB pada suatu titik. Jika ada DUA sumber bunyi identik (masing-masing 60 dB jika sendirian) dibunyikan bersamaan di titik yang sama, taraf intensitas gabungannya adalah..."
    pilihan:
      - { id: a, teks: "60 dB" }
      - { id: b, teks: "63 dB" }
      - { id: c, teks: "66 dB" }
      - { id: d, teks: "120 dB" }
    jawabanBenarId: b
    penjelasan: "TI TIDAK BISA dijumlahkan langsung! Konversi dulu ke intensitas: I = I₀×10^(60/10) = 10⁻⁶ W/m². Dua sumber: I total = 2×10⁻⁶ W/m². Konversi balik: TI = 10 log(2×10⁻⁶/10⁻¹²) = 10 log(2×10⁶) ≈ 10×6,3 = 63 dB. (Kesalahan umum: menjumlahkan langsung 60+60=120 dB, jauh dari kenyataan.)"
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Pipa organa TERBUKA pada kedua ujungnya menghasilkan nada dasar dengan panjang kolom udara sama dengan ¼ panjang gelombang."
    jawabanBenar: false
    penjelasan: "Salah -- itu ciri pipa organa TERTUTUP. Pipa organa TERBUKA (kedua ujung terbuka) punya panjang kolom udara nada dasar L = ½λ, bukan ¼λ."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Taraf intensitas bunyi (dalam desibel) bisa dijumlahkan langsung seperti angka biasa kalau ada dua sumber bunyi identik menyala bersamaan."
    jawabanBenar: false
    penjelasan: "Salah -- taraf intensitas (dB) bersifat LOGARITMIK, tidak bisa dijumlahkan langsung. Harus dikonversi dulu ke intensitas (W/m²), dijumlahkan, baru dikonversi kembali ke desibel."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Seorang pendengar bergerak mendekati sumber bunyi yang diam dengan kecepatan 20 m/s. Jika frekuensi asli sumber bunyi 680 Hz dan cepat rambat bunyi di udara 340 m/s, frekuensi bunyi yang didengar pendengar tersebut adalah ... Hz."
    angka: true
    toleransi: 0
    jawabanBenar: ["720"]
    penjelasan: "f' = f × (v+vp)/v = 680 × (340+20)/340 = 680 × 360/340 = 720 Hz."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Empat buah sumber bunyi identik, masing-masing menghasilkan intensitas 1,5×10⁻⁵ W/m² jika dibunyikan sendiri-sendiri. Jika keempatnya dibunyikan bersamaan di titik yang sama, intensitas total yang dihasilkan adalah ... W/m² (tulis dalam bentuk desimal biasa, misalnya 0.00006)."
    angka: true
    toleransi: 0.000001
    jawabanBenar: ["0.00006"]
    penjelasan: "I total = 4 × (1,5×10⁻⁵) = 6×10⁻⁵ = 0,00006 W/m²."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah sumber bunyi tunggal menghasilkan taraf intensitas 50 dB pada suatu titik. Jika ada SEPULUH sumber bunyi identik (masing-masing 50 dB jika sendirian) dibunyikan bersamaan di titik yang sama, taraf intensitas gabungannya adalah ... dB."
    angka: true
    toleransi: 0
    jawabanBenar: ["60"]
    penjelasan: "I satu sumber = I₀×10^(50/10) = 10⁻⁷ W/m². Sepuluh sumber: I total = 10×10⁻⁷ = 10⁻⁶ W/m². TI = 10 log(10⁻⁶/10⁻¹²) = 10 log(10⁶) = 60 dB. Kebetulan sepuluh kali lipat intensitas persis menambah 10 dB."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan istilah dengan definisinya."
    pasangan:
      - { id: p1, kiri: "Pipa Organa Terbuka", kanan: "Pipa dengan kedua ujung terbuka; panjang kolom udara nada dasar L = ½λ" }
      - { id: p2, kiri: "Pipa Organa Tertutup", kanan: "Pipa dengan satu ujung tertutup; panjang kolom udara nada dasar L = ¼λ" }
      - { id: p3, kiri: "Efek Doppler karena Pendengar Bergerak", kanan: "Frekuensi yang terdengar berubah karena PENDENGAR yang bergerak, sumber bunyi tetap diam" }
    penjelasan: "Efek Doppler bisa terjadi karena sumber bergerak, pendengar bergerak, atau keduanya sekaligus -- rumusnya sedikit berbeda tergantung siapa yang bergerak."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan fenomena sehari-hari berikut dengan konsep yang paling mendasarinya."
    pasangan:
      - { id: p1, kiri: "Seruling (pipa dengan kedua ujung terbuka)", kanan: "Pipa organa terbuka" }
      - { id: p2, kiri: "Meniup mulut botol kaca yang salah satu ujungnya tertutup, menghasilkan nada tertentu", kanan: "Pipa organa tertutup" }
      - { id: p3, kiri: "Pendengar naik motor mendekati mobil yang sedang membunyikan klakson (mobil diam)", kanan: "Efek Doppler karena pendengar bergerak" }
    penjelasan: "Alat musik tiup memanfaatkan resonansi kolom udara -- panjang kolom udaranya menentukan nada yang dihasilkan, dan jenis pipanya (terbuka/tertutup) menentukan rumus panjang gelombang yang dipakai."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menentukan panjang kolom udara pipa organa TERTUTUP dari frekuensi nada dasar yang diinginkan, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan cepat rambat bunyi (v) di udara dan frekuensi nada dasar (f) yang diinginkan" }
      - { id: i2, teks: "Hitung panjang gelombang menggunakan rumus λ = v/f" }
      - { id: i3, teks: "Sadari bahwa untuk pipa tertutup, panjang kolom udara nada dasar L = ¼λ (bukan ½λ seperti pipa terbuka)" }
      - { id: i4, teks: "Hitung panjang kolom udara dengan L = ¼ × (v/f)" }
    penjelasan: "Kesalahan paling umum: memakai rumus pipa terbuka (½λ) untuk pipa tertutup, atau sebaliknya -- selalu pastikan dulu jenis pipanya sebelum memilih rumus."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menggabungkan taraf intensitas dari beberapa sumber bunyi identik, dari yang paling awal."
    item:
      - { id: i1, teks: "Konversi taraf intensitas (dB) tiap sumber menjadi intensitas (I) dalam W/m², menggunakan I = I₀ × 10^(TI/10)" }
      - { id: i2, teks: "Jumlahkan intensitas (I) dari seluruh sumber bunyi (intensitas bisa dijumlahkan langsung, beda dengan taraf intensitas)" }
      - { id: i3, teks: "Konversi intensitas total tersebut kembali menjadi taraf intensitas gabungan, menggunakan TI = 10 log(I total/I₀)" }
      - { id: i4, teks: "Jangan pernah menjumlahkan nilai desibel (dB) secara langsung -- hasilnya akan jauh meleset dari kenyataan" }
    penjelasan: "Sifat logaritmik desibel membuat penjumlahan intuitif (60+60=120) SANGAT keliru -- hasil sebenarnya cuma naik sedikit (60 -> 63 dB untuk dua sumber identik)."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan ciri berikut sebagai ciri Pipa Organa Terbuka atau Pipa Organa Tertutup."
    kategori:
      - { id: terbuka, label: "Pipa Organa Terbuka" }
      - { id: tertutup, label: "Pipa Organa Tertutup" }
    item:
      - { id: t1, teks: "Kedua ujung pipa sama-sama terbuka", kategoriBenarId: terbuka }
      - { id: t2, teks: "Satu ujung pipa tertutup, satu ujung terbuka", kategoriBenarId: tertutup }
      - { id: t3, teks: "Panjang kolom udara nada dasar = ½ × panjang gelombang", kategoriBenarId: terbuka }
      - { id: t4, teks: "Panjang kolom udara nada dasar = ¼ × panjang gelombang", kategoriBenarId: tertutup }
    penjelasan: "Perbedaan mendasarnya ada pada JUMLAH ujung yang terbuka -- ini menentukan pola gelombang berdiri yang bisa terbentuk di dalam pipa, dan akhirnya menentukan rumus panjang kolom udaranya."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan skenario Efek Doppler berikut: apakah terjadi karena Sumber Bergerak, atau karena Pendengar Bergerak."
    kategori:
      - { id: sumber, label: "Karena Sumber Bergerak" }
      - { id: pendengar, label: "Karena Pendengar Bergerak" }
    item:
      - { id: t1, teks: "Ambulans yang melaju kencang mendekati orang yang sedang berdiri diam di pinggir jalan", kategoriBenarId: sumber }
      - { id: t2, teks: "Seseorang naik motor mendekati sebuah pabrik yang sirinenya berbunyi terus-menerus di tempat", kategoriBenarId: pendengar }
      - { id: t3, teks: "Kereta yang melaju menjauhi stasiun sambil membunyikan peluit", kategoriBenarId: sumber }
      - { id: t4, teks: "Seseorang berlari menjauhi speaker musik yang diam di taman", kategoriBenarId: pendengar }
    penjelasan: "Baik sumber maupun pendengar yang bergerak sama-sama menghasilkan efek Doppler (frekuensi berubah), tapi rumus yang dipakai sedikit berbeda tergantung siapa yang bergerak -- penting untuk mengenali dulu SIAPA yang bergerak sebelum memilih rumus."
    skor: 2
draft: false
---
