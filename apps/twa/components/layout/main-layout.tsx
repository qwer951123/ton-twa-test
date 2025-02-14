import { navigator } from "../../configs/navigator";
import NavigationBar from "./navigation-bar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
      <NavigationBar items={navigator} />
    </main>
  );
}
