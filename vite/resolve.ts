import { fileURLToPath } from 'url'
import type { AliasOptions, ResolveOptions } from 'vite'

const alias = {
  '@': fileURLToPath(new URL('../src', import.meta.url))
} as AliasOptions

const reslove = {
  alias
} as ResolveOptions

export default reslove

export { alias }
