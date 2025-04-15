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
    { year: "2025-01 - 2025-03", title: "항해99 플러스 프론트엔드 이수", desc: "React, TypeScript 기반 실무 중심의 역량 강화" },
    { year: "2023-03 - 2025-04", title: "메타이노베이션", desc: "php 기반 반응형 웹 퍼블리싱 및 App 디자인 작업" },
    { year: "2020-02 - 2021-12", title: "PureFishing KOREA", desc: "자사 웹 디자인 및 B2B 페이지 퍼블리싱" },
    { year: "2018-01 - 2019-11", title: "모아유통", desc: "웹 페이지 유지보수 및 웹 디자인" },
    { year: "2017-06 - 2017-11", title: "더좋은컴퓨터학원 UI/UX 디자인 이수", desc: "웹 UI/UX 디자인 기초 및 실무 교육" },
    { year: "2011-03 - 2017-03", title: "백석예술대학교", desc: "시각디자인과 졸업" },
  ];

  return (
    <section
      id="history"
      ref={sectionRef}
      className="min-h-screen bg-gray-100 dark:bg-zinc-800 scroll-mt-16 px-[5vw] lg:py-20 md:py-16 sm:py-12 py-8 flex flex-col items-center"
    >
      <h2 className="text-2xl md:text-4xl sm:text-3xl lg:text-5xl font-bold mb-8 md:mb-10 lg:mb-20">📜 Experience</h2>
      <div className="w-full grid grid-cols-2 max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw] gap-6 items-stretch">
        {historyItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => setItemRef(el, i)}
            className="w-full min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] 4xl:min-h-[200px] bg-white dark:bg-zinc-700 rounded-lg shadow p-4 transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-blue-400"
          >
            <p className="text-sm md:text-md lg:text-l text-gray-500 dark:text-gray-300">{item.year}</p>
            <p className="text-l md:text-xl lg:text-2xl font-semibold my-1 md:my-2 lg:my-3">{item.title}</p>
            <p className="text-md md:text-l lg:text-xl text-gray-800 dark:text-gray-100">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}