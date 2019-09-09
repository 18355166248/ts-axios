import { AxiosPromise, AxiosRequestConfig } from "../types"
import dispatchRequest from './dispatchRequest'

export default class Axios{
  request(config: AxiosRequestConfig): AxiosPromise {
    return dispatchRequest(config)
  }

  get(url: string, config: AxiosRequestConfig)
}