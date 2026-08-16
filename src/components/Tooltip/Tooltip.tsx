import React from "react";

type TooltipProps = {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
};

export const Tooltip = ({
  content,
  position = "top",
  children,
}: TooltipProps) => {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative inline-block group">
      {children}

      <div
        className={`
          absolute
          hidden
          group-hover:block
          ${positionClasses[position]}
          bg-black
          text-white
          text-sm
          px-3
          py-2
          rounded-md
          whitespace-nowrap
          z-50
        `}
      >
        {content}
      </div>
    </div>
  );
};