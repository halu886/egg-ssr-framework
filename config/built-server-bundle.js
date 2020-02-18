'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config.js');
// const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
  target: 'node',
  devtool: '#source-map',
  entry: {
    'views/test/index': path.resolve(__dirname, '../app/web/views/test/index.js'),
    index: path.resolve(__dirname, '../app/web/index.js'),
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    alias: {
      'create-api': './create-api-server.js',
    },
  },
  // https://webpack.js.org/configuration/externals/#externals
  // https://github.com/liady/webpack-node-externals
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    whitelist: /\.css$/,
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"',
    }),
    // new VueSSRServerPlugin(),
  ],
});
