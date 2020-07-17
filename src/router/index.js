import Vue from "vue";
import VueRouter from "vue-router";
import Poodle from "../views/Poodle.vue";
import Finder from "../views/Finder.vue";
import Quem from "../views/Quem.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "poodle",
    component: Poodle,
  },
  {
    path: "/finder",
    name: "finder",
    component: Finder,
  },
  {
    path: "/quem",
    name: "quem",
    component: Quem,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
