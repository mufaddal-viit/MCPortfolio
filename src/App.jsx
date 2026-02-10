import { useEffect } from "react";
import { scroller } from "react-scroll";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
// import CertificateMain from "./components/Certificates/CertificateMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import ThemeToggle from "./components/ui/ThemeToggle";
import { DockDemo } from "./components/dock";
import Blogs from "./components/Blogs/blogs.jsx";

// import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import CertificateMain from "./components/Certificates/CertificateMain";

const normalizePath = (path) => {
  if (!path) return "/";
  const trimmedPath = path.replace(/\/+$/, "");
  return trimmedPath || "/";
};

const SCROLL_OFFSET = 130;
const HOME_PATH = "/";

function App() {
  const currentPath = normalizePath(
    typeof window !== "undefined" ? window.location.pathname : "/",
  );

  useEffect(() => {
    if (currentPath !== HOME_PATH) return;
    if (typeof window === "undefined") return;

    const scrollFromHash = () => {
      const rawHash = window.location.hash || "";
      const section = rawHash.replace(/^#/, "").trim();
      if (!section) return;

      if (section === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      let tries = 0;
      const maxTries = 8;
      const intervalMs = 60;

      const attemptScroll = () => {
        const target = document.getElementById(section);
        if (target) {
          scroller.scrollTo(section, {
            smooth: true,
            duration: 500,
            offset: -SCROLL_OFFSET,
          });
          return true;
        }
        return false;
      };

      if (attemptScroll()) return;

      const timerId = window.setInterval(() => {
        tries += 1;
        if (attemptScroll() || tries >= maxTries) {
          window.clearInterval(timerId);
        }
      }, intervalMs);
    };

    scrollFromHash();
    window.addEventListener("hashchange", scrollFromHash);
    return () => window.removeEventListener("hashchange", scrollFromHash);
  }, [currentPath]);

  if (currentPath === "/blogs") {
    return (
      <Blogs />
    );
  }

  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      {/* <SubHeroMain /> */}
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <CertificateMain />
      <ContactMeMain />
      <FooterMain />
      {/* <ThemeToggle /> */}
      <DockDemo />
    </main>
  );
}

export default App;
