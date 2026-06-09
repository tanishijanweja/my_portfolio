import type { Metadata } from "next";
import { Header } from "@/sections/Header";
import { BlogsSection } from "@/sections/Blogs";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Blog — tanishi.app",
};

export default function BlogsPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <BlogsSection />
      <Footer />
    </div>
  );
}
