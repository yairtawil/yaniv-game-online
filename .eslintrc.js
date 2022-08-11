module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['jest', 'prettier', 'compat'],
  rules: {
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'compat/compat': 'error',
  },
  globals: {
    $TSFixMe: true,
  },
};
