import { createServerClient, parseCookieHeader } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import type { AstroGlobal } from 'astro';

const supabaseUrl  = import.meta.env.PUBLIC_SUPABASE_URL  ?? (typeof process !== 'undefined' ? process.env.PUBLIC_SUPABASE_URL  : '');
const supabaseAnon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? (typeof process !== 'undefined' ? process.env.PUBLIC_SUPABASE_ANON_KEY : '');

/**
 * Client-side Supabase client.
 * Use in <script> tags or browser-only code.
 * WARNING: Only has anon-level permissions — use RLS to protect data.
 */
export const supabaseBrowser = createClient(supabaseUrl, supabaseAnon);

/**
 * Server-side Supabase client with cookie-based session handling.
 * Use in .astro frontmatter, middleware, and API routes.
 * Automatically reads/writes auth cookies so sessions persist across requests.
 */
export function createSupabaseServerClient(Astro: AstroGlobal) {
  return createServerClient(supabaseUrl, supabaseAnon, {
    cookies: {
      getAll() {
        return parseCookieHeader(Astro.request.headers.get('Cookie') ?? '');
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          Astro.cookies.set(name, value, options);
        });
      },
    },
  });
}

/**
 * Service-role client — bypasses RLS.
 * Use ONLY in server-side code (API routes, migrations).
 * NEVER expose to the browser.
 */
export function createServiceClient() {
  return createClient(
    supabaseUrl,
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } }
  );
}
