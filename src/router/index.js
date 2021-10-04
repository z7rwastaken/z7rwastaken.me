import VueRouter from "vue-router";

const routes = [
    {
        path: "/", name: "home",
        component: () => import(/* webpackChunkName: "home" */"~/views/Homepage.vue"),
        meta: { title: "Andreww | Home" }
    },
    {
        path: "*", name: "404",
        component: () => import(/* webpackChunkName: "error" */"~/views/404.vue"),
        meta: { title: "Andreww | 404" }
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach(async (to, from, next) => {
    // Route title
    if (to.matched.some((m) => m.meta.title)) document.title = to.meta.title;

    next();
});

export default router;