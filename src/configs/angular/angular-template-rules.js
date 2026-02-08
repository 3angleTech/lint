/**
 * @file Provides default ESLint configuration for Angular templates.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

/** @type { import('eslint').Linter.RulesRecord } */
export const angularTemplateRules = {
  '@angular-eslint/template/alt-text': 'error',
  '@angular-eslint/template/elements-content': 'error',
  '@angular-eslint/template/label-has-associated-control': 'error',
  '@angular-eslint/template/table-scope': 'error',
  '@angular-eslint/template/valid-aria': 'error',
  '@angular-eslint/template/click-events-have-key-events': 'error',
  '@angular-eslint/template/conditional-complexity': 'error',
  '@angular-eslint/template/cyclomatic-complexity': ['error', { 'maxComplexity': 6 }],
  '@angular-eslint/template/eqeqeq': 'error',
  '@angular-eslint/template/mouse-events-have-key-events': 'error',
  '@angular-eslint/template/no-any': 'error',
  '@angular-eslint/template/no-call-expression': 'error',
  '@angular-eslint/template/no-positive-tabindex': 'error',
  '@angular-eslint/template/use-track-by-function': 'off',
};