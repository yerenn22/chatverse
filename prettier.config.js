/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  printWidth: 100,
  semi: true,
  quoteProps: "consistent",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^app/(.*)$",
    "^pages/(.*)$",
    "^widgets/(.*)$",
    "^features/(.*)$",
    "^entities/(.*)$",
    "^shared/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
