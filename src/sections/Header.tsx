"use client";

import { useState, useEffect, useCallback } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  {
    href: "https://drive.google.com/file/d/1KBJyb4EcJx-2x-NS_Ym6x3V3Xq06L2Vh/view?usp=sharing",
    label: "Resume",
    external: true,
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  // prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeMenu]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      closeMenu();
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-3 left-0 right-0 z-50 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* MOBILE HEADER */}
          <div className="flex w-full items-center justify-between md:hidden">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="text-lg font-medium tracking-tight"
            >
              tanishi janweja
            </a>

            <div className="flex items-center gap-2">
              {mounted && <ModeToggle />}
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* DESKTOP HEADER (your old one) */}
          <nav className="hidden md:flex gap-1 p-0.5 border border-black/10 dark:border-white/15 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur supports-backdrop-filter:bg-white/70 dark:supports-backdrop-filter:bg-white/10 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="nav-item"
              >
                {link.label}
              </a>
            ))}
            {mounted && <ModeToggle />}
          </nav>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] bg-background/95 backdrop-blur-lg transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        {/* DRAWER */}
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-xs z-[70] bg-background transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE BUTTON */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-accent/10"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* LINKS */}
          <nav className="flex flex-col items-center justify-center h-[80vh] gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-3xl font-light tracking-wide hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};