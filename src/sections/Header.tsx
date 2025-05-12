interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

export default function Header({ isDark, toggleDark }: HeaderProps) {
  return (
    <header className="mx-auto max-w-[2560px] fixed top-0 w-full bg-white dark:bg-zinc-900 shadow z-50">
      <div className="mx-auto px-[5vw] py-3 flex justify-between items-center">
        <h1 className="font-bold text-2xl">YoomJJu</h1>
        <nav className="hidden sm:flex space-x-[5vw]">
          <a href="#intro" className="hover:underline font-semibold">Introduce</a>
          <a href="#history" className="hover:underline font-semibold">Experience</a>
          <a href="#projects" className="hover:underline font-semibold">Projects</a>
          <a href="#contact" className="hover:underline font-semibold">Contact</a>
        </nav>
        <button onClick={toggleDark} className="ml-4 border px-2 py-1 rounded">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}