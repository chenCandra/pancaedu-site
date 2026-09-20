---
judul: "Pengukuran Tunggal & Pengukuran Berulang"
kelas: X
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar format pelaporan pengukuran tunggal, cara menghitung rata-rata dan ketidakpastian pada pengukuran berulang."
materiSlug: pengukuran-alat-ukur-dan-angka-penting
pinHash: 2f94de6516419c1c04a086883fa3a46ab9945d58a37ad6aa2b1a0561ff53f9b8
pinBerlakuHingga: 2027-03-11
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Kenapa suatu besaran perlu diukur berulang kali, bukan cukup sekali saja?"
    pilihan:
      - { id: a, teks: "Supaya angkanya kelihatan lebih banyak" }
      - { id: b, teks: "Untuk mengurangi pengaruh kesalahan acak dan mendapat hasil yang lebih dapat dipercaya" }
      - { id: c, teks: "Karena alat ukur tidak boleh dipakai dua kali berturut-turut" }
      - { id: d, teks: "Supaya hasilnya pasti sama persis tiap kali diukur" }
    jawabanBenarId: b
    penjelasan: "Setiap pengukuran punya kesalahan acak. Mengulang pengukuran dan mengambil rata-ratanya membuat hasil akhir lebih dapat dipercaya."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah mistar punya nilai skala terkecil (NST) 1 mm. Hasil pengukuran tunggal yang benar dilaporkan sebagai..."
    pilihan:
      - { id: a, teks: "x ± 1 mm" }
      - { id: b, teks: "x ± 0,5 mm" }
      - { id: c, teks: "x ± 0,1 mm" }
      - { id: d, teks: "x ± 2 mm" }
    jawabanBenarId: b
    penjelasan: "Pada pengukuran tunggal, ketidakpastiannya adalah setengah dari NST. Karena NST mistar = 1 mm, ketidakpastiannya = 0,5 mm."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Format penulisan hasil pengukuran berulang yang benar adalah..."
    pilihan:
      - { id: a, teks: "x = x̄ saja, tanpa ketidakpastian" }
      - { id: b, teks: "x = (x̄ ± Δx) satuan" }
      - { id: c, teks: "x = Δx saja, tanpa nilai rata-rata" }
      - { id: d, teks: "x = jumlah semua data pengukuran" }
    jawabanBenarId: b
    penjelasan: "Hasil pengukuran berulang selalu dilaporkan sebagai nilai rata-rata (x̄) disertai ketidakpastiannya (Δx)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Kenapa nilai rata-rata (x̄) dan ketidakpastian (Δx) harus dilaporkan dengan jumlah angka desimal yang sama?"
    pilihan:
      - { id: a, teks: "Supaya terlihat lebih rapi saja" }
      - { id: b, teks: "Karena angka desimal x̄ yang melebihi ketelitian Δx tidak punya arti" }
      - { id: c, teks: "Karena aturannya harus selalu 2 angka di belakang koma" }
      - { id: d, teks: "Tidak ada alasan khusus, itu cuma kebiasaan" }
    jawabanBenarId: b
    penjelasan: "Δx menunjukkan sampai angka desimal keberapa hasil pengukuran bisa dipercaya -- melaporkan x̄ lebih presisi dari itu cuma memberi kesan palsu."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Kalau sudah diukur berulang, ketidakpastiannya tidak perlu ditulis lagi."
    jawabanBenar: false
    penjelasan: "Salah -- hasil pengukuran berulang justru WAJIB disertai Δx."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Yang dihitung dari data pengukuran berulang adalah rata-rata, bukan modus (nilai yang paling sering muncul)."
    jawabanBenar: true
    penjelasan: "Benar -- semua data dijumlahkan lalu dibagi banyaknya data, bukan mencari nilai yang paling sering muncul."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Mengulang pengukuran bisa memperbaiki kesalahan sistematis akibat alat yang tidak dikalibrasi dengan benar."
    jawabanBenar: false
    penjelasan: "Salah -- pengulangan cuma efektif mengurangi kesalahan ACAK, bukan kesalahan sistematis."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah mistar punya NST 1 mm. Berapa ketidakpastian pengukuran tunggalnya, dalam mm?"
    angka: true
    toleransi: 0
    jawabanBenar: ["0.5"]
    penjelasan: "Ketidakpastian pengukuran tunggal = setengah NST = 0,5 mm."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Lima kali pengukuran panjang meja menghasilkan (cm): 120,2 / 120,4 / 120,1 / 120,3 / 120,5. Berapa nilai rata-ratanya, dalam cm?"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["120.3"]
    penjelasan: "x̄ = (120,2+120,4+120,1+120,3+120,5)/5 = 601,5/5 = 120,3 cm."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Diketahui Δx = 0,10 dan x̄ = 100,0 (satuan sama). Berapa ketidakpastian relatifnya, dalam persen?"
    angka: true
    toleransi: 0.05
    jawabanBenar: ["0.1"]
    penjelasan: "Ketidakpastian relatif = (Δx/x̄) × 100% = (0,10/100,0) × 100% = 0,1%."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan istilah dengan definisinya."
    pasangan:
      - { id: p1, kiri: "NST", kanan: "Nilai Skala Terkecil" }
      - { id: p2, kiri: "Δx", kanan: "Ketidakpastian" }
      - { id: p3, kiri: "x̄", kanan: "Nilai rata-rata" }
      - { id: p4, kiri: "Kesalahan Acak", kanan: "Alasan perlunya pengukuran berulang" }
    penjelasan: "Empat istilah kunci dalam melaporkan hasil pengukuran, baik tunggal maupun berulang."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan rentang ketidakpastian relatif dengan jumlah angka penting yang disarankan."
    pasangan:
      - { id: p1, kiri: "Kurang dari 0,1%", kanan: "4 angka penting" }
      - { id: p2, kiri: "0,1% sampai 1%", kanan: "3 angka penting" }
      - { id: p3, kiri: "1% sampai 10%", kanan: "2 angka penting" }
      - { id: p4, kiri: "10% sampai 100%", kanan: "1 angka penting" }
    penjelasan: "Semakin kecil ketidakpastian relatif, semakin banyak angka penting yang boleh dituliskan pada hasil akhir."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah melaporkan hasil pengukuran berulang, dari yang paling awal."
    item:
      - { id: i1, teks: "Hitung nilai rata-rata (x̄)" }
      - { id: i2, teks: "Hitung selisih (deviasi) tiap data terhadap rata-rata" }
      - { id: i3, teks: "Kuadratkan tiap selisih, lalu jumlahkan" }
      - { id: i4, teks: "Hitung ketidakpastian (Δx)" }
      - { id: i5, teks: "Laporkan hasil akhir x = (x̄ ± Δx) satuan" }
    penjelasan: "Lima langkah ini harus dilakukan berurutan supaya hasil akhirnya benar dan jujur soal seberapa teliti pengukurannya."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut sebagai Pengukuran Tunggal atau Pengukuran Berulang."
    kategori:
      - { id: tunggal, label: "Pengukuran Tunggal" }
      - { id: berulang, label: "Pengukuran Berulang" }
    item:
      - { id: t1, teks: "x = (x₀ ± ½ NST) satuan", kategoriBenarId: tunggal }
      - { id: t2, teks: "Diukur satu kali saja", kategoriBenarId: tunggal }
      - { id: t3, teks: "x = (x̄ ± Δx) satuan", kategoriBenarId: berulang }
      - { id: t4, teks: "Diukur beberapa kali lalu dirata-rata", kategoriBenarId: berulang }
    penjelasan: "Pengukuran tunggal pakai setengah NST sebagai ketidakpastian, pengukuran berulang pakai Δx hasil perhitungan dari beberapa data."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Ketidakpastian pengukuran tunggal = setengah NST", kategoriBenarId: benar }
      - { id: t2, teks: "Hasil pengukuran berulang yang dipakai adalah modus", kategoriBenarId: salah }
      - { id: t3, teks: "x̄ dan Δx harus punya jumlah angka desimal sama", kategoriBenarId: benar }
      - { id: t4, teks: "Mengulang pengukuran memperbaiki kesalahan sistematis", kategoriBenarId: salah }
    penjelasan: "Dua miskonsepsi paling umum: mengira yang dipakai adalah modus (padahal rata-rata), dan mengira pengulangan bisa memperbaiki kesalahan sistematis (padahal cuma kesalahan acak)."
    skor: 1
draft: false
---
