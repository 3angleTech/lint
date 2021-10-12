/**
 * @file Common RxJS rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * Base configuration should extended:
 *    'plugin:rxjs/recommended',
 *
 * @see https://www.npmjs.com/package/eslint-plugin-rxjs
 *
 * @typedef { import('eslint/rules').Linter.RulesRecord } RulesRecord
 */
'use strict';

/** @type { RulesRecord } */
module.exports = {
  'rxjs/no-compat': 'error',
  'rxjs/no-ignored-error': 'warn',
  'rxjs/no-ignored-observable': 'error',
  'rxjs/no-ignored-subscribe': 'warn',
  'rxjs/no-ignored-subscription': 'warn',
  'rxjs/no-redundant-notify': 'warn',
  'rxjs/no-subclass': 'error',
  'rxjs/suffix-subjects': ['error', {'suffix': '$'}],
};
