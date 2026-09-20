---
judul: "Latihan TKA: Momen Gaya & Momen Inersia (Paket 2)"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan (Paket 2, soal baru) -- 6 tipe interaktif dengan porsi HOTS, mencakup kopel, momen inersia sistem partikel, dan hubungan τ=Iα yang belum dibahas di Paket 1."
materiSlug: dinamika-rotasi-dan-energi-kinetik-rotasi
pinHash: b50455d993bc1d4322bdb6bfc95d113d30b3f300136f2934f124d9e3ea8e6117
pinBerlakuHingga: 2027-03-20
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Momen inersia total sebuah sistem yang terdiri dari beberapa partikel dihitung dengan cara..."
    pilihan:
      - { id: a, teks: "Mengalikan seluruh massa partikel" }
      - { id: b, teks: "Menjumlahkan hasil kali massa dan kuadrat jarak (m×r²) tiap partikel" }
      - { id: c, teks: "Mengambil rata-rata jarak seluruh partikel ke sumbu" }
      - { id: d, teks: "Menjumlahkan massa dibagi jarak tiap partikel" }
    jawabanBenarId: b
    penjelasan: "Momen inersia total sistem = Σ(m × r²) -- jumlahkan hasil kali massa dan kuadrat jarak untuk SETIAP partikel penyusun sistem terhadap sumbu putarnya."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Dua partikel berada pada sebuah batang tak bermassa: partikel A bermassa 2 kg pada jarak 1 m dari poros, dan partikel B bermassa 3 kg pada jarak 2 m dari poros. Momen inersia total sistem tersebut adalah..."
    pilihan:
      - { id: a, teks: "5 kg·m²" }
      - { id: b, teks: "8 kg·m²" }
      - { id: c, teks: "14 kg·m²" }
      - { id: d, teks: "20 kg·m²" }
    jawabanBenarId: c
    penjelasan: "I = ΣmR² = (2×1²) + (3×2²) = 2 + 12 = 14 kg·m²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sebuah benda dengan momen inersia 4 kg·m² dikenai torsi sebesar 20 N·m. Percepatan sudut yang dihasilkan adalah..."
    pilihan:
      - { id: a, teks: "0,2 rad/s²" }
      - { id: b, teks: "5 rad/s²" }
      - { id: c, teks: "16 rad/s²" }
      - { id: d, teks: "80 rad/s²" }
    jawabanBenarId: b
    penjelasan: "τ = I × α -> α = τ/I = 20/4 = 5 rad/s²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Dua gaya sejajar, masing-masing besarnya 10 N, bekerja pada sebuah roda dengan arah BERLAWANAN pada dua titik yang berjarak 0,4 m satu sama lain (membentuk kopel). Besar torsi total yang dihasilkan kopel tersebut adalah..."
    pilihan:
      - { id: a, teks: "0 N·m, karena kedua gaya saling meniadakan" }
      - { id: b, teks: "2,5 N·m" }
      - { id: c, teks: "4 N·m" }
      - { id: d, teks: "8 N·m" }
    jawabanBenarId: c
    penjelasan: "Meski resultan GAYA-nya nol (saling meniadakan karena berlawanan arah), resultan TORSI-nya TIDAK nol -- ini justru ciri khas kopel: menghasilkan torsi murni tanpa gerak translasi. τ = F × d = 10 × 0,4 = 4 N·m."
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Momen inersia sistem yang terdiri dari beberapa partikel dihitung dengan menjumlahkan m×r² tiap partikel."
    jawabanBenar: true
    penjelasan: "Benar -- I_total = Σ(m×r²), dijumlahkan dari seluruh partikel penyusun sistem, masing-masing dihitung terhadap sumbu putar yang sama."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Kopel (couple) -- yaitu dua gaya sejajar sama besar tapi berlawanan arah -- menghasilkan gerak TRANSLASI (gerak lurus) pada benda."
    jawabanBenar: false
    penjelasan: "Salah -- kopel menghasilkan gerak ROTASI murni, BUKAN translasi. Karena kedua gaya berlawanan arah dan sama besar, resultan gayanya nol (tidak ada translasi), tapi torsinya tetap ada karena garis kerjanya berbeda."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Dua partikel berada pada sebuah batang tak bermassa: partikel A bermassa 1 kg pada jarak 2 m dari poros, dan partikel B bermassa 4 kg pada jarak 1 m dari poros. Momen inersia total sistem tersebut adalah ... kg·m²."
    angka: true
    toleransi: 0
    jawabanBenar: ["8"]
    penjelasan: "I = ΣmR² = (1×2²) + (4×1²) = 4 + 4 = 8 kg·m²."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah benda dengan momen inersia 5 kg·m² dikenai torsi sebesar 15 N·m. Percepatan sudut yang dihasilkan adalah ... rad/s²."
    angka: true
    toleransi: 0
    jawabanBenar: ["3"]
    penjelasan: "α = τ/I = 15/5 = 3 rad/s²."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Dua gaya sejajar, masing-masing besarnya 8 N, bekerja berlawanan arah pada roda kemudi yang berjarak 0,5 m satu sama lain (membentuk kopel). Besar torsi total kopel tersebut adalah ... N·m."
    angka: true
    toleransi: 0
    jawabanBenar: ["4"]
    penjelasan: "τ = F × d = 8 × 0,5 = 4 N·m."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan istilah dengan definisinya."
    pasangan:
      - { id: p1, kiri: "Kopel", kanan: "Pasangan gaya sejajar sama besar berlawanan arah, menghasilkan torsi murni tanpa resultan gaya translasi" }
      - { id: p2, kiri: "Momen Inersia Sistem", kanan: "Jumlah (m × r²) dari semua partikel penyusun benda terhadap sumbu putar" }
      - { id: p3, kiri: "τ = I × α", kanan: "'Hukum II Newton versi rotasi' -- torsi sama dengan momen inersia dikali percepatan sudut" }
    penjelasan: "τ = I × α adalah padanan rotasi dari ΣF = m × a pada gerak lurus -- momen inersia (I) berperan seperti massa (m), yaitu ukuran 'kelembaman' benda terhadap perubahan geraknya (rotasi vs translasi)."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan situasi sehari-hari berikut dengan konsep yang paling mendasarinya."
    pasangan:
      - { id: p1, kiri: "Memutar setir mobil dengan kedua tangan mendorong berlawanan arah di sisi kiri-kanan setir", kanan: "Kopel" }
      - { id: p2, kiri: "Membuka palang pintu dengan mendorong di ujung yang jauh dari engsel", kanan: "Torsi / lengan momen" }
      - { id: p3, kiri: "Roda gila (flywheel) mesin sengaja dibuat radiusnya besar supaya sulit dihentikan begitu berputar", kanan: "Momen inersia besar" }
    penjelasan: "Roda gila memanfaatkan momen inersia besar untuk menyimpan energi rotasi dan menjaga putaran mesin tetap stabil -- semakin besar momen inersianya, semakin sulit kecepatan putarnya berubah mendadak."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menghitung momen inersia total sebuah sistem yang terdiri dari beberapa partikel, dari yang paling awal."
    item:
      - { id: i1, teks: "Identifikasi massa (m) tiap partikel penyusun sistem" }
      - { id: i2, teks: "Identifikasi jarak (r) tiap partikel terhadap sumbu putar" }
      - { id: i3, teks: "Hitung m × r² untuk masing-masing partikel secara terpisah" }
      - { id: i4, teks: "Jumlahkan seluruh hasil m × r² dari semua partikel" }
    penjelasan: "Karena momen inersia bergantung pada KUADRAT jarak (r²), partikel yang jauh dari sumbu menyumbang momen inersia jauh lebih besar dibanding partikel yang dekat, meski massanya sama."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung percepatan sudut suatu benda berputar dari torsi yang diberikan, dari yang paling awal."
    item:
      - { id: i1, teks: "Hitung total torsi (τ) yang bekerja pada benda" }
      - { id: i2, teks: "Tentukan (atau hitung) momen inersia (I) benda tersebut terhadap sumbu putarnya" }
      - { id: i3, teks: "Gunakan rumus τ = I × α untuk menghubungkan torsi dan percepatan sudut" }
      - { id: i4, teks: "Selesaikan persamaan untuk mendapatkan percepatan sudut (α = τ/I)" }
    penjelasan: "Persis seperti mencari percepatan linear dari ΣF = ma, di sini kita mencari percepatan sudut dari τ = Iα -- rumusnya analog, tinggal ganti F→τ, m→I, dan a→α."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pasangan gaya berikut sebagai Kopel (Torsi Murni), atau BUKAN Kopel."
    kategori:
      - { id: kopel, label: "Kopel (Torsi Murni)" }
      - { id: bukan, label: "BUKAN Kopel" }
    item:
      - { id: t1, teks: "Dua gaya sejajar sama besar, BERLAWANAN arah, bekerja pada garis kerja yang berbeda", kategoriBenarId: kopel }
      - { id: t2, teks: "Dua gaya sejajar sama besar, SEARAH, bekerja pada benda", kategoriBenarId: bukan }
      - { id: t3, teks: "Sepasang tangan memutar kemudi mobil ke arah berlawanan", kategoriBenarId: kopel }
      - { id: t4, teks: "Satu gaya tunggal bekerja pada satu titik di benda", kategoriBenarId: bukan }
    penjelasan: "Syarat kopel: DUA gaya, sejajar, sama besar, dan BERLAWANAN arah pada garis kerja berbeda. Gaya searah (menghasilkan translasi, bukan torsi murni) atau gaya tunggal BUKAN termasuk kopel."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan skenario berikut berdasarkan besar momen inersianya: Momen Inersia Besar, atau Momen Inersia Kecil."
    kategori:
      - { id: besar, label: "Momen Inersia Besar" }
      - { id: kecil, label: "Momen Inersia Kecil" }
    item:
      - { id: t1, teks: "Roda gila (flywheel) mesin dengan sebagian besar massa terkonsentrasi di tepi luar", kategoriBenarId: besar }
      - { id: t2, teks: "Bola pejal kecil dan padat", kategoriBenarId: kecil }
      - { id: t3, teks: "Batang panjang yang diputar dari salah satu ujungnya (massa tersebar jauh dari sumbu)", kategoriBenarId: besar }
      - { id: t4, teks: "Cakram tipis dan kecil yang diputar dari titik pusatnya", kategoriBenarId: kecil }
    penjelasan: "Pola yang sama selalu berulang: semakin JAUH sebagian besar massa benda dari sumbu putarnya, semakin BESAR momen inersianya -- terlepas dari bentuk atau jenis bendanya."
    skor: 2
draft: false
---
