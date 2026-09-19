import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { env } from 'cloudflare:workers';
import { ambilLeaderboard } from '../../../../lib/penugasan/db';
import { ambilSesi } from '../../../../lib/adminPanca/auth';
import { pinValid } from '../../../../lib/adminPanca/db';

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
    // Dua sumber PIN leaderboard yang sah, dicek dalam urutan ini:
    // (1) PIN dinamis di D1 (scope 'leaderboard:<slug>', dibuat guru lewat
    //     /admin-panca/sesi -- bisa diganti/ditambah kapan saja tanpa
    //     commit+deploy, dan bisa lebih dari satu aktif sekaligus).
    // (2) PIN statis lama di `entry.data.pinHash` (frontmatter konten) --
    //     tetap didukung untuk semua Penugasan yang belum pernah dibuatkan
    //     PIN lewat D1, supaya tidak ada yang mendadak terkunci.
    const pinDariD1 = pin ? await pinValid(env.DB, `leaderboard:${slug}`, pin) : false;
    if (!pinDariD1) {
      if (!pin || pin !== entry.data.pinHash) {
        return json({ error: 'PIN salah' }, 403);
      }
      // PIN statis yang benar SEKALIPUN ditolak kalau sudah lewat tanggal
      // berlakunya -- kebijakan maksimal 6 bulan per PIN (lihat komentar di
      // src/content.config.ts). PIN dinamis dari D1 di atas sudah punya
      // pengecekan kedaluwarsanya sendiri di dalam pinValid(), jadi tidak
      // perlu dicek ulang di sini. Guru yang login lewat sesi Admin Panca
      // TIDAK terikat batas ini sama sekali -- itu murni kebijakan buat PIN
      // yang dibagikan ke murid, bukan buat akses guru sendiri.
      if (new Date() > entry.data.pinBerlakuHingga) {
        return json({ error: 'PIN sudah kedaluwarsa. Minta PIN baru ke guru.' }, 403);
      }
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
