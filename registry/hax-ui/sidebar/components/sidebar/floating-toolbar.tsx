'use client';

import { motion } from "motion/react";
import { useMemo } from "react";

import { useTheme } from "@/components/theme/theme-provider";
import { MenuButton } from "@/components/sidebar/menu-button";
import { SearchIconButton } from "@/components/sidebar/search-icon-button";
import { ToolbarTabItem } from "@/components/sidebar/toolbar-tab-item";
import { UserAvatar } from "@/components/sidebar/user-avatar";
import { EXPLORE_NAVIGATION, MAIN_NAVIGATION } from "@/lib/sidebar/navigation";
import { NavigationItemId } from "@/types/navigation";

interface FloatingToolbarProps {
  activeItem: NavigationItemId;
  onItemClick: (id: NavigationItemId) => void;
  onMenuClick: () => void;
}

export function FloatingToolbar({ activeItem, onItemClick, onMenuClick }: FloatingToolbarProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const mainNavItems = useMemo(
    () => MAIN_NAVIGATION.filter((item) => item.id !== "settings" && item.id !== "search"),
    []
  );

  return (
    <div className="fixed z-50 top-3 left-1/2 -translate-x-1/2" role="toolbar" aria-label="Main navigation toolbar">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -8 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <motion.div
          className="flex items-center backdrop-blur-[12px] backdrop-filter transition-colors duration-500"
          style={{
            height: 48,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 24,
            gap: 6,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            boxShadow: isDark
              ? "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1)"
              : "0 4px 24px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.04)",
          }}
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            boxShadow: isDark
              ? "0 6px 32px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.15)"
              : "0 6px 32px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.06)",
          }}
          transition={{ duration: 0.2 }}
        >
          <MenuButton onClick={onMenuClick} />

          <nav className="flex items-center gap-1 rounded-[168px]" aria-label="Main navigation">
            {mainNavItems.map((item) => (
              <ToolbarTabItem
                key={item.id}
                label={item.label}
                isActive={activeItem === item.id}
                onClick={() => onItemClick(item.id)}
                layoutId={`nav-${item.id}`}
              />
            ))}
          </nav>

          <nav className="flex items-center gap-1" aria-label="Explore navigation">
            {EXPLORE_NAVIGATION.map((item) => (
              <ToolbarTabItem
                key={item.id}
                label={item.label}
                isActive={activeItem === item.id}
                onClick={() => onItemClick(item.id)}
                layoutId={`nav-${item.id}`}
              />
            ))}
          </nav>

          <div className="flex-1 min-w-[8px]" aria-hidden="true" />

          <div className="flex items-center gap-2">
            <UserAvatar />
            <SearchIconButton onClick={() => onItemClick("search")} />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
