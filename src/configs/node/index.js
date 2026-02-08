/**
 * @file Provides default ESLint configuration for node projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

import tseslint from 'typescript-eslint';
import globals from 'globals';

import { baseConfig } from '../base.mjs';
import { nodeRules } from './node-rules.js';
import { typescriptRules } from '../../rules/typescript-rules.js';
import { typescriptSpecRules } from '../../rules/typescript-spec-rules.js';

/** @type { import('eslint').Linter.Config[] } */
export const nodeConfig = [
  ...baseConfig,
  ...tseslint.configs.recommendedTypeChecked.map(config => ({
    ...config,
    files: ['**/*.ts'],
  })),
  {
    name: '3angletech/node-typescript',
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      ...typescriptRules,
      ...nodeRules,
    },
  },
  {
    name: '3angletech/node-base',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...nodeRules,
    },
  },
  {
    name: '3angletech/node-specs',
    files: ['**/*.spec.ts', '**/test/**/*.ts', '**/__tests__/**/*.ts'],
    rules: {
      ...typescriptSpecRules,
      ...nodeRules,
    },
  },
];