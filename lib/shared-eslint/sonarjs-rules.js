/**
 * @file Common SonarJS rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * Base configuration should extended:
 *    'plugin:sonarjs/recommended',
 *
 * @see https://www.npmjs.com/package/eslint-plugin-sonarjs
 *
 * @typedef { import('eslint/rules').Linter.RulesRecord } RulesRecord
 */
'use strict';

/** @type { RulesRecord } */
module.exports = {
  // Replaced by sonarjs/no-useless-catch.
  'no-useless-catch': 'off',
  'sonarjs/no-collapsible-if': 'off',
  'sonarjs/no-duplicate-string': 'off',
  'sonarjs/no-identical-conditions': 'error',
  'sonarjs/no-identical-functions': 'error',
};
