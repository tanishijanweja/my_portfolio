import vibe from "@/assets/images/vibe.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { ArrowUpRight } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";
import { Github } from "lucide-react";

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
    image: vibe,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-pink-300 to-pink-500 text-center bg-clip-text text-transparent">
            Real world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          Building clean, functional, and creative web experiences.
        </p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-neutral-900 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-pink-300 to-pink-500 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.name}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a href={project.link}>
                      <button className="bg-white text-black h-12 w-48 md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer outline-2 outline-pink-400">
                        <ArrowUpRight className="size-5" />
                        <span>View Live</span>
                      </button>
                    </a>
                    <a href={`https://github.com/tanishijanweja/vibe`}>
                      <button className="bg-white text-black h-12 w-48 md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer outline-2 outline-pink-400">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
