import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

export default createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "font-bold !text-orange-400",
    linkActiveClass: "text-white",
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/projecten',
            component: Home,
        },
        {
            path: '/packages',
            component: Home,
        },
        {
            path: '/over-mij',
            component: Home,
        },
        {
            path: '/contact',
            component: Home,
        },
    ],
})
