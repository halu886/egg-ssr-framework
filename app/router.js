'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/renderString', controller.home.renderString);
  router.get('/test', controller.test.index);
  router.get('/get/top', controller.get.top);
  router.get('/get/bottom', controller.get.bottom);
  router.get('/get/recommder', controller.get.recommder);
  router.get('/get/main', controller.get.main);
};
