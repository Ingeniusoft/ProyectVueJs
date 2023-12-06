import { createRouter, createWebHistory } from "vue-router"

import App2 from "./components/App2"
import ComponenteLista from "./components/ComponenteLista.vue"

const routes = [
    {
        name: 'list',
        path: '/',
        compontent: List
    },

    {
        name: 'App2',
        path: '/',
        compontent: App2
    },
]