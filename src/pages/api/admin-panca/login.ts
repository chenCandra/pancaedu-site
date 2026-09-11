import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { verifyPassword, buatSessionCookie, SESSION_COOKIE_NAME, SESSION_TTL_DETIK } from '../../../lib/adminPanca/auth';
import { cariUserByUsername, catatLoginSukses } from '../../../lib/adminPanca/db';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  const body = (await request.json().catch(() => null)) as { username?: string; password?: string } | null;
  const username = body?.username?.trim() ?? '';
  const password = body?.password ?? '';

  if (!username || !password) return json({ error: 'Username dan password wajib diisi.' }, 400);

  const user = await cariUserByUsername(env.DB, username);
  // Tetap panggil verifyPassword walau user tidak ada (bandingkan ke hash
  // dummy) supaya waktu respons username-ada vs username-tidak-ada mirip --
  // menutup celah timing buat menebak username yang valid.
  const hashUntukCek = user?.password_hash ?? '210000:00000000000000000000000000000000:0';
  const cocok = await verifyPassword(password, hashUntukCek);

  if (!user || !cocok) return json({ error: 'Username atau password salah.' }, 401);

  await catatLoginSukses(env.DB, user.id);
  const cookieValue = await buatSessionCookie({ id: user.id, username: user.username }, env.ADMIN_SESSION_SECRET);

  cookies.set(SESSION_COOKIE_NAME, cookieValue, {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: SESSION_TTL_DETIK,
  });

  return json({ ok: true });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
