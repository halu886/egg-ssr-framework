'use strict';
const Service = require('egg').Service;
class HeaderService extends Service {
  getRandom(index = 4) {
    const random = [];
    for (;index > 0; --index) {
      random.push(Math.random() * 100);
    }
    return random;
  }
}
module.exports = HeaderService;
