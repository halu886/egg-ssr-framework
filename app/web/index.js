'use strict';
import Vue from 'vue'
import App from './App.vue'
import createStore from "./store.js"
import createRouter from './router.js'


// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export default context=>{
  const store  = createStore();
  const router = createRouter();
  const appInit = new Vue({
    // 根实例简单的渲染应用程序组件。
    data:context,
    render: h => h(App),
  });
  router.push(context.param.url);
  const routeComponents = router.getMatchComponent()

  return new Promise((resolve,reject)=>{
   router.onReady((next)=>{
     if(routerComponent.length){
       reject({code:404});
     }
     return Promise.all(routeComponents.map(({asyncData})=>asyncData&&asyncData(store,router)).filter(_=>_)).then(()=>{
        context.state = store.state
        return appInit;
     });
   });
  });
};