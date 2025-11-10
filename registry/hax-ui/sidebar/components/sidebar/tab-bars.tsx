"use client"

import { useMemo } from "react"
import { motion } from "motion/react"

<<<<<<< HEAD
<<<<<<< HEAD:registry/hax-ui/sidebar/components/sidebar/tab-bars.tsx
import { useTheme } from "@/components/theme/theme-provider";
import { MenuButton } from "@/components/sidebar/menu-button";
import { SearchIconButton } from "@/components/sidebar/search-icon-button";
import { TabBarsTabItem } from "@/components/sidebar/tab-bars-tab-item";
import { UserAvatar } from "@/components/sidebar/user-avatar";
import { EXPLORE_NAVIGATION, MAIN_NAVIGATION } from "@/lib/sidebar/navigation";
import { STAGGER_DELAYS, STAGGER_DURATION, STAGGER_EASING } from "@/lib/sidebar/stagger";
import { createStaggerDelay } from "@/lib/utils/animations";
import { NavigationItemId } from "@/types/navigation";
=======
import { MenuButton } from "@/components/sidebar/menu-button"
import { SearchIconButton } from "@/components/sidebar/search-icon-button"
import { TabBarsTabItem } from "@/components/sidebar/tab-bars-tab-item"
import { UserAvatar } from "@/components/sidebar/user-avatar"
import { MAIN_NAVIGATION } from "@/lib/sidebar/navigation"
import { STAGGER_DELAYS, STAGGER_DURATION, STAGGER_EASING } from "@/lib/sidebar/stagger"
import { createStaggerDelay } from "@/lib/utils/animations"
import type { NavigationItemId } from "@/lib/sidebar/navigation"
>>>>>>> c71ab5e4e3bdc1a31b0132442399b1d4b7ec9c90

interface TabBarsProps {
  activeItem: NavigationItemId
  onItemClick: (id: NavigationItemId) => void
  onMenuClick: () => void
}

export function TabBars({ activeItem, onItemClick, onMenuClick }: TabBarsProps) {
  const mainNavItems = useMemo(
=======
import { MenuButton } from "@/components/sidebar/menu-button"
import { SearchIconButton } from "@/components/sidebar/search-icon-button"
import { ToolbarTabItem } from "@/components/sidebar/toolbar-tab-item"
import { UserAvatar } from "@/components/sidebar/user-avatar"
import { MAIN_NAVIGATION } from "@/lib/sidebar/navigation"
import { STAGGER_DELAYS, STAGGER_DURATION, STAGGER_EASING } from "@/lib/sidebar/stagger"
import { createStaggerDelay } from "@/lib/utils/animations"
import type { NavigationItemId } from "@/types/navigation"

interface ToolbarContentProps {
  activeItem: NavigationItemId
  onItemClick: (id: NavigationItemId) => void
  onMenuClick: () => void
}

export function ToolbarContent({ activeItem, onItemClick, onMenuClick }: ToolbarContentProps) {
  const toolbarNavItems = useMemo(
>>>>>>> 72f5e9a42557f609ed5df97c0146627fd02270af:components/sidebar/toolbar-content.tsx
    () => MAIN_NAVIGATION.filter((item) => item.id !== "settings" && item.id !== "search"),
    [],
  )
<<<<<<< HEAD

  const shadowStyle = useMemo(
    () => ({
      boxShadow: isDark
        ? "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1)"
        : "0 4px 24px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.04)",
    }),
    [isDark],
  );
=======
>>>>>>> c71ab5e4e3bdc1a31b0132442399b1d4b7ec9c90

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
        {toolbarNavItems.map((item, index) => (
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
<<<<<<< HEAD
<<<<<<< HEAD:registry/hax-ui/sidebar/components/sidebar/tab-bars.tsx
            <TabBarsTabItem
              label={item.label}
              isActive={activeItem === item.id}
              onClick={() => onItemClick(item.id)}
            />
=======
            <TabBarsTabItem label={item.label} isActive={activeItem === item.id} onClick={() => onItemClick(item.id)} />
>>>>>>> c71ab5e4e3bdc1a31b0132442399b1d4b7ec9c90
          </motion.div>
        ))}
      </nav>

<<<<<<< HEAD
      {EXPLORE_NAVIGATION && EXPLORE_NAVIGATION.length > 0 && (
        <nav className="flex items-center gap-1" aria-label="Explore navigation">
          {EXPLORE_NAVIGATION.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: STAGGER_DURATION.normal,
                delay: createStaggerDelay(index, STAGGER_DELAYS.exploreNavBase, STAGGER_DELAYS.exploreNavIncrement),
                ease: STAGGER_EASING.popIn,
              }}
            >
              <TabBarsTabItem
                label={item.label}
                isActive={activeItem === item.id}
                onClick={() => onItemClick(item.id)}
              />
            </motion.div>
          ))}
        </nav>
      )}
=======
            <ToolbarTabItem label={item.label} isActive={activeItem === item.id} onClick={() => onItemClick(item.id)} />
          </motion.div>
        ))}
      </nav>
>>>>>>> 72f5e9a42557f609ed5df97c0146627fd02270af:components/sidebar/toolbar-content.tsx

=======
>>>>>>> c71ab5e4e3bdc1a31b0132442399b1d4b7ec9c90
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

