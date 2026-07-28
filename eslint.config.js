// The house style. Nadia will point at the rule, not at your line.
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Names carry their meaning. `data2` is not a name.
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      // A swallowed error is a lie told to the person using the app.
      "no-empty": ["error", { allowEmptyCatch: false }],
      eqeqeq: ["error", "always"],
    },
  },
  { ignores: ["dist/**", "*.config.js"] },
);
