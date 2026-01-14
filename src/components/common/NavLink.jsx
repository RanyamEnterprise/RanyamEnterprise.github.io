import React from "react";

export default function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-gray-900/80 hover:text-gray-900 transition"
    >
      {children}
    </a>
  );
}

