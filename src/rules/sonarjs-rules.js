/**
 * @file Common SonarJS rules for ESLint (Replacing legacy RxJS rules).
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

/** @type { import('eslint').Linter.RulesRecord } */
export const sonarRules = {
  // 'sonarjs/no-ignored-promises': 'error',
  'sonarjs/no-all-duplicated-branches': 'error',
  'sonarjs/no-collection-size-mischeck': 'error',
  'sonarjs/no-identical-expressions': 'error',
  'sonarjs/no-misleading-array-reverse': 'error',
  'sonarjs/no-unused-collection': 'warn',
  'sonarjs/no-gratuitous-expressions': 'warn',
};