import { loadEnv, type ConfigEnv } from 'vite'
import plugins from './vite/plugins'
import reslove from './vite/resolve'
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
  const env = loadEnv(mode, root)
  parseEnv(env)
  return {
    plugins,
    reslove
  }
}
