module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    //"react-app",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'jsx-a11y',
  ],
  rules: {
    "react/jsx-filename-extension": [1, {
    "extensions": [".js", ".jsx"]}]
  },
};
