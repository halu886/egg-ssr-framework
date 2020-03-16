"use strict";

import ClientVue from "./App.vue";
import Vue from "vue";
const clientApp = new Vue({
  render: h => h(ClientVue)
});

// 这里假定 App.vue 模板中根元素具有 `id="app"`
clientApp.$mount("#app");
