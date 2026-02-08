/**
 * @file Provides default ESLint configuration for Nestjs projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import { nodeConfig } from '../node/index.js';
import { nestjsRules } from './nest-rules.js';

/** @type { import('eslint').Linter.Config[] } */
export const nestjsConfig = [
    ...nodeConfig,
    {
        name: '3angletech/nestjs',
        files: ['**/*.ts'],
        plugins: {
          '@typescript-eslint': tseslint.plugin,
          'import': importPlugin,
        },
        rules: {
            ...nestjsRules,
        }
    },
];