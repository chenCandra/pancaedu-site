---
judul: "Latihan TKA: Tekanan, Pascal & Archimedes (HOTS)"
kelas: TKA
mapel: Fisika
deskripsi: "4 soal latihan HOTS (penalaran tingkat tinggi, analisis, & penerapan lanjutan) -- variasi tipe interaktif, sesuai kisi-kisi resmi elemen Fluida: Tekanan, Pascal & Archimedes. Lanjutan dari Latihan Dasar."
materiSlug: hukum-pascal-dan-hukum-archimedes
pinHash: 1cc4f8cdc435c6d730a34eb51dae3bf3e0d3a4ea073eeec89e79265b770a49f1
pinBerlakuHingga: 2027-03-20T00:00:00.000Z
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: Sebuah balok kayu bermassa jenis 600 kg/m³ terapung di atas air (massa jenis air = 1000 kg/m³). Fraksi (bagian) volume balok yang tercelup di dalam air adalah...
    pilihan:
      - id: a
        teks: 40%
      - id: b
        teks: 60%
      - id: c
        teks: 67%
      - id: d
        teks: 100%
    jawabanBenarId: b
    penjelasan: Pada benda terapung, fraksi volume tercelup = ρ_benda / ρ_fluida = 600/1000 = 0,6 = 60%. Semakin kecil massa jenis benda dibanding fluida, semakin sedikit bagian yang tercelup.
    skor: 2
  - tipe: isian-singkat
    id: soal-2
    soal: Sebuah dongkrak hidrolik memiliki penampang kecil 4 cm² dan penampang besar 200 cm². Agar dapat mengangkat beban 2.000 N pada penampang besar, gaya minimum yang harus diberikan pada penampang kecil adalah ... N.
    angka: true
    toleransi: 0
    jawabanBenar:
      - "40"
    penjelasan: F1/A1 = F2/A2 -> F1 = F2 × (A1/A2) = 2000 × (4/200) = 2000 × 0,02 = 40 N.
    skor: 2
  - tipe: menyusun-urutan
    id: soal-3
    soal: Susun langkah menentukan status sebuah benda dalam fluida (terapung/melayang/tenggelam), dari yang paling awal.
    item:
      - id: i1
        teks: Bandingkan massa jenis benda (ρ_benda) dengan massa jenis fluida (ρ_fluida)
      - id: i2
        teks: Jika ρ_benda lebih kecil dari ρ_fluida, simpulkan benda akan TERAPUNG
      - id: i3
        teks: Jika ρ_benda sama dengan ρ_fluida, simpulkan benda akan MELAYANG
      - id: i4
        teks: Jika ρ_benda lebih besar dari ρ_fluida, simpulkan benda akan TENGGELAM
      - id: i5
        teks: Khusus benda yang terapung, hitung fraksi volume tercelup dengan V_tercelup/V_total = ρ_benda/ρ_fluida
    penjelasan: Perbandingan massa jenis benda dan fluida adalah kunci utama menentukan status benda -- bukan berat atau ukuran benda secara mutlak.
    skor: 2
  - tipe: drag-drop
    id: soal-4
    soal: Kelompokkan pernyataan tentang tekanan hidrostatis berikut sebagai Benar atau Salah.
    kategori:
      - id: benar
        label: Benar
      - id: salah
        label: Salah
    item:
      - id: t1
        teks: Tekanan hidrostatis pada suatu titik hanya bergantung kedalaman titik tersebut dari permukaan, BUKAN pada bentuk wadahnya
        kategoriBenarId: benar
      - id: t2
        teks: Dua wadah berbeda bentuk (satu tabung lurus, satu kerucut terbalik) diisi air dengan ketinggian permukaan yang SAMA -- tekanan di dasar kedua wadah tersebut BERBEDA karena bentuknya berbeda
        kategoriBenarId: salah
      - id: t3
        teks: Semakin dalam suatu titik di bawah permukaan fluida, semakin besar tekanan hidrostatisnya
        kategoriBenarId: benar
      - id: t4
        teks: Tekanan hidrostatis pada kedalaman yang sama akan selalu sama besar, berapa pun massa jenis fluidanya
        kategoriBenarId: salah
    penjelasan: "Miskonsepsi paling umum: mengira bentuk/volume wadah memengaruhi tekanan hidrostatis (item 2) -- padahal P = ρgh HANYA bergantung kedalaman (h) dan massa jenis fluida (ρ), bukan bentuk wadahnya (disebut paradoks hidrostatis). Begitu juga item 4 -- kedalaman sama TIDAK berarti tekanan sama kalau massa jenis fluidanya berbeda."
    skor: 2
draft: false
---
