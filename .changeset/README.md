# Changesets

This directory is used by [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.

## How to create a changeset

When you make a change that should be released, run:

```sh
bun changeset
```

This will prompt you to:

1. Select which packages changed
2. Choose the bump type (`major`, `minor`, or `patch`)
3. Write a summary of the change

Commit the generated `.md` file along with your changes.

## Release flow

1. Open a PR with your changes + a changeset file
2. Merge to `main`
3. The bot will open (or update) a **"Version Packages"** PR that bumps versions and updates `CHANGELOG.md`
4. Merging that PR triggers publishing to npm automatically
