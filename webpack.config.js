const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    port: 8080,
  },
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: "Document",
        template: "./src/index.html",
        favicon: path.resolve(__dirname, 'src/img/favicon.ico'),
      }),
      new MiniCSSExtractPlugin(),
    ]
  }