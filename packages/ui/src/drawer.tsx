"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { BaseProps } from "./types/components";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "./utils/cn";
import { CloseIcon } from "./icons";

interface DrawerProps extends Omit<BaseProps<"dialog">, "title"> {
  title?: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position?: "left" | "right";
}

function createAnimationClass(position: "left" | "right") {
  if (position === "left") {
    return "data-[state=open]:animate-slide-in-left data-[state=closed]:animate-slide-out-left";
  }
  return "data-[state=open]:animate-slide-in-right data-[state=closed]:animate-slide-out-right";
}

export const Drawer = ({
  children,
  open,
  onOpenChange,
  className,
  position = "left",
  title,
}: DrawerProps) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content
        className={cn(
          `
          fixed inset-0 z-50 bg-background outline-none
          p-page-padding
          ${createAnimationClass(position)}
        `,
          className
        )}
      >
        <VisuallyHidden>
          <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
        </VisuallyHidden>
        <VisuallyHidden>
          <DialogPrimitive.Description>{title}</DialogPrimitive.Description>
        </VisuallyHidden>
        {title ? (
          <header className="flex items-center justify-between">
            <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
            <CloseIcon />
          </header>
        ) : (
          <CloseIcon
            className="absolute top-page-padding right-page-padding"
            onClick={() => onOpenChange(false)}
          />
        )}
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);
