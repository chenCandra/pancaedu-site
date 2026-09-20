---
judul: "Intensitas Bunyi dan Efek Doppler"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar intensitas bunyi, taraf intensitas, dan Efek Doppler."
materiSlug: intensitas-bunyi-dan-efek-doppler
pinHash: 4f3d020525b559ab7fd967be5f7b4f1b0afbe4aa79fc155b83d91228da038eb9
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus intensitas bunyi pada jarak r dari sumber berdaya P adalah..."
    pilihan:
      - { id: a, teks: "I = P / (4πr²)" }
      - { id: b, teks: "I = P × 4πr²" }
      - { id: c, teks: "I = 4πr² / P" }
      - { id: d, teks: "I = P × r" }
    jawabanBenarId: a
    penjelasan: "I = P/(4πr²)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus taraf intensitas bunyi (desibel) adalah..."
    pilihan:
      - { id: a, teks: "TI = 10 log(I/I0)" }
      - { id: b, teks: "TI = I/I0" }
      - { id: c, teks: "TI = 10 × I" }
      - { id: d, teks: "TI = log(I) + log(I0)" }
    jawabanBenarId: a
    penjelasan: "TI = 10log(I/I0), I0=10⁻¹² W/m²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Efek Doppler adalah peristiwa perubahan..."
    pilihan:
      - { id: a, teks: "Frekuensi yang terdengar akibat gerak relatif sumber dan pendengar" }
      - { id: b, teks: "Amplitudo bunyi karena jarak" }
      - { id: c, teks: "Warna bunyi (timbre)" }
      - { id: d, teks: "Cepat rambat bunyi karena medium" }
    jawabanBenarId: a
    penjelasan: "Efek Doppler: perubahan frekuensi TERDENGAR akibat gerak relatif sumber-pendengar."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Ketika sumber bunyi mendekati pendengar diam, frekuensi yang terdengar menjadi..."
    pilihan:
      - { id: a, teks: "Lebih tinggi dari frekuensi asli" }
      - { id: b, teks: "Lebih rendah dari frekuensi asli" }
      - { id: c, teks: "Sama dengan frekuensi asli" }
      - { id: d, teks: "Nol" }
    jawabanBenarId: a
    penjelasan: "Sumber mendekat memampatkan gelombang -- frekuensi terdengar lebih tinggi."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Intensitas bunyi berbanding terbalik dengan kuadrat jarak dari sumber."
    jawabanBenar: true
    penjelasan: "Benar -- I=P/(4πr²)."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Menggandakan intensitas bunyi (I menjadi 2I) akan menggandakan taraf intensitasnya (TI menjadi 2×TI)."
    jawabanBenar: false
    penjelasan: "Salah -- TI logaritmik, menggandakan I hanya menambah TI sekitar 3 dB, bukan menggandakannya."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Ketika sumber bunyi menjauhi pendengar diam, frekuensi yang terdengar menjadi lebih rendah dari frekuensi asli."
    jawabanBenar: true
    penjelasan: "Benar -- gelombang teregang, frekuensi terdengar turun."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Intensitas bunyi di suatu titik adalah 10⁻⁵ W/m² (I0=10⁻¹² W/m²). Berapa taraf intensitasnya, dalam dB?"
    angka: true
    toleransi: 1
    jawabanBenar: ["70"]
    penjelasan: "TI=10log(10⁻⁵/10⁻¹²)=10log(10⁷)=70 dB."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Intensitas bunyi di suatu titik adalah 10⁻³ W/m². Berapa taraf intensitasnya, dalam dB?"
    angka: true
    toleransi: 1
    jawabanBenar: ["90"]
    penjelasan: "TI=10log(10⁻³/10⁻¹²)=10log(10⁹)=90 dB."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Sumber bunyi 640 Hz bergerak mendekati pendengar diam dengan kecepatan 20 m/s (v bunyi=340 m/s). Berapa frekuensi yang terdengar, dalam Hz?"
    angka: true
    toleransi: 1
    jawabanBenar: ["680"]
    penjelasan: "f'=f×v/(v−vs)=640×340/(340−20)=640×340/320=680 Hz."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan situasi Doppler dengan efeknya terhadap frekuensi yang terdengar."
    pasangan:
      - { id: p1, kiri: "Sumber mendekati pendengar", kanan: "Frekuensi terdengar naik" }
      - { id: p2, kiri: "Sumber menjauhi pendengar", kanan: "Frekuensi terdengar turun" }
      - { id: p3, kiri: "Sumber dan pendengar diam", kanan: "Frekuensi terdengar sama dengan frekuensi asli" }
    penjelasan: "Tiga situasi dasar Efek Doppler untuk sumber bergerak/diam."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan besaran dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Intensitas bunyi", kanan: "I = P/(4πr²)" }
      - { id: p2, kiri: "Taraf intensitas", kanan: "TI = 10 log(I/I0)" }
    penjelasan: "Rumus dasar intensitas dan taraf intensitas bunyi."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung taraf intensitas bunyi dari daya sumber dan jarak, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan daya sumber (P) dan jarak (r)" }
      - { id: i2, teks: "Hitung intensitas I = P/(4πr²)" }
      - { id: i3, teks: "Bandingkan I dengan I0 = 10⁻¹² W/m²" }
      - { id: i4, teks: "Hitung TI = 10 log(I/I0)" }
    penjelasan: "P dan r dulu, hitung I, bandingkan dengan I0, baru hitung TI."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sesuai kondisi Doppler yang sesuai."
    kategori:
      - { id: naik, label: "Frekuensi Terdengar Naik" }
      - { id: turun, label: "Frekuensi Terdengar Turun" }
    item:
      - { id: t1, teks: "Ambulans mendekati pendengar", kategoriBenarId: naik }
      - { id: t2, teks: "Kereta menjauhi pendengar", kategoriBenarId: turun }
      - { id: t3, teks: "Mobil balap melintas lalu menjauh dari penonton", kategoriBenarId: turun }
    penjelasan: "Mendekat = naik, menjauh = turun."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan teknologi berikut sesuai prinsip fisika yang mendasarinya."
    kategori:
      - { id: doppler, label: "Memanfaatkan Efek Doppler" }
      - { id: bukan, label: "Tidak Memanfaatkan Efek Doppler" }
    item:
      - { id: t1, teks: "Radar kecepatan kendaraan", kategoriBenarId: doppler }
      - { id: t2, teks: "USG Doppler (aliran darah)", kategoriBenarId: doppler }
      - { id: t3, teks: "Termometer badan digital", kategoriBenarId: bukan }
    penjelasan: "Radar kecepatan dan USG Doppler memanfaatkan pergeseran frekuensi akibat gerak relatif (Efek Doppler)."
    skor: 1
draft: false
---
