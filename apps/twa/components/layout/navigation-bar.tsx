"use client";

import {
  NavigationBar as UINavigationBar,
  NavigationBarItem as UINavigationBarItem,
  BaseProps,
} from "@repo/ui";
import { useIsMatchRoute } from "../../hooks/use-is-match-route";
import Link from "next/link";
import { Navigator, NavigatorItem } from "../../types";

interface NavigationItemProps extends BaseProps<"div">, NavigatorItem {}

const NavigationItem = ({
  label,
  href,
  icon,
  ...props
}: NavigationItemProps) => {
  const isActive = useIsMatchRoute(href);

  return (
    <UINavigationBarItem {...props} active={isActive}>
      <Link href={href} className="flex flex-col items-center gap-1">
        {icon}
        {label}
      </Link>
    </UINavigationBarItem>
  );
};

interface NavigationBarProps extends BaseProps<"nav"> {
  list: Navigator;
}

const NavigationBar = ({ list, ...props }: NavigationBarProps) => {
  return (
    <UINavigationBar {...props}>
      {list.map((item) => (
        <NavigationItem key={item.href} {...item} />
      ))}
    </UINavigationBar>
  );
};

export default NavigationBar;
