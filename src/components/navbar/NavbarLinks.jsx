import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { animateScroll, scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const SparkleUnderlineNav = lazy(() => import("../Underline"));

const RESUME_URL = "/MUFADDAL_cal_FS_4YOE.pdf";
const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

const links = [
  { label: "Home", section: "home" },
  { label: "About Me", section: "about" },
  { label: "Skills", section: "skills" },
  { label: "Experience", section: "experience" },
  { label: "Projects", section: "projects" },
  { label: "Resume", section: "Resume" },
];

const SCROLL_OFFSET = 130;
const HOME_PATH = "/";

function PlainNavbarLinks({
  items,
  activeKey,
  onSelect,
  className = "",
  listClassName = "",
}) {
  return (
    <nav className={className}>
      <ul className={listClassName}>
        {items.map((item, index) => {
          const key =
            typeof item === "string"
              ? item
              : item.section || item.label || `item-${index}`;
          const label = typeof item === "string" ? item : item.label;
          const isActive =
            typeof item === "string" ? item === activeKey : item.section === activeKey;

          return (
            <li key={key}>
              <button
                type="button"
                onClick={() => onSelect(item)}
                className={`transition-colors duration-200 ${
                  isActive ? "font-semibold text-accent" : "hover:text-accent"
                }`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const NavbarLinks = ({ activeSection, onItemSelect, onNavigate }) => {
  const rafRef = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === "undefined"
      ? true
      : window.matchMedia(DESKTOP_MEDIA_QUERY).matches,
  );

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
      if (onItemSelect) onItemSelect();
      return;
    }

    const currentPath = location.pathname || HOME_PATH;
    const nextSection = item.section;

    if (currentPath !== HOME_PATH) {
      if (onNavigate && nextSection) onNavigate(nextSection);
      if (onItemSelect) onItemSelect();
      navigate(HOME_PATH, { state: { scrollTo: nextSection || "home" } });
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
    if (onItemSelect) onItemSelect();
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const syncScreenSize = () => setIsDesktop(mediaQuery.matches);

    syncScreenSize();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncScreenSize);
      return () => mediaQuery.removeEventListener("change", syncScreenSize);
    }

    mediaQuery.addListener(syncScreenSize);
    return () => mediaQuery.removeListener(syncScreenSize);
  }, []);

  useEffect(() => {
    if (!onNavigate) return;
    if (location.pathname !== HOME_PATH) return;

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
  }, [activeSection, location.pathname, onNavigate]);

  const sharedProps = {
    items: links,
    activeKey: activeSection,
    onSelect: handleSelect,
    className:
      "relative flex w-full justify-center max-lg:mt-3 max-lg:w-[min(92vw,420px)] lg:static",
    listClassName:
      "flex gap-8 font-body text-primary lg:w-[680px] lg:items-center lg:justify-between lg:gap-10 lg:text-md max-lg:w-full max-lg:flex-col max-lg:rounded-2xl max-lg:bg-surface/90 max-lg:px-6 max-lg:py-4 max-lg:text-center max-lg:backdrop-blur-lg max-lg:shadow-lg max-lg:shadow-overlay/20",
  };

  if (!isDesktop) {
    return <PlainNavbarLinks {...sharedProps} />;
  }

  return (
    <Suspense fallback={<PlainNavbarLinks {...sharedProps} />}>
      <SparkleUnderlineNav
        {...sharedProps}
        color="rgb(var(--accent))"
      />
    </Suspense>
  );
};

export default NavbarLinks;
