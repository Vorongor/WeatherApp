import clsx from "clsx";
import React from "react";

export interface ButtonProps {
  clickFunc: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ clickFunc, children, disabled }: ButtonProps) {
  return (
    <button
      onClick={() => clickFunc()}
      className={clsx(!disabled && "cursor-pointer", disabled && "opacity-50")}
    >
      {children}
    </button>
  );
}
