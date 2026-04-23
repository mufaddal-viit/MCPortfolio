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
      className="flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center w-[320px] h-[360px] md:w-[400px] md:h-[460px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[85%] w-[85%] rounded-full bg-accent/25 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <PiHexagonThin className="h-[190%] w-[190%] animate-[spin_28s_linear_infinite] text-accent/95 mix-blend-screen drop-shadow-[0_0_40px_rgb(var(--glow-primary)/0.95)]" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <PiHexagonThin className="h-[150%] w-[150%] animate-[spin_20s_linear_reverse_infinite] text-accent-2/80 mix-blend-screen drop-shadow-[0_0_28px_rgb(var(--glow-secondary)/0.7)]" />
        </div>
        <div className="relative z-10 overflow-hidden rounded-[80px] ring-2 ring-accent/80 shadow-[0_0_50px_rgb(var(--glow-primary)/0.55)]">
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
