"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { SidebarNavItem } from "./sidebar-nav-item"
import { SettingsIcon } from "./sidebar-icons"

import { useTheme } from "@/components/theme/theme-provider"
import { INTERACTION_ANIMATIONS, TRANSITIONS } from "@/lib/sidebar/animations"
import { getColor } from "@/lib/sidebar/theme"

interface UserProfileProps {
  isCollapsed?: boolean
}

export function UserProfile({ isCollapsed = false }: UserProfileProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  if (isCollapsed) {
    return (
      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="flex items-center justify-center px-[12px]">
            <motion.div
              className="size-[36px] rounded-full flex items-center justify-center cursor-pointer overflow-hidden transition-colors duration-300"
              style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={TRANSITIONS.fast}
              data-testid="user-profile"
              data-collapsed={isCollapsed}
            >
              <span className="text-white font-semibold text-[14px]">ZB</span>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[12px] py-0 relative w-full">
          <SidebarNavItem icon={<SettingsIcon />} label="Settings" isCollapsed={isCollapsed} variant="default" />
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <div className="px-[12px] pb-[8px] space-y-1">
              {["Profile Settings", "Workspace", "Sign Out"].map((item) => (
                <motion.div
                  key={item}
                  className="px-[12px] py-[8px] rounded-[8px] cursor-pointer text-[13px] font-['Inter_Display:Medium',sans-serif] transition-colors duration-300"
                  style={{ color: getColor.text.tertiary(isDark) }}
                  whileHover={{ backgroundColor: getColor.bg.container(isDark) }}
                  whileTap={INTERACTION_ANIMATIONS.scaleSmall.tap}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
