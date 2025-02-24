import { Sheet } from "@repo/ui";
import { useModal } from "../../../../hooks/use-modal";

export function DepositSheet() {
  const { open, onOpenChange } = useModal("vault-deposit");

  return (
    <Sheet open={open} onOpenChange={onOpenChange} title="Deposit">
      hello world
    </Sheet>
  );
}
