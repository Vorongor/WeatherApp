import React from "react";

export default function LocationIcon(): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <circle cx="11" cy="11" r="8" stroke="#AEB3B9" strokeWidth="2" />
      <rect x="10" width="2" height="4" fill="#AEB3B9" />
      <rect x="10" y="18" width="2" height="4" fill="#AEB3B9" />
      <rect
        x="4"
        y="10"
        width="2"
        height="4"
        transform="rotate(90 4 10)"
        fill="#AEB3B9"
      />
      <rect
        x="22"
        y="10"
        width="2"
        height="4"
        transform="rotate(90 22 10)"
        fill="#AEB3B9"
      />
    </svg>
  );
}
