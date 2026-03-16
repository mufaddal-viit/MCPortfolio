import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroSearchPalette from "./HeroSearchPalette";
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

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row md:gap-0 md:px-10 lg:pr-20">
        <HeroText />
        <div className="flex w-full max-w-md flex-col items-center gap-6 md:w-auto md:max-w-none">
          <HeroSearchPalette />
          <HeroPic />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
