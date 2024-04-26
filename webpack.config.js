// Credit to ChatGPT for assistance and code comments.
const path = require("path");

module.exports = {
  // Set Webpack mode to "production"
  mode: "production",
  // Specify entry point for Webpack
  entry: "./src/index.js",
  // Specify output configuration
  output: {
    // Set the output directory to "dist"
    path: path.resolve(__dirname, "dist"),
    // Set the output filename to "bundle.js"
    filename: "bundle.js",
  },
  // Configure optimization options
  optimization: {
    // Enable splitChunks optimization for all chunks
    splitChunks: {
      chunks: "all",
    },
  },
  // Configure module rules for processing JavaScript files
  module: {
    rules: [
      {
        // Define a rule for files with the .js extension
        test: /\.js$/,
        // Exclude node_modules directory from processing
        exclude: /node_modules/,
        // Use babel-loader for transpiling JavaScript files
        use: {
          loader: "babel-loader",
          options: {
            // Use @babel/preset-env for transpiling ES6+ syntax
            presets: ["@babel/preset-env"],
            // Use additional Babel plugins for runtime transformation, class properties, and dynamic imports
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-syntax-dynamic-import",
            ],
          },
        },
      },
    ],
  },
};

