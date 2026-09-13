---
judul: "Gerbang Logika: AND, OR, NOT, dan Turunannya"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar gerbang logika AND, OR, NOT, NAND, NOR, dan XOR beserta tabel kebenarannya."
materiSlug: gerbang-logika
pinHash: 877797ce72751c1520a17902faa56c5944c252faa8e0e19ef951762def3564f9
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Gerbang logika AND akan menghasilkan output 1 kalau..."
    pilihan:
      - { id: a, teks: "SEMUA inputnya bernilai 1" }
      - { id: b, teks: "SALAH SATU inputnya bernilai 1" }
      - { id: c, teks: "SEMUA inputnya bernilai 0" }
      - { id: d, teks: "Inputnya berbeda satu sama lain" }
    jawabanBenarId: a
    penjelasan: "Gerbang AND cuma menghasilkan 1 kalau SEMUA inputnya 1 -- kalau ada satu saja yang 0, outputnya pasti 0."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Gerbang logika OR akan menghasilkan output 0 HANYA JIKA..."
    pilihan:
      - { id: a, teks: "SEMUA inputnya bernilai 0" }
      - { id: b, teks: "SEMUA inputnya bernilai 1" }
      - { id: c, teks: "Salah satu inputnya bernilai 1" }
      - { id: d, teks: "Inputnya berjumlah genap" }
    jawabanBenarId: a
    penjelasan: "OR menghasilkan 0 HANYA kalau semua inputnya 0 -- begitu ada satu saja yang 1, outputnya langsung 1."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Gerbang NAND adalah gabungan dari gerbang..."
    pilihan:
      - { id: a, teks: "NOT dan AND" }
      - { id: b, teks: "NOT dan OR" }
      - { id: c, teks: "AND dan OR" }
      - { id: d, teks: "XOR dan NOT" }
    jawabanBenarId: a
    penjelasan: "NAND = NOT + AND, hasilnya persis kebalikan dari output gerbang AND."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Gerbang XOR akan menghasilkan output 1 kalau..."
    pilihan:
      - { id: a, teks: "Kedua inputnya BERBEDA (satu 0, satu 1)" }
      - { id: b, teks: "Kedua inputnya SAMA" }
      - { id: c, teks: "Semua input bernilai 1" }
      - { id: d, teks: "Semua input bernilai 0" }
    jawabanBenarId: a
    penjelasan: "XOR (exclusive OR) menghasilkan 1 hanya kalau kedua inputnya berbeda nilai."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-5
    soal: "Berapa output gerbang AND untuk input A=1 dan B=1?"
    pilihan:
      - { id: a, teks: "1" }
      - { id: b, teks: "0" }
      - { id: c, teks: "Tidak terdefinisi" }
      - { id: d, teks: "2" }
    jawabanBenarId: a
    penjelasan: "AND(1,1) = 1, karena SEMUA inputnya bernilai 1."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-6
    soal: "Berapa output gerbang NAND untuk input A=1 dan B=1?"
    pilihan:
      - { id: a, teks: "0" }
      - { id: b, teks: "1" }
      - { id: c, teks: "Tidak terdefinisi" }
      - { id: d, teks: "2" }
    jawabanBenarId: a
    penjelasan: "AND(1,1)=1, dan NAND adalah kebalikannya, jadi NAND(1,1) = 0."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Output gerbang XOR untuk input A=1 dan B=1 adalah 1."
    jawabanBenar: false
    penjelasan: "Salah -- XOR(1,1) = 0, karena kedua inputnya SAMA (bukan berbeda). XOR cuma menghasilkan 1 kalau inputnya berbeda."
    skor: 1
  - tipe: benar-salah
    id: soal-8
    soal: "NAND dan NOR disebut 'gerbang universal' karena semua jenis gerbang logika lain bisa dibangun hanya dari kombinasi salah satunya saja."
    jawabanBenar: true
    penjelasan: "Benar -- inilah salah satu alasan NAND/NOR jadi komponen favorit dalam desain chip komputer sungguhan."
    skor: 1
  - tipe: benar-salah
    id: soal-9
    soal: "Gerbang NOT punya dua input, sama seperti AND dan OR."
    jawabanBenar: false
    penjelasan: "Salah -- NOT cuma punya SATU input, fungsinya membalik nilai input itu (0 jadi 1, 1 jadi 0)."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Sebuah rangkaian menggabungkan gerbang AND lalu NOT: NOT(AND(A,B)). Kalau A=1 dan B=0, berapa output akhirnya?"
    angka: true
    toleransi: 0
    jawabanBenar: ["1"]
    penjelasan: "AND(1,0) = 0, lalu NOT(0) = 1. Rangkaian ini sebenarnya persis sama dengan gerbang NAND."
    skor: 1
  - tipe: isian-singkat
    id: soal-11
    soal: "Sebuah rangkaian menggabungkan gerbang NOT lalu OR: OR(NOT(A), B). Kalau A=1 dan B=0, berapa output akhirnya?"
    angka: true
    toleransi: 0
    jawabanBenar: ["0"]
    penjelasan: "NOT(1) = 0, lalu OR(0, 0) = 0."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan gerbang logika dengan penjelasan singkatnya."
    pasangan:
      - { id: p1, kiri: "AND", kanan: "Output 1 hanya jika SEMUA input bernilai 1" }
      - { id: p2, kiri: "OR", kanan: "Output 1 jika ADA MINIMAL SATU input bernilai 1" }
      - { id: p3, kiri: "XOR", kanan: "Output 1 jika kedua input BERBEDA nilai" }
    penjelasan: "Ketiga gerbang ini punya aturan berbeda dalam menentukan kapan outputnya bernilai 1."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menentukan output rangkaian OR-lalu-NOT (NOT(OR(A,B))) untuk A=1, B=0, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan nilai input A=1 dan B=0" }
      - { id: i2, teks: "Hitung hasil OR(A,B) = OR(1,0) = 1" }
      - { id: i3, teks: "Masukkan hasil OR tadi ke gerbang NOT: NOT(1)" }
      - { id: i4, teks: "Diperoleh output akhir = 0" }
    penjelasan: "Rangkaian OR-lalu-NOT ini sebenarnya persis sama dengan gerbang NOR."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan gerbang logika berikut berdasarkan jumlah inputnya."
    kategori:
      - { id: satu, label: "1 Input" }
      - { id: dua, label: "2 Input" }
    item:
      - { id: t1, teks: "NOT", kategoriBenarId: satu }
      - { id: t2, teks: "AND", kategoriBenarId: dua }
      - { id: t3, teks: "OR", kategoriBenarId: dua }
      - { id: t4, teks: "XOR", kategoriBenarId: dua }
    penjelasan: "NOT adalah satu-satunya gerbang dasar dengan 1 input; gerbang lainnya (AND, OR, XOR, NAND, NOR) punya minimal 2 input."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sesuai gerbang logika (AND, OR, atau NOT) yang paling tepat."
    kategori:
      - { id: and, label: "AND" }
      - { id: or, label: "OR" }
      - { id: not, label: "NOT" }
    item:
      - { id: t1, teks: "Ibarat syarat ganda -- semua harus terpenuhi", kategoriBenarId: and }
      - { id: t2, teks: "Cukup salah satu syarat saja yang terpenuhi", kategoriBenarId: or }
      - { id: t3, teks: "Hanya punya satu input", kategoriBenarId: not }
      - { id: t4, teks: "Disebut juga inverter", kategoriBenarId: not }
    penjelasan: "AND butuh semua syarat terpenuhi, OR cukup salah satu, dan NOT (inverter) hanya membalik satu input."
    skor: 1
draft: false
---
