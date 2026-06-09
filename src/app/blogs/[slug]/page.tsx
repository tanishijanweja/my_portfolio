import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { BlogRenderer } from "@/components/blog/BlogRenderer";
import { blogPosts, getBlogBySlug } from "@/data/ConnectingDots";
import { ArrowLeft } from "lucide-react";

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
      <div className="flex justify-end mb-2">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-400 hover:underline"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
        {post.title}
      </h1>
      <p className="mt-3 text-sm md:text-base text-pink-400">
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
