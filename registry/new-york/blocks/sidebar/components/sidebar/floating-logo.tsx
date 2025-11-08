'use client';

import { motion } from "motion/react";
import { memo } from "react";

import { useTheme } from "@/components/theme/theme-provider";
import { getColor } from "@/lib/sidebar/theme";
import svgPaths from "@/lib/sidebar/svg-paths";

export const FloatingLogo = memo(function FloatingLogo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      className="fixed z-50"
      style={{ top: 16, left: 16 }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
      role="img"
      aria-label="Application logo"
    >
      <div className="flex items-center justify-center" style={{ width: 28, height: 28 }}>
        <div className="h-[24px] w-[25.09px] relative">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 25">
            <path
              clipRule="evenodd"
              d={svgPaths.p3a69b870}
              fill={getColor.indicator(isDark)}
              fillOpacity="0.85"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
});
