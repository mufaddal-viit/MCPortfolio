// import ContactMeLeft from "./ContactMeLeft";
// import ContactMeRight from "./ContactMeRight";

// const ContactMeMain = () => {
//   return (
//     <div
//       id="contact"
//       className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
//     >
//       <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
//       <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
//         <ContactMeLeft />
//         <ContactMeRight />
//       </div>
//     </div>
//   );
// };

// export default ContactMeMain;

import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useState } from "react";

const ContactMeMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showTooltip = () => {
    setIsOpen(true);
    // Hide after 2 seconds (2000 ms)
    setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  };
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
        <h2 className="text-6xl text-cyan mb-10 text-center font-bold">
          Contact Me
        </h2>
        <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
          <div id="tooltip" onMouseEnter={showTooltip}>
            <ContactMeLeft />
          </div>
          <Tooltip anchorSelect="#tooltip" place="top" isOpen={isOpen}>
            The form uses EmailJS for sending emails.
          </Tooltip>
          <ContactMeRight />
        </div>
      </motion.div>
      <div className="w-full h-1 mt-14 bg-newcolor lg:block sm:hidden"></div>
    </div>
  );
};

export default ContactMeMain;
