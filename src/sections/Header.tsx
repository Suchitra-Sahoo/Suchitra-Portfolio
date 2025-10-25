export const Header = () => {
  return (
    <div className="fixed top-3 left-0 right-0 z-50 flex justify-center items-center">
      <nav className="flex gap-1 md:gap-2 px-1 md:px-3 py-0.5 md:py-1 border-white/15 rounded-full bg-white/10 backdrop-blur overflow-x-auto">
        <a href="#home" className="nav-item flex-shrink-0 px-2 md:px-3 py-1 md:py-1.5">
          Home
        </a>
        <a href="#experience" className="nav-item flex-shrink-0 px-2 md:px-3 py-1 md:py-1.5">
          Experience
        </a>
        <a href="#projects" className="nav-item flex-shrink-0 px-2 md:px-3 py-1 md:py-1.5">
          Projects
        </a>
        {/* About visible only on md+ screens */}
        <a href="#about" className="nav-item hidden md:inline-flex flex-shrink-0 px-2 md:px-3 py-1 md:py-1.5">
          About
        </a>
        <a
          href="https://drive.google.com/file/d/1PCJa26r5od5qQDSOxk5VkKW7J5ytfOeH/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item bg-pink-200 text-gray-900 hover:bg-pink-300 hover:text-gray-900 flex-shrink-0 px-2 md:px-3 py-1 md:py-1.5"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};
