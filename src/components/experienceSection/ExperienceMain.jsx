import ExperienceText from "./ExperienceText";
import SingleExperience from "./SingleExperience";
import experienceSectionData from "./experienceData";
import experienceDisplayOrder from "./experienceOrder";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <ExperienceText />
      </motion.div>
      <div className="space-y-16">
        {orderedExperiences.map((experience, index) => (
          <motion.div
            key={experience.id || `experience-${index}`}
            variants={fadeIn("down", 0.35 + index * 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <SingleExperience experience={experience} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceMain;
