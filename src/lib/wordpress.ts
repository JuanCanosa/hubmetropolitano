const GQL_URL = 'https://cms.hubcentrometropolitano.com.br/graphql';

async function gql<T>(query: string, variables?: Record<string, unknown>): Promise<T | null> {
  try {
    const res = await fetch(GQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) return null;
    const { data, errors } = await res.json();
    if (errors?.length) return null;
    return data as T;
  } catch {
    return null;
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: { node: { sourceUrl: string; altText: string } };
  categories?: { nodes: WPCategory[] };
  tags?: { nodes: WPTag[] };
  author?: { node: { name: string } };
}

export interface WPCategory {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPTag {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  count: number;
}

// ─── Fragments ────────────────────────────────────────────────────────────────

const POST_CARD_FIELDS = /* GraphQL */ `
  id: databaseId
  slug
  date
  title(format: RENDERED)
  excerpt(format: RENDERED)
  featuredImage { node { sourceUrl altText } }
  categories { nodes { id: databaseId name slug } }
  tags { nodes { id: databaseId name slug } }
`;

const POST_FULL_FIELDS = /* GraphQL */ `
  id: databaseId
  slug
  date
  title(format: RENDERED)
  excerpt(format: RENDERED)
  content(format: RENDERED)
  featuredImage { node { sourceUrl altText } }
  categories { nodes { id: databaseId name slug count } }
  tags { nodes { id: databaseId name slug count } }
  author { node { name } }
`;

// ─── Queries ──────────────────────────────────────────────────────────────────

export async function getPosts(params: {
  perPage?: number;
  categoryId?: number;
  tagId?: number;
} = {}): Promise<WPPost[]> {
  const { perPage = 12, categoryId, tagId } = params;

  const where: string[] = [];
  if (categoryId) where.push(`categoryId: ${categoryId}`);
  if (tagId) where.push(`tagId: ${tagId}`);

  const whereStr = where.length ? `, where: { ${where.join(', ')} }` : '';

  const data = await gql<{ posts: { nodes: WPPost[] } }>(`{
    posts(first: ${perPage}${whereStr}) {
      nodes { ${POST_CARD_FIELDS} }
    }
  }`);
  return data?.posts?.nodes ?? [];
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const data = await gql<{ post: WPPost | null }>(`{
    post(id: "${slug}", idType: SLUG) {
      ${POST_FULL_FIELDS}
    }
  }`);
  return data?.post ?? null;
}

export async function getCategories(): Promise<WPCategory[]> {
  const data = await gql<{ categories: { nodes: WPCategory[] } }>(`{
    categories(first: 100, where: { hideEmpty: true }) {
      nodes { id: databaseId name slug count }
    }
  }`);
  return data?.categories?.nodes ?? [];
}

export async function getCategory(slug: string): Promise<WPCategory | null> {
  const data = await gql<{ category: WPCategory | null }>(`{
    category(id: "${slug}", idType: SLUG) {
      id: databaseId name slug count
    }
  }`);
  return data?.category ?? null;
}

export async function getTags(): Promise<WPTag[]> {
  const data = await gql<{ tags: { nodes: WPTag[] } }>(`{
    tags(first: 100, where: { hideEmpty: true }) {
      nodes { id: databaseId name slug count }
    }
  }`);
  return data?.tags?.nodes ?? [];
}

export async function getTag(slug: string): Promise<WPTag | null> {
  const data = await gql<{ tag: WPTag | null }>(`{
    tag(id: "${slug}", idType: SLUG) {
      id: databaseId name slug count
    }
  }`);
  return data?.tag ?? null;
}

export async function searchPosts(query: string, perPage = 12): Promise<WPPost[]> {
  const escaped = query.replace(/"/g, '\\"');
  const data = await gql<{ posts: { nodes: WPPost[] } }>(`{
    posts(first: ${perPage}, where: { search: "${escaped}" }) {
      nodes { ${POST_CARD_FIELDS} }
    }
  }`);
  return data?.posts?.nodes ?? [];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

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
