import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
// import NavbarSocial from "./NavbarSocial";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(getInitialSection);
  const closeMobileMenu = () => setMenuOpen(false);
  const toggleMobileMenu = () => setMenuOpen((isOpen) => !isOpen);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleDesktopChange = (event) => {
      if (event.matches) {
        closeMobileMenu();
      }
    };

    desktopMediaQuery.addEventListener("change", handleDesktopChange);
    document.addEventListener("keydown", handleEscape);

    return () => {
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30">
      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-10 bg-overlay/45 backdrop-blur-[2px] lg:hidden"
          onClick={closeMobileMenu}
          aria-label="Close mobile navigation"
        />
      ) : null}

      <div className="relative z-20 mx-auto max-w-[1300px] sm:px-4">
        <div className="relative mt-3 flex items-center gap-3 rounded-full border border-default/35 bg-surface/55 px-3 py-3 backdrop-blur-xl shadow-lg shadow-overlay/20 sm:px-4 md:px-6 lg:grid lg:grid-cols-[auto,1fr,auto] lg:gap-4">
          <NavbarLogo onHomeSelect={() => setActiveSection("home")} />
          {/* <div className="flex-1 flex justify-center lg:hidden">
            <NavbarSocial className="pt-0" />
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <NavbarLinks
              activeSection={activeSection}
              onNavigate={setActiveSection}
            />
          </div>
          <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:justify-end">
            <NavbarBtn />
            <div className="flex lg:hidden">
              <NavbarToggler
                isOpen={menuOpen}
                onToggle={toggleMobileMenu}
              />
            </div>
          </div>
          {menuOpen ? (
            <div
              id="mobile-navigation"
              className="absolute left-0 top-full z-30 mt-3 flex w-full justify-center lg:hidden"
            >
              <NavbarLinks
                activeSection={activeSection}
                onItemSelect={closeMobileMenu}
                onNavigate={setActiveSection}
              />
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
