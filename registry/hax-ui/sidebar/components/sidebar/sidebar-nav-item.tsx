'use client';

import { motion } from "motion/react";
import { ReactNode, memo } from "react";

import { useTheme } from "@/components/theme/theme-provider";
import { INTERACTION_ANIMATIONS, SPRING_CONFIG, TRANSITIONS } from "@/lib/sidebar/animations";
import { getColor } from "@/lib/sidebar/theme";
import { NavigationVariant } from "@/lib/sidebar/navigation";

interface SidebarNavItemProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  variant?: NavigationVariant;
  isCollapsed?: boolean;
  layoutId?: string;
}

export const SidebarNavItem = memo(function SidebarNavItem({
  icon,
  label,
  isActive = false,
  onClick,
  variant = "default",
  isCollapsed = false,
  layoutId,
}: SidebarNavItemProps) {
  const isPrimary = variant === "primary";
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const typographyClasses = isPrimary
    ? "font-['Inter_Variable:Medium',sans-serif] font-medium text-[12.906px]"
    : "font-['Inter_Variable:SemiBold',sans-serif] font-semibold text-[12.578px]";

  return (
    <motion.div
      className="h-[36px] relative rounded-[1000px] shrink-0 w-full cursor-pointer transition-colors duration-300"
      style={{ backgroundColor: isPrimary ? getColor.bg.container(isDark) : "transparent" }}
      whileHover={{ backgroundColor: getColor.bg.hover(isDark) }}
      whileTap={INTERACTION_ANIMATIONS.scaleSmall.tap}
      onClick={onClick}
      transition={TRANSITIONS.fast}
      data-testid={`nav-item-${label.toLowerCase().replace(/\s+/g, "-")}`}
      data-active={isActive}
      layoutId={layoutId}
      layout
    >
      <div className="content-stretch flex flex-row items-center w-full h-full">
        <motion.div
          className={`box-border content-stretch flex h-[36px] items-center py-0 relative w-full rounded-[1000px] transition-colors duration-300 ${
            isCollapsed ? "justify-center px-0" : "gap-[8px] px-[14px]"
          }`}
          initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
          animate={{ backgroundColor: isActive ? getColor.bg.active(isDark) : "transparent" }}
          whileHover={{
            backgroundColor: isActive ? getColor.bg.activeHover(isDark) : getColor.bg.hover(isDark),
          }}
          transition={TRANSITIONS.fast}
        >
          <motion.div className="shrink-0" whileHover={INTERACTION_ANIMATIONS.scaleIcon.hover} transition={SPRING_CONFIG.bouncy}>
            {icon}
          </motion.div>
          {!isCollapsed && (
            <motion.div
              className={`flex flex-col ${typographyClasses} justify-center leading-[0] relative shrink-0 text-nowrap transition-colors duration-300`}
              style={{
                color: isActive
                  ? getColor.text.active(isDark)
                  : isPrimary
                  ? getColor.text.primary(isDark)
                  : getColor.text.secondary(isDark),
              }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="leading-[14px] whitespace-pre">{label}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
});
