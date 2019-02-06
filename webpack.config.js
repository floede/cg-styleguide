const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
require("@babel/polyfill");

const mode = process.env.NODE_ENV || "development";

//const PUBLIC_PATH = "./public";
const PUBLIC_PATH = "../Backend/CreyServer/Website/wwwroot";

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js", "./styles/main.scss"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, PUBLIC_PATH)
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize:
                  true ||
                  {
                    /* CSSNano Options */
                  }
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        options: {
          presets: ["react", "stage-0", "es2015"],
          plugins: ["transform-class-properties", "transform-decorators-legacy"]
        }
      }
    ]
  },
  devServer: {
    contentBase: PUBLIC_PATH + "/",
    index: "index.html",
    watchContentBase: true,
    historyApiFallback: true,
    port: 8888,
    open: true
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  optimization: {
    minimize: mode === "development" ? false : true
  },
  devtool: mode === "development" ? "inline-source-map" : false //,
  //mode: mode
};
