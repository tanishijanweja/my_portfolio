revoke update on table "public"."blog_stars" from "anon";
revoke update on table "public"."blog_stars" from "authenticated";
revoke update on table "public"."blog_stars" from "service_role";

revoke delete on table "public"."blog_stars" from "anon";

drop policy if exists "Public can delete stars" on blog_stars;
