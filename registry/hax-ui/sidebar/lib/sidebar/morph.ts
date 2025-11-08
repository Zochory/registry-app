import { Transition } from "motion/react";

export const MORPH_TIMING = {
  contentSwitchDelay: 450,
  sidebarExitDuration: 0.2,
  sidebarEnterDuration: 0.3,
  sidebarEnterDelay: 0.1,
  toolbarEnterDuration: 0.25,
  toolbarEnterDelay: 0,
  shadowDuration: 0.5,
  scaleDuration: 0.6,
} as const;

export const MORPH_SCALE_VALUES = {
  collapse: [1, 0.98, 1] as [number, number, number],
  expand: [1, 1.01, 1] as [number, number, number],
} as const;

export const MORPH_TRANSITION = {
  container: {
    type: "spring" as const,
    stiffness: 260,
    damping: 28,
    mass: 0.6,
  },
  position: {
    type: "spring" as const,
    stiffness: 300,
    damping: 32,
    mass: 0.5,
  },
  sidebarContentExit: {
    duration: MORPH_TIMING.sidebarExitDuration,
    ease: [0.4, 0, 1, 1],
  } satisfies Transition,
  sidebarContentEnter: {
    duration: MORPH_TIMING.sidebarEnterDuration,
    delay: MORPH_TIMING.sidebarEnterDelay,
    ease: [0, 0, 0.2, 1],
  } satisfies Transition,
  toolbarContentEnter: {
    duration: MORPH_TIMING.toolbarEnterDuration,
    delay: MORPH_TIMING.toolbarEnterDelay,
    ease: [0, 0, 0.2, 1],
  } satisfies Transition,
  scale: {
    duration: MORPH_TIMING.scaleDuration,
    ease: [0.34, 1.56, 0.64, 1],
  } satisfies Transition,
  shadow: {
    duration: MORPH_TIMING.shadowDuration,
    ease: "easeInOut" as const,
  } satisfies Transition,
  staggerChildren: 0.05,
  itemExitDuration: 0.2,
  itemEnterDuration: 0.3,
} as const;
