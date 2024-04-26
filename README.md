# Objective

Enhance your JavaScript application by integrating advanced Babel and Webpack configurations. This assignment focuses on applying dynamic imports for code splitting and optimizing your bundle size through tree shaking.

# Instructions

### Part 1: Project Setup

**Initialize Your Project:**

Create a new directory named advanced-babel-webpack.

Initialize a new npm project within this directory.

**Install Dependencies:**

Install Webpack, Babel, and necessary loaders and plugins as development dependencies.

### Part 2: Configuring Webpack and Babel

**Webpack Configuration:**

Create a webpack.config.js file.

Configure an entry point, output directory, and include Babel loader for processing JavaScript files.

Enable the splitChunks optimization in your Webpack configuration.

**Babel Configuration:**

Set up a babel.config.json file to use @babel/preset-env.

Ensure your Babel setup is compatible with Webpack's code splitting feature.

### Part 3: Implementing Features

**Dynamic Imports:**

Create a JavaScript module that exports a function or class. This module should not be needed immediately upon loading the application.

In your main JavaScript file, implement a dynamic import that loads the module only when it is needed (e.g., in response to a user action like clicking a button).

**Tree Shaking:**

In your JavaScript code, make use of ES6 import/export syntax.

Include some functions or classes that are not used.

Configure Webpack in production mode to enable tree shaking.

### Part 4: Building and Testing

**Build Your Application:**

Use Webpack to build your application.

Ensure that dynamic imports are correctly creating separate chunks.

Verify that unused code is removed from the final bundle as a result of tree shaking.

**Test Your Application:**

Serve your dist directory and test the dynamic loading functionality.

Observe the network activity to confirm code splitting is working as expected.

### Part 5: Documentation

**Update README.md:**

Document the steps for setting up the project, including installing dependencies and configuring Webpack and Babel.

Describe how to build and test the project, including how to verify dynamic imports and tree shaking.
