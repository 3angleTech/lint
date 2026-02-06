/**
 * @file Common security rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * @see https://www.npmjs.com/package/eslint-plugin-security
 *
 * @typedef { import('eslint').Linter.RulesRecord } RulesRecord
 */
'use strict';

/** @type { RulesRecord } */
export const securityRules = {
  'security/detect-non-literal-require': 'error',
};