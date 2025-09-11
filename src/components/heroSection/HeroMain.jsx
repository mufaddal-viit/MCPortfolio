import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className=" mt-20 pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative pl-10 pr-20">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
