// Modul kecil dipakai bareng oleh /cari dan /tersimpan — baca data index
// (lihat komponen PostIndexData.astro), simpan/baca bookmark di localStorage,
// dan render satu baris hasil (dipakai di kedua halaman biar tampilannya
// konsisten & nggak dobel kode).

export interface IndexedPost {
  id: string;
  title: string;
  description: string;
  category: 'artikel' | 'materi';
  topik: string | null;
  mapel: string | null;
  kelas: string | null;
  pubDate: string;
  url: string;
}

export function readPostIndex(): IndexedPost[] {
  const el = document.getElementById('post-index-data');
  if (!el || !el.textContent) return [];
  try {
    return JSON.parse(el.textContent) as IndexedPost[];
  } catch {
    return [];
  }
}

const BOOKMARK_KEY = 'pancaedu-bookmarks';

export function getBookmarkIds(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARK_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function setBookmarkIds(ids: string[]) {
  try {
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(ids));
  } catch {
    // localStorage nggak tersedia (mode private/disabled) — abaikan diam-diam,
    // tombol bookmark cuma nggak nyimpen apa-apa, nggak sampai error ke user.
  }
}

export function isBookmarked(id: string): boolean {
  return getBookmarkIds().includes(id);
}

/** @returns true kalau abis di-toggle jadi tersimpan, false kalau dihapus */
export function toggleBookmark(id: string): boolean {
  const ids = getBookmarkIds();
  const idx = ids.indexOf(id);
  if (idx === -1) {
    ids.push(id);
    setBookmarkIds(ids);
    return true;
  }
  ids.splice(idx, 1);
  setBookmarkIds(ids);
  return false;
}

export function removeBookmark(id: string) {
  setBookmarkIds(getBookmarkIds().filter((x) => x !== id));
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function escapeHtml(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function renderResultItem(post: IndexedPost, options: { removable?: boolean } = {}): string {
  const badgeLabel =
    post.category === 'materi' ? `Materi${post.kelas ? ` · Kelas ${post.kelas}` : ''}` : (post.topik ?? 'Artikel');
  const badgeClass = post.category === 'materi' ? 'badge-gold' : '';
  const removeBtn = options.removable
    ? `<button type="button" class="result-remove" data-remove-bookmark="${post.id}" aria-label="Hapus dari tersimpan">✕</button>`
    : '';

  return `
    <div class="result-item-wrap card">
      ${removeBtn}
      <a href="${post.url}" class="result-item-link">
        <div class="result-meta">
          <span class="badge ${badgeClass}">${escapeHtml(badgeLabel)}</span>
          <time>${formatDate(post.pubDate)}</time>
        </div>
        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.description)}</p>
      </a>
    </div>
  `;
}
