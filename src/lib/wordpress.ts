const WP_API = 'https://cms.hubcentrometropolitano.com.br/wp-json/wp/v2';

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>>;
    author?: Array<{ name: string }>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export async function getPosts(params: {
  per_page?: number;
  page?: number;
  categories?: number;
  tags?: number;
  search?: string;
} = {}): Promise<WPPost[]> {
  try {
    const query = new URLSearchParams({ _embed: '1', per_page: String(params.per_page ?? 12), page: String(params.page ?? 1) });
    if (params.categories) query.set('categories', String(params.categories));
    if (params.tags) query.set('tags', String(params.tags));
    if (params.search) query.set('search', params.search);
    const res = await fetch(`${WP_API}/posts?${query}`);
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API}/posts?slug=${slug}&_embed=1`);
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(`${WP_API}/categories?per_page=100&hide_empty=true`);
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getTags(): Promise<WPTag[]> {
  try {
    const res = await fetch(`${WP_API}/tags?per_page=100&hide_empty=true`);
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}
