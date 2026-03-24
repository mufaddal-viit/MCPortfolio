import { motion } from "framer-motion";
import { fadeIn } from "./variants";

export const SECTION_VIEWPORT = { once: false, amount: 0.2 };
export const SECTION_ITEM_VIEWPORT = { once: false, amount: 0.1 };

const mergeViewport = (defaults, viewport) => ({
  ...defaults,
  ...(viewport || {}),
});

export const createRevealProps = (
  direction,
  delay = 0,
  viewport = SECTION_VIEWPORT,
) => ({
  variants: fadeIn(direction, delay),
  initial: "hidden",
  whileInView: "show",
  viewport,
});

export const SectionHeadingMotion = ({
  children,
  delay = 0,
  viewport,
  ...props
}) => {
  return (
    <motion.div
      {...createRevealProps(
        "down",
        delay,
        mergeViewport(SECTION_VIEWPORT, viewport),
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SectionBodyMotion = ({
  children,
  delay = 0.15,
  viewport,
  ...props
}) => {
  return (
    <motion.div
      {...createRevealProps(
        "up",
        delay,
        mergeViewport(SECTION_VIEWPORT, viewport),
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SectionItemMotion = ({
  children,
  delay = 0,
  viewport,
  ...props
}) => {
  return (
    <motion.div
      {...createRevealProps(
        "up",
        delay,
        mergeViewport(SECTION_ITEM_VIEWPORT, viewport),
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
