---
judul: "Latihan TKA: Hukum Newton (Paket 2)"
kelas: TKA
mapel: Fisika
deskripsi: "15 soal latihan (Paket 2, soal baru) -- 6 tipe interaktif dengan porsi HOTS, mencakup gaya gesek, bidang miring, dan sistem katrol yang belum dibahas di Paket 1."
materiSlug: hukum-newton-dan-penerapannya
pinHash: 69e4b8de50a1211b2c6d7f91826e48d3f3e6e40964c00a0084487dd2e3293ef2
pinBerlakuHingga: 2027-03-20
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Pernyataan yang TEPAT tentang gaya gesek statis dan kinetis adalah..."
    pilihan:
      - { id: a, teks: "Gaya gesek kinetis selalu lebih besar dari gaya gesek statis maksimum" }
      - { id: b, teks: "Gaya gesek statis maksimum umumnya lebih besar dari gaya gesek kinetis" }
      - { id: c, teks: "Keduanya selalu bernilai sama persis" }
      - { id: d, teks: "Gaya gesek statis hanya terjadi pada benda yang sedang bergerak" }
    jawabanBenarId: b
    penjelasan: "Gaya gesek statis maksimum umumnya lebih besar dari gaya gesek kinetis -- inilah kenapa mendorong benda diam terasa lebih berat di awal, lalu terasa lebih ringan begitu benda mulai bergerak."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sebuah balok bermassa 5 kg berada di atas lantai dengan koefisien gesek kinetis 0,2 (g = 10 m/s²). Besar gaya gesek kinetis yang bekerja saat balok bergerak adalah..."
    pilihan:
      - { id: a, teks: "1 N" }
      - { id: b, teks: "5 N" }
      - { id: c, teks: "10 N" }
      - { id: d, teks: "50 N" }
    jawabanBenarId: c
    penjelasan: "f = μ × N = μ × mg = 0,2 × 5 × 10 = 10 N."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Sebuah balok meluncur dari bidang miring LICIN (tanpa gesekan) dengan sudut kemiringan 30° (sin 30° = 0,5, g = 10 m/s²). Percepatan balok saat meluncur adalah..."
    pilihan:
      - { id: a, teks: "2,5 m/s²" }
      - { id: b, teks: "5 m/s²" }
      - { id: c, teks: "8,7 m/s²" }
      - { id: d, teks: "10 m/s²" }
    jawabanBenarId: b
    penjelasan: "Pada bidang miring licin, a = g sin θ = 10 × 0,5 = 5 m/s²."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Sebuah balok bermassa 4 kg ditarik dengan gaya 20 N yang membentuk sudut 37° terhadap bidang datar (sin 37° = 0,6, cos 37° = 0,8), di atas lantai kasar dengan koefisien gesek kinetis 0,2 (g = 10 m/s²). Percepatan balok tersebut adalah..."
    pilihan:
      - { id: a, teks: "2 m/s²" }
      - { id: b, teks: "2,6 m/s²" }
      - { id: c, teks: "4 m/s²" }
      - { id: d, teks: "5 m/s²" }
    jawabanBenarId: b
    penjelasan: "Komponen gaya: Fx = 20×0,8 = 16 N, Fy = 20×0,6 = 12 N (ke atas). Karena gaya tarik membentuk sudut ke atas, gaya normal BERKURANG: N = mg − Fy = 40 − 12 = 28 N. Gaya gesek: f = μN = 0,2×28 = 5,6 N. Resultan horizontal: Fx − f = 16 − 5,6 = 10,4 N. Percepatan: a = 10,4/4 = 2,6 m/s². (Kesalahan umum: memakai N = mg tanpa mengoreksi Fy, menghasilkan jawaban 2 m/s² yang keliru.)"
    skor: 2
  - tipe: benar-salah
    id: soal-5
    soal: "Gaya gesek statis maksimum umumnya lebih besar daripada gaya gesek kinetis, untuk pasangan permukaan yang sama."
    jawabanBenar: true
    penjelasan: "Benar -- inilah kenapa benda diam butuh gaya lebih besar untuk MULAI bergerak dibanding gaya yang dibutuhkan untuk MEMPERTAHANKAN gerak yang sudah berlangsung."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Pada bidang miring licin (tanpa gesekan), percepatan benda yang meluncur turun TIDAK bergantung pada massa benda tersebut."
    jawabanBenar: true
    penjelasan: "Benar -- rumus a = g sin θ tidak mengandung massa (m) sama sekali. Massa 'terhapus' karena gaya berat (mg sin θ) dan massa dalam a=F/m saling meniadakan."
    skor: 1
  - tipe: isian-singkat
    id: soal-7
    soal: "Sebuah balok bermassa 8 kg berada di atas lantai dengan koefisien gesek kinetis 0,25 (g = 10 m/s²). Besar gaya gesek kinetis yang bekerja saat balok bergerak adalah ... N."
    angka: true
    toleransi: 0
    jawabanBenar: ["20"]
    penjelasan: "f = μ × mg = 0,25 × 8 × 10 = 20 N."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Sebuah balok meluncur dari bidang miring licin dengan sudut kemiringan 37° (sin 37° = 0,6, g = 10 m/s²). Percepatan balok tersebut adalah ... m/s²."
    angka: true
    toleransi: 0
    jawabanBenar: ["6"]
    penjelasan: "a = g sin θ = 10 × 0,6 = 6 m/s²."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Dua benda dihubungkan tali melalui katrol licin tanpa massa: benda A (massa 3 kg) tergantung bebas, dan benda B (massa 2 kg) berada di atas meja licin (tanpa gesekan). Percepatan sistem tersebut adalah ... m/s² (g = 10 m/s²)."
    angka: true
    toleransi: 0
    jawabanBenar: ["6"]
    penjelasan: "Untuk sistem ini, a = (mA × g)/(mA + mB) = (3×10)/(3+2) = 30/5 = 6 m/s²."
    skor: 2
  - tipe: menjodohkan
    id: soal-10
    soal: "Jodohkan istilah dengan definisinya."
    pasangan:
      - { id: p1, kiri: "Gaya Gesek Statis", kanan: "Menahan benda diam agar tidak bergerak, nilainya bisa berubah sampai batas maksimum tertentu" }
      - { id: p2, kiri: "Gaya Gesek Kinetis", kanan: "Bekerja pada benda yang sedang bergerak, umumnya lebih kecil dari gesek statis maksimum" }
      - { id: p3, kiri: "Koefisien Gesek (μ)", kanan: "Perbandingan besar gaya gesek dengan gaya normal (f = μN)" }
      - { id: p4, kiri: "Gaya Normal", kanan: "Gaya yang bekerja tegak lurus terhadap permukaan yang bersentuhan" }
    penjelasan: "Gaya gesek TIDAK PERNAH lebih besar dari yang dibutuhkan untuk mencegah/melawan gerak -- gesek statis 'menyesuaikan diri' sampai batas maksimumnya, baru kemudian benda mulai bergerak dan gesekannya berubah jadi kinetis."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan fenomena sehari-hari berikut dengan konsep gesekan yang paling sesuai."
    pasangan:
      - { id: p1, kiri: "Mendorong lemari berat yang awalnya diam butuh gaya besar, tapi begitu mulai bergeser jadi lebih mudah didorong", kanan: "Gesek statis maksimum lebih besar dari gesek kinetis" }
      - { id: p2, kiri: "Ban mobil diberi alur/kembang supaya tidak selip di jalan basah", kanan: "Memperbesar gaya gesek (grip)" }
      - { id: p3, kiri: "Lantai yang dilapisi es membuat orang mudah terpeleset", kanan: "Gaya gesek yang sangat kecil" }
      - { id: p4, kiri: "Rem sepeda menekan pelek roda untuk menghentikan laju sepeda", kanan: "Memanfaatkan gaya gesek untuk memperlambat gerak" }
    penjelasan: "Gesekan bukan cuma 'penghambat' -- kadang justru dimanfaatkan (ban, rem), kadang dikurangi (pelumas, es licin bukan contoh yang diinginkan tapi menunjukkan efeknya)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-12
    soal: "Susun langkah menghitung percepatan benda pada bidang miring KASAR (dengan gesekan), dari yang paling awal."
    item:
      - { id: i1, teks: "Uraikan gaya berat benda menjadi komponen sejajar bidang (mg sin θ) dan tegak lurus bidang (mg cos θ)" }
      - { id: i2, teks: "Hitung gaya normal (N), yang besarnya sama dengan komponen gaya berat tegak lurus bidang (N = mg cos θ)" }
      - { id: i3, teks: "Hitung gaya gesek yang bekerja (f = μN)" }
      - { id: i4, teks: "Hitung resultan gaya sejajar bidang miring (ΣF = mg sin θ − f)" }
      - { id: i5, teks: "Hitung percepatan benda dengan a = ΣF/m" }
    penjelasan: "Beda dengan bidang miring licin, di sini gaya normal TIDAK sama dengan mg (karena bidang miring), dan gaya gesek harus dihitung dari komponen tegak lurus bidang, bukan dari berat total."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menganalisis sistem dua benda yang dihubungkan tali melalui katrol (satu benda tergantung, satu di atas meja), dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan arah gerak sistem yang mungkin terjadi (benda yang tergantung akan turun, menarik benda lain lewat tali)" }
      - { id: i2, teks: "Gambar diagram bebas gaya untuk masing-masing benda secara terpisah" }
      - { id: i3, teks: "Tuliskan persamaan Hukum II Newton untuk tiap benda sesuai arah geraknya masing-masing" }
      - { id: i4, teks: "Gunakan syarat bahwa tali tidak mulur, sehingga percepatan kedua benda besarnya sama" }
      - { id: i5, teks: "Gabungkan persamaan-persamaan tersebut untuk mendapatkan percepatan sistem" }
    penjelasan: "Menentukan arah gerak di awal (langkah 1) penting supaya tanda positif/negatif pada persamaan gaya konsisten untuk kedua benda -- kesalahan tanda adalah sumber kesalahan paling umum di soal jenis ini."
    skor: 2
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan situasi berikut sebagai contoh Gesekan Statis atau Gesekan Kinetis."
    kategori:
      - { id: statis, label: "Gesekan Statis" }
      - { id: kinetis, label: "Gesekan Kinetis" }
    item:
      - { id: t1, teks: "Lemari yang masih diam meski sudah didorong dengan gaya tertentu (belum bergerak)", kategoriBenarId: statis }
      - { id: t2, teks: "Balok yang sedang meluncur di atas lantai", kategoriBenarId: kinetis }
      - { id: t3, teks: "Mobil yang diparkir di jalan menurun tapi tidak bergerak (rem tangan aktif)", kategoriBenarId: statis }
      - { id: t4, teks: "Kotak yang sedang ditarik dan sudah bergerak melintasi lantai", kategoriBenarId: kinetis }
    penjelasan: "Kunci membedakannya: benda itu SEDANG BERGERAK atau TIDAK. Belum bergerak (meski sudah didorong) = gesek statis; sudah bergerak = gesek kinetis."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan faktor berikut: apakah faktor tersebut Mempengaruhi Besar Gaya Gesek, atau TIDAK Mempengaruhi Besar Gaya Gesek."
    kategori:
      - { id: mempengaruhi, label: "Mempengaruhi Gaya Gesek" }
      - { id: tidak, label: "TIDAK Mempengaruhi Gaya Gesek" }
    item:
      - { id: t1, teks: "Jenis/kekasaran permukaan yang bersentuhan (koefisien gesek μ)", kategoriBenarId: mempengaruhi }
      - { id: t2, teks: "Besar gaya normal antara kedua permukaan", kategoriBenarId: mempengaruhi }
      - { id: t3, teks: "Luas permukaan kontak antara kedua benda", kategoriBenarId: tidak }
      - { id: t4, teks: "Kecepatan benda saat bergerak (untuk gesekan kinetis biasa)", kategoriBenarId: tidak }
    penjelasan: "Rumus f = μN hanya melibatkan koefisien gesek dan gaya normal -- TIDAK ada luas permukaan maupun kecepatan di dalamnya. Ini sering jadi miskonsepsi: banyak yang mengira permukaan kontak lebih luas berarti gesekan lebih besar, padahal secara fisis TIDAK demikian."
    skor: 2
draft: false
---
