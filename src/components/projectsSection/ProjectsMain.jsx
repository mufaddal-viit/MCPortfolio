import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Food Ordering App",
    year: "",
    align: "left",
    image: "/images/FoodOrder.png", 
    link: "https://cafe-menu-ya1n.onrender.com/cafe-central",
  },
  {
    name: "Recipe Finder",
    year: "",
    align: "right",
    image: "/images/RecipeFinder.png",
    link: "https://mufaddal-viit.github.io/FoodApp/",
  },
  {
    name: "Car Rental Management",
    year: "",
    align: "left",
    image: "/images/carrental.png",
    link: "https://github.com/mufaddal-viit/Car-Autorent",
  },
  {
    name: "Ecommerse Website",
    year: "",
    align: "right",
    image: "/images/MFEbazaar.png",
    link: "https://mufaddal-viit.github.io/eBazaar",
  },
  {
    name: "Ball Race game",
    year: "",
    align: "left",
    image: "/images/ballrace.png",
    link: "https://ball-race.netlify.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 ">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
