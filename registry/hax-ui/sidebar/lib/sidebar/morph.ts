import type { Transition } from "motion/react"

export const MORPH_TIMING = {
  contentSwitchDelay: 300, // Reduced from 400ms for faster response
  sidebarExitDuration: 0.12, // Faster exit for snappier feel
  sidebarEnterDuration: 0.35, // Slightly longer for smoother entrance
  sidebarEnterDelay: 0.02, // Minimal delay
  tabBarsEnterDuration: 0.25, // Balanced tab bars appearance
  tabBarsEnterDelay: 0,
  shadowDuration: 0.35, // Synchronized with sidebar
  scaleDuration: 0.4, // Faster scale for better sync
} as const

export const MORPH_SCALE_VALUES = {
  collapse: [1, 0.995, 1] as [number, number, number], // More subtle scale
  expand: [1, 1.002, 1] as [number, number, number], // More subtle scale
} as const

export const MORPH_TRANSITION = {
  container: {
    type: "spring" as const,
    stiffness: 300, // Balanced stiffness
    damping: 32, // Optimized damping for smooth deceleration
    mass: 0.4, // Lighter mass for responsive feel
  },
  position: {
    type: "spring" as const,
    stiffness: 340,
    damping: 35,
    mass: 0.4,
  },
  sidebarContentExit: {
    duration: MORPH_TIMING.sidebarExitDuration,
    ease: [0.4, 0, 0.6, 1], // Smooth ease-out
  } satisfies Transition,
  sidebarContentEnter: {
    duration: MORPH_TIMING.sidebarEnterDuration,
    delay: MORPH_TIMING.sidebarEnterDelay,
    ease: [0.16, 1, 0.3, 1], // Smooth ease-in with slight overshoot
  } satisfies Transition,
  tabBarsContentEnter: {
    duration: MORPH_TIMING.tabBarsEnterDuration,
    delay: MORPH_TIMING.tabBarsEnterDelay,
    ease: [0, 0, 0.2, 1], // Smooth entrance
  } satisfies Transition,
  scale: {
    duration: MORPH_TIMING.scaleDuration,
    ease: [0.25, 1, 0.5, 1], // Gentler curve for natural scale
  } satisfies Transition,
  shadow: {
    duration: MORPH_TIMING.shadowDuration,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  } satisfies Transition,
  staggerChildren: 0.03, // Faster stagger for responsive UI
  itemExitDuration: 0.12,
  itemEnterDuration: 0.25,
} as const
