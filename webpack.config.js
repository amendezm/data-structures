const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: "babel-loader",
      },
    ],
  },
};
