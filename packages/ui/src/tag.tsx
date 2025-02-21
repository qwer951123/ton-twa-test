import { cva, VariantProps } from "class-variance-authority";
import { BaseProps } from "./types/components";
import { cn } from "./utils/cn";

const tagVariants = cva("block px-3 py-1 rounded-full", {
  variants: {
    variant: {
      normal: "bg-tag-background text-text-primary font-medium",
      contrast: "bg-tag-contrast-background text-text-contrast font-normal",
    },
    size: {
      normal: "px-[10px] py-1 text-xs leading-none",
      lg: "px-3 py-[6px] text-base leading-none",
    },
  },
});

interface TagProps extends BaseProps<"span">, VariantProps<typeof tagVariants> {
  __phantom?: never;
}

const Tag = ({
  variant = "normal",
  size = "normal",
  className,
  ...props
}: TagProps) => {
  return (
    <span
      {...props}
      className={cn(tagVariants({ variant, size }), className)}
    />
  );
};

export { Tag };
