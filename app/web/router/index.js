import VueRouter from "vue-router";
import main from "../App.vue";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: main,
    children: [
      {
        path: "/top",
        component: () => import("../components/mainHeader/index.vue")
      },
      {
        path: "/bottom",
        component: () => import("../components/mainFooter/index.vue")
      }
    ]
  }
];

const routers = new VueRouter(routes);

export default routers;
