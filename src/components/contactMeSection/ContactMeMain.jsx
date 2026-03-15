import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeMain = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <h2 className="mb-10 text-center text-6xl font-bold text-accent">
          Contact Me
        </h2>
        <div className="flex justify-between gap-24 rounded-2xl bg-surface px-8 py-8 lg:flex-row sm:flex-col">
          <div
            className="relative"
            onMouseEnter={() => setIsTooltipOpen(true)}
            onMouseLeave={() => setIsTooltipOpen(false)}
            onFocus={() => setIsTooltipOpen(true)}
            onBlur={() => setIsTooltipOpen(false)}
          >
            <ContactMeLeft />
            {isTooltipOpen ? (
              <div className="pointer-events-none absolute left-1/2 top-0 z-10 w-max max-w-[260px] -translate-x-1/2 -translate-y-[calc(100%+12px)] rounded-lg bg-tooltip-bg/90 px-3 py-2 text-sm text-tooltip-fg shadow-lg shadow-overlay/25">
                The form uses EmailJS for sending emails.
              </div>
            ) : null}
          </div>
          <ContactMeRight />
        </div>
      </motion.div>
      <div className="mt-14 h-1 w-full bg-surface-2 lg:block sm:hidden"></div>
    </div>
  );
};

export default ContactMeMain;
