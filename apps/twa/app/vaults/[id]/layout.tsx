import { ReactNode } from "react";
import { mockVaults } from "../../../configs/mock-vaults";
import { Vault } from "../../../types/vault";
import { SubpageHeader } from "../../../components/layout/subpage-header";
import { Button } from "@repo/ui";

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
    <div className="flex h-dvh flex-col">
      <SubpageHeader backUrl="/">{vault?.name}</SubpageHeader>
      <div className="flex-1 p-page-padding">{children}</div>
      <div className="fixed bottom-0 left-0 right-0 px-page-padding pb-[calc(env(safe-area-inset-bottom)+16px)]">
        <Button className="w-full">JOIN 12,510 SAVERS</Button>
      </div>
    </div>
  );
}
