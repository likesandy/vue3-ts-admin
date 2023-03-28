import { resolve } from 'path'
import { loadEnv, type ConfigEnv } from 'vite'
import setupPlugins from './vite/plugins'
import { parseEnv } from './vite/utils'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias
//   }
// })

export default ({ mode, command }: ConfigEnv) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root)) as ViteEnv
  return {
    plugins: setupPlugins(isBuild, env),
    // TODO 配置别名不能通过外部文件导入
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  }
}
