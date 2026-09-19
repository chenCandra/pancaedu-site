---
judul: "Dinamika Rotasi dan Energi Kinetik Rotasi"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar dinamika rotasi (τ=Iα) dan energi kinetik rotasi."
materiSlug: dinamika-rotasi-dan-energi-kinetik-rotasi
pinHash: 8b9ec53121e8f6a2aaec93160a5b838250f72cecc10b8f2ac3845cda261633ae
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Hukum II Newton versi rotasi adalah..."
    pilihan:
      - { id: a, teks: "τ = I × α" }
      - { id: b, teks: "F = m × a" }
      - { id: c, teks: "τ = m × v" }
      - { id: d, teks: "F = I × v" }
    jawabanBenarId: a
    penjelasan: "τ = I×α, versi rotasi dari F=ma."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus energi kinetik rotasi adalah..."
    pilihan:
      - { id: a, teks: "Ek = ½Iω²" }
      - { id: b, teks: "Ek = ½mv²" }
      - { id: c, teks: "Ek = Iω" }
      - { id: d, teks: "Ek = τα" }
    jawabanBenarId: a
    penjelasan: "Ek rotasi = ½Iω²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Piringan pejal (I=0,2 kg·m²) diberi torsi 4 N·m. Berapa percepatan sudutnya?"
    pilihan:
      - { id: a, teks: "20 rad/s²" }
      - { id: b, teks: "0,8 rad/s²" }
      - { id: c, teks: "4,2 rad/s²" }
      - { id: d, teks: "5 rad/s²" }
    jawabanBenarId: a
    penjelasan: "α = τ/I = 4/0,2 = 20 rad/s²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Massa (m) pada gerak translasi analog dengan besaran apa pada gerak rotasi?"
    pilihan:
      - { id: a, teks: "Momen Inersia (I)" }
      - { id: b, teks: "Torsi (τ)" }
      - { id: c, teks: "Kecepatan sudut (ω)" }
      - { id: d, teks: "Percepatan sudut (α)" }
    jawabanBenarId: a
    penjelasan: "Massa analog dengan momen inersia -- keduanya menyatakan 'kelembaman'."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Benda yang berputar di tempat (tidak berpindah posisi) tetap punya energi kinetik rotasi."
    jawabanBenar: true
    penjelasan: "Benar -- energi kinetik rotasi (½Iω²) ada terlepas dari apakah posisi benda berpindah atau tidak."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Untuk torsi yang sama, benda dengan momen inersia lebih besar akan mengalami percepatan sudut yang lebih besar juga."
    jawabanBenar: false
    penjelasan: "Salah -- α=τ/I berbanding terbalik dengan I, jadi momen inersia lebih besar menghasilkan percepatan sudut lebih KECIL."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Benda yang menggelinding (berputar sambil bergerak maju) punya energi kinetik translasi DAN rotasi sekaligus."
    jawabanBenar: true
    penjelasan: "Benar -- menggelinding menggabungkan gerak translasi (½mv²) dan rotasi (½Iω²)."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Benda dengan I=0,3 kg·m² diberi torsi 6 N·m. Berapa percepatan sudutnya, dalam rad/s²?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["20"]
    penjelasan: "α=τ/I=6/0,3=20 rad/s²."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Benda dengan α=15 rad/s² dari diam selama 2 sekon. Berapa kecepatan sudutnya, dalam rad/s?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["30"]
    penjelasan: "ω=α×t=15×2=30 rad/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Benda dengan I=0,4 kg·m² berputar dengan ω=10 rad/s. Berapa energi kinetik rotasinya, dalam Joule?"
    angka: true
    toleransi: 1
    jawabanBenar: ["20"]
    penjelasan: "Ek=½×0,4×10²=½×0,4×100=20 J."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan besaran translasi dengan analog rotasinya."
    pasangan:
      - { id: p1, kiri: "Massa (m)", kanan: "Momen Inersia (I)" }
      - { id: p2, kiri: "Gaya (F)", kanan: "Torsi (τ)" }
      - { id: p3, kiri: "Kecepatan (v)", kanan: "Kecepatan Sudut (ω)" }
    penjelasan: "m-I, F-τ, v-ω adalah pasangan analog translasi-rotasi."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan rumus dengan besaran yang dihasilkannya."
    pasangan:
      - { id: p1, kiri: "τ/I", kanan: "Percepatan Sudut (α)" }
      - { id: p2, kiri: "α×t (dari diam)", kanan: "Kecepatan Sudut (ω)" }
      - { id: p3, kiri: "½Iω²", kanan: "Energi Kinetik Rotasi" }
    penjelasan: "τ/I=α, α×t=ω, ½Iω²=Ek rotasi."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung energi kinetik rotasi dari torsi dan waktu, dari yang paling awal."
    item:
      - { id: i1, teks: "Hitung percepatan sudut (α=τ/I)" }
      - { id: i2, teks: "Hitung kecepatan sudut setelah waktu tertentu (ω=α×t)" }
      - { id: i3, teks: "Masukkan ω ke rumus energi kinetik rotasi (Ek=½Iω²)" }
    penjelasan: "Percepatan sudut dulu, lalu kecepatan sudut, baru energi kinetik rotasi."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan besaran berikut sesuai apakah termasuk gerak translasi atau rotasi."
    kategori:
      - { id: translasi, label: "Translasi" }
      - { id: rotasi, label: "Rotasi" }
    item:
      - { id: t1, teks: "Massa (m)", kategoriBenarId: translasi }
      - { id: t2, teks: "Momen Inersia (I)", kategoriBenarId: rotasi }
      - { id: t3, teks: "Gaya (F)", kategoriBenarId: translasi }
      - { id: t4, teks: "Torsi (τ)", kategoriBenarId: rotasi }
    penjelasan: "Massa dan gaya untuk translasi, momen inersia dan torsi untuk rotasi."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sesuai kebenarannya."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Ek rotasi berbanding lurus dengan kuadrat kecepatan sudut", kategoriBenarId: benar }
      - { id: t2, teks: "Energi kinetik hanya ada pada benda yang berpindah tempat", kategoriBenarId: salah }
      - { id: t3, teks: "Benda menggelinding bisa punya Ek translasi dan rotasi sekaligus", kategoriBenarId: benar }
    penjelasan: "Ek=½Iω² (kuadrat ω, benar). Energi kinetik rotasi ada meski tidak berpindah tempat (pernyataan kedua salah). Menggelinding punya kedua jenis Ek (benar)."
    skor: 1
draft: false
---
