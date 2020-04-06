import VueRouter from "vue-router";
import main from "../App.vue";
import Vue from "vue";
import a from "../components/mainHeader/index.vue"

Vue.use(VueRouter);

export default () => {
  return new VueRouter({
    routes: [
      {
        path: "/",
        component: main,
        children: [
          {
            path: "top",
            component: () => import("../components/mainHeader/index.vue")
          },
          {
            path: "bottom",
            component: () => import("../components/mainFooter/index.vue")
          }
        ]
      }
    ]
  });

};
