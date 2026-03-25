import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase';

export const POST: APIRoute = async (context) => {
  const supabase = createSupabaseServerClient(context as any);
  await supabase.auth.signOut();
  return context.redirect('/');
};
