import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const SkillsText = () => {
  return (
    <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          
    <div className="flex flex-col items-center mt-[100px] ">
      <h2 className="text-6xl text-cyan font-bold">My Skills</h2>
      {/* <p className="text-lg text-center">
        I not only work with these technologies but excellent in using them with
        best practices to deliver high-quality results, I have been working with
        all these skills to build my portfolio projects
      </p> */}
    </div>
    {/* <SkillsText /> */}
        </motion.div>
  );
};

export default SkillsText;
