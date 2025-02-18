import React from "react";
import { BaseProps } from "../types/components";
import { cn } from "../utils/cn";
import UIComponent from "../component";

type NavigationBarProps = BaseProps<"nav">;

const NavigationBar = ({ className, ...props }: NavigationBarProps) => {
  return (
    <UIComponent
      as="nav"
      className={cn(
        `absolute w-full bottom-0 left-0 right-0
          pb-[calc(env(safe-area-inset-bottom,0px)_+_8px)]
          bg-white flex
          before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-separator-non-opaque before:scale-y-50
          `,
        className
      )}
      {...props}
    />
  );
};

NavigationBar.displayName = "NavigationBar";

interface NavigationBarItemProps extends BaseProps<"div"> {
  active?: boolean;
}

const NavigationBarItem = ({
  className,
  active,
  ...props
}: NavigationBarItemProps) => {
  return (
    <UIComponent
      data-active={active}
      className={cn(
        "basis-0 grow flex flex-col items-center gap-1 pt-2 text-xs font-semibold data-[active=true]:text-accent-blue transition-colors",
        className
      )}
      {...props}
    />
  );
};

NavigationBarItem.displayName = "NavigationBarItem";

export { NavigationBar, NavigationBarItem };
