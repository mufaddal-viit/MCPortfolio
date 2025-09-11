import { FaHtml5, FaNode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
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
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
