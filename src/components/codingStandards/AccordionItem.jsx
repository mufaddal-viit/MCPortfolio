import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-default/45">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${item.id}-panel`}
        className="flex w-full items-center gap-6 py-6 text-left transition-colors duration-300 hover:text-accent md:py-8"
      >
        <span className="flex-1 text-2xl font-semibold tracking-[-0.03em] text-primary md:text-[2rem]">
          {item.title}
        </span>
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center text-secondary transition-colors duration-300"
        >
          {isOpen ? <Minus className="size-7" /> : <Plus className="size-7" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={`${item.id}-panel`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-[50ch] pb-6 pr-12 text-base leading-7 text-secondary md:pb-8 md:text-lg">
              {item.description}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default AccordionItem;
