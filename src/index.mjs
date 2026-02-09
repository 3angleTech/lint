/**
 * @file Main entry point for `@3angletech/eslint-config`.
 * @author THREEANGLE SOFTWARE SOLUTIONS SRL
 * @licence MIT
 */

import { baseConfig } from './configs/base.mjs';
import { nodeConfig } from './configs/node/index.js';
import { angularConfig } from './configs/angular/index.js';
import { nestjsConfig } from './configs/nestjs/index.js';
import { styleConfig } from './configs/style/index.js';
import { typescriptRules } from './rules/typescript-rules.js'; 

export { 
  baseConfig, 
  nodeConfig, 
  nestjsConfig, 
  angularConfig, 
  styleConfig, 
  typescriptRules,
};

export default {
  base: baseConfig,
  node: nodeConfig,
  nestjs: nestjsConfig,
  angular: angularConfig,
  style: styleConfig,
  typescriptRules,
};