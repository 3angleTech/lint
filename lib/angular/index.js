/**
 * @file ESLint configuration for angular projects.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 *
 * @typedef { import('eslint').Linter.Config } ESLintConfig
 */
'use strict';

/**
 * @type { ESLintConfig }
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: [
        '*.js',
      ],
      extends: [
        '../ecmascript',
      ],
    },
    {
      // Only apply TypeScript rules to typescript files.
      files: [
        '*.ts',
      ],
      extends: [
        '../ecmascript',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: Object.assign(
        {},
        require('../shared-eslint/typescript-rules'),
        require('./angular-rules'),
      ),
    },
    {
      files: [
        '*.spec.ts',
        '*-spec.ts',
      ],
      globals: {
        afterEach: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        beforeAll: 'readonly',
        describe: 'readonly',
        expect: 'readonly',
        it: 'readonly',
        jasmine: 'readonly',
        xdescribe: 'readonly',
        xit: 'readonly',
      },
    },
    {
      files: [
        '*.html',
      ],
      extends: [
        'plugin:@angular-eslint/template/recommended',
      ],
      rules: Object.assign(
        {},
        require('./angular-template-rules'),
      ),
    },
  ],
};
