"use strict";

import ClientVue from "./App.vue";
import Vue from "vue";
import createStore from "./store/index";
import createRouter from "./router/index";
// import "core-js/modules/es6.promise";
// import "core-js/modules/es6.array.iterator";
const store = createStore();
const router = createRouter();
const clientApp = new Vue({
  render: h => h(ClientVue),
  router,
  store
});

// 这里假定 App.vue 模板中根元素具有 `id="app"`
clientApp.$mount("#app");
