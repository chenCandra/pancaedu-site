---
judul: "Latihan TKA: Intensitas, Resonansi & Efek Doppler"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan -- 6 tipe interaktif (pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, drag & drop) dengan porsi soal HOTS, sesuai kisi-kisi resmi elemen Gelombang: intensitas bunyi, Efek Doppler, resonansi, dan pelayangan bunyi."
materiSlug: intensitas-bunyi-dan-efek-doppler
pinHash: d6654d5f49bfa098b1bfa701a87d62a8504151ace4a134550f97ac5fa652516b
pinBerlakuHingga: 2027-03-20
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus intensitas bunyi yang tepat adalah..."
    pilihan:
      - { id: a, teks: "I = P × A" }
      - { id: b, teks: "I = P / A" }
      - { id: c, teks: "I = A / P" }
      - { id: d, teks: "I = 10 log P" }
    jawabanBenarId: b
    penjelasan: "Intensitas bunyi (I) = daya bunyi (P) dibagi luas permukaan (A) yang dilalui bunyi tersebut, satuannya watt/m² (W/m²)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah sumber bunyi memancarkan daya 4 watt secara merata ke segala arah, terdeteksi pada suatu permukaan seluas 2 m². Intensitas bunyi pada permukaan tersebut adalah..."
    pilihan:
      - { id: a, teks: "0,5 W/m²" }
      - { id: b, teks: "2 W/m²" }
      - { id: c, teks: "6 W/m²" }
      - { id: d, teks: "8 W/m²" }
    jawabanBenarId: b
    penjelasan: "I = P/A = 4 watt / 2 m² = 2 W/m²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sebuah sumber bunyi bergerak MENDEKATI pendengar yang diam. Frekuensi bunyi yang didengar oleh pendengar tersebut akan..."
    pilihan:
      - { id: a, teks: "Menjadi lebih tinggi dari frekuensi asli sumber" }
      - { id: b, teks: "Menjadi lebih rendah dari frekuensi asli sumber" }
      - { id: c, teks: "Tetap sama dengan frekuensi asli sumber" }
      - { id: d, teks: "Menjadi nol (tidak terdengar sama sekali)" }
    jawabanBenarId: a
    penjelasan: "Saat sumber bunyi mendekat, gelombang bunyi yang dipancarkan 'terkompresi' ke arah pendengar (panjang gelombang mengecil), sehingga frekuensi yang terdengar menjadi LEBIH TINGGI -- inilah Efek Doppler."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Sebuah ambulans dengan sirine berfrekuensi 630 Hz bergerak MENDEKATI pendengar yang diam, dengan kecepatan 34 m/s (cepat rambat bunyi di udara = 340 m/s). Frekuensi bunyi sirine yang didengar pendengar tersebut adalah..."
    pilihan:
      - { id: a, teks: "567 Hz" }
      - { id: b, teks: "630 Hz" }
      - { id: c, teks: "700 Hz" }
      - { id: d, teks: "793 Hz" }
    jawabanBenarId: c
    penjelasan: "Karena sumber mendekati pendengar diam: f' = f × v/(v − vs) = 630 × 340/(340−34) = 630 × 340/306 = 630 × (10/9) = 700 Hz."
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Semakin jauh jarak pendengar dari sumber bunyi, semakin kecil intensitas bunyi yang diterimanya."
    jawabanBenar: true
    penjelasan: "Benar -- daya bunyi yang sama tersebar ke luas permukaan yang lebih besar seiring bertambahnya jarak, sehingga intensitasnya (daya per satuan luas) mengecil."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Efek Doppler hanya bisa terjadi jika sumber bunyi yang bergerak, sedangkan jika hanya pendengar yang bergerak (sumber diam), efek Doppler tidak berlaku."
    jawabanBenar: false
    penjelasan: "Salah -- Efek Doppler bisa terjadi karena gerak SUMBER bunyi, gerak PENDENGAR, atau keduanya sekaligus. Yang penting ada gerak RELATIF antara sumber dan pendengar."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah sumber bunyi memancarkan daya 6 watt merata ke segala arah, terdeteksi pada permukaan seluas 3 m². Intensitas bunyi pada permukaan tersebut adalah ... W/m²."
    angka: true
    toleransi: 0
    jawabanBenar: ["2"]
    penjelasan: "I = P/A = 6/3 = 2 W/m²."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah bunyi memiliki intensitas 10⁻⁴ W/m² (intensitas ambang pendengaran I₀ = 10⁻¹² W/m²). Taraf intensitas bunyi tersebut adalah ... dB."
    angka: true
    toleransi: 0
    jawabanBenar: ["80"]
    penjelasan: "TI = 10 × log(I/I₀) = 10 × log(10⁻⁴/10⁻¹²) = 10 × log(10⁸) = 10 × 8 = 80 dB."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Dua garpu tala dibunyikan bersamaan, masing-masing berfrekuensi 440 Hz dan 446 Hz. Frekuensi layangan (beat) yang terdengar adalah ... Hz."
    angka: true
    toleransi: 0
    jawabanBenar: ["6"]
    penjelasan: "Frekuensi layangan = selisih kedua frekuensi = |446 − 440| = 6 Hz. Semakin dekat kedua frekuensi, semakin lambat denyut layangannya terdengar."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan istilah dengan definisi/rumusnya."
    pasangan:
      - { id: p1, kiri: "Intensitas Bunyi", kanan: "I = P/A (daya bunyi per satuan luas), satuan W/m²" }
      - { id: p2, kiri: "Taraf Intensitas Bunyi", kanan: "TI = 10 log(I/I₀), satuan desibel (dB)" }
      - { id: p3, kiri: "Efek Doppler", kanan: "Perubahan frekuensi bunyi yang terdengar akibat gerak relatif sumber dan pendengar" }
      - { id: p4, kiri: "Resonansi", kanan: "Ikut bergetarnya suatu benda/kolom udara akibat gelombang bunyi berfrekuensi sama (atau kelipatannya)" }
    penjelasan: "Intensitas dan taraf intensitas sama-sama soal 'seberapa keras' bunyi, sedangkan Efek Doppler dan Resonansi soal 'perubahan frekuensi' yang terdengar/dihasilkan."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan fenomena sehari-hari berikut dengan konsep yang paling mendasarinya."
    pasangan:
      - { id: p1, kiri: "Nada sirine ambulans terdengar lebih tinggi saat mendekat, lalu turun setelah menjauh", kanan: "Efek Doppler" }
      - { id: p2, kiri: "Alat musik tiup (seruling, terompet) punya panjang kolom udara berbeda-beda untuk menghasilkan nada berbeda", kanan: "Resonansi (pipa organa)" }
      - { id: p3, kiri: "Dua senar gitar yang frekuensinya hampir sama menghasilkan bunyi berdenyut 'wow-wow-wow'", kanan: "Pelayangan Bunyi" }
      - { id: p4, kiri: "Suara musik terdengar jauh lebih keras saat berdiri dekat pengeras suara (speaker) dibanding jauh darinya", kanan: "Intensitas Bunyi" }
    penjelasan: "Empat fenomena sehari-hari ini masing-masing punya penjelasan fisis yang berbeda meski sama-sama soal bunyi -- kunci menjawab soal cerita adalah mengenali konsep mana yang sedang diuji dari situasinya."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menghitung taraf intensitas bunyi (dalam desibel), dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan intensitas bunyi (I) yang terukur, dalam satuan W/m²" }
      - { id: i2, teks: "Tentukan intensitas ambang pendengaran (I₀ = 10⁻¹² W/m²) sebagai acuan" }
      - { id: i3, teks: "Hitung perbandingan I/I₀" }
      - { id: i4, teks: "Hitung taraf intensitas dengan rumus TI = 10 × log(I/I₀), dalam satuan desibel (dB)" }
    penjelasan: "I₀ = 10⁻¹² W/m² adalah nilai TETAP (ambang bunyi paling lemah yang masih bisa didengar manusia) -- selalu dipakai sebagai acuan pembanding, bukan diukur ulang tiap soal."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun alur penalaran yang menjelaskan mengapa nada sirine ambulans terdengar berubah (Efek Doppler) saat melintas melewati pendengar, dari yang paling awal."
    item:
      - { id: i1, teks: "Saat ambulans MENDEKATI pendengar, jarak antar gelombang bunyi yang dipancarkan menjadi lebih RAPAT" }
      - { id: i2, teks: "Panjang gelombang yang lebih pendek berarti frekuensi yang terdengar menjadi lebih TINGGI (nada lebih melengking)" }
      - { id: i3, teks: "Setelah ambulans MELEWATI dan mulai MENJAUHI pendengar, jarak antar gelombang bunyi menjadi lebih RENGGANG" }
      - { id: i4, teks: "Panjang gelombang yang lebih panjang berarti frekuensi yang terdengar menjadi lebih RENDAH, sehingga nada terdengar 'turun' begitu ambulans melewati pendengar" }
    penjelasan: "Perubahan mendadak dari nada tinggi ke nada rendah tepat saat ambulans melintasi pendengar adalah ciri khas Efek Doppler yang paling mudah dikenali di kehidupan sehari-hari."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan skenario berikut berdasarkan perubahan frekuensi bunyi yang terdengar (Efek Doppler): Frekuensi Terdengar Naik, atau Frekuensi Terdengar Turun."
    kategori:
      - { id: naik, label: "Frekuensi Terdengar Naik" }
      - { id: turun, label: "Frekuensi Terdengar Turun" }
    item:
      - { id: t1, teks: "Sumber bunyi bergerak MENDEKATI pendengar yang diam", kategoriBenarId: naik }
      - { id: t2, teks: "Sumber bunyi bergerak MENJAUHI pendengar yang diam", kategoriBenarId: turun }
      - { id: t3, teks: "Pendengar bergerak MENDEKATI sumber bunyi yang diam", kategoriBenarId: naik }
      - { id: t4, teks: "Pendengar bergerak MENJAUHI sumber bunyi yang diam", kategoriBenarId: turun }
    penjelasan: "Yang menentukan naik/turunnya frekuensi bukan SIAPA yang bergerak (sumber atau pendengar), tapi APAKAH jaraknya sedang mengecil (mendekat -> naik) atau membesar (menjauh -> turun)."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan tentang resonansi dan pelayangan bunyi berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Resonansi terjadi ketika suatu benda ikut bergetar karena menerima gelombang bunyi berfrekuensi SAMA (atau kelipatannya) dengan frekuensi alaminya", kategoriBenarId: benar }
      - { id: t2, teks: "Pelayangan bunyi (beat) terjadi ketika dua sumber bunyi berfrekuensi SANGAT BERBEDA dibunyikan bersamaan", kategoriBenarId: salah }
      - { id: t3, teks: "Frekuensi layangan yang terdengar sama dengan SELISIH frekuensi kedua sumber bunyi", kategoriBenarId: benar }
      - { id: t4, teks: "Panjang kolom udara pada alat musik tiup tidak memengaruhi nada yang dihasilkan", kategoriBenarId: salah }
    penjelasan: "Miskonsepsi paling umum: mengira pelayangan bunyi butuh dua frekuensi yang jauh berbeda -- justru SEBALIKNYA, pelayangan hanya terdengar jelas kalau kedua frekuensi HAMPIR SAMA (selisihnya kecil), makanya dipakai untuk menyetem alat musik dengan presisi."
    skor: 2
draft: false
---
