import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HistorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    itemRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    if (el) itemRefs.current[i] = el;
  };

  const historyItems = [
    { year: "2023", title: "웹 퍼블리셔", desc: "반응형 웹 구축 및 유지보수" },
    { year: "2024", title: "프론트엔드 전향 준비", desc: "React + TypeScript 프로젝트 진행" },
    { year: "2025", title: "포트폴리오 제작 중", desc: "Tailwind + GSAP 기반 스크롤 UI" },
  ];

  return (
    <section
      id="history"
      ref={sectionRef}
      className="h-screen bg-gray-100 dark:bg-zinc-800 scroll-mt-16 px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-10">📜 이력 섹션</h2>
      <div className="w-full max-w-xl space-y-6">
        {historyItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => setItemRef(el, i)}
            className="p-4 rounded border bg-white dark:bg-zinc-700 shadow"
          >
            <p className="text-sm text-gray-500 dark:text-gray-300">{item.year}</p>
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}