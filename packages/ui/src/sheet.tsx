"use client";

import { CSSProperties } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { BaseProps } from "./types/components";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "./utils/cn";
import { CloseIcon } from "./icons";
import { ModalProps } from "./types/modal";
import { Button } from "./button";

interface SheetProps extends ModalProps {
  snapPoint?: number;
}

export const SheetHeader = ({
  children,
  className,
  onOpenChange,
  ...props
}: BaseProps<"header"> & Pick<ModalProps, "onOpenChange">) => {
  return (
    <header
      className={cn(
        "relative w-full h-14 flex items-center justify-center",
        className
      )}
      {...props}
    >
      <Button
        variant="text"
        size="sm"
        className="absolute left-page-padding text-base"
        onClick={() => onOpenChange?.(false)}
      >
        Cancel
      </Button>
      <div className="text-base font-semibold">{children}</div>
    </header>
  );
};

export const Sheet = ({
  children,
  open,
  onOpenChange,
  className,
  title,
  snapPoint = 70,
}: SheetProps) => (
  <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/60 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
      <DialogPrimitive.Content
        className={cn(
          `
          fixed z-50 bg-white outline-none
          bottom-0 left-0 right-0
          rounded-t-lg
          h-[var(--sheet-height)] pb-safe-bottom
          data-[state=open]:animate-slide-in-bottom
          data-[state=closed]:animate-slide-out-bottom
        `,
          className
        )}
        style={
          {
            "--sheet-height": `${snapPoint}vh`,
          } as CSSProperties
        }
      >
        <VisuallyHidden>
          <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
        </VisuallyHidden>
        <VisuallyHidden>
          <DialogPrimitive.Description>{title}</DialogPrimitive.Description>
        </VisuallyHidden>
        {title ? (
          <SheetHeader onOpenChange={onOpenChange}>{title}</SheetHeader>
        ) : (
          <CloseIcon
            className="absolute top-page-padding right-page-padding"
            onClick={() => onOpenChange?.(false)}
          />
        )}
        <div className="p-page-padding">{children}</div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);
