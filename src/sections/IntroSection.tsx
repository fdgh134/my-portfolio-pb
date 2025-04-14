import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import me from "/icons/me.png";

gsap.registerPlugin(ScrollTrigger);

const techIcons = [
  { name: "HTML", src: "/icons/html5.png" },
  { name: "CSS", src: "/icons/css.svg" },
  { name: "JavaScript", src: "/icons/JavaScript.png" },
  { name: "TypeScript", src: "/icons/TypeScript.png" },
  { name: "React", src: "/icons/React.png" },
  { name: "Tailwind", src: "/icons/Tailwind.png" },
  { name: "GSAP", src: "/icons/GSAP.svg" },
  { name: "Figma", src: "/icons/Figma.png" },
  { name: "Illustrator", src: "/icons/Illustrator.png" },
  { name: "Photoshop", src: "/icons/Photoshop.png" },
];

export default function IntroSection() {
  const sliderRef  = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!sliderRef.current || !wrapperRef.current) return;
  
    const slider = sliderRef.current;
    const wrapper = wrapperRef.current;
  
    // 무한 루프 구성
    slider.innerHTML += slider.innerHTML;
  
    const slideWidth = slider.scrollWidth / 2;
  
    // 슬라이더 애니메이션 생성 (일단 paused)
    tweenRef.current = gsap.to(slider, {
      x: `-=${slideWidth}`,
      duration: 70,
      ease: "linear",
      repeat: -1,
      paused: true,
      modifiers: {
        x: (x) => `${parseFloat(x) % slideWidth}px`,
      },
    });
  
    // ScrollTrigger로 재생 제어
    const trigger = gsap.to({}, {
      scrollTrigger: {
        trigger: wrapper,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => tweenRef.current?.play(),
        onLeave: () => tweenRef.current?.pause(),
        onEnterBack: () => tweenRef.current?.play(),
        onLeaveBack: () => tweenRef.current?.pause(),
      }
    });
  
    // 호버 정지/재생은 그대로 유지
    const pause = () => tweenRef.current?.pause();
    const play = () => tweenRef.current?.play();
  
    wrapper.addEventListener("mouseenter", pause);
    wrapper.addEventListener("mouseleave", play);
  
    return () => {
      wrapper.removeEventListener("mouseenter", pause);
      wrapper.removeEventListener("mouseleave", play);
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".intro-avatar",
      {
        x: 0,
        y: 100,
        scale: 0,
        rotation: 0,
        opacity: 0,
        left: "46%",
        top: "35%",
        translateX: "-50%",
        translateY: "-50%",
        position: "absolute",
      },
      {
        x: 0,
        y: 0,
        scale: 1.5,
        rotation: 720,
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
        left: "46%",
        top: "23%", 
        translateX: "-50%",
        translateY: "-50%",
      }
    );
  }, []);

  return (
    <section
      id="intro"
      className="h-screen flex flex-col justify-around items-center scroll-mt-16 bg-white dark:bg-zinc-900 text-center px-[5vw]"
    >
      <div className="pt-[24%]">
        <h2 className="text-7xl mb-12">안녕하세요!</h2>
        <h3 className="text-5xl dark:text-gray-300">
          5년차 웹 퍼블리셔 <span className="font-black">손유민</span> 입니다.
        </h3>
        <div>
          <img 
            src={me} 
            alt="My Avatar" 
            className="intro-avatar absolute w-40 rouonded-full"
          />
        </div>
      </div>
      {/* 기술 스택 슬라이드 영역 */}
      <div ref={wrapperRef} className="w-full mt-12 pb-[5%]">
        <div
          ref={sliderRef}
          className="flex w-max px-6 text-xl font-semibold text-zinc-700 dark:text-white"
        >
          {[...techIcons, ...techIcons].map((tech, idx) => (
            <div key={idx} className="mx-4 shrink-0 flex flex-col items-center px-4 py-2 bg-white dark:bg-zinc-700 rounded shadow transition-all duration-300
            hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-blue-400">
              <img src={tech.src} alt={tech.name} className="h-20 w-20 object-contain" />
              <span className="text-md mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );  
}
