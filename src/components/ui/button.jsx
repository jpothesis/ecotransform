import React from "react";

export function Button({ children, className = "", size = "md", variant = "default", ...props }) {
  const base = "px-4 py-2 rounded font-medium transition";
  const sizeClass =
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg px-6 py-3" : "text-base";
  const variantClass =
    variant === "outline"
      ? "border border-gray-300"
      : variant === "secondary"
      ? "bg-gray-200 text-gray-800"
      : "bg-primary text-white";

  return (
    <button className={`${base} ${sizeClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
