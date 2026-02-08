# Changelog

All notable changes to this project will be documented in this file.

## [24.0.0] - 2026-02-06

### Added
- **ESLint 9 Support**: Complete migration to Flat Config architecture.
- **Native ESM**: Converted the entire library to `type: module`.
- **Node 24 LTS**: Updated engine constraints and modernized internal path resolution (`import.meta.url`).
- **Unified Angular Support**: Integrated the `angular-eslint` wrapper for streamlined TS and HTML linting.
- **Performance**: Switched to `typescript-eslint`'s `projectService` for faster type-checked linting.
- **Smoke Tests**: Added a programmatic check in `tests/smoke-test.mjs` to verify configuration load integrity.

### Fixed
- **RxJS Compatibility**: Implemented `package.json` overrides for `eslint-plugin-rxjs` and `eslint-etc` to resolve ESLint 9 peer conflicts.
- **JSDoc Rules**: Updated JSDoc logic to remove rules deprecated in the latest core engine.

### Changed
- Reorganized project structure to separate raw `rules/` from composed `configs/`.
- Updated `baseConfig` to include `sonarjs` and `security` plugins natively in the flat format.

### Removed
- Support for legacy `.eslintrc` (RC) configuration files.
- Fragmented `@angular-eslint/*` individual peer dependencies.
- Support for Node.js versions older than 24.