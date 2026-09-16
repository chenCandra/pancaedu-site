// Slug URL kelas ("x"/"xi"/"xii") terpisah dari nilai `kelas` di content
// ("X"/"XI"/"XII") -- content pakai huruf besar (konsisten sama tampilan
// badge "KELAS X" dkk), URL pakai huruf kecil (konvensi path situs ini).
export type Kelas = 'X' | 'XI' | 'XII';

const SLUG_BY_KELAS: Record<Kelas, string> = { X: 'x', XI: 'xi', XII: 'xii' };
const KELAS_BY_SLUG: Record<string, Kelas> = { x: 'X', xi: 'XI', xii: 'XII' };

export function kelasToSlug(kelas: Kelas): string {
  return SLUG_BY_KELAS[kelas];
}

export function kelasFromSlug(slug: string): Kelas | undefined {
  return KELAS_BY_SLUG[slug];
}
