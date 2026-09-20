---
judul: "Latihan TKA: Gerak Lurus & Gerak Lengkung"
kelas: TKA
mapel: Fisika
deskripsi: "21 soal latihan -- 6 tipe interaktif (pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, drag & drop) dengan porsi soal HOTS, sesuai kisi-kisi resmi elemen Kinematika: GLB, GLBB (termasuk gerak jatuh bebas), gerak parabola, dan gerak melingkar."
materiSlug: gerak-lurus-beraturan
pinHash: 685b3c76a2a2b60d161d4109bc8f80a674ab84d9c97cdeb898ed78273e99c9f5
pinBerlakuHingga: 2027-03-20
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Sebuah benda bergerak lurus dengan grafik kecepatan terhadap waktu (v-t) berupa garis lurus MENDATAR (sejajar sumbu waktu). Jenis gerak benda tersebut adalah..."
    pilihan:
      - { id: a, teks: "Gerak Lurus Beraturan (GLB)" }
      - { id: b, teks: "Gerak Lurus Berubah Beraturan (GLBB) dipercepat" }
      - { id: c, teks: "Gerak Lurus Berubah Beraturan (GLBB) diperlambat" }
      - { id: d, teks: "Gerak jatuh bebas" }
    jawabanBenarId: a
    penjelasan: "Grafik v-t mendatar berarti kecepatan tidak berubah terhadap waktu (konstan) -- ini ciri khas GLB. Kalau grafiknya miring (naik/turun), baru itu GLBB."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah mobil bergerak lurus dengan kecepatan tetap 20 m/s selama 15 sekon. Jarak yang ditempuh mobil tersebut adalah..."
    pilihan:
      - { id: a, teks: "200 m" }
      - { id: b, teks: "300 m" }
      - { id: c, teks: "350 m" }
      - { id: d, teks: "450 m" }
    jawabanBenarId: b
    penjelasan: "Pada GLB, jarak = kecepatan × waktu = x = v × t = 20 m/s × 15 s = 300 m."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sebuah motor mula-mula diam, kemudian bergerak dengan percepatan tetap 2 m/s². Kecepatan motor setelah bergerak selama 6 sekon adalah..."
    pilihan:
      - { id: a, teks: "6 m/s" }
      - { id: b, teks: "8 m/s" }
      - { id: c, teks: "12 m/s" }
      - { id: d, teks: "18 m/s" }
    jawabanBenarId: c
    penjelasan: "Pada GLBB, v = v₀ + at = 0 + (2 m/s² × 6 s) = 12 m/s."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Sebuah bola dijatuhkan bebas dari ketinggian h di atas tanah dan sampai ke tanah dalam waktu t. Jika bola lain (dari tempat yang sama, tanpa hambatan udara) dijatuhkan bebas dari ketinggian 4h, waktu jatuhnya menjadi..."
    pilihan:
      - { id: a, teks: "Sama saja, tetap t" }
      - { id: b, teks: "2 kali semula (2t)" }
      - { id: c, teks: "4 kali semula (4t)" }
      - { id: d, teks: "Setengah semula (½t)" }
    jawabanBenarId: b
    penjelasan: "Pada jatuh bebas, h = ½gt², sehingga t = √(2h/g) -- artinya t SEBANDING dengan AKAR ketinggian (t ∝ √h), BUKAN sebanding langsung dengan h. Kalau h dijadikan 4 kali, maka t = √4 = 2 kali semula, bukan 4 kali."
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Pada Gerak Lurus Berubah Beraturan (GLBB) dipercepat, nilai percepatannya bertambah besar terus-menerus seiring berjalannya waktu."
    jawabanBenar: false
    penjelasan: "Salah -- pada GLBB, yang KONSTAN justru percepatannya (tidak berubah nilainya). Yang bertambah seiring waktu adalah kecepatannya, bukan percepatannya."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Pada gerak parabola (tanpa hambatan udara), besar kecepatan pada arah horizontal selalu tetap sepanjang lintasan."
    jawabanBenar: true
    penjelasan: "Benar -- gravitasi hanya memengaruhi gerak pada arah vertikal (GLBB), sedangkan arah horizontal tetap GLB (kecepatan konstan) sepanjang lintasan."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah sepeda bergerak lurus dengan kecepatan tetap 4 m/s selama 25 sekon. Jarak yang ditempuhnya adalah ... m."
    angka: true
    toleransi: 0
    jawabanBenar: ["100"]
    penjelasan: "x = v × t = 4 m/s × 25 s = 100 m."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah benda bergerak dengan kecepatan awal 5 m/s dan percepatan tetap 3 m/s². Kecepatan benda setelah 4 sekon adalah ... m/s."
    angka: true
    toleransi: 0
    jawabanBenar: ["17"]
    penjelasan: "v = v₀ + at = 5 + (3 × 4) = 5 + 12 = 17 m/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Sebuah peluru ditembakkan dengan kecepatan awal 20 m/s pada sudut 30° terhadap horizontal (g = 10 m/s², sin 30° = 0,5). Total waktu peluru berada di udara sebelum jatuh kembali ke tanah adalah ... sekon."
    angka: true
    toleransi: 0.1
    jawabanBenar: ["2"]
    penjelasan: "Waktu total di udara = 2 × v₀ sin θ / g = (2 × 20 × 0,5) / 10 = 20/10 = 2 sekon."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan jenis gerak dengan ciri utamanya."
    pasangan:
      - { id: p1, kiri: "Gerak Lurus Beraturan (GLB)", kanan: "Kecepatan konstan, percepatan nol" }
      - { id: p2, kiri: "Gerak Lurus Berubah Beraturan (GLBB)", kanan: "Percepatan konstan, kecepatan berubah beraturan" }
      - { id: p3, kiri: "Gerak jatuh bebas", kanan: "Kecepatan awal nol, percepatan = g" }
      - { id: p4, kiri: "Gerak parabola", kanan: "Gabungan GLB (horizontal) & GLBB (vertikal)" }
    penjelasan: "Keempat jenis gerak ini saling berkaitan -- gerak jatuh bebas sebenarnya kasus khusus GLBB, dan gerak parabola adalah gabungan GLB & GLBB pada dua arah yang berbeda sekaligus."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan situasi sehari-hari berikut dengan jenis gerak yang paling sesuai."
    pasangan:
      - { id: p1, kiri: "Mobil melaju dengan kecepatan tetap di jalan tol lurus yang sepi", kanan: "Gerak Lurus Beraturan (GLB)" }
      - { id: p2, kiri: "Mobil mengerem secara bertahap saat mendekati lampu merah", kanan: "GLBB diperlambat" }
      - { id: p3, kiri: "Bola ditendang melambung membentuk lintasan melengkung", kanan: "Gerak parabola" }
      - { id: p4, kiri: "Buah kelapa jatuh dari pohon (abaikan hambatan udara)", kanan: "GLBB dipercepat (jatuh bebas)" }
    penjelasan: "Mengenali jenis gerak dari situasi nyata (bukan cuma dari rumus/grafik) penting buat menentukan rumus mana yang harus dipakai duluan saat mengerjakan soal cerita."
    skor: 2
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menyelesaikan soal gerak parabola (mis. mencari tinggi maksimum & jangkauan), dari yang paling awal."
    item:
      - { id: i1, teks: "Uraikan kecepatan awal menjadi komponen horizontal (v₀ₓ) dan vertikal (v₀ᵧ)" }
      - { id: i2, teks: "Hitung waktu untuk mencapai titik tertinggi (saat kecepatan vertikal = 0)" }
      - { id: i3, teks: "Hitung tinggi maksimum yang dicapai" }
      - { id: i4, teks: "Hitung total waktu benda berada di udara" }
      - { id: i5, teks: "Hitung jarak jangkauan (jarak mendatar total saat benda kembali ke ketinggian awal)" }
    penjelasan: "Gerak parabola selalu diselesaikan dengan MEMISAH dulu jadi dua komponen gerak (horizontal & vertikal), baru dianalisis satu-satu -- bukan dihitung langsung sebagai satu gerak utuh."
    skor: 1
  - tipe: drag-drop
    id: soal-13
    soal: "Kelompokkan pernyataan berikut sebagai ciri Gerak Lurus Beraturan (GLB) atau Gerak Lurus Berubah Beraturan (GLBB)."
    kategori:
      - { id: glb, label: "Ciri GLB" }
      - { id: glbb, label: "Ciri GLBB" }
    item:
      - { id: t1, teks: "Percepatan sama dengan nol", kategoriBenarId: glb }
      - { id: t2, teks: "Grafik kecepatan terhadap waktu berupa garis lurus MENDATAR", kategoriBenarId: glb }
      - { id: t3, teks: "Percepatan bernilai tetap dan TIDAK sama dengan nol", kategoriBenarId: glbb }
      - { id: t4, teks: "Grafik kecepatan terhadap waktu berupa garis lurus MIRING", kategoriBenarId: glbb }
    penjelasan: "Kunci pembeda GLB dan GLBB ada pada percepatannya -- GLB percepatannya nol (kecepatan tetap), GLBB percepatannya konstan tapi tidak nol (kecepatan berubah beraturan)."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan pernyataan tentang gerak parabola berikut sebagai Benar atau Salah."
    kategori:
      - { id: benar, label: "Benar" }
      - { id: salah, label: "Salah" }
    item:
      - { id: t1, teks: "Tanpa hambatan udara, waktu naik ke titik tertinggi sama dengan waktu turun kembali ke ketinggian awal", kategoriBenarId: benar }
      - { id: t2, teks: "Di titik tertinggi lintasan, percepatan benda sama dengan nol", kategoriBenarId: salah }
      - { id: t3, teks: "Kecepatan pada arah horizontal berubah-ubah sepanjang lintasan karena pengaruh gravitasi", kategoriBenarId: salah }
      - { id: t4, teks: "Di titik tertinggi lintasan, komponen kecepatan VERTIKAL benda sama dengan nol", kategoriBenarId: benar }
    penjelasan: "Miskonsepsi paling umum: mengira percepatan di titik tertinggi = nol. Padahal yang nol itu KECEPATAN VERTIKAL sesaat di titik tertinggi -- percepatan gravitasi (g) tetap bekerja sepanjang lintasan, termasuk di titik tertinggi."
    skor: 2
  - tipe: menyusun-urutan
    id: soal-15
    soal: "Susun langkah menentukan JENIS gerak (GLB, GLBB dipercepat, atau GLBB diperlambat) dari sebuah grafik kecepatan terhadap waktu (v-t), dari yang paling awal."
    item:
      - { id: i1, teks: "Perhatikan apakah garis pada grafik v-t mendatar atau miring" }
      - { id: i2, teks: "Jika mendatar (nilai v tidak berubah), simpulkan gerak tersebut GLB" }
      - { id: i3, teks: "Jika miring NAIK, simpulkan gerak tersebut GLBB dipercepat" }
      - { id: i4, teks: "Jika miring TURUN menuju nol, simpulkan gerak tersebut GLBB diperlambat" }
    penjelasan: "Grafik v-t adalah cara tercepat mengenali jenis gerak: kemiringan (gradien) garisnya langsung menunjukkan besar percepatan -- garis mendatar berarti percepatan nol (GLB), garis miring berarti ada percepatan tetap (GLBB)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-16
    soal: "Rumus yang menghubungkan kecepatan linear (v) dengan kecepatan sudut (ω) pada gerak melingkar adalah..."
    pilihan:
      - { id: a, teks: "v = ω / r" }
      - { id: b, teks: "v = ω × r" }
      - { id: c, teks: "v = ω + r" }
      - { id: d, teks: "v = ω × r²" }
    jawabanBenarId: b
    penjelasan: "v = ω × r -- kecepatan linear sebanding dengan kecepatan sudut DAN jari-jari lintasannya."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-17
    soal: "Sebuah benda bergerak melingkar dengan kecepatan sudut 6 rad/s pada lintasan berjari-jari 2 m. Kecepatan linear benda tersebut adalah..."
    pilihan:
      - { id: a, teks: "3 m/s" }
      - { id: b, teks: "4 m/s" }
      - { id: c, teks: "8 m/s" }
      - { id: d, teks: "12 m/s" }
    jawabanBenarId: d
    penjelasan: "v = ω × r = 6 rad/s × 2 m = 12 m/s."
    skor: 1
  - tipe: isian-singkat
    id: soal-18
    soal: "Sebuah benda bergerak melingkar dengan kelajuan 8 m/s pada lintasan berjari-jari 4 m. Besar percepatan sentripetal benda tersebut adalah ... m/s²."
    angka: true
    toleransi: 0
    jawabanBenar: ["16"]
    penjelasan: "a_s = v²/r = 8²/4 = 64/4 = 16 m/s²."
    skor: 1
  - tipe: benar-salah
    id: soal-19
    soal: "Pada Gerak Melingkar Beraturan (GMB), meskipun lajunya konstan, benda tetap memiliki percepatan karena arah kecepatannya terus berubah."
    jawabanBenar: true
    penjelasan: "Benar -- istilah 'beraturan' pada GMB merujuk pada LAJU yang konstan, bukan berarti tidak ada percepatan. Karena arah kecepatan terus berubah mengikuti lengkungan lintasan, tetap ada percepatan sentripetal yang mengarah ke pusat lingkaran."
    skor: 2
  - tipe: menjodohkan
    id: soal-20
    soal: "Jodohkan jenis hubungan roda-roda dengan besaran yang PASTI sama pada keduanya."
    pasangan:
      - { id: p1, kiri: "Roda Sepusat / Seporos", kanan: "Kecepatan sudut (ω) kedua roda sama besar" }
      - { id: p2, kiri: "Roda Bersinggungan Langsung", kanan: "Kecepatan linear (v) kedua roda sama besar di titik singgung" }
      - { id: p3, kiri: "Roda Dihubungkan Sabuk/Rantai", kanan: "Kecepatan linear (v) kedua roda sama besar (lewat sabuk/rantai yang sama)" }
    penjelasan: "Roda sepusat berputar sebagai satu kesatuan (ω wajib sama), sedangkan roda yang bersinggungan/dihubungkan sabuk saling menggerakkan lewat kontak permukaan, sehingga kecepatan LINEAR-nya yang harus sama."
    skor: 1
  - tipe: drag-drop
    id: soal-21
    soal: "Kelompokkan pasangan roda berikut: apakah kecepatan SUDUT (ω) keduanya yang sama, atau kecepatan LINEAR (v) keduanya yang sama."
    kategori:
      - { id: sama-omega, label: "Kecepatan Sudut (ω) Sama" }
      - { id: sama-v, label: "Kecepatan Linear (v) Sama" }
    item:
      - { id: t1, teks: "Dua roda gigi yang dipasang pada satu as/poros yang sama (co-axial)", kategoriBenarId: sama-omega }
      - { id: t2, teks: "Roda depan dan roda belakang sepeda yang dihubungkan rantai", kategoriBenarId: sama-v }
      - { id: t3, teks: "Dua gir yang giginya saling bertautan langsung (bersinggungan)", kategoriBenarId: sama-v }
      - { id: t4, teks: "Kedua roda mobil yang terpasang pada satu as/gandar yang sama (co-axial)", kategoriBenarId: sama-omega }
    penjelasan: "Kuncinya: roda yang menempel di POROS yang sama WAJIB berputar bersamaan (ω sama), sedangkan roda yang saling bersentuhan/terhubung sabuk-rantai saling 'menggerakkan' lewat permukaan yang bergerak sama cepat (v sama)."
    skor: 2
draft: false
---
