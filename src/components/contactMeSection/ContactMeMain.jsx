import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { useState } from "react";
import SectionLayout from "../common/SectionLayout";
import SectioHeading from "../common/SectioHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

const ContactMeMain = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <SectionLayout id="contact">
      <SectionHeadingMotion>
        <SectioHeading title="Contact Me" />
      </SectionHeadingMotion>
      <SectionBodyMotion>
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
        <div className="mt-14 h-1 w-full bg-surface-2 lg:block sm:hidden"></div>
      </SectionBodyMotion>
    </SectionLayout>
  );
};

export default ContactMeMain;
