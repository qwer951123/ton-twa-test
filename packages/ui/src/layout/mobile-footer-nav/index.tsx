import React from "react";
import { BareProps } from "../../types/components";
import { cn } from "../../utils/cn";

const FooterRoot = React.forwardRef<HTMLDivElement, BareProps<"div">>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("footer", className)} {...props} />;
  }
);

FooterRoot.displayName = "FooterRoot";

export default {
  FooterRoot,
};
