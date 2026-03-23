import { useState } from "react";
import { motion } from "framer-motion";
import AccordionItem from "./AccordionItem";
import accordionColumns from "./accordionColumns";
import { fadeIn } from "../../framerMotion/variants";

const CodingStandardMain = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (itemId) => {
    setOpenItemId((currentItemId) =>
      currentItemId === itemId ? null : itemId,
    );
  };

  return (
    <div
      id="coding-standards"
      className="mx-auto mt-[100px] max-w-[1200px] items-center justify-center px-4"
    >
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <h2 className="mb-10 text-center text-6xl font-bold text-accent">
          Coding Standards
        </h2>

        <div className="rounded-2xl border border-default/30 bg-surface px-6 py-8 md:px-8 md:py-10">
          <p className="mx-auto max-w-3xl text-center text-base leading-7 text-secondary md:text-lg">
            I adhere to structured rules, guidelines, and techniques to create
            readable, efficient, and maintainable code with strong documentation,
            secure implementation, and clean collaboration workflows.
          </p>

          <div
            id="accordian"
            className="mt-10 grid grid-cols-1 gap-x-6 lg:grid-cols-2"
          >
            {accordionColumns.map((column, columnIndex) => (
              <div key={`column-${columnIndex}`}>
                {column.map((item) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openItemId === item.id}
                    onToggle={() => toggleItem(item.id)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CodingStandardMain;
