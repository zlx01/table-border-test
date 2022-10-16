import SolutionViewVue from "@/views/SolutionView.vue";
import ErrorView from "@/views/ErrorView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/error",
      name: "error",
      component: ErrorView,
    },
    {
      path: "/solution",
      name: "solution",
      component: SolutionViewVue,
    },
  ],
});

export default router;
