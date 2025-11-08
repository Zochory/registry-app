'use client';

import { motion } from "motion/react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useTheme } from "@/components/theme/theme-provider";
import { INTERACTION_ANIMATIONS, SPRING_CONFIG, TRANSITIONS } from "@/lib/sidebar/animations";
import { getColor } from "@/lib/sidebar/theme";
import svgPaths from "@/lib/sidebar/svg-paths";

function Logo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      className="content-stretch flex gap-[7.139px] items-center relative shrink-0"
      data-name="Logo"
      whileHover={INTERACTION_ANIMATIONS.scale.hover}
      transition={SPRING_CONFIG.bouncy}
    >
      <div className="h-[24px] overflow-clip relative shrink-0 w-[25.09px]" data-name="Logo Icon">
        <div className="absolute h-[24.421px] left-0 top-0 w-[25.09px]" data-name="Vector">
          <div className="absolute inset-0">
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
      </div>
    </motion.div>
  );
}

function MenuButton({ onClick, size = "md" }: { onClick?: () => void; size?: "sm" | "md" }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const buttonSize = size === "sm" ? 24 : 36;
  const buttonRadius = size === "sm" ? 12 : 18;
  const iconSize = size === "sm" ? 12 : 16;

  return (
    <motion.div
      className="content-stretch flex items-center justify-center relative cursor-pointer"
      style={{ width: buttonSize, height: buttonSize, borderRadius: buttonRadius }}
      data-name="button"
      whileHover={{ backgroundColor: getColor.interactive.hover(isDark) }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      transition={TRANSITIONS.fast}
    >
      <div className="relative shrink-0" style={{ width: iconSize, height: iconSize }} data-name="icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p19565b80} fill={getColor.indicator(isDark)} fillOpacity="0.85" />
        </svg>
      </div>
    </motion.div>
  );
}

interface SidebarHeaderProps {
  onMenuClick?: () => void;
  isCollapsed?: boolean;
}

export function SidebarHeader({ onMenuClick, isCollapsed = false }: SidebarHeaderProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="SidebarHeader">
      <div className="flex flex-col items-center size-full">
        <div
          className={`box-border content-stretch flex flex-col items-center py-[12px] relative w-full ${
            isCollapsed ? "px-[12px]" : "pl-[16px] pr-[12px]"
          }`}
        >
          {isCollapsed ? (
            <div className="flex flex-col items-center gap-3 w-full">
              <Logo />
              <div className="flex items-center gap-2">
                <ThemeToggle size="sm" />
                <MenuButton onClick={onMenuClick} size="sm" />
              </div>
            </div>
          ) : (
            <div className="content-stretch flex h-[40px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
                <Logo />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <MenuButton onClick={onMenuClick} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
