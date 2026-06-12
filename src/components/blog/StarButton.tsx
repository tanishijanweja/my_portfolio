"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { getVisitorId } from "@/lib/visitor";

export function StarButton({ slug }: { slug: string }) {
  const [count, setCount] = useState(0);
  const [starred, setStarred] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    load();
  }, [slug]);

  async function load() {
    try {
      const visitorId = getVisitorId();
      const res = await fetch(`/api/stars/${slug}`, {
        headers: { "x-visitor-id": visitorId },
      });
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setCount(data.count);
      setStarred(data.starred);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function handleStar() {
    const visitorId = getVisitorId();

    if (starred) {
      const res = await fetch(`/api/stars/${slug}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitorId }),
      });

      if (res.ok) {
        setStarred(false);
        setCount((c) => Math.max(0, c - 1));
      }

      return;
    }

    const res = await fetch(`/api/stars/${slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visitorId }),
    });

    if (res.ok) {
      setStarred(true);
      setCount((c) => c + 1);
    }
  }

  if (loading) {
    return (
      <div className="inline-flex items-center gap-1.5 text-sm text-black/30 dark:text-white/30">
        <Star className="h-5 w-5" />
        <span className="w-6 h-2.5 rounded bg-black/10 dark:bg-white/10 animate-pulse" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="inline-flex items-center gap-1.5 text-sm text-red-400">
        <Star className="h-5 w-5" />
        <span>Failed to load</span>
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
