import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { ambilSesi } from '../../../../lib/adminPanca/auth';
import { hapusAttemptSiswa } from '../../../../lib/penugasan/db';

export const prerender = false;

// POST + redirect (bukan JSON) -- form HTML polos dari halaman Laporan,
// biar bisa hapus tanpa JS pun tetap jalan, pola sama seperti "Cabut" di
// /admin-panca/pin & /admin-panca/sesi.
export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const admin = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  const data = await request.formData();
  const slug = String(data.get('slug') ?? '');
  const kelas = String(data.get('kelas') ?? '');
  const nama = String(data.get('nama') ?? '');
  const kembaliKe = String(data.get('kembaliKe') ?? '/admin-panca/laporan');

  if (!admin) return new Response('Belum login.', { status: 401 });
  if (!slug || !kelas || !nama) return new Response('slug, kelas, nama wajib diisi.', { status: 400 });

  await hapusAttemptSiswa(env.DB, { slug, kelas, nama });
  return redirect(kembaliKe);
};
