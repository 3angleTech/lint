/**
 * @file Common JsDoc rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * Base configuration should be extended:
 * 'plugin:jsdoc/recommended',
 *
 * @see https://www.npmjs.com/package/eslint-plugin-jsdoc
 *
 * @typedef { import('eslint').Linter.RulesRecord } RulesRecord
 */
'use strict';

/** @type { RulesRecord } */
export const jsdocRules = {
  'jsdoc/check-alignment': 'error',
  'jsdoc/check-indentation': ['error', { 'excludeTags': ['example'] }],
  'jsdoc/newline-after-description': 'off',
  'jsdoc/no-types': 'error',
  'jsdoc/tag-lines': 'off',
};