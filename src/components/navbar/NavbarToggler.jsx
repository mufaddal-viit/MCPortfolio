import { GiHamburgerMenu } from "react-icons/gi";

const NavbarToggler = ({ isOpen, onToggle }) => {
  return (
    <button
      className="focus-ring rounded-full border border-default/60 p-3 text-2xl text-primary transition-colors hover:border-accent-2 hover:bg-accent-2/10"
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
    >
      <GiHamburgerMenu
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
      />
    </button>
  );
};

export default NavbarToggler;
