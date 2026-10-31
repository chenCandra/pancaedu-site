---
ikon: "🗂️"
label: "Administrasi Lainnya"
urutan: 4
bidang:
  - tipe: text
    id: jenis
    label: "Jenis Dokumen"
    placeholder: "mis. Program Tahunan, Jurnal Mengajar, Analisis KKM"
  - tipe: text
    id: mapel
    label: "Mata Pelajaran / Konteks (opsional)"
    placeholder: "mis. Fisika Kelas XI"
  - tipe: textarea
    id: detail
    label: "Detail & Kebutuhan"
    placeholder: "jelaskan apa saja yang perlu dimasukkan ke dokumen ini"
template: |
  Kamu adalah asisten administrasi guru di Indonesia.

  Bantu saya menyusun dokumen berikut:
  - Jenis dokumen: {{jenis}}
  - Mata Pelajaran/Konteks: {{mapel}}
  - Detail & kebutuhan: {{detail}}

  Susun dokumennya secara lengkap, profesional, dan siap pakai (format sesuai kebiasaan administrasi sekolah di Indonesia), dalam Bahasa Indonesia.
draft: false
---
