'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.js', { params: { url: '/top' } });
  }

  async renderString() {
    const { ctx } = this;
    ctx.body = await ctx.renderString('index.js');
  }
}

module.exports = HomeController;
