import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// import store from "@/store";

import Home from "../views/Home.vue";
import PageNotFound404 from "../views/PageNotFound404.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  // 404 Catcher
  {
    path: "/:pathMatch(.*)*",
    name: "Page-Not-Found-404",
    component: PageNotFound404
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Router auth protection code
// router.beforeEach((to, from, next) => {
//   // const isAuthenticated = store.getters.
//   // Check for auth in store
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// });

export default router;
