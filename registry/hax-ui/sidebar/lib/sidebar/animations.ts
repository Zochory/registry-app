import { Variants, Transition } from "motion/react";

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;

export const ANIMATION_DELAY = {
  short: 0.05,
  medium: 0.2,
  long: 0.4,
} as const;

export const STAGGER_CONFIG = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const;

export const SPRING_CONFIG = {
  tight: { type: "spring" as const, stiffness: 500, damping: 30 },
  default: { type: "spring" as const, stiffness: 300, damping: 30 },
  bouncy: { type: "spring" as const, stiffness: 400, damping: 17 },
  smooth: { type: "spring" as const, stiffness: 300, damping: 20 },
} as const;

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_CONFIG.fast,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export const itemVariantsFromBottom: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const containerVariantsDelayed: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_CONFIG.fast,
      delayChildren: ANIMATION_DELAY.long,
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export const TRANSITIONS = {
  default: { duration: ANIMATION_DURATION.normal } as Transition,
  fast: { duration: ANIMATION_DURATION.fast } as Transition,
  slow: { duration: ANIMATION_DURATION.slow } as Transition,
  fadeIn: { duration: ANIMATION_DURATION.slow, delay: ANIMATION_DELAY.medium } as Transition,
  fadeInDelayed: { duration: ANIMATION_DURATION.slow, delay: ANIMATION_DELAY.long } as Transition,
} as const;

export const INTERACTION_ANIMATIONS = {
  scale: {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  },
  scaleSmall: {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  },
  scaleIcon: {
    hover: { scale: 1.1 },
  },
} as const;
