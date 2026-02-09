/**
 * @file ESLint configuration rules overrides specific to nestjs projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

/** @type { import('eslint').Linter.RulesRecord } */
export const nestjsRules = {
  'import/no-extraneous-dependencies': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off', // Allow ! for ConfigService/DI
  '@typescript-eslint/no-explicit-any': 'off', // Common in NestJS interceptors/filters
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-parameter-properties': 'off',
};