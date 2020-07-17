import Vue from "vue";
import VueRouter from "vue-router";
import Finder from "../views/Finder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "finder",
    component: Finder,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
