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
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <button
          type="button"
          onClick={() => goToSection("about")}
          className="text-3xl text-white mt-4 hover:text-orange transition-all duration-500 cursor-pointer"
        >
          Mufaddal Calcuttawala
        </button>
        <ul className="flex gap-4 text-white text-xl mt-4">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => goToSection(item.section)}
                  className="hover:text-orange transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p className=" text-center  mx-auto mt-20 mb-12 text-sm text-white">
        © 2025 Mufaddal | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
