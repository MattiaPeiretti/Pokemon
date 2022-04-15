import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../views/DashboardView.vue";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: dashboard,
    },
    {
        path: "/details/:slug",
        name: "details",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/DetailsView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
