import { useEffect, useRef } from "react";
import { animateScroll, scroller } from "react-scroll";
import SparkleUnderlineNav from "../Underline";

const RESUME_URL = "/MUFADDAL_cal_FS_5_Jan.pdf";

const links = [
  { label: "Home", section: "home" },
  { label: "About Me", section: "about" },
  { label: "Skills", section: "skills" },
  { label: "Experience", section: "experience" },
  { label: "Projects", section: "projects" },
  { label: "Resume", section: "Resume" },
];

const SCROLL_OFFSET = 130;

const NavbarLinks = ({ togglestate, activeSection, onNavigate }) => {
  const rafRef = useRef(0);

  const handleSelect = (item) => {
    if (!item || typeof item === "string") return;
    if (item.section === "Resume") {
      const link = document.createElement("a");
      link.href = RESUME_URL;
      link.download = "MUFADDAL_cal_FS.pdf";
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      link.remove();
      if (togglestate) togglestate();
      return;
    }
    if (item.section === "home") {
      animateScroll.scrollToTop({ duration: 500, smooth: true });
    } else {
      scroller.scrollTo(item.section, {
        smooth: true,
        duration: 500,
        offset: -SCROLL_OFFSET,
      });
    }
    if (onNavigate && item.section) onNavigate(item.section);
    if (togglestate) togglestate();
  };

  useEffect(() => {
    if (!onNavigate) return;

    const sections = links
      .map((link) => link.section)
      .filter((section) => section && section !== "home")
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const getActiveSection = () => {
      let current = "home";
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top - SCROLL_OFFSET <= 0) {
          current = section.id;
        }
      }
      return current;
    };

    const updateActive = () => {
      rafRef.current = 0;
      const nextSection = getActiveSection();
      if (nextSection && nextSection !== activeSection) {
        onNavigate(nextSection);
      }
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };
  }, [activeSection, onNavigate]);

  return (
    <SparkleUnderlineNav
      items={links}
      color="#00fffc"
      onSelect={handleSelect}
      activeKey={activeSection}
      className="relative w-full flex justify-center max-lg:mt-3 max-lg:w-[min(92vw,420px)] lg:static"
      listClassName="flex gap-8 text-white font-body lg:gap-10 lg:items-center lg:justify-between lg:w-[680px] lg:text-md max-lg:flex-col max-lg:text-center max-lg:bg-black/70 max-lg:backdrop-blur-lg max-lg:py-4 max-lg:px-6 max-lg:rounded-2xl max-lg:shadow-[0_20px_50px_rgba(0,0,0,0.35)] max-lg:w-full"
    />
  );
};

export default NavbarLinks;
