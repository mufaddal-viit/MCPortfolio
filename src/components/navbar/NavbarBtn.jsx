import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="group px-3 py-2 sm:px-4 rounded-full text-sm sm:text-base md:text-lg font-bold font-body text-white border-cyan/70 border flex items-center gap-2 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-[1.03] hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight className="group-hover:animate-[spin_1.5s_linear_infinite] transition-transform" />
      </div>
    </button>
  );
};

export default NavbarBtn;
