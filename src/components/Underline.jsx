import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function SparkleUnderlineNav({
  items,
  color = "#00fffc",
  onSelect,
  className = "",
  listClassName = "flex gap-8",
  activeKey,
}) {
  const getItemKey = (item, index) => {
    if (typeof item === "string") return item;
    return item.section || item.label || `item-${index}`;
  };

  const resolveIndex = (key) => {
    if (!key) return -1;
    return items.findIndex((item, index) => getItemKey(item, index) === key);
  };

  const [activeIndex, setActiveIndex] = useState(() => {
    const index = resolveIndex(activeKey);
    return index >= 0 ? index : 0;
  });

  const navRef = useRef(null);
  const activeRef = useRef(null);
  const btnRefs = useRef([]);

  const createSVG = (el) => {
    el.innerHTML = `
      <svg viewBox="0 0 116 5" preserveAspectRatio="none" class="beam">
        <path d="M0.5 2.5L113 0.534929C114.099 0.515738 115 1.40113 115 2.5C115 3.59887 114.099 4.48426 113 4.46507L0.5 2.5Z" fill="url(#gradient-beam)"/>
        <defs>
          <linearGradient id="gradient-beam" x1="2" y1="2.5" x2="115" y2="2.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="${color}"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
        </defs>
      </svg>
      <div class="strike">
        <svg viewBox="0 0 114 12" preserveAspectRatio="none">
          <g fill="none" stroke="white" stroke-width="0.75" stroke-linecap="round">
            <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
            <path d="M113.5 6.5L0.5 6.5" />
            <path d="M113.5 6.5L0.5 6.5" />
          </g>
        </svg>
        <svg viewBox="0 0 114 12" preserveAspectRatio="none">
          <g fill="none" stroke="white" stroke-width="0.75" stroke-linecap="round">
            <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
            <path d="M113.5 6.5L0.5 6.5" />
            <path d="M113.5 6.5L0.5 6.5" />
          </g>
        </svg>
      </div>
    `;
  };

  const getOffsetLeft = (btn) => {
    const nav = navRef.current;
    const active = activeRef.current;
    if (!nav || !active) return 0;

    const b = btn.getBoundingClientRect();
    const n = nav.getBoundingClientRect();
    const w = active.offsetWidth;

    return b.left - n.left + (b.width - w) / 2;
  };

  useLayoutEffect(() => {
    const btn = btnRefs.current[activeIndex];
    if (!btn || !activeRef.current) return;

    gsap.set(activeRef.current, { x: getOffsetLeft(btn) });
    gsap.to(activeRef.current, { "--show": 1, duration: 0.15 });
  }, [activeIndex]);

  useEffect(() => {
    const nextIndex = resolveIndex(activeKey);
    if (nextIndex >= 0 && nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  }, [activeKey, items, activeIndex]);

  const onClick = (i, item) => {
    const nav = navRef.current;
    const active = activeRef.current;
    const oldBtn = btnRefs.current[activeIndex];
    const newBtn = btnRefs.current[i];
    if (i === activeIndex) {
      if (onSelect) onSelect(item, i);
      return;
    }
    if (!nav || !active || !oldBtn || !newBtn) return;

    const newX = getOffsetLeft(newBtn);
    const oldX = getOffsetLeft(oldBtn);
    const dir = i > activeIndex ? "after" : "before";
    const spacing = Math.abs(newX - oldX);

    nav.classList.add(dir);
    gsap.set(active, { rotateY: dir === "before" ? "180deg" : "0deg" });

    gsap.to(active, {
      keyframes: [
        {
          "--width": `${Math.min(spacing, nav.offsetWidth - 60)}px`,
          duration: 0.28,
          ease: "none",
          onStart: () => {
            createSVG(active);
            gsap.to(active, { "--opacity": 1, duration: 0.08 });
          },
        },
        {
          "--scaleX": "0",
          "--scaleY": ".25",
          "--width": "0px",
          duration: 0.28,
          ease: "none",
          onStart: () => {
            gsap.to(active, { "--mask": "40%", duration: 0.45 });
            gsap.to(active, { "--opacity": 0, delay: 0.35, duration: 0.2 });
          },
          onComplete: () => {
            active.innerHTML = "";
            nav.classList.remove("before", "after");
            gsap.set(active, { x: newX, "--show": "1", "--scaleX": "1", "--scaleY": "1", "--mask": "0%" });
            setActiveIndex(i);
          },
        },
      ],
    });

    gsap.to(active, {
      x: newX,
      "--strikeX": "-50%",
      duration: 0.56,
      ease: "none",
    });

    if (onSelect) onSelect(item, i);
  };

  return (
    <>
      <style>{`
        .sparkle-nav {
          position: relative;
        }
        .sparkle-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .sparkle-nav button {
          border: 0;
          background: transparent;
          cursor: pointer;
          padding: 0;
          color: inherit;
          font: inherit;
          transition: text-shadow .25s;
        }
        .sparkle-nav li:not(.active):hover button {
          text-shadow: 0 0 10px ${color}, 0 0 20px ${color};
        }
        /* Underline base */
        .sparkle-active {
          --scaleX: 1;
          --scaleY: 1;
          --show: 0;
          --opacity: 0;
          --width: 0px;
          --strikeX: 0%;
          --mask: 0%;
          position: absolute;
          left: 0;
          top: calc(100% + 10px);
          height: 3px;
          width: 36px;
          border-radius: 2px;
          background: ${color};
          opacity: var(--show);
          transform-origin: center;
          pointer-events: none;
        }

        .sparkle-active > svg,
        .sparkle-active .strike {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          opacity: var(--opacity);
          width: var(--width);
          mix-blend-mode: multiply;
        }

        .sparkle-active > svg {
          height: 5px;
          filter: blur(.5px)
            drop-shadow(2px 0px 8px ${color}40)
            drop-shadow(1px 0px 2px ${color}80)
            drop-shadow(0 0 3px ${color}40)
            drop-shadow(8px 0 16px ${color}50);
        }

        .sparkle-active .strike {
          padding: 24px 0;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent calc(0% + var(--mask)),
            black calc(15% + var(--mask)),
            black 80%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent calc(0% + var(--mask)),
            black calc(15% + var(--mask)),
            black 80%,
            transparent
          );
        }

        .sparkle-active .strike svg {
          height: 12px;
          width: calc(var(--width) * 2);
          transform: translate(var(--strikeX), 30%)
            scale(var(--scaleX), var(--scaleY));
          overflow: visible;
          display: block;
        }

        .sparkle-active .strike svg:last-child {
          transform: translate(var(--strikeX), -30%) scale(-1);
        }

        .sparkle-active .strike svg g path:nth-child(2) { filter: blur(2px); }
        .sparkle-active .strike svg g path:nth-child(3) { filter: blur(4px); }

        .sparkle-nav.before .sparkle-active { transform: rotateY(180deg); }

        @media (max-width: 1023px) {
          .sparkle-active {
            display: none;
          }
        }
      `}</style>

      <nav className={`sparkle-nav ${className}`.trim()} ref={navRef}>
        <ul className={listClassName}>
          {items.map((item, i) => {
            const label = typeof item === "string" ? item : item.label;
            const key = getItemKey(item, i);
            return (
              <li key={key} className={i === activeIndex ? "active" : ""}>
                <button
                  ref={(el) => (btnRefs.current[i] = el)}
                  onClick={() => onClick(i, item)}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="sparkle-active" ref={activeRef} />
      </nav>
    </>
  );
}

