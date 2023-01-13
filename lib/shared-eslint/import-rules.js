/**
 * @file Common import rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * Base configuration should be extended:
 *    'plugin:import/recommended',
 *    'plugin:import/typescript',
 *
 * @see https://www.npmjs.com/package/eslint-plugin-import
 *
 * @typedef { import('eslint/rules').Linter.RulesRecord } RulesRecord
 */
'use strict';

/** @type { RulesRecord } */
module.exports = {
  'import/no-cycle': 'error',
  'import/no-default-export': 'off',
  'import/no-deprecated': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      packageDir: [
        '.',
      ],
    },
  ],
  'import/no-internal-modules': 'off',
  'import/no-unassigned-import': 'off',
  'import/order': 'off',
};
