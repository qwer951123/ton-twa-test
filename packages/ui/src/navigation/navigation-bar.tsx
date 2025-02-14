import React from "react";
import { BareProps } from "../types/components";
import { cn } from "../utils/cn";

type NavigationBarProps = BareProps<"nav">;

const NavigationBar = React.forwardRef<HTMLDivElement, NavigationBarProps>(
  ({ className, as: Component = "nav", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("h-navigation-bar-height sticky bottom-0", className)}
        {...props}
      />
    );
  }
);

NavigationBar.displayName = "NavigationBar";

export { NavigationBar };
