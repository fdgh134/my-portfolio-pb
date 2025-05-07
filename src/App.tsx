import { useState, useEffect } from 'react';
import Header from './sections/Header';
import IntroSection from './sections/IntroSection';
import HistorySection from './sections/HistorySection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section")) as HTMLElement[];
    let isScrolling = false;
  
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
  
      const scrollY = window.scrollY;
      const direction = e.deltaY > 0 ? 1 : -1;
      const windowHeight = window.innerHeight;
  
      const currentIndex = sections.findIndex(section => {
        const top = section.offsetTop;
        return scrollY >= top - 10 && scrollY < top + windowHeight - 10;
      });
  
      const currentSection = sections[currentIndex];
  
      if (currentSection?.id === "projects") {
        const scrollable = currentSection.querySelector(".scrollable") as HTMLElement | null;
        if (scrollable) {
          const maxScroll = scrollable.scrollHeight - scrollable.clientHeight;
          const currentScroll = scrollable.scrollTop;
  
          const isAtTop = currentScroll <= 0 && direction < 0;
          const isAtBottom = currentScroll >= maxScroll - 1 && direction > 0;
  
          if (!isAtTop && !isAtBottom) {
            return;
          }
        }
      }
  
      let nextIndex = currentIndex + direction;
      nextIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));
  
      const nextSection = sections[nextIndex];
      if (!nextSection) return;
  
      isScrolling = true;
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
  
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };
  
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="mx-auto max-w-[2560px] min-h-screen overflow-x-hidden bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300 scroll-snap-y snap-mandatory">
      <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <IntroSection />
      <HistorySection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
