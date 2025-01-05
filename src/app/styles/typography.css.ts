import { fontFace, style } from "@vanilla-extract/css";

const gintoNord = fontFace([
  {
    src: 'local("/fonts/ginto-nord/Ginto Nord Medium.ttf")',
    fontWeight: 500,
  },
  {
    src: 'local("/fonts/ginto-nord/Ginto Nord Black.ttf")',
    fontWeight: 900,
  },
  {
    src: 'local("/fonts/ginto-nord/Ginto Nord Ultra.ttf")',
    fontWeight: 950,
  },
]);

export const font = style({
  fontFamily: gintoNord,
});
