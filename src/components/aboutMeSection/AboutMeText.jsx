import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10 font-bold">About Me</h2>
      <p>
        Hi, I’m Mufaddal Calcuttawala, a passionate Web Developer with over 3
        years of experience building responsive, user-centric web applications.
        I specialize in JavaScript, React.js, Java Spring Boot, and RESTful
        APIs, with a strong understanding of modern web technologies and best
        practices. During my time at PwC India, I had the opportunity to work on
        diverse projects for international clients, where I gained hands-on
        experience in agile development, delivering scalable solutions. Worked
        with StakeHolders to deliver features timely and efficiently I’m
        currently based in Dubai, actively exploring exciting opportunities
        where I can contribute to building modern, intuitive, and
        high-performance web applications. I’m also enthusiastic about
        continuous learning and staying updated with the latest trends in web
        development.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
