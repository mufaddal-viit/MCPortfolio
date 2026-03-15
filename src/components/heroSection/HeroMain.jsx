import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "@/theme/ThemeProvider";

const HeroMain = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="relative overflow-hidden pt-40 pb-16">
      <HeroGradient />

      <Particles
        className="absolute inset-0 z-[1] opacity-70"
        quantity={150}
        size={1}
        color="--particle"
        refresh={resolvedTheme}
      />

      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative z-10 pl-10 pr-20">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
