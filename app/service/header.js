'use strict';
const Service = require('egg').Service;
class HeaderService extends Service {
  getTop(index = 4) {
    const random = [];
    for (;index > 0; --index) {
      random.push(Math.random() * 100);
    }
    console.log('test', random);
    return random;
  }
}
module.exports = HeaderService;
