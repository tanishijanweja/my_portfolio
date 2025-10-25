import { ModeToggle } from "@/components/ModeToggle";

export const Header = () => {
  return (
    <div className="fixed top-3 left-0 right-0 z-50 flex justify-center items-center">
      <nav className="flex gap-1 p-0.5 border border-black/10 dark:border-white/15 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-white/10">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="https://drive.google.com/file/d/10jwatMDz3D77uYehUw9QpeQDz9LqZ6JI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          Resume
        </a>
        <ModeToggle />
      </nav>
    </div>
  );
};
