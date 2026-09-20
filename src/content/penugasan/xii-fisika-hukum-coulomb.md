---
judul: "Hukum Coulomb"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar rumus Hukum Coulomb, sifat tarik/tolak antar muatan, dan perbandingannya dengan Hukum Gravitasi Newton."
materiSlug: hukum-coulomb
pinHash: 6ef879098a7b843e6907ddd33169c213cc24f751e14157e622bd7405904cd884
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Rumus Hukum Coulomb yang benar adalah..."
    pilihan:
      - { id: a, teks: "F = k q₁q₂ / r²" }
      - { id: b, teks: "F = k q₁q₂ × r²" }
      - { id: c, teks: "F = k (q₁+q₂) / r²" }
      - { id: d, teks: "F = k / (q₁q₂r²)" }
    jawabanBenarId: a
    penjelasan: "Gaya Coulomb berbanding lurus dengan hasil kali kedua muatan, dan berbanding terbalik dengan KUADRAT jarak antar keduanya: F = k q₁q₂/r²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Dua muatan berbeda jenis (satu positif, satu negatif) yang saling didekatkan akan..."
    pilihan:
      - { id: a, teks: "Tarik-menarik" }
      - { id: b, teks: "Tolak-menolak" }
      - { id: c, teks: "Tidak saling memberi gaya" }
      - { id: d, teks: "Bergabung jadi satu muatan netral" }
    jawabanBenarId: a
    penjelasan: "Muatan berbeda jenis (positif dan negatif) saling tarik-menarik. Muatan sejenis yang saling tolak-menolak."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Jika jarak antara dua muatan diperbesar menjadi 3 kali lipat (besar muatan tetap), gaya Coulomb-nya menjadi..."
    pilihan:
      - { id: a, teks: "1/3 kali semula" }
      - { id: b, teks: "1/9 kali semula" }
      - { id: c, teks: "3 kali semula" }
      - { id: d, teks: "9 kali semula" }
    jawabanBenarId: b
    penjelasan: "Gaya Coulomb berbanding terbalik dengan KUADRAT jarak. Jarak jadi 3r berarti gayanya jadi F/(3)² = F/9 -- seperlima belas dari semula, tepatnya 1/9."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Nilai konstanta Coulomb (k) di udara/ruang hampa kira-kira..."
    pilihan:
      - { id: a, teks: "9 × 10⁹ N·m²/C²" }
      - { id: b, teks: "6,67 × 10⁻¹¹ N·m²/kg²" }
      - { id: c, teks: "3 × 10⁸ m/s" }
      - { id: d, teks: "1,6 × 10⁻¹⁹ C" }
    jawabanBenarId: a
    penjelasan: "k ≈ 9 × 10⁹ N·m²/C². Tiga pilihan lain adalah konstanta Fisika lain: konstanta gravitasi umum (G), kecepatan cahaya (c), dan muatan elementer elektron (e)."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Gaya Coulomb selalu bersifat tarik-menarik, persis seperti gaya gravitasi."
    jawabanBenar: false
    penjelasan: "Salah -- gaya Coulomb bisa tarik ATAU tolak (tergantung jenis muatan), sedangkan gravitasi SELALU tarik karena massa tidak punya 'jenis' seperti muatan."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Gaya Coulomb berbanding lurus dengan hasil kali besar kedua muatan."
    jawabanBenar: true
    penjelasan: "Benar -- sesuai F = kq₁q₂/r², semakin besar hasil kali q₁ dan q₂, semakin besar pula gaya Coulomb-nya (dengan r tetap)."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Sesuai Hukum III Newton, gaya yang dialami muatan pertama akibat muatan kedua besarnya sama dengan gaya yang dialami muatan kedua akibat muatan pertama, cuma arahnya berlawanan."
    jawabanBenar: true
    penjelasan: "Benar -- ini prinsip aksi-reaksi Hukum III Newton yang berlaku juga pada gaya Coulomb."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Dua muatan identik, masing-masing +1 μC, berjarak 3 cm (0,03 m). Berapa besar gaya Coulomb di antara keduanya, dalam Newton? (k = 9×10⁹ N·m²/C²)"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["10"]
    penjelasan: "F = kq₁q₂/r² = (9×10⁹)(1×10⁻⁶)(1×10⁻⁶)/(0,03)² = 9×10⁻³/9×10⁻⁴ = 10 N."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Dua muatan identik, masing-masing +1 μC, saling tolak dengan gaya 0,9 N. Berapa jarak antara keduanya, dalam cm? (k = 9×10⁹ N·m²/C²)"
    angka: true
    toleransi: 0.5
    jawabanBenar: ["10"]
    penjelasan: "r² = kq₁q₂/F = (9×10⁹)(1×10⁻⁶)²/0,9 = 9×10⁻³/0,9 = 0,01 m² -- r = 0,1 m = 10 cm."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Dua muatan +5 μC dan −5 μC berjarak 5 cm (0,05 m). Berapa besar gaya Coulomb di antara keduanya, dalam Newton?"
    angka: true
    toleransi: 1
    jawabanBenar: ["90"]
    penjelasan: "F = k|q₁q₂|/r² = (9×10⁹)(5×10⁻⁶)(5×10⁻⁶)/(0,05)² = 0,225/0,0025 = 90 N (gunakan nilai MUTLAK muatan untuk menghitung besar gayanya)."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan istilah dengan penjelasannya."
    pasangan:
      - { id: p1, kiri: "k (konstanta Coulomb)", kanan: "≈ 9 × 10⁹ N·m²/C²" }
      - { id: p2, kiri: "Muatan sejenis", kanan: "Tolak-menolak" }
      - { id: p3, kiri: "Muatan beda jenis", kanan: "Tarik-menarik" }
      - { id: p4, kiri: "r (jarak antar muatan)", kanan: "Berbanding terbalik kuadrat dengan gaya" }
    penjelasan: "Empat konsep dasar Hukum Coulomb: nilai konstantanya, sifat muatan sejenis/beda jenis, dan hubungan jarak dengan besar gaya."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan besaran pada Hukum Coulomb dengan padanannya pada Hukum Gravitasi Newton."
    pasangan:
      - { id: p1, kiri: "k (konstanta Coulomb)", kanan: "G (konstanta gravitasi umum)" }
      - { id: p2, kiri: "q (muatan)", kanan: "m (massa)" }
      - { id: p3, kiri: "Sifat gaya Coulomb: tarik ATAU tolak", kanan: "Sifat gaya gravitasi: SELALU tarik" }
      - { id: p4, kiri: "F = kq₁q₂/r²", kanan: "F = Gm₁m₂/r²" }
    penjelasan: "Struktur rumus kedua hukum ini mirip (berbanding terbalik kuadrat jarak), tapi gravitasi selalu tarik karena massa tidak punya 'jenis' seperti muatan listrik."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung besar gaya Coulomb antara dua muatan, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan besar muatan q₁ dan q₂ (pakai nilai mutlak/tanpa tanda)" }
      - { id: i2, teks: "Tentukan jarak r antara kedua muatan" }
      - { id: i3, teks: "Masukkan nilai q₁, q₂, dan r ke rumus F = kq₁q₂/r²" }
      - { id: i4, teks: "Hitung hasilnya, lalu tentukan sifatnya (tarik/tolak) dari jenis kedua muatan" }
    penjelasan: "Besar gaya dihitung dari nilai mutlak muatan, sedangkan sifat tarik/tolaknya ditentukan TERPISAH dari jenis muatannya (sejenis/beda jenis)."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pasangan muatan berikut sebagai Tarik-menarik atau Tolak-menolak."
    kategori:
      - { id: tarik, label: "Tarik-menarik" }
      - { id: tolak, label: "Tolak-menolak" }
    item:
      - { id: t1, teks: "Positif dan Positif", kategoriBenarId: tolak }
      - { id: t2, teks: "Negatif dan Negatif", kategoriBenarId: tolak }
      - { id: t3, teks: "Positif dan Negatif", kategoriBenarId: tarik }
      - { id: t4, teks: "Negatif dan Positif", kategoriBenarId: tarik }
    penjelasan: "Muatan SEJENIS (+,+ atau −,−) selalu tolak-menolak. Muatan BEDA JENIS (+,− atau −,+) selalu tarik-menarik."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan besaran berikut sebagai bagian dari Hukum Coulomb atau Hukum Gravitasi Newton."
    kategori:
      - { id: coulomb, label: "Hukum Coulomb" }
      - { id: gravitasi, label: "Hukum Gravitasi Newton" }
    item:
      - { id: t1, teks: "k (konstanta Coulomb)", kategoriBenarId: coulomb }
      - { id: t2, teks: "G (konstanta gravitasi umum)", kategoriBenarId: gravitasi }
      - { id: t3, teks: "q (muatan listrik)", kategoriBenarId: coulomb }
      - { id: t4, teks: "m (massa)", kategoriBenarId: gravitasi }
    penjelasan: "Hukum Coulomb bekerja dengan muatan listrik (q) dan konstanta k. Hukum Gravitasi Newton bekerja dengan massa (m) dan konstanta G."
    skor: 1
draft: false
---
