/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');
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
  config.static = {
    prefix: '',
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
    root: [
      path.join(appInfo.baseDir, 'app/web'),
    ].join(','),
    template:
      path.join(appInfo.baseDir, 'app/web/layout.html'),
    clientManifest:
      path.join(appInfo.baseDir, 'dist/vue-ssr-client-manifest.json'),
    buildJson:
      path.join(appInfo.baseDir, 'dist/vue-ssr-server-bundle.json'),
    webpackBuild:
      path.join(appInfo.baseDir, 'config/built-server-bundle.js'),
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
