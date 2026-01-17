import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useMemo } from "react";
import particlesConfig from "./particles.json";

export default function ParticleBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const colors = useMemo(() => {
    if (typeof window === "undefined") {
      return {
        particle: "#dfd0b8",
        link: "#948979",
      };
    }
    const root = getComputedStyle(document.documentElement);
    const getToken = (name, fallback) => {
      const value = root.getPropertyValue(name).trim();
      return value ? `rgb(${value})` : fallback;
    };
    return {
      particle: getToken("--color-foreground", "#dfd0b8"),
      link: getToken("--color-accent", "#948979"),
    };
  }, []);

  const options = useMemo(() => {
    const base = particlesConfig;

    return {
      ...base,
      fullScreen: { ...base.fullScreen, enable: true, zIndex: 0 },
      background: {
        ...base.background,
        color: { value: "transparent" },
        opacity: 0,
      },
      particles: {
        ...base.particles,
        number: {
          ...base.particles.number,
          value: 28,
        },
        color: {
          ...base.particles.color,
          value: colors.particle,
        },
        links: {
          ...base.particles.links,
          color: { value: colors.link },
          opacity: 0.35,
        },
        move: {
          ...base.particles.move,
          speed: 0.6,
        },
        size: {
          ...base.particles.size,
          value: { min: 1, max: 2 },
        },
        opacity: {
          ...base.particles.opacity,
          value: { min: 0.2, max: 0.6 },
        },
      },
    };
  }, [colors]);

  return (
    <Particles
      init={particlesInit}
      options={options}
      className="pointer-events-none"
    />
  );
}
