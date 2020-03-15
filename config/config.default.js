/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');
const webpackOption = require('./built-server-bundle.js');
const clientWebpackOption = require('./built-client-bundle.js');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578575584324_6782';
  console.log(path.join(appInfo.baseDir, 'dist'));
  config.static = {
    prefix: '/app/public',
    dir: path.join(appInfo.baseDir, 'dist'),
    dynamic: true,
    preload: false,
    maxAge: 31536000,
    buffer: false,
  };
  // add your middleware config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'vueTuji',
    root: ([
      path.join(appInfo.baseDir, 'app/web'),
    ].join(',')),
    mapping: {
      '.js': 'vueTuji',
      '.vue': 'vueTuji',
    },
    template:
      path.join(appInfo.baseDir, 'app/web/layout.html'),
  };

  config.webpack = webpackOption;
  config.clientWebpack = clientWebpackOption;

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
