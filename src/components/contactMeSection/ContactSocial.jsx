import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-10">
      <SingleContactSocial
        link="http://www.linkedin.com/in/mufaddal-calcuttawala"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/mufaddal-viit"
        Icon={FiGithub}
      />
      {/* <SingleContactSocial link="#" Icon={FaInstagram} /> */}
    </div>
  );
};

export default ContactSocial;
