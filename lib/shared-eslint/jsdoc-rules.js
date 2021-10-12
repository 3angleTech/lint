/**
 * @file Common JsDoc rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * Base configuration should extended:
 *    'plugin:jsdoc/recommended',
 *
 * @see https://www.npmjs.com/package/eslint-plugin-jsdoc
 *
 * @typedef { import('eslint/rules').Linter.RulesRecord } RulesRecord
 */
'use strict';

/** @type { RulesRecord } */
module.exports = {
  'jsdoc/check-alignment': 'error',
  'jsdoc/check-indentation': ['error', {'excludeTags': ['example']}],
  'jsdoc/newline-after-description': 'error',
  'jsdoc/no-types': 'error',
};
