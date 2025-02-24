import { BaseProps } from "@repo/ui";
import { Navigator } from "../../types";
import NavigationBar from "./navigation-bar";

interface MainLayoutProps extends BaseProps<"main"> {
  navigator?: Navigator;
}

export default function MainLayout({ children, navigator }: MainLayoutProps) {
  return (
    <main className="flex h-dvh flex-col">
      <div className="flex-1 overflow-y-auto">{children}</div>
      {navigator && <NavigationBar list={navigator} />}
    </main>
  );
}
