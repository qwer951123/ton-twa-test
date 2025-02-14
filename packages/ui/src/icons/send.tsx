import * as React from "react";
import { cn } from "../utils/cn";

const SendIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.855 8.564-5.663 5.702-6.632-4.083c-.87-.534-.693-1.854.286-2.138L19.501 3.49c.89-.257 1.714.577 1.447 1.472l-4.645 15.64c-.291.978-1.596 1.147-2.123.274l-3.99-6.61"
      />
    </svg>
  )
);

SendIcon.displayName = "SendIcon";

export default SendIcon;
