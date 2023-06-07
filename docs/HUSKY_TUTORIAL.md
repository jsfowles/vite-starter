# Understanding Husky in Our Project

In our project, we're using Husky to enforce code quality checks before each commit.

## How it Works

Husky operates by using a `pre-commit` hook, a script that Git runs automatically every time you commit your code. This script resides in the `.husky` directory at the root of your project.

Here's what our `pre-commit` file looks like:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npm run lint && npm run prettier
```

Here's a break down of this file:

1. `. "$(dirname -- "$0")/_/husky.sh"`: This line runs Husky's internal script. This is needed for Husky to function properly.

2. `npm run lint && npm run prettier`: This is where we define what happens when the hook is triggered. In our case, we're running two tasks: `lint` and `prettier`.

   - `npm run lint`: This command runs our linter, which checks our code for potential errors and ensures we're following the coding standards we've defined for our project.

   - `npm run prettier`: This command runs Prettier, a code formatting tool. Prettier ensures that all of our code follows a consistent style, making it easier to read and maintain.

So, in summary, before each commit, Husky will run our linter and our formatter. If either of these tasks fails (for instance, if there's a linting error in our code), the commit will be aborted, allowing us to fix the issue before trying again.
