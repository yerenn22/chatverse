import { createGlobalTheme } from "@vanilla-extract/css";

export const tokens = createGlobalTheme(":root", {
  colors: {
    brandBlurple: "#5865F2",
    brandGreen: "#57F287",
    brandYellow: "#FEEF5C",
    brandFuchsia: "#EB459E",
    brandRed: "#ED4245",
    brandWhite: "#FFFFFF",
    brandBlack: "#23272A",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  fontSizes: {
    sm: "12px",
    md: "16px",
    lg: "20px",
  },
});
