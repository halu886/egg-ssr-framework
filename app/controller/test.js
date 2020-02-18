'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('views/test/index.js');
  }
}

module.exports = TestController;
