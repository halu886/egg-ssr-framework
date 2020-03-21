'use strict';
const Service = require('egg').Service;
class MainService extends Service {
  getMain() {
    return Math.random() + 'main';
  }
}
module.exports = MainService;
