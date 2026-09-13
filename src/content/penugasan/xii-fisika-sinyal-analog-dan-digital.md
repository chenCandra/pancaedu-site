---
judul: "Sinyal Analog dan Digital"
kelas: XII
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar beda sinyal analog dan digital, sampling, dan kuantisasi."
materiSlug: sinyal-analog-dan-digital
pinHash: e087feb0ae96e56a91f9b6cc11db812e7cb116a50e11c276db358278192a1124
pinBerlakuHingga: 2027-03-10
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Sinyal analog adalah sinyal yang..."
    pilihan:
      - { id: a, teks: "Berubah secara kontinu, nilainya bisa berapa saja dalam suatu rentang" }
      - { id: b, teks: "Cuma punya dua nilai: 0 dan 1" }
      - { id: c, teks: "Hanya ada dalam bentuk suara" }
      - { id: d, teks: "Tidak bisa diperkuat" }
    jawabanBenarId: a
    penjelasan: "Sinyal analog berubah secara kontinu -- nilainya bisa berapa saja, tidak terbatas pada level-level tertentu."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Sinyal digital adalah sinyal yang direpresentasikan dalam..."
    pilihan:
      - { id: a, teks: "Nilai diskrit (terpisah-pisah), umumnya cuma 2 level: HIGH dan LOW" }
      - { id: b, teks: "Nilai kontinu yang berubah halus" }
      - { id: c, teks: "Warna-warni cahaya" }
      - { id: d, teks: "Suhu ruangan" }
    jawabanBenarId: a
    penjelasan: "Sinyal digital cuma mengenal nilai diskrit, umumnya 2 level (biner): 1 (HIGH) dan 0 (LOW)."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Proses mengambil nilai sinyal analog pada interval waktu tertentu disebut..."
    pilihan:
      - { id: a, teks: "Sampling" }
      - { id: b, teks: "Kuantisasi" }
      - { id: c, teks: "Modulasi" }
      - { id: d, teks: "Amplifikasi" }
    jawabanBenarId: a
    penjelasan: "Sampling adalah proses mengambil nilai sinyal analog pada titik-titik waktu tertentu, langkah pertama mengubah sinyal analog jadi digital."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Proses membulatkan tiap nilai sampel ke level diskrit terdekat disebut..."
    pilihan:
      - { id: a, teks: "Kuantisasi" }
      - { id: b, teks: "Sampling" }
      - { id: c, teks: "Interferensi" }
      - { id: d, teks: "Refleksi" }
    jawabanBenarId: a
    penjelasan: "Kuantisasi adalah langkah kedua dalam ADC (Analog-to-Digital Conversion), membulatkan nilai hasil sampling ke level diskrit terdekat."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-5
    soal: "Keunggulan utama sinyal digital dibanding analog adalah..."
    pilihan:
      - { id: a, teks: "Lebih tahan terhadap gangguan (noise) dan mudah diproses/disalin tanpa degradasi" }
      - { id: b, teks: "Selalu punya resolusi tak terhingga" }
      - { id: c, teks: "Tidak pernah kehilangan informasi sama sekali" }
      - { id: d, teks: "Tidak butuh daya listrik" }
    jawabanBenarId: a
    penjelasan: "Sinyal digital cuma perlu dibedakan HIGH/LOW, jadi lebih tahan gangguan kecil, dan mudah disalin/diproses berkali-kali tanpa kualitasnya menurun."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-6
    soal: "Manakah yang termasuk contoh sinyal ANALOG?"
    pilihan:
      - { id: a, teks: "Piringan hitam (vinyl)" }
      - { id: b, teks: "Musik MP3" }
      - { id: c, teks: "Jam digital" }
      - { id: d, teks: "TV digital" }
    jawabanBenarId: a
    penjelasan: "Piringan hitam merekam suara sebagai alur fisik yang berubah kontinu, contoh klasik sinyal analog."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-7
    soal: "Manakah yang termasuk contoh sinyal DIGITAL?"
    pilihan:
      - { id: a, teks: "Musik dalam format MP3/streaming" }
      - { id: b, teks: "Piringan hitam (vinyl)" }
      - { id: c, teks: "Radio AM/FM klasik" }
      - { id: d, teks: "Jam analog dengan jarum" }
    jawabanBenarId: a
    penjelasan: "MP3/streaming musik menyimpan dan mengirim data sebagai sinyal digital (biner), berbeda dari piringan hitam/radio klasik yang analog."
    skor: 1
  - tipe: benar-salah
    id: soal-8
    soal: "Sinyal digital selalu lebih AKURAT daripada sinyal analog, karena nilainya sudah pasti."
    jawabanBenar: false
    penjelasan: "Salah -- sinyal digital punya batas resolusi akibat sampling dan kuantisasi. Sinyal analog secara teori punya presisi tak terhingga, meski rentan gangguan."
    skor: 1
  - tipe: benar-salah
    id: soal-9
    soal: "Semakin tinggi laju sampling, semakin detail sinyal digital merepresentasikan bentuk sinyal analog aslinya."
    jawabanBenar: true
    penjelasan: "Benar -- laju sampling yang lebih tinggi berarti lebih banyak titik data diambil, sehingga bentuk sinyal terekam lebih detail."
    skor: 1
  - tipe: benar-salah
    id: soal-10
    soal: "Sinyal analog lebih tahan terhadap gangguan (noise) dibanding sinyal digital."
    jawabanBenar: false
    penjelasan: "Salah -- justru SEBALIKNYA. Sinyal digital lebih tahan gangguan karena cuma perlu dibedakan HIGH/LOW; sinyal analog rentan karena gangguan kecil langsung menyatu jadi bagian sinyalnya."
    skor: 1
  - tipe: isian-singkat
    id: soal-11
    soal: "Berapa jumlah level minimal yang dikenal sinyal digital biner?"
    angka: true
    toleransi: 0
    jawabanBenar: ["2"]
    penjelasan: "Sinyal digital biner cuma mengenal 2 level: 0 (LOW) dan 1 (HIGH)."
    skor: 1
  - tipe: isian-singkat
    id: soal-12
    soal: "Sebutkan istilah proses 'mengambil nilai sinyal analog pada interval waktu tertentu' (1 kata, bahasa Inggris)."
    angka: false
    toleransi: 0
    jawabanBenar: ["Sampling"]
    penjelasan: "Sampling adalah langkah pertama mengubah sinyal analog jadi digital."
    skor: 1
  - tipe: menjodohkan
    id: soal-13
    soal: "Jodohkan istilah dengan definisinya."
    pasangan:
      - { id: p1, kiri: "Sampling", kanan: "Mengambil nilai sinyal pada interval waktu tertentu" }
      - { id: p2, kiri: "Kuantisasi", kanan: "Membulatkan nilai sampel ke level diskrit terdekat" }
      - { id: p3, kiri: "Noise", kanan: "Gangguan yang mengubah bentuk sinyal asli" }
    penjelasan: "Sampling dan kuantisasi adalah dua langkah utama mengubah sinyal analog jadi digital."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-14
    soal: "Susun langkah proses ADC (Analog-to-Digital Conversion), dari yang paling awal."
    item:
      - { id: i1, teks: "Sinyal analog kontinu masuk ke alat konversi" }
      - { id: i2, teks: "Nilai sinyal diambil pada interval waktu tertentu (sampling)" }
      - { id: i3, teks: "Tiap nilai sampel dibulatkan ke level diskrit terdekat (kuantisasi)" }
      - { id: i4, teks: "Hasilnya berupa sinyal digital (deretan nilai 0/1)" }
    penjelasan: "ADC selalu melalui dua tahap utama: sampling dulu, baru kuantisasi, menghasilkan sinyal digital."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan contoh berikut sebagai sinyal Analog atau Digital."
    kategori:
      - { id: analog, label: "Analog" }
      - { id: digital, label: "Digital" }
    item:
      - { id: t1, teks: "Piringan hitam (vinyl)", kategoriBenarId: analog }
      - { id: t2, teks: "Radio AM/FM generasi lama", kategoriBenarId: analog }
      - { id: t3, teks: "Musik MP3/streaming", kategoriBenarId: digital }
      - { id: t4, teks: "Jam digital", kategoriBenarId: digital }
    penjelasan: "Piringan hitam dan radio AM/FM klasik merepresentasikan sinyal secara kontinu (analog), sedangkan MP3 dan jam digital merepresentasikannya secara diskrit (digital)."
    skor: 1
draft: false
---
