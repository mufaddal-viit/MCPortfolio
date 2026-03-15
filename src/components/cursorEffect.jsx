import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, summary, label, [role="button"], [data-cursor-interactive="true"]';

function CursorEffect() {
  const [isEnabled, setIsEnabled] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const hasMovedRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncEnabledState = () => setIsEnabled(mediaQuery.matches);

    syncEnabledState();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncEnabledState);

      return () => mediaQuery.removeEventListener("change", syncEnabledState);
    }

    mediaQuery.addListener(syncEnabledState);

    return () => mediaQuery.removeListener(syncEnabledState);
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      document.body.classList.remove("cursor-effect-enabled");
      return undefined;
    }

    const dot = dotRef.current;
    const ringEl = ringRef.current;

    if (!dot || !ringEl) return undefined;

    document.body.classList.add("cursor-effect-enabled");

    const showCursor = () => {
      dot.classList.remove("opacity-0");
      ringEl.classList.remove("opacity-0");
    };

    const hideCursor = () => {
      dot.classList.add("opacity-0");
      ringEl.classList.add("opacity-0");
      ringEl.classList.remove("is-hovering", "is-pressed");
      hasMovedRef.current = false;
    };

    const setHoverState = (target) => {
      const isInteractive =
        target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR));

      ringEl.classList.toggle("is-hovering", isInteractive);
    };

    const handlePointerMove = (event) => {
      const { clientX, clientY, target } = event;

      mouse.current = { x: clientX, y: clientY };
      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;

      if (!hasMovedRef.current) {
        ring.current = { x: clientX, y: clientY };
        ringEl.style.left = `${clientX}px`;
        ringEl.style.top = `${clientY}px`;
        hasMovedRef.current = true;
      }

      setHoverState(target);
      showCursor();
    };

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;

      ringEl.style.left = `${ring.current.x}px`;
      ringEl.style.top = `${ring.current.y}px`;

      rafRef.current = window.requestAnimationFrame(animateRing);
    };

    const handlePointerDown = () => ringEl.classList.add("is-pressed");
    const handlePointerUp = () => ringEl.classList.remove("is-pressed");
    const handleVisibilityChange = () => {
      if (document.hidden) hideCursor();
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", hideCursor);

    rafRef.current = window.requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("cursor-effect-enabled");
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", hideCursor);

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-[rgb(var(--cursor))] opacity-0 transition-opacity duration-200 md:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] hidden h-7 w-7 rounded-full border-2 border-[rgb(var(--cursor))] opacity-0 transition-[opacity,transform] duration-200 md:block"
      />
    </>
  );
}

export default CursorEffect;
