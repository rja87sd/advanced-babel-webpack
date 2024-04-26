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
- run "npm init -y"
- run "npm install webpack webpack-cli --save-dev"
- run "npm install @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-transform-runtime @babel/plugin-transform-class-properties @babel/plugin-syntax-dynamic-import --save-dev"
- In the project root directory, create "webpack.config.js" and configure with the following code:
  ![image](https://github.com/rja87sd/advanced-babel-webpack/assets/145504216/ca056a38-1d7e-431b-8e86-95cfd4af3034)  
- create "babel.config.json" and configure witht he following code:
  ![image](https://github.com/rja87sd/advanced-babel-webpack/assets/145504216/1c21133b-231a-4db3-a896-5a29fa693991)
- create "index.js", "greet.js", "module2.js", and "module3.js" in /src and add some basic code to provide functionality for testing and observation.
- create "index.html" in project root and add boilerplate code and a button, ensuring that the bundle.js is linked.
- run "npx webpack"
Describe how to build and test the project, including how to verify dynamic imports and tree shaking.
- Use VS Code Live Server, or run "npm run dev" to bring up the page.
- Right click anywhere on the page and click "inspect element".
- Click on the "Console tab" and observe any errors or lack thereof.
- Click on the Network tab and observe activity.

**Credits**
- Credit to ChatGPT for assistance with debugging and explanation of Babel.js and Webpack, and also code comments.