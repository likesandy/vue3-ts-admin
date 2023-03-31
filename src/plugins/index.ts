import _ from 'lodash'
import type { App } from 'vue'
import setupTailwindcss from './tailwindcss'

const setupPlugins = (app: App) => {
  setupTailwindcss()
  // autoRegisterComponents(app)
}

// 全局注册components下的组件
// function autoRegisterComponents(app: App) {
//   const modules = import.meta.glob('@/components/*.vue', { eager: true })
//   for (const path in modules) {
//     const name = path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
//     app.component(_.camelCase(name), (modules[path] as any).default)
//   }
// }

export default setupPlugins
