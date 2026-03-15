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
    <div className="px-4">
      <div className="mt-24 h-[1px] w-full bg-default/50"></div>
      <div className="mx-auto mt-4 max-w-[1200px] justify-between md:flex sm:hidden">
        <button
          type="button"
          onClick={() => goToSection("about")}
          className="mt-4 cursor-pointer text-3xl text-primary transition-all duration-500 hover:text-accent-2"
        >
          Mufaddal Calcuttawala
        </button>
        <ul className="mt-4 flex gap-4 text-xl text-primary">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => goToSection(item.section)}
                  className="cursor-pointer transition-all duration-500 hover:text-accent-2"
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mx-auto mt-20 mb-12 text-center text-sm text-secondary">
        &copy; 2025 Mufaddal | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
