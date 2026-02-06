/**
 * @file Main entry point for @3angletech/eslint-config.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

import { baseConfig } from './configs/base.mjs';
import { nodeConfig } from './configs/node/index.js';
import { angularConfig } from './configs/angular/index.js';
import styleConfig from './configs/style/index.js';

export {
  baseConfig,
  nodeConfig,
  angularConfig,
  styleConfig,
};

export default {
  base: baseConfig,
  node: nodeConfig,
  angular: angularConfig,
  style: styleConfig,
};