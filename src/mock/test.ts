import http from '@/plugins/axios'

interface IInfo {
  name: string
  age: number
}

export function testInfo() {
  return http.request<IInfo>({
    url: 'test'
  })
}
