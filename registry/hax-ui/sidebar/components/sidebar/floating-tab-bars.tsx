"use client"

import { motion } from "motion/react"
import { useMemo } from "react"

import { useTheme } from "@/components/theme/theme-provider"
import { MenuButton } from "@/components/sidebar/menu-button"
import { SearchIconButton } from "@/components/sidebar/search-icon-button"
import { TabBarsTabItem } from "@/components/sidebar/tab-bars-tab-item"
import { UserAvatar } from "@/components/sidebar/user-avatar"
import { MAIN_NAVIGATION } from "@/lib/sidebar/navigation"
import type { NavigationItemId } from "@/lib/sidebar/navigation"

interface FloatingTabBarsProps {
  activeItem: NavigationItemId
  onItemClick: (id: NavigationItemId) => void
  onMenuClick: () => void
}

export function FloatingTabBars({ activeItem, onItemClick, onMenuClick }: FloatingTabBarsProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const mainNavItems = useMemo(
    () => MAIN_NAVIGATION.filter((item) => item.id !== "settings" && item.id !== "search"),
    [],
  )

  const shadowStyle = useMemo(
    () => ({
      boxShadow: isDark
        ? "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1)"
        : "0 4px 24px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.04)",
    }),
    [isDark],
  )

  const hoverShadowStyle = useMemo(
    () => ({
      boxShadow: isDark
        ? "0 6px 32px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.15)"
        : "0 6px 32px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.06)",
    }),
    [isDark],
  )

  return (
    <div className="fixed z-50 top-3 left-1/2 -translate-x-1/2" role="toolbar" aria-label="Main navigation tab bars">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -8 }}
        transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.5 }}
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
            ...shadowStyle,
            willChange: "transform, box-shadow",
          }}
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            ...hoverShadowStyle,
          }}
          transition={{ duration: 0.15 }}
        >
          <MenuButton onClick={onMenuClick} />

          <nav className="flex items-center gap-1 rounded-[168px]" aria-label="Main navigation">
            {mainNavItems.map((item) => (
              <TabBarsTabItem
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
      </motion.div>
    </div>
  )
}

