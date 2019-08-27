import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'

function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config

    const Xml = new XMLHttpRequest()

    if (responseType) {
      Xml.responseType = responseType
    }

    // 超时
    if (timeout) {
      Xml.timeout = timeout
    }

    Xml.open(method.toUpperCase(), url, true)

    Xml.onreadystatechange = function handleLoad() {
      if (Xml.readyState !== 4 || Xml.status === 0) return

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
      handleResponse(response)
    }

    Xml.onerror = function handleError() {
      reject(new Error('Network Error'))
    }

    Xml.ontimeout = function handleTimeout() {
      reject(new Error(`Timeout of ${timeout}ms exceeded`))
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content type') {
        delete headers[name]
      } else {
        Xml.setRequestHeader(name, headers[name])
      }
    })

    Xml.send(data)

    function handleResponse(response: AxiosResponse) {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(new Error(`Requset failed with status code ${response.status}`))
      }
    }
  })
}

export default xhr
