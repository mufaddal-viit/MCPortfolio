import ContactForm from "./ContactForm";
import ContactIntro from "./ContactIntro";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <ContactIntro />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
