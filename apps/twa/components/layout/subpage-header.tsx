"use client";

import { BaseProps, cn } from "@repo/ui";
import { ArrowLeft } from "@repo/ui/icons";
import { useRouter } from "next/navigation";

interface SubpageHeaderProps extends BaseProps<"header"> {
  backButton?: boolean;
  backUrl?: string;
}

export const SubpageHeader = ({
  children,
  className,
  backButton = true,
  backUrl,
  ...props
}: SubpageHeaderProps) => {
  const router = useRouter();
  const handleBack = () => {
    if (backUrl) {
      router.push(backUrl);
    } else {
      router.back();
    }
  };

  return (
    <header
      className={cn(
        "relative h-11 px-page-padding py-[10px] flex items-center justify-center",
        className
      )}
      {...props}
    >
      {backButton && (
        <ArrowLeft
          className="absolute left-page-padding top-[10px] text-text-primary"
          onClick={handleBack}
        />
      )}
      <h1 className="text-lg leading-none font-semibold text-text-primary">
        {children}
      </h1>
    </header>
  );
};
