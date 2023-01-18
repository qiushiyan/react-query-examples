import clsx from "clsx";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "p-2 m-2 rounded-lg bg-yellow text-dark hover:scale-105 transition-all",
        className
      )}
    >
      {children}
    </button>
  );
}
