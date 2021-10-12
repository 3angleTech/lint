/**
 * @file Provides default ESLint configuration for Angular projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * @typedef { import('eslint/rules').Linter.RulesRecord } RulesRecord
 */
'use strict';

/**
 * @type { RulesRecord }
 */
module.exports = {
  '@angular-eslint/template/accessibility-alt-text': 'error',
  '@angular-eslint/template/accessibility-elements-content': 'error',
  '@angular-eslint/template/accessibility-label-has-associated-control': 'error',
  '@angular-eslint/template/accessibility-table-scope': 'error',
  '@angular-eslint/template/accessibility-valid-aria': 'error',
  '@angular-eslint/template/click-events-have-key-events': 'error',
  '@angular-eslint/template/conditional-complexity': 'error',
  '@angular-eslint/template/cyclomatic-complexity': [
    'error',
    {
      'maxComplexity': 6,
    },
  ],
  '@angular-eslint/template/eqeqeq': 'error',
  '@angular-eslint/template/mouse-events-have-key-events': 'error',
  '@angular-eslint/template/no-any': 'error',
  '@angular-eslint/template/no-call-expression': 'error',
  '@angular-eslint/template/no-positive-tabindex': 'error',
  // Enable when the rule works with simple string/number arrays.
  '@angular-eslint/template/use-track-by-function': 'off',
};
