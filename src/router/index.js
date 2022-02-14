import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Productos from "../views/Productos.vue";
import Resumen from "../views/Resumen.vue";
import Pedidos from "../views/Pedidos.vue";
import ProductosAdmin from "../views/ProductosAdmin.vue";
import {firebase} from "../firebase.js";
import Router from "vue-router";

Vue.use(VueRouter);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/productos",
      name: "Productos",
      component: Productos
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/Signup.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: { requiresAuth: true },
      children:[
        {
          path: "resumen",
          name: "resumen",
          component: Resumen
        },
        {
          path: "productos",
          name: "productos",
          component: ProductosAdmin
        },
        {
          path: "pedidos",
          name: "pedidos",
          component: Pedidos
        }
      ]
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
      path: "/pagar",
      name: "Pagar",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Pagar.vue"),
    }
  ]
});

//no poder acceder a la parte de admin desde la url
router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router;
