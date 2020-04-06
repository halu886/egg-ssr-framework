"use strict";

import ClientVue from "./App.vue";
import Vue from "vue";
import createStore from "./store/index";
import createRouter from "./router/index";
console.log(1111)
const store = createStore();
const router = createRouter();
const clientApp = new Vue({
  render: h => h(ClientVue),
  router,
  store
});

if(window.__init__){
  store.replaceState(window.__init__)
}

// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(()=>{
  router.beforeResolve((to,from,next)=>{
    const components = to.getMatchComponent()
    if(!components.length){
      next();
    }
    
    components.map(c=>
      {
        if(c.asyncData){

        }
      });
    Promise.all(components.map(c=>()=>{
      if(c.asyncData){
        c.asyncData(store,router,{})
      }
    })).then(next).catch(next)
  })
  clientApp.$mount("#app");
})
