/**
 * Field "Video YouTube" di CMS selalu diminta diisi ID SAJA (mis.
 * "dQw4w9WgXcQ"), tapi orang wajar aja nempel LINK LENGKAP karena itu
 * yang biasa di-copy dari browser/HP (youtu.be/ID, youtube.com/watch?v=ID,
 * dengan ekor ?si=... dari tombol share, dst). Kalau dibiarkan mentah,
 * hasilnya link ganda yang rusak (youtube.com/watch?v=https://youtu.be/...).
 *
 * Fungsi ini nerima APA PUN yang mungkin diketik/ditempel orang -- ID
 * polos atau link lengkap dalam berbagai bentuk -- dan selalu balikin ID
 * bersihnya. Kalau polanya beneran tidak dikenali, dikembalikan apa
 * adanya (best effort, bukan dibikin makin rusak).
 */
export function extractYoutubeId(input: string): string {
  const trimmed = input.trim();

  // Bukan berbentuk URL sama sekali (tidak ada :// atau youtu) -- anggap
  // ini sudah ID polos, jangan diapa-apakan.
  if (!/^https?:\/\//i.test(trimmed) && !trimmed.includes('youtu')) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);
    const host = url.hostname.replace(/^www\.|^m\./, '');

    if (host === 'youtu.be') {
      // youtu.be/ID atau youtu.be/ID?si=...
      return url.pathname.split('/').filter(Boolean)[0] ?? trimmed;
    }

    if (host === 'youtube.com') {
      // youtube.com/watch?v=ID
      const v = url.searchParams.get('v');
      if (v) return v;

      // youtube.com/embed/ID atau youtube.com/shorts/ID
      const parts = url.pathname.split('/').filter(Boolean);
      if (parts[0] === 'embed' || parts[0] === 'shorts') {
        return parts[1] ?? trimmed;
      }
    }
  } catch {
    // Bukan URL valid -- lanjut ke fallback di bawah, jangan dilempar error.
  }

  return trimmed;
}
