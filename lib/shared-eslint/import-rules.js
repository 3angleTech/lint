/**
 * @file Common import rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * Base configuration should extended:
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

  // Replace core rule.
  'no-duplicate-imports': 'off',
  'import/no-duplicates': 'error',

  'import/no-extraneous-dependencies': ['error', {'devDependencies': false}],
  'import/no-internal-modules': 'off',
  'import/no-unassigned-import': 'error',
  'import/order': [
    'error',
    {
      'newlines-between': 'always',
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
      ],
      'pathGroups': [
        {
          "pattern": "~app-*/**",
          'group': 'external',
          'position': 'after',
        },
      ]
    },
  ],
};
