import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { BlogRenderer } from "@/components/blog/BlogRenderer";
import { blogPosts, getBlogBySlug } from "@/data/ConnectingDots";
import { ArrowLeft } from "lucide-react";
import { StarButton } from "@/components/blog/StarButton";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="py-22 md:py-24 lg:py-26">
        <div className="container max-w-3xl">
          <BlogPostContent slugPromise={params} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

async function BlogPostContent({
  slugPromise,
}: {
  slugPromise: Promise<{ slug: string }>;
}) {
  const { slug } = await slugPromise;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-black/40 dark:text-white/40 hover:text-pink-500 transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          Back to posts
        </Link>
        <StarButton slug={post.slug} />
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
        {post.title}
      </h1>
      <p className="mt-3 text-xs font-medium font-mono uppercase tracking-widest text-pink-500">
        {post.date}
      </p>
      <p className="mt-4 text-base md:text-lg text-black/60 dark:text-white/60 leading-relaxed">
        {post.description}
      </p>
      <hr className="border-t border-black/10 dark:border-white/10 my-8" />
      <BlogRenderer blocks={post.content} />
    </>
  );
}
