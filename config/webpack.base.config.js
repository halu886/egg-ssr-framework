'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  devtool: isProd ? false : '#cheap-module-source-map',
  output: {
    publicPath: '/dist/',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    alias: {
      public: path.resolve(__dirname, '../public'),
      '@': path.resolve(__dirname, '../app/web'),
    },
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.less$/,
        use: [ 'vue-style-loader', 'css-loader', 'less-loader' ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  performance: {
    hints: false,
  },
  plugins: isProd
    ? [
      new VueLoaderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin({
        filename: 'common.[chunkhash].css',
      }),
    ]
    : [ new VueLoaderPlugin(), new FriendlyErrorsPlugin() ],
};
