import AboutMeDesc from "./AboutMeDesc";
import SectionLayout from "../common/SectionLayout";
import SectionHeading from "../common/SectionHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

const AboutMeMain = () => {
  return (
    <SectionLayout id="about">
      <SectionHeadingMotion>
        <SectionHeading
          eyebrow="Who I Am"
          title="About Me"
          description="A quick look at my background, what I build, and how I work."
        />
      </SectionHeadingMotion>
      <SectionBodyMotion className="mt-12">
        <AboutMeDesc />
      </SectionBodyMotion>
    </SectionLayout>
  );
};

export default AboutMeMain;
