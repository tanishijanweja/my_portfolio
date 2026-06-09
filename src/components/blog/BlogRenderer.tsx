import type { BlogBlock, InlineSegment } from "@/data/ConnectingDots";

function renderSegments(segments: InlineSegment[]) {
  return segments.map((seg, i) => {
    if (seg.type === "link") {
      return (
        <a
          key={i}
          href={seg.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-pink-400 text-pink-400 hover:opacity-80 transition-opacity"
        >
          {seg.text}
        </a>
      );
    }
    return <span key={i}>{seg.text}</span>;
  });
}

export const BlogRenderer = ({ blocks }: { blocks: BlogBlock[] }) => {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                {block.text}
              </h2>
            );
          case "subheading":
            return (
              <h3 key={i} className={`text-xl md:text-2xl font-semibold ${block.text === "TL;DR" ? "text-pink-500 dark:text-pink-400" : "text-black dark:text-white"}`}>
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={i} className="text-base md:text-lg text-black/70 dark:text-white/70 leading-relaxed">
                {block.segments ? renderSegments(block.segments) : block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="list-disc pl-6 space-y-2 text-base md:text-lg text-black/70 dark:text-white/70">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={i} className="border-l-4 border-pink-400 pl-6 py-2 my-6 italic text-base md:text-lg text-black/60 dark:text-white/60">
                <p>"{block.text}"</p>
                {block.author && (
                  <footer className="mt-2 not-italic text-sm text-black/50 dark:text-white/50">
                    — {block.author}
                  </footer>
                )}
              </blockquote>
            );
          case "hr":
            return <hr key={i} className="border-t border-black/10 dark:border-white/10 my-8" />;
          default:
            return null;
        }
      })}
    </div>
  );
};
