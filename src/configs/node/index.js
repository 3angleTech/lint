/**
 * @file Provides default ESLint configuration for node projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

import tseslint from 'typescript-eslint';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { baseConfig } from '../base.mjs';
import { nodeRules } from './node-rules.js';
import { typescriptRules } from '../../rules/typescript-rules.js';
import { typescriptSpecRules } from '../../rules/typescript-spec-rules.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type { import('eslint').Linter.Config[] } */
export const nodeConfig = [
  ...baseConfig,
  ...tseslint.configs.recommendedTypeChecked,
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
    name: '3angletech/node-typescript',
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      ...typescriptRules,
      ...nodeRules,
    },
  },
  {
    name: '3angletech/node-specs',
    files: ['**/*.spec.ts', '**/__tests__/**/*.ts'],
    rules: {
      ...typescriptSpecRules,
      ...nodeRules,
    },
  },
];