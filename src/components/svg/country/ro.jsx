import * as React from "react";

const ROIcon = (props) => (
  <svg
    viewBox="0 -4 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g clipPath="url(#clip0_503_2626)">
        <rect width={28} height={20} rx={2} fill="white" />
        <mask
          id="mask0_503_2626"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={28}
          height={20}
        >
          <rect width={28} height={20} rx={2} fill="white" />
        </mask>
        <g mask="url(#mask0_503_2626)">
          <rect x={13.3333} width={14.6667} height={20} fill="#E5253D" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 20H9.33333V0H0V20Z"
            fill="#0A3D9C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.33331 20H18.6666V0H9.33331V20Z"
            fill="#FFD955"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_503_2626">
          <rect width={28} height={20} rx={2} fill="white" />
        </clipPath>
      </defs>
    </g>
  </svg>
);
export default ROIcon;
