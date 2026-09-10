---
judul: "Tes Internal -- Semua Tipe Soal"
kelas: X
mapel: Fisika
deskripsi: "Entri buat verifikasi lokal fitur Penugasan (6 tipe soal fase 1). BUKAN tugas sungguhan -- hapus/draft-kan sebelum situs ini dipakai murid."
pinHash: ce4e4dd8af22f4d222522dbcd63c0cfa8bc6e099a7e2457424d0cb023eedf49f
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Satuan SI untuk gaya adalah..."
    pilihan:
      - { id: a, teks: "Joule" }
      - { id: b, teks: "Newton" }
      - { id: c, teks: "Watt" }
      - { id: d, teks: "Pascal" }
    jawabanBenarId: b
    penjelasan: "Satuan gaya dalam SI adalah Newton (N), sesuai Hukum II Newton F = m.a."
    skor: 1
  - tipe: benar-salah
    id: soal-2
    soal: "Kecepatan adalah besaran skalar."
    jawabanBenar: false
    penjelasan: "Kecepatan punya arah, jadi termasuk besaran vektor -- yang skalar adalah kelajuan (besarnya saja)."
    skor: 1
  - tipe: isian-singkat
    id: soal-3
    soal: "Sebuah benda bermassa 2 kg didorong gaya 10 N. Berapa percepatannya (dalam m/s^2)?"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["5"]
    penjelasan: "a = F/m = 10/2 = 5 m/s^2."
    skor: 1
  - tipe: menjodohkan
    id: soal-4
    soal: "Jodohkan besaran dengan satuannya."
    pasangan:
      - { id: p1, kiri: "Massa", kanan: "kilogram" }
      - { id: p2, kiri: "Waktu", kanan: "sekon" }
      - { id: p3, kiri: "Panjang", kanan: "meter" }
    penjelasan: "Massa-kilogram, Waktu-sekon, Panjang-meter -- tiga dari 7 besaran pokok SI."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-5
    soal: "Susun langkah metode ilmiah dari yang paling awal."
    item:
      - { id: i1, teks: "Merumuskan masalah" }
      - { id: i2, teks: "Menyusun hipotesis" }
      - { id: i3, teks: "Melakukan eksperimen" }
      - { id: i4, teks: "Menarik kesimpulan" }
    penjelasan: "Urutan baku: rumuskan masalah, susun hipotesis, eksperimen, lalu simpulkan."
    skor: 1
  - tipe: drag-drop
    id: soal-6
    soal: "Kelompokkan besaran berikut ke kategori yang tepat."
    kategori:
      - { id: pokok, label: "Besaran Pokok" }
      - { id: turunan, label: "Besaran Turunan" }
    item:
      - { id: t1, teks: "Massa", kategoriBenarId: pokok }
      - { id: t2, teks: "Kecepatan", kategoriBenarId: turunan }
      - { id: t3, teks: "Waktu", kategoriBenarId: pokok }
      - { id: t4, teks: "Gaya", kategoriBenarId: turunan }
    penjelasan: "Massa & waktu adalah besaran pokok; kecepatan & gaya diturunkan dari besaran pokok."
    skor: 1
draft: true
---
