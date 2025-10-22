export const Header = () => {
  return (
    <div className="fixed top-3 left-0 right-0 z-50 flex justify-center items-center">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
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
          className="nav-item bg-pink-200 text-gray-900 hover:bg-pink-300 hover:text-gray-900"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};
