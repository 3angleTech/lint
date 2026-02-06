/**
 * @file Common TypeScript rules for spec files.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * @typedef { import('eslint').Linter.RulesRecord } RulesRecord
 */
'use strict';

/** @type { RulesRecord } */
export const typescriptSpecRules = {
  '@typescript-eslint/no-magic-numbers': 'off',
  'sonarjs/no-identical-functions': 'off',
};