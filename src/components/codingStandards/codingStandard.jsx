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
