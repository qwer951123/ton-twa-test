import * as React from "react";

export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 18.443h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18v-2H3Z"
      clipRule="evenodd"
    />
  </svg>
);

MenuIcon.displayName = "MenuIcon";
