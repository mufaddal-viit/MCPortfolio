import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Sliding-underline nav. A single bar animates to whichever item is active —
 * driven by `activeKey`, so it tracks both clicks and scroll-spy updates.
 * Pure CSS transitions (no animation library).
 *
 * Props are kept compatible with the previous implementation so it stays a
 * drop-in: { items, color, onSelect, className, listClassName, activeKey }.
 */
export default function SparkleUnderlineNav({
  items,
  color = "rgb(var(--accent))",
  onSelect,
  className = "",
  listClassName = "flex gap-8",
  activeKey,
}) {
  const getItemKey = useCallback((item, index) => {
    if (typeof item === "string") return item;
    return item.section || item.label || `item-${index}`;
  }, []);

  const activeIndex = items.findIndex(
    (item, index) => getItemKey(item, index) === activeKey,
  );
  const resolvedIndex = activeIndex >= 0 ? activeIndex : 0;

  const navRef = useRef(null);
  const btnRefs = useRef([]);
  // Underline geometry (left + width) measured from the active button.
  const [bar, setBar] = useState({ left: 0, width: 0, ready: false });

  const measure = useCallback(() => {
    const nav = navRef.current;
    const btn = btnRefs.current[resolvedIndex];
    if (!nav || !btn) return;

    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setBar({
      left: btnRect.left - navRect.left,
      width: btnRect.width,
      ready: true,
    });
  }, [resolvedIndex]);

  // Re-measure when the active item changes.
  useLayoutEffect(() => {
    measure();
  }, [measure]);

  // Re-measure on resize / font load so the bar stays aligned.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handle = () => measure();
    window.addEventListener("resize", handle);

    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(handle) : null;
    if (observer) observer.observe(nav);

    // Fonts can shift button widths after first paint.
    if (document.fonts?.ready) {
      document.fonts.ready.then(handle).catch(() => {});
    }

    return () => {
      window.removeEventListener("resize", handle);
      if (observer) observer.disconnect();
    };
  }, [measure]);

  const onClick = (i, item) => {
    if (onSelect) onSelect(item, i);
  };

  return (
    <nav className={`underline-nav ${className}`.trim()} ref={navRef}>
      <ul className={listClassName}>
        {items.map((item, i) => {
          const label = typeof item === "string" ? item : item.label;
          const key = getItemKey(item, i);
          const isActive = i === resolvedIndex;
          return (
            <li key={key}>
              <button
                type="button"
                ref={(el) => (btnRefs.current[i] = el)}
                onClick={() => onClick(i, item)}
                aria-current={isActive ? "true" : undefined}
                className={`focus-ring rounded-md transition-colors duration-200 ${
                  isActive ? "font-semibold text-accent" : "hover:text-accent"
                }`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>

      <span
        aria-hidden="true"
        className="underline-bar"
        style={{
          background: color,
          transform: `translateX(${bar.left}px)`,
          width: `${bar.width}px`,
          opacity: bar.ready ? 1 : 0,
        }}
      />

      <style>{`
        .underline-nav {
          position: relative;
        }
        .underline-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .underline-nav button {
          border: 0;
          background: transparent;
          cursor: pointer;
          padding: 0;
          color: inherit;
          font: inherit;
        }
        .underline-bar {
          position: absolute;
          left: 0;
          top: calc(100% + 10px);
          height: 3px;
          border-radius: 999px;
          pointer-events: none;
          transition:
            transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            width 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.2s ease;
          will-change: transform, width;
        }
        @media (max-width: 1023px) {
          .underline-bar {
            display: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .underline-bar {
            transition: opacity 0.2s ease;
          }
        }
      `}</style>
    </nav>
  );
}
