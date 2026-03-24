import { useState } from "react";
import AccordionItem from "./AccordionItem";
import accordionColumns from "./accordionColumns";

const CodingStandard = () => {
  const [openItemId, setOpenItemId] = useState(null);
  // const totalItems = accordionColumns.flat().length;

  const toggleItem = (itemId) => {
    setOpenItemId((currentItemId) =>
      currentItemId === itemId ? null : itemId,
    );
  };

  return (
    <div className="mt-10    p-6  md:p-8 lg:p-10">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          {/* <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.28em] text-accent">
              Practical Baseline
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
          </div> */}

          <p className="max-w-2xl text-base leading-7 text-secondary md:text-lg">
            I follow a clear engineering baseline for architecture, review,
            security, testing, and documentation so the codebase stays easy to
            extend and dependable in production.
          </p>
        </div>
      </div>

      <div
        id="accordian"
        className="grid grid-cols-1 gap-x-8 gap-y-2 lg:grid-cols-2"
      >
        {accordionColumns.map((column, columnIndex) => {
          const columnStartIndex = accordionColumns
            .slice(0, columnIndex)
            .reduce((count, items) => count + items.length, 0);

          return (
            <div key={`column-${columnIndex}`} className="bg-page/20">
              {column.map((item, itemIndex) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  itemIndex={String(columnStartIndex + itemIndex + 1).padStart(
                    2,
                    "0",
                  )}
                  isOpen={openItemId === item.id}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CodingStandard;
