import vibe from "@/assets/images/vibe.png";
import signalist from "@/assets/images/signalist.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { ArrowUpRight } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";
import { Github } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    name: "VIBE",
    year: "July 2025",
    title: "AI-Powered Web App Builder",
    results: [
      { title: "AI Coding Assistant for Web Apps" },
      { title: "Secure Auth & Billing" },
      { title: "Dynamic UI Previews" },
    ],
    link: "https://vibe-ucq3.vercel.app/",
    code: "https://github.com/tanishijanweja/vibe",
    image: vibe,
  },
  {
    name: "SIGNALIST",
    year: "November 2025",
    title: "Real-Time Stock Tracker App",
    results: [
      {
        title:
          "Real-time market data with interactive charts and historical price view",
      },
      {
        title:
          "Personalized alerts & background jobs (Inngest) for notifications and daily digests",
      },
      {
        title:
          "Watchlist, company insights, and secure auth (BetterAuth) with MongoDB persistence",
      },
    ],
    link: "https://signalist-stock-tracker-app-eight.vercel.app",
    code: "https://github.com/tanishijanweja/signalist_stock-tracker-app",
    image: signalist,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real world Results"
          title="Featured Projects"
          description="Building clean, functional and creative web experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-pink-300 to-pink-500 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.name}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-sans text-2xl mt-2 md:mt-5 md:text-4xl text-black dark:text-white">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-black/10 dark:border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-black/60 dark:text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-black h-12 w-48 md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 cursor-pointer outline-2 hover:outline-pink-400">
                        <ArrowUpRight className="size-5" />
                        <span>View Live</span>
                      </button>
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-black h-12 w-48 md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 cursor-pointer outline-2 hover:outline-pink-400">
                        <Github className="h-5 w-5" />
                        <span>View Code</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
