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
    <div className="w-full max-w-md">
      <div className="flex w-full items-center gap-4 rounded-full border border-default/25 bg-surface/70 px-5 py-4 text-left shadow-[0_20px_60px_rgb(var(--overlay)/0.12)] backdrop-blur-xl">
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
    typeof window !== "undefined" &&
    window.matchMedia(MOBILE_MEDIA_QUERY).matches
      ? MOBILE_PARTICLE_QUANTITY
      : DESKTOP_PARTICLE_QUANTITY,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const syncParticleQuantity = () => {
      setParticleQuantity(
        mediaQuery.matches
          ? MOBILE_PARTICLE_QUANTITY
          : DESKTOP_PARTICLE_QUANTITY,
      );
    };

    syncParticleQuantity();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncParticleQuantity);
      return () =>
        mediaQuery.removeEventListener("change", syncParticleQuantity);
    }

    mediaQuery.addListener(syncParticleQuantity);
    return () => mediaQuery.removeListener(syncParticleQuantity);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
      <HeroGradient />

      <Particles
        className="absolute inset-0 z-[1] opacity-70"
        quantity={particleQuantity}
        size={1}
        color="--particle"
        refresh={resolvedTheme}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-1">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-16 ">
          <div className="flex flex-col items-center gap-12 md:items-start ">
            <HeroText />
          </div>
          <div className="flex flex-col items-center gap-6 md:items-start ">
            <Suspense fallback={<HeroSearchPaletteFallback />}>
              <HeroSearchPalette />
            </Suspense>
            <HeroPic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
