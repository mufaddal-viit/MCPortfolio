import SingleSkill from "./SingleSkill";
import { FaHtml5, FaNode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGithub } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
// import mongo from "/images//icons8-mongodb-50.svg";
// const skills = [
//   {
//     skill: "HTML",
//     icon: FaHtml5,
//     color: "#E44D26", // HTML orange
//   },
//   {
//     skill: "CSS",
//     icon: FaCss3Alt,
//     color: "#1572B6", // CSS blue
//   },
//   {
//     skill: "JavaScript",
//     icon: IoLogoJavascript,
//     color: "#F7DF1E", // JS yellow
//   },
//   {
//     skill: "ReactJS",
//     icon: FaReact,
//     color: "#61DAFB", // React cyan/blue
//   },
//   {
//     skill: "Redux",
//     icon: SiRedux,
//     color: "#764ABC", // Redux purple
//   },
//   {
//     skill: "TailwindCSS",
//     icon: RiTailwindCssFill,
//     color: "#38BDF8", // Tailwind blue
//   },
//   {
//     skill: "Node js",
//     icon: FaNode,
//     color: "#339933", // Node green
//   },
//   {
//     skill: "Express js",
//     icon: FaNode, // Ideally you'd use a separate Express icon or SVG
//     color: "#000000", // Express is usually shown in black/monochrome
//   },
//   {
//     skill: "Github",
//     icon: FaGithub,
//     color: "#181717", // GitHub black
//   },
//   {
//     skill: "MySQL",
//     icon: FaDatabase,
//     color: "#00758F", // MySQL blue
//   },

// ];

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
    skill: "Node js",
    icon: FaNode,
    color: "nodejs",
  },
  {
    skill: "Express js",
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
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
                color={item.color}
              />
            </motion.div>
          );
        })}
        <motion.div
          variants={fadeIn("up", `0.${9}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          // key={index}
        >
          <SingleSkill
            imgSvg={
              <img
                src="/images//icons8-mongodb-50.svg"
                alt="MongoDB"
                className="w-12 h-12"
              />
            }
            text="MongoDB"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AllSkills;
