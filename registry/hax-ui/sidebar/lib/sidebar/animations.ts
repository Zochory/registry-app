import type { Variants, Transition } from "motion/react"

export const ANIMATION_DURATION = {
  fast: 0.12, // Faster for instant feedback
  normal: 0.25, // Balanced for smooth transitions
  slow: 0.35, // Reduced for better perceived performance
} as const

export const ANIMATION_DELAY = {
  short: 0.03, // Minimal delay for responsive feel
  medium: 0.12,
  long: 0.25,
} as const

export const STAGGER_CONFIG = {
  fast: 0.03, // Faster stagger for snappier animations
  normal: 0.06,
  slow: 0.1,
} as const

export const SPRING_CONFIG = {
  tight: { type: "spring" as const, stiffness: 500, damping: 38 },
  default: { type: "spring" as const, stiffness: 340, damping: 34 },
  bouncy: { type: "spring" as const, stiffness: 420, damping: 20 },
  smooth: { type: "spring" as const, stiffness: 300, damping: 32 },
} as const

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_CONFIG.fast,
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 340,
      damping: 30,
    },
  },
}

export const itemVariantsFromBottom: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 340,
      damping: 30,
    },
  },
}

export const containerVariantsDelayed: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_CONFIG.fast,
      delayChildren: ANIMATION_DELAY.long,
    },
  },
}

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 340,
      damping: 32,
    },
  },
}

export const TRANSITIONS = {
  default: { duration: ANIMATION_DURATION.normal, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  fast: { duration: ANIMATION_DURATION.fast, ease: [0.4, 0, 0.2, 1] } as Transition,
  slow: { duration: ANIMATION_DURATION.slow, ease: [0.16, 1, 0.3, 1] } as Transition,
  fadeIn: { duration: ANIMATION_DURATION.slow, delay: ANIMATION_DELAY.medium, ease: [0, 0, 0.2, 1] } as Transition,
  fadeInDelayed: { duration: ANIMATION_DURATION.slow, delay: ANIMATION_DELAY.long, ease: [0, 0, 0.2, 1] } as Transition,
} as const

export const INTERACTION_ANIMATIONS = {
  scale: {
    hover: { scale: 1.04 },
    tap: { scale: 0.96 },
  },
  scaleSmall: {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  },
  scaleIcon: {
    hover: { scale: 1.08 },
  },
} as const
