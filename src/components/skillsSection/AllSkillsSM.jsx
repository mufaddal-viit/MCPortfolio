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
    <div className="sm:block lg:hidden px-4">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 my-12">
    {skills.map((item, index) => (
      <motion.div
        key={index}
        variants={fadeIn("up", 0.15 * index)} // staggered entrance looks nicer
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="
          group flex flex-col items-center justify-center
          aspect-square
          p-6 rounded-2xl
          border border-orange/20
          bg-gradient-to-b from-white/40 to-transparent
          hover:border-orange/40 hover:shadow-md
          transition-all duration-300
        "
      >
        <item.icon className="text-5xl sm:text-6xl text-orange mb-4 transition-transform group-hover:scale-110" />
        <p className="text-sm sm:text-base font-medium">{item.skill}</p>
      </motion.div>
    ))}
  </div>
</div>
  );
};

export default AllSkillsSM;
