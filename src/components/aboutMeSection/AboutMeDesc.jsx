import { Link } from "react-scroll";
import aboutParagraphs from "./aboutContent";

const AboutMeDesc = () => {
  return (
    <div className="flex w-full flex-col items-start gap-5 text-left">
      {aboutParagraphs.map((paragraph, index) => (
        <p key={index} className="max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
          {paragraph}
        </p>
      ))}

      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        tabIndex={0}
        className="focus-ring mt-6 inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-accent-2 px-5 py-2.5 text-base font-semibold text-primary transition-all duration-300 hover:bg-accent-2/15 hover:text-accent"
      >
        My Projects
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
};

export default AboutMeDesc;
