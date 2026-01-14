import React from "react";
import { cn } from "../../utils/cn";

export default function Button({
  as = "button",
  href,
  children,
  variant = "dark",
  className = "",
  type = "button",
  onClick,
  target,
  rel,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center rounded-none px-5 py-3 md:px-7 md:py-4 text-sm font-semibold tracking-widest uppercase transition focus:outline-none focus:ring-2 focus:ring-gray-900/30";
  const styles =
    variant === "dark"
      ? "bg-gray-900 text-white hover:bg-gray-800"
      : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-900/15";

  if (as === "a") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={cn(base, styles, className)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, styles, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
