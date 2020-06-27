import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-blog",
    name: "AddBlog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "add-blog" */ "../views/AddBlog.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.loggedIn) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/read-blog",
    name: "ReadBlog",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "add-blog" */ "../views/ReadBlog.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.loggedIn) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
