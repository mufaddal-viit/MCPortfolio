import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="calcutta53.mufaddal@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+971556024553" Image={FiPhone} />
      <SingleInfo text="Dubai, UAE" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
