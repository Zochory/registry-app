'use client';

import { motion } from "motion/react";

import { containerVariants, itemVariants } from "@/lib/sidebar/animations";
import { getColor } from "@/lib/sidebar/theme";
import { EXPLORE_NAVIGATION, MAIN_NAVIGATION } from "@/lib/sidebar/navigation";
import { NavigationProps } from "@/types/navigation";
import { SidebarNavItem } from "@/components/sidebar/sidebar-nav-item";
import { useTheme } from "@/components/theme/theme-provider";

interface SidebarNavProps extends NavigationProps {
  isCollapsed?: boolean;
}

export function SidebarNav({ activeItem, onItemClick, isCollapsed = false }: SidebarNavProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
                <motion.div key={navItem.id} variants={itemVariants} className={navItem.variant === "primary" ? "" : "w-full"}>
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

            <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  {!isCollapsed && (
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center size-full">
                        <div className="box-border content-stretch flex items-center pb-[6px] pl-[12px] pr-[149.52px] pt-0 relative w-full">
                          <div className="content-stretch flex flex-col items-start relative shrink-0">
                            <div
                              className="flex flex-col font-['Inter_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[11.883px] text-nowrap transition-colors duration-300"
                              style={{ color: getColor.text.primary(isDark) }}
                            >
                              <p className="leading-[19.5px] whitespace-pre">Explore</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <motion.div className="w-full space-y-0" variants={containerVariants} initial="hidden" animate="show">
                    {EXPLORE_NAVIGATION.map((navItem) => (
                      <motion.div key={navItem.id} variants={itemVariants}>
                        <SidebarNavItem
                          icon={navItem.icon}
                          label={navItem.label}
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
        </div>
      </div>
    </div>
  );
}
