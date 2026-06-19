import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const HOME_PATH = "/";
const SCROLL_OFFSET = -120;

const FooterMain = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];

  const goToSection = (section) => {
    if (!section) return;

    if (location.pathname !== HOME_PATH) {
      navigate(HOME_PATH, { state: { scrollTo: section } });
      return;
    }

    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: SCROLL_OFFSET,
    });
  };

  return (
    <footer className="mt-24 border-t border-default/15 px-4">
      <div className="mx-auto flex max-w-content flex-col items-center gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <button
          type="button"
          onClick={() => goToSection("about")}
          className="focus-ring cursor-pointer rounded-md text-2xl font-semibold tracking-wide text-primary transition-colors duration-300 hover:text-accent-2 md:text-3xl"
        >
          Mufaddal Calcuttawala
        </button>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base text-muted">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => goToSection(item.section)}
                  className="focus-ring cursor-pointer rounded-md transition-colors duration-300 hover:text-accent-2"
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="border-t border-default/15 py-8 text-center text-sm text-muted">
        &copy; 2025 Mufaddal | All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterMain;
