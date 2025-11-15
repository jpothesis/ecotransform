import React from "react";

export function Badge({ children, className = "", variant = "default" }) {
  const base = "inline-block px-2 py-1 rounded text-xs font-semibold";
  const variantClass =
    variant === "outline"
      ? "border border-gray-300"
      : "bg-primary text-white";

  return <span className={`${base} ${variantClass} ${className}`}>{children}</span>;
}
