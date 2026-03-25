-- ============================================================
-- HUBMETROPOLITANO — Schema Inicial
-- Execute este arquivo no SQL Editor do Supabase
-- ============================================================

-- ── Extensões ──────────────────────────────────────────────
create extension if not exists "pgcrypto";

-- ── Profiles ───────────────────────────────────────────────
-- Estende auth.users com dados de perfil público
create table if not exists public.profiles (
  id            uuid        primary key references auth.users(id) on delete cascade,
  email         text        not null,
  full_name     text,
  avatar_url    text,
  plan_type     text        not null default 'free'
                            check (plan_type in ('free', 'premium')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Trigger: cria profile automaticamente ao cadastrar usuário
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Trigger: atualiza updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

-- ── Categories ─────────────────────────────────────────────
create table if not exists public.categories (
  id         serial      primary key,
  name       text        not null,
  slug       text        not null unique,
  parent_id  int         references public.categories(id) on delete set null,
  icon       text,
  cover_url  text,
  sort_order int         not null default 0
);

-- Categorias padrão
insert into public.categories (name, slug, icon) values
  ('Gastronomia',       'gastronomia',            '🍽️'),
  ('Saúde & Bem-Estar', 'saude',                  '🏥'),
  ('Beleza & Estética', 'beleza',                 '✨'),
  ('Esporte & Lazer',   'esporte',                '🏋️'),
  ('Profissionais B2B', 'servicos-profissionais', '🏛️'),
  ('Técnicos & Casa',   'servicos-tecnicos',      '🔧'),
  ('Agências Digitais', 'digital',                '💻')
on conflict (slug) do nothing;

-- ── Locations ──────────────────────────────────────────────
create table if not exists public.locations (
  id    serial primary key,
  name  text   not null,
  type  text   check (type in ('condominium', 'commercial_building', 'street', 'other'))
               default 'other'
);

-- Empreendimentos padrão da Barra da Tijuca
insert into public.locations (name, type) values
  ('Cidade Jardim',      'condominium'),
  ('Rio2',               'commercial_building'),
  ('Ilha Pura',          'condominium'),
  ('Union Square',       'commercial_building'),
  ('Worldwide Offices',  'commercial_building'),
  ('CEO',                'commercial_building'),
  ('Metropolitan',       'commercial_building'),
  ('Barra Shopping',     'commercial_building'),
  ('Downtown',           'commercial_building')
on conflict do nothing;

-- ── Businesses ─────────────────────────────────────────────
create table if not exists public.businesses (
  id            uuid        primary key default gen_random_uuid(),
  owner_id      uuid        not null references auth.users(id) on delete cascade,
  title         text        not null,
  slug          text        not null unique,
  slogan        text,
  description   text,
  category_id   int         references public.categories(id) on delete set null,
  location_id   int         references public.locations(id) on delete set null,
  cover_url     text,
  logo_url      text,
  images        text[]      default '{}',
  whatsapp      text,
  website       text,
  phone         text,
  email         text,
  address       text,
  features_json jsonb       not null default '{}',
  plan_type     text        not null default 'free'
                            check (plan_type in ('free', 'premium')),
  is_verified   boolean     not null default false,
  is_active     boolean     not null default true,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create trigger businesses_updated_at
  before update on public.businesses
  for each row execute procedure public.set_updated_at();

create index if not exists businesses_owner_id_idx    on public.businesses(owner_id);
create index if not exists businesses_category_id_idx on public.businesses(category_id);
create index if not exists businesses_is_active_idx   on public.businesses(is_active);

-- ── Reviews ────────────────────────────────────────────────
create table if not exists public.reviews (
  id           uuid        primary key default gen_random_uuid(),
  business_id  uuid        not null references public.businesses(id) on delete cascade,
  user_id      uuid        not null references auth.users(id) on delete cascade,
  rating       int         not null check (rating between 1 and 5),
  comment      text,
  created_at   timestamptz not null default now(),
  -- Um usuário pode avaliar o mesmo negócio apenas uma vez
  unique (business_id, user_id)
);

create index if not exists reviews_business_id_idx on public.reviews(business_id);

-- View: média de avaliação por negócio
create or replace view public.business_ratings as
  select
    business_id,
    round(avg(rating)::numeric, 1) as avg_rating,
    count(*)                        as total_reviews
  from public.reviews
  group by business_id;

-- ── Favorites ──────────────────────────────────────────────
create table if not exists public.favorites (
  user_id      uuid        not null references auth.users(id) on delete cascade,
  business_id  uuid        not null references public.businesses(id) on delete cascade,
  created_at   timestamptz not null default now(),
  primary key (user_id, business_id)
);

create index if not exists favorites_user_id_idx on public.favorites(user_id);

-- ── Row Level Security ─────────────────────────────────────

-- profiles
alter table public.profiles enable row level security;

create policy "Usuários podem ler seu próprio perfil"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Usuários podem atualizar seu próprio perfil"
  on public.profiles for update
  using (auth.uid() = id);

-- categories & locations — leitura pública
alter table public.categories enable row level security;
create policy "Categorias são públicas"
  on public.categories for select
  using (true);

alter table public.locations enable row level security;
create policy "Localizações são públicas"
  on public.locations for select
  using (true);

-- businesses
alter table public.businesses enable row level security;

create policy "Negócios ativos são públicos"
  on public.businesses for select
  using (is_active = true);

create policy "Dono vê todos os seus negócios"
  on public.businesses for select
  using (auth.uid() = owner_id);

create policy "Usuário autenticado pode criar negócio"
  on public.businesses for insert
  with check (auth.uid() = owner_id);

create policy "Apenas o dono pode atualizar"
  on public.businesses for update
  using (auth.uid() = owner_id);

create policy "Apenas o dono pode deletar"
  on public.businesses for delete
  using (auth.uid() = owner_id);

-- reviews
alter table public.reviews enable row level security;

create policy "Avaliações são públicas"
  on public.reviews for select
  using (true);

create policy "Usuário autenticado pode avaliar"
  on public.reviews for insert
  with check (auth.uid() = user_id);

create policy "Apenas o autor pode deletar avaliação"
  on public.reviews for delete
  using (auth.uid() = user_id);

-- favorites
alter table public.favorites enable row level security;

create policy "Usuário vê apenas seus favoritos"
  on public.favorites for select
  using (auth.uid() = user_id);

create policy "Usuário pode adicionar favorito"
  on public.favorites for insert
  with check (auth.uid() = user_id);

create policy "Usuário pode remover favorito"
  on public.favorites for delete
  using (auth.uid() = user_id);
