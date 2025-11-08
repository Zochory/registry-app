'use client';

import { motion } from "motion/react";
import { memo } from "react";

import { useTheme } from "@/components/theme/theme-provider";
import { TRANSITIONS } from "@/lib/sidebar/animations";
import { getColor } from "@/lib/sidebar/theme";
import svgPaths from "@/lib/sidebar/svg-paths";

interface SearchIconButtonProps {
  onClick?: () => void;
}

export const SearchIconButton = memo(function SearchIconButton({ onClick }: SearchIconButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      className="flex items-center justify-center cursor-pointer shrink-0 rounded-lg"
      style={{ width: 32, height: 32 }}
      whileHover={{ backgroundColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)" }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      transition={TRANSITIONS.fast}
      title="Search"
      aria-label="Search"
      type="button"
    >
      <div className="overflow-clip relative shrink-0 size-[16px]">
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-5.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path
                d={svgPaths.pd3a6400}
                stroke={getColor.indicator(isDark)}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.85"
                strokeWidth="1.66667"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.button>
  );
});
