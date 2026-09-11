import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { env } from 'cloudflare:workers';
import { ambilLeaderboard } from '../../../../lib/penugasan/db';
import { ambilSesi } from '../../../../lib/adminPanca/auth';

// WAJIB on-demand: leaderboard di-gate PIN ATAU sesi Admin Panca, dan
// pengecekan PIN harus dicocokkan ulang DI SERVER (bukan cuma percaya hash
// yang sudah dicek client-side) -- menutup celah "curl API ini langsung,
// skip halaman/PIN". Sesi Admin Panca diperiksa DULUAN -- guru yang sudah
// login tidak perlu ingat PIN leaderboard tiap Penugasan satu-satu lagi
// (beda PIN per Penugasan, gampang lupa mana punya siapa). PIN-nya sendiri
// TETAP berfungsi seperti biasa -- itu yang dibagikan ke MURID supaya
// mereka juga bisa lihat papan peringkat, jadi jangan dihapus/diganti.
export const prerender = false;

export const GET: APIRoute = async ({ params, url, cookies }) => {
  const slug = params.slug;
  const pin = url.searchParams.get('pin') ?? '';
  const sesiParam = url.searchParams.get('sesi') ?? '';

  if (!slug) return json({ error: 'slug wajib diisi' }, 400);

  const entry = await getEntry('penugasan', slug);
  if (!entry) return json({ error: 'Penugasan tidak ditemukan' }, 404);

  const sesi = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);

  if (!sesi) {
    if (!pin || pin !== entry.data.pinHash) {
      return json({ error: 'PIN salah' }, 403);
    }
    // PIN yang benar SEKALIPUN ditolak kalau sudah lewat tanggal berlakunya
    // -- kebijakan maksimal 6 bulan per PIN (lihat komentar di
    // src/content.config.ts & halaman /penugasan/pin-generator). Guru yang
    // login lewat sesi Admin Panca TIDAK terikat batas ini -- itu murni
    // kebijakan buat PIN yang dibagikan ke murid, bukan buat akses guru
    // sendiri.
    if (new Date() > entry.data.pinBerlakuHingga) {
      return json({ error: 'PIN sudah kedaluwarsa. Minta PIN baru ke guru.' }, 403);
    }
  }

  // Filter Sesi Penugasan (BEDA dari PIN leaderboard di atas -- itu gerbang
  // akses, ini cuma filter TAMPILAN data begitu sudah lolos gerbang). Lihat
  // komentar `ambilLeaderboard` di src/lib/penugasan/db.ts.
  const sesiFilter: number | 'tanpa-sesi' | undefined =
    sesiParam === 'tanpa-sesi' ? 'tanpa-sesi' : sesiParam && /^\d+$/.test(sesiParam) ? Number(sesiParam) : undefined;

  const rows = await ambilLeaderboard(env.DB, slug, sesiFilter);
  return json({ rows });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
