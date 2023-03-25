import AppVue from '@/App.vue'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppVue
    }
  ]
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router
