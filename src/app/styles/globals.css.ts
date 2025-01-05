import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::after, *::before", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
  outline: "none",
});

globalStyle("html, body", {});
