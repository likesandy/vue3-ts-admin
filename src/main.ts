// import 'normalize.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.scss'
import setupPlugins from './plugins'
import router, { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  setupPlugins(app)
  app.use(createPinia())
  await router.isReady()
  app.mount('#app')
}

bootstrap()
