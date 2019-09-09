import axios, { AxiosError } from '../../src'
import { AxiosError } from '../../src/helpers/error';

axios({
  method: 'get',
  url: '/error/get',
  params: {
    foo: ['bar', 'baz']
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

axios({
  method: 'get',
  url: '/error/get1',
  params: {
    foo: ['bar', 'baz']
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000,
  params: {
    a: 1
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/timeout',
    params: {
      a: 1
    }
  })
    .then(res => {
      console.log(res)
    })
    .catch((err: AxiosError) => {
      console.log(err.message)
      console.log(err.isAxiosError)
      console.log(err.config)
      console.log(err.code)
      console.log(err.request)
      console.log(err.response)
    })
}, 5000)

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/timeout',
    params: {
      a: 1
    },
    timeout: 2000
  })
    .then(res => {
      console.log(res)
    })
    .catch((err: AxiosError) => {
      console.log(err.message)
      console.log(err.isAxiosError)
      console.log(err.config)
      console.log(err.code)
      console.log(err.request)
      console.log(err.response)
    })
}, 5000)
