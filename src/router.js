/* eslint-disable no-unused-vars */


import Vue from "vue";
import VueRouter from "vue-router";

import Juego from './components/Juego/index.vue'


Vue.use(VueRouter)

const router = new VueRouter({

    mode: 'history',
    routes: [
        { path: '/', redirect: '/juego' },
        { path: '/juego', component: Juego },
      
    ]

})

export default router