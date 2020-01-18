'use strict';

const BAR = Symbol('Application#bar');

module.exports = {
  get bar() {
    // `this` points to the app object, you can access other methods or property of app with this
    if (!this[BAR]) {
      // It should be more complex in real situation
      this[BAR] = this.config.xx + this.config.yy;
    }
    return this[BAR];
  },
};