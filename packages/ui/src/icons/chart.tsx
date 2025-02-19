import * as React from "react";

export const ChartIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
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
      fill="currentColor"
      d="M7.331 2.444c-3.4 0-5.32 1.929-5.33 5.33v9.34c0 3.4 1.93 5.33 5.33 5.33h9.34c3.4 0 5.33-1.93 5.33-5.33v-9.34c0-3.401-1.93-5.33-5.33-5.33H7.33Zm4.17 4.13a.84.84 0 0 1 1.28.79v10.19a.843.843 0 0 1-.83.75.827.827 0 0 1-.83-.75V7.364a.815.815 0 0 1 .38-.79Zm4.67 3.28c.27-.17.61-.17.88 0a.84.84 0 0 1 .39.79v6.91a.826.826 0 0 1-.83.75.827.827 0 0 1-.83-.75v-6.91a.842.842 0 0 1 .39-.79Zm-9.26 3.63a.839.839 0 0 1 .89 0c.27.17.42.469.38.79v3.28a.827.827 0 0 1-.83.75.843.843 0 0 1-.83-.75v-3.28a.834.834 0 0 1 .39-.79Z"
    />
  </svg>
));

ChartIcon.displayName = "ChartIcon";
