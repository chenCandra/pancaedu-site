---
judul: "Latihan TKA: Tekanan, Pascal & Archimedes (Paket 2)"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan (Paket 2, soal baru) -- 6 tipe interaktif dengan porsi HOTS, mencakup tekanan total, bejana berhubungan, dan berat semu yang belum dibahas di Paket 1."
materiSlug: hukum-pascal-dan-hukum-archimedes
pinHash: f9170d544f6d92e314c6387961936b888d83304dc569d93727b7904ca9e48229
pinBerlakuHingga: 2027-03-20
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Pada bejana berhubungan yang berisi SATU jenis fluida yang sama, permukaan fluida di semua cabang akan..."
    pilihan:
      - { id: a, teks: "Sama tinggi, tidak peduli bentuk/luas penampang cabangnya" }
      - { id: b, teks: "Lebih tinggi pada cabang yang penampangnya lebih sempit" }
      - { id: c, teks: "Lebih tinggi pada cabang yang penampangnya lebih lebar" }
      - { id: d, teks: "Bergantung pada bentuk bejana secara keseluruhan" }
    jawabanBenarId: a
    penjelasan: "Prinsip bejana berhubungan: untuk fluida sejenis, tekanan pada kedalaman yang sama harus sama besar -- ini hanya mungkin kalau permukaan fluida di semua cabang berada pada ketinggian yang sama, berapa pun luas penampangnya."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah titik berada pada kedalaman 3 m di bawah permukaan air (massa jenis air = 1000 kg/m³, g = 10 m/s², tekanan atmosfer P₀ = 100.000 Pa). Besar tekanan TOTAL pada titik tersebut adalah..."
    pilihan:
      - { id: a, teks: "30.000 Pa" }
      - { id: b, teks: "100.000 Pa" }
      - { id: c, teks: "103.000 Pa" }
      - { id: d, teks: "130.000 Pa" }
    jawabanBenarId: d
    penjelasan: "P total = P₀ + ρgh = 100.000 + (1000×10×3) = 100.000 + 30.000 = 130.000 Pa."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sebuah benda tercelup seluruhnya dalam air (massa jenis air = 1000 kg/m³, g = 10 m/s²) dengan volume tercelup 0,002 m³. Besar gaya apung yang dialami benda tersebut adalah..."
    pilihan:
      - { id: a, teks: "2 N" }
      - { id: b, teks: "20 N" }
      - { id: c, teks: "200 N" }
      - { id: d, teks: "2.000 N" }
    jawabanBenarId: b
    penjelasan: "F apung = ρ × g × V = 1000 × 10 × 0,002 = 20 N."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Sebuah dongkrak hidrolik memiliki penampang kecil berdiameter 2 cm dan penampang besar berdiameter 8 cm. Jika gaya yang diberikan pada penampang kecil sebesar 25 N, besar gaya yang dihasilkan pada penampang besar adalah..."
    pilihan:
      - { id: a, teks: "100 N" }
      - { id: b, teks: "200 N" }
      - { id: c, teks: "400 N" }
      - { id: d, teks: "1.600 N" }
    jawabanBenarId: c
    penjelasan: "HATI-HATI: rasio gaya sebanding dengan rasio LUAS, bukan diameter langsung! Luas ∝ diameter², jadi rasio luas = (8/2)² = 4² = 16. F2 = F1 × 16 = 25 × 16 = 400 N. (Kesalahan umum: memakai rasio diameter langsung 8/2=4, menghasilkan jawaban keliru 100 N.)"
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Pada bejana berhubungan berisi satu jenis fluida yang sama, permukaan fluida di semua cabang akan sama tinggi, meski bentuk penampangnya berbeda-beda."
    jawabanBenar: true
    penjelasan: "Benar -- ini prinsip dasar bejana berhubungan, berlaku selama fluidanya sejenis (massa jenis sama) di seluruh cabang."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Besar gaya apung yang dialami suatu benda dalam fluida bergantung pada berat benda tersebut."
    jawabanBenar: false
    penjelasan: "Salah -- gaya apung (F apung = ρ_fluida × g × V_tercelup) HANYA bergantung pada massa jenis fluida dan VOLUME benda yang tercelup, sama sekali TIDAK bergantung pada berat/massa benda itu sendiri."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah titik berada pada kedalaman 4 m di bawah permukaan air (massa jenis air = 1000 kg/m³, g = 10 m/s², tekanan atmosfer P₀ = 100.000 Pa). Besar tekanan total pada titik tersebut adalah ... Pa."
    angka: true
    toleransi: 0
    jawabanBenar: ["140000"]
    penjelasan: "P total = P₀ + ρgh = 100.000 + (1000×10×4) = 100.000 + 40.000 = 140.000 Pa."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah benda tercelup seluruhnya dalam minyak (massa jenis minyak = 800 kg/m³, g = 10 m/s²) dengan volume tercelup 0,003 m³. Besar gaya apung yang dialami benda tersebut adalah ... N."
    angka: true
    toleransi: 0
    jawabanBenar: ["24"]
    penjelasan: "F apung = ρ × g × V = 800 × 10 × 0,003 = 24 N."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah benda memiliki berat 50 N di udara. Saat dicelupkan seluruhnya ke dalam air, benda tersebut mengalami gaya apung sebesar 12 N. Berat semu (berat yang tampak/terukur) benda tersebut di dalam air adalah ... N."
    angka: true
    toleransi: 0
    jawabanBenar: ["38"]
    penjelasan: "Berat semu = berat asli − gaya apung = 50 − 12 = 38 N. Inilah kenapa benda terasa lebih ringan saat diangkat di dalam air."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan istilah dengan definisinya."
    pasangan:
      - { id: p1, kiri: "Bejana Berhubungan", kanan: "Wadah-wadah yang salurannya saling terhubung; permukaan fluida sejenis di semua cabang sama tinggi" }
      - { id: p2, kiri: "Tekanan Total", kanan: "P = tekanan atmosfer + tekanan hidrostatis fluida (P₀ + ρgh)" }
      - { id: p3, kiri: "Berat Semu", kanan: "Berat benda yang tampak berkurang saat berada dalam fluida, akibat adanya gaya apung" }
    penjelasan: "Ketiga konsep ini sering muncul bersamaan dalam soal cerita fluida statis -- kuncinya selalu kembali ke rumus dasar P=ρgh dan F apung=ρgV."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan fenomena sehari-hari berikut dengan konsep yang paling mendasarinya."
    pasangan:
      - { id: p1, kiri: "Menara air dibuat tinggi agar air bisa mengalir deras ke rumah-rumah di bawahnya", kanan: "Tekanan hidrostatis (P = ρgh)" }
      - { id: p2, kiri: "Air teh dalam teko akan naik setinggi permukaan air di dalam teko lewat cerat/pancurannya", kanan: "Bejana berhubungan" }
      - { id: p3, kiri: "Benda terasa lebih ringan saat diangkat di dalam air dibanding di udara", kanan: "Berat semu / gaya apung" }
    penjelasan: "Semakin tinggi menara air, semakin besar tekanan hidrostatis yang dihasilkan di dasarnya -- itulah kenapa menara air dibuat setinggi mungkin, bukan asal ditinggikan tanpa alasan."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menghitung tekanan total pada suatu kedalaman dalam fluida, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan tekanan atmosfer (P₀) di permukaan fluida" }
      - { id: i2, teks: "Hitung tekanan hidrostatis pada kedalaman tersebut (P = ρgh)" }
      - { id: i3, teks: "Jumlahkan tekanan atmosfer dan tekanan hidrostatis untuk mendapatkan tekanan total" }
    penjelasan: "Tekanan hidrostatis saja BUKAN tekanan yang sesungguhnya dirasakan benda di dalam fluida -- harus ditambah tekanan atmosfer yang selalu bekerja dari permukaan."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung rasio gaya dongkrak hidrolik jika yang diketahui adalah DIAMETER penampang (bukan luas langsung), dari yang paling awal."
    item:
      - { id: i1, teks: "Hitung luas penampang masing-masing dari diameter yang diketahui (A = ¼πd²)" }
      - { id: i2, teks: "Sadari bahwa rasio luas sebanding dengan KUADRAT rasio diameter, bukan diameternya secara langsung" }
      - { id: i3, teks: "Gunakan prinsip Hukum Pascal: F1/A1 = F2/A2" }
      - { id: i4, teks: "Substitusikan luas yang sudah dihitung untuk mencari gaya yang ditanyakan" }
    penjelasan: "Ini jebakan klasik: kalau diameter penampang besar 4 kali diameter penampang kecil, rasio GAYA-nya bukan 4 kali, tapi 4² = 16 kali, karena luas berbanding dengan kuadrat diameter."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan faktor berikut: apakah faktor tersebut Mempengaruhi Besar Gaya Apung, atau TIDAK Mempengaruhi Besar Gaya Apung."
    kategori:
      - { id: mempengaruhi, label: "Mempengaruhi Gaya Apung" }
      - { id: tidak, label: "TIDAK Mempengaruhi Gaya Apung" }
    item:
      - { id: t1, teks: "Volume bagian benda yang tercelup dalam fluida", kategoriBenarId: mempengaruhi }
      - { id: t2, teks: "Massa jenis fluida tempat benda tercelup", kategoriBenarId: mempengaruhi }
      - { id: t3, teks: "Massa/berat benda itu sendiri (di udara)", kategoriBenarId: tidak }
      - { id: t4, teks: "Bentuk benda (asalkan volume yang tercelup tetap sama)", kategoriBenarId: tidak }
    penjelasan: "Rumus F apung = ρ_fluida × g × V_tercelup TIDAK melibatkan massa/berat benda sama sekali -- ini sering jadi miskonsepsi, banyak yang mengira benda 'berat' pasti mendapat gaya apung lebih besar, padahal yang menentukan adalah volume tercelup."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan tentang bejana berhubungan berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Pada bejana berhubungan berisi satu jenis fluida yang sama, permukaan fluida di semua cabang akan sama tinggi, meski bentuk/luas penampang cabang berbeda-beda", kategoriBenarId: benar }
      - { id: t2, teks: "Semakin besar luas penampang salah satu cabang bejana, semakin tinggi permukaan fluida di cabang tersebut", kategoriBenarId: salah }
      - { id: t3, teks: "Prinsip bejana berhubungan hanya berlaku kalau fluida di semua cabangnya sejenis (massa jenis sama)", kategoriBenarId: benar }
      - { id: t4, teks: "Jika dua fluida berbeda jenis (misal air dan minyak) dimasukkan ke bejana berhubungan, permukaan keduanya akan tetap sama tinggi", kategoriBenarId: salah }
    penjelasan: "Ketinggian permukaan fluida di bejana berhubungan TIDAK dipengaruhi luas penampang -- yang menentukan hanya jenis fluidanya. Kalau fluidanya berbeda massa jenis (mis. air dan minyak), permukaannya justru akan BERBEDA tinggi, karena tekanan di titik pertemuan harus sama sementara ρ-nya beda."
    skor: 2
draft: false
---
