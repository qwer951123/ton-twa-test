import { BaseProps, cn } from "@repo/ui";

type FooterProps = BaseProps<"footer">;

export function SubpageFooter({ children, className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        "fixed bottom-0 left-0 right-0 px-page-padding pb-[calc(env(safe-area-inset-bottom)+16px)]",
        className
      )}
      {...props}
    >
      {children}
    </footer>
  );
}
