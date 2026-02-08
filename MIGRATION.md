# Migration Guide: v15 (Legacy) to v24 (Modern)

This guide covers the transition from legacy CommonJS configurations (`.eslintrc.js`, `.stylelintrc.js`) to the modern ESM Flat Config architecture.

## 1. Prerequisites

- **Node.js**: v24.0.0 or higher.
- **ESLint**: v9.25.0 or higher.
- **Stylelint**: v17.0.0 or higher.

## 2. Dependency Cleanup

The v24 library bundles all necessary plugins and parsers. You should remove the following redundant "glue" packages from your project:

```bash
# Remove legacy ESLint parsers and plugins
npm uninstall @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript

# Remove legacy Stylelint plugins and configs
npm uninstall @stylistic/stylelint-plugin stylelint-config-standard stylelint-config-standard-scss stylelint-config-sass-guidelines
```

## 3. ESLint Migration

### Before: `.eslintrc.js` (CommonJS)
```javascript
module.exports = {
  extends: ['@3angletech/eslint-config/node'],
  parser: '@typescript-eslint/parser',
  // ...
};
```

### After: `eslint.config.mjs` (ESM)
Delete your `.eslintrc.js` and create `eslint.config.mjs`. Use the pre-composed bundles:

```javascript
import { nodeConfig, nestjsConfig, angularConfig } from '@3angletech/eslint-config';

export default [
  ...nodeConfig, // Or nestjsConfig/angularConfig, depending on the project
  {
    rules: {
      // Your project-specific overrides here
    }
  }
];
```

## 4. Stylelint Migration

### Before: `.stylelintrc.js` (CommonJS)
```javascript
module.exports = {
  extends: ['@3angletech/eslint-config/style'],
};
```

### After: `stylelint.config.mjs` (ESM)
Delete the old config and use the new `styleConfig`:

```javascript
import { styleConfig } from '@3angletech/eslint-config';

export default {
  ...styleConfig
};
```