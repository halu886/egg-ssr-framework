'use strict';

const { createApp } = require('./app.js');

module.exports = () => {
  const { app } = createApp();
  return app;
};
