import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getCollection } from 'astro:content';
import { ambilSesi } from '../../../lib/adminPanca/auth';
import { ambilRekapSemuaPenugasan } from '../../../lib/adminPanca/db';

export const prerender = false;

export const GET: APIRoute = async ({ cookies }) => {
  const sesi = await ambilSesi(cookies, env.ADMIN_SESSION_SECRET);
  if (!sesi) return json({ error: 'Belum login.' }, 401);

  const [baris, semuaPenugasan] = await Promise.all([ambilRekapSemuaPenugasan(env.DB), getCollection('penugasan')]);

  const judulPerSlug = new Map(semuaPenugasan.map((p) => [p.id, { judul: p.data.judul, mapel: p.data.mapel }]));

  const rows = baris.map((b) => ({
    ...b,
    judul: judulPerSlug.get(b.penugasanSlug)?.judul ?? b.penugasanSlug,
    mapel: judulPerSlug.get(b.penugasanSlug)?.mapel ?? '-',
  }));

  return json({ rows });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
