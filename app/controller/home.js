'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.render('page/index/index.vue', { recommends: [
      { lable: 1 },
      { lable: 2 },
      { lable: 3 },
      { lable: 4 },
    ] });
  }
}

module.exports = HomeController;
