'use client';

import { motion } from "motion/react";
import { ReactNode } from "react";

import { useTheme } from "@/components/theme/theme-provider";
import { INTERACTION_ANIMATIONS, TRANSITIONS } from "@/lib/sidebar/animations";
import { getColor } from "@/lib/sidebar/theme";

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost" | "subtle";
  className?: string;
  disabled?: boolean;
  "data-testid"?: string;
}

const SIZE_CLASSES = {
  sm: "size-[28px]",
  md: "size-[36px]",
  lg: "size-[44px]",
} as const;

const RADIUS_CLASSES = {
  sm: "rounded-[14px]",
  md: "rounded-[18px]",
  lg: "rounded-[22px]",
} as const;

function getBackgroundColor(variant: IconButtonProps["variant"], isDark: boolean, disabled: boolean) {
  if (disabled) return "transparent";
  switch (variant) {
    case "subtle":
      return getColor.bg.container(isDark);
    case "ghost":
      return "transparent";
    default:
      return "transparent";
  }
}

export function IconButton({
  icon,
  label,
  onClick,
  size = "md",
  variant = "default",
  className = "",
  disabled = false,
  "data-testid": testId,
}: IconButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      className={`flex items-center justify-center ${SIZE_CLASSES[size]} ${RADIUS_CLASSES[size]} cursor-pointer transition-opacity ${className}`}
      style={{ backgroundColor: getBackgroundColor(variant, isDark, disabled), opacity: disabled ? 0.5 : 1 }}
      whileHover={!disabled ? { backgroundColor: getColor.bg.hover(isDark) } : undefined}
      whileTap={!disabled ? INTERACTION_ANIMATIONS.scale.tap : undefined}
      onClick={disabled ? undefined : onClick}
      transition={TRANSITIONS.fast}
      aria-label={label}
      disabled={disabled}
      data-testid={testId}
    >
      {icon}
    </motion.button>
  );
}
