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
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="h-screen scroll-mt-16 bg-white dark:bg-zinc-900 px-[5vw] py-16 flex flex-col items-center "
    >
      <h2 className="text-3xl font-bold mb-10">🛠️ 프로젝트</h2>
      <div className="overflow-x-auto">
        <div ref={titleRef} className="grid grid-cols-4 gap-[2vw] mt-10">
          <div className="w-[400px] h-[300px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 1
          </div>
          <div className="w-[400px] h-[300px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 2
          </div>
          <div className="w-[400px] h-[300px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 3
          </div>
          <div className="w-[400px] h-[300px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 4
          </div>
          <div className="w-[400px] h-[300px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 5
          </div>
          <div className="w-[400px] h-[300px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 6
          </div>
          <div className="w-[400px] h-[300px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 7
          </div>
          <div className="w-[400px] h-[300px] bg-zinc-100 dark:bg-zinc-700 rounded shadow p-4">
            프로젝트 8
          </div>
        </div>
      </div>
    </section>
  );
}