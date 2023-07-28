import Machine from "@/layouts/Machine.vue";
import ChooseLottery from "@/layouts/ChooseLottery.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/choose-lottery",
  },
  {
    path: "/choose-lottery",
    component: ChooseLottery,
    name: "home",
  },
  {
    path: "/machine-lottery/:id",
    component: Machine,
    name: "lottery",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
