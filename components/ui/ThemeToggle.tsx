"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("spak-theme") as "dark" | "light" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "light") {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (!prefersDark) {
        setTheme("light");
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("spak-theme", nextTheme);

    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={theme === "dark" ? "التبديل إلى الوضع النهاري (الفاتح)" : "التبديل إلى الوضع الليلي (الداكن)"}
      aria-label={theme === "dark" ? "التبديل إلى الوضع النهاري" : "التبديل إلى الوضع الليلي"}
      className={`relative p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
        theme === "dark"
          ? "bg-slate-900/90 hover:bg-slate-800 text-amber-300 border-slate-800 hover:border-amber-400/40 shadow-sm"
          : "bg-white hover:bg-slate-100 text-blue-600 border-slate-200 hover:border-blue-400/40 shadow-sm"
      } ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
