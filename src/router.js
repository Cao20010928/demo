// import Vue from'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
// import * as VueRouter from 'vue-router'
// import album from "@/components/album";
// Vue.use(VueRouter)
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes: [
//         {
//             path: '/album',
//             name: 'album',
//             component: () => import('./components/album')
//         }
//     ]
// })
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
const routes = [
    {
    path: '/albumName',
    name: 'album',
    component: () => import('./components/album')
    },
    {
        path: '/HelloWorld',
        name: 'hello',
        component: () => import('./components/HelloWorld')
    }
    ]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;