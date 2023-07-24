# jsfowles Vite Starter

A Vite starter project using React, TypeScript, and TailwindCSS. Includes ESLint and Prettier for code quality, and Husky for pre-commit hooks.

## Getting Started

### Prerequisites

- Node.js version 12 or newer
- npm version 7 or newer

### Installation

1. Clone this repo

2. Install NPM packages
   ```shell
   npm install
   ```

## Usage

- **Development**

  Start the dev server:

  ```shell
  npm run dev
  ```

- **Building**

  Build the project for production:

  ```shell
  npm run build
  ```

- **Linting**

  Run ESLint on the `src` directory:

  ```shell
  npm run lint
  ```

- **Formatting**

  Run Prettier on the entire project:

  ```shell
  npm run prettier
  ```

## Husky Pre-commit Hook

This project uses Husky to enforce code quality standards before each commit. The pre-commit hook runs Prettier and ESLint on staged files, and will not allow the commit if there are any errors.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## Learn More

For more information about the tools used in this project:

- Learn about using [Husky](./docs/HUSKY_TUTORIAL.md) for pre-commit hooks.
- Learn how to set up [React Router](./docs/REACT_ROUTER_SETUP.md) for page routing.
- Learn how to configure and use [Tailwind CSS](./docs/TAILWINDCSS_TUTORIAL.md) for styling.

## License

Distributed under the MIT License. See `LICENSE` for more information.
