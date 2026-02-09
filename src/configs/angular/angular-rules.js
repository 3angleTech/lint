/**
 * @file Provides default ESLint configuration for Angular projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

/** @type { import('eslint').Linter.RulesRecord } */
export const angularRules = {
  '@angular-eslint/component-max-inline-declarations': 'error',
  '@angular-eslint/contextual-decorator': 'error',
  '@angular-eslint/no-forward-ref': 'error',
  '@angular-eslint/no-input-prefix': ['error', { 'prefixes': ['can', 'is', 'should'] }],
  '@angular-eslint/no-lifecycle-call': 'error',
  '@angular-eslint/no-pipe-impure': 'error',
  '@angular-eslint/no-queries-metadata-property': 'error',
  '@angular-eslint/prefer-output-readonly': 'error',
  '@angular-eslint/relative-url-prefix': 'error',
  '@angular-eslint/use-component-selector': 'error',
  '@angular-eslint/use-component-view-encapsulation': 'error',
  '@angular-eslint/directive-selector': ['error', { 'type': 'attribute', 'prefix': 'app', 'style': 'camelCase' }],
  '@angular-eslint/component-selector': ['error', { 'type': 'element', 'prefix': 'app', 'style': 'kebab-case' }],
  '@angular-eslint/pipe-prefix': ['error', { 'prefixes': ['app'] }],
};