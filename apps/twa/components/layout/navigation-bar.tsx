import { NavigationBar as UINavigationBar, BareProps } from "@repo/ui";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface NavigationBarProps extends BareProps<"nav"> {
  items: NavigationItem[];
}

const NavigationBar = () => {
  return <UINavigationBar>hello footer</UINavigationBar>;
};

export default NavigationBar;
