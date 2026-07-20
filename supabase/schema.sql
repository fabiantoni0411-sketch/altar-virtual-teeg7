-- ============================================================
-- ALTAR VIRTUAL TEEG7 — Schema Supabase
-- ============================================================

create extension if not exists "uuid-ossp";

-- ---------- candles ----------
create type candle_status as enum ('pendente', 'aprovada', 'rejeitada', 'encerrada');
create type candle_tipo as enum ('simples', 'bicolor');

create table if not exists candles (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  cidade text not null,
  estado text not null,
  email text,
  cor text not null,
  orixa text not null,
  tipo_vela candle_tipo not null default 'simples',
  pedido text not null,
  status candle_status not null default 'pendente',
  ip_address text,
  created_at timestamptz not null default now(),
  approved_at timestamptz,
  expires_at timestamptz
);

create index if not exists idx_candles_status on candles(status);
create index if not exists idx_candles_created_at on candles(created_at desc);

-- ---------- site_content ----------
create table if not exists site_content (
  id int primary key default 1,
  welcome_text text not null default 'Seja bem-vindo(a) ao Altar Virtual do Templo Espírita Estrela Guia e Caboclo Sete Pedras do Mar. Aqui você pode acender uma vela virtual e deixar seu pedido de oração.',
  rules_text text not null default 'Não são permitidos pedidos de amarração. Não são permitidos pedidos para causar mal a outras pessoas. Este é um espaço de fé, luz, caridade e oração.',
  footer_text text not null default 'Axé, Luz e Paz para todos os irmãos e irmãs.',
  updated_at timestamptz not null default now(),
  constraint single_row check (id = 1)
);
insert into site_content (id) values (1) on conflict (id) do nothing;

-- ---------- admins ----------
create table if not exists admins (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text not null,
  email text not null unique,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

-- ---------- notification_settings ----------
create table if not exists notification_settings (
  id int primary key default 1,
  email_principal text,
  emails_adicionais text[] default '{}',
  whatsapp_numero text,
  email_ativo boolean not null default true,
  whatsapp_ativo boolean not null default true,
  updated_at timestamptz not null default now(),
  constraint single_row check (id = 1)
);
insert into notification_settings (id, whatsapp_numero) values (1, '5511978384284') on conflict (id) do nothing;

-- ---------- blocked_words ----------
create table if not exists blocked_words (
  id uuid primary key default uuid_generate_v4(),
  palavra text not null unique,
  ativa boolean not null default true,
  created_at timestamptz not null default now()
);

-- ---------- blocked_users ----------
create table if not exists blocked_users (
  id uuid primary key default uuid_generate_v4(),
  nome text,
  email text,
  ip text,
  motivo text not null,
  blocked_at timestamptz not null default now(),
  blocked_by uuid references admins(id)
);
create index if not exists idx_blocked_users_ip on blocked_users(ip);
create index if not exists idx_blocked_users_email on blocked_users(email);

-- ---------- moderation_logs ----------
create table if not exists moderation_logs (
  id uuid primary key default uuid_generate_v4(),
  nome text,
  cidade text,
  estado text,
  pedido text,
  acao text not null,
  motivo text,
  ip_address text,
  created_at timestamptz not null default now()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table candles enable row level security;
alter table site_content enable row level security;
alter table admins enable row level security;
alter table notification_settings enable row level security;
alter table blocked_words enable row level security;
alter table blocked_users enable row level security;
alter table moderation_logs enable row level security;

create policy "public_read_approved_candles"
  on candles for select
  using (status = 'aprovada');

create policy "public_read_site_content"
  on site_content for select
  using (true);

create policy "admins_full_access_candles"
  on candles for all
  using (exists (select 1 from admins where admins.id = auth.uid()))
  with check (exists (select 1 from admins where admins.id = auth.uid()));

create policy "admins_full_access_site_content"
  on site_content for all
  using (exists (select 1 from admins where admins.id = auth.uid()))
  with check (exists (select 1 from admins where admins.id = auth.uid()));

create policy "admins_read_self"
  on admins for select
  using (id = auth.uid());

create policy "admins_full_access_notification_settings"
  on notification_settings for all
  using (exists (select 1 from admins where admins.id = auth.uid()))
  with check (exists (select 1 from admins where admins.id = auth.uid()));

create policy "admins_full_access_blocked_words"
  on blocked_words for all
  using (exists (select 1 from admins where admins.id = auth.uid()))
  with check (exists (select 1 from admins where admins.id = auth.uid()));

create policy "admins_full_access_blocked_users"
  on blocked_users for all
  using (exists (select 1 from admins where admins.id = auth.uid()))
  with check (exists (select 1 from admins where admins.id = auth.uid()));

create policy "admins_full_access_moderation_logs"
  on moderation_logs for all
  using (exists (select 1 from admins where admins.id = auth.uid()))
  with check (exists (select 1 from admins where admins.id = auth.uid()));

-- ============================================================
-- Função utilitária: calcular expires_at automaticamente na aprovação
-- ============================================================
create or replace function set_candle_expiration()
returns trigger as $$
begin
  if new.status = 'aprovada' and old.status is distinct from 'aprovada' then
    new.approved_at := now();
    new.expires_at := now() + interval '7 days';
  end if;
  return new;
end;
$$ language plpgsql;

create trigger trg_set_candle_expiration
before update on candles
for each row execute function set_candle_expiration();
