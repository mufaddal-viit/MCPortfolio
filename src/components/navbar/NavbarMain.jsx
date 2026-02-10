import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import NavbarSocial from "./NavbarSocial";
import { useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const HOME_PATH = "/";
const NAV_SECTIONS = new Set(["home", "about", "skills", "experience", "projects"]);

const normalizePath = (path) => {
  if (!path) return HOME_PATH;
  const trimmedPath = path.replace(/\/+$/, "");
  return trimmedPath || HOME_PATH;
};

const getInitialSection = () => {
  if (typeof window === "undefined") return "home";
  if (normalizePath(window.location.pathname) !== HOME_PATH) return "home";

  const hashSection = (window.location.hash || "").replace(/^#/, "").trim();
  if (NAV_SECTIONS.has(hashSection)) return hashSection;
  return "home";
};

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState(getInitialSection);
  // console.log(menuOpen);
  const togglestate = () => {
    dispatch(toggleMenu());
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-[1300px] px-3 sm:px-4">
        <div className="relative mt-3 flex items-center gap-3 rounded-full border border-orange/40 px-3 py-3 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] sm:px-4 md:px-6 lg:grid lg:grid-cols-[auto,1fr,auto] lg:gap-4">
          <NavbarLogo onHomeSelect={() => setActiveSection("home")} />
          {/* <div className="flex-1 flex justify-center lg:hidden">
            <NavbarSocial className="pt-0" />
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <NavbarLinks
              togglestate={togglestate}
              activeSection={activeSection}
              onNavigate={setActiveSection}
            />
          </div>
          <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:justify-end">
            <NavbarBtn />
            <div className="flex lg:hidden">
              <NavbarToggler />
            </div>
          </div>
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 top-full z-30 w-full justify-center lg:hidden`}
          >
            <NavbarLinks
              togglestate={togglestate}
              activeSection={activeSection}
              onNavigate={setActiveSection}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
