---
ikon: "📘"
label: "Modul Ajar / RPP"
urutan: 1
bidang:
  - tipe: text
    id: mapel
    label: "Mata Pelajaran"
    placeholder: "mis. Fisika"
  - tipe: text
    id: kelas
    label: "Kelas / Fase"
    placeholder: "mis. Kelas X / Fase E"
  - tipe: text
    id: topik
    label: "Topik / Materi"
    placeholder: "mis. Gerak Parabola"
  - tipe: text
    id: waktu
    label: "Alokasi Waktu"
    placeholder: "mis. 2 x 45 menit"
  - tipe: text
    id: model
    label: "Model Pembelajaran (opsional)"
    placeholder: "mis. Problem Based Learning -- kosongkan biar AI yang pilih"
  - tipe: textarea
    id: catatan
    label: "Catatan tambahan (opsional)"
    placeholder: "mis. siswa sudah paham konsep vektor dasar, kelas cenderung aktif"
template: |
  Kamu adalah asisten perencanaan pembelajaran untuk guru SMA di Indonesia yang mengikuti Kurikulum Merdeka.

  Buatkan Modul Ajar (RPP) lengkap dengan detail berikut:
  - Mata Pelajaran: {{mapel}}
  - Kelas/Fase: {{kelas}}
  - Topik/Materi: {{topik}}
  - Alokasi Waktu: {{waktu}}
  - Model/Pendekatan Pembelajaran: {{model}}
  - Catatan tambahan dari guru: {{catatan}}

  Susun Modul Ajar dengan struktur berikut:
  1. Identitas (mata pelajaran, fase/kelas, alokasi waktu)
  2. Capaian Pembelajaran & Tujuan Pembelajaran (pakai kata kerja operasional Taksonomi Bloom)
  3. Pemahaman Bermakna & Pertanyaan Pemantik
  4. Profil Pelajar Pancasila yang relevan
  5. Kegiatan Pembelajaran (Pendahuluan, Inti -- rinci sesuai sintaks model pembelajaran yang dipilih, Penutup), dibagi per alokasi menit
  6. Asesmen (diagnostik, formatif, sumatif) lengkap contoh instrumennya
  7. Diferensiasi pembelajaran (untuk siswa yang butuh dukungan lebih dan yang sudah mahir)
  8. Refleksi guru & refleksi siswa

  Tulis dalam Bahasa Indonesia yang jelas, siap pakai, dan format pakai heading markdown.
draft: false
---
