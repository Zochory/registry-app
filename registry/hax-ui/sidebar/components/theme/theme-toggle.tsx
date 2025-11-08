'use client';

import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme/theme-provider";

interface ThemeToggleProps {
  size?: "sm" | "md";
}

export function ThemeToggle({ size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const buttonSize = size === "sm" ? 32 : 36;
  const buttonRadius = size === "sm" ? 8 : 18;
  const iconSize = size === "sm" ? 16 : 18;

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center cursor-pointer overflow-hidden"
      style={{ width: buttonSize, height: buttonSize, borderRadius: buttonRadius }}
      whileHover={{ backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)" }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      aria-label="Toggle theme"
      type="button"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.5, rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Moon style={{ width: iconSize, height: iconSize, color: "rgba(255, 255, 255, 0.85)" }} />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.5 : 1, rotate: isDark ? -180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Sun style={{ width: iconSize, height: iconSize, color: "rgba(0, 0, 0, 0.85)" }} />
      </motion.div>
    </motion.button>
  );
}
