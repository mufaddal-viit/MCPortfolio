import { useEffect, useState } from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import { Particles } from "@/components/ui/particles";

const getIsDarkTheme = () =>
  typeof document !== "undefined" &&
  document.documentElement.classList.contains("dark");

const HeroMain = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(getIsDarkTheme);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsDarkTheme(root.classList.contains("dark"));

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-20 pt-40 pb-16 relative overflow-hidden">
      <Particles
        className={`absolute inset-0 z-0 ${isDarkTheme ? "opacity-70" : "opacity-60"}`}
        quantity={150}
        size={1}
        color={isDarkTheme ? "#DFD0B8" : "#222831"}
      />

      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative z-10 pl-10 pr-20">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
