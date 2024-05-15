import axios, { InternalAxiosRequestConfig } from "axios"

export const app_id = '1a2befa07b5741b2993bb422d6110ca1'

const BASE_URL = 'https://openexchangerates.org/api/'

export const APIRoutesBase = {
  CURRENCIES: '/currencies',
  LATEST: '/latest',
  CONVERT: '/convert'
}

const $api = axios.create({
  baseURL: BASE_URL,
})

$api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers['Content-Type'] = 'application/json'
  return config
})
  
export default $api