import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Projecten from './views/Projecten.vue'
import Packages from './views/Packages.vue'
import OverMij from './views/OverMij.vue'

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "font-bold !text-orange-400",
    linkActiveClass: "text-white",
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                title: 'Home',
                meta: [
                    { name: 'description', content: 'Hey, ik ben Keagan. Ik maak websites voor bedrijven en personen.' },
                    { name: 'keywords', content: 'keagan mulder, keagan, mulder, webdeveloper, webdevelopment, website maken, website laten maken, keaganmulder.nl' }
                ]
            }
        },
        {
            path: '/projecten',
            component: Projecten,
            meta: {
                title: 'Projecten',
                meta: [
                    { name: 'description', content: 'Benieuwd naar de projecten waar ik aan heb gewerkt?' },
                    { name: 'keywords', content: 'keagan mulder, keagan, mulder, webdeveloper, webdevelopment, website maken, website laten maken, projecten, keaganmulder.nl' }
                ]
            }
        },
        {
            path: '/packages',
            component: Packages,
            meta: {
                title: 'Packages',
                meta: [
                    { name: 'description', content: 'Benieuwd naar de packages waar ik aan heb gewerkt?' },
                    { name: 'keywords', content: 'keagan mulder, keagan, mulder, webdeveloper, webdevelopment, website maken, website laten maken, packages, keaganmulder.nl' }
                ]
            }
        },
        {
            path: '/over-mij',
            component: OverMij,
            meta: {
                title: 'Over mij',
                meta: [
                    { name: 'description', content: 'Ik ben 21 jaar oud en zit op het Graafschap College in Doetinchem. Ik woon in Lichtenvoorde en werk bij Freave in Doetinchem. Ik ben sinds kort een Vof Plugzy begonnen met een vriend van mij. We zijn nog bezig met het ontwikkelen van het product.' },
                    { name: 'keywords', content: 'keagan mulder, keagan, mulder, webdeveloper, webdevelopment, website maken, website laten maken, over mij, keaganmulder.nl' }
                ]
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    // @ts-ignore
    document.title = to.meta.title + " - Keagan Mulder"
    const metaTags = to.meta.meta || []
    const head = document.getElementsByTagName('head')[0]

    let existingTags = head.getElementsByTagName('meta')
    for (let i = existingTags.length - 1; i >= 0; i--) {
        head.removeChild(existingTags[i])
    }

    // @ts-ignore
    metaTags.forEach(tag => {
        let meta = document.createElement('meta')
        Object.keys(tag).forEach(key => {
            meta.setAttribute(key, tag[key])
        })
        head.appendChild(meta)
    })

    next()
})

export default router;