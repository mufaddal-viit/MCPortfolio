import { animateScroll, scroller } from "react-scroll";
import SparkleUnderlineNav from "../Underline";

const links = [
  { label: "Home", section: "home" },
  { label: "About Me", section: "about" },
  { label: "Skills", section: "skills" },
  { label: "Experience", section: "experience" },
  { label: "Projects", section: "projects" },
  { label: "Contact", section: "contact" },
];

const NavbarLinks = ({ togglestate, activeSection, onNavigate }) => {
  const handleSelect = (item) => {
    if (!item || typeof item === "string") return;
    if (item.section === "home") {
      animateScroll.scrollToTop({ duration: 500, smooth: true });
    } else {
      scroller.scrollTo(item.section, {
        smooth: true,
        duration: 500,
        offset: -130,
      });
    }
    if (onNavigate && item.section) onNavigate(item.section);
    if (togglestate) togglestate();
  };

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
