import { Transition } from "motion/react";

type TransitionWithEase = Extract<Transition, { ease?: unknown }>;

export function createStaggerDelay(index: number, baseDelay = 0, staggerAmount = 0.05): number {
  return baseDelay + index * staggerAmount;
}

export function createSpringTransition(stiffness = 300, damping = 30, mass = 0.8): Transition {
  return {
    type: "spring",
    stiffness,
    damping,
    mass,
  };
}

export function createEaseTransition(
  duration: number,
  ease: TransitionWithEase["ease"] = "easeInOut",
  delay = 0
): TransitionWithEase {
  return {
    duration,
    ease,
    delay,
  } satisfies TransitionWithEase;
}

export function createCombinedTransition(
  baseTransition: Transition,
  overrides: Record<string, unknown> = {}
): Transition & Record<string, unknown> {
  return {
    ...baseTransition,
    ...overrides,
  };
}

export function getShadow(isDark: boolean, isCollapsed: boolean): string {
  if (!isCollapsed) {
    return "0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0)";
  }

  return isDark
    ? "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1)"
    : "0 4px 24px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.04)";
}

export function getBackgroundWithOpacity(r: number, g: number, b: number, opacity: number): string {
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
