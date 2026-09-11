import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { ambilSesi } from '../../../../lib/adminPanca/auth';
import { cabutSesi } from '../../../../lib/penugasan/sesi';

export const prerender = false;

// POST, bukan DELETE -- pola sama seperti api/admin-panca/pins/[id].ts,
// form HTML polos tanpa JS tetap bisa cabut sesi.
export const POST: APIRoute = async ({ params, url, cookies, redirect }) => {
  const admin = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  if (!admin) return json({ error: 'Belum login.' }, 401);

  const id = Number(params.id);
  if (!Number.isInteger(id)) return json({ error: 'ID sesi tidak valid.' }, 400);

  await cabutSesi(env.DB, id);
  const slug = url.searchParams.get('slug') ?? '';
  return redirect(`/admin-panca/sesi?slug=${encodeURIComponent(slug)}`);
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
