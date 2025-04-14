import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="h-screen scroll-mt-16 bg-white dark:bg-zinc-900 px-6 py-16flex items-center justify-center"
    >
      <h2
        ref={titleRef}
        className="text-3xl font-bold text-center"
      >
        🛠️ 프로젝트 섹션
      </h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 min-w-[200%]">
          <div className="w-[300px] h-[200px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 1
          </div>
          <div className="w-[300px] h-[200px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 2
          </div>
          <div className="w-[300px] h-[200px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 3
          </div>
          <div className="w-[300px] h-[200px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 4
          </div>
          <div className="w-[300px] h-[200px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 5
          </div>
          <div className="w-[300px] h-[200px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 6
          </div>
          <div className="w-[300px] h-[200px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 7
          </div>
          <div className="w-[300px] h-[200px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 8
          </div>
        </div>
      </div>
    </section>
  );
}