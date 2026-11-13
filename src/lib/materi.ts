// Materi non-Fisika (mis. "Bahasa Inggris") punya rute & tema sendiri di
// /bahasa-inggris/materi/[slug] (lihat ModulLayout.astro) -- helper ini
// dipakai di SEMUA tempat yang meng-query koleksi `blog` dan (secara
// implisit) mengasumsikan "materi" = Fisika (listing /materi, beranda,
// Lab Maya, dst), supaya materi mapel lain tidak ikut nyasar ke tampilan
// yang tidak dirancang untuknya. Toleran kalau `mapel` kosong (anggap
// Fisika -- konsisten dengan entri lama yang belum pernah mengisi field
// itu). Entri category selain "materi" (mis. "artikel") dianggap tidak
// relevan di sini, selalu lolos apa adanya.
export function isFisikaMateri(data: { category: string; mapel?: string }): boolean {
  if (data.category !== 'materi') return true;
  return !data.mapel || data.mapel === 'Fisika';
}
