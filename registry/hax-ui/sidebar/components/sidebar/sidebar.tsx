'use client';

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { FloatingLogo } from "@/components/sidebar/floating-logo";
import { FloatingTabBars } from "@/components/sidebar/floating-tab-bars";
import { SidebarFooter } from "@/components/sidebar/sidebar-footer";
import { SidebarHeader } from "@/components/sidebar/sidebar-header";
import { SidebarNav } from "@/components/sidebar/sidebar-nav";
import { DEFAULT_ACTIVE_ITEM } from "@/lib/sidebar/navigation";
import { NavigationItemId } from "@/lib/sidebar/navigation";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState<NavigationItemId>(DEFAULT_ACTIVE_ITEM);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleMenuClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isCollapsed ? (
        <>
          <FloatingLogo key="logo" />
          <FloatingTabBars
            key="tab-bars"
            activeItem={activeItem}
            onItemClick={setActiveItem}
            onMenuClick={handleMenuClick}
          />
        </>
      ) : (
        <motion.div
          key="sidebar"
          className="box-border content-stretch flex flex-col gap-[4px] h-full items-start pl-[12px] pr-[8px] py-[12px] relative shrink-0"
          initial={false}
          animate={{
            width: 255,
            opacity: 1,
          }}
          exit={{
            width: 255,
            opacity: 0,
            transition: {
              duration: 0.25,
              ease: [0.32, 0.72, 0, 1],
            },
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 0.8,
          }}
          data-testid="sidebar"
          data-collapsed={isCollapsed}
          layout
        >
          <motion.div
            className="backdrop-blur-[12.7px] backdrop-filter basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[12px] pt-0 px-0 relative rounded-[24px] shrink-0 w-full transition-colors duration-500"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
            layout
          >
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
              <div className="size-full">
                <div className="box-border content-stretch flex flex-col items-start justify-between pl-0 pr-px py-0 relative size-full">
                  <motion.div
                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    exit={{
                      opacity: 0,
                      y: -10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <SidebarHeader onMenuClick={handleMenuClick} isCollapsed={false} />
                    <SidebarNav
                      activeItem={activeItem}
                      onItemClick={setActiveItem}
                      isCollapsed={false}
                    />
                  </motion.div>
                  <motion.div
                    exit={{
                      opacity: 0,
                      y: 10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <SidebarFooter
                      activeItem={activeItem}
                      onItemClick={setActiveItem}
                      isCollapsed={false}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
