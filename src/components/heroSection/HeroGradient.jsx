const glowBlobs = [
  // Added custom durations [animation-duration:Xs] to make them feel more organic
  "left-[-4rem] top-8 h-44 w-44 bg-glow-primary/35 sm:h-56 sm:w-56 lg:h-72 lg:w-72 [animation-duration:7s]",
  "left-[8%] top-[18%] h-36 w-36 bg-glow-secondary/25 sm:h-48 sm:w-48 lg:h-64 lg:w-64 [animation-delay:900ms] [animation-duration:9s]",
  "right-[-5rem] top-0 h-48 w-48 bg-glow-secondary/30 sm:h-64 sm:w-64 lg:h-80 lg:w-80 [animation-duration:11s]",
  "right-[14%] top-[12%] h-40 w-40 bg-glow-primary/25 sm:h-52 sm:w-52 lg:h-72 lg:w-72 [animation-delay:1400ms] [animation-duration:8s]",
];

const HeroGradient = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {glowBlobs.map((blobClassName) => (
        <div
          key={blobClassName}
          // Changed 'animate-pulse' to 'animate-drift'
          className={`absolute rounded-full blur-3xl motion-safe:animate-drift ${blobClassName}`}
        />
      ))}
    </div>
  );
};
export default HeroGradient;
