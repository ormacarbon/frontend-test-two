import React from "react";

const Arrow = (props) => (
  <svg
    width={15}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 5h13m0 0-4-4m4 4-4 4"
      stroke="#3E64FF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Arrow;
