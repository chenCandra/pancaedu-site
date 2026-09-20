---
judul: "Latihan TKA: Bernoulli & Kontinuitas (Paket 2)"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan (Paket 2, soal baru) -- 6 tipe interaktif dengan porsi HOTS, mencakup persamaan Bernoulli lengkap (dengan ketinggian), venturimeter, dan gaya angkat sayap pesawat yang belum dibahas di Paket 1."
materiSlug: asas-bernoulli-dan-penerapannya
pinHash: 792027694dd61dcb89aa70714fb7bead6670ab84b9ff4692e4ab2b60d21c477d
pinBerlakuHingga: 2027-03-20
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Persamaan Bernoulli lengkap yang berlaku pada aliran fluida ideal adalah..."
    pilihan:
      - { id: a, teks: "P + ½ρv² + ρgh = konstan" }
      - { id: b, teks: "P = ρgh saja, tanpa suku lain" }
      - { id: c, teks: "A₁v₁ = A₂v₂" }
      - { id: d, teks: "Q = A × v" }
    jawabanBenarId: a
    penjelasan: "Persamaan Bernoulli lengkap terdiri dari 3 suku: tekanan (P), energi kinetik per volume (½ρv²), dan energi potensial per volume (ρgh) -- jumlah ketiganya konstan di sepanjang aliran fluida ideal."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah pipa vertikal terisi air mengalir dengan kecepatan yang SAMA di semua titik (penampang seragam). Titik A berada 2 m lebih tinggi dari titik B (massa jenis air = 1000 kg/m³, g = 10 m/s²). Selisih tekanan antara titik B dan titik A (P_B − P_A) adalah..."
    pilihan:
      - { id: a, teks: "0 Pa (sama besar, karena kecepatannya sama)" }
      - { id: b, teks: "2.000 Pa" }
      - { id: c, teks: "20.000 Pa" }
      - { id: d, teks: "200.000 Pa" }
    jawabanBenarId: c
    penjelasan: "Karena kecepatan sama di semua titik, suku ½ρv² saling meniadakan pada persamaan Bernoulli, menyisakan hubungan seperti hidrostatis biasa: P_B − P_A = ρg(h_A − h_B) = 1000×10×2 = 20.000 Pa. Titik yang lebih rendah (B) bertekanan lebih besar."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Air mengalir melalui venturimeter: penampang lebar memiliki luas 10 cm² dengan kecepatan aliran 3 m/s. Debit aliran air tersebut adalah..."
    pilihan:
      - { id: a, teks: "0,0003 m³/s" }
      - { id: b, teks: "0,003 m³/s" }
      - { id: c, teks: "0,03 m³/s" }
      - { id: d, teks: "0,3 m³/s" }
    jawabanBenarId: b
    penjelasan: "Q = A × v = (10×10⁻⁴ m²) × 3 m/s = 30×10⁻⁴ = 0,003 m³/s."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Sayap pesawat memiliki luas permukaan 20 m². Akibat perbedaan kecepatan aliran udara di atas dan di bawah sayap, terjadi selisih tekanan sebesar 500 Pa (tekanan di bawah lebih besar). Besar gaya angkat yang dihasilkan sayap tersebut adalah..."
    pilihan:
      - { id: a, teks: "25 N" }
      - { id: b, teks: "520 N" }
      - { id: c, teks: "2.500 N" }
      - { id: d, teks: "10.000 N" }
    jawabanBenarId: d
    penjelasan: "Gaya angkat = selisih tekanan × luas permukaan = ΔP × A = 500 × 20 = 10.000 N."
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Persamaan Bernoulli berlaku dengan asumsi fluida IDEAL: tidak kental (inviscid), tidak dapat dimampatkan (incompressible), dan alirannya tunak/steady."
    jawabanBenar: true
    penjelasan: "Benar -- persamaan Bernoulli adalah penyederhanaan yang hanya akurat untuk fluida ideal. Untuk fluida sangat kental atau aliran turbulen, hasilnya bisa meleset jauh dari kenyataan."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Pada pipa VERTIKAL dengan kecepatan aliran yang SAMA di semua titik, tekanan pada titik yang lebih RENDAH akan lebih besar dibanding titik yang lebih tinggi."
    jawabanBenar: true
    penjelasan: "Benar -- karena kecepatannya sama, suku kinetik Bernoulli saling meniadakan, menyisakan hubungan seperti tekanan hidrostatis biasa: titik yang lebih dalam/rendah selalu bertekanan lebih besar."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah pipa vertikal terisi air mengalir dengan kecepatan yang sama di semua titik. Titik C berada 3 m lebih tinggi dari titik D (massa jenis air = 1000 kg/m³, g = 10 m/s²). Selisih tekanan antara titik D dan titik C (P_D − P_C) adalah ... Pa."
    angka: true
    toleransi: 0
    jawabanBenar: ["30000"]
    penjelasan: "P_D − P_C = ρg(h_C − h_D) = 1000×10×3 = 30.000 Pa."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Air mengalir melalui venturimeter: penampang lebar memiliki luas 8 cm² dengan kecepatan aliran 2 m/s. Debit aliran air tersebut adalah ... m³/s (tulis dalam bentuk desimal, misalnya 0,001)."
    angka: true
    toleransi: 0.0001
    jawabanBenar: ["0.0016"]
    penjelasan: "Q = A × v = (8×10⁻⁴ m²) × 2 m/s = 16×10⁻⁴ = 0,0016 m³/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sayap pesawat memiliki luas permukaan 15 m². Selisih tekanan antara bagian bawah dan atas sayap sebesar 800 Pa. Besar gaya angkat yang dihasilkan sayap tersebut adalah ... N."
    angka: true
    toleransi: 0
    jawabanBenar: ["12000"]
    penjelasan: "Gaya angkat = ΔP × A = 800 × 15 = 12.000 N."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan istilah dengan definisinya."
    pasangan:
      - { id: p1, kiri: "Persamaan Bernoulli Lengkap", kanan: "P + ½ρv² + ρgh = konstan (tekanan + energi kinetik + energi potensial per volume)" }
      - { id: p2, kiri: "Venturimeter", kanan: "Alat ukur kecepatan/debit aliran fluida dari selisih tekanan pada pipa yang menyempit" }
      - { id: p3, kiri: "Gaya Angkat", kanan: "F = ΔP × A, dihasilkan dari selisih tekanan pada dua permukaan seluas A" }
    penjelasan: "Gaya angkat sayap pesawat sebenarnya penerapan langsung dari konsep tekanan (F=P×A) yang dipadukan dengan Asas Bernoulli untuk mencari ΔP-nya."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan fenomena/alat berikut dengan konsep yang paling mendasarinya."
    pasangan:
      - { id: p1, kiri: "Pesawat terbang menghasilkan gaya angkat dari selisih tekanan udara di permukaan atas dan bawah sayap", kanan: "Gaya angkat (F = ΔP × A)" }
      - { id: p2, kiri: "Venturimeter dipasang pada pipa aliran industri untuk mengukur debit/kecepatan aliran fluida", kanan: "Kombinasi Asas Kontinuitas & Bernoulli" }
      - { id: p3, kiri: "Atap rumah bisa terangkat saat angin kencang bertiup di atasnya", kanan: "Tekanan rendah di atas atap akibat aliran udara cepat" }
    penjelasan: "Atap rumah 'terbang' saat angin kencang sebenarnya mekanismenya sama seperti gaya angkat sayap pesawat -- tekanan di atas atap jadi lebih rendah dari tekanan di bawahnya (dalam rumah), menghasilkan gaya neto ke atas."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menerapkan persamaan Bernoulli LENGKAP (dengan suku ketinggian) untuk mencari tekanan di suatu titik, dari yang paling awal."
    item:
      - { id: i1, teks: "Tuliskan persamaan Bernoulli lengkap untuk dua titik: P₁+½ρv₁²+ρgh₁ = P₂+½ρv₂²+ρgh₂" }
      - { id: i2, teks: "Identifikasi kecepatan (v), ketinggian (h), dan tekanan (P) yang diketahui di masing-masing titik" }
      - { id: i3, teks: "Masukkan nilai-nilai yang diketahui ke dalam persamaan" }
      - { id: i4, teks: "Selesaikan persamaan untuk mencari besaran yang ditanyakan" }
    penjelasan: "Persamaan Bernoulli yang sering dipakai untuk pipa mendatar sebenarnya versi SEDERHANA dari persamaan lengkap ini -- suku ρgh dihilangkan karena h₁=h₂ (ketinggian sama), bukan karena tidak ada."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung gaya angkat sayap pesawat dari kecepatan aliran udara, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan kecepatan aliran udara di permukaan atas dan bawah sayap" }
      - { id: i2, teks: "Gunakan persamaan Bernoulli untuk menghitung selisih tekanan (ΔP) antara kedua permukaan tersebut" }
      - { id: i3, teks: "Tentukan luas permukaan sayap (A)" }
      - { id: i4, teks: "Hitung gaya angkat dengan rumus F = ΔP × A" }
    penjelasan: "Menghitung gaya angkat sesungguhnya butuh DUA konsep berurutan: Bernoulli untuk mencari selisih tekanan, baru definisi tekanan (P=F/A) untuk mengubahnya jadi gaya."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan berikut: apakah termasuk Asumsi Fluida Ideal, atau BUKAN Asumsi Fluida Ideal."
    kategori:
      - { id: ideal, label: "Asumsi Fluida Ideal" }
      - { id: bukan, label: "BUKAN Asumsi Fluida Ideal" }
    item:
      - { id: t1, teks: "Fluida tidak memiliki kekentalan (inviscid)", kategoriBenarId: ideal }
      - { id: t2, teks: "Fluida tidak dapat dimampatkan (incompressible)", kategoriBenarId: ideal }
      - { id: t3, teks: "Aliran fluida tunak/steady (kecepatan tiap titik tidak berubah terhadap waktu)", kategoriBenarId: ideal }
      - { id: t4, teks: "Fluida memiliki kekentalan sangat tinggi dan alirannya turbulen (bergolak)", kategoriBenarId: bukan }
    penjelasan: "Persamaan Bernoulli HANYA akurat untuk fluida yang memenuhi ketiga asumsi ideal ini -- untuk fluida sangat kental (misal oli, madu) atau aliran turbulen, hasilnya bisa jauh meleset."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan fenomena/alat berikut: apakah menjelaskannya cukup dengan Asas Kontinuitas saja, atau butuh Kombinasi Kontinuitas & Bernoulli."
    kategori:
      - { id: kontinuitas-saja, label: "Kontinuitas Saja" }
      - { id: kombinasi, label: "Kombinasi Kontinuitas & Bernoulli" }
    item:
      - { id: t1, teks: "Ujung selang yang ditekan dengan ibu jari, air menyembur lebih deras (tanpa memperhatikan tekanannya)", kategoriBenarId: kontinuitas-saja }
      - { id: t2, teks: "Venturimeter mengukur debit dari selisih tekanan yang terbaca", kategoriBenarId: kombinasi }
      - { id: t3, teks: "Karburator motor lama menghisap bensin memakai efek tekanan rendah dari udara yang mengalir cepat di pipa sempit", kategoriBenarId: kombinasi }
      - { id: t4, teks: "Gaya angkat sayap pesawat dari selisih tekanan aliran udara", kategoriBenarId: kombinasi }
    penjelasan: "Kalau cuma soal 'kenapa kecepatan berubah', cukup Kontinuitas. Tapi begitu ada pertanyaan soal TEKANAN yang dihasilkan (venturimeter, karburator, gaya angkat), harus dilanjutkan dengan Bernoulli."
    skor: 2
draft: false
---
