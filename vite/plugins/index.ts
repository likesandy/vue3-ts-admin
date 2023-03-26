import vue from '@vitejs/plugin-vue'
import type { PluginOption } from 'vite'
const setupPlugins = (isBuild: boolean, env: Record<string, string>): PluginOption[] => {
  return [vue()]
}

export default setupPlugins
