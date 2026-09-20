---
judul: "Latihan TKA: Pengukuran & Alat Ukur (Paket 2)"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan (Paket 2, soal baru) -- 6 tipe interaktif dengan porsi HOTS, mencakup ketidakpastian relatif dan kesalahan titik nol (zero error) yang belum dibahas di Paket 1."
materiSlug: alat-ukur
pinHash: 2d5628e7bc3d7a9f2fe4fda2afa9d99e40a279c7900d4bc272f0ff86ed5fdf9a
pinBerlakuHingga: 2027-03-20
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Untuk mengukur diameter BAGIAN DALAM sebuah pipa PVC berukuran sedang, alat ukur yang paling tepat digunakan adalah..."
    pilihan:
      - { id: a, teks: "Penggaris" }
      - { id: b, teks: "Mikrometer sekrup" }
      - { id: c, teks: "Jangka sorong" }
      - { id: d, teks: "Neraca" }
    jawabanBenarId: c
    penjelasan: "Jangka sorong punya rahang dalam yang dirancang khusus untuk diameter bagian dalam benda berongga -- mikrometer sekrup tidak dirancang untuk menjangkau bagian dalam pipa."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Seorang siswa membaca jangka sorong: skala utama menunjukkan 3,7 cm, dan garis skala nonius yang paling berimpit berada di angka ke-8 (ketelitian 0,01 cm). Hasil pengukurannya adalah..."
    pilihan:
      - { id: a, teks: "3,70 cm" }
      - { id: b, teks: "3,78 cm" }
      - { id: c, teks: "3,80 cm" }
      - { id: d, teks: "3,87 cm" }
    jawabanBenarId: b
    penjelasan: "Hasil = skala utama + (angka nonius × ketelitian) = 3,7 + (8 × 0,01) = 3,7 + 0,08 = 3,78 cm."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Hasil pembacaan mikrometer sekrup menunjukkan skala utama 4,0 mm dan skala putar di angka 15 (ketelitian 0,01 mm). Diameter benda yang terukur adalah..."
    pilihan:
      - { id: a, teks: "4,00 mm" }
      - { id: b, teks: "4,15 mm" }
      - { id: c, teks: "4,50 mm" }
      - { id: d, teks: "5,50 mm" }
    jawabanBenarId: b
    penjelasan: "Hasil = skala utama + (skala putar × ketelitian) = 4,0 + (15 × 0,01) = 4,0 + 0,15 = 4,15 mm."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Siswa A mengukur panjang pensil dengan jangka sorong dan mendapat hasil (8,45 ± 0,005) cm. Siswa B mengukur panjang buku dengan penggaris dan mendapat hasil (25,0 ± 0,05) cm. Berdasarkan ketidakpastian RELATIF (persentase), pengukuran siapa yang lebih presisi?"
    pilihan:
      - { id: a, teks: "Siswa A, karena ketidakpastian relatifnya lebih kecil" }
      - { id: b, teks: "Siswa B, karena ketidakpastian relatifnya lebih kecil" }
      - { id: c, teks: "Sama presisi, karena keduanya mengukur panjang" }
      - { id: d, teks: "Tidak bisa dibandingkan sama sekali" }
    jawabanBenarId: a
    penjelasan: "Ketidakpastian relatif A = 0,005/8,45 × 100% ≈ 0,06%. Ketidakpastian relatif B = 0,05/25 × 100% = 0,2%. Meski angka mentah ketidakpastian B lebih besar dari A secara absolut, yang menentukan presisi adalah PERSENTASE-nya -- dan Siswa A punya persentase lebih kecil, jadi lebih presisi."
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Ketepatan (akurasi) adalah istilah untuk menyatakan seberapa KONSISTEN hasil pengukuran berulang satu sama lain."
    jawabanBenar: false
    penjelasan: "Salah -- yang menyatakan konsistensi hasil berulang adalah KETELITIAN (presisi). Ketepatan (akurasi) menyatakan seberapa DEKAT hasil dengan nilai sebenarnya."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Mikrometer sekrup pada umumnya memiliki ketelitian yang lebih tinggi dibandingkan jangka sorong."
    jawabanBenar: true
    penjelasan: "Benar -- mikrometer sekrup umumnya berketelitian 0,01 mm, lebih tinggi dari jangka sorong yang umumnya 0,05 mm atau 0,02 mm."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah jangka sorong memiliki skala terkecil (ketelitian) 0,1 mm. Ketidakpastian pengukuran TUNGGAL menggunakan jangka sorong tersebut adalah ... mm."
    angka: true
    toleransi: 0
    jawabanBenar: ["0.05"]
    penjelasan: "Ketidakpastian pengukuran tunggal = setengah skala terkecil = ½ × 0,1 mm = 0,05 mm."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Lima kali pengukuran massa sebuah benda dengan neraca menghasilkan data (gram): 25,2 / 25,4 / 25,3 / 25,1 / 25,5. Nilai rata-ratanya adalah ... gram."
    angka: true
    toleransi: 0.05
    jawabanBenar: ["25.3"]
    penjelasan: "Rata-rata = (25,2+25,4+25,3+25,1+25,5)/5 = 126,5/5 = 25,3 gram."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Hasil pengukuran massa suatu benda dilaporkan sebagai m = (50,0 ± 0,5) gram. Berapa persen ketidakpastian relatif pengukuran tersebut? (tulis angkanya saja tanpa simbol %)"
    angka: true
    toleransi: 0.1
    jawabanBenar: ["1"]
    penjelasan: "Ketidakpastian relatif = (Δm/m) × 100% = (0,5/50) × 100% = 1%."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan bagian jangka sorong dengan fungsinya."
    pasangan:
      - { id: p1, kiri: "Rahang luar", kanan: "Mengukur diameter/panjang bagian LUAR benda" }
      - { id: p2, kiri: "Rahang dalam", kanan: "Mengukur diameter bagian DALAM benda berongga" }
      - { id: p3, kiri: "Batang kedalaman", kanan: "Mengukur kedalaman sebuah lubang/celah" }
      - { id: p4, kiri: "Skala nonius", kanan: "Menambah ketelitian pembacaan di luar skala utama" }
    penjelasan: "Satu jangka sorong bisa dipakai untuk 3 jenis pengukuran berbeda (luar/dalam/kedalaman) tergantung bagian mana yang dipakai -- ini keunggulannya dibanding penggaris biasa."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan situasi pengukuran berikut dengan alat yang PALING tepat digunakan."
    pasangan:
      - { id: p1, kiri: "Mengukur diameter bagian dalam sebuah cincin", kanan: "Jangka sorong (rahang dalam)" }
      - { id: p2, kiri: "Mengukur kedalaman sebuah lubang baut", kanan: "Jangka sorong (batang kedalaman)" }
      - { id: p3, kiri: "Mengukur ketebalan pelat logam yang sangat tipis", kanan: "Mikrometer sekrup" }
      - { id: p4, kiri: "Menimbang bahan kimia dalam praktikum laboratorium", kanan: "Neraca" }
    penjelasan: "Jangka sorong satu alat bisa untuk tiga kebutuhan berbeda (luar/dalam/kedalaman) tergantung bagian mana yang dipakai -- sedangkan mikrometer sekrup khusus untuk benda sangat tipis/kecil."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah membaca hasil pengukuran dengan mikrometer sekrup, dari yang paling awal."
    item:
      - { id: i1, teks: "Letakkan benda di antara poros tetap (landasan) dan poros gerak (spindle)" }
      - { id: i2, teks: "Putar ratchet/pemutar sampai berbunyi 'klik', menandakan tekanan sudah cukup" }
      - { id: i3, teks: "Baca skala utama (angka di sepanjang sleeve/selongsong)" }
      - { id: i4, teks: "Baca skala putar (garis pada thimble yang sejajar dengan garis skala utama)" }
      - { id: i5, teks: "Jumlahkan skala utama + (skala putar × ketelitian alat)" }
    penjelasan: "Bunyi 'klik' pada ratchet penting supaya benda tidak ditekan terlalu kencang (merusak benda/alat) atau terlalu longgar (hasil tidak akurat)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah mengecek dan mengoreksi kesalahan titik nol (zero error) pada alat ukur sebelum digunakan, dari yang paling awal."
    item:
      - { id: i1, teks: "Rapatkan kedua rahang/poros alat ukur TANPA benda di antaranya" }
      - { id: i2, teks: "Amati apakah skala menunjukkan tepat nol, atau bergeser (tidak nol)" }
      - { id: i3, teks: "Jika bergeser, catat besar dan arah pergeserannya sebagai kesalahan titik nol" }
      - { id: i4, teks: "Saat mengukur benda sesungguhnya, koreksi hasil bacaan dengan kesalahan titik nol tersebut" }
    penjelasan: "Kesalahan titik nol adalah kesalahan SISTEMATIS pada alat itu sendiri (bukan cara membaca) -- kalau tidak dikoreksi, SEMUA hasil pengukuran dengan alat itu akan bergeser dengan besar yang sama."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan alat ukur panjang berikut berdasarkan tingkat ketelitiannya: Ketelitian Lebih Rendah, atau Ketelitian Lebih Tinggi."
    kategori:
      - { id: rendah, label: "Ketelitian Lebih Rendah" }
      - { id: tinggi, label: "Ketelitian Lebih Tinggi" }
    item:
      - { id: t1, teks: "Penggaris", kategoriBenarId: rendah }
      - { id: t2, teks: "Meteran gulung", kategoriBenarId: rendah }
      - { id: t3, teks: "Jangka sorong", kategoriBenarId: tinggi }
      - { id: t4, teks: "Mikrometer sekrup", kategoriBenarId: tinggi }
    penjelasan: "Penggaris dan meteran gulung cocok untuk pengukuran sehari-hari yang tidak butuh presisi tinggi, sedangkan jangka sorong dan mikrometer sekrup dirancang untuk kebutuhan yang lebih presisi."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan sumber kesalahan pengukuran berikut: Kesalahan Titik Nol (dari alat), atau Kesalahan Paralaks (dari cara membaca)."
    kategori:
      - { id: titik-nol, label: "Kesalahan Titik Nol" }
      - { id: paralaks, label: "Kesalahan Paralaks" }
    item:
      - { id: t1, teks: "Jangka sorong yang rahangnya sudah aus, tidak menunjukkan nol saat dirapatkan", kategoriBenarId: titik-nol }
      - { id: t2, teks: "Posisi mata pengamat tidak tegak lurus terhadap skala saat membaca", kategoriBenarId: paralaks }
      - { id: t3, teks: "Mikrometer sekrup yang skala nolnya bergeser karena sering terjatuh", kategoriBenarId: titik-nol }
      - { id: t4, teks: "Melihat skala dari sudut miring, membuat hasil baca berbeda dari pengamat lain", kategoriBenarId: paralaks }
    penjelasan: "Kesalahan titik nol berasal dari ALAT itu sendiri (mempengaruhi semua orang yang memakainya sama), sedangkan kesalahan paralaks berasal dari CARA PENGAMAT membaca (bisa beda-beda tiap orang, tergantung posisi mata)."
    skor: 2
draft: false
---
