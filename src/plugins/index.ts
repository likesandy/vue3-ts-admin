import type { App } from 'vue'
import setupTailwindcss from './tailwindcss'

const setupPlugins = (app: App) => {
  setupTailwindcss()
}

export default setupPlugins
