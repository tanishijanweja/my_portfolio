import ArrowDown from "@/assets/icons/arrow-down.svg";
import hand from "@/assets/images/hand.png";
import { Github, Linkedin, X } from "lucide-react";

export const HeroSection = () => {
  return (
    <div id="home" className="py-22 md:py-24 lg:py-26">
      <div className="container">
        <div className="flex flex-col items-center -mt-2">
          <p className="text-pink-400 font-medium text-lg lg:text-xl mb-2">
            Hello I'm
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold dark:text-white mb-2">
            Tanishi Janweja
          </h1>
          <h2 className="text-lg lg:text-xl font-medium text-pink-400 mb-6">
            A Full-Stack Web Developer
          </h2>
          <div className="dark:bg-gray-950 border border-gray-400 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-600 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Open to new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <p className="mt-4 text-center dark:text-white/70 md:text-lg">
            I build web applications that are creative, user-friendly and
            functional, bringing ideas to life with seamless digital
            experiences.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border dark:border-white/15 px-6 h-12 rounded-xl hover:bg-pink-200/20 cursor-pointer">
              <span className="font-semibold">
                <a href="#projects">Explore My Work</a>
              </span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-pink-200 bg-pink-200 text-gray-900 h-12 px-6 rounded-xl">
            <img
              src={hand.src}
              alt="hand waving"
              className="w-5 h-5 bg-pink-200 mix-blend-darken"
            />
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
        <div className="flex justify-center space-x-6 py-4">
          <a
            href={`https://linkedin.com/in/tanishi-janweja`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
          >
            <Linkedin size={28} />
          </a>
          <a
            href={`https://github.com/tanishijanweja`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
          >
            <Github size={28} />
          </a>
          <a
            href={`https://x.com/tanishijanweja`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
          >
            <X size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};
