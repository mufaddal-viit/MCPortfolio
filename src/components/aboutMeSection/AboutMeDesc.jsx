import { Link } from "react-scroll";

const AboutMeDesc = () => {
  return (
    <>
      <p className="w-full text-left text-secondary">
        Hi, I'm Mufaddal Calcuttawala, a passionate Web Developer with over 4
        years of experience crafting responsive, user-focused web applications.
        I specialize in Typescript, React.js, Node.js, Express, Nest.js and
        MongoDB, with a strong foundation in building full-stack applications
        that are scalable, secure, and performant.
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
        etc.). I'm well-versed in automating deployments, ensuring smooth
        release cycles, and maintaining application uptime and reliability.
        <br />
        {/* Now based in Dubai, I'm actively seeking exciting opportunities where I
        can contribute to building modern, intuitive, and high-performance web
        applications. I'm also committed to continuous learning, always staying
        up-to-date with the latest tools, trends, and best practices in web
        development. */}
      </p>
      <div className="mt-10 flex cursor-pointer items-center gap-2 self-start rounded-full border border-accent-2 px-4 py-2 text-lg text-primary transition-all duration-500 hover:bg-accent-2/15">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer transition-all duration-500 hover:text-accent"
        >
          My Projects
        </Link>
      </div>
    </>
  );
};

export default AboutMeDesc;
