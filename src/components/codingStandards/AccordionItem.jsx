import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

function AccordionItem({ item, itemIndex, isOpen, onToggle }) {
  const sections = [item.description1, item.description2].filter(
    (section) => section && (section.heading || section.desc),
  );

  return (
    <div
      className={`border-b border-default/30 transition-colors duration-200 last:border-b-0 ${
        isOpen ? "border-l-2 border-l-accent pl-4" : ""
      }`}
    >
      <button
        id={`${item.id}-trigger`}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${item.id}-panel`}
        className="flex w-full items-start justify-between gap-6 py-6 text-left text-primary transition-colors duration-200 hover:text-accent md:py-8"
      >
        <span className="flex items-start gap-4 md:gap-6">
          <span className="pt-1 font-mono text-[0.88rem] font-bold uppercase tracking-[0.28em] text-accent">
            {itemIndex}
          </span>

          <span className="text-xl font-semibold tracking-[-0.04em] md:text-[1.5rem]">
            {item.title}
          </span>
        </span>

        <span
          aria-hidden="true"
          className="mt-1 flex size-8 shrink-0 items-center justify-center text-secondary transition-colors duration-200"
        >
          {isOpen ? <Minus className="size-6" /> : <Plus className="size-6" />}
        </span>
      </button>

      <motion.div
        id={`${item.id}-panel`}
        role="region"
        aria-labelledby={`${item.id}-trigger`}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div
          className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 ${
            sections.length > 0 ? "pb-4" : ""
          } ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          {sections.map((section, sectionIndex) => (
            <div key={`${item.id}-section-${sectionIndex}`}>
              {section.heading ? (
                <h3 className="text-base font-semibold tracking-[-0.03em] text-primary">
                  {section.heading}
                </h3>
              ) : null}

              {section.desc ? (
                <p className="mt-2 text-base text-secondary">{section.desc}</p>
              ) : null}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default AccordionItem;
