/**
 * @file Provides default stylelint configuration.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */
const path = require('path');

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    './stylelint.json',
    './stylelint-scss.json',
  ],
};
