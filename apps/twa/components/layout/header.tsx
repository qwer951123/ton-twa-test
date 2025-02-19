import { MenuIcon } from "@repo/ui/icons";
import { BaseProps } from "@repo/ui";

export const Header = ({ children }: BaseProps<"header">) => {
  return (
    <header className="relative flex items-center justify-center px-page-padding py-2">
      <MenuIcon className="text-text-contrast absolute left-0 top-2" />
      <div className="text-text-contrast text-[18px] font-bold">{children}</div>
    </header>
  );
};
