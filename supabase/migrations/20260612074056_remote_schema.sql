drop extension if exists "pg_net";

grant delete on table "public"."blog_stars" to "anon";

grant insert on table "public"."blog_stars" to "anon";

grant select on table "public"."blog_stars" to "anon";

grant update on table "public"."blog_stars" to "anon";

grant delete on table "public"."blog_stars" to "authenticated";

grant insert on table "public"."blog_stars" to "authenticated";

grant select on table "public"."blog_stars" to "authenticated";

grant update on table "public"."blog_stars" to "authenticated";

grant delete on table "public"."blog_stars" to "service_role";

grant insert on table "public"."blog_stars" to "service_role";

grant select on table "public"."blog_stars" to "service_role";

grant update on table "public"."blog_stars" to "service_role";


