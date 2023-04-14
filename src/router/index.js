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
      path: "/nosotros",
      name: "nosotros",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NosotrosView.vue"),
    },
    {
      path: "/recetario",
      name: "recetario",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RecetarioView.vue"),
    },
    {
      path: "/recetario/descrec",
      name: "descrec",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("../components/RecetarioComponents/descReceta.vue"),
    },
    {
      path: "/noticias",
      name: "noticias",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NoticiasView.vue"),
    },
    {
      path: "/noticias/descnot",
      name: "descnot",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("../components/NoticiasComponents/descripcionNoticia.vue"),
    },
    {
      path: "/work",
      name: "work",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/WorkView.vue"),
    },
    {
      path: "/work/ce",
      name: "codigoetica",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("../components/WorkComponentss/DescripcionCe.vue"),
    },
    {
      path: "/work/descwork",
      name: "descwork",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("../components/WorkComponentss/DescripcionWork.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import("../views/ContactView.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); // Scroll al inicio de la página
  next();
});

export default router;
