import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
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
          start: "top 40%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-800 scroll-mt-16"
    >
      <div ref={titleRef} className="px-4 md:px-6">
        <div className="flex flex-col items-left justify-center">
          <p className="lg:text-5xl md:text-3xl sm:text-2xl text-xl">
            같이 일할 파트너를 찾고 계신가요?
          </p>
          <h2
            ref={titleRef}
            className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold lg:my-12 md:my-8 sm:my-6 my-4"
          >
            fdgh134@naver.com
          </h2>
          <p className="lg:text-3xl md:text-2xl sm:text-xl text-xl">
            합류 및 협업 제안이 있으시면 언제든지 연락 주세요😀 빠르게 회신 드리겠습니다!
          </p>
        </div>
        <a 
          href="mailto:fdgh134@naver.com"
          className="lg:mt-12 md:mt-8 sm:mt-6 mt-4 inline-block lg:text-3xl md:text-2xl sm:text-xl text-xl font-semibold text-blue-400"  
        >
          📧 메일 보내기
        </a>
      </div>
      
      
    </section>
  );
}