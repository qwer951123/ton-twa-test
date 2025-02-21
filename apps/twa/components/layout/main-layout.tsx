import { navigator } from "../../configs/navigator";
import NavigationBar from "./navigation-bar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-dvh flex-col">
      <div className="flex-1 overflow-y-auto">{children}</div>
      <NavigationBar items={navigator} />
    </main>
  );
}
