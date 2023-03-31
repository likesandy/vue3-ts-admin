import type { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Login/login.vue')
  }
] as RouteRecordRaw[]

export default routes
