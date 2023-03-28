import type { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/App.vue')
  }
] as RouteRecordRaw[]

export default routes
