import React from "react";
import { BareProps } from "../types/components";
import { cn } from "../utils/cn";

type NavigationBarProps = BareProps<"nav">;

const NavigationBar = React.forwardRef<HTMLElement, NavigationBarProps>(
  ({ className, as: Component = "nav", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "absolute w-full bottom-0 left-0 right-0 pb-[calc(env(safe-area-inset-bottom,0px)_+_8px)] bg-white flex border-t border-separator-non-opaque",
          className
        )}
        {...props}
      />
    );
  }
);

NavigationBar.displayName = "NavigationBar";

interface NavigationBarItemProps extends BareProps<"div"> {
  active?: boolean;
}

const NavigationBarItem = React.forwardRef<
  HTMLDivElement,
  NavigationBarItemProps
>(({ className, as: Component = "div", active, ...props }, ref) => {
  return (
    <Component
      ref={ref}
      data-active={active}
      className={cn(
        "basis-0 grow flex flex-col items-center gap-1 pt-2 text-xs font-medium data-[active=true]:text-accent-blue",
        className
      )}
      {...props}
    />
  );
});

NavigationBarItem.displayName = "NavigationBarItem";

export { NavigationBar, NavigationBarItem };
