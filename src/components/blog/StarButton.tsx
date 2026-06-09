"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Star } from "lucide-react";

function getVisitorId() {
  let id = localStorage.getItem("visitor-id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("visitor-id", id);
  }
  return id;
}

export function StarButton({ slug }: { slug: string }) {
  const [count, setCount] = useState(0);
  const [starred, setStarred] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, [slug]);

  async function load() {
    const visitorId = getVisitorId();
    const [{ count }, { data }] = await Promise.all([
      supabase
        .from("blog_stars")
        .select("*", { count: "exact", head: true })
        .eq("post_slug", slug),
      supabase
        .from("blog_stars")
        .select("id")
        .eq("post_slug", slug)
        .eq("visitor_id", visitorId)
        .maybeSingle(),
    ]);
    setCount(count ?? 0);
    setStarred(Boolean(data));
    setLoading(false);
  }

  async function handleStar() {
    const visitorId = getVisitorId();

    if (starred) {
      const { error } = await supabase
        .from("blog_stars")
        .delete()
        .eq("post_slug", slug)
        .eq("visitor_id", visitorId);

      if (!error) {
        setStarred(false);
        setCount((c) => Math.max(0, c - 1));
      }

      return;
    }

    const { error } = await supabase.from("blog_stars").insert({
      post_slug: slug,
      visitor_id: visitorId,
    });

    if (!error) {
      setStarred(true);
      setCount((c) => c + 1);
    }
  }

  if (loading) {
    return (
      <div className="inline-flex items-center gap-1.5 text-sm text-black/30 dark:text-white/30">
        <span className="text-[15px] leading-none">☆</span>
        <span className="w-6 h-2.5 rounded bg-black/10 dark:bg-white/10 animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={handleStar}
      className={[
        "inline-flex items-center gap-1.5 text-sm font-medium bg-transparent border-none outline-none transition-colors duration-150 disabled:cursor-default cursor-pointer",
        starred
          ? "text-pink-500"
          : "text-black/40 dark:text-white/40 hover:text-pink-400",
      ].join(" ")}
    >
      <Star
        className={`h-5 w-5 transition-all ${
          starred ? "fill-yellow-400 text-yellow-400 animate-[pop_0.3s_ease]" : ""
        }`}
      />
      <span className="tabular-nums">{count}</span>
      <span>{count === 1 ? "Star" : "Stars"}</span>
    </button>
  );
}
