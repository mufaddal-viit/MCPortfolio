import CodingStandard from "./codingStandard";
import SectionLayout from "../common/SectionLayout";
import SectionHeading from "../common/SectionHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

const CodingStandardMain = () => {
  return (
    <SectionLayout id="coding-standards">
      <SectionHeadingMotion>
        <SectionHeading
          title="Engineering Standards"
          description="I follow a clear engineering baseline for architecture, review, security, testing, and documentation so the codebase stays easy to extend and dependable in production."
          descriptionClassName="max-w-2xl text-base leading-7 md:text-lg"
        />
      </SectionHeadingMotion>

      <SectionBodyMotion>
        <CodingStandard />
      </SectionBodyMotion>
    </SectionLayout>
  );
};

export default CodingStandardMain;
