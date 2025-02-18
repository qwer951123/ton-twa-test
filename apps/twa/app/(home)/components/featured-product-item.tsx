import { BaseProps, FormatRatio, Tag } from "@repo/ui";
import { Vault } from "../../../types/vault";
import VaultIcon from "../../../components/vault-icon";

interface FeaturedProductItemProps extends BaseProps<"div"> {
  product: Vault;
}

export const FeaturedProductItem = ({ product }: FeaturedProductItemProps) => {
  return (
    <div className="p-3 flex items-center gap-2 bg-white rounded-xl">
      <VaultIcon vault={product.type} className="w-12 h-12" />
      <div className="flex-1 flex flex-col justify-center gap-2 font-normal">
        <p className="text-base text-text-primary leading-none">
          {product.name}
        </p>
        <p className="text-sm text-text-secondary leading-none">
          {product.provider}
        </p>
      </div>
      <Tag>
        <FormatRatio value={product.apy} />
      </Tag>
    </div>
  );
};
