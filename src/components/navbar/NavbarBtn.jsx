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
      className="group px-3 py-2 sm:px-4 rounded-full text-sm sm:text-base md:text-lg font-bold font-body text-white border-cyan/70 border flex items-center gap-2 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-[1.03] hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight className="animate-[spin_1.5s_linear_infinite] transition-transform" />
      </div>
    </button>
  );
};

export default NavbarBtn;
