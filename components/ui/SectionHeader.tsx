import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "right" | "left";
  className?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
}) => {
  const alignClasses = {
    center: "text-center mx-auto items-center",
    right: "text-right items-start",
    left: "text-left items-end",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16",
        alignClasses[align],
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 tracking-wide border backdrop-blur-md bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight sm:leading-snug",
          dark ? "text-white" : "text-slate-900 dark:text-white"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            dark ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
