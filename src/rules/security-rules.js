/**
 * @file Common security rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * @see https://www.npmjs.com/package/eslint-plugin-security
 *
 * @typedef { import('eslint/rules').Linter.RulesRecord } RulesRecord
 */
'use strict';

/** @type { RulesRecord } */
module.exports = {
  'security/detect-non-literal-require': 'error',
};
