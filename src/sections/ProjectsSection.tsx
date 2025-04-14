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

  const projects = [
    { title: "프로젝트 1", desc: "설명 1" },
    { title: "프로젝트 2", desc: "설명 2" },
    { title: "프로젝트 3", desc: "설명 3" },
    { title: "프로젝트 4", desc: "설명 4" },
    { title: "프로젝트 5", desc: "설명 5" },
    { title: "프로젝트 6", desc: "설명 6" },
    { title: "프로젝트 7", desc: "설명 7" },
    { title: "프로젝트 8", desc: "설명 8" },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="h-screen scroll-mt-16 bg-white dark:bg-zinc-900 px-[5vw] py-20 flex flex-col items-center "
    >
      <h2 className="text-5xl font-bold mb-20">🛠️ 프로젝트</h2>
      <div className="overflow-x-auto">
        <div ref={titleRef} className="grid grid-cols-4 gap-[2vw] mt-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="w-[400px] h-[300px] bg-zinc-100 dark:bg-zinc-700 rounded-lg shadow p-4"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-500 dark:text-white">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}