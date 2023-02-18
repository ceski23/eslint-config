module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["import", "prefer-arrow-functions"],
  rules: {
    eqeqeq: ["error"],
    "prefer-template": "warn",
    "object-shorthand": "warn",
    "arrow-body-style": "warn",
    "arrow-parens": ["warn", "as-needed"],
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "ignore",
        alphabetize: { order: "asc" },
      },
    ],
    "import/no-useless-path-segments": "warn",
    "import/no-relative-parent-imports": "warn",
    "import/newline-after-import": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "generic",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: {
          delimiter: "comma",
          requireLast: true,
        },
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
        multilineDetection: "brackets",
      },
    ],
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react/button-has-type": "warn",
    "react/jsx-max-props-per-line": ["warn", { maximum: 1 }],
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-first-prop-new-line": ["warn", "multiline-multiprop"],
    "react/jsx-indent-props": "warn",
    "react/jsx-indent": "warn",
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "react/jsx-one-expression-per-line": "warn",
    "react/jsx-no-leaked-render": "warn",
    "react/self-closing-comp": "warn",
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "function-expression",
      },
    ],
  },
};
