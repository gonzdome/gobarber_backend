module.exports = {
  env: {
    es6:true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  global:{
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camelCase': 'off',
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }]
  },
};
