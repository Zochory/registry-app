'use client';

import { motion } from "motion/react";
import { memo } from "react";

import { useTheme } from "@/components/theme/theme-provider";
import { TRANSITIONS } from "@/lib/sidebar/animations";
import { getColor } from "@/lib/sidebar/theme";

interface ToolbarTabItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  layoutId?: string;
}

export const ToolbarTabItem = memo(function ToolbarTabItem({
  label,
  isActive = false,
  onClick,
  layoutId,
}: ToolbarTabItemProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      className="relative flex items-center justify-center cursor-pointer px-2 py-2 rounded-lg whitespace-nowrap"
      onClick={onClick}
      whileHover={{ backgroundColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)" }}
      whileTap={{ scale: 0.98 }}
      animate={{
        backgroundColor: isActive
          ? isDark
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(0, 0, 0, 0.08)"
          : "transparent",
      }}
      transition={{
        ...TRANSITIONS.fast,
        scale: { type: "spring", stiffness: 400, damping: 25 },
      }}
      data-testid={`toolbar-tab-${label.toLowerCase().replace(/\s+/g, "-")}`}
      data-active={isActive}
      title={label}
      type="button"
      layoutId={layoutId}
    >
      <span className="relative inline-block">
        <span
          className="font-['Inter',sans-serif] invisible block"
          style={{ fontSize: 14, fontWeight: 600, height: 0 }}
          aria-hidden="true"
        >
          {label}
        </span>
        <span
          className="font-['Inter',sans-serif] transition-colors duration-300 block"
          style={{
            fontSize: 14,
            fontWeight: isActive ? 600 : 500,
            color: isActive ? getColor.text.primary(isDark) : getColor.text.secondary(isDark),
          }}
        >
          {label}
        </span>
      </span>
    </motion.button>
  );
});
