"use client"

import { motion } from "motion/react"

import { containerVariants, itemVariants } from "@/lib/sidebar/animations"
import { MAIN_NAVIGATION } from "@/lib/sidebar/navigation"
import type { NavigationProps } from "@/lib/sidebar/navigation"
import { SidebarNavItem } from "@/components/sidebar/sidebar-nav-item"

interface SidebarNavProps extends NavigationProps {
  isCollapsed?: boolean
}

export function SidebarNav({ activeItem, onItemClick, isCollapsed = false }: SidebarNavProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-auto size-full">
        <div
          className={`box-border content-stretch flex flex-col items-start py-0 relative w-full ${
            isCollapsed ? "px-[12px]" : "pl-[12px] pr-[16px]"
          }`}
        >
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <motion.div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {MAIN_NAVIGATION.map((navItem) => (
                <motion.div key={navItem.id} variants={itemVariants} className="w-full">
                  <SidebarNavItem
                    icon={navItem.icon}
                    label={navItem.label}
                    variant={navItem.variant}
                    isActive={activeItem === navItem.id}
                    onClick={() => onItemClick?.(navItem.id)}
                    isCollapsed={isCollapsed}
                    layoutId={`nav-${navItem.id}`}
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="h-[112px] shrink-0 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
