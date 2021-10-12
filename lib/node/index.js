/**
 * @file Provides default ESLint configuration for node projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * @typedef { import('eslint').Linter.Config } ESLintConfig
 */
'use strict';

/**
 * @type { ESLintConfig }
 */
module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: [
    '../ecmascript',
  ],
  rules: Object.assign(
    {},
    require('./node-rules'),
  ),
  overrides: [
    {
      // Only apply TypeScript rules to typescript files.
      files: '*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      extends: [
        '../ecmascript',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: [
        '@typescript-eslint/eslint-plugin',
      ],
      rules: Object.assign(
        {},
        require('../shared-eslint/typescript-rules'),
        require('./node-rules'),
      ),
    },
  ],
};
