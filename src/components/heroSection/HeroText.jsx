import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { ReactTyped } from "react-typed";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase "
      >
        <ReactTyped
          strings={["Full Stack Developer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
        />
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-darkCyan font-bold uppercase"
      >
        Mufaddal <br className="sm:hidden md:block" />
        Calcuttawala
      </motion.h1>
      <motion.h1
        variants={fadeIn("down", 1.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-white font-bold uppercase text-center 
             sm:text-3xl md:text-3xl lg:text-4xl tracking-widest
              leading-relaxed font-arabic-display"
      >
        مفضل كلكتا
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate Developer <br /> with 5 years of experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
