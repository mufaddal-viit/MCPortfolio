import SingleSkill from "./SingleSkill";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiTypescript as IoLogoTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { skill: "HTML", icon: FaHtml5, color: "html" },
  { skill: "CSS", icon: FaCss3Alt, color: "css" },
  { skill: "JavaScript", icon: IoLogoJavascript, color: "javascript" },
  { skill: "Typescript", icon: IoLogoTypescript, color: "typescript" },
  { skill: "ReactJS", icon: FaReact, color: "react" },
  { skill: "Redux", icon: SiRedux, color: "redux" },
  { skill: "TailwindCSS", icon: RiTailwindCssFill, color: "tailwind" },
  { skill: "Node Js", icon: FaNode, color: "nodejs" },
  { skill: "Express Js", icon: FaNode, color: "express" },
  { skill: "Github", icon: FaGithub, color: "github" },
  { skill: "MySQL", icon: FaDatabase, color: "mysql" },
  { skill: "MongoDB", image: "/images/icons8-mongodb-50.svg", color: "mongodb" },
];

const AllSkills = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto grid max-w-content grid-cols-2 place-items-center gap-x-6 gap-y-10 px-2 sm:grid-cols-3 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-10">
        {skills.map((item) => (
          <SingleSkill
            key={item.skill}
            text={item.skill}
            color={item.color}
            imgSvg={
              item.image ? (
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 sm:h-14 sm:w-14"
                />
              ) : (
                <item.icon className="text-5xl sm:text-6xl" />
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
