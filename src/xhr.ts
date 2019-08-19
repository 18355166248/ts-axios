import { AxiosRequestConfig } from './types'
import { request } from 'http'

function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config

  const Xml = new XMLHttpRequest()

  Xml.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content type') {
      delete headers[name]
    } else {
      Xml.setRequestHeader(name, headers[name])
    }
  })

  Xml.send(data)
}

export default xhr
