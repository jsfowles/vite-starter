# Using Tailwind CSS with Vite

This guide assumes that you have already installed Tailwind CSS and have a basic configuration set up. If not, please refer to the [official Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

## Configuring Tailwind CSS

A standard Tailwind CSS configuration for Vite can be defined in the `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

The `content` array should point to your HTML file and any file where you plan to use Tailwind CSS classes.

The `theme` object can be used to extend Tailwind's default configuration. For example, you can add new colors or modify the spacing/sizing scale.

The `plugins` array can be used to add Tailwind CSS plugins to your configuration.

## Using Tailwind CSS in your components

You can use Tailwind CSS classes directly in your JSX:

```jsx
function Component() {
  return <div className="text-center text-blue-500">Hello, world!</div>;
}
```

In this example, `text-center` centers the text and `text-blue-500` sets the text color to a medium shade of blue.

## Building your styles

When you're ready to build your project for production, Vite will automatically purge unused styles from your CSS if your `tailwind.config.js` file is properly configured. To start the build process, run:

```shell
npm run build
```

This command will create a `dist` directory with your built project.

## Useful resources

For more information on using Tailwind CSS, check out the [official Tailwind CSS documentation](https://tailwindcss.com/docs).

For more complex configurations, such as configuring a dark mode or adding complex variants, refer to the [Tailwind CSS configuration guide](https://tailwindcss.com/docs/configuration).

This is a simple guide and doesn't cover all possible Tailwind CSS configurations and uses. The official Tailwind CSS documentation is a great resource for further learning.
