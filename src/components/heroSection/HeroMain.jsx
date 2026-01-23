import HeroText from "./HeroText";
import HeroPic from "./HeroPic";import { Particles } from "@/components/ui/particles";
const HeroMain = () => {
  return (
    <>
      <div className="mt-20 pt-40 pb-16 relative overflow-hidden">
        <Particles
          className="absolute inset-0 z-0 opacity-60 dark:hidden"
          quantity={90}
          size={3}
          color="#222831"
          
        />
        <Particles
          className="absolute inset-0 z-0 opacity-70 hidden dark:block"
          quantity={90}
          size={3}
          color="#DFD0B8"
        />
        <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative z-10 pl-10 pr-20">
          <HeroText />
          <HeroPic />
        </div>
      </div>
    </>
  );
};

export default HeroMain;
