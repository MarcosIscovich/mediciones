const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("pages/auth/LoginComponent.vue"),
    meta: {
      requiresAuth: false,
    },
  },

  {
    path: "/",
    beforeEnter: (to, from, next) => {
      to.fullPath == "/" || to.fullPath == ""
        ? next({
            path: "dashboard",
            replace: true,
          })
        : next();
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("pages/dashboard/DashboardPage.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/rutinas",
        name: "rutinas",
        component: () => import("pages/dashboard/routines/RoutinesDetails.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
