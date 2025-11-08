'use client';

import { motion } from "motion/react";
import { memo } from "react";
import { UserRound } from "lucide-react";

import { useTheme } from "@/components/theme/theme-provider";
import { TRANSITIONS } from "@/lib/sidebar/animations";
import { getColor } from "@/lib/sidebar/theme";

interface UserAvatarProps {
  name?: string;
  onClick?: () => void;
}

export const UserAvatar = memo(function UserAvatar({ name = "Zachary Bensalem", onClick }: UserAvatarProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      className="flex items-center justify-center shrink-0 rounded-full cursor-pointer"
      style={{
        width: 32,
        height: 32,
        backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
      }}
      whileHover={{
        scale: 1.05,
        backgroundColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.12)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={TRANSITIONS.fast}
      title={name}
      aria-label="User profile"
      onClick={onClick}
      type="button"
    >
      <UserRound
        size={18}
        fill={getColor.text.secondary(isDark)}
        color={getColor.text.secondary(isDark)}
        strokeWidth={0}
      />
    </motion.button>
  );
});
