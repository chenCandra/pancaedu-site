---
judul: "Proses-proses Termodinamika pada Gas"
kelas: XI
mapel: Fisika
deskripsi: "15 soal interaktif -- pilihan ganda, benar/salah, isian singkat, menjodohkan, menyusun urutan, dan drag & drop -- seputar proses isobarik, isokhorik, isotermal, dan adiabatik."
materiSlug: proses-proses-termodinamika-pada-gas
pinHash: cc6dee183779696666c070531ee815c77fefe6452fe662c3ef0b10669e8e8117
pinBerlakuHingga: 2027-03-12
soal:
  - tipe: pilihan-ganda
    id: soal-1
    soal: "Proses isobarik terjadi pada..."
    pilihan:
      - { id: a, teks: "Tekanan tetap" }
      - { id: b, teks: "Volume tetap" }
      - { id: c, teks: "Suhu tetap" }
      - { id: d, teks: "Kalor tetap nol" }
    jawabanBenarId: a
    penjelasan: "Isobarik = tekanan tetap."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-2
    soal: "Rumus usaha gas pada proses isobarik adalah..."
    pilihan:
      - { id: a, teks: "W = PΔV" }
      - { id: b, teks: "W = 0" }
      - { id: c, teks: "W = VΔP" }
      - { id: d, teks: "W = nRT ln(V2/V1)" }
    jawabanBenarId: a
    penjelasan: "W = PΔV."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-3
    soal: "Usaha gas pada proses isokhorik selalu bernilai..."
    pilihan:
      - { id: a, teks: "0 (nol)" }
      - { id: b, teks: "Maksimum" }
      - { id: c, teks: "Sama dengan Q" }
      - { id: d, teks: "Negatif" }
    jawabanBenarId: a
    penjelasan: "V tetap, ΔV=0, sehingga W=0."
    skor: 1
  - tipe: pilihan-ganda
    id: soal-4
    soal: "Gas isobarik P=1,5×10⁵ Pa mengembang dari V1=0,01 m³ ke V2=0,02 m³. Berapa usahanya?"
    pilihan:
      - { id: a, teks: "1.500 J" }
      - { id: b, teks: "3.000 J" }
      - { id: c, teks: "150 J" }
      - { id: d, teks: "15.000 J" }
    jawabanBenarId: a
    penjelasan: "W=1,5×10⁵×(0,02−0,01)=1,5×10⁵×0,01=1.500 J."
    skor: 1
  - tipe: benar-salah
    id: soal-5
    soal: "Secara grafis, usaha gas pada diagram P-V sama dengan luas daerah di bawah kurva prosesnya."
    jawabanBenar: true
    penjelasan: "Benar."
    skor: 1
  - tipe: benar-salah
    id: soal-6
    soal: "Pada proses adiabatik, tidak ada kalor yang masuk atau keluar sistem (Q=0)."
    jawabanBenar: true
    penjelasan: "Benar -- definisi adiabatik."
    skor: 1
  - tipe: benar-salah
    id: soal-7
    soal: "Rumus W=PΔV berlaku untuk semua jenis proses termodinamika."
    jawabanBenar: false
    penjelasan: "Salah -- W=PΔV hanya berlaku untuk proses isobarik."
    skor: 1
  - tipe: isian-singkat
    id: soal-8
    soal: "Gas isobarik P=2×10⁵ Pa mengembang dari V1=0,015 m³ ke V2=0,04 m³. Berapa usahanya, dalam Joule?"
    angka: true
    toleransi: 50
    jawabanBenar: ["5000"]
    penjelasan: "W=2×10⁵×(0,04−0,015)=2×10⁵×0,025=5.000 J."
    skor: 1
  - tipe: isian-singkat
    id: soal-9
    soal: "Gas isobarik P=1×10⁵ Pa dimampatkan dari V1=0,05 m³ ke V2=0,02 m³. Berapa usahanya, dalam Joule? (sertakan tanda negatif jika perlu)"
    angka: true
    toleransi: 50
    jawabanBenar: ["-3000"]
    penjelasan: "W=1×10⁵×(0,02−0,05)=1×10⁵×(−0,03)=−3.000 J."
    skor: 1
  - tipe: isian-singkat
    id: soal-10
    soal: "Pada proses adiabatik, gas melakukan usaha 220 J terhadap lingkungan. Berapa perubahan energi dalamnya, dalam Joule? (Q=0, ingat ΔU=−W)"
    angka: true
    toleransi: 5
    jawabanBenar: ["-220"]
    penjelasan: "ΔU=Q−W=0−220=−220 J."
    skor: 1
  - tipe: menjodohkan
    id: soal-11
    soal: "Jodohkan proses dengan besaran yang tetap."
    pasangan:
      - { id: p1, kiri: "Isobarik", kanan: "Tekanan (P)" }
      - { id: p2, kiri: "Isokhorik", kanan: "Volume (V)" }
      - { id: p3, kiri: "Isotermal", kanan: "Suhu (T)" }
    penjelasan: "Tiga proses dengan besaran tetapnya masing-masing."
    skor: 1
  - tipe: menjodohkan
    id: soal-12
    soal: "Jodohkan proses dengan bentuknya pada diagram P-V."
    pasangan:
      - { id: p1, kiri: "Isobarik", kanan: "Garis horizontal" }
      - { id: p2, kiri: "Isokhorik", kanan: "Garis vertikal" }
    penjelasan: "Isobarik horizontal (P tetap), isokhorik vertikal (V tetap)."
    skor: 1
  - tipe: menyusun-urutan
    id: soal-13
    soal: "Susun langkah menghitung usaha gas pada proses isobarik, dari yang paling awal."
    item:
      - { id: i1, teks: "Tentukan tekanan tetap (P)" }
      - { id: i2, teks: "Tentukan volume awal (V1) dan volume akhir (V2)" }
      - { id: i3, teks: "Hitung ΔV = V2 − V1" }
      - { id: i4, teks: "Kalikan W = P × ΔV" }
    penjelasan: "P dulu, V1-V2, hitung ΔV, baru dikalikan."
    skor: 1
  - tipe: drag-drop
    id: soal-14
    soal: "Kelompokkan proses berikut sesuai usaha gasnya."
    kategori:
      - { id: nol, label: "Usaha Selalu Nol" }
      - { id: bisa, label: "Usaha Bisa Positif/Negatif" }
    item:
      - { id: t1, teks: "Isokhorik", kategoriBenarId: nol }
      - { id: t2, teks: "Isobarik", kategoriBenarId: bisa }
      - { id: t3, teks: "Isotermal", kategoriBenarId: bisa }
    penjelasan: "Isokhorik selalu W=0, isobarik dan isotermal bisa positif (mengembang) atau negatif (mengecil)."
    skor: 1
  - tipe: drag-drop
    id: soal-15
    soal: "Kelompokkan pernyataan berikut sesuai proses yang paling tepat."
    kategori:
      - { id: adiabatik, label: "Adiabatik" }
      - { id: isokhorik, label: "Isokhorik" }
    item:
      - { id: t1, teks: "Ban sepeda dipompa cepat jadi panas", kategoriBenarId: adiabatik }
      - { id: t2, teks: "Gas dipanaskan dalam wadah kaku, semua kalor jadi energi dalam", kategoriBenarId: isokhorik }
    penjelasan: "Pompa cepat mendekati adiabatik, wadah kaku adalah isokhorik."
    skor: 1
draft: false
---
