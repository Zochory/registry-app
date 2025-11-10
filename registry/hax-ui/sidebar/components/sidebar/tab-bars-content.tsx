"use client"

import { useMemo } from "react"
import { motion } from "motion/react"

import { MenuButton } from "@/components/sidebar/menu-button"
import { SearchIconButton } from "@/components/sidebar/search-icon-button"
import { TabBarsTabItem } from "@/components/sidebar/tab-bars-tab-item"
import { UserAvatar } from "@/components/sidebar/user-avatar"
import { MAIN_NAVIGATION } from "@/lib/sidebar/navigation"
import { STAGGER_DELAYS, STAGGER_DURATION, STAGGER_EASING } from "@/lib/sidebar/stagger"
import { createStaggerDelay } from "@/lib/utils/animations"
import type { NavigationItemId } from "@/lib/sidebar/navigation"

interface TabBarsContentProps {
  activeItem: NavigationItemId
  onItemClick: (id: NavigationItemId) => void
  onMenuClick: () => void
}

export function TabBarsContent({ activeItem, onItemClick, onMenuClick }: TabBarsContentProps) {
  const tabBarssNavItems = useMemo(
    () => MAIN_NAVIGATION.filter((item) => item.id !== "settings" && item.id !== "search"),
    [],
  )

  return (
    <div className="flex items-center gap-[6px] h-full w-full">
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: STAGGER_DURATION.normal,
          delay: STAGGER_DELAYS.menuButton,
          ease: STAGGER_EASING.easeOut,
        }}
      >
        <MenuButton onClick={onMenuClick} />
      </motion.div>

      <nav className="flex items-center gap-1 rounded-[425px]" aria-label="Main navigation">
        {tabBarssNavItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: STAGGER_DURATION.normal,
              delay: createStaggerDelay(index, STAGGER_DELAYS.mainNavBase, STAGGER_DELAYS.mainNavIncrement),
              ease: STAGGER_EASING.popIn,
            }}
          >
            <TabBarsTabItem label={item.label} isActive={activeItem === item.id} onClick={() => onItemClick(item.id)} />
          </motion.div>
        ))}
      </nav>

      <div className="flex-1 min-w-[8px]" aria-hidden="true" />

      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: STAGGER_DURATION.normal,
          delay: STAGGER_DELAYS.controls,
          ease: STAGGER_EASING.easeOut,
        }}
      >
        <UserAvatar />
        <SearchIconButton onClick={() => onItemClick("search")} />
      </motion.div>
    </div>
  )
}

