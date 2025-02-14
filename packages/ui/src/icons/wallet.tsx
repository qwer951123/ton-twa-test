import * as React from "react";

const WalletIcon = React.forwardRef<
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
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.639 14.84H17.59a2.693 2.693 0 0 1-2.693-2.692 2.693 2.693 0 0 1 2.693-2.691h4.048M18.05 12.086h-.313"
    />
    <path
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.748 3.443h8.643a5.248 5.248 0 0 1 5.248 5.248v7.177a5.248 5.248 0 0 1-5.248 5.248H7.748A5.248 5.248 0 0 1 2.5 15.868V8.691a5.248 5.248 0 0 1 5.248-5.248Z"
      clipRule="evenodd"
    />
    <path
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.036 7.981h5.399"
    />
  </svg>
));

WalletIcon.displayName = "WalletIcon";

export default WalletIcon;
