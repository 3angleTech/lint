/**
 * @file Common JsDoc rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

/** @type { import('eslint').Linter.RulesRecord } */
export const jsdocRules = {
  'jsdoc/check-alignment': 'error',
  'jsdoc/check-indentation': ['error', { 'excludeTags': ['example'] }],
  'jsdoc/no-types': 'error',
  'jsdoc/tag-lines': 'off',
};