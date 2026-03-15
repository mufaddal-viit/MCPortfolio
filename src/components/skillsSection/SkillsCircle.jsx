import React from "react";
import { FcSettings } from "react-icons/fc";

const SkillsCircle = () => {
  return (
    <div className="absolute left-[50%] top-[50%] flex h-[200px] w-[200px] -translate-x-[50%] -translate-y-[50%] items-center justify-center overflow-hidden rounded-full border-2 border-accent-2">
      <img src="../../public/images/skills.avif" alt="my skills" />
    </div>
  );
};

export default SkillsCircle;
