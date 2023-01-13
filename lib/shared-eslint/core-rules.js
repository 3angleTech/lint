/**
 * @file Common core rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * Base configuration should extended:
 *    'standard',
 *
 * @typedef { import('eslint/rules').ESLintRules } CoreRules
 */
'use strict';

/** @type { Partial<CoreRules> } */
module.exports = {
  'arrow-body-style': 'off',
  'arrow-parens': [
    'off',
    'always',
  ],
  'brace-style': [
    'error',
    '1tbs',
  ],
  'camelcase': 'off',
  'capitalized-comments': [
    'error',
    'always',
  ],
  'comma-dangle': [
    'error',
    'always-multiline',
  ],
  // Disabled in favor of sonarjs/cognitive-complexity.
  'complexity': 'off',
  'constructor-super': 'error',
  'curly': 'error',
  'dot-notation': 'off',
  'eol-last': 'error',
  'eqeqeq': [
    'error',
    'always',
  ],
  'guard-for-in': 'error',
  'id-denylist': [
    'error',
    'any',
    'Number',
    'number',
    'String',
    'string',
    'Boolean',
    'boolean',
    'Undefined',
    'undefined',
  ],
  'id-match': 'error',
  'indent': 'error',
  'linebreak-style': [
    'error',
    'unix',
  ],
  'max-classes-per-file': [
    'error',
    1,
  ],
  'max-len': [
    'error',
    {
      'ignoreUrls': true,
      'ignorePattern': '^import \\{ .+ \\} from|export \\{ .+ \\} from|class [a-zA-Z0-9]+ implements',
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'code': 140,
    },
  ],
  'max-lines': [
    'error',
    250,
  ],
  'max-params': [
    'error',
    {
      'max': 3,
    },
  ],
  'max-statements': ['warn', 25],
  'new-parens': 'error',
  'newline-per-chained-call': 'off',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-cond-assign': 'error',
  'no-console': [
    'error',
    {
      'allow': [
        'error',
        'warn',
      ],
    },
  ],
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'error',
  'no-empty': 'off',
  'no-eval': 'error',
  'no-extra-bind': 'error',
  'no-extra-parens': 'error',
  'no-fallthrough': 'error',
  'no-invalid-regexp': 'error',
  'no-invalid-this': 'error',
  'no-magic-numbers': ['error', {'ignore': [-1, 0, 1], 'ignoreArrayIndexes': true}],
  'no-multi-str': 'error',
  'no-multiple-empty-lines': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-param-reassign': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-restricted-imports': [
    'error',
    'rxjs/Rx',
  ],
  'no-restricted-syntax': [
    'error',
    'ForInStatement',
  ],
  'no-return-await': 'error',
  'no-self-assign': 'error',
  'no-shadow': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-trailing-spaces': 'error',
  'no-undef-init': 'error',
  'no-underscore-dangle': 'off',
  'no-unsafe-finally': 'error',
  'no-unused-expressions': 'error',
  'no-unused-labels': 'error',
  'no-unused-vars': 'error',
  'no-use-before-define': 'error',
  'no-useless-constructor': 'off',
  'no-var': 'error',
  'no-warning-comments': 'warn',
  'no-with': 'error',
  'object-shorthand': 'off',
  'one-var': [
    'error',
    'never',
  ],
  'padded-blocks': 'off',
  'padding-line-between-statements': 'off',
  'prefer-const': 'error',
  'prefer-object-spread': 'error',
  'prefer-regex-literals': 'off',
  'prefer-template': 'error',
  'promise/always-return': 'off',
  'quote-props': [
    'error',
    'as-needed',
  ],
  'quotes': 'error',
  'radix': 'error',
  'require-await': 'error',
  'semi': ['error', 'always'],
  'space-before-function-paren': [
    'error',
    {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'},
  ],
  'spaced-comment': ['error', 'always', {'markers': ['/']}],
  'use-isnan': 'error',
};
