import { createRouter, createWebHistory } from 'vue-router'

import All from '@/components/All.vue'
import Checked from '@/components/CheckedItems.vue'
import NotChecked from '@/components/NotCheckedItems.vue'

const routes = [
    { path: '/', component: All },
    { path: '/all', component: All },
    { path: '/checked', component: Checked },
    { path: '/not-checked', component: NotChecked },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router