import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to={"about"}
        >
          <p className="text-3xl text-white mt-4 hover:text-orange transition-all duration-500 cursor-pointer  ">
            Mufaddal Calcuttawala
          </p>
        </Link>
        <ul className="flex gap-4 text-white text-xl mt-4">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-orange transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <p className=" text-center  mx-auto mt-20 mb-12 text-sm text-white">
        © 2025 Mufaddal | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
