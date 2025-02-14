import * as React from "react";

const AccountIcon = React.forwardRef<
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.579 12.5a4.778 4.778 0 1 0 0-9.557 4.778 4.778 0 0 0 0 9.556Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 19.145a2.216 2.216 0 0 1 .22-.97c.457-.916 1.748-1.401 2.819-1.62a16.778 16.778 0 0 1 2.343-.33 25.04 25.04 0 0 1 4.385 0c.787.055 1.57.165 2.343.33 1.07.219 2.361.658 2.82 1.62a2.27 2.27 0 0 1 0 1.95c-.459.96-1.75 1.4-2.82 1.61-.772.172-1.555.285-2.343.339-1.188.1-2.38.119-3.57.055-.275 0-.54 0-.815-.055a15.417 15.417 0 0 1-2.334-.339c-1.08-.21-2.361-.65-2.828-1.61a2.28 2.28 0 0 1-.22-.98Z"
      clipRule="evenodd"
    />
  </svg>
));

AccountIcon.displayName = "AccountIcon";

export default AccountIcon;
