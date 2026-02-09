/**
 * @file Common import rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

/** @type { import('eslint').Linter.RulesRecord } */
export const importRules = {
  'import/no-default-export': 'off',
  'import/no-deprecated': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      packageDir: ['.'],
    },
  ],
  'import/no-internal-modules': 'off',
  'import/no-unassigned-import': 'off',
  'import/order': 'off',
};