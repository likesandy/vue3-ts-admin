import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/test',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: '请求成功',
        status: 'success',
        data: {
          name: 'ilun',
          age: 18
        }
      }
    }
  }
] as MockMethod[]
