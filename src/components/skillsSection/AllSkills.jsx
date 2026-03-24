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

const AllSkills = () => {
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
  ];

  return (
    <div className="relative py-16 md:py-20 lg:py-24">
      <div
        className="
          grid grid-cols-2 gap-6 px-5
          sm:grid-cols-3 sm:gap-8
          md:grid-cols-4 md:gap-10 md:px-8
          lg:hidden place-items-center
        "
      >
        {skills.map((item) => (
          <div key={item.skill} className="w-full max-w-[140px] sm:max-w-[160px]">
            <SingleSkill
              text={item.skill}
              imgSvg={<item.icon className="text-5xl sm:text-6xl" />}
              color={item.color}
            />
          </div>
        ))}

        <div className="w-full max-w-[140px] sm:max-w-[160px]">
          <SingleSkill
            imgSvg={
              <img
                src="/images/icons8-mongodb-50.svg"
                alt="MongoDB"
                className="w-14 h-14 sm:w-16 sm:h-16"
              />
            }
            text="MongoDB"
            color="mongodb"
          />
        </div>
      </div>

      <div
        className="
          hidden lg:grid lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7
          gap-8 xl:gap-10 2xl:gap-12
          max-w-7xl mx-auto px-6
          place-items-center
        "
      >
        {skills.map((item) => (
          <div key={item.skill} className="w-full max-w-[180px]">
            <SingleSkill
              text={item.skill}
              imgSvg={<item.icon className="text-6xl xl:text-7xl" />}
              color={item.color}
            />
          </div>
        ))}

        <div className="w-full max-w-[180px]">
          <SingleSkill
            imgSvg={
              <img
                src="/images/icons8-mongodb-50.svg"
                alt="MongoDB"
                className="w-16 h-16 xl:w-20 xl:h-20"
              />
            }
            text="MongoDB"
            color="mongodb"
          />
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
