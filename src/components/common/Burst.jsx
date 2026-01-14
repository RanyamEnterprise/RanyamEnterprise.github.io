import React from "react";
import { cn } from "../../utils/cn";

export default function Burst({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("h-12 w-12 text-gray-900/80", className)} aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <line
            key={i}
            x1="50" y1="50" x2="50" y2="6"
            stroke="currentColor" strokeWidth="6" strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
    </svg>
  );
}
