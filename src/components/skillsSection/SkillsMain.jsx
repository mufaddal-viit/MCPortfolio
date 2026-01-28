import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { KineticScroll } from "../KineticScroll";
const SkillsMain = () => {
  return (
    <div id="skills">
      {/* <KineticScroll /> */}
      <div className="max-w-[1200px]  mx-auto min-h-[500px] relative overflow-hidden">
          {/* My skills */}
          <SkillsText />
          {/* skills on bigger screens */}
          <AllSkills />
          {/* skills on smaller screens */}
          {/* <AllSkillsSM /> */}
      </div>
      
    </div>
  );
};

export default SkillsMain;
