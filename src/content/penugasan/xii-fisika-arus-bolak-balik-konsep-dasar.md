---
judul: "Arus Bolak-Balik: Konsep Dasar"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar perbedaan AC dan DC, nilai RMS, periode, dan frekuensi."
materiSlug: arus-bolak-balik-konsep-dasar
pinHash: 3de1924b2483b731b71d4bec24402ef44aa1ee6f8ce6332b2e33929fe08d833c
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Arus Bolak-Balik (AC) berbeda dari Arus Searah (DC) karena..."
    pilihan:
      - { id: a, teks: "Arah dan besarnya berubah-ubah membentuk gelombang sinus terhadap waktu" }
      - { id: b, teks: "Selalu mengalir satu arah dengan besar konstan" }
      - { id: c, teks: "Hanya bisa dihasilkan oleh baterai" }
      - { id: d, teks: "Tidak bisa dipakai untuk menyalakan lampu" }
    jawabanBenarId: a
    penjelasan: "AC berubah arah dan besarnya secara periodik membentuk gelombang sinus."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Alasan utama listrik PLN memakai AC (bukan DC) adalah..."
    pilihan:
      - { id: a, teks: "AC bisa dengan mudah dinaik/turunkan tegangannya pakai transformator" }
      - { id: b, teks: "AC lebih murah diproduksi dari DC" }
      - { id: c, teks: "DC berbahaya bagi manusia sedangkan AC tidak" }
      - { id: d, teks: "AC tidak bisa dipakai untuk peralatan rumah tangga" }
    jawabanBenarId: a
    penjelasan: "Transformator hanya bekerja dengan AC -- krusial untuk transmisi listrik jarak jauh yang efisien."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Frekuensi listrik PLN di Indonesia adalah..."
    pilihan:
      - { id: a, teks: "50 Hz" }
      - { id: b, teks: "100 Hz" }
      - { id: c, teks: "60 Hz" }
      - { id: d, teks: "220 Hz" }
    jawabanBenarId: a
    penjelasan: "Listrik PLN Indonesia memakai frekuensi 50 Hz."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Tegangan 220V yang tertulis di stopkontak rumah adalah nilai..."
    pilihan:
      - { id: a, teks: "RMS (efektif), bukan nilai puncaknya" }
      - { id: b, teks: "Puncak (maksimum) tegangan" }
      - { id: c, teks: "Minimum tegangan" }
      - { id: d, teks: "Rata-rata aritmatika sederhana" }
    jawabanBenarId: a
    penjelasan: "220V adalah nilai RMS -- nilai puncak sebenarnya sekitar 220×√2 ≈ 311V."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Transformator bisa bekerja baik dengan sumber AC maupun DC."
    jawabanBenar: false
    penjelasan: "Salah -- transformator hanya bekerja dengan AC, karena butuh fluks magnetik yang terus berubah."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Nilai RMS selalu lebih kecil dari nilai puncak (Vrms = Vp/√2)."
    jawabanBenar: true
    penjelasan: "Benar -- karena √2 ≈ 1,414, Vrms = Vp/1,414 selalu lebih kecil dari Vp."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Frekuensi 50 Hz berarti arus berbalik arah 50 kali dalam satu detik."
    jawabanBenar: true
    penjelasan: "Benar -- frekuensi menyatakan jumlah gelombang penuh (siklus) per detik."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Berapa frekuensi (dalam Hz) listrik PLN di Indonesia?"
    angka: true
    toleransi: 0
    jawabanBenar: ["50"]
    penjelasan: "Listrik PLN Indonesia memakai frekuensi 50 Hz."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Nilai efektif tegangan AC yang setara DC dalam hal daya disebut nilai apa? (singkatan 3 huruf)"
    angka: false
    toleransi: 0
    jawabanBenar: ["RMS"]
    penjelasan: "RMS (Root Mean Square) adalah nilai efektif tegangan/arus AC."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Kalau tegangan puncak sebuah AC adalah 100V, berapa nilai RMS-nya (bulatkan ke satu angka desimal)?"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["70.7"]
    penjelasan: "Vrms = Vp/√2 = 100/1,414 ≈ 70,7V."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan istilah dengan artinya."
    pasangan:
      - { id: p1, kiri: "Tegangan Puncak (Vp)", kanan: "Nilai tertinggi yang dicapai gelombang" }
      - { id: p2, kiri: "Periode (T)", kanan: "Waktu untuk satu gelombang penuh" }
      - { id: p3, kiri: "Frekuensi (f)", kanan: "Jumlah gelombang penuh per detik" }
      - { id: p4, kiri: "Nilai RMS", kanan: "Nilai efektif setara DC" }
    penjelasan: "Setiap istilah menggambarkan aspek berbeda dari gelombang AC."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan ciri dengan jenis arusnya (AC atau DC)."
    pasangan:
      - { id: p1, kiri: "Arah berubah-ubah, bentuk sinus", kanan: "AC" }
      - { id: p2, kiri: "Arah tetap, nilai konstan", kanan: "DC" }
      - { id: p3, kiri: "Bisa diubah tegangannya pakai trafo", kanan: "AC" }
    penjelasan: "AC dan DC punya ciri-ciri yang sangat berbeda."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun peristiwa historis 'War of Currents' berikut, dari yang paling awal."
    item:
      - { id: i1, teks: "Thomas Edison mengembangkan sistem DC" }
      - { id: i2, teks: "Nikola Tesla mengembangkan sistem AC" }
      - { id: i3, teks: "Terjadi persaingan (War of Currents) antara pendukung AC dan DC" }
      - { id: i4, teks: "Sistem AC akhirnya jadi standar jaringan listrik dunia karena bisa diubah tegangannya" }
    penjelasan: "War of Currents adalah persaingan historis di akhir abad ke-19 yang akhirnya dimenangkan sistem AC untuk jaringan listrik skala besar."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan sumber listrik berikut sebagai AC atau DC."
    kategori:
      - { id: ac, label: "AC" }
      - { id: dc, label: "DC" }
    item:
      - { id: t1, teks: "Listrik PLN dari stopkontak", kategoriBenarId: ac }
      - { id: t2, teks: "Baterai AA", kategoriBenarId: dc }
      - { id: t3, teks: "Generator pembangkit listrik", kategoriBenarId: ac }
      - { id: t4, teks: "Panel sel surya", kategoriBenarId: dc }
    penjelasan: "PLN dan generator pembangkit menghasilkan AC, sementara baterai dan sel surya menghasilkan DC."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah tentang AC."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "220V adalah nilai RMS, bukan nilai puncak", kategoriBenarId: benar }
      - { id: t2, teks: "Tegangan puncak listrik rumah kira-kira 311V", kategoriBenarId: benar }
      - { id: t3, teks: "DC bisa dinaik-turunkan tegangannya dengan trafo, sama seperti AC", kategoriBenarId: salah }
      - { id: t4, teks: "Frekuensi 50 Hz berarti arus berbalik arah sekali per detik", kategoriBenarId: salah }
    penjelasan: "220V adalah RMS (puncak ≈311V), trafo hanya bekerja dengan AC, dan 50 Hz berarti 50 kali berbalik arah per detik, bukan sekali."
    skor: 1
draft: false
---
