import { FaHtml5, FaNode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    color: "html",
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    color: "css",
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    color: "javascript",
  },
  {
    skill: "ReactJS",
    icon: FaReact,
    color: "react",
  },
  {
    skill: "Redux",
    icon: SiRedux,
    color: "redux",
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    color: "tailwind",
  },
  {
    skill: "Node Js",
    icon: FaNode,
    color: "nodejs",
  },
  {
    skill: "Express Js",
    icon: FaNode, // Use custom SVG if available
    color: "express",
  },
  {
    skill: "Github",
    icon: FaGithub,
    color: "github",
  },
  {
    skill: "MySQL",
    icon: FaDatabase,
    color: "mysql",
  },
  {
    skill: "MongoDB",
    icon: FaDatabase,
    color: "mysql",
  },
];
const AllSkillsSM = () => {
  return (
    <div className="sm:block lg:hidden px-4">
      <div className="grid grid-cols-2 gap-6 my-12 sm:grid-cols-3">
        {skills.map((item, index) => (
          <div
            key={`${item.skill}-${index}`}
            className="
              group flex flex-col items-center justify-center
              aspect-square
              p-6 rounded-2xl
              border border-default/20
              bg-gradient-to-b from-surface/40 to-transparent
              hover:border-accent-2/40 hover:shadow-md
              transition-all duration-300
            "
          >
            <item.icon className="mb-4 text-5xl text-accent-2 transition-transform group-hover:scale-110 sm:text-6xl" />
            <p className="text-sm sm:text-base font-medium">{item.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkillsSM;
