// Slug URL kelas ("x"/"xi"/"xii"/"tka") terpisah dari nilai `kelas` di
// content ("X"/"XI"/"XII"/"TKA") -- content pakai huruf besar (konsisten
// sama tampilan badge "KELAS X" dkk), URL pakai huruf kecil (konvensi path
// situs ini). "TKA" (Tes Kompetensi Akademik) BUKAN jenjang kelas beneran --
// diperlakukan sebagai nilai ke-4 di enum yang sama supaya bisa numpang
// semua mekanisme Ruang Belajar/Materi/Penugasan yang sudah ada (kartu,
// filter, routing) tanpa bikin sistem paralel baru. Makanya label
// tampilannya BEDA (lihat kelasLabel) -- "Kelas TKA" janggal dibaca.
export type Kelas = 'X' | 'XI' | 'XII' | 'TKA';

const SLUG_BY_KELAS: Record<Kelas, string> = { X: 'x', XI: 'xi', XII: 'xii', TKA: 'tka' };
const KELAS_BY_SLUG: Record<string, Kelas> = { x: 'X', xi: 'XI', xii: 'XII', tka: 'TKA' };
const LABEL_BY_KELAS: Record<Kelas, string> = { X: 'Kelas X', XI: 'Kelas XI', XII: 'Kelas XII', TKA: 'TKA' };

export function kelasToSlug(kelas: Kelas): string {
  return SLUG_BY_KELAS[kelas];
}

export function kelasFromSlug(slug: string): Kelas | undefined {
  return KELAS_BY_SLUG[slug];
}

// Label tampilan -- "Kelas X"/"Kelas XI"/"Kelas XII" seperti sebelumnya,
// tapi "TKA" apa adanya (bukan "Kelas TKA", yang aneh dibaca). Pakai ini di
// SEMUA tempat yang sebelumnya nulis literal "Kelas {kelas}"/"Kelas ${kelas}".
export function kelasLabel(kelas: Kelas): string {
  return LABEL_BY_KELAS[kelas];
}
