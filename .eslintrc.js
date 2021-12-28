module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2020: true,
    },
    extends: [
      'airbnb-base',
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // 'array-bracket-newline': [
      //   'warn', 'always',
      // ],
      'array-bracket-spacing': [ 'error', 'always' ],
      'no-console': 'off',
      'linebreak-style': 0,
      'getter-return': [ 'error', { allowImplicit: true } ],
    },
  };