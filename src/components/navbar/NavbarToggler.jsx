import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      className="text-2xl p-3 border border-orange/60 rounded-full text-white hover:border-orange hover:bg-orange/10 transition-colors"
      onClick={setToggleMenu}
      aria-label="Toggle menu"
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
