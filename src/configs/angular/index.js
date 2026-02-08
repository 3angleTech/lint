/**
 * @file Provides default ESLint configuration for Angular projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import stylistic from '@stylistic/eslint-plugin';

import { baseConfig } from '../base.mjs';
import { angularRules } from './angular-rules.js';
import { angularTemplateRules } from './angular-template-rules.js';
import { typescriptRules } from '../../rules/typescript-rules.js';

export const angularConfig = [
  ...baseConfig,
  {
    name: '3at/angular/typescript',
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@angular-eslint': angular.tsPlugin,
      '@3at/stylistic/ts': stylistic,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      ...angular.configs.tsRecommended.rules,
      ...typescriptRules,
      ...angularRules,
    },
  },
  {
    name: '3at/angular/templates',
    files: ['**/*.html'],
    plugins: {
      'angular-eslint': angular.templatePlugin,
    },
    rules: {
      ...angular.configs.templateRecommended.rules,
      ...angular.configs.templateAccessibility.rules,
      ...angularTemplateRules,
    },
  },
];