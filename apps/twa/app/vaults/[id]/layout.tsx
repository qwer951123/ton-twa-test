import { ReactNode } from "react";
import { mockVaults } from "../../../configs/mock-vaults";
import { Vault } from "../../../types/vault";
import { SubpageHeader } from "../../../components/layout/subpage-header";
import MainLayout from "../../../components/layout/main-layout";

interface VaultLayoutProps {
  children: ReactNode;
  params: {
    id: string;
  };
}

async function getVault(id: string): Promise<Vault | undefined> {
  return mockVaults.find((vault) => vault.id === id);
}

export default async function VaultLayout({
  children,
  params,
}: VaultLayoutProps) {
  const resolvedPrams = await params;
  const vault = await getVault(resolvedPrams.id);

  return (
    <MainLayout>
      <SubpageHeader backUrl="/">{vault?.name}</SubpageHeader>
      <div className="flex-1 p-page-padding">{children}</div>
    </MainLayout>
  );
}
