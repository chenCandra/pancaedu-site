---
judul: "Kapasitor Keping Sejajar"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar struktur, rumus kapasitansi, dan energi kapasitor keping sejajar."
materiSlug: kapasitor-keping-sejajar
pinHash: 6bb3eae0b4959d970422b9750231ed474f1e5b2821645d6b57fef1421a80cbe8
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Satuan SI untuk kapasitansi adalah..."
    pilihan:
      - { id: a, teks: "Newton" }
      - { id: b, teks: "Farad" }
      - { id: c, teks: "Joule" }
      - { id: d, teks: "Watt" }
    jawabanBenarId: b
    penjelasan: "Kapasitansi diukur dalam farad (F), sesuai C = Q/V."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus KHUSUS untuk kapasitor KEPING SEJAJAR di udara/vakum (bergantung bentuk fisiknya) adalah..."
    pilihan:
      - { id: a, teks: "C = Q/V" }
      - { id: b, teks: "C = ε₀A/d" }
      - { id: c, teks: "C = qE" }
      - { id: d, teks: "C = mc²" }
    jawabanBenarId: b
    penjelasan: "C = Q/V berlaku untuk SEMUA jenis kapasitor (definisi umum). C = ε₀A/d khusus berlaku untuk bentuk keping sejajar, diturunkan dari luas keping (A) dan jarak antar keping (d)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Jika luas keping kapasitor keping sejajar diperbesar 2 kali (jarak & bahan tetap), kapasitansinya menjadi..."
    pilihan:
      - { id: a, teks: "Setengah kali semula" }
      - { id: b, teks: "Tetap sama" }
      - { id: c, teks: "2 kali semula" }
      - { id: d, teks: "4 kali semula" }
    jawabanBenarId: c
    penjelasan: "C = ε₀A/d -- C berbanding LURUS dengan luas keping (A), jadi A naik 2x membuat C naik 2x juga."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Fungsi utama bahan dielektrik yang disisipkan di antara dua keping kapasitor adalah..."
    pilihan:
      - { id: a, teks: "Memperbesar kapasitansi" }
      - { id: b, teks: "Memperkecil kapasitansi" }
      - { id: c, teks: "Mengubah kapasitor jadi resistor" }
      - { id: d, teks: "Tidak berpengaruh sama sekali" }
    jawabanBenarId: a
    penjelasan: "C = ε₀εᵣA/d -- konstanta dielektrik (εᵣ) bahan isolator selalu lebih besar dari 1 (udara/vakum), sehingga kapasitansi bertambah."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Memperbesar jarak antar keping kapasitor akan memperbesar kapasitansinya."
    jawabanBenar: false
    penjelasan: "Salah -- C = ε₀A/d, kapasitansi berbanding TERBALIK dengan jarak antar keping. Jarak makin besar, kapasitansi makin kecil."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Kapasitor menyimpan energi listrik dalam bentuk medan listrik di antara dua kepingnya."
    jawabanBenar: true
    penjelasan: "Benar -- energi kapasitor (W = ½QV = ½CV²) tersimpan dalam medan listrik yang terbentuk di ruang antara kedua keping."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Kapasitansi besar SELALU berarti muatan yang tersimpan pasti besar, berapa pun tegangannya."
    jawabanBenar: false
    penjelasan: "Salah -- muatan (Q = CV) bergantung pada DUA hal, kapasitansi (C) DAN tegangan (V). Kapasitansi besar dengan tegangan sangat kecil bisa saja menyimpan muatan lebih sedikit."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Kapasitor keping sejajar punya luas keping dan jarak antar keping yang SAMA-SAMA diperbesar 2 kali (bahan tetap). Berapa kali kapasitansinya berubah dari semula? (jawab dengan angka; isi '1' kalau tidak berubah)"
    angka: true
    toleransi: 0
    jawabanBenar: ["1"]
    penjelasan: "C = ε₀A/d -- A naik 2x menggandakan C, tapi d naik 2x membuat C jadi setengahnya. Dua efek itu saling meniadakan (2 × 0,5 = 1), jadi kapasitansinya TIDAK berubah."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah kapasitor 5 μF dihubungkan ke sumber tegangan 6 V. Berapa muatan yang tersimpan, dalam satuan μC?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["30"]
    penjelasan: "Q = CV = (5 μF)(6 V) = 30 μC."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Sebuah kapasitor menyimpan energi 4 × 10⁻⁴ J saat diberi tegangan 20 V. Berapa kapasitansinya, dalam satuan μF? (petunjuk: W = ½CV², cari C)"
    angka: true
    toleransi: 0.2
    jawabanBenar: ["2"]
    penjelasan: "C = 2W/V² = 2(4×10⁻⁴)/(20)² = 8×10⁻⁴/400 = 2×10⁻⁶ F = 2 μF."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran dengan satuannya (dalam konteks kapasitor)."
    pasangan:
      - { id: p1, kiri: "Kapasitansi (C)", kanan: "Farad" }
      - { id: p2, kiri: "Muatan (Q)", kanan: "Coulomb" }
      - { id: p3, kiri: "Tegangan (V)", kanan: "Volt" }
      - { id: p4, kiri: "Energi (W)", kanan: "Joule" }
    penjelasan: "Kapasitansi-Farad, Muatan-Coulomb, Tegangan-Volt, Energi-Joule -- empat besaran dasar yang saling berkaitan lewat Q = CV dan W = ½QV."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan besaran dengan pengaruhnya terhadap kapasitansi kapasitor keping sejajar (C = ε₀εᵣA/d)."
    pasangan:
      - { id: p1, kiri: "Luas keping (A)", kanan: "Berbanding lurus" }
      - { id: p2, kiri: "Jarak antar keping (d)", kanan: "Berbanding terbalik" }
      - { id: p3, kiri: "Konstanta dielektrik (εᵣ)", kanan: "Berbanding lurus" }
    penjelasan: "A dan εᵣ makin besar -> C makin besar (berbanding lurus). d makin besar -> C makin kecil (berbanding terbalik)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung muatan yang tersimpan pada kapasitor keping sejajar, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan luas keping (A) dan jarak antar keping (d)" }
      - { id: i2, teks: "Hitung kapasitansi dengan C = ε₀A/d" }
      - { id: i3, teks: "Tentukan tegangan (V) yang diberikan ke kapasitor" }
      - { id: i4, teks: "Hitung muatan dengan Q = CV" }
    penjelasan: "Kapasitansi (bergantung bentuk fisik) harus diketahui dulu sebelum bisa menghitung muatan yang tersimpan pada tegangan tertentu."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan perubahan berikut berdasarkan pengaruhnya terhadap kapasitansi (variabel lain dianggap tetap)."
    kategori:
      - { id: besar, label: "Memperbesar Kapasitansi" }
      - { id: kecil, label: "Memperkecil Kapasitansi" }
    item:
      - { id: t1, teks: "Luas keping (A) diperbesar", kategoriBenarId: besar }
      - { id: t2, teks: "Konstanta dielektrik (εᵣ) makin besar", kategoriBenarId: besar }
      - { id: t3, teks: "Jarak antar keping (d) diperkecil", kategoriBenarId: besar }
      - { id: t4, teks: "Jarak antar keping (d) diperbesar", kategoriBenarId: kecil }
    penjelasan: "C = ε₀εᵣA/d -- A dan εᵣ besar & d kecil, semuanya membuat C makin besar. Sebaliknya, d yang membesar membuat C mengecil."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan rumus berikut sesuai besaran yang dihasilkannya."
    kategori:
      - { id: kapasitansi, label: "Menghasilkan Kapasitansi (C)" }
      - { id: energi, label: "Menghasilkan Energi (W)" }
    item:
      - { id: t1, teks: "ε₀A/d", kategoriBenarId: kapasitansi }
      - { id: t2, teks: "Q/V", kategoriBenarId: kapasitansi }
      - { id: t3, teks: "½QV", kategoriBenarId: energi }
      - { id: t4, teks: "½CV²", kategoriBenarId: energi }
    penjelasan: "ε₀A/d dan Q/V sama-sama menghasilkan kapasitansi (C) -- satu dari bentuk fisik, satu dari definisi umum. ½QV dan ½CV² sama-sama menghasilkan energi (W) yang tersimpan."
    skor: 1
draft: false
---
