/**
 * @file Common TypeScript rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * @typedef { import('eslint/rules').Linter.RulesRecord } RulesRecord
 */
'use strict';

/** @type { RulesRecord } */
module.exports = {
  '@typescript-eslint/no-magic-numbers': 'off',
  'sonarjs/no-identical-functions': 'off',
};
