import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { env } from 'cloudflare:workers';
import { nilaiJawaban } from '../../../lib/penugasan/grading';
import { simpanHasil } from '../../../lib/penugasan/db';
import type { JawabanSoal } from '../../../lib/penugasan/types';

// WAJIB on-demand: baca kunci jawaban dari content collection di server
// (TIDAK PERNAH dikirim ke browser) dan tulis hasil ke D1.
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: { attemptId?: unknown; slug?: unknown; jawaban?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Body tidak valid' }, 400);
  }

  const attemptId = typeof body.attemptId === 'number' ? body.attemptId : NaN;
  const slug = typeof body.slug === 'string' ? body.slug : '';
  const jawabanList: JawabanSoal[] = Array.isArray(body.jawaban) ? body.jawaban : [];

  if (!slug || !Number.isInteger(attemptId)) {
    return json({ error: 'attemptId dan slug wajib diisi' }, 400);
  }

  const entry = await getEntry('penugasan', slug);
  if (!entry || entry.data.draft) {
    return json({ error: 'Penugasan tidak ditemukan' }, 404);
  }

  const jawabanPerSoal = new Map(jawabanList.map((j) => [j.soalId, j]));
  const jawabanMentah = Object.fromEntries(jawabanList.map((j) => [j.soalId, j]));

  const hasil = entry.data.soal.map((soal) => nilaiJawaban(soal, jawabanPerSoal.get(soal.id)));
  const { skor, skorMaks } = await simpanHasil(env.DB, { attemptId, hasil, jawabanMentah });

  // Respons HANYA benar/salah + penjelasan per soal -- tidak pernah kunci
  // jawaban mentahnya (lihat src/lib/penugasan/grading.ts).
  return json({
    skor,
    skorMaks,
    perSoal: hasil.map((h) => ({ soalId: h.soalId, benar: h.benar, penjelasan: h.penjelasan })),
  });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
