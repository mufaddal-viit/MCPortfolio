import React from "react";
import { useInView } from "react-intersection-observer";
import { Tooltip } from "react-tooltip"; 

function TooltipOnView() {
  const { ref, inView } = useInView({
    threshold: 0, // Trigger when 50% visible
    triggerOnce: true, // Only once
  });

  return (
    <>
      <div className="h-[500px]">Scroll down to reveal...</div>

      <div
        ref={ref}
        data-tip="👋 Hello! I’m a tooltip showing on scroll!"
        className="p-10 bg-cyan text-white rounded-lg"
      >
        <h2 className="text-2xl font-bold">
          I will show a tooltip when visible
        </h2>
        {inView && (
          <Tooltip
            place="top"
            type="dark"
            effect="solid"
            backgroundColor="#000"
            textColor="#fff"
            className="custom-tooltip"
          />
        )}
      </div>
    </>
  );
}

export default TooltipOnView;
