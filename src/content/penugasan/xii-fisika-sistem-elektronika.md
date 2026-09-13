---
judul: "Sistem Elektronika: Semikonduktor, Dioda, dan Transistor"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar semikonduktor, dioda, dan transistor."
materiSlug: sistem-elektronika
pinHash: d886cc2fdeb3f43c78d1083308e5ab591e2a44825394ca91f922999f46cdf803
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Semikonduktor adalah bahan yang..."
    pilihan:
      - { id: a, teks: "Daya hantar listriknya di antara konduktor dan isolator, bisa diatur/diubah" }
      - { id: b, teks: "Selalu menghantarkan listrik dengan sangat baik seperti logam" }
      - { id: c, teks: "Sama sekali tidak bisa menghantarkan listrik" }
      - { id: d, teks: "Hanya ditemukan dalam bentuk cairan" }
    jawabanBenarId: a
    penjelasan: "Semikonduktor (mis. Silikon, Germanium) punya daya hantar di antara konduktor dan isolator, dan sifat ini bisa diubah lewat proses doping."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Doping semikonduktor dengan atom PENTAVALEN (5 elektron valensi) menghasilkan semikonduktor tipe..."
    pilihan:
      - { id: a, teks: "N (kelebihan elektron bebas)" }
      - { id: b, teks: "P (kekurangan elektron/hole)" }
      - { id: c, teks: "Netral, tidak berubah" }
      - { id: d, teks: "Isolator sempurna" }
    jawabanBenarId: a
    penjelasan: "Atom pentavalen menyumbang elektron ekstra yang jadi pembawa muatan bebas, menghasilkan semikonduktor tipe-N."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Doping semikonduktor dengan atom TRIVALEN (3 elektron valensi) menghasilkan semikonduktor tipe..."
    pilihan:
      - { id: a, teks: "P (kekurangan elektron/hole)" }
      - { id: b, teks: "N (kelebihan elektron bebas)" }
      - { id: c, teks: "Netral, tidak berubah" }
      - { id: d, teks: "Konduktor sempurna" }
    jawabanBenarId: a
    penjelasan: "Atom trivalen kekurangan satu elektron dibanding atom semikonduktor di sekitarnya, menciptakan 'hole' -- menghasilkan semikonduktor tipe-P."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Pembawa muatan mayoritas pada semikonduktor tipe-P adalah..."
    pilihan:
      - { id: a, teks: "Hole (lubang, kekosongan elektron)" }
      - { id: b, teks: "Elektron bebas" }
      - { id: c, teks: "Proton bebas" }
      - { id: d, teks: "Neutron" }
    jawabanBenarId: a
    penjelasan: "Semikonduktor tipe-P kekurangan elektron, menciptakan 'hole' yang berperilaku seperti pembawa muatan positif yang bisa bergerak."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-5
    soal: "Sifat utama dioda adalah..."
    pilihan:
      - { id: a, teks: "Hanya mengalirkan arus satu arah (saat forward bias melebihi tegangan ambang)" }
      - { id: b, teks: "Mengalirkan arus ke segala arah dengan sama mudahnya" }
      - { id: c, teks: "Memperbesar sinyal listrik" }
      - { id: d, teks: "Menyimpan energi listrik" }
    jawabanBenarId: a
    penjelasan: "Dioda cuma menghantar saat forward bias dan tegangannya melebihi tegangan ambang -- sifat satu-arah inilah yang membuatnya cocok jadi penyearah."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-6
    soal: "Sebuah dioda silikon (tegangan ambang ≈0,7V) dipasang forward bias, tapi tegangan sumbernya cuma 0,3V. Apa yang terjadi?"
    pilihan:
      - { id: a, teks: "Dioda tetap TIDAK menghantar, karena belum melewati tegangan ambang" }
      - { id: b, teks: "Dioda langsung menghantar penuh" }
      - { id: c, teks: "Dioda malah rusak" }
      - { id: d, teks: "Dioda berubah jadi reverse bias" }
    jawabanBenarId: a
    penjelasan: "Forward bias saja tidak cukup -- tegangannya juga harus MELEBIHI tegangan ambang untuk dioda benar-benar menghantar."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-7
    soal: "Transistor tersusun dari berapa lapis semikonduktor, dengan tiga kaki apa saja?"
    pilihan:
      - { id: a, teks: "3 lapis; basis, kolektor, dan emitor" }
      - { id: b, teks: "2 lapis; anoda dan katoda" }
      - { id: c, teks: "1 lapis; hanya basis" }
      - { id: d, teks: "4 lapis; tanpa nama khusus" }
    jawabanBenarId: a
    penjelasan: "Transistor (NPN atau PNP) tersusun dari 3 lapis semikonduktor dengan 3 kaki: basis (B), kolektor (C), dan emitor (E)."
    skor: 1
  - tipe: benar-salah
    id: soal-8
    soal: "Semikonduktor tipe-P bermuatan POSITIF secara keseluruhan, seperti benda yang kelebihan proton."
    jawabanBenar: false
    penjelasan: "Salah -- semikonduktor tipe-P tetap NETRAL secara keseluruhan. 'Hole' cuma berperilaku seolah-olah pembawa muatan positif, bukan berarti bahan itu benar-benar bermuatan positif."
    skor: 1
  - tipe: benar-salah
    id: soal-9
    soal: "LED yang dipasang REVERSE BIAS (terbalik) akan tetap menyala seperti biasa."
    jawabanBenar: false
    penjelasan: "Salah -- LED adalah jenis dioda, jadi kalau dipasang reverse bias, tidak ada arus yang mengalir sama sekali dan LED tidak akan menyala."
    skor: 1
  - tipe: benar-salah
    id: soal-10
    soal: "Transistor bisa berfungsi baik sebagai saklar elektronik maupun sebagai penguat (amplifier) sinyal."
    jawabanBenar: true
    penjelasan: "Benar -- kemampuan arus kecil di basis mengendalikan arus besar di kolektor-emitor membuat transistor bisa dipakai untuk kedua fungsi ini."
    skor: 1
  - tipe: isian-singkat
    id: soal-11
    soal: "Berapa nilai tegangan ambang dioda silikon, dalam Volt?"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["0.7"]
    penjelasan: "Tegangan ambang dioda silikon sekitar 0,7 Volt."
    skor: 1
  - tipe: isian-singkat
    id: soal-12
    soal: "Sebutkan singkatan komponen dioda yang memancarkan cahaya saat forward bias (3 huruf)."
    angka: false
    toleransi: 0
    jawabanBenar: ["LED"]
    penjelasan: "LED (Light Emitting Diode) memancarkan cahaya saat dialiri arus forward bias."
    skor: 1
  - tipe: menjodohkan
    id: soal-13
    soal: "Jodohkan istilah dengan penjelasannya."
    pasangan:
      - { id: p1, kiri: "Semikonduktor tipe-N", kanan: "Kelebihan elektron bebas sebagai pembawa muatan" }
      - { id: p2, kiri: "Semikonduktor tipe-P", kanan: "Kekurangan elektron (hole) sebagai pembawa muatan" }
      - { id: p3, kiri: "Dioda", kanan: "Sambungan P-N yang mengalirkan arus satu arah" }
    penjelasan: "Sambungan semikonduktor tipe-P dan tipe-N inilah yang membentuk dioda."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-14
    soal: "Susun alur penjelasan kenapa dioda cocok dipakai sebagai penyearah (rectifier) AC ke DC, dari yang paling awal."
    item:
      - { id: i1, teks: "Arus AC terus berubah arah secara periodik (bolak-balik)" }
      - { id: i2, teks: "Dioda dipasang sehingga hanya melewatkan arus di satu arah saja" }
      - { id: i3, teks: "Bagian gelombang yang arahnya berlawanan 'dipotong' (diblokir dioda)" }
      - { id: i4, teks: "Hasil akhirnya adalah arus yang searah (DC), meski masih berdenyut" }
    penjelasan: "Sifat satu-arah dioda inilah yang dimanfaatkan untuk mengubah AC (bolak-balik) menjadi DC (searah)."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan komponen berikut berdasarkan fungsi utamanya."
    kategori:
      - { id: penyearah, label: "Penyearah/Cahaya" }
      - { id: saklarpenguat, label: "Saklar/Penguat" }
    item:
      - { id: t1, teks: "Dioda", kategoriBenarId: penyearah }
      - { id: t2, teks: "LED", kategoriBenarId: penyearah }
      - { id: t3, teks: "Transistor", kategoriBenarId: saklarpenguat }
      - { id: t4, teks: "IC (kumpulan miliaran transistor)", kategoriBenarId: saklarpenguat }
    penjelasan: "Dioda dan LED berkaitan dengan menyearahkan arus/memancarkan cahaya, sedangkan transistor dan IC berkaitan dengan fungsi saklar/penguat sinyal."
    skor: 1
draft: false
---
