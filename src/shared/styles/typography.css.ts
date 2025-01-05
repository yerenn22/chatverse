import { fontFace } from "@vanilla-extract/css";
import { style, styleVariants } from "@vanilla-extract/css";

export const gintoNord = fontFace([
  {
    src: 'url("/fonts/ginto-nord/ginto-nord-medium.woff2")',
    fontWeight: 500,
  },
  {
    src: 'url("/fonts/ginto-nord/ginto-nord-black.woff2")',
    fontWeight: 900,
  },
  {
    src: 'url("/fonts/ginto-nord/ginto-nord-ultra.woff2")',
    fontWeight: 950,
  },
]);

export const whitney = fontFace([
  {
    src: 'url("/fonts/whitney/whitney-book.woff2")',
    fontWeight: 300,
  },
  {
    src: 'url("/fonts/whitney/whitney-semibold.woff2")',
    fontWeight: 600,
  },
  {
    src: 'url("/fonts/whitney/whitney-book-italic.woff2")',
    fontWeight: 300,
    fontStyle: "italic",
  },
  {
    src: 'url("/fonts/whitney/whitney-semibold-italic.woff2")',
    fontWeight: 600,
    fontStyle: "italic",
  },
]);

const headlineBaseStyle = style({
  fontFamily: gintoNord,
});

const ultraBaseStyle = style([
  headlineBaseStyle,
  {
    fontSize: "7.5rem",
    fontWeight: 950,
  },
]);

const primaryBaseStyle = style([
  headlineBaseStyle,
  {
    fontSize: "4.125rem",
    fontWeight: 900,
  },
]);

const secondaryBaseStyle = style([
  headlineBaseStyle,
  {
    fontSize: "2.5rem",
    fontWeight: 500,
  },
]);

export const healineVariantStyles = styleVariants({
  ultraLong: [ultraBaseStyle, { lineHeight: "95%" }],
  ultraShort: [ultraBaseStyle, { lineHeight: "80%" }],
  primaryLong: [primaryBaseStyle, { lineHeight: "110%" }],
  primaryShort: [primaryBaseStyle, { lineHeight: "90%" }],
  secondary: [secondaryBaseStyle, { lineHeight: "90%" }],
});

export const paragraphStyle = style({
  fontFamily: whitney,
  fontSize: "1.25rem",
  fontWeight: 300,
  lineHeight: "135%",
});

export const paragraphWeightStyles = styleVariants({
  light: { fontWeight: 300 },
  bold: { fontWeight: 600 },
});
