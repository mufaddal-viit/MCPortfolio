import { motion } from "framer-motion";
import CodingStandard from "./codingStandard";
import CodingStandardText from "./codingStandardText";
import { fadeIn } from "../../framerMotion/variants";

const CodingStandardMain = () => {
  return (
    <section
      id="coding-standards"
      className="mx-auto mt-[100px] max-w-[1200px] px-4"
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <CodingStandardText />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <CodingStandard />
      </motion.div>
    </section>
  );
};

export default CodingStandardMain;
