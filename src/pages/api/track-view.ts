import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

// Route ini WAJIB on-demand (bukan prerender) -- nulis ke D1 lewat binding
// `env.DB` yang cuma tersedia saat runtime di Workers (lihat pola yang
// sama di src/pages/api/penugasan/*.ts).
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: { slug?: unknown; category?: unknown };
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 204 });
  }

  const slug = typeof body.slug === 'string' ? body.slug.slice(0, 200) : '';
  const category = body.category === 'materi' || body.category === 'artikel' ? body.category : '';
  if (!slug || !category) return new Response(null, { status: 204 });

  // Fire-and-forget dari sisi klien (sendBeacon) -- gagal nulis D1 di sini
  // TIDAK BOLEH jadi error yang kelihatan ke pengunjung, cukup dilewati.
  try {
    await env.DB.prepare(
      `INSERT INTO page_views (slug, category, views) VALUES (?1, ?2, 1)
       ON CONFLICT(slug) DO UPDATE SET views = views + 1`
    )
      .bind(slug, category)
      .run();
  } catch {
    // diamkan -- lihat catatan di atas
  }

  return new Response(null, { status: 204 });
};
