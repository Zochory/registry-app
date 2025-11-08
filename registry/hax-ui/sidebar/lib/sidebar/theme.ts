export const THEME_COLORS = {
  text: {
    primary: {
      light: "rgba(0, 0, 0, 0.85)",
      dark: "rgba(255, 255, 255, 0.85)",
    },
    secondary: {
      light: "rgba(0, 0, 0, 0.55)",
      dark: "rgba(255, 255, 255, 0.55)",
    },
    tertiary: {
      light: "rgba(0, 0, 0, 0.65)",
      dark: "rgba(255, 255, 255, 0.65)",
    },
    active: {
      light: "rgba(0, 0, 0, 0.95)",
      dark: "rgba(255, 255, 255, 0.95)",
    },
  },
  background: {
    app: {
      light: "#f5f5f5",
      dark: "#242424",
    },
    container: {
      light: "rgba(0, 0, 0, 0.03)",
      dark: "rgba(255, 255, 255, 0.05)",
    },
    hover: {
      light: "rgba(0, 0, 0, 0.05)",
      dark: "rgba(255, 255, 255, 0.08)",
    },
    active: {
      light: "rgba(0, 0, 0, 0.08)",
      dark: "rgba(255, 255, 255, 0.12)",
    },
    activeHover: {
      light: "rgba(0, 0, 0, 0.1)",
      dark: "rgba(255, 255, 255, 0.15)",
    },
  },
  interactive: {
    hover: {
      light: "rgba(0, 0, 0, 0.05)",
      dark: "rgba(255, 255, 255, 0.1)",
    },
    active: {
      light: "rgba(0, 0, 0, 0.08)",
      dark: "rgba(255, 255, 255, 0.12)",
    },
  },
  indicator: {
    light: "black",
    dark: "white",
  },
  stroke: {
    light: "#1A1A1A",
    dark: "#E5E5E5",
  },
} as const;

function getThemeColor(isDark: boolean, colorPath: string): string {
  const keys = colorPath.split(".");
  let value: any = THEME_COLORS;

  for (const key of keys) {
    value = value[key];
    if (value === undefined) return "";
  }

  return isDark ? value.dark : value.light;
}

export const getColor = {
  text: {
    primary: (isDark: boolean) => getThemeColor(isDark, "text.primary"),
    secondary: (isDark: boolean) => getThemeColor(isDark, "text.secondary"),
    tertiary: (isDark: boolean) => getThemeColor(isDark, "text.tertiary"),
    active: (isDark: boolean) => getThemeColor(isDark, "text.active"),
  },
  bg: {
    app: (isDark: boolean) => getThemeColor(isDark, "background.app"),
    container: (isDark: boolean) => getThemeColor(isDark, "background.container"),
    hover: (isDark: boolean) => getThemeColor(isDark, "background.hover"),
    active: (isDark: boolean) => getThemeColor(isDark, "background.active"),
    activeHover: (isDark: boolean) => getThemeColor(isDark, "background.activeHover"),
  },
  interactive: {
    hover: (isDark: boolean) => getThemeColor(isDark, "interactive.hover"),
    active: (isDark: boolean) => getThemeColor(isDark, "interactive.active"),
  },
  indicator: (isDark: boolean) => getThemeColor(isDark, "indicator"),
  stroke: (isDark: boolean) => getThemeColor(isDark, "stroke"),
} as const;
