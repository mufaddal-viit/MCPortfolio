import { useId, useMemo } from "react";
import styles from "./KineticScroll.module.css";

export function KineticScroll({
  introTitle = "You can scroll",
  introDescription = "Go on and see what you can do.",
  stickyLabel = "Skills Include",
  items = [
    "clone.",
    "branch.",
    "commit.",
    "push.",
    "break.",
    "learn.",
    "debug.",
    "refactor.",
    "optimize.",
    "deploy.",
    "monitor.",
    "scale.",
    "solve.",
    "ship.",
    "repeat.",
  ],
  outroTitleLines = ["Done.", "Merged."],
  outroDescription = "Until the next idea.",

  /** Layout */
  maxWidth = 1024,
  containerPadding = 16,

  /** Scrolling behavior (scoped to this section) */
  snapType = "proximity", // "mandatory" | "proximity"
  smoothScroll = true,

  /** Visuals */
  showBackground = true,
  backgroundMode = "local", // "local" | "fixed"
  dotColor = "rgba(0,0,0,0.15)",
  dotSpacing = 24,
  dotSize = 1.5,
  mask = true,

  className = "",
  style,
  "aria-label": ariaLabel = "Kinetic scroll section",
}) {
  const uid = useId();
  const count = items?.length ?? 0;

  const rootStyle = useMemo(
    () => ({
      ["--ks-max-width"]: `${maxWidth}px`,
      ["--ks-container-padding"]: `${containerPadding}px`,
      ["--ks-count"]: count || 1,
      ["--ks-end-hue"]: 360,
      ["--ks-scroll-snap-type"]: snapType,
      ["--ks-scroll-behavior"]: smoothScroll ? "smooth" : "auto",
      ["--ks-dot-color"]: dotColor,
      ["--ks-dot-spacing"]: `${dotSpacing}px`,
      ["--ks-dot-size"]: `${dotSize}px`,
      ...style,
    }),
    [
      maxWidth,
      containerPadding,
      count,
      snapType,
      smoothScroll,
      dotColor,
      dotSpacing,
      dotSize,
      style,
    ]
  );

  return (
    <section
      className={[styles.section, className].filter(Boolean).join(" ")}
      style={rootStyle}
      aria-label={ariaLabel}
      data-bg={showBackground ? "on" : "off"}
      data-bg-mode={backgroundMode}
      data-mask={mask ? "on" : "off"}
    >
      {/* Scroll container is scoped to this section */}
      <div className={styles.scroller}>
        <div className={styles.container}>
          <section className={styles.listContainer} aria-labelledby={`${uid}-label`}>
            <p id={`${uid}-label`} className={styles.listText}>
              {stickyLabel}
            </p>

            <ul className={styles.list}>
              {items.map((item, i) => (
                <li
                  key={`${uid}-${i}-${String(item)}`}
                  className={styles.listItem}
                  style={{ ["--ks-i"]: i }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
