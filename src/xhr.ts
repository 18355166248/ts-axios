import { AxiosRequestConfig } from './types'
import { request } from 'http'

function xhr(config: AxiosRequestConfig): void {
  // Todo
  const { data = null, url, method = 'get' } = config

  const Xml = new XMLHttpRequest()

  Xml.open(method.toUpperCase(), url, true)

  Xml.send(data)
}

export default xhr
