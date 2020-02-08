'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  vueTuji: {
    enable: true,
    package: 'egg-view-vue-tuji',
  },
  webpackTuji: {
    enable: true,
    package: 'egg-webpack-tuji',
  },
};
