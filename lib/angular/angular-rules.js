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
  '@angular-eslint/component-max-inline-declarations': 'error',
  '@angular-eslint/contextual-decorator': 'error',
  '@angular-eslint/no-forward-ref': 'error',
  '@angular-eslint/no-input-prefix': ['error', {'prefixes': ['can', 'is', 'should']},],
  '@angular-eslint/no-lifecycle-call': 'error',
  '@angular-eslint/no-pipe-impure': 'error',
  '@angular-eslint/no-queries-metadata-property': 'error',
  // '@angular-eslint/prefer-on-push-component-change-detection': 'error',
  '@angular-eslint/prefer-output-readonly': 'error',
  '@angular-eslint/relative-url-prefix': 'error',
  '@angular-eslint/use-component-selector': 'error',
  '@angular-eslint/use-component-view-encapsulation': 'error',
  '@angular-eslint/directive-selector': [
    'error',
    {
      'type': 'attribute',
      'prefix': 'app',
      'style': 'camelCase',
    },
  ],
  '@angular-eslint/component-selector': [
    'error',
    {
      'type': 'element',
      'prefix': 'app',
      'style': 'kebab-case',
    },
  ],
  '@angular-eslint/pipe-prefix': [
    'error',
    {
      'prefixes': [
        'app',
      ],
    },
  ],
  '@typescript-eslint/no-empty-function': 'off',
  'max-len': [
    'error',
    {
      'ignoreUrls': true,
      'ignorePattern': '^import \\{ .+ \\} from|export \\{ .+ \\} from|class [a-zA-Z0-9]+ implements|^\\s+loadChildren: \\(\\) => import\\(',
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'code': 140,
    },
  ],
};
