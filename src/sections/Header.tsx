interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

export default function Header({ isDark, toggleDark }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white dark:bg-zinc-900 shadow z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-lg">My Portfolio</h1>
        <nav className="space-x-4">
          <a href="#intro" className="hover:underline">소개</a>
          <a href="#history" className="hover:underline">이력</a>
          <a href="#projects" className="hover:underline">프로젝트</a>
          <a href="#contact" className="hover:underline">연락</a>
        </nav>
        <button onClick={toggleDark} className="ml-4 border px-2 py-1 rounded">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}