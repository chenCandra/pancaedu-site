---
ikon: "🧪"
label: "Lab Maya & Simulasi Kamera/AR"
urutan: 2
bidang:
  - tipe: text
    id: mapel
    label: "Mata Pelajaran"
    placeholder: "mis. Fisika"
  - tipe: text
    id: kelas
    label: "Kelas / Fase"
    placeholder: "mis. Kelas XI"
  - tipe: text
    id: topik
    label: "Topik / Konsep"
    placeholder: "mis. Hukum Archimedes"
  - tipe: select
    id: interaksi
    label: "Jenis Interaksi"
    opsi:
      - "Gestur tangan lewat kamera (tanpa sentuh layar)"
      - "Drag-and-drop / geser elemen"
      - "Slider / tombol biasa"
      - "Belum tahu, minta AI yang menyarankan"
  - tipe: textarea
    id: tujuan
    label: "Tujuan Pembelajaran"
    placeholder: "mis. siswa memahami hubungan tekanan fluida dan kedalaman"
  - tipe: checkbox
    id: kode
    label: "Sertakan draf kode HTML/JS sederhana"
    teksJikaDicentang: "6. Draf kode HTML/CSS/JavaScript sederhana (satu file, vanilla JS tanpa framework/build tool) yang mengimplementasikan konsep ini langsung di browser"
template: |
  Kamu adalah desainer simulasi pembelajaran interaktif (Lab Maya) untuk siswa SMA di Indonesia.

  Rancang konsep simulasi interaktif untuk topik berikut:
  - Mata Pelajaran: {{mapel}}
  - Kelas/Fase: {{kelas}}
  - Topik/Konsep: {{topik}}
  - Jenis interaksi yang diinginkan: {{interaksi}}
  - Tujuan pembelajaran: {{tujuan}}

  Berikan jawabanmu dengan struktur:
  1. Konsep inti: bagaimana konsep di atas divisualisasikan secara interaktif
  2. Mekanisme interaksi pengguna, langkah demi langkah
  3. Variabel yang bisa diubah pengguna, dan bagaimana visualnya berubah -- hubungkan ke rumus/konsep yang relevan
  4. Info/data yang ditampilkan live ke pengguna selama berinteraksi
  5. Potensi miskonsepsi siswa yang bisa diluruskan lewat simulasi ini
  {{kode}}

  Jelaskan dengan bahasa yang mudah dipahami, siap saya pakai sebagai acuan pengembangan.
draft: false
---
