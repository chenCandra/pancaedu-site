---
judul: "Jenis-jenis Tumbukan"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar lenting sempurna, sebagian, tidak lenting, dan koefisien restitusi."
materiSlug: jenis-jenis-tumbukan
pinHash: 84b634cf09542b3e0fa6398befa91eff570a5b88b81421fc84464ad96577a302
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Pada semua jenis tumbukan, besaran yang SELALU kekal adalah..."
    pilihan:
      - { id: a, teks: "Momentum total sistem" }
      - { id: b, teks: "Energi kinetik total sistem" }
      - { id: c, teks: "Kecepatan masing-masing benda" }
      - { id: d, teks: "Percepatan masing-masing benda" }
    jawabanBenarId: a
    penjelasan: "Momentum total selalu kekal pada semua jenis tumbukan (sistem tertutup)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Ciri khas tumbukan lenting SEMPURNA adalah..."
    pilihan:
      - { id: a, teks: "Momentum dan energi kinetik sama-sama kekal" }
      - { id: b, teks: "Kedua benda bersatu bergerak bersama" }
      - { id: c, teks: "Energi kinetik berkurang paling banyak" }
      - { id: d, teks: "Momentum tidak kekal" }
    jawabanBenarId: a
    penjelasan: "Lenting sempurna (e=1): momentum DAN energi kinetik sama-sama kekal."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Ciri khas tumbukan TIDAK LENTING SAMA SEKALI adalah..."
    pilihan:
      - { id: a, teks: "Kedua benda bersatu, bergerak dengan kecepatan sama setelah tumbukan" }
      - { id: b, teks: "Energi kinetik tetap sama seperti sebelum tumbukan" }
      - { id: c, teks: "Momentum bertambah setelah tumbukan" }
      - { id: d, teks: "Kedua benda memantul saling menjauh dengan kecepatan awal" }
    jawabanBenarId: a
    penjelasan: "Tidak lenting sama sekali (e=0): kedua benda bersatu, kehilangan energi kinetik paling besar."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Koefisien restitusi (e) untuk tumbukan lenting sempurna bernilai..."
    pilihan:
      - { id: a, teks: "1" }
      - { id: b, teks: "0" }
      - { id: c, teks: "0,5" }
      - { id: d, teks: "Lebih dari 1" }
    jawabanBenarId: a
    penjelasan: "Lenting sempurna punya e=1, nilai maksimum koefisien restitusi."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Energi kinetik total sistem selalu kekal pada semua jenis tumbukan, sama seperti momentum."
    jawabanBenar: false
    penjelasan: "Salah -- energi kinetik hanya kekal pada lenting sempurna. Pada dua jenis lainnya, sebagian energi kinetik berubah jadi panas/bunyi/deformasi."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Crumple zone mobil sengaja dirancang untuk 'remuk' agar menyerap energi kinetik dan mengurangi gaya pada penumpang."
    jawabanBenar: true
    penjelasan: "Benar -- crumple zone menyerap energi kinetik jadi deformasi logam dan memperpanjang Δt tumbukan, mengurangi gaya pada penumpang."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Energi kinetik yang 'hilang' pada tumbukan tidak lenting melanggar Hukum Kekekalan Energi."
    jawabanBenar: false
    penjelasan: "Salah -- energi itu tidak hilang, cuma berubah bentuk jadi panas/bunyi/deformasi. Hukum Kekekalan Energi (total) tetap berlaku."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Kereta m1=4 kg bergerak 6 m/s menabrak kereta m2=2 kg yang diam, keduanya bersatu. Berapa kecepatan gabungan mereka, dalam m/s?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["4"]
    penjelasan: "v'=(m1v1+m2v2)/(m1+m2)=(4×6+2×0)/(4+2)=24/6=4 m/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebelum tumbukan v1=12 m/s, v2=0. Sesudah tumbukan v1'=4 m/s, v2'=8 m/s. Berapa koefisien restitusinya? (e=-(v1'-v2')/(v1-v2))"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["0.33", "0,33", "1/3"]
    penjelasan: "e=-(4-8)/(12-0)=4/12=0,33."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Dua bola identik m1=m2=3 kg, bola 1 bergerak 10 m/s menabrak bola 2 yang diam secara lenting sempurna (head-on). Berapa kecepatan bola 1 SETELAH tumbukan, dalam m/s?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["0"]
    penjelasan: "Massa sama + lenting sempurna + head-on = kecepatan bertukar sepenuhnya: bola 1 jadi diam (0 m/s), bola 2 bergerak 10 m/s."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan jenis tumbukan dengan nilai koefisien restitusinya."
    pasangan:
      - { id: p1, kiri: "Lenting Sempurna", kanan: "e = 1" }
      - { id: p2, kiri: "Lenting Sebagian", kanan: "0 < e < 1" }
      - { id: p3, kiri: "Tidak Lenting Sama Sekali", kanan: "e = 0" }
    penjelasan: "e=1 lenting sempurna, 0<e<1 lenting sebagian, e=0 tidak lenting sama sekali."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan contoh dengan jenis tumbukannya."
    pasangan:
      - { id: p1, kiri: "Bola biliar bertumbukan", kanan: "Mendekati Lenting Sempurna" }
      - { id: p2, kiri: "Tanah liat menempel setelah tumbukan", kanan: "Tidak Lenting Sama Sekali" }
    penjelasan: "Bola biliar keras & licin (energi hilang sangat kecil), tanah liat bersatu (kehilangan energi maksimum)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menentukan jenis tumbukan dari data kecepatan sebelum dan sesudah, dari yang paling awal."
    item:
      - { id: i1, teks: "Catat kecepatan kedua benda sebelum dan sesudah tumbukan" }
      - { id: i2, teks: "Hitung koefisien restitusi e = -(v1'-v2')/(v1-v2)" }
      - { id: i3, teks: "Bandingkan nilai e terhadap 0 dan 1" }
      - { id: i4, teks: "Simpulkan jenis tumbukan (lenting sempurna/sebagian/tidak lenting)" }
    penjelasan: "Data kecepatan dulu, hitung e, bandingkan ke 0/1, baru simpulkan jenisnya."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sesuai jenis tumbukan yang paling tepat."
    kategori:
      - { id: sempurna, label: "Lenting Sempurna" }
      - { id: sebagian, label: "Lenting Sebagian" }
      - { id: tidak, label: "Tidak Lenting Sama Sekali" }
    item:
      - { id: t1, teks: "Energi kinetik total tetap sama", kategoriBenarId: sempurna }
      - { id: t2, teks: "Bola bekel memantul makin rendah tiap kali", kategoriBenarId: sebagian }
      - { id: t3, teks: "Kedua benda bersatu bergerak bersama", kategoriBenarId: tidak }
    penjelasan: "Sempurna: KE tetap. Sebagian: KE berkurang sebagian (masih memantul). Tidak lenting: benda bersatu, KE berkurang maksimum."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan besaran berikut sesuai apakah selalu kekal atau tidak pada tumbukan tidak lenting sama sekali."
    kategori:
      - { id: kekal, label: "Selalu Kekal" }
      - { id: tidakkekal, label: "Tidak Kekal (Berkurang)" }
    item:
      - { id: t1, teks: "Momentum total sistem", kategoriBenarId: kekal }
      - { id: t2, teks: "Energi kinetik total sistem", kategoriBenarId: tidakkekal }
    penjelasan: "Momentum tetap kekal pada tumbukan tidak lenting, tapi energi kinetiknya berkurang paling banyak di antara ketiga jenis tumbukan."
    skor: 1
draft: false
---
