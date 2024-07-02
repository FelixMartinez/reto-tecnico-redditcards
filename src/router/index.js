import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import redditEntriesRouter from "../modules/reddit-entries/router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/reddit-entries",
    ...redditEntriesRouter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
