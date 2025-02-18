import { BaseProps } from "@repo/ui";
import { Vault } from "../../../types/vault";
import VaultIcon from "../../../components/vault-icon";

interface ComingSoonItemProps extends BaseProps<"div"> {
  product: Vault;
}

export const ComingSoonItem = ({ product }: ComingSoonItemProps) => {
  return (
    <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl">
      <VaultIcon vault={product.type} />
      <div className="text-sm font-normal">{product.name}</div>
    </div>
  );
};
