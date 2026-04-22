import { lazy, Suspense, useEffect } from "react";
import { scroller } from "react-scroll";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroMain from "./components/heroSection/HeroMain";
import CursorEffect from "./components/cursorEffect";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import { DockDemo } from "./components/dock";
import CertificateMain from "./components/Certificates/CertificateMain";
import CodingStandardMain from "./components/codingStandards/codingStandardMain.jsx";
const SCROLL_OFFSET = 130;
const ROUTE_SCROLL_MAX_TRIES = 8;
const ROUTE_SCROLL_INTERVAL_MS = 60;
const Blogs = lazy(() => import("./components/Blogs/blogs.jsx"));

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const routeSection = location.state?.scrollTo;

  useEffect(() => {
    const section = typeof routeSection === "string" ? routeSection.trim() : "";
    if (!section) return;

    const clearNavigationState = () => {
      navigate(location.pathname, { replace: true, state: null });
    };

    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      clearNavigationState();
      return;
    }

    let tries = 0;

    const attemptScroll = () => {
      const target = document.getElementById(section);
      if (!target) return false;

      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -SCROLL_OFFSET,
      });
      return true;
    };

    if (attemptScroll()) {
      clearNavigationState();
      return;
    }

    const timerId = window.setInterval(() => {
      tries += 1;
      if (attemptScroll() || tries >= ROUTE_SCROLL_MAX_TRIES) {
        window.clearInterval(timerId);
        clearNavigationState();
      }
    }, ROUTE_SCROLL_INTERVAL_MS);

    return () => window.clearInterval(timerId);
  }, [location.pathname, navigate, routeSection]);

  return (
    <main className="relative overflow-hidden font-body text-primary">
      <NavbarMain />
      <HeroMain />
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <CertificateMain />
      <CodingStandardMain />
      <ContactMeMain />
      <FooterMain />
      <DockDemo />
    </main>
  );
}

function App() {
  return (
    <>
      <CursorEffect />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/blogs"
          element={
            <Suspense fallback={null}>
              <Blogs />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
