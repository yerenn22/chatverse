import { globalStyle } from "@vanilla-extract/css";

import { whitney } from "shared/styles/typography.css";

globalStyle("*, *::after, *::before", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
  fontFamily: whitney,
  outline: "none",
});
