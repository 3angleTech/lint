# lint

Shareable lint configuration library maintained by [3angle.tech](https://3angle.tech/).

## Usage

For installation and usage:

> https://www.npmjs.com/package/@3angletech/eslint-config

## Contributing

All commits by contributors outside the [3angleTech](https://github.com/3angleTech) team must sign off on their changes:

    git commit --signoff

For more information see:

* `git commit --help` or https://git-scm.com/docs/git-commit
* https://developercertificate.org/

## Testing local changes

To test changes to the library, use `npm link` on the `lib` directory in your target project:

    npm link /path/to/@3angletech/lint/lib

## Publishing changes

* Increment the version number in `lib/package.json`.
* Commit all changes.
* Add a new git tag with the same version number.
* Run `npm publish` in the `lib` directory.
