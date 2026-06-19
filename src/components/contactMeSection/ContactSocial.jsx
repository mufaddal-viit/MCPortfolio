import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-6">
      <SingleContactSocial
        link="https://www.linkedin.com/in/mufaddal-calcuttawala"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/mufaddal-viit"
        Icon={FiGithub}
      />
    </div>
  );
};

export default ContactSocial;
