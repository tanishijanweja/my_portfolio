create table if not exists model_suggestions (
  id uuid primary key default gen_random_uuid(),
  model_name text not null,
  where_use text,
  visitor_id text not null,
  created_at timestamptz default now()
);

alter table model_suggestions enable row level security;

create policy "Public can read suggestions"
on model_suggestions
for select
using (true);

create policy "Public can insert suggestions"
on model_suggestions
for insert
with check (true);
