import SingleExperience from "./SingleExperience";
import experienceSectionData from "./experienceData";
import experienceDisplayOrder from "./experienceOrder";
import SectionLayout from "../common/SectionLayout";
import SectioHeading from "../common/SectioHeading";
import {
  SectionBodyMotion,
  SectionHeadingMotion,
} from "../../framerMotion/sectionMotion";

const orderIndex = new Map(
  experienceDisplayOrder.map((experienceId, index) => [experienceId, index]),
);

const orderedExperiences = [...experienceSectionData.experiences].sort(
  (firstExperience, secondExperience) => {
    const firstIndex = orderIndex.get(firstExperience.id);
    const secondIndex = orderIndex.get(secondExperience.id);

    if (firstIndex === undefined && secondIndex === undefined) return 0;
    if (firstIndex === undefined) return 1;
    if (secondIndex === undefined) return -1;

    return firstIndex - secondIndex;
  },
);

const ExperienceMain = () => {
  return (
    <SectionLayout id="experience">
      <SectionHeadingMotion>
        <SectioHeading title="Experience" />
      </SectionHeadingMotion>
      <SectionBodyMotion className="space-y-16">
        {orderedExperiences.map((experience, index) => (
          <SingleExperience
            key={experience.id || `experience-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </SectionBodyMotion>
    </SectionLayout>
  );
};

export default ExperienceMain;
