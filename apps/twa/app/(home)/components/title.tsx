import { BaseProps } from "@repo/ui";
import Link, { LinkProps } from "next/link";

export const Subtitle = ({ children, ...props }: BaseProps<"h2">) => {
  return (
    <h2
      className="flex items-center justify-between text-2xl font-bold leading-none"
      {...props}
    >
      {children}
    </h2>
  );
};

export const ViewAll = (props: LinkProps) => {
  return (
    <Link
      className="text-accent-blue text-base font-normal leading-none"
      {...props}
    >
      See All
    </Link>
  );
};
