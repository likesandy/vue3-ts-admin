interface ApiData<T> {
  message?: string
  code: number
  status?: 'success' | 'error'
  data: T
}
