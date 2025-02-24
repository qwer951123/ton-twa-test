"use client";

import type { VariantProps } from "class-variance-authority";
import { BaseProps } from "./types/components";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils/cn";
import UIComponent from "./component";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

const buttonVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      // button with background color
      primary: `bg-primary text-text-contrast`,
      text: `bg-transparent text-primary px-0! outline-none`,
    },
    size: {
      lg: "px-5 py-4 rounded-2xl text-[18px] font-semibold",
      md: "",
      sm: "",
    },
    disabled: { true: "disabled:opacity-50" },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});

interface ButtonProps
  extends Omit<BaseProps<"button">, "variant" | "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  __phantom?: never;
}

const Button = ({
  variant = "primary",
  size = "lg",
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <UIComponent
      as="button"
      className={cn(buttonVariants({ variant, size, disabled }), className)}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button };
