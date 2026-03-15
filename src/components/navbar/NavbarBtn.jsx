import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { LuArrowDownRight } from "react-icons/lu";

const HOME_PATH = "/";
const CONTACT_SECTION = "contact";

const NavbarBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHireMe = () => {
    if (location.pathname !== HOME_PATH) {
      navigate(HOME_PATH, { state: { scrollTo: CONTACT_SECTION } });
      return;
    }

    scroller.scrollTo(CONTACT_SECTION, {
      smooth: true,
      duration: 500,
      offset: -120,
    });
  };

  return (
    <button
      type="button"
      onClick={handleHireMe}
      className="group flex cursor-pointer items-center gap-2 rounded-full border border-accent/70 bg-gradient-to-r from-accent-strong to-accent-2 px-3 py-2 font-body text-sm font-bold text-tooltip-fg transition-all duration-500 hover:scale-[1.03] hover:border-accent-2 hover:shadow-lg hover:shadow-[rgb(var(--glow-primary)/0.35)] sm:px-4 sm:text-base md:text-lg"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight className="animate-[spin_1.5s_linear_infinite] transition-transform" />
      </div>
    </button>
  );
};

export default NavbarBtn;
