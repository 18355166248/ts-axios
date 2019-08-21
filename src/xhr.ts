import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'

function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType } = config

    const Xml = new XMLHttpRequest()

    if (responseType) {
      Xml.responseType = responseType
    }

    Xml.open(method.toUpperCase(), url, true)

    Xml.onreadystatechange = function handleLoad() {
      if (Xml.readyState !== 4) return reject(Xml)

      const responseHeaders = Xml.getAllResponseHeaders()
      const responseData = responseType !== 'text' ? Xml.response : Xml.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: Xml.status,
        statusText: Xml.statusText,
        headers: responseHeaders,
        config,
        request: Xml
      }
      resolve(response)
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content type') {
        delete headers[name]
      } else {
        Xml.setRequestHeader(name, headers[name])
      }
    })

    Xml.send(data)
  })
}

export default xhr
