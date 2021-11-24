const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = () => {
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      publicPath: "/",
    },
    mode: "development",
    devtool: "inline-source-map",
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "~mixins": path.resolve(__dirname, "src/styles/_mixins.scss"),
        "~colors": path.resolve(__dirname, "src/styles/_colors.scss"),
        "@": path.resolve(__dirname, "src"),
      },
    },

    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },

        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./public/index.html" }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ],
    devServer: {
      proxy: {
        "*": {
          target: "http://localhost:9000",
          secure: false,
        },
      },
      port: 3000,
      host: "0.0.0.0",
      hot: true,
    },
  };
};
