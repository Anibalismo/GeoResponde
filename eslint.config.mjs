import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-restricted-imports": ["error", {
        "patterns": [{
          "group": ["@georesponde/*/src/*", "@georesponde/*/src"],
          "message": "Internal package implementation details must never be imported outside their own package. Use the public API exported from the package root instead."
        }]
      }]
    }
  }
];
