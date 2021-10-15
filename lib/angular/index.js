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
        'plugin:@typescript-eslint/recommended',
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
      env: {
        browser: false,
        es2021: true,
        node: true,
      },
      extends: [
        '../ecmascript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
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
      rules: Object.assign(
        {},
        require('../shared-eslint/typescript-rules'),
        require('../shared-eslint/typescript-spec-rules'),
        require('./angular-rules'),
      ),
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
