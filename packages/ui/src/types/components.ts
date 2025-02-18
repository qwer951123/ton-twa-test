import type { ElementType, ComponentProps, PropsWithChildren } from "react";

// base props for polymorphic components,
// add `as` prop to the component
export type BaseProps<T extends ElementType> = PropsWithChildren<
  ComponentProps<T> & {
    as?: ElementType;
  }
>;

export type BasePropsWithRef<T extends ElementType> = BaseProps<T> & {
  ref?: ComponentProps<T>["ref"];
};

export type BaseComponent<T extends ElementType = "div"> = {
  (props: BaseProps<T>): React.ReactElement | null;
  displayName?: string;
};

export type BaseComponentWithRef<T extends ElementType = "div"> = {
  (props: BasePropsWithRef<T>): React.ReactElement | null;
  displayName?: string;
};
