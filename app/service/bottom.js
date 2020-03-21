'use strict';
// app/service/user.js
const Service = require('egg').Service;

class BottomService extends Service {
  async getTop() {
    return Math.random() + 'top';
  }
}

module.exports = BottomService;
