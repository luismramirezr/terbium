# Create-react-app Coding Labs Typescript Template

## Pre-requisites

You need some VistualStudio Code extensions installed:

- ESLint
- Prettier

Also, `commitizen` is used to standarize commit messages.

## Installation

To use this tempalate, you need to install it via `cra-create-app`:

```bash
npx cra-create-app <my-app> --template codinglabs
```

After initial install, you may need to install the dev dependencies. To do so, run `yarn postinstall`.

## PATH Error

If you encounter a `path` error when running `yarn start`, upgrade `react-scripts` to `^3.4.0`.

## Available Scripts

Aside from normally installed scripts, there are 2 more:

### `yarn coverage`

Creates test coverage report in `__tests__/coverage`

### `yarn lint`

Peforms a `eslint --fix` in staged files

## Commit Messages

This template comes with Husky hooks, commitzen and commitlint to produce standard commit messages!
