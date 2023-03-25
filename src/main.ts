import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router, { setupRouter } from './router'
import 'normalize.css'
import './assets/main.css'
import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  app.use(createPinia())
  await router.isReady()
  app.mount('#app')
}

bootstrap()
