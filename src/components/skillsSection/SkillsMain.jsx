import AllSkills from "./AllSkills";
import SectionLayout from "../common/SectionLayout";
import SectioHeading from "../common/SectioHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

const SkillsMain = () => {
  return (
    <SectionLayout id="skills">
      <SectionHeadingMotion>
        <SectioHeading title="My Skills" />
      </SectionHeadingMotion>
      <SectionBodyMotion className="relative min-h-[500px] overflow-hidden">
        {/* skills on bigger screens */}
        <AllSkills />
        {/* skills on smaller screens */}
        {/* <AllSkillsSM /> */}
      </SectionBodyMotion>
    </SectionLayout>
  );
};

export default SkillsMain;
