create table if not exists blog_stars (
  id uuid primary key default gen_random_uuid(),
  post_slug text not null,
  visitor_id text not null,
  created_at timestamptz default now(),

  unique(post_slug, visitor_id)
);

alter table blog_stars enable row level security;

create policy "Public can read stars"
on blog_stars
for select
using (true);

create policy "Public can insert stars"
on blog_stars
for insert
with check (true);

create policy "Public can delete stars"
on blog_stars
for delete
using (true);