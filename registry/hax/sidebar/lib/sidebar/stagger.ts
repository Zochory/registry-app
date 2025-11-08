export const STAGGER_DELAYS = {
  menuButton: 0,
  mainNavBase: 0.05,
  mainNavIncrement: 0.05,
  exploreNavBase: 0.15,
  exploreNavIncrement: 0.05,
  controls: 0.25,
} as const;

export const STAGGER_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.4,
} as const;

export const STAGGER_EASING = {
  popIn: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  easeOut: "easeOut" as const,
  easeIn: "easeIn" as const,
} as const;
