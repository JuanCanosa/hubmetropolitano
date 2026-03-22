import type { APIRoute } from 'astro';
import { getAllPostSlugsAndDates, getCategories, getTags } from '../lib/wordpress';

const SITE = 'https://hubcentrometropolitano.com.br';

function url(path: string, lastmod?: string) {
  const loc = `${SITE}${path}`;
  return `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod.slice(0, 10)}</lastmod>` : ''}\n  </url>`;
}

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().slice(0, 10);

  // Static pages
  const staticUrls = [
    url('/', today),
    url('/blog', today),
    url('/servicos', today),
  ];

  // Blog posts
  const [posts, categories, tags] = await Promise.all([
    getAllPostSlugsAndDates(),
    getCategories(),
    getTags(),
  ]);

  const postUrls   = posts.map(p => url(`/blog/${p.slug}`, p.date));
  const catUrls    = categories.map(c => url(`/blog/categoria/${c.slug}`));
  const tagUrls    = tags.map(t => url(`/blog/tag/${t.slug}`));

  const allUrls = [...staticUrls, ...postUrls, ...catUrls, ...tagUrls].join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
