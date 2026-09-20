---
judul: "Hukum Pascal dan Hukum Archimedes"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar Hukum Pascal (dongkrak hidrolik) dan Hukum Archimedes (gaya apung)."
materiSlug: hukum-pascal-dan-hukum-archimedes
pinHash: e8e3aa0ed0000cdad71f050dde8fc9dfc7b6ed035b88ebe556b9a0ed06f3ac0c
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Hukum Pascal menyatakan bahwa tekanan yang diberikan pada fluida tertutup..."
    pilihan:
      - { id: a, teks: "Hanya diteruskan ke arah bawah" }
      - { id: b, teks: "Diteruskan sama besar ke segala arah" }
      - { id: c, teks: "Hilang seiring jarak" }
      - { id: d, teks: "Hanya berlaku untuk gas" }
    jawabanBenarId: b
    penjelasan: "Tekanan pada fluida tertutup diteruskan SAMA RATA ke segala arah -- inilah dasar kerja dongkrak hidrolik."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Dongkrak hidrolik punya piston kecil A1 = 10 cm² dan piston besar A2 = 250 cm². Kalau gaya input F1 = 200 N, berapa gaya keluar F2?"
    pilihan:
      - { id: a, teks: "200 N" }
      - { id: b, teks: "1.000 N" }
      - { id: c, teks: "5.000 N" }
      - { id: d, teks: "25.000 N" }
    jawabanBenarId: c
    penjelasan: "F2 = F1 × (A2/A1) = 200 × (250/10) = 200 × 25 = 5.000 N."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Gaya apung (Archimedes) yang dialami benda tercelup dirumuskan sebagai..."
    pilihan:
      - { id: a, teks: "Fa = m × g" }
      - { id: b, teks: "Fa = ρ_benda × g × V" }
      - { id: c, teks: "Fa = ρ_fluida × g × V_tercelup" }
      - { id: d, teks: "Fa = ρ_fluida / g" }
    jawabanBenarId: c
    penjelasan: "Fa = ρ_fluida × g × V_tercelup -- besarnya sama dengan berat fluida yang dipindahkan oleh benda."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Kapal besi yang berat bisa mengapung di air karena..."
    pilihan:
      - { id: a, teks: "Besi sebenarnya lebih ringan dari air" }
      - { id: b, teks: "Bentuk kapal berongga membuat massa jenis rata-rata kapal lebih kecil dari air" }
      - { id: c, teks: "Air laut punya massa jenis sangat besar" }
      - { id: d, teks: "Kapal punya mesin yang menahannya di permukaan" }
    jawabanBenarId: b
    penjelasan: "Badan kapal yang berongga membuat volumenya jauh lebih besar dari volume besi solidnya, sehingga massa jenis rata-rata kapal jadi lebih kecil dari massa jenis air."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Gaya apung yang dialami sebuah benda selalu sama besar, tidak peduli benda itu dicelupkan ke fluida apa."
    jawabanBenar: false
    penjelasan: "Salah -- Fa = ρ_fluida × g × V bergantung pada massa jenis fluidanya. Benda yang sama akan mendapat Fa lebih besar di air raksa dibanding di air biasa."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Pada dongkrak hidrolik, piston yang luasnya lebih besar akan menghasilkan gaya keluar yang lebih besar pula."
    jawabanBenar: true
    penjelasan: "Benar -- karena tekanan sama di kedua piston (P1=P2), piston yang lebih luas menghasilkan gaya F=P×A yang lebih besar."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Benda dikatakan melayang ketika, saat tercelup PENUH, berat benda (W) sama besar dengan gaya apung (Fa) yang dialaminya."
    jawabanBenar: true
    penjelasan: "Benar -- melayang terjadi saat W = Fa persis pada kondisi tercelup penuh."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Alat yang bekerja berdasarkan Hukum Pascal untuk mengangkat beban berat (seperti mobil) dengan gaya kecil disebut...? (1-2 kata)"
    angka: false
    toleransi: 0
    jawabanBenar: ["Dongkrak Hidrolik", "Dongkrak"]
    penjelasan: "Disebut dongkrak hidrolik."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah sistem hidrolik punya F1 = 100 N, A1 = 5 cm², dan A2 = 100 cm². Berapa gaya keluar F2 (dalam N)?"
    angka: true
    toleransi: 0
    jawabanBenar: ["2000"]
    penjelasan: "F2 = F1 × (A2/A1) = 100 × (100/5) = 100 × 20 = 2.000 N."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Sebuah benda bervolume 1.000 cm³ (0,001 m³) dicelupkan penuh ke air (ρ = 1.000 kg/m³, g = 10 m/s²). Berapa gaya apung yang dialaminya (dalam N)?"
    angka: true
    toleransi: 0
    jawabanBenar: ["10"]
    penjelasan: "Fa = ρgV = 1.000 × 10 × 0,001 = 10 N."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan kondisi gaya dengan hasil yang terjadi pada benda dalam fluida."
    pasangan:
      - { id: p1, kiri: "W lebih besar dari Fa maksimum (saat tercelup penuh)", kanan: "Tenggelam" }
      - { id: p2, kiri: "W = Fa saat tercelup penuh", kanan: "Melayang" }
      - { id: p3, kiri: "W = Fa saat tercelup sebagian", kanan: "Terapung" }
    penjelasan: "Perbandingan berat benda (W) dengan gaya apung maksimum (Fa) menentukan apakah benda tenggelam, melayang, atau terapung."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan alat/fenomena berikut dengan hukum fluida statis yang mendasarinya."
    pasangan:
      - { id: p1, kiri: "Dongkrak hidrolik mengangkat mobil", kanan: "Hukum Pascal" }
      - { id: p2, kiri: "Kapal besi bisa mengapung di laut", kanan: "Hukum Archimedes" }
      - { id: p3, kiri: "Rem hidrolik mengunci keempat roda mobil", kanan: "Hukum Pascal" }
    penjelasan: "Dongkrak dan rem hidrolik memanfaatkan Hukum Pascal (tekanan diteruskan merata), sementara kapal mengapung karena Hukum Archimedes (gaya apung)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung berat semu sebuah benda yang dicelupkan ke fluida, dari yang paling awal."
    item:
      - { id: i1, teks: "Hitung berat sejati benda, W = ρ_benda × g × V" }
      - { id: i2, teks: "Tentukan volume benda yang tercelup dalam fluida" }
      - { id: i3, teks: "Hitung gaya apung, Fa = ρ_fluida × g × V_tercelup" }
      - { id: i4, teks: "Hitung berat semu = W − Fa" }
    penjelasan: "Berat semu dihitung setelah berat sejati dan gaya apungnya diketahui, dengan berat semu = W − Fa."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan alat/fenomena berikut berdasarkan hukum fluida statis yang mendasarinya."
    kategori:
      - { id: pascal, label: "Hukum Pascal" }
      - { id: archimedes, label: "Hukum Archimedes" }
    item:
      - { id: t1, teks: "Dongkrak hidrolik", kategoriBenarId: pascal }
      - { id: t2, teks: "Rem hidrolik mobil", kategoriBenarId: pascal }
      - { id: t3, teks: "Kursi hidrolik bengkel/salon", kategoriBenarId: pascal }
      - { id: t4, teks: "Kapal laut yang mengapung", kategoriBenarId: archimedes }
      - { id: t5, teks: "Kapal selam mengatur tangki ballast", kategoriBenarId: archimedes }
    penjelasan: "Alat yang melipatgandakan gaya lewat piston memanfaatkan Hukum Pascal; benda yang mengapung/menyelam memanfaatkan Hukum Archimedes."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Piston besar pada dongkrak hidrolik menghasilkan gaya lebih besar dari piston kecil", kategoriBenarId: benar }
      - { id: t2, teks: "Gaya apung tidak bergantung pada massa jenis fluida", kategoriBenarId: salah }
      - { id: t3, teks: "Berat semu benda dalam fluida = berat sejati dikurangi gaya apung", kategoriBenarId: benar }
      - { id: t4, teks: "Kapal besi mengapung karena besi lebih ringan dari air", kategoriBenarId: salah }
    penjelasan: "Kapal mengapung bukan karena besi lebih ringan dari air, melainkan karena bentuk berongganya membuat massa jenis rata-rata kapal lebih kecil dari air."
    skor: 1
draft: false
---
