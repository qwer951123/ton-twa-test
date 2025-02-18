import { BaseProps } from "../types/components";
import UIComponent from "../component";
import { formatNumber } from "@repo/common";

export interface FormatRatioProps extends BaseProps<"span"> {
  value?: number;
}

export const FormatRatio = ({
  value,
  as = "div",
  ...props
}: FormatRatioProps) => {
  const num = formatNumber((value ?? 0) * 100, {
    minimumFractionDigits: 2,
  });
  return (
    <UIComponent as={as} {...props}>
      {num}%
    </UIComponent>
  );
};

FormatRatio.displayName = "FormatRatio";
