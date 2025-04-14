import { useState, useEffect } from 'react';
import './index.css';
function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button
          onClick={() => setIsDark(prev => !prev)}
          className="border px-3 py-1 rounded"
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      {/* 섹션들 */}
      <section id="intro" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl">👋 소개 섹션</h2>
      </section>

      <section id="history" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-800">
        <h2 className="text-3xl">📜 이력 섹션</h2>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl">🛠️ 프로젝트 섹션</h2>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-800">
        <h2 className="text-3xl">📮 연락 섹션</h2>
      </section>
    </div>
  )
}

export default App
