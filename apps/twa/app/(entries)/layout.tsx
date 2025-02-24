import MainLayout from "../../components/layout/main-layout";
import { navigator } from "../../configs/navigator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout navigator={navigator}>{children}</MainLayout>;
}
