---
ikon: "📝"
label: "Soal & Asesmen"
urutan: 3
bidang:
  - tipe: text
    id: mapel
    label: "Mata Pelajaran"
    placeholder: "mis. Fisika"
  - tipe: text
    id: kelas
    label: "Kelas / Fase"
    placeholder: "mis. Kelas X"
  - tipe: text
    id: topik
    label: "Topik"
    placeholder: "mis. Besaran dan Satuan"
  - tipe: text
    id: jumlah
    label: "Jumlah Soal"
    placeholder: "mis. 10"
  - tipe: select
    id: jenis
    label: "Jenis Soal"
    opsi:
      - "Pilihan Ganda"
      - "Esai"
      - "Benar-Salah"
      - "Isian Singkat"
      - "Campuran"
  - tipe: select
    id: level
    label: "Level Kognitif (Bloom)"
    opsi:
      - "Campuran semua level"
      - "C1 - Mengingat"
      - "C2 - Memahami"
      - "C3 - Menerapkan"
      - "C4 - Menganalisis"
      - "C5 - Mengevaluasi"
      - "C6 - Mencipta"
  - tipe: textarea
    id: catatan
    label: "Catatan tambahan (opsional)"
    placeholder: "mis. gunakan konteks sehari-hari, hindari angka desimal rumit"
template: |
  Kamu adalah asisten pembuatan soal untuk guru SMA di Indonesia.

  Buatkan {{jumlah}} soal {{jenis}} untuk:
  - Mata Pelajaran: {{mapel}}
  - Kelas/Fase: {{kelas}}
  - Topik: {{topik}}
  - Level kognitif: {{level}} (acuan Taksonomi Bloom)
  - Catatan tambahan: {{catatan}}

  Untuk tiap soal, sertakan:
  1. Teks soal yang jelas dan kontekstual (pakai konteks sehari-hari bila memungkinkan)
  2. Pilihan jawaban (khusus pilihan ganda: 4-5 opsi, 1 kunci jawaban, pengecoh masuk akal)
  3. Kunci jawaban
  4. Pembahasan singkat kenapa jawaban itu benar

  Format dalam Bahasa Indonesia, pakai penomoran yang rapi.
draft: false
---
