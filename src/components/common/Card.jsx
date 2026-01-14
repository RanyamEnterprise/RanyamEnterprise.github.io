import React from "react";
import { cn } from "../../utils/cn";

export default function Card({ className = "", children }) {
  return <div className={cn("bg-white shadow-soft", className)}>{children}</div>;
}
