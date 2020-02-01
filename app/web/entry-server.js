'use strict';

const { createApp } = require('./app.js');

export default context => {
  // console.log(context);
  const { app } = createApp();
  return new Promise((resolve)=>{
    resolve(app);
  });
};
