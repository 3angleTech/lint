/**
 * @file Provides default ESLint configuration for JavaScript-only projects.
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
    es2021: true,
  },
  extends: [
    'google',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended',
  ],
  plugins: [
    'import',
    'jsdoc',
    'node',
    'promise',
    'security',
  ],
  rules: Object.assign(
    {},
    require('../shared-eslint/core-rules'),
    require('../shared-eslint/import-rules'),
    require('../shared-eslint/jsdoc-rules'),
    require('../shared-eslint/security-rules'),
  ),
  settings: {
    'import/internal-regex': ['error', '^~app-.*'],
  },
};
