import React from "react";
import { cn } from "../../utils/cn";

export default function SectionTitle({ kicker, title, align = "left" }) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center")}>
      {kicker ? (
        <div className="inline-flex items-center gap-3">
          <span className="h-1 w-16 bg-gray-900/70" />
          <p className="text-xs font-semibold tracking-[0.24em] text-gray-900/70 uppercase">
            {kicker}
          </p>
        </div>
      ) : null}

      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase text-gray-900">
        {title}
      </h2>
    </div>
  );
}
