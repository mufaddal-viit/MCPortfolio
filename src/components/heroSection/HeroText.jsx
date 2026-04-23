import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HERO_ROLE = "Full Stack Developer";
const TYPING_SPEED = 90;
const DELETING_SPEED = 45;
const HOLD_DELAY = 1200;
const RESET_DELAY = 250;

const HeroText = () => {
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && typedRole === HERO_ROLE) {
      const timerId = window.setTimeout(() => setIsDeleting(true), HOLD_DELAY);
      return () => window.clearTimeout(timerId);
    }

    if (isDeleting && typedRole.length === 0) {
      const timerId = window.setTimeout(
        () => setIsDeleting(false),
        RESET_DELAY,
      );
      return () => window.clearTimeout(timerId);
    }

    const timerId = window.setTimeout(
      () => {
        setTypedRole((current) =>
          isDeleting
            ? HERO_ROLE.slice(0, current.length - 1)
            : HERO_ROLE.slice(0, current.length + 1),
        );
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => window.clearTimeout(timerId);
  }, [typedRole, isDeleting]);

  return (
    <div className="flex flex-col gap-5 md:gap-12 text-center md:text-left">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl uppercase lg:text-2xl"
      >
        <span className="inline-flex min-w-[20ch] items-center justify-center md:justify-start">
          {typedRole}
          <span className="ml-1 animate-pulse">|</span>
        </span>
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-accent-strong font-bold uppercase text-4xl md:text-[2.8rem] lg:text-6xl"
      >
        Mufaddal <br className="hidden md:block" />
        Calcuttawala
      </motion.h1>

      <motion.h1
        variants={fadeIn("down", 1.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-primary font-bold uppercase text-3xl lg:text-4xl tracking-widest leading-relaxed font-arabic-display"
      >
        مفضل كلكتا
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg text-secondary"
      >
        Crafting high-performance, <br /> AI-powered SaaS web applications.
      </motion.p>
    </div>
  );
};

export default HeroText;
