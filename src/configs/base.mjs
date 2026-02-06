/**
 * @file Provides default ESLint configuration for JavaScript-only projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * @typedef { import('eslint').Linter.Config } ESLintConfig
 */

import jsPlugin from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import promisePlugin from 'eslint-plugin-promise';
import securityPlugin from 'eslint-plugin-security';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import globals from 'globals';

import { coreRules } from '../rules/core-rules.js';
import { importRules } from '../rules/import-rules.js';
import { jsdocRules } from '../rules/jsdoc-rules.js';
import { securityRules } from '../rules/security-rules.js';

/** @type { ESLintConfig[] } */
export const baseConfig = [
  jsPlugin.configs.recommended,
  {
    name: '3angletech/base',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    plugins: {
      'import': importPlugin,
      'jsdoc': jsdocPlugin,
      'promise': promisePlugin,
      'security': securityPlugin,
      'sonarjs': sonarjsPlugin,
    },
    settings: {
      'import/internal-regex': '^~app-.*',
    },
    rules: {
      ...promisePlugin.configs.recommended.rules,
      ...sonarjsPlugin.configs.recommended.rules,
      ...coreRules,
      ...importRules,
      ...jsdocRules,
      ...securityRules,
    },
  },
];