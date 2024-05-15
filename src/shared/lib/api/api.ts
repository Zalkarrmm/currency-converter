import axios, { InternalAxiosRequestConfig } from "axios"
const BASE_URL = 'https://v6.exchangerate-api.com/v6/2a2b3d1423ed96cc5053585f/'

export const APIRoutesBase = {
  CURRENCIES: '/currencies',
  LATEST: '/latest',
  CONVERT: '/pair'
}

const $api = axios.create({
  baseURL: BASE_URL,
})

$api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers['Content-Type'] = 'application/json'
  return config
})
  
export default $api