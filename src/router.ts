import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Projecten from './views/Projecten.vue'
import Packages from './views/Packages.vue'
import OverMij from './views/OverMij.vue'

export default createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "font-bold !text-orange-400",
    linkActiveClass: "text-white",
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/projecten',
            component: Projecten,
        },
        {
            path: '/packages',
            component: Packages,
        },
        {
            path: '/over-mij',
            component: OverMij,
        }
    ]
})