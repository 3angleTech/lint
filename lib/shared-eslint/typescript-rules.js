/**
 * @file Common TypeScript rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * Base configuration should extended:
 *    'plugin:@typescript-eslint/recommended',
 *
 * @see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
 *
 * @typedef { import('eslint/rules').Linter.RulesRecord } RulesRecord
 */
'use strict';

/** @type { RulesRecord } */
module.exports = {
  '@typescript-eslint/array-type': [
    'error',
    {
      'default': 'array',
    },
  ],
  '@typescript-eslint/ban-types': [
    'error',
    {
      'types': {
        'JSON': {
          'message': 'Use unknown instead',
          'fixWith': 'unknown',
        },
        'Object': {
          'message': 'Use Record or unknown instead',
        },
        'String': {
          'message': 'Use string instead',
          'fixWith': 'string',
        },
        'Boolean': {
          'message': 'Use boolean instead',
          'fixWith': 'boolean',
        },
        'Number': {
          'message': 'Use number instead',
          'fixWith': 'number',
        },
      },
    },
  ],
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/consistent-type-definitions': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/method-signature-style': ['error', 'method'],
  // TODO: Enforce SNAKE_CASE for static members.
  '@typescript-eslint/naming-convention': [
    'error',
    {
      'selector': 'interface',
      'format': ['PascalCase'],
      'custom': {
        'regex': '^I[A-Z]',
        'match': true,
      },
    },
  ],
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-empty-interface': [
    'error',
    {
      'allowSingleExtends': true,
    },
  ],
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-inferrable-types': [
    'off',
    {'ignoreParameters': true, 'ignoreProperties': true},
  ],
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/promise-function-async': 'off',
  '@typescript-eslint/quotes': [
    'error',
    'single',
    {
      'avoidEscape': true,
    },
  ],
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/unbound-method': ['error', {ignoreStatic: true}],

  // NOTE: JavaScript-only rules need to be disabled.
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': ['error'],
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['error', {'args': 'none'}],
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error', {'variables': true}],
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error', {'hoist': 'all'}],
  'require-await': 'off',
  '@typescript-eslint/require-await': 'error',
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',

  // Type for param and returns is redundant in TypeScript files.
  'jsdoc/require-param-type': 'off',
  'jsdoc/require-returns': 'off',
  'jsdoc/require-returns-description': 'off',
  'jsdoc/require-returns-type': 'off',
};
