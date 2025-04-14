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
    { year: "2025-01 - 2025-03", title: "항해99 플러스 프론트엔드 교육 이수", desc: "React, TypeScript 기반 실무 중심의 역량 강화" },
    { year: "2023-03 - 2025-04", title: "메타이노베이션", desc: "php 기반 반응형 웹 퍼블리싱 및 App 디자인 작업" },
    { year: "2020-02 - 2021-12", title: "PureFishing KOREA", desc: "자사 웹 디자인 및 B2B 페이지 퍼블리싱" },
    { year: "2018-01 - 2019-11", title: "모아유통", desc: "웹 페이지 유지보수 및 웹 디자인" },
    { year: "2017-06 - 2017-11", title: "더좋은컴퓨터아트학원 웹 UI/UX 디자인 교육 이수", desc: "웹 UI/UX 디자인 기초 및 실무 교육" },
    { year: "2011-03 - 2017-03", title: "백석예술대학교", desc: "시각디자인과 졸업" },
  ];

  return (
    <section
      id="history"
      ref={sectionRef}
      className="h-screen bg-gray-100 dark:bg-zinc-800 scroll-mt-16 px-[5vw] py-20 flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold mb-20">📜 Experience</h2>
      <div className="w-full max-w-3xl space-y-6">
        {historyItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => setItemRef(el, i)}
            className="p-4 rounded border bg-white dark:bg-zinc-700 shadow transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-blue-400"
          >
            <p className="text-l text-gray-500 dark:text-gray-300">{item.year}</p>
            <p className="text-3xl font-semibold my-3">{item.title}</p>
            <p className="text-xl text-gray-800 dark:text-gray-100">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}