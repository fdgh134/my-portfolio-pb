import { useState, useEffect } from 'react';
import Header from './sections/Header';
import IntroSection from './sections/IntroSection';
import HistorySection from './sections/HistorySection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
      <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <IntroSection />
      <HistorySection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
