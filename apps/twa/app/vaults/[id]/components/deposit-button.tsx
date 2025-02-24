import { Button } from "@repo/ui";
import { User2Icon } from "@repo/ui/icons";
import { useModal } from "../../../../hooks/use-modal";

export function Deposit() {
  const { onOpenChange } = useModal("vault-deposit");

  return (
    <Button className="w-full" onClick={() => onOpenChange(true)}>
      <User2Icon />
      JOIN 12,510 SAVERS
    </Button>
  );
}
