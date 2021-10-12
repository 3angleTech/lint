/**
 * @file Provides default stylelint configuration.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */
const path = require('path');

module.exports = {
  extends: [
    path.dirname(require.resolve('stylelint-config-standard')),
    path.dirname(require.resolve('stylelint-config-sass-guidelines')),
    './stylelint.json',
  ],
};
