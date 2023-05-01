import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { setCookie, destroyCookie, parseCookies } from 'nookies'

interface MyConfig extends AxiosRequestConfig {
  baseURL: string;
  timeout?: number;
}

function createAxios(config: MyConfig): AxiosInstance {
  const http = axios.create(config)

  http.interceptors.request.use((config) => {
    const cookies = parseCookies()
    const token = cookies.token
    const userID = cookies.userID

    if (token) {
      // eslint-disable-next-line dot-notation
      config.headers['Authorization'] = `Bearer ${token}`
      config.headers['user-id'] = userID
    }

    return config
  })

  return http
}

const http = createAxios({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const setAuthTokenAndUserID = (token: string, id: string): void => {
  if (token) {
    setCookie(null, 'token', token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })

    setCookie(null, 'userID', id, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })

    // eslint-disable-next-line dot-notation
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`
    http.defaults.headers.common['user-id'] = id
  } else {
    removeAuthTokenAndUserID()
  }
}

export const removeAuthTokenAndUserID = (): void => {
  const cookies = parseCookies(null)

  Object.keys(cookies).forEach((cookieName) => {
    destroyCookie(null, cookieName)
  })

  // eslint-disable-next-line dot-notation
  delete http.defaults.headers.common['Authorization']
  delete http.defaults.headers.common['user-id']
}

export default http
