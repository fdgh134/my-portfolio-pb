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
          end: "top 80%",
          scrub: true,
        },
      }
    );
  }, []);

  const projects = [
    { title: "프리랜서 관리자 페이지", desc: "프리랜서 업무 관리를 위한 SPA 웹 앱", img: "/img/freelance.png", link: "https://soapy-ixora-d44.notion.site/SaaS-24f4ddded97d805d8255d2c5cf8e9fae?pvs=73" },
    { title: "Mabinogi 모바일 도우미", desc: "일일, 주간 체크리스트, 게임 정보 제공을 위한 SPA 웹 앱", img: "/img/MabinogiM.png", link: "https://soapy-ixora-d44.notion.site/Mabinogi-2174ddded97d800b847bd125295e150c?pvs=74" },
    { title: "일정 관리 서비스 깜빡", desc: "구글 계정 연동 개인 일정 관리 페이지", img: "/img/scheduler.png", link: "https://soapy-ixora-d44.notion.site/1fc4ddded97d80dd97b3c275d8970773" },
    { title: "마비노기 Open Api 웹페이지", desc: "인게임 내 경매장, 전체 채팅, NPC 아이템 정보 확인 페이지", img: "/img/mabinogiApi.jpg", link: "https://soapy-ixora-d44.notion.site/Mabinogi-Api-1d64ddded97d8039a863f8abb0b58fb4" },
    { title: "더리워드 App", desc: "더리워드 App UI 디자인", img:"/img/theReword.png", link: "https://soapy-ixora-d44.notion.site/APP-1d64ddded97d80c5a50acad3499a5dae?pvs=73" },
    { title: "GLOX 브랜드 페이지", desc: "자전거 캐리어 제품 웹페이지", img: "/img/meta-glox.png", link: "https://soapy-ixora-d44.notion.site/GLOX-1d64ddded97d8057bf53cef6eb87a506" },
    { title: "Metainnovation Robot", desc: "메타이노베이션 서빙로봇 웹페이지", img: "/img/meta-robot.png", link: "https://soapy-ixora-d44.notion.site/Metainnovation-Robot-1d64ddded97d80e2bce1d14d057a752c" },
    { title: "Metainnovation Table Order", desc: "메타이노베이션 테이블오더 웹페이지", img: "/img/meta-tableorder.png", link: "https://soapy-ixora-d44.notion.site/Metainnovation-TableOrder-1d64ddded97d80888419fe8db58fce1c" },
    { title: "Metainnovation POS", desc: "메타이노베이션 포스 웹페이지", img: "/img/meta-pos.png", link: "https://soapy-ixora-d44.notion.site/Metainnovation-POS-1d64ddded97d80a5a5ced4335a9435de?pvs=73" },
    { title: "Metainnovation", desc: "메타이노베이션 웹페이지", img: "/img/meta-company.png", link: "https://soapy-ixora-d44.notion.site/Metainnovation-1d64ddded97d802abe19ed6fde8a3e62?pvs=73" },
    { title: "UIUX 디자인", desc: "Figma로 작업한 미구현 디자인 작업물", img: "/img/uiux/nail-thum.png", link: "https://soapy-ixora-d44.notion.site/UIUX-1d64ddded97d80c3b85dff7f6cb2031b" },
    { title: "상세페이지 작업", desc: "온라인 쇼핑몰에 등록된 상세페이지 작업물", img: "/img/nak10.png", link: "https://soapy-ixora-d44.notion.site/1d64ddded97d808b88d0ea4f744b38d5" },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="h-screen snap-start snap-always scroll-mt-16 bg-white dark:bg-zinc-900 px-[5vw] lg:py-20 md:py-16 sm:py-12 py-8 flex flex-col items-center "
    >
      <h2 className="text-5xl font-bold mb-8 md:mb-10 lg:mb-20">🛠️ 프로젝트</h2>
      <div className="w-full scrollable max-h-screen overflow-y-auto overflow-x-hidden">
        <div ref={titleRef} className="grid grid-cols-1 3xl:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div className="flex flex-col gap-2">
              <a 
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  key={i}
                  className="w-full h-[300px] sm:h-[300px] lg:h-[400px] 4xl:h-[500px] bg-zinc-100 dark:bg-zinc-700 rounded-lg shadow p-4 transition-all duration-300
                hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-blue-400"
                  style={{
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                </div>
              </a>
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-500 dark:text-white">{project.desc}</p>   
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}