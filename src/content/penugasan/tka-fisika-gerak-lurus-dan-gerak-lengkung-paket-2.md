---
judul: "Latihan TKA: Gerak Lurus & Gerak Lengkung (Paket 2)"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan (Paket 2, soal baru) -- 6 tipe interaktif dengan porsi HOTS, mencakup analisis grafik x-t/v-t dan perbandingan jarak tempuh antar benda yang belum dibahas di Paket 1."
materiSlug: gerak-lurus-berubah-beraturan
pinHash: 34a9f91ea9446f32c7756a96b71f7d75a632633383abc73c25775c2c682012f3
pinBerlakuHingga: 2027-03-20
pembahasanPinHash: fd51b8b3ac33aa559204bcaba81fa323e03ee0978f03411fb1fec6001766427d
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Sebuah benda bergerak lurus dengan grafik posisi terhadap waktu (x-t) berupa garis lurus MIRING (bukan mendatar). Jenis gerak benda tersebut adalah..."
    pilihan:
      - { id: a, teks: "Gerak Lurus Beraturan (GLB)" }
      - { id: b, teks: "Benda sedang diam" }
      - { id: c, teks: "Gerak Lurus Berubah Beraturan (GLBB)" }
      - { id: d, teks: "Gerak melingkar" }
    jawabanBenarId: a
    penjelasan: "Grafik x-t berupa garis lurus (kemiringan/gradien tetap) menandakan kecepatan konstan -- ciri GLB. Kalau grafik x-t melengkung (parabola), baru itu GLBB."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah motor melaju dengan kecepatan awal 4 m/s, kemudian dipercepat tetap sehingga kecepatannya menjadi 16 m/s dalam waktu 4 sekon. Besar percepatan motor tersebut adalah..."
    pilihan:
      - { id: a, teks: "2 m/s²" }
      - { id: b, teks: "3 m/s²" }
      - { id: c, teks: "4 m/s²" }
      - { id: d, teks: "5 m/s²" }
    jawabanBenarId: b
    penjelasan: "a = (v − v₀)/t = (16 − 4)/4 = 12/4 = 3 m/s²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sebuah mobil bergerak dengan kecepatan awal 5 m/s dan percepatan tetap 2 m/s² selama 3 sekon. Jarak yang ditempuh mobil tersebut adalah..."
    pilihan:
      - { id: a, teks: "15 m" }
      - { id: b, teks: "18 m" }
      - { id: c, teks: "21 m" }
      - { id: d, teks: "24 m" }
    jawabanBenarId: d
    penjelasan: "x = v₀t + ½at² = (5×3) + (½×2×3²) = 15 + 9 = 24 m."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Dua benda mulai bergerak dari keadaan diam pada saat yang sama. Benda P memiliki percepatan 4 m/s² dan benda Q memiliki percepatan 6 m/s². Perbandingan jarak yang ditempuh benda P terhadap benda Q setelah waktu yang sama (xP : xQ) adalah..."
    pilihan:
      - { id: a, teks: "1 : 1" }
      - { id: b, teks: "2 : 3" }
      - { id: c, teks: "3 : 2" }
      - { id: d, teks: "4 : 6" }
    jawabanBenarId: b
    penjelasan: "Karena keduanya mulai dari diam (v₀=0), x = ½at², sehingga x sebanding dengan a untuk waktu yang sama. xP:xQ = aP:aQ = 4:6 = 2:3 (bentuk paling sederhana)."
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Grafik posisi terhadap waktu (x-t) untuk Gerak Lurus Beraturan (GLB) berupa garis lurus."
    jawabanBenar: true
    penjelasan: "Benar -- karena kecepatan konstan, posisi berubah secara linear terhadap waktu, sehingga grafiknya berupa garis lurus (miring, bukan mendatar)."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Benda yang mengalami GLBB diperlambat akan selalu berhenti total dan tidak bergerak lagi setelah kecepatannya mencapai nol."
    jawabanBenar: false
    penjelasan: "Salah -- contohnya bola yang dilempar vertikal ke atas: kecepatannya nol sesaat di titik tertinggi, tapi percepatan gravitasi tetap bekerja sehingga bola bergerak lagi (berbalik arah, jatuh ke bawah)."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah benda bergerak dengan kecepatan awal 6 m/s dan kecepatan akhir 18 m/s dalam waktu 4 sekon. Percepatan benda tersebut adalah ... m/s²."
    angka: true
    toleransi: 0
    jawabanBenar: ["3"]
    penjelasan: "a = (v − v₀)/t = (18 − 6)/4 = 12/4 = 3 m/s²."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah benda bergerak dengan kecepatan awal 3 m/s dan percepatan tetap 2 m/s² selama 5 sekon. Jarak yang ditempuhnya adalah ... m."
    angka: true
    toleransi: 0
    jawabanBenar: ["40"]
    penjelasan: "x = v₀t + ½at² = (3×5) + (½×2×5²) = 15 + 25 = 40 m."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah bola ditembakkan dengan kecepatan awal 20 m/s pada sudut 30° terhadap horizontal (g = 10 m/s², sin 30° = 0,5). Tinggi maksimum yang dicapai bola tersebut adalah ... m."
    angka: true
    toleransi: 0
    jawabanBenar: ["5"]
    penjelasan: "v₀y = v₀ sin θ = 20 × 0,5 = 10 m/s. h maks = v₀y²/(2g) = 10²/(2×10) = 100/20 = 5 m."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan besaran gerak dengan rumusnya."
    pasangan:
      - { id: p1, kiri: "Posisi pada GLB", kanan: "x = x₀ + v·t" }
      - { id: p2, kiri: "Kecepatan pada GLBB", kanan: "v = v₀ + a·t" }
      - { id: p3, kiri: "Posisi pada GLBB", kanan: "x = x₀ + v₀t + ½at²" }
      - { id: p4, kiri: "Kecepatan linear pada gerak melingkar", kanan: "v = ω × r" }
    penjelasan: "Rumus posisi GLBB (x = x₀ + v₀t + ½at²) sebenarnya rumus paling umum -- kalau a = 0, rumus ini otomatis menjadi rumus GLB (x = x₀ + v₀t)."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan situasi sehari-hari berikut dengan jenis gerak yang paling sesuai."
    pasangan:
      - { id: p1, kiri: "Motor yang dipercepat dari lampu merah hingga mencapai kecepatan jelajah", kanan: "GLBB dipercepat" }
      - { id: p2, kiri: "Bola menggelinding turun dari puncak bidang miring dengan percepatan tetap", kanan: "GLBB dipercepat" }
      - { id: p3, kiri: "Kereta melaju dengan kecepatan tetap di rel lurus yang panjang", kanan: "GLB" }
      - { id: p4, kiri: "Roda gila (flywheel) mesin berputar dengan kecepatan sudut tetap", kanan: "Gerak Melingkar Beraturan (GMB)" }
    penjelasan: "GLBB dipercepat bisa muncul dari dua sumber percepatan berbeda -- gaya mesin (motor digas) atau gaya gravitasi (bidang miring) -- tapi ciri kinematikanya (kecepatan bertambah beraturan) tetap sama."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menyelesaikan soal GLBB secara umum, dari yang paling awal."
    item:
      - { id: i1, teks: "Identifikasi besaran yang diketahui (v₀, a, t, atau x) dari soal" }
      - { id: i2, teks: "Tentukan besaran yang ditanyakan" }
      - { id: i3, teks: "Pilih rumus GLBB yang menghubungkan besaran diketahui dengan yang ditanyakan" }
      - { id: i4, teks: "Substitusikan nilai yang diketahui ke dalam rumus" }
      - { id: i5, teks: "Hitung dan selesaikan untuk mendapatkan nilai yang ditanyakan" }
    penjelasan: "Ada 3 rumus utama GLBB (v=v₀+at, x=x₀+v₀t+½at², v²=v₀²+2a(x-x₀)) -- kunci mengerjakan soal adalah memilih rumus yang PALING SESUAI dengan besaran yang diketahui/ditanya, supaya tidak perlu menghitung dua tahap."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menentukan percepatan suatu benda dari grafik kecepatan terhadap waktu (v-t), dari yang paling awal."
    item:
      - { id: i1, teks: "Pilih dua titik pada garis grafik v-t" }
      - { id: i2, teks: "Hitung selisih kecepatan (Δv) antara kedua titik tersebut" }
      - { id: i3, teks: "Hitung selisih waktu (Δt) antara kedua titik tersebut" }
      - { id: i4, teks: "Hitung percepatan sebagai gradien garis: a = Δv/Δt" }
    penjelasan: "Percepatan pada grafik v-t = gradien (kemiringan) garisnya -- semakin curam garisnya, semakin besar percepatannya."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan ciri berikut sebagai ciri Grafik x-t atau Grafik v-t untuk Gerak Lurus Beraturan (GLB)."
    kategori:
      - { id: xt, label: "Ciri Grafik x-t" }
      - { id: vt, label: "Ciri Grafik v-t" }
    item:
      - { id: t1, teks: "Berupa garis lurus MIRING (menandakan posisi berubah beraturan)", kategoriBenarId: xt }
      - { id: t2, teks: "Berupa garis lurus MENDATAR (menandakan kecepatan tetap)", kategoriBenarId: vt }
      - { id: t3, teks: "Kemiringan/gradiennya menyatakan kecepatan benda", kategoriBenarId: xt }
      - { id: t4, teks: "Luas daerah di bawah kurvanya menyatakan jarak tempuh", kategoriBenarId: vt }
    penjelasan: "Grafik x-t dan v-t sama-sama bisa dipakai untuk GLB, tapi bentuknya berbeda -- x-t miring (posisi terus bertambah), v-t mendatar (kecepatan tetap). Keduanya menyimpan informasi yang beda pula (gradien vs luas)."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan situasi berikut berdasarkan jenis geraknya: GLB, GLBB Dipercepat, atau GLBB Diperlambat."
    kategori:
      - { id: glb, label: "GLB" }
      - { id: dipercepat, label: "GLBB Dipercepat" }
      - { id: diperlambat, label: "GLBB Diperlambat" }
    item:
      - { id: t1, teks: "Mobil melaju dengan kecepatan konstan di jalan tol yang lurus dan sepi", kategoriBenarId: glb }
      - { id: t2, teks: "Motor yang digas dari keadaan diam hingga kecepatannya terus bertambah", kategoriBenarId: dipercepat }
      - { id: t3, teks: "Mobil yang direm hingga kecepatannya terus berkurang mendekati lampu merah", kategoriBenarId: diperlambat }
      - { id: t4, teks: "Bola yang menggelinding menaiki bidang miring, kecepatannya semakin berkurang", kategoriBenarId: diperlambat }
      - { id: t5, teks: "Kereta melaju dengan kecepatan tetap di sepanjang rel lurus", kategoriBenarId: glb }
      - { id: t6, teks: "Buah kelapa yang jatuh bebas dari pohon, kecepatannya terus bertambah", kategoriBenarId: dipercepat }
    penjelasan: "GLBB dipercepat/diperlambat bisa berasal dari sumber percepatan yang berbeda-beda (mesin, gravitasi, gesekan/pengereman) -- yang menentukan kategorinya adalah APAKAH kecepatannya bertambah atau berkurang, bukan sumber percepatannya."
    skor: 1
draft: false
---
