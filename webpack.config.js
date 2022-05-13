const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "css"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    host: "0.0.0.0",
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: `./public/index.html`,
    }),
    new MiniCssExtractPlugin(),
  ],
};
