import { BaseProps } from "@repo/ui";
import { VaultType } from "../types/vault";
import SuperSavingsIcon from "./brands/super-savings";
import SuperGrowthIcon from "./brands/super-growth";
import RemittenceLogo from "./brands/remittence";
import InsuranceLogo from "./brands/insurance";
import MicroLeadingLogo from "./brands/micro-leading";

interface VaultIconProps extends BaseProps<"svg"> {
  vault: VaultType | undefined;
}

const VaultIcon = ({ vault, ...props }: VaultIconProps) => {
  switch (vault) {
    case "super-savings":
      return <SuperSavingsIcon {...props} />;
    case "super-growth":
      return <SuperGrowthIcon {...props} />;
    case "remittence":
      return <RemittenceLogo {...props} />;
    case "insurance":
      return <InsuranceLogo {...props} />;
    case "micro-lending":
      return <MicroLeadingLogo {...props} />;
    default:
      return null;
  }
};

export default VaultIcon;
