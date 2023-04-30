import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
interface MyConfig extends AxiosRequestConfig {
  baseURL: string;
  timeout?: number;
}

function createAxios(config: MyConfig): AxiosInstance {
  const http = axios.create(config)

  http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    const idUser = localStorage.getItem('idUser')

    if (token) {
      // eslint-disable-next-line dot-notation
      config.headers['Authorization'] = `Bearer ${token}`
      config.headers['Id-User'] = idUser
    }

    return config
  })

  return http
}

const http = createAxios({
  baseURL: process.env.API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const setAuthTokenAndUserID = (token: string, id: number): void => {
  if (token) {
    localStorage.setItem('token', token)
    localStorage.setItem('idUser', id.toString())
    // eslint-disable-next-line dot-notation
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`
    http.defaults.headers.common['Id-User'] = id
  } else {
    removeAuthTokenAndUserID()
  }
}

export const removeAuthTokenAndUserID = (): void => {
  localStorage.setItem('token', '')
  localStorage.setItem('idUser', '')
  // eslint-disable-next-line dot-notation
  delete http.defaults.headers.common['Authorization']
  delete http.defaults.headers.common['Id-User']
}

export default http
