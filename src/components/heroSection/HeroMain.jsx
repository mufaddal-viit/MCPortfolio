import { lazy, Suspense, useEffect, useState } from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "@/theme/ThemeProvider";

const HeroSearchPalette = lazy(() => import("./HeroSearchPalette"));
const MOBILE_MEDIA_QUERY = "(max-width: 767px)";
const MOBILE_PARTICLE_QUANTITY = 80;
const DESKTOP_PARTICLE_QUANTITY = 150;

function HeroSearchPaletteFallback() {
  return (
    <div className="mx-auto mt-2 w-full max-w-md">
      <div className="flex w-full items-center gap-4 rounded-[1.75rem] border border-default/25 bg-surface/70 px-5 py-4 text-left shadow-[0_20px_60px_rgb(var(--overlay)/0.12)] backdrop-blur-xl">
        <div className="min-w-0 flex-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-secondary/75">
            Loading AI search...
          </p>
        </div>
      </div>
    </div>
  );
}

const HeroMain = () => {
  const { resolvedTheme } = useTheme();
  const [particleQuantity, setParticleQuantity] = useState(() =>
    typeof window !== "undefined" && window.matchMedia(MOBILE_MEDIA_QUERY).matches
      ? MOBILE_PARTICLE_QUANTITY
      : DESKTOP_PARTICLE_QUANTITY,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const syncParticleQuantity = () => {
      setParticleQuantity(
        mediaQuery.matches ? MOBILE_PARTICLE_QUANTITY : DESKTOP_PARTICLE_QUANTITY,
      );
    };

    syncParticleQuantity();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncParticleQuantity);
      return () => mediaQuery.removeEventListener("change", syncParticleQuantity);
    }

    mediaQuery.addListener(syncParticleQuantity);
    return () => mediaQuery.removeListener(syncParticleQuantity);
  }, []);

  return (
    <div className="relative overflow-hidden pt-40 pb-16">
      <HeroGradient />

      <Particles
        className="absolute inset-0 z-[1] opacity-70"
        quantity={particleQuantity}
        size={1}
        color="--particle"
        refresh={resolvedTheme}
      />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row md:gap-0 md:px-10 lg:pr-20">
        <HeroText />
        <div className="flex w-full max-w-md flex-col items-center gap-6 md:w-auto md:max-w-none">
          <Suspense fallback={<HeroSearchPaletteFallback />}>
            <HeroSearchPalette />
          </Suspense>
          <HeroPic />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
