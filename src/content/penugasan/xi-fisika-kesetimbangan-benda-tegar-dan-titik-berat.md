---
judul: "Kesetimbangan Benda Tegar dan Titik Berat"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar kesetimbangan benda tegar, titik berat, dan jenis-jenis kesetimbangan."
materiSlug: kesetimbangan-benda-tegar-dan-titik-berat
pinHash: 08c29fea609d72ab0d5ac925d5e7493b95d99b6d8f2c2c3e6e78452fae6f744c
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Dua syarat kesetimbangan benda tegar adalah..."
    pilihan:
      - { id: a, teks: "ΣF = 0 dan Στ = 0" }
      - { id: b, teks: "Hanya ΣF = 0" }
      - { id: c, teks: "Hanya Στ = 0" }
      - { id: d, teks: "ΣF = Στ" }
    jawabanBenarId: a
    penjelasan: "Kesetimbangan benda tegar butuh resultan gaya nol DAN resultan momen gaya nol."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Titik berat adalah..."
    pilihan:
      - { id: a, teks: "Titik tunggal tempat seluruh berat benda dianggap terpusat" }
      - { id: b, teks: "Titik tertinggi benda" }
      - { id: c, teks: "Titik pusat rotasi yang selalu tetap" }
      - { id: d, teks: "Titik di mana gaya gesek bekerja" }
    jawabanBenarId: a
    penjelasan: "Titik berat mewakili seluruh berat benda yang tersebar, dianggap terpusat di satu titik."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Pada tuas/jungkat-jungkit yang seimbang, hubungan yang benar adalah..."
    pilihan:
      - { id: a, teks: "F1 × r1 = F2 × r2" }
      - { id: b, teks: "F1 = F2" }
      - { id: c, teks: "r1 = r2" }
      - { id: d, teks: "F1 + F2 = 0" }
    jawabanBenarId: a
    penjelasan: "Torsi kedua sisi harus sama besar: F1×r1=F2×r2."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Anak 30 kg duduk 2 m dari titik tumpu. Berapa jarak anak 40 kg (sisi berlawanan) supaya seimbang?"
    pilihan:
      - { id: a, teks: "1,5 m" }
      - { id: b, teks: "2 m" }
      - { id: c, teks: "2,67 m" }
      - { id: d, teks: "1 m" }
    jawabanBenarId: a
    penjelasan: "30×2=40×r2 → r2=60/40=1,5 m."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Kesetimbangan tuas mengharuskan kedua sisi punya berat yang PERSIS SAMA."
    jawabanBenar: false
    penjelasan: "Salah -- yang harus sama adalah TORSI (F×r), bukan gaya/beratnya saja."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Benda yang setimbang harus diam total, tidak boleh bergerak sama sekali."
    jawabanBenar: false
    penjelasan: "Salah -- kesetimbangan berarti tidak ada PERCEPATAN, benda tetap bisa bergerak dengan kecepatan tetap."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Kesetimbangan stabil terjadi kalau benda kembali ke posisi semula setelah sedikit terganggu."
    jawabanBenar: true
    penjelasan: "Benar -- ciri khas kesetimbangan stabil."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Beban 25 N pada jarak 4 m di kiri titik tumpu. Berapa beban yang dibutuhkan pada jarak 5 m di kanan supaya seimbang, dalam Newton?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["20"]
    penjelasan: "25×4=F2×5 → 100=5F2 → F2=20 N."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Batang ringan dengan beban 2 kg di x=0 dan 8 kg di x=5 m. Di mana letak titik beratnya, dalam meter dari ujung kiri?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["4"]
    penjelasan: "x_pusat=(2×0+8×5)/(2+8)=40/10=4 m."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Batang ringan dengan beban 6 kg di x=0 dan 4 kg di x=10 m. Di mana letak titik beratnya, dalam meter?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["4"]
    penjelasan: "x_pusat=(6×0+4×10)/(6+4)=40/10=4 m."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan jenis kesetimbangan dengan responnya setelah diganggu."
    pasangan:
      - { id: p1, kiri: "Stabil", kanan: "Kembali ke posisi semula" }
      - { id: p2, kiri: "Labil", kanan: "Terus menjauh dari posisi semula" }
      - { id: p3, kiri: "Netral", kanan: "Diam di posisi baru" }
    penjelasan: "Stabil kembali, labil menjauh, netral diam di tempat baru."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan contoh dengan jenis kesetimbangannya."
    pasangan:
      - { id: p1, kiri: "Bandul yang digantung", kanan: "Stabil" }
      - { id: p2, kiri: "Pensil berdiri di ujung runcing", kanan: "Labil" }
    penjelasan: "Bandul kembali ke posisi gantung (stabil), pensil runcing mudah jatuh menjauh (labil)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung titik berat sistem dua beban, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan massa dan posisi masing-masing beban" }
      - { id: i2, teks: "Kalikan tiap massa dengan posisinya (m×x)" }
      - { id: i3, teks: "Jumlahkan semua hasil kali m×x" }
      - { id: i4, teks: "Bagi jumlah itu dengan total massa untuk mendapat x_pusat" }
    penjelasan: "Data massa-posisi dulu, kalikan, jumlahkan, baru dibagi total massa."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sesuai jenis kesetimbangan yang paling tepat."
    kategori:
      - { id: stabil, label: "Stabil" }
      - { id: labil, label: "Labil" }
      - { id: netral, label: "Netral" }
    item:
      - { id: t1, teks: "Kerucut berdiri di alasnya yang lebar", kategoriBenarId: stabil }
      - { id: t2, teks: "Kerucut berdiri di ujung puncaknya", kategoriBenarId: labil }
      - { id: t3, teks: "Bola menggelinding di lantai datar", kategoriBenarId: netral }
    penjelasan: "Alas lebar = stabil, ujung runcing = labil, lantai datar (tanpa gaya pemulih/penjauh) = netral."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan syarat berikut sesuai jenis kesetimbangan yang dijaminnya."
    kategori:
      - { id: translasi, label: "Mencegah Percepatan Translasi" }
      - { id: rotasi, label: "Mencegah Percepatan Rotasi" }
    item:
      - { id: t1, teks: "ΣF = 0", kategoriBenarId: translasi }
      - { id: t2, teks: "Στ = 0", kategoriBenarId: rotasi }
    penjelasan: "ΣF=0 mencegah percepatan translasi (meluncur), Στ=0 mencegah percepatan rotasi (berputar)."
    skor: 1
draft: false
---
