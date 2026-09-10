"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "whatsapp" | "emergency" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  external?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "start",
  external = false,
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 shadow-md",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 focus-visible:ring-blue-500 border border-blue-400/20",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 border border-slate-700/60 shadow-sm focus-visible:ring-slate-500",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 focus-visible:ring-[#25D366] border border-white/20",
    emergency:
      "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-red-600/25 hover:shadow-lg hover:shadow-red-600/35 focus-visible:ring-red-500 animate-pulse border border-red-400/30",
    outline:
      "bg-transparent hover:bg-blue-50/10 text-blue-400 border border-blue-500/40 hover:border-blue-400 focus-visible:ring-blue-400",
    ghost:
      "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 focus-visible:ring-slate-400",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth ? "w-full" : "",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "start" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "end" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
