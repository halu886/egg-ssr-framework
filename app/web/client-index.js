"use strict";

import Vue from "vue";
import createStore from "./store/index";
import createRouter from "./router/index";
const store = createStore();
const router = createRouter();
const clientApp = new Vue({
  render: (h) => h('div',[h('router-view')]),
  router,
  store,
});

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const components = router.getMatchedComponents(to);
    if (!components.length) {
      next();
    }

    // components.map((c) => {
    //   if (c.asyncData&&typeof c.asyncData=="function") {
    //     return c.asyncData;
    //   }
    //   return undefined
    // });
    console.log(components.map((c) =>c && c.asyncData(store, router, {})));
    Promise.all(
      components.map((c) =>c && c.asyncData(store, router, {})
      //  () => {
      //   if (c.asyncData) {
      //     c.asyncData(store, router, {});
      //   }
      )
    )
      .then(next)
      .catch(next);
  });
  clientApp.$mount("#app");
});
