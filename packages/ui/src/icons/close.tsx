import * as React from "react";
import { cn } from "../utils/cn";
import { BaseProps } from "../types/components";

export const CloseIcon = ({
  className,
  onClick,
  ...props
}: BaseProps<"svg"> & Pick<BaseProps<"div">, "onClick">) => (
  <div
    className={cn(
      "cursor-pointer w-5 h-5 relative select-none",
      "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:scale-[120%] before:rounded-full before:hover:bg-gray-400/50 before:transition-colors",
      className
    )}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="w-full h-full text-icon-icon-secondary"
      {...props}
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M5 15 15 5M15 15 5 5"
      />
    </svg>
  </div>
);

CloseIcon.displayName = "CloseIcon";
