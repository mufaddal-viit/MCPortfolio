import { GiHamburgerMenu } from "react-icons/gi";

const NavbarToggler = ({ isOpen, onToggle }) => {
  return (
    <button
      className="text-2xl p-3 border border-orange/60 rounded-full text-white hover:border-orange hover:bg-orange/10 transition-colors"
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
