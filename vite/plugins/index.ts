import vue from '@vitejs/plugin-vue'
import type { PluginOption } from 'vite'
import setupMockPlugin from './mock'
const setupPlugins = (isBuild: boolean, env: ViteEnv) => {
  const plugins: PluginOption[] = []
  plugins.push(vue())
  plugins.push(setupMockPlugin(isBuild))

  return plugins
}

export default setupPlugins
