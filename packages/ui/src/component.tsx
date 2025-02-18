import { ElementType, forwardRef } from "react";
import { BaseProps } from "./types/components";

const UIComponent = forwardRef(
  <T extends ElementType = "div">(
    { as, children, ...props }: BaseProps<T>,
    ref: unknown
  ) => {
    const Component = as || "div";
    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);

UIComponent.displayName = "UIComponent";

export default UIComponent;
