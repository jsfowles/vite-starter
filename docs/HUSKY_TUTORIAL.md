# Using Husky for Git Hooks

This guide assumes that Husky is already installed and set up in our project.

Husky is a tool that makes managing Git hooks easy. Git hooks are scripts that Git executes before or after events such as: `commit`, `push`, and others. They're a built-in feature of Git, but Husky provides a more convenient way to add them to our project.

## Understanding our current Husky configuration

In our `package.json` file, we have a Husky configuration that looks like this:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

This configuration sets up a `pre-commit` hook that will trigger the `lint-staged` command every time we run `git commit`.

The `lint-staged` command is configured separately in our `package.json` file:

```json
"lint-staged": {
  "*.{ts,tsx,js,jsx,json,css,md}": [
    "prettier --write",
    "eslint --fix",
    "git add"
  ]
}
```

This configuration instructs `lint-staged` to run three commands: `prettier --write`, `eslint --fix`, and `git add` on any staged files that match the given patterns (`*.{ts,tsx,js,jsx,json,css,md}`).

## Using our current Husky configuration

With the configuration we have, Husky will automatically check and fix our code every time we make a commit. Here's a simple workflow:

1. Edit our files.
2. Stage the changes we want to commit (`git add .`).
3. Run `git commit -m "Our commit message"`.

Before the commit is created, Husky will run the `lint-staged` command, which in turn runs Prettier and ESLint on our staged files. If any issues are found that can't be automatically fixed, the commit will be aborted and we'll need to fix those issues manually.

After we have fixed the issues, we can attempt to make the commit again.

## Useful resources

For more information on Husky and how to configure it, check out the [official Husky documentation](https://typicode.github.io/husky/#/).

To learn more about how to use ESLint and Prettier, refer to their respective documentations:

- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/index.html)

Remember, the goal of using tools like Husky, ESLint, and Prettier is to ensure code quality and consistency across our project.

In this case, Husky, ESLint, and Prettier are tools that assist us in maintaining code quality and consistency, but they do not replace good programming practices and thorough code reviews.
