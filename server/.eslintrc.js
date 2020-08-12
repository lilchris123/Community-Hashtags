module.exports = {
  env: {
    "commonjs": true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
    "prettier",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  rules: {
  },
};
