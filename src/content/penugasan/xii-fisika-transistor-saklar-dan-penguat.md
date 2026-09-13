---
judul: "Transistor: Saklar dan Penguat"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar struktur transistor, fungsinya sebagai saklar dan penguat, serta konsep IC."
materiSlug: transistor-saklar-dan-penguat
pinHash: 90871d2a7744b4296b32a1817979bc452fae31b3817711f072921a9641f5f926
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Transistor sebagai saklar elektronik dikendalikan oleh..."
    pilihan:
      - { id: a, teks: "Tegangan/arus kecil di basis, mengendalikan arus besar kolektor-emitor" }
      - { id: b, teks: "Suhu ruangan" }
      - { id: c, teks: "Warna cahaya yang mengenainya" }
      - { id: d, teks: "Panjang kabel yang dipakai" }
    jawabanBenarId: a
    penjelasan: "Arus kecil di basis (begitu melewati tegangan ambang) bisa mengendalikan arus jauh lebih besar antara kolektor dan emitor -- prinsip dasar semua chip komputer modern."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Transistor (NPN atau PNP) tersusun dari berapa lapis semikonduktor, dengan tiga kaki apa saja?"
    pilihan:
      - { id: a, teks: "3 lapis; basis, kolektor, dan emitor" }
      - { id: b, teks: "2 lapis; anoda dan katoda" }
      - { id: c, teks: "1 lapis; hanya basis" }
      - { id: d, teks: "4 lapis; tanpa nama khusus" }
    jawabanBenarId: a
    penjelasan: "Transistor (NPN atau PNP) tersusun dari 3 lapis semikonduktor dengan 3 kaki: basis (B), kolektor (C), dan emitor (E)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Transistor sebagai penguat (amplifier) bekerja dengan cara..."
    pilihan:
      - { id: a, teks: "Sinyal lemah di basis 'diperbesar' jadi sinyal kuat di kolektor-emitor" }
      - { id: b, teks: "Menyimpan sinyal untuk dipakai nanti" }
      - { id: c, teks: "Mengubah sinyal AC jadi DC" }
      - { id: d, teks: "Memancarkan cahaya sebanding sinyal" }
    jawabanBenarId: a
    penjelasan: "Sinyal lemah (mis. dari mikrofon) di basis bisa dikendalikan untuk menghasilkan sinyal yang jauh lebih kuat di kolektor-emitor."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "IC (Integrated Circuit/sirkuit terpadu) adalah..."
    pilihan:
      - { id: a, teks: "Keping silikon kecil berisi jutaan hingga miliaran transistor mini" }
      - { id: b, teks: "Sejenis dioda berukuran besar" }
      - { id: c, teks: "Kabel tembaga yang dililit membentuk kumparan" }
      - { id: d, teks: "Baterai berkapasitas sangat besar" }
    jawabanBenarId: a
    penjelasan: "IC memungkinkan miliaran transistor dicetak dalam satu keping silikon kecil -- inilah 'otak' di balik prosesor HP dan komputer modern."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-5
    soal: "Sambungan basis-emitor pada transistor berperilaku mirip komponen apa yang sudah kamu pelajari sebelumnya?"
    pilihan:
      - { id: a, teks: "Dioda -- butuh tegangan melebihi ambang untuk menyala" }
      - { id: b, teks: "Kapasitor -- menyimpan muatan" }
      - { id: c, teks: "Resistor -- menghambat arus secara konstan" }
      - { id: d, teks: "Induktor -- melawan perubahan arus" }
    jawabanBenarId: a
    penjelasan: "Sambungan basis-emitor transistor berperilaku seperti dioda, butuh tegangan melebihi ambang (≈0,7V) untuk 'menyalakannya'."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-6
    soal: "Transistor sebagai saklar digital cuma punya berapa keadaan, dan apa saja?"
    pilihan:
      - { id: a, teks: "2 keadaan: ON (menghantar) dan OFF (tidak menghantar)" }
      - { id: b, teks: "3 keadaan: ON, OFF, dan STANDBY" }
      - { id: c, teks: "Tak terhingga keadaan, tergantung suhu" }
      - { id: d, teks: "1 keadaan saja, selalu ON" }
    jawabanBenarId: a
    penjelasan: "Transistor sebagai saklar cuma punya 2 keadaan: ON (menghantar penuh) atau OFF (tidak menghantar) -- persis seperti digit biner 1 dan 0."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Transistor bisa langsung mengalirkan arus besar kolektor-emitor begitu saja, asal dihubungkan ke sumber tegangan."
    jawabanBenar: false
    penjelasan: "Salah -- transistor butuh tegangan basis-emitor melebihi tegangan ambang dulu sebelum benar-benar 'menyala' dan mengalirkan arus kolektor-emitor."
    skor: 1
  - tipe: benar-salah
    id: soal-8
    soal: "Transistor cuma bisa berfungsi sebagai saklar, tidak bisa berfungsi sebagai penguat sinyal."
    jawabanBenar: false
    penjelasan: "Salah -- transistor bisa berfungsi sebagai KEDUANYA, baik saklar elektronik maupun penguat (amplifier) sinyal."
    skor: 1
  - tipe: benar-salah
    id: soal-9
    soal: "IC memungkinkan miliaran transistor dicetak dalam satu keping silikon yang sangat kecil."
    jawabanBenar: true
    penjelasan: "Benar -- inilah yang memungkinkan prosesor modern berukuran kecil tapi berisi miliaran transistor sekaligus."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Berapa jumlah kaki yang dimiliki sebuah transistor?"
    angka: true
    toleransi: 0
    jawabanBenar: ["3"]
    penjelasan: "Transistor punya 3 kaki: basis (B), kolektor (C), dan emitor (E)."
    skor: 1
  - tipe: isian-singkat
    id: soal-11
    soal: "Sebutkan singkatan istilah 'sirkuit terpadu' dalam bahasa Inggris (2 huruf)."
    angka: false
    toleransi: 0
    jawabanBenar: ["IC"]
    penjelasan: "IC (Integrated Circuit) adalah keping kecil berisi jutaan-miliaran transistor terpadu."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan kaki transistor dengan perannya."
    pasangan:
      - { id: p1, kiri: "Basis (B)", kanan: "Menerima arus/tegangan kecil pengendali" }
      - { id: p2, kiri: "Kolektor (C)", kanan: "Tempat arus besar mengalir masuk" }
      - { id: p3, kiri: "Emitor (E)", kanan: "Tempat arus besar mengalir keluar" }
    penjelasan: "Ketiga kaki ini bekerja sama: arus kecil di basis mengendalikan arus besar yang mengalir dari kolektor ke emitor."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menentukan apakah transistor sedang ON atau OFF sebagai saklar, dari yang paling awal."
    item:
      - { id: i1, teks: "Ukur tegangan basis-emitor yang diberikan" }
      - { id: i2, teks: "Bandingkan tegangan itu dengan tegangan ambang (≈0,7V)" }
      - { id: i3, teks: "Kalau tegangan melebihi ambang, transistor ON dan arus kolektor-emitor mengalir" }
      - { id: i4, teks: "Kalau tegangan di bawah ambang, transistor tetap OFF, tidak ada arus kolektor-emitor" }
    penjelasan: "Sama seperti dioda, transistor butuh tegangan basis-emitor melebihi ambang untuk benar-benar menghantar."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan aplikasi berikut berdasarkan fungsi transistor yang dipakai."
    kategori:
      - { id: saklar, label: "Sebagai Saklar" }
      - { id: penguat, label: "Sebagai Penguat" }
    item:
      - { id: t1, teks: "Chip prosesor komputer (miliaran transistor ON-OFF)", kategoriBenarId: saklar }
      - { id: t2, teks: "Memori digital (menyimpan data biner 0/1)", kategoriBenarId: saklar }
      - { id: t3, teks: "Amplifier audio memperkuat sinyal mikrofon", kategoriBenarId: penguat }
      - { id: t4, teks: "Penerima radio memperkuat sinyal yang lemah", kategoriBenarId: penguat }
    penjelasan: "Fungsi saklar dipakai untuk logika digital (ON/OFF), sedangkan fungsi penguat dipakai untuk memperbesar sinyal analog seperti audio."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan ciri berikut sebagai milik Dioda atau Transistor."
    kategori:
      - { id: dioda, label: "Dioda" }
      - { id: transistor, label: "Transistor" }
    item:
      - { id: t1, teks: "Tersusun dari 2 lapis semikonduktor", kategoriBenarId: dioda }
      - { id: t2, teks: "Tersusun dari 3 lapis semikonduktor", kategoriBenarId: transistor }
      - { id: t3, teks: "Punya kaki basis, kolektor, dan emitor", kategoriBenarId: transistor }
      - { id: t4, teks: "Cuma mengalirkan arus satu arah (forward/reverse bias)", kategoriBenarId: dioda }
    penjelasan: "Dioda (2 lapis) cuma mengalirkan arus satu arah, sedangkan transistor (3 lapis, dengan basis-kolektor-emitor) bisa berfungsi sebagai saklar maupun penguat."
    skor: 1
draft: false
---
