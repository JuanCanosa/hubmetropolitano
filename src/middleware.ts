import { defineMiddleware } from 'astro:middleware';
import { createServerClient, parseCookieHeader } from '@supabase/ssr';

// Rotas que exigem autenticação
const PROTECTED_PATHS = ['/dashboard'];

export const onRequest = defineMiddleware(async ({ request, cookies, locals, redirect }, next) => {
  const url = new URL(request.url);

  // Cria o client Supabase com acesso aos cookies da requisição
  const supabase = createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get('Cookie') ?? '');
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Recupera o usuário autenticado (valida o JWT server-side)
  const { data: { user } } = await supabase.auth.getUser();

  // Injeta user e supabase client em Astro.locals para uso nas páginas
  locals.user = user ?? null;
  locals.supabase = supabase;

  // Protege rotas que exigem autenticação
  const isProtected = PROTECTED_PATHS.some(path => url.pathname.startsWith(path));
  if (isProtected && !user) {
    return redirect(`/login?next=${encodeURIComponent(url.pathname)}`);
  }

  // Redireciona usuário logado que tenta acessar login/register
  if (user && (url.pathname === '/login' || url.pathname === '/register')) {
    return redirect('/dashboard');
  }

  return next();
});
