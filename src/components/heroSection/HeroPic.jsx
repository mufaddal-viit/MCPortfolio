import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center w-[340px] h-[380px] md:w-[420px] md:h-[480px] overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[85%] w-[85%] rounded-full bg-cyan/25 blur-3xl" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <PiHexagonThin className="w-[190%] h-[190%] text-cyan/95 mix-blend-screen drop-shadow-[0_0_40px_rgba(21,209,233,0.95)] animate-[spin_28s_linear_infinite]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <PiHexagonThin className="w-[150%] h-[150%] text-orange/80 mix-blend-screen drop-shadow-[0_0_28px_rgba(251,151,24,0.7)] animate-[spin_20s_linear_reverse_infinite]" />
        </div>
        <div className="relative z-10 rounded-[80px] overflow-hidden ring-2 ring-cyan/80 shadow-[0_0_50px_rgba(21,209,233,0.55)]">
          <img
            src="/images/myself.jpeg"
            alt="Mufaddal Calcuttawala"
            className="h-[280px] w-[240px] md:h-[340px] md:w-[290px] object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
