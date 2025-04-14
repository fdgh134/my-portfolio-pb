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
      className="h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-800 scroll-mt-16"
    >
      <div ref={titleRef}>
        <div className="flex flex-col items-left justify-center">
          <p className="text-5xl">
            같이 일할 파트너를 찾고 계신가요?
          </p>
          <h2
            ref={titleRef}
            className="text-7xl font-bold my-12"
          >
            fdgh134@naver.com
          </h2>
          <p className="text-3xl">
            합류 및 협업 제안이 있으시면 언제든지 연락 주세요😀 빠르게 회신 드리겠습니다!
          </p>
        </div>
        <a 
          href="mailto:fdgh134@naver.com"
          className="mt-12 inline-block text-3xl font-semibold text-blue-400"  
        >
          📧 메일 보내기
        </a>
      </div>
      
      
    </section>
  );
}