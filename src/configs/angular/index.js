/**
 * @file ESLint configuration for angular projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { baseConfig } from '../base.mjs';
import { angularRules } from './angular-rules.js';
import { angularTemplateRules } from './angular-template-rules.js';
import { typescriptRules } from '../../rules/typescript-rules.js';
import { typescriptSpecRules } from '../../rules/typescript-spec-rules.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type { import('eslint').Linter.Config[] } */
export const angularConfig = [
  ...baseConfig,
  ...tseslint.configs.recommendedTypeChecked,
  ...angular.configs.tsRecommended,
  {
    name: '3angletech/angular-ts',
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      ...typescriptRules,
      ...angularRules,
    },
  },
  {
    name: '3angletech/angular-specs',
    files: ['**/*.spec.ts', '**/__tests__/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.jasmine,
      },
    },
    rules: {
      ...typescriptSpecRules,
      ...angularRules,
    },
  },
  ...angular.configs.templateRecommended,
  ...angular.configs.templateAccessibility,
  {
    name: '3angletech/angular-html-overrides',
    files: ['**/*.html'],
    rules: {
      ...angularTemplateRules,
    },
  },
];