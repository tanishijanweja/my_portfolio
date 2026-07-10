"use client";

import { useState, FormEvent } from "react";
import { getVisitorId } from "@/lib/visitor";

export function SuggestionBox() {
  const [modelName, setModelName] = useState("");
  const [whereUse, setWhereUse] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!modelName.trim()) return;

    setStatus("sending");

    try {
      const visitorId = getVisitorId();
      const res = await fetch("/api/model-suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          modelName: modelName.trim(),
          whereUse: whereUse.trim() || undefined,
          visitorId,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("done");
      setModelName("");
      setWhereUse("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-10 p-6 rounded-xl border border-pink-200 dark:border-pink-900 bg-pink-50/50 dark:bg-pink-950/20">
      <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-1">
        got a free ai model suggestion?
      </h3>
      <p className="text-sm text-black/50 dark:text-white/50 mb-4">
        drop the name and where you use it — i'll check it out
      </p>

      {status === "done" ? (
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-green-600 dark:text-green-400 font-medium">
            thanks! i'll look into it :)
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-sm text-pink-500 hover:text-pink-600 font-medium underline underline-offset-2 transition-colors"
          >
            got another suggestion?
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="model name *"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
              required
              disabled={status === "sending"}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="where you use it (opencode / cursor / vs code / etc)"
              value={whereUse}
              onChange={(e) => setWhereUse(e.target.value)}
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 text-black dark:text-white placeholder-black/30 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
              disabled={status === "sending"}
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending" || !modelName.trim()}
            className="px-5 py-2 text-sm font-medium rounded-lg bg-pink-500 text-white hover:bg-pink-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {status === "sending" ? "sending..." : "suggest"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-500">something went wrong. try again?</p>
          )}
        </form>
      )}
    </div>
  );
}
