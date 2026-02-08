/**
 * @file Common TypeScript rules for ESLint.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 * @see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
 */

/** @type { import('eslint').Linter.RulesRecord } */
export const typescriptRules = {
  // --- 1. CORE JS HANDOFF (The Shadowing Strategy) ---
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'off',

  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'off',

  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',

  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': [
    'warn',
    {
      'ignore': [-1, 0, 1],
      'ignoreEnums': true,
      'ignoreNumericLiteralTypes': false,
      'ignoreReadonlyClassProperties': true,
    },
  ],

  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',

  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error', { 'hoist': 'all' }],

  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',

  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error', { 'variables': true }],

  'require-await': 'off',
  '@typescript-eslint/require-await': 'error',

  // --- 2. LOGIC & TYPE CHECKING (@typescript-eslint) ---
  '@typescript-eslint/array-type': ['error', { 'default': 'array' }],
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/consistent-type-definitions': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/method-signature-style': ['error', 'method'],
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-floating-promises': 'off',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-inferrable-types': ['off', { 'ignoreParameters': true, 'ignoreProperties': true }],
  '@typescript-eslint/no-redundant-type-constituents': 'off',
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/prefer-readonly': 'off',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/promise-function-async': 'off',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/typedef': 'error',
  '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      types: ['array'], 
      format: ['camelCase'],
      suffix: ['$'],
      filter: { regex: '.*\\$$', match: true },
    },
  ],

  // --- 3. STYLISTIC TS RULES (@3at/stylistic/ts) ---
  '@3at/stylistic/ts/member-delimiter-style': ['error', {
    'multiline': { 'delimiter': 'semi', 'requireLast': true },
    'singleline': { 'delimiter': 'semi', 'requireLast': false }
  }],
  '@3at/stylistic/ts/type-annotation-spacing': 'error',

  // --- 4. PLUGIN OVERRIDES FOR TS ---
  'jsdoc/require-jsdoc': 'off',
  'jsdoc/require-param': 'off',
  'jsdoc/require-param-type': 'off',
  'jsdoc/require-returns': 'off',
  'jsdoc/require-returns-description': 'off',
  'jsdoc/require-returns-type': 'off',
};