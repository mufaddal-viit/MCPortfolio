import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { useState } from "react";
import SectionLayout from "../common/SectionLayout";
import SectionHeading from "../common/SectionHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

const ContactMeMain = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <SectionLayout id="contact">
      <SectionHeadingMotion>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Me"
          description="Have a project in mind or just want to say hello? Drop me a message."
        />
      </SectionHeadingMotion>
      <SectionBodyMotion>
        <div className="card flex flex-col justify-between gap-10 p-6 sm:p-8 lg:flex-row lg:gap-16 lg:p-10">
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
      </SectionBodyMotion>
    </SectionLayout>
  );
};

export default ContactMeMain;
