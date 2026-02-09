/**
 * @file Provides default stylelint configuration.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

export const styleConfig = {
  extends: [
    'stylelint-config-standard-scss',
  ],
  rules: {
    // --- General Rules ---
    'at-rule-empty-line-before': null,
    'at-rule-no-vendor-prefix': true,
    'color-hex-length': null,
    'color-named': 'never',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'numeric',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'media-feature-name-no-unknown': [
      true,
      {
        'ignoreMediaFeatureNames': ['prefers-reduced-motion']
      }
    ],
    'media-feature-range-notation': null,
    'property-no-vendor-prefix': true,
    
    // --- BEM Naming Convention ---
    'selector-class-pattern': [
      '^(?<BLOCK>[a-z]+(?:[a-z0-9]+\\-?)+[a-z0-9]+)(?<ELEMENT>\\_\\_(?:[a-z0-9]+\\-?)+[a-z0-9]+)?(?<MODIFIER>\\-\\-(?:[a-z0-9]+\\-?)+[a-z0-9]+)?$',
      {
        'message': 'Use BEM-style selectors (https://getbem.com/naming/)'
      }
    ],
    
    // --- Selector Constraints ---
    'selector-attribute-quotes': 'always',
    'selector-max-attribute': 2,
    'selector-max-class': 4,
    'selector-max-combinators': 4,
    'selector-max-compound-selectors': 4,
    'selector-max-id': 0,
    'selector-max-specificity': null,
    'selector-max-type': 2,
    'selector-max-universal': 1,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-type-no-unknown': [
      true,
      {
        'ignoreTypes': [
          '/^app-/',
          '/^cdk-/',
          '/^ion-/',
          '/^mat-/'
        ]
      }
    ],
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,

    // --- SCSS Specific Rules ---
    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/comment-no-empty': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null
  },
};