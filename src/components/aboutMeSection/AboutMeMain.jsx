import AboutMeDesc from "./AboutMeDesc";
import SectionLayout from "../common/SectionLayout";
import SectioHeading from "../common/SectioHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

const AboutMeMain = () => {
  return (
    <SectionLayout id="about">
      <SectionHeadingMotion>
        <SectioHeading title="About Me" />
      </SectionHeadingMotion>
      <SectionBodyMotion>
        <div className="flex w-full flex-col items-start text-left">
          <AboutMeDesc />
        </div>
      </SectionBodyMotion>
    </SectionLayout>
  );
};

export default AboutMeMain;
