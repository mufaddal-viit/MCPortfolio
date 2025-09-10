const NavbarLogo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <h1
        className="text-white  text-2xl sm:hidden md:block hover:text-cyan cursor-pointer"
        onClick={scrollToTop}
      >
        Mufaddal Calcuttawala
      </h1>
      <h1
        className="text-white font-special font-extrabold text-4xl md:hidden sm:block hover:text-cyan cursor-pointer"
        onClick={scrollToTop}
      >
        MC
      </h1>
    </div>
  );
};

export default NavbarLogo;
