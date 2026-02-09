/**
 * @file Smoke test to ensure configurations load without crashing.
 */
import { ESLint } from 'eslint';
import { nodeConfig } from '../src/configs/node/index.js';
import { angularConfig } from '../src/configs/angular/index.js';

async function verifyConfig(name, config) {
  try {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: config,
    });
    await eslint.calculateConfigForFile('test.ts');
    console.log(`${name} config loaded successfully.`);
  } catch (error) {
    console.error(`${name} config failed to load:`, error.message);
    process.exit(1);
  }
}

console.log('Running smoke tests...');
await verifyConfig('Node', nodeConfig);
await verifyConfig('Angular', angularConfig);