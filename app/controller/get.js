
'use strict';

const Controller = require('egg').Controller;

class GetController extends Controller {
  async top() {
    this.ctx.body = this.ctx.service.header;
  }
  async bottom() {
    this.ctx.body = this.ctx.service.bottom;
  }
  async recommder() {
    this.ctx.body = this.ctx.service.recommder;
  }
  async main() {
    this.ctx.body = this.ctx.service.main;
  }
}

module.exports = GetController;
