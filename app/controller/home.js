'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(await ctx.renderString());
    ctx.body = await ctx.renderString();
    // ctx.
  }
}

module.exports = HomeController;
