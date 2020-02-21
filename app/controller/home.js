'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.js', { headers: this.ctx.service.header.getRandom() });
  }

  async renderString() {
    const { ctx } = this;
    ctx.body = await ctx.renderString('index.js', { headers: this.ctx.service.header.getRandom() });
  }
}

module.exports = HomeController;
