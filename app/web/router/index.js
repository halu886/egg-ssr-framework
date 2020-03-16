import { VueRouter } from "vue-router"
const routes = [
    {path:'/top',component:import('/top')},
    {path:'/recommenders',component:import('/recommenders')},
    {path:'/bottom',component:import('/bottom')},
    {path:'/main',component:import('/main')}
];

const routes = new VueRouter(routes);

export default routes;
