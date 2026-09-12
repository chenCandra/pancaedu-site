import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { ambilSesi } from '../../../../lib/adminPanca/auth';
import { hapusAttemptKelas } from '../../../../lib/penugasan/db';

export const prerender = false;

// Hapus MASSAL semua attempt satu (Penugasan, Kelas) sekaligus -- dipakai
// buat bersihkan spam banyak orang (mis. kelas "Umum / Lainnya"
// kebanjiran iseng), bukan cuma satu baris. `sesi` opsional (angka /
// "tanpa-sesi") -- sengaja SAMA PERSIS dengan filter yang lagi dilihat
// guru di halaman Laporan, supaya "hapus semua" tidak sengaja kena data
// sesi lain yang masih valid.
export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const admin = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  const data = await request.formData();
  const slug = String(data.get('slug') ?? '');
  const kelas = String(data.get('kelas') ?? '');
  const sesiParam = String(data.get('sesi') ?? '');
  const kembaliKe = String(data.get('kembaliKe') ?? '/admin-panca/laporan');

  if (!admin) return new Response('Belum login.', { status: 401 });
  if (!slug || !kelas) return new Response('slug dan kelas wajib diisi.', { status: 400 });

  const sesiFilter: number | 'tanpa-sesi' | undefined =
    sesiParam === 'tanpa-sesi' ? 'tanpa-sesi' : sesiParam && /^\d+$/.test(sesiParam) ? Number(sesiParam) : undefined;

  await hapusAttemptKelas(env.DB, { slug, kelas, sesiFilter });
  return redirect(kembaliKe);
};
