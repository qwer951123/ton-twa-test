"use client";

import {
  NavigationBar as UINavigationBar,
  NavigationBarItem as UINavigationBarItem,
  BareProps,
} from "@repo/ui";
import { useIsMatchRoute } from "../../hooks/use-is-match-route";
import Link from "next/link";

interface NavigationItemProps extends BareProps<"div">, NavigationItem {}

const Item = ({ name, href, icon, ...props }: NavigationItemProps) => {
  const isActive = useIsMatchRoute(href);

  return (
    <UINavigationBarItem {...props} active={isActive}>
      <Link href={href} className="flex flex-col items-center gap-1">
        {icon}
        {name}
      </Link>
    </UINavigationBarItem>
  );
};

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface NavigationBarProps extends BareProps<"nav"> {
  items: NavigationItem[];
}

const NavigationBar = ({ items, ...props }: NavigationBarProps) => {
  return (
    <UINavigationBar {...props}>
      {items.map((item) => (
        <Item key={item.href} {...item} />
      ))}
    </UINavigationBar>
  );
};

export default NavigationBar;
