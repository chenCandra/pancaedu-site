import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { env } from 'cloudflare:workers';
import { mulaiAttempt } from '../../../lib/penugasan/db';

// Route ini WAJIB on-demand (bukan prerender) -- mencatat waktu mulai di
// server (bukan dari jam siswa di browser) dan butuh akses D1.
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: { slug?: unknown; nama?: unknown; kelas?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Body tidak valid' }, 400);
  }

  const slug = typeof body.slug === 'string' ? body.slug : '';
  const nama = typeof body.nama === 'string' ? body.nama.trim() : '';
  const kelas = typeof body.kelas === 'string' ? body.kelas.trim() : '';

  if (!slug || !nama || !kelas) {
    return json({ error: 'slug, nama, dan kelas wajib diisi' }, 400);
  }
  if (nama.length > 80 || kelas.length > 20) {
    return json({ error: 'nama/kelas terlalu panjang' }, 400);
  }

  const entry = await getEntry('penugasan', slug);
  if (!entry || entry.data.draft) {
    return json({ error: 'Penugasan tidak ditemukan' }, 404);
  }

  const { attemptId, attemptKe } = await mulaiAttempt(env.DB, { slug, nama, kelas });
  return json({ attemptId, attemptKe });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
