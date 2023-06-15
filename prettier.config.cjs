/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  endOfLine: "auto",
  importOrder: [
    "react",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@type/(.*)$",
    "",
    "^@assets/(.*)$",
    "",
    "^@store/(.*)$",
    "",
    "^@features/(.*)$",
    "",
    "^@context/(.*)$",
    "",
    "^@pages/(.*)$",
    "",
    "^@ui/(.*)$",
    "",
    "^@components/(.*)$",
    "",
    "^@three/(.*)$",
    "",
    "^@hooks/(.*)$",
    "",
    "^@services/(.*)$",
    "",
    "^@models/(.*)$",
    "",
    "^@utils/(.*)$",
    "",
    "^@constants/(.*)$",
    "",
    "^[./]"
  ]
};