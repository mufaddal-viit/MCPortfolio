import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10 font-bold">About Me</h2>
      <p>
        Hi, I’m Mufaddal Calcuttawala, a passionate Web Developer with over 5
        years of experience crafting responsive, user-focused web applications.
        I specialize in JavaScript, React.js, Node.js, Express, and MongoDB,
        with a strong foundation in building full-stack applications that are
        scalable, secure, and performant.
        <br />
        During my time at PwC India, I worked on a variety of projects for
        international clients, gaining valuable experience in agile development,
        cross-functional collaboration, and delivering high-quality features on
        time. I regularly engaged with stakeholders to translate business needs
        into technical solutions, ensuring efficient and timely delivery.
        <br />
        In addition to application development, I have experience in DevOps
        practices, including setting up and managing CI/CD pipelines using
        GitHub Actions, and deploying applications on AWS (EC2, S3, Lambda,
        etc.). I’m well-versed in automating deployments, ensuring smooth
        release cycles, and maintaining application uptime and reliability.
        <br />
        Now based in Dubai, I’m actively seeking exciting opportunities where I
        can contribute to building modern, intuitive, and high-performance web
        applications. I’m also committed to continuous learning, always staying
        up-to-date with the latest tools, trends, and best practices in web
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
