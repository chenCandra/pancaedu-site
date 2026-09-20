---
judul: "Latihan TKA: Pengukuran & Alat Ukur (HOTS)"
kelas: TKA
mapel: Fisika
deskripsi: "5 soal latihan HOTS (penalaran tingkat tinggi, analisis, & penerapan lanjutan) -- variasi tipe interaktif, sesuai kisi-kisi resmi elemen Kinematika: Pengukuran & Alat Ukur. Lanjutan dari Latihan Dasar."
materiSlug: alat-ukur
pinHash: f6f0930acfa1298d21de26424bb56ed5b0b09e69f2315b824f27aee9e8891728
pinBerlakuHingga: 2027-03-20T00:00:00.000Z
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: Kelompok A dan Kelompok B sama-sama mengukur panjang meja yang sama sebanyak 5 kali. Data Kelompok A sangat berdekatan satu sama lain, tetapi jauh dari nilai sebenarnya (hasil pengukuran alat kalibrasi acuan). Data Kelompok B lebih bervariasi, tetapi rata-ratanya sangat dekat dengan nilai sebenarnya. Kesimpulan yang tepat adalah...
    pilihan:
      - id: a
        teks: Kelompok A teliti namun tidak tepat; Kelompok B tidak teliti namun tepat
      - id: b
        teks: Kelompok A tepat namun tidak teliti; Kelompok B teliti namun tidak tepat
      - id: c
        teks: Kedua kelompok sama-sama teliti dan tepat
      - id: d
        teks: Kedua kelompok sama-sama tidak teliti dan tidak tepat
    jawabanBenarId: a
    penjelasan: Data yang konsisten/berdekatan satu sama lain menunjukkan ketelitian (presisi) tinggi, terlepas dari benar-tidaknya. Data yang rata-ratanya dekat nilai sebenarnya menunjukkan ketepatan (akurasi) tinggi, meski variasinya besar. Jadi Kelompok A teliti tapi tidak tepat, Kelompok B tidak teliti tapi tepat.
    skor: 2
  - tipe: isian-singkat
    id: soal-2
    soal: Hasil pengukuran panjang suatu benda dilaporkan sebagai x = (12,5 ± 0,1) cm. Berapa persen ketidakpastian relatif pengukuran tersebut? (bulatkan ke satu angka desimal, tulis angkanya saja tanpa simbol %)
    angka: true
    toleransi: 0.1
    jawabanBenar:
      - "0.8"
    penjelasan: Ketidakpastian relatif = (Δx / x̄) × 100% = (0,1 / 12,5) × 100% = 0,8%. Semakin kecil persentase ini, semakin bisa dipercaya hasil pengukurannya dibanding nilai yang diukur.
    skor: 2
  - tipe: menjodohkan
    id: soal-3
    soal: Jodohkan situasi pengukuran berikut dengan alat yang PALING tepat digunakan.
    pasangan:
      - id: p1
        kiri: Mengukur ketebalan selembar kertas HVS
        kanan: Mikrometer sekrup
      - id: p2
        kiri: Mengukur diameter luar sebuah pipa PVC
        kanan: Jangka sorong
      - id: p3
        kiri: Mengukur panjang meja belajar
        kanan: Penggaris atau meteran
      - id: p4
        kiri: Mengukur waktu tempuh lari 100 meter
        kanan: Stopwatch
    penjelasan: Bukan cuma soal besaran apa yang diukur, tapi juga ukuran benda & kebutuhan ketelitiannya -- kertas HVS sangat tipis (butuh mikrometer), meja cukup pakai penggaris/meteran biasa.
    skor: 2
  - tipe: menyusun-urutan
    id: soal-4
    soal: Susun langkah yang benar untuk melaporkan hasil pengukuran BERULANG suatu besaran, dari yang paling awal.
    item:
      - id: i1
        teks: Ukur besaran yang sama secara berulang (misalnya 5-10 kali)
      - id: i2
        teks: Hitung nilai rata-rata (x̄) dari seluruh data pengukuran
      - id: i3
        teks: Hitung ketidakpastian (Δx) dari sebaran data terhadap rata-rata
      - id: i4
        teks: Laporkan hasil akhir dalam bentuk x = (x̄ ± Δx) lengkap dengan satuannya
    penjelasan: "Pengukuran berulang bukan cuma diulang lalu diambil satu angka saja -- alurnya selalu: ukur berulang, rata-ratakan, hitung ketidakpastiannya, baru dilaporkan lengkap dengan rentang kepercayaannya."
    skor: 2
  - tipe: drag-drop
    id: soal-5
    soal: "Kelompokkan sumber kesalahan pengukuran berikut: apakah pengaruhnya BERKURANG kalau pengukuran diulang berkali-kali lalu dirata-ratakan, atau TIDAK BERKURANG walau diulang berapa kali pun."
    kategori:
      - id: berkurang
        label: Berkurang dengan Pengukuran Berulang
      - id: tidak-berkurang
        label: Tidak Berkurang dengan Pengukuran Berulang
    item:
      - id: t1
        teks: Neraca yang belum di-nolkan (tara) sebelum dipakai, sehingga semua hasil bergeser sama besar
        kategoriBenarId: tidak-berkurang
      - id: t2
        teks: Variasi kecil hasil pengukuran berulang akibat kondisi yang tidak persis sama tiap kali (getaran, posisi mata sedikit berbeda)
        kategoriBenarId: berkurang
      - id: t3
        teks: Stopwatch yang berjalan sedikit lebih cepat dari seharusnya akibat kerusakan internal
        kategoriBenarId: tidak-berkurang
      - id: t4
        teks: Sedikit perbedaan hasil tiap kali mengulang pengukuran panjang benda yang sama dengan penggaris yang sama
        kategoriBenarId: berkurang
    penjelasan: Kesalahan ACAK (getaran, variasi baca kecil) memang berubah-ubah ke dua arah, jadi rata-rata dari banyak pengukuran akan saling meniadakan. Kesalahan SISTEMATIS (alat belum dikalibrasi/tara, kerusakan alat) selalu menggeser hasil ke arah yang SAMA setiap kali -- diulang berapa kali pun, hasilnya tetap bergeser, harus diperbaiki dari alatnya, bukan dari jumlah pengulangan.
    skor: 2
draft: false
---
