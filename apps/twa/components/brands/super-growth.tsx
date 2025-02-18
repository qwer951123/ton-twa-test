import * as React from "react";

const SuperGrowthIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const id = React.useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <rect width={48} height={48} y={0.443} fill={`url(#a-${id})`} rx={24} />
      <path
        fill="#fff"
        d="M14.4 11.643a3.2 3.2 0 1 0 .001 6.401 3.2 3.2 0 0 0-.001-6.4Zm0 4.267a1.066 1.066 0 1 1 0-2.133 1.066 1.066 0 0 1 0 2.133Zm9.6 5.333a3.2 3.2 0 1 0 .001 6.401 3.2 3.2 0 0 0-.001-6.4Zm0 4.267a1.066 1.066 0 1 1 0-2.133 1.066 1.066 0 0 1 0 2.133ZM25.691 11.643l-14.49 14.492 1.508 1.508 14.49-14.491-1.508-1.509Z"
      />
      <path
        fill="#fff"
        d="m27.642 20.178 2.757-2.758v19.823h2.133V17.418l2.76 2.76L36.8 18.67l-4.58-4.58a1.065 1.065 0 0 0-1.509 0l-4.579 4.58 1.51 1.508ZM21.866 30.843H11.2v2.134h10.666v-2.134ZM17.6 35.11h-6.4v2.133h6.4V35.11Z"
      />
      <defs>
        <radialGradient
          id={`a-${id}`}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 24 -24 0 24 24.443)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#98C9FF" />
          <stop offset={1} stopColor="#45B6B4" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default SuperGrowthIcon;
