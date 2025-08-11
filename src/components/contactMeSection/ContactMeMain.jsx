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

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-6xl text-cyan mb-10 text-center font-bold">
          Contact Me
        </h2>
        <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
          <ContactMeLeft />
          <ContactMeRight />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMeMain;
