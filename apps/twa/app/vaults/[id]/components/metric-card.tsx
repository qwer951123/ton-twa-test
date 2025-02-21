import { BaseProps, cn } from "@repo/ui";

interface MetricCardProps extends BaseProps<"div"> {
  title: string;
  value: string;
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
        "min-h-[120px] flex flex-col justify-center items-center gap-2 bg-accent-blue/10 p-4 rounded-2xl",
        className
      )}
      {...props}
    >
      <p className="text-sm text-text-secondary">{title}</p>
      <p className="text-[40px] font-semibold text-text-primary">{value}</p>
    </div>
  );
};
