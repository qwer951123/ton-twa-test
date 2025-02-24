import { ReactNode } from "react";
import { BaseProps, cn } from "@repo/ui";

interface MetricCardProps extends Omit<BaseProps<"div">, "title"> {
  title: ReactNode;
  value: ReactNode;
}

export const MetricCard = ({
  className,
  title,
  value,
  ...props
}: MetricCardProps) => {
  return (
    <div
      className={cn(
        "min-h-[120px] flex flex-col justify-center items-center gap-6 bg-accent-blue/10 p-4 rounded-2xl",
        className
      )}
      {...props}
    >
      <div className="text-sm text-text-primary leading-none">{title}</div>
      <div className="text-[40px] font-semibold text-text-primary leading-none">
        {value}
      </div>
    </div>
  );
};
