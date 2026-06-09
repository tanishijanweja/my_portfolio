import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/ConnectingDots";

export const BlogsSection = () => {
  return (
    <section id="blogs" className="py-22 md:py-24 lg:py-26">
      <div className="container">
        <SectionHeader
          eyebrow="Writings"
          title="Blogs"
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="px-8 py-8 md:px-10 md:py-12"
            >
              <div className="flex items-center gap-2 text-sm text-pink-400 mb-3">
                <CalendarDays className="size-4" />
                <span>{post.date}</span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl text-black dark:text-white">
                {post.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-black/60 dark:text-white/60 leading-relaxed">
                {post.description}
              </p>
              <Link
                href={`/blogs/${post.slug}`}
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-pink-400 hover:underline hover:gap-2 transition-all duration-300"
              >
                Read more <ArrowUpRight className="size-4" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
