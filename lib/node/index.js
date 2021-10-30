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
        'plugin:import/typescript',
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
    {
      files: [
        '*.spec.ts',
      ],
      extends: [
        '../ecmascript',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
      ],
      globals: {
        describe: 'readonly',
        it: 'readonly',
      },
      rules: Object.assign(
        {},
        require('../shared-eslint/typescript-rules'),
        require('../shared-eslint/typescript-spec-rules'),
        require('./node-rules'),
      ),
    },
  ],
};
