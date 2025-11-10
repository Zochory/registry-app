"use client"

import { AnimatePresence, motion } from "motion/react"
import { useMemo } from "react"

import { FloatingLogo } from "@/components/sidebar/floating-logo"
import { SidebarContent } from "@/components/sidebar/sidebar-content"
import { TabBarsContent } from "@/components/sidebar/tab-bars-content"
import { useTheme } from "@/components/theme/theme-provider"
import { MORPH_SCALE_VALUES, MORPH_TIMING, MORPH_TRANSITION } from "@/lib/sidebar/morph"
import { useNavigationMorph } from "@/lib/sidebar/hooks/use-navigation-morph"
import { useNavigationState } from "@/lib/sidebar/hooks/use-navigation-state"
import { getShadow } from "@/lib/utils/animations"

export function NavigationContainer() {
  const { activeItem, setActiveItem } = useNavigationState()
  const { isCollapsed, showTabBarsContent, toggleCollapse } = useNavigationMorph(MORPH_TIMING.contentSwitchDelay)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const shadowValue = useMemo(() => getShadow(isDark, isCollapsed), [isDark, isCollapsed])

  const containerStyle = useMemo(
    () => ({
      zIndex: isCollapsed ? 50 : "auto",
      willChange: isCollapsed ? "transform, width, height, opacity" : "auto",
      backfaceVisibility: "hidden" as const,
      WebkitFontSmoothing: "antialiased" as const,
    }),
    [isCollapsed],
  )

  return (
    <>
      <AnimatePresence>{isCollapsed && <FloatingLogo key="logo" />}</AnimatePresence>

      <motion.div
        className="shrink-0"
        layoutId="navigation-container"
        initial={false}
        animate={{
          position: isCollapsed ? "fixed" : "relative",
          top: isCollapsed ? 12 : undefined,
          left: isCollapsed ? "50%" : undefined,
          x: isCollapsed ? "-50%" : 0,
          width: isCollapsed ? "auto" : 255,
          height: isCollapsed ? 48 : "100%",
          paddingLeft: isCollapsed ? 0 : 12,
          paddingRight: isCollapsed ? 0 : 8,
          paddingTop: isCollapsed ? 0 : 12,
          paddingBottom: isCollapsed ? 0 : 12,
        }}
        transition={MORPH_TRANSITION.container}
        style={containerStyle}
        data-testid={isCollapsed ? "tab-bars" : "sidebar"}
        data-collapsed={isCollapsed}
      >
        <motion.div
          layoutId="navigation-backdrop"
          className="backdrop-blur-[12px] backdrop-filter box-border content-stretch flex items-start relative transition-colors duration-500"
          animate={{
            height: isCollapsed ? 48 : "100%",
            width: isCollapsed ? "auto" : "100%",
            borderRadius: 24,
            paddingLeft: isCollapsed ? 12 : 0,
            paddingRight: isCollapsed ? 12 : 0,
            paddingTop: isCollapsed ? 6 : 0,
            paddingBottom: isCollapsed ? 6 : 12,
            flexDirection: isCollapsed ? "row" : "column",
            gap: isCollapsed ? 6 : 0,
            scale: isCollapsed ? MORPH_SCALE_VALUES.collapse : MORPH_SCALE_VALUES.expand,
          }}
          transition={{ ...MORPH_TRANSITION.container, scale: MORPH_TRANSITION.scale }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            overflow: "hidden",
            willChange: isCollapsed ? "transform, opacity, width, height" : "auto",
            backfaceVisibility: "hidden",
            perspective: 1000,
            transform: "translateZ(0)",
          }}
        >
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-[24px]"
            animate={{ boxShadow: shadowValue }}
            transition={MORPH_TRANSITION.shadow}
          />

          <AnimatePresence mode="wait">
            {showTabBarsContent ? (
              <motion.div
                key="tab-bars"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  opacity: {
                    duration: MORPH_TRANSITION.tabBarsContentEnter.duration,
                    ease: MORPH_TRANSITION.tabBarsContentEnter.ease,
                  },
                  scale: {
                    duration: MORPH_TRANSITION.tabBarsContentEnter.duration,
                    ease: MORPH_TRANSITION.tabBarsContentEnter.ease,
                  },
                }}
                className="flex items-center"
                style={{ gap: 6 }}
              >
                <TabBarsContent activeItem={activeItem} onItemClick={setActiveItem} onMenuClick={toggleCollapse} />
              </motion.div>
            ) : (
              <motion.div
                key="sidebar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: isCollapsed ? MORPH_TRANSITION.sidebarContentExit : MORPH_TRANSITION.sidebarContentEnter,
                }}
                className="w-full h-full"
              >
                <SidebarContent activeItem={activeItem} onItemClick={setActiveItem} onMenuClick={toggleCollapse} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  )
}
