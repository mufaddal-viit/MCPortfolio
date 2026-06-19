import AllSkills from "./AllSkills";
import SectionLayout from "../common/SectionLayout";
import SectionHeading from "../common/SectionHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

const SkillsMain = () => {
  return (
    <SectionLayout id="skills">
      <SectionHeadingMotion>
        <SectionHeading
          eyebrow="Tech Stack"
          title="My Skills"
          description="The tools and technologies I reach for to build fast, reliable products."
        />
      </SectionHeadingMotion>
      <SectionBodyMotion className="relative">
        <AllSkills />
      </SectionBodyMotion>
    </SectionLayout>
  );
};

export default SkillsMain;
