import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getEntry } from 'astro:content';
import { ambilSesi } from '../../../lib/adminPanca/auth';
import { daftarSesi, buatSesi } from '../../../lib/penugasan/sesi';

export const prerender = false;

export const GET: APIRoute = async ({ url, cookies }) => {
  const admin = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  if (!admin) return json({ error: 'Belum login.' }, 401);

  const slug = url.searchParams.get('slug') ?? '';
  if (!slug) return json({ error: 'slug wajib diisi' }, 400);

  const sesi = await daftarSesi(env.DB, slug);
  return json({ sesi });
};

export const POST: APIRoute = async ({ request, cookies }) => {
  const admin = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  if (!admin) return json({ error: 'Belum login.' }, 401);

  const body = (await request.json().catch(() => null)) as { slug?: string; label?: string; pin?: string } | null;
  const slug = body?.slug?.trim() ?? '';
  const label = body?.label?.trim() ?? '';
  const pin = body?.pin?.trim() ?? '';

  if (!slug || !label || !pin) return json({ error: 'Penugasan, label, dan kode sesi wajib diisi.' }, 400);
  if (pin.length > 60) return json({ error: 'Kode sesi terlalu panjang (maksimal 60 karakter).' }, 400);

  const entry = await getEntry('penugasan', slug);
  if (!entry) return json({ error: 'Penugasan tidak ditemukan.' }, 404);

  await buatSesi(env.DB, { slug, label, pin, createdBy: admin.uid });
  return json({ ok: true });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
