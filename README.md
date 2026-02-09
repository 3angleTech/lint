# @3angletech/eslint-config

3angleTech's internal ESLint Configuration. Supports **ESLint 9+**, **Node 24+**.

## 🚀 Installation

Install the package as a dev dependency:

```bash
npm install --save-dev @3angletech/eslint-config
```

Core dependencies (Stylistic, SonarJS, JSDoc, Security, etc.) are managed as direct dependencies of this package to ensure version consistency across all 3angletech projects.

---

## 🛠 Usage

This package uses the **Flat Config** format. Create an `eslint.config.mjs` in your project root.

```javascript
import { nodeConfig } from '@3angletech/eslint-config';

export default [
  ...nodeConfig,
  {
    rules: {
      // Custom overrides
    }
  }
];
```
For NestJS or Angular, import `nestjsConfig` or `angularConfig` respectively. Similarly, create a `stylelint.config.mjs` with:
```javascript
import { styleConfig } from '@3angletech/eslint-config/style';

export default {
  ...styleConfig,
  {
    rules: {
      // Custom overrides
    }
  }
};
```

---

## 💻 VS Code Integration

To ensure ESLint and Stylelint handle both linting and formatting (Stylistic) correctly within VS Code, add the following to your `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",

  "eslint.useFlatConfig": true,
  "eslint.run": "onType",
  "eslint.workingDirectories": [{ "mode": "auto" }],
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "html",
    "typescriptreact"
  ],

  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[html]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },

  "typescript.format.enable": false,
  "javascript.format.enable": false,
  "typescript.tsdk": "node_modules/typescript/lib",

  "stylelint.validate": ["css", "scss", "html"],
  "stylelint.snippet": ["css", "scss"],
  "stylelint.configFile": "stylelint.config.mjs"
}
```

---

## 🤝 Contributing

All commits by contributors outside the [3angleTech](https://github.com/3angleTech) team must sign off on their changes:

```bash
git commit --signoff
```

For more information see:
* [Git Commit Docs](https://git-scm.com/docs/git-commit)
* [Developer Certificate of Origin](https://developercertificate.org/)

---

## 🧪 Development & Testing

### Structure
- `src/rules/`: Atomic rule definitions (core, sonar, security, stylistic).
- `src/configs/`: Environment composition logic (Node, Angular).

### Testing local changes
To test changes to the library, use `npm link` in the root directory:

```bash
# Inside this repository
npm link

# Inside your target project
npm link @3angletech/eslint-config
```

### Validation
Verify configuration integrity:
```bash
npm run test
```

---

## 📦 Publishing

1. Update version in `package.json`.
2. Update `CHANGELOG.md`.
3. Commit and tag:
```bash
git commit -am "chore: release v24.x.x" --signoff
git tag v24.x.x && git push origin --tags
```
4. Publish:
```bash
npm publish
```

---

## 📚 More Information

* [ESLint Flat Config Docs](https://eslint.org/docs/latest/use/configure/configuration-files)
* [ESLint Stylistic](https://eslint.style/)
* [angular-eslint](https://github.com/angular-eslint/angular-eslint)
* [typescript-eslint](https://typescript-eslint.io/)