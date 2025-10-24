import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/tanishijanweja",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/tanishi-janweja/",
  },
  {
    title: "X",
    href: "https://x.com/tanishijanweja",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@TanishiJanweja",
  },
];

export const Footer = () => {
  return (
    <footer className="relative">
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
                className="inline-flex items-center gap-1.5 hover:text-pink-400"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
