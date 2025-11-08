'use client';

import { motion } from "motion/react";
import { memo } from "react";

import { useTheme } from "@/components/theme/theme-provider";
import { TRANSITIONS } from "@/lib/sidebar/animations";
import { getColor } from "@/lib/sidebar/theme";
import svgPaths from "@/lib/sidebar/svg-paths";

interface MenuButtonProps {
  onClick: () => void;
}

export const MenuButton = memo(function MenuButton({ onClick }: MenuButtonProps) {
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
      title="Expand sidebar"
      aria-label="Expand sidebar"
      type="button"
    >
      <div className="relative size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p19565b80} fill={getColor.indicator(isDark)} fillOpacity="0.85" />
        </svg>
      </div>
    </motion.button>
  );
});
