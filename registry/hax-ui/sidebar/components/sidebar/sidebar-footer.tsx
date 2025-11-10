"use client"

import { motion } from "motion/react"
import { Moon, Sun } from "lucide-react"

import { IconButton } from "@/components/common/icon-button"
import { SidebarNavItem } from "@/components/sidebar/sidebar-nav-item"
import { UserProfile } from "@/components/sidebar/user-profile"
import { useTheme } from "@/components/theme/theme-provider"
import { containerVariantsDelayed, itemVariantsFromBottom } from "@/lib/sidebar/animations"
import { FOOTER_LINKS } from "@/lib/sidebar/navigation"
import type { NavigationProps } from "@/lib/sidebar/navigation"

interface SidebarFooterProps extends NavigationProps {
  isCollapsed?: boolean
}

export function SidebarFooter({ activeItem, onItemClick, isCollapsed = false }: SidebarFooterProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      variants={containerVariantsDelayed}
      initial="hidden"
      animate="show"
    >
      {/* Documentation and Github nav items */}
      <motion.div variants={itemVariantsFromBottom} className="w-full px-[12px]">
        {FOOTER_LINKS.filter((link) => link.id === "docs" || link.id === "github").map((link) => (
          <SidebarNavItem
            key={link.id}
            icon={link.icon}
            label={link.label}
            isActive={activeItem === link.id}
            onClick={() => onItemClick?.(link.id)}
            isCollapsed={isCollapsed}
            variant="default"
          />
        ))}
      </motion.div>

      {/* Settings nav item (UserProfile component) */}
      <motion.div variants={itemVariantsFromBottom} className="w-full">
        <UserProfile isCollapsed={isCollapsed} />
      </motion.div>

      {/* Theme toggle button */}
      {!isCollapsed && (
        <motion.div variants={itemVariantsFromBottom} className="w-full px-[12px]">
          <div className="flex items-center justify-end gap-2">
            <IconButton
              icon={theme === "light" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              label={theme === "light" ? "Light mode" : "Dark mode"}
              onClick={toggleTheme}
              data-testid="theme-toggle"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
