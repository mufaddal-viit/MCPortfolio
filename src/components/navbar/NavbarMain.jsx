import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
// import NavbarSocial from "./NavbarSocial";
import { useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "../../state/menuSlice";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

const HOME_PATH = "/";

const normalizePath = (path) => {
  if (!path) return HOME_PATH;
  const trimmedPath = path.replace(/\/+$/, "");
  return trimmedPath || HOME_PATH;
};

const getInitialSection = () => {
  if (typeof window === "undefined") return "home";
  if (normalizePath(window.location.pathname) !== HOME_PATH) return "home";
  return "home";
};

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState(getInitialSection);
  const mobileMenuRef = useRef(null);
  const togglerRef = useRef(null);
  // console.log(menuOpen);
  const togglestate = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event) => {
      const target = event.target;

      if (mobileMenuRef.current?.contains(target)) return;
      if (togglerRef.current?.contains(target)) return;

      dispatch(closeMenu());
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        dispatch(closeMenu());
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch, menuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-[1300px] sm:px-4">
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
            <div ref={togglerRef} className="flex lg:hidden">
              <NavbarToggler />
            </div>
          </div>
          <div
            ref={mobileMenuRef}
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
