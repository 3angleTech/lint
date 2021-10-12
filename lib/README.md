# @3angletech/eslint-config

Shareable lint configuration library maintained by the [3angleTech](https://github.com/3angleTech) team.

## Usage in Node.js projects

Install latest compatible version of required peer dependencies:

```
npm install --save-dev @typescript-eslint/eslint-plugin@4 @typescript-eslint/parser@4 eslint@7 eslint-config-standard@16 eslint-plugin-import@2 eslint-plugin-jsdoc@36 eslint-plugin-node@11 eslint-plugin-promise@5 eslint-plugin-security@1 eslint-plugin-sonarjs@0 typescript@4
```

Create a new `.eslintrc.json` next to the `tsconfig.json` file:

```json
{
  "root": true,
  "extends": [
    "@3angletech/lint/node"
  ],
  "rules": {
    "___IDE_OVERRIDES_GO_HERE___": true
  }
}
```

NOTE: The keys containing `___` are comments for documentation purposes. 

Provide a new `.eslintrc.ci.json` file:

```json
{
  "extends": [
    ".eslintrc.json"
  ],
  "rules": {
    "___CI_OVERRIDES_GO_HERE___": true
  }
}
```

The `.eslintrc.ci.json` may contain rule overrides for the lint command to pass while transitioning to stricter rules.

Lint using:

```json lines
{
  "scripts": {
    "lint": "eslint --ext=.js,.ts ./src",
    "lint:ci": "eslint --config=.eslintrc.ci.json --no-eslintrc --ext=.js,.ts ./src",
    "lint:fix": "eslint --ext=.js,.ts --fix ./src",
  }
}
```

## Usage in Angular projects

Install latest compatible version of required peer dependencies:

```
npm install --save-dev @typescript-eslint/eslint-plugin@4 @typescript-eslint/parser@4 eslint@7 eslint-config-standard@16 eslint-plugin-import@2 eslint-plugin-jsdoc@36 eslint-plugin-node@11 eslint-plugin-promise@5 eslint-plugin-security@1 eslint-plugin-sonarjs@0 typescript@4
npm install --save-dev @angular-eslint/eslint-plugin@12 @angular-eslint/eslint-plugin-template@12 @angular-eslint/template-parser@12 eslint-plugin-rxjs@3 stylelint@13 stylelint-config-sass-guidelines@8 stylelint-config-standard@22
```

Update your project ($NAME) in `angular.json` to include a `project.$NAME.architect.lint` path with:

```json lines
{ "projects": { "$NAME": { "architect": {
  "lint": {
    "builder": "@angular-eslint/builder:lint",
    "options": {
      "eslintConfig": ".eslintrc.json",
      "lintFilePatterns": [ "src/**/*.ts", "src/**/*.html" ]
    },
    "configurations": {
      "fix": { "fix": true }
    }
  }
} } } }
```

Provide a new `.eslintrc.json` file:

```json
{
  "root": true,
  "extends": [
    "@3angletech/eslint-config/angular"
  ],
  "rules": {
    "___COMMON_JS_AND_TS_OVERRIDES_GO_HERE___": true
  },
  "overrides": [
    {
      "files": [ "*.ts" ],
      "___OPTIONAL_TSCONFIG_OVERRIDE___parserOptions": { "project": [ "tsconfig.json" ] },
      "rules": {
        "___TS_ONLY_OVERRIDES_GO_HERE___": true
      }
    },
    {
      "files": [ "*.html" ],
      "rules": {
        "___TEMPLATE_ONLY_OVERRIDES_GO_HERE___": true
      }
    }
  ]
}
```

NOTE: Rules that don't apply to all file types should be included in "overrides" and contain a file extension filter.

To use the StyleLint rules, update `.stylelintrc` to include:

```json
{
  "extends": [
    "@3angletech/lint/style"
  ],
  "rules": {
  }
}
```

Lint using:

    npx ng lint && npx stylelint 'src/**/*.*css'

Or add some extra `package.json` scripts:

```json
{
  "scripts": {
    "lint": "npm run lint:code; npm run lint:style",
    "lint:code": "ng lint",
    "lint:code:fix": "ng lint --configuration=fix",
    "lint:style": "stylelint 'src/**/*.*css'",
    "lint:style:fix": "stylelint --fix 'src/**/*.*css'"
  }
}
```

## More information

* [ESLint](https://eslint.org/)
* [stylelint](https://stylelint.io/)
* Any property can be overridden, for example: `"parserOptions": { "project": "tsconfig.json" }`
* [ESLint Docs: Configuration Files](https://eslint.org/docs/user-guide/configuring/configuration-files)
  * [Using a configuration from a plugin](https://eslint.org/docs/user-guide/configuring/configuration-files#using-a-configuration-from-a-plugin)
  * [Extending Configuration Files](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
